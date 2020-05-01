import styles from "./WifiCard.module.scss";
import { WifiData } from "../Wifi/Wifi.data";

type WifiCardProps = {
    product: WifiData;
};

const WifiCard = ({
    product: { title, content, img, isImgSmall },
}: WifiCardProps) => {
    return (
        <div className={styles.box}>
            <div className={`${styles.container} container`}>
                <div
                    className={`${styles.productImg} ${
                        isImgSmall ? styles.small : ""
                    }`}
                >
                    <img src={img} alt="product image" />
                </div>
                <div className={styles.content}>
                    <h3>
                        <span>{title}</span>
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
            </div>
        </div>
    );
};

export default WifiCard;
