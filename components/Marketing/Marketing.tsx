import Heading from "../Heading/Heading";
import MarketingCard from "../MarketingCard/MarketingCard";

import marketingListData, {
    sectionHeading,
    secheduleListData,
    SecheuleData,
} from "./Marketing.data";

import styles from "./Marketing.module.scss";
import { platform } from "os";

type BoardProps = {
    pageHeading: string;
};

type ScheduleProps = {
    sechedule: SecheuleData;
};

const Schedule = ({ sechedule: { title, subtitle, list } }: ScheduleProps) => {
    return (
        <li className={styles.sechedule}>
            <h3>
                {title}
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                >
                    <polygon points="36.213,461.213 461.213,461.213 461.213,36.213" />
                    <path d="M476.213,476.213H0L476.213,0V476.213z M72.427,446.213h373.787V72.427L72.427,446.213z" />
                </svg>
            </h3>
            <div className={styles.detail}>
                <div className={styles.detailContent}>
                    {subtitle && <p>{subtitle}</p>}
                    <ol>
                        {list.map(
                            (item, index): React.ReactNode => (
                                <li key={index}>{item}</li>
                            )
                        )}
                    </ol>
                </div>
                <img src="./arrow_right.png" alt="arrow" />
            </div>
        </li>
    );
};

const Marketing = ({ pageHeading }: BoardProps) => {
    return (
        <div className={styles.marketing}>
            <div className={`${styles.container} container`}>
                <Heading
                    heading={sectionHeading}
                    attribute="border"
                    className={pageHeading}
                />
            </div>
            <div className={styles.scheduleList}>
                <ul className={`${styles.container} container`}>
                    {secheduleListData.map(
                        (sechedule, index): React.ReactNode => (
                            <Schedule sechedule={sechedule} key={index} />
                        )
                    )}
                </ul>
            </div>
            {marketingListData.map(
                (item, index): React.ReactNode => (
                    <MarketingCard product={item} key={index} />
                )
            )}
        </div>
    );
};

export default Marketing;
