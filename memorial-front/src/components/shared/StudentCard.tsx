import Button from "./Button";
import {FC} from "react";

const getStudentStatusWithEmoji = (status?: "DROPPED" | "ALIVE" | "UNKNOWN" | "BAD") => {

  if (status === 'DROPPED') {
    return (<b style={{color: 'red'}}>Ликвидирован</b>);
  }

  if (status === 'ALIVE') {
    return (<b style={{color: 'green'}}>Держится</b>);
  }

  if (status === 'BAD') {
    return (<b style={{color: 'rgba(201,164,29,0.73)'}}>В тяжелом состоянии</b>);
  }

  return (<b style={{color: 'gray'}}>Неизвестно...</b>);
}

const StudentCard: FC<{
  id: number,
  name: string[],
  image: string,
  dates: {
    from: string,
    to: string
  },
  additionalText?: string,
  supportCount: number,
  candlesCount: number,
  handleButtonClick: (type: 'heart' | 'candle', userId: number) => Promise<void>,
  studentStatus?: "DROPPED" | "ALIVE" | "UNKNOWN" | "BAD",
}> = (
  {
    id,
    name,
    image,
    dates,
    additionalText,
    supportCount,
    candlesCount,
    studentStatus,
    handleButtonClick,
  }
) => (
  <div
    style={{
      backgroundColor: '#f5f5f5',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      textAlign: 'center',
      width: '300px',
      margin: '1.5rem',
      fontFamily: 'Arial, sans-serif',
      animation: 'glow 3s ease-in-out infinite',
    }}
  >
    <img
      src={image}
      alt={name.join(' ')}
      style={{
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '1rem',
      }}
    />
    <h3
      style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 0,
      }}
    >
      {name[0]}
    </h3>
    <h3
      style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 0,
      }}
    >
      {name[1]}
    </h3>
    {dates && (
      <h4>
        ({dates.from} - {dates.to})
      </h4>
    )}
    <h4>
      СТАТУС: {getStudentStatusWithEmoji(studentStatus)}
    </h4>
    {additionalText && <div dangerouslySetInnerHTML={{__html: additionalText}}/>}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'center',
      }}
    >
      <Button
        handleSupportClick={() => handleButtonClick('heart', id)}
        supportCount={supportCount}
        text="Поддержать!"
        emoji="❤️"
      />
      <Button
        handleSupportClick={() => handleButtonClick('candle', id)}
        supportCount={candlesCount}
        text="Поставить свечку..."
        emoji="🕯️"
      />
    </div>
  </div>
);

export default StudentCard;