import Heading from "../Heading/Heading";
import styles from "./BoardCard.module.scss";
import { BoardData } from "../Board/Board.data";

type BoardCardProps = {
    product: BoardData;
};

const BoardCard = ({ product: { heading, img } }: BoardCardProps) => {
    return (
        <div className={styles.box}>
            <div className={`${styles.container} container`}>
                <div className={styles.productImg}>
                    <img src={img} alt="product image" />
                </div>
                <div className={styles.content}>
                    <Heading heading={heading} />
                </div>
            </div>
        </div>
    );
};

export default BoardCard;
