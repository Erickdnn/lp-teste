export const metadata = {
  title: 'LP Única',
  description: 'Landing page minimalista sem agendamento',
};

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      color: '#f1f5f9',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '36px', fontWeight: 700 }}>LP Única</h1>
    </div>
  );
}