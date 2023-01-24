import React, { useEffect, useRef, useState } from "react";
import useGetDate from "../hooks/useGetDate";
import currentTime from "../lib/currentTime";
import currentTimeServer from "../lib/CurrentTimeServer";
import style from "./Watch.module.css";

export interface ITime {
  hour: number;
  min: number;
  sec: number;
}

const Watch = () => {
  const { time, isLoading } = useGetDate();

  return (
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
  );
};

export default Watch;
