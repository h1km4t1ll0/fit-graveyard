import {FC} from "react";

const Button: FC<{
  handleSupportClick: () => void,
  supportCount: number,
  text: string,
  emoji: string
}> = ({handleSupportClick, supportCount, text, emoji}) => (
  <button
    onClick={handleSupportClick}
    style={{
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '4px',
      width: '100%',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '1.2rem',
      padding: '0.75rem 1.5rem',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    <span role="img" aria-label="heart">{emoji}</span> {supportCount} {text}
  </button>
);

export default Button;
