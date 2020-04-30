import { ServiceItem } from "../Banner/Banner.data";
import styles from "./Card.module.scss";

type CardProps = {
    card: ServiceItem;
};

const Card = ({ card: { imgUrl, title } }: CardProps) => (
    <div className={styles.card}>
        <div className={styles.imgBox}>
            <img src={imgUrl} alt="icon" />
        </div>
        <div className={styles.line} />
        <h3 className={styles.heading}>{title}</h3>
    </div>
);

export default Card;
