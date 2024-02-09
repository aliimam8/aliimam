'use client';

export default function Home() {

  return (
    <main className="mt-4">
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/021.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/022.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/023.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/024.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/025.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/026.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/027.mp4" />
            </video>
            <video muted controls>
              <source width='auto' height={320} src="/videos/vid/028.mp4" />
            </video>
        </div>
      </div>
    </main>
  );
}
