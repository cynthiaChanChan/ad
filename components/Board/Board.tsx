import Heading from "../Heading/Heading";
import boardListData, { sectionHeading } from "../Board/Board.data";
import BoardCard from "../BoardCard/BoardCard";
import styles from "./Board.module.scss";

type BoardProps = {
    pageHeading: string;
};

const Board = ({ pageHeading }: BoardProps) => {
    return (
        <div className={styles.board}>
            <div className={`${styles.container} container`}>
                <Heading
                    heading={sectionHeading}
                    attribute="border"
                    className={pageHeading}
                />
            </div>
            {boardListData.map(
                (item, index): React.ReactNode => (
                    <BoardCard product={item} key={index} />
                )
            )}
        </div>
    );
};

export default Board;
