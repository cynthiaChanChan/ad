import Heading from "../Heading/Heading";
import styles from "./CaseThreeCard.module.scss";
import { CaseThreeCardData } from "../CaseThree/CaseThree.data";
import HeadingWithBorder from "../HeadingWithBorder/HeadingWithBorder";

type CaseThreeCardProps = {
    data: CaseThreeCardData;
    pageHeading: string;
};

type CaseOnePartProps = {
    item: {
        title: string;
        info?: string;
        list?: { title: string; text: string }[];
        img: string;
    };
};

const CaseOnePart = ({
    item: { title, list, info, img },
}: CaseOnePartProps) => {
    return (
        <div className={styles.box}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <HeadingWithBorder
                        title={title}
                        className={styles.subHeading}
                    />
                    {info && <p dangerouslySetInnerHTML={{ __html: info }}></p>}
                    <ul className={styles.list}>
                        {list?.map(
                            (obj, index): React.ReactNode => (
                                <li key={index}>
                                    {title && (
                                        <span className={styles.highlight}>
                                            {obj.title}
                                        </span>
                                    )}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: obj.text,
                                        }}
                                    ></span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className={styles.productImg}>
                    <img src={img} alt="product image" />
                </div>
            </div>
        </div>
    );
};

const CaseThreeCard = ({
    data: { sectionHeading, parts },
    pageHeading,
}: CaseThreeCardProps) => {
    return (
        <div className={styles.caseCard}>
            <div className={`${styles.container} container`}>
                <Heading
                    heading={sectionHeading}
                    attribute="border"
                    className={pageHeading}
                />
            </div>
            <div className={styles.parts}>
                {parts.map(
                    (item, index): React.ReactNode => (
                        <CaseOnePart item={item} key={index} />
                    )
                )}
            </div>
        </div>
    );
};

export default CaseThreeCard;
