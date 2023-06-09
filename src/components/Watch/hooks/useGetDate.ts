import { useState, useRef, useEffect } from "react";
import currentTime from "../lib/currentTime";
import currentTimeServer from "../lib/CurrentTimeServer";
import { IAditionalInfo } from "../types/IAditionalInfo";
import { ITime } from "../ui/Watch";

function useGetDate() {
  const [time, setTime] = useState<ITime>({ min: 0, hour: 0, sec: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const additionalInfo = useRef<IAditionalInfo>({
    timerId: 0,
    dateTimeToServer: new Date(),
    secondAfterFetch: 0,
  });

  useEffect(() => {
    if (!additionalInfo.current.timerId) {
      setIsLoading(true);
      currentTimeServer(setTime, setIsLoading, additionalInfo);
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
  };
}

export default useGetDate;
