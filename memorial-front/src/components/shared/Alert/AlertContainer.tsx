import React, {FC} from "react";
import Alert from "./alert";

export const AlertList: FC<{
  alerts: {
    id: string,
    status: string,
    message: string
  }[]
}> = ({alerts}) => {
  return (
    <div style={{position: 'fixed', top: '20px', right: '20px', zIndex: 1000}}>
      {alerts.map(
        (alert) => (
          <Alert message={alert.message} status={alert.status} id={alert.id}/>
        ))}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};