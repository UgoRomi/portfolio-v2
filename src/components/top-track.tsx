import querystring from 'querystring';
import { get } from '@vercel/edge-config';
import {
  SpotifyAccessTokenResponse,
  SpotifyTopTracksResponse,
} from '@/types/spotify';
import Box from './box';
import SpotifyIcon from './icons/spotify';

async function getAccessToken() {
  try {
    const refreshToken = await get('spotify-refresh-token');
    if (!refreshToken || typeof refreshToken !== 'string') return;

    // Get the spotify access token
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
      next: { revalidate: 1800 },
    });

    // Get the access token with types respnse
    const { access_token, refresh_token } = SpotifyAccessTokenResponse.parse(
      await response.json()
    );

    if (refresh_token) {
      try {
        fetch(process.env.EDGE_CONFIG_API, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: [
              {
                operation: 'update',
                key: 'spotify-refresh-token',
                value: refresh_token,
              },
            ],
          }),
        });
      } catch (error) {}
    }

    return access_token;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTrack(accessToken: string) {
  const topTrackResponse = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?limit=1',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    }
  );
  if (!topTrackResponse.ok) return null;
  const response = await topTrackResponse.json();
  const parsedResponse = SpotifyTopTracksResponse.parse(await response);
  const topTrack = parsedResponse.items[0];

  const name = topTrack.name;
  const artist = topTrack.artists.map((_artist) => _artist.name).join(', ');
  const songUrl = topTrack.external_urls.spotify;

  return {
    name,
    artist,
    songUrl,
  };
}

export default async function TopTrack() {
  const accessToken = await getAccessToken();
  if (!accessToken) return null;
  const topTrack = await getTopTrack(accessToken);
  if (!topTrack) return null;
  return (
    <Box
      className='col-span-6 bg-stone-200 text-stone-800 lg:col-span-4'
      icon={<SpotifyIcon className='h-12 w-12' />}
    >
      Currently listening to{' '}
      <a
        className='cursor-fancy font-bold text-[#1ed760] underline decoration-stone-800 decoration-wavy underline-offset-4'
        href={topTrack.songUrl}
        target='_blank'
      >
        {topTrack.name}
      </a>
    </Box>
  );
}
