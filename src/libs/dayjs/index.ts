import "dayjs/locale/pt-br"; // import locale
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone"; // import locale
import duration from "dayjs/plugin/duration"; // import locale

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(duration);

dayjs.locale("pt-br"); // use locale
dayjs.tz.setDefault("America/Sao_Paulo");

export { dayjs };
