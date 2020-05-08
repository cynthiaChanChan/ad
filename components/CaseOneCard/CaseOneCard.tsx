import Heading from "../Heading/Heading";
import styles from "./CaseOneCard.module.scss";
import { CaseOneCardData } from "../CaseOne/CaseOne.data";
import HeadingWithBorder from "../HeadingWithBorder/HeadingWithBorder";
import Gallery from "../Gallery/Gallery";

type CaseOneCardCardProps = {
    data: CaseOneCardData;
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
                <div className={styles.productImg}>
                    <img src={img} alt="product image" />
                </div>
                <div className={styles.content}>
                    <HeadingWithBorder
                        title={title}
                        className={styles.subHeading}
                    />
                    {info && <p dangerouslySetInnerHTML={{ __html: info }}></p>}
                </div>
            </div>
        </div>
    );
};

const CaseOneCard = ({
    data: { sectionHeading, parts, gallery },
    pageHeading,
}: CaseOneCardCardProps) => {
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
            {gallery && <Gallery gallery={gallery} />}
        </div>
    );
};

export default CaseOneCard;
