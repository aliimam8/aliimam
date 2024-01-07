export type Views = {
  views: number
}

export type Likes = {
  likes: number
  currentUserLikes: number
}

export type Message = {
  id: number
  body: string
  image: string
  created_by: string
  updated_at: Date
}

export type Artist = {
  id: string;
  name: string;
  type: string;
  href: string;
};

export type TrackInfo = { artists: Artist[]; external_urls: { spotify: string }; name: string };

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export const nowPlayingEmptyState: NowPlayingSong = {
  album: '',
  albumImageUrl: '',
  artist: '',
  isPlaying: false,
  songUrl: '',
  title: '',
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type YouTube = {
  subscribers: number
  views: number
}

export type Github = {
  stars: number
  followers: number
}

export type Wakatime = {
  seconds: number
}

export type Analytics = {
  visitors: number
}
