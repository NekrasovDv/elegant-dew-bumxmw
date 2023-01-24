import { deg, hoursDeg } from "../const/const";
import { IAditionalInfo } from "../types/IAditionalInfo";
import { ITime } from "../ui/Watch";
import fetchDate from "./fetchdata";

function currentTimeServer(
  setTime: React.Dispatch<React.SetStateAction<ITime>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  additionalInfo: React.MutableRefObject<IAditionalInfo>
) {
  const res = fetchDate();
  res.then((data) => {
    const datetime = new Date(data.datetime);
    additionalInfo.current.dateTimeToServer = new Date(data.datetime);
    additionalInfo.current.secondAfterFetch = Math.round(
      Number(new Date()) / 1000
    );
    setTime({
      hour: datetime.getHours() * hoursDeg,
      min: datetime.getMinutes() * deg,
      sec: datetime.getSeconds() * deg,
    });
    additionalInfo.current.timerId = 1;
    setIsLoading(false);
  });
}

export default currentTimeServer;
