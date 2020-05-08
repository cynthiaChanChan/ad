import Heading from "../Heading/Heading";
import Gallery from "../Gallery/Gallery";
import HeadingWithBorder from "../HeadingWithBorder/HeadingWithBorder";

import styles from "./CaseTwoCard.module.scss";
import { CaseTwoCardData } from "../CaseTwo/CaseTwo.data";

type CaseTwoCardCardProps = {
    data: CaseTwoCardData;
    pageHeading: string;
};

type CaseOnePartProps = {
    item: {
        title: string;
        info?: string;
        img: string;
        gallery?: string[];
    };
};

const CaseOnePart = ({
    item: { title, info, img, gallery },
}: CaseOnePartProps) => {
    return (
        <div className={styles.box}>
            {gallery && (
                <Gallery gallery={gallery} className={styles.gallery} />
            )}
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

const CaseTwoCard = ({
    data: { sectionHeading, parts },
    pageHeading,
}: CaseTwoCardCardProps) => {
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

export default CaseTwoCard;
