import {FC, useCallback, useEffect, useState} from "react";
import Header from "./Header";
import Body, {Student} from "./Body";
import Footer from "./Footer";
import '../index.css';
import AnimatedBackground from "./shared/AnimatedBackground";
import {useStore} from "./store/useStore";
import {observer} from "mobx-react-lite";
import Spin from "./shared/Spin";
import axios from "axios";
import {useAlert} from "./shared/Alert";
import React from 'react';

const MainPage: FC = () => {
  const store = useStore();
  const [loading, setLoading] = useState<boolean>(true);

  const refetch = useCallback(async () => {
    await store.fetchData();
    setLoading(false);
  }, [store]);

  const alert = useAlert();

  const handleButtonClick = useCallback(
    async (type: "heart" | "candle", userId: number) => {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/custom/add/${type}/${userId}`);

      if (res.data.code === 200) {
        await refetch();

        if (type == 'candle') {
          alert.show({
            status: 'success',
            message: '🕯️ Вы поставили свечку...'
          });
        } else {
          alert.show({
            status: 'success',
            message: '❤️ Вы поддержали пострадавшего!'
          });
        }
        console.log('Пользователь обновлен');
      } else {
        alert.show({status: 'error', message: 'Произошла ошибка!'});
        console.error(res.data.message);
      }

    }, [alert, refetch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch().catch(
        (err) => console.error(err),
      );
    }, 2000);

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    }
  }, [refetch, store, store.fetchData]);

  if (loading) {
    return (
      <div>
        <AnimatedBackground/>
        <Spin/>
      </div>
    );
  }

  return (
    <div>
      <Header
        header={store.header as string}
        body={store.headerBody as string}
      />
      <Body
        students={store.students as Student[]}
        handleButtonClick={handleButtonClick}
      />
      <Footer text={store.footer as string}/>
    </div>

  );
};

export default observer(MainPage);
