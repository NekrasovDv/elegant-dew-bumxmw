import React from "react";
import useGetDate from "../hooks/useGetDate";
import reloadHandler from "../lib/reloadHandler";
import style from "./Watch.module.css";

const Watch = () => {
  const { time, isLoading, error } = useGetDate();

  return (
    <>
      {error ? (
        <div className={style.error}>
          <p>Что-то пошло не так</p>
          <button onClick={reloadHandler}>Перезагрузить страницу</button>
        </div>
      ) : (
        <div className={style.watch}>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            <div className={style.clock}>
              <div className={style.hour}>
                <div
                  className={style.hours}
                  style={{
                    transform: `rotateZ(${time?.hour + time?.min / 12}deg)`,
                  }}
                />
              </div>
              <div className={style.minute}>
                <div
                  className={style.minutes}
                  style={{ transform: `rotateZ(${time.min}deg)` }}
                />
              </div>
              <div className={style.second}>
                <div
                  className={style.seconds}
                  style={{ transform: `rotateZ(${time.sec}deg)` }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Watch;
