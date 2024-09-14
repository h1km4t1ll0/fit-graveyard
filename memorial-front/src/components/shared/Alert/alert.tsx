import React, {FC} from 'react';
import './alert.css';

const Alert: FC<{
  message: string,
  id: string,
  status: string
}> = ({message, id, status}) => {
  return (
    <div id={id} className={`alert-container ${status}`}>
      <div className="alert-message">
        {message}
      </div>
    </div>
  );
};

export default Alert;
