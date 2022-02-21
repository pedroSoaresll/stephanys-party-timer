import type { NextPage } from "next";
import { useMissingDate } from "../src/hooks/timer";
import styles from "../styles/Home.module.scss";

const TARGET_DATE = "2022-02-26";

const RenderMissingDate = () => {
  const { dateInfo, dayMissing } = useMissingDate({
    targetDateString: TARGET_DATE,
  });

  return (
    <>
      <p className={styles.date}>{dateInfo}</p>
      <p className={styles.day_description}>{dayMissing}</p>
    </>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          <strong>Stephany&apos;s party!</strong>
          <RenderMissingDate />
        </h1>
      </div>
    </div>
  );
};

export default Home;
