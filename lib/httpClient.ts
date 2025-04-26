import ky from "ky";

const httpClient = ky.create({
  prefixUrl: process.env.EXPO_PUBLIC_YOUTUBE_API_URL,
});

export type HttpClient = typeof httpClient;

export default httpClient;
