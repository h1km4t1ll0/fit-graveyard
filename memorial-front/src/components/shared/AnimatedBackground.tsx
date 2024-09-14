const AnimatedBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#000',
        zIndex: -1,
      }}
    >
      {[...Array(200)].map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: `${Math.random() * 3 + 1}px`, // Random width for stars
            height: `${Math.random() * 3 + 1}px`, // Random height for stars
            backgroundColor: '#fff',
            animation: 'twinkle 5s linear infinite, move 10s linear infinite',
            animationDelay: `${Math.random() * 5}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateZ(${Math.random() * 100}px)`, // Simulate depth
          }}
        />
      ))}
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: `${Math.random() * 2 + 1}px`, // Smaller stars
            height: `${Math.random() * 2 + 1}px`,
            backgroundColor: '#fff',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: 'twinkle 10s linear infinite',
            animationDelay: `${Math.random() * 10}s`,
            transform: `translateZ(${Math.random() * 50}px)`, // Simulate depth
          }}
        />
      ))}
      <style>{`
        @keyframes move {
          0% {
            transform: translateY(0) translateZ(0);
          }
          100% {
            transform: translateY(-100vh) translateZ(0);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
