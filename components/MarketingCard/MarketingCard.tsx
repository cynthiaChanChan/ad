import Heading from "../Heading/Heading";
import styles from "./MarketingCard.module.scss";
import { MarketingData } from "../Marketing/Marketing.data";

type MarketingCardProps = {
    product: MarketingData;
};

const MarketingCard = ({
    product: { heading, img, list },
}: MarketingCardProps) => {
    return (
        <div className={styles.box}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <Heading heading={heading} attribute="border" />
                    <ul className={styles.list}>
                        {list?.map(
                            ({ title, text }, index): React.ReactNode => (
                                <li key={index}>
                                    {title && (
                                        <span className={styles.highlight}>
                                            {title}
                                        </span>
                                    )}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: text,
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

export default MarketingCard;
