import { deg, hoursDeg } from "../const/const";
import { IAditionalInfo } from "../types/IAditionalInfo";
import { ITime } from "../types/ITimes";

function currentTime(
  setTime: React.Dispatch<React.SetStateAction<ITime>>,
  additionalInfo: React.MutableRefObject<IAditionalInfo>
) {
  const { dateTimeToServer, secondAfterFetch } = additionalInfo.current;
  const dateNowToUnix = Math.round(Number(new Date()) / 1000);
  const secondForFetch = dateNowToUnix - secondAfterFetch;
  setTime({
    hour:
      (dateTimeToServer.getHours() + Math.floor(secondForFetch / 3600)) *
      hoursDeg,
    min:
      (dateTimeToServer.getMinutes() + Math.floor(secondForFetch / 60)) * deg,
    sec: (dateTimeToServer.getSeconds() + secondForFetch) * deg,
  });
}

export default currentTime;
