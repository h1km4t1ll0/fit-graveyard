import {FC} from "react";

const Footer: FC<{ text: string }> = ({text}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
      textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 1)', // Enhanced glow effect

      zIndex: 1,
      // fontFamily: 'Poppins, sans-serif',
    }}>
      <p
        style={{
          color: '#fff',
          fontSize: '1.5rem',
          fontWeight: 'normal',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Footer;
