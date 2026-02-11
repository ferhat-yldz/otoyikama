import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BETSAN OTO YIKAMA';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0f172a, #0ea5e9)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        fontSize: 128,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    }}
                >
                    BETSAN
                </div>
                <div style={{ fontSize: 48, fontWeight: 'normal', opacity: 0.9 }}>
                    OTO YIKAMA
                </div>
                <div
                    style={{
                        marginTop: 40,
                        fontSize: 24,
                        opacity: 0.8,
                        background: 'rgba(255,255,255,0.1)',
                        padding: '12px 24px',
                        borderRadius: 50,
                    }}
                >
                    malatyaotoyikama.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
