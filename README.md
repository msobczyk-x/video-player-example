# React Native Video Player Example

This project is made for learning and testing capabilities of react-native-video library and YouTube API Data v3.

## Preview
https://github.com/user-attachments/assets/7629b9d4-9ed8-4c4f-a1d5-69d823e0c923

See other videos and screenshots [here](https://github.com/msobczyk-x/video-player-example/tree/main/docs)

## Get started

1. Install dependencies

   ```bash
   bun install
   ```

2. Use expo prebuild (some of the dependencies might not be compatible with Expo Go, so this step is required)

   ```bash
    bunx expo prebuild
   ```

3. (IOS only) Replace those lines in `ios/Podfile`

```ruby
post_install do |installer|
    react_native_post_install(
      installer,
      config[:reactNativePath],
      :mac_catalyst_enabled => false,
      :ccache_enabled => podfile_properties['apple.ccacheEnabled'] == 'true',
    )
    ###########################
    #This line is added to fix deployment target issue of react-native-unistyles
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = podfile_properties['ios.deploymentTarget'] || '15.1'
        end
    end
    ###########################
    # This is necessary for Xcode 14, because it signs resource bundles by default
    # when building for devices.
    installer.target_installation_results.pod_target_installation_results
      .each do |pod_name, target_installation_result|
      target_installation_result.resource_bundle_targets.each do |resource_bundle_target|
        resource_bundle_target.build_configurations.each do |config|
          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
        end
      end
    end
  end
```

4. (IOS only) Run this command to trigger post_install:

```bash
cd ios & pod install & cd ..
```

5. Build the development build

6. Run the development server

```bash
bunx expo start
```

### Core dependencies

- Expo ecosystem
- react-native-video
- react-native-mmkv
- @shopify/flash-list
- react-native-unistyles
