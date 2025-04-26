import type { HttpClient } from "@/lib/httpClient";

export type FetchPlaylistParams = {
  playlistId: string;
};

export default async function fetchPlaylist(
  httpClient: HttpClient,
  params: FetchPlaylistParams,
) {
  const result = await httpClient.get(`/playlists/${params.playlistId}`).json();
  return result;
}
