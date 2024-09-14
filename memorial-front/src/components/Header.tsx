import {FC} from "react";

const Header: FC<{ header: string; body: string }> = ({header, body}) => {
  return (
    <header
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'transparent',
        // padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        // fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h1
        style={{
          color: '#fff',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 1)', // Enhanced glow effect
          marginBottom: '1rem',
        }}
      >
        {header}
      </h1>
      <p
        style={{
          color: '#fff',
          fontSize: '1.5rem',
          fontWeight: 'normal',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 1)', // Enhanced glow effect
        }}
      >
        {body}
      </p>
    </header>
  );
};

export default Header;
