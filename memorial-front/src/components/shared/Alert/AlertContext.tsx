import {createContext, FC, ReactNode, useContext, useState} from 'react';
import {AlertList} from "./AlertContainer";


const AlertContext = createContext<{
  show: ({status, message}: { status: string, message: string }) => void
}>({show: () => console.error('Не задан контекст для алертов!')});

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider: FC<{ children: ReactNode | undefined }> = ({children}) => {
  const [alerts, setAlerts] = useState<{ id: string, status: string, message: string }[]>([]);

  const show = ({status, message}: { status: string, message: string }) => {
    const id = `${Date.now()}-${crypto.randomUUID()}`;
    const newAlert = {id, status, message};
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{show}}>
      {children}
      <AlertList alerts={alerts}/>
    </AlertContext.Provider>
  );
};
