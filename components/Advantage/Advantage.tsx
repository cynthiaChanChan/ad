import styles from "./Advantage.module.scss";
import { AdvantageItem } from "../Advantages/Advantages.data";

type AdvantageProps = {
    advantage: AdvantageItem;
};

const Advantage = ({ advantage: { icon, title, content } }: AdvantageProps) => {
    return (
        <li className={styles.advantage}>
            <div className={styles.iconBox}>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles.contentBox}>
                <h4 className={styles.heading}>{title}</h4>
                <p className={styles.paragraph}>{content}</p>
            </div>
        </li>
    );
};

export default Advantage;
