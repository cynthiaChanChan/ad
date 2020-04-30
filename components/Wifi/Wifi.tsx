import Heading from "../Heading/Heading";
import wifiListData, { sectionHeading } from "./Wifi.data";
import WifiCard from "../WifiCard/WifiCard";
import styles from "./Wifi.module.scss";

type WifiProps = {
    pageHeading: string;
};

const Wifi = ({ pageHeading }: WifiProps) => {
    return (
        <div className={styles.board}>
            <div className={`${styles.container} container`}>
                <Heading
                    heading={sectionHeading}
                    attribute="border"
                    className={pageHeading}
                />
            </div>
            {wifiListData.map(
                (item, index): React.ReactNode => (
                    <WifiCard product={item} key={index} />
                )
            )}
        </div>
    );
};

export default Wifi;
