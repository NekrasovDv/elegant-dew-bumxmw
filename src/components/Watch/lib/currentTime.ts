import { deg, hoursDeg } from "../const/const";
import { IAditionalInfo } from "../types/IAditionalInfo";
import { ITime } from "../ui/Watch";

function currentTime(
  setTime: React.Dispatch<React.SetStateAction<ITime>>,
  additionalInfo: React.MutableRefObject<IAditionalInfo>
) {
  const dateNowToUnix = Math.round(Number(new Date()) / 1000);
  const secondForFetch =
    dateNowToUnix - additionalInfo.current.secondAfterFetch;
  setTime({
    hour:
      (additionalInfo.current.dateTimeToServer.getHours() +
        Math.floor(secondForFetch / 3600)) *
      hoursDeg,
    min:
      (additionalInfo.current.dateTimeToServer.getMinutes() +
        Math.floor(secondForFetch / 60)) *
      deg,
    sec:
      (additionalInfo.current.dateTimeToServer.getSeconds() + secondForFetch) *
      deg,
  });
}

export default currentTime;
