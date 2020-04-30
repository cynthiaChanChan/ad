import Heading from "../Heading/Heading";
import platformListData, { sectionHeading } from "../Platform/Platform.data";
import PlatformCard from "../PlatformCard/PlatformCard";
import styles from "./Platform.module.scss";

type BoardProps = {
    pageHeading: string;
};

const Platform = ({ pageHeading }: BoardProps) => {
    return (
        <div className={styles.board}>
            <div className={`${styles.container} container`}>
                <Heading
                    heading={sectionHeading}
                    attribute="border"
                    className={pageHeading}
                />
            </div>
            {platformListData.map(
                (item, index): React.ReactNode => (
                    <PlatformCard product={item} key={index} />
                )
            )}
        </div>
    );
};

export default Platform;
