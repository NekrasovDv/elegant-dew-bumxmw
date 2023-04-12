import { deg, hoursDeg } from "../const/const";
import { IAditionalInfo } from "../types/IAditionalInfo";
import { ITime } from "../types/ITimes";
import fetchDate from "./fetchdata";

function currentTimeServer(
  setTime: React.Dispatch<React.SetStateAction<ITime>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  additionalInfo: React.MutableRefObject<IAditionalInfo>
) {
  const res = fetchDate();
  res
    .then((data) => {
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
      setIsLoading(false);
      additionalInfo.current.timerId = 1;
    })
    .catch((err) => {
      //ToDo from Prod
      // setError(true)
    });
}

export default currentTimeServer;
