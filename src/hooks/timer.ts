import { useCallback, useEffect, useState } from "react";
import { dayjs } from "../libs";

interface UseMissingDateParams {
  targetDateString: string;
}

export const useMissingDate = ({ targetDateString }: UseMissingDateParams) => {
  const [dateInfo, setDateInfo] = useState<string>();
  const [dayMissing, setDayMissing] = useState<string>()

  const missingDate = useCallback(() => {
    const now = dayjs();

    if (now.isSame(targetDateString)) return "É hoje rapaizes";
    if (now.isAfter(targetDateString)) return "Rolê acabou migs";

    const targetDate = dayjs(targetDateString);

    setDayMissing(now.to(targetDate))

    const dateMissing = dayjs(targetDate.diff(now, "date"));
    const duration = dayjs.duration(targetDate.diff(now));

    

    return `${Math.trunc(duration.asHours())}:${dateMissing.format("mm:ss")}`;
  }, [targetDateString]);

  useEffect(() => {
    setDateInfo(missingDate());

    const timer = setInterval(() => {
      setDateInfo(missingDate());
    }, 1000);

    return () => clearInterval(timer);
  }, [missingDate]);

  return { dateInfo, dayMissing };
};
