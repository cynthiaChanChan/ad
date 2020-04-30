import styles from "./PlatformCard.module.scss";
import { PlatformData } from "../Platform/Platform.data";

type PlatformCardProps = {
    product: PlatformData;
};

const PlatformCard = ({
    product: { title, content, img },
}: PlatformCardProps) => {
    return (
        <div className={styles.box}>
            <div className={`${styles.container} container`}>
                <div className={styles.productImg}>
                    <img src={img} alt="product image" />
                </div>
                <div className={styles.content}>
                    <h3>
                        <span>{title}</span>
                    </h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default PlatformCard;
