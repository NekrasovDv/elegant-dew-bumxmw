import { useState, useRef, useEffect } from "react";
import currentTime from "../lib/currentTime";
import currentTimeServer from "../lib/currentTimeServer";
import { IAditionalInfo } from "../types/IAditionalInfo";
import { ITime } from "../types/ITimes";

function useGetDate() {
  const [time, setTime] = useState<ITime>({ min: 0, hour: 0, sec: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const additionalInfo = useRef<IAditionalInfo>({
    timerId: 0,
    dateTimeToServer: new Date(),
    secondAfterFetch: 0,
  });

  useEffect(() => {
    if (!additionalInfo.current.timerId) {
      setIsLoading(true);
      currentTimeServer(setTime, setIsLoading, setError, additionalInfo);
    } else {
      additionalInfo.current.timerId = setTimeout(
        () => currentTime(setTime, additionalInfo),
        1000
      );
    }
    return () => {
      clearTimeout(additionalInfo.current.timerId);
    };
  }, [time]);

  return {
    time,
    isLoading,
    error,
  };
}

export default useGetDate;
