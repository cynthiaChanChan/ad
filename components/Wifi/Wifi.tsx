import Heading from "../Heading/Heading";
import wifiListData, { sectionHeading } from "./Wifi.data";
import WifiCard from "../WifiCard/WifiCard";
import styles from "./Wifi.module.scss";

type WifiProps = {
    pageHeading: string;
};

const Wifi = ({ pageHeading }: WifiProps) => {
    return (
        <div className={styles.wifi}>
            <div className={`${styles.container} container`}>
                <Heading
                    heading={sectionHeading}
                    attribute="border"
                    className={pageHeading}
                />
            </div>
            <div className={styles.card}>
                <div className={`${styles.container} container`}>
                    <div className={styles.productImg}>
                        <img src="i-wifi.png" alt="wifi" />
                    </div>
                    <ul className={styles.wifiInfo}>
                        <li>
                            <span className={styles.highlight}>媒体格式：</span>
                            <span>jpg</span>
                        </li>
                        <li>
                            <span className={styles.highlight}>安装位置：</span>
                            <span>
                                驾校内训练场、教学楼计时大厅、法培教室、休息室、餐厅等学员集中区域
                            </span>
                        </li>
                        <li>
                            <span className={styles.highlight}>上线频次：</span>
                            <span>
                                2次/天/单个号码{" "}
                                <span className={styles.newLine}>
                                    接入时长：120分钟/次
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
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
