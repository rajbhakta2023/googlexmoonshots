export default function Simple() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0c0a09', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Moonshot Memos
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Six radical ideas presented for the Google X Rapid Evaluation Team, designed to solve some of the world's most pressing problems with breakthrough technology.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/polymath" style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Project Polymath
        </a>
        <a href="/nimbus" style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Project Nimbus
        </a>
        <a href="/axon" style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Project Axon
        </a>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
        <a href="/hatch" style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Project Hatch
        </a>
        <a href="/reveel" style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Project Reveel
        </a>
        <a href="/w-health" style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Project W-Health
        </a>
      </div>
    </div>
  );
}