import { z } from 'zod';

export const SpotifyAccessTokenResponse = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
  refresh_token: z.string().optional(),
  scope: z.string(),
});

export type SpotifyAccessTokenResponse = z.infer<
  typeof SpotifyAccessTokenResponse
>;

export const SpotifyTopTracksResponse = z.object({
  items: z.array(
    z.object({
      name: z.string(),
      external_urls: z.object({
        spotify: z.string(),
      }),
      album: z.object({
        images: z.array(
          z.object({
            url: z.string(),
            height: z.number(),
            width: z.number(),
          })
        ),
      }),
      artists: z.array(
        z.object({
          name: z.string(),
        })
      ),
    })
  ),
});

export type SpotifyTopTracksResponse = z.infer<typeof SpotifyTopTracksResponse>;
