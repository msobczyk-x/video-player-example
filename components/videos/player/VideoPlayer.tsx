import { VIDEO_PLAYER_CONFIG, VIDEO_URL } from "@/constants/video";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import Video from "react-native-video";
import type { VideoRef } from "react-native-video";
import { Overlay } from "./Overlay";
import VideoPlayerControls from "./VideoPlayerControls";
import VideoPlayerFooter from "./VideoPlayerFooter";
import VideoPlayerHeader from "./VideoPlayerHeader";
import { useVideoActions } from "@/services/video/store";

const VideoPlayer = () => {
  const router = useRouter();
  const videoRef = useRef<VideoRef>(null);
  const [showControls, setShowControls] = useState(false);
  const controlTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { setCurrentTime: setTime } = useVideoActions();
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
    }
    showControlsWithTimeout();
  };

  const showControlsWithTimeout = () => {
    if (controlTimeout.current) {
      clearTimeout(controlTimeout.current);
    }
    setShowControls(true);

    controlTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, VIDEO_PLAYER_CONFIG.controlTimeoutDelay);
  };

  const toggleControls = () => {
    if (showControls) {
      setShowControls(false);
      if (controlTimeout.current) {
        clearTimeout(controlTimeout.current);
      }
    } else {
      showControlsWithTimeout();
    }
  };

  const handleTouch = () => {
    toggleControls();
  };

  const togglePlayPause = () => {
    setPaused(!paused);
    showControlsWithTimeout();
  };

  const skipBackward = () => {
    const newTime = Math.max(0, currentTime - VIDEO_PLAYER_CONFIG.skipBackward);
    if (videoRef.current) {
      videoRef.current.seek(newTime);
    }
    setCurrentTime(newTime);
    showControlsWithTimeout();
  };
  const toggleMute = () => {
    setMuted(!muted);
    showControlsWithTimeout();
  };

  const handleBackPress = () => {
    router.back();
  };

  const handleAirPlayPress = () => {
    console.log("AirPlay button pressed");
  };

  const skipForward = () => {
    const newTime = Math.min(
      duration,
      currentTime + VIDEO_PLAYER_CONFIG.skipForward,
    );
    if (videoRef.current) {
      videoRef.current.seek(newTime);
    }
    setCurrentTime(newTime);
    showControlsWithTimeout();
  };

  const onLoad = (data: any) => {
    setDuration(data.duration);
  };

  const onProgress = (data: any) => {
    if (!seeking) {
      const newTime = data.currentTime;
      setCurrentTime(newTime);
      setTime(newTime);
    }
  };

  const onSlidingStart = () => {
    setSeeking(true);
    if (controlTimeout.current) {
      clearTimeout(controlTimeout.current);
    }
  };

  const onSlidingComplete = (value: number) => {
    if (videoRef.current) {
      videoRef.current.seek(value);
    }
    setCurrentTime(value);
    setSeeking(false);
    showControlsWithTimeout();
  };

  useEffect(() => {
    return () => {
      if (controlTimeout.current) {
        clearTimeout(controlTimeout.current);
      }
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.container}>
        <View style={styles.videoWrapper}>
          <Video
            source={{ uri: VIDEO_URL }}
            ref={videoRef}
            style={styles.videoPlayer}
            controls={false}
            onLoad={onLoad}
            onProgress={onProgress}
            paused={paused}
            muted={muted}
          />
        </View>
        {showControls && (
          <>
            <Overlay />
            <VideoPlayerHeader
              muted={muted}
              onMutePress={toggleMute}
              onGoBackPress={handleBackPress}
              onAirPlayPress={handleAirPlayPress}
            />
            <VideoPlayerControls
              paused={paused}
              togglePlayPause={togglePlayPause}
              onSkipForward={skipForward}
              onSkipBackward={skipBackward}
            />
            <VideoPlayerFooter
              currentTime={currentTime}
              duration={duration}
              onToggleFullscreen={toggleFullscreen}
              onSlidingStart={onSlidingStart}
              onSlidingComplete={onSlidingComplete}
            />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create((theme) => ({
  container: {
    width: "100%",
    paddingVertical: theme.padding(3),
    backgroundColor: "#000000",
    position: "relative",
    height: 280,
    zIndex: 10,
  },
  videoWrapper: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  videoPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));
