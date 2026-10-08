import { ImageResponse } from 'next/og';

export const alt =
  'Muhammad Sulton Tauhid — Software Engineer and Full-Stack Web Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: '72px',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#f9fafb',
          color: '#111827',
          border: '18px solid #111827',
        }}
      >
        <div style={{ fontSize: 30, color: '#4b5563' }}>
          SOFTWARE ENGINEER · JAKARTA, INDONESIA
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 30,
            fontSize: 66,
            fontWeight: 700,
            letterSpacing: '-2px',
          }}
        >
          Muhammad Sulton Tauhid
        </div>
        <div style={{ display: 'flex', marginTop: 24, fontSize: 34, color: '#374151' }}>
          Full-Stack Web Developer · React · Django · WebGIS
        </div>
      </div>
    ),
    size,
  );
}
