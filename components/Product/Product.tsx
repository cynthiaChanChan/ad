import Heading from "../Heading/Heading";

import styles from "./Product.module.scss";
import { ProductData } from "../ProductsList/ProductsList.data";

type ProductProps = {
    product: ProductData;
};

const Product = ({ product }: ProductProps) => {
    const { heading, img, alt, list, background, subContent } = product;
    return (
        <div
            className={styles.product}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.productImg}>
                <img src={img} alt={alt} />
            </div>
            <div className={styles.content}>
                <Heading heading={heading} />
                <ul className={styles.list}>
                    {list.map(
                        (item, index): React.ReactNode => (
                            <li key={index}>{item}</li>
                        )
                    )}
                </ul>
                {subContent && (
                    <ul className={styles.subContent}>
                        {subContent.map(
                            ({ icon, title }, index): React.ReactNode => (
                                <li key={index}>
                                    <div className={styles.item}>
                                        <div className={styles.icon}>
                                            <img
                                                src={icon}
                                                alt="product icon"
                                            />
                                        </div>
                                        <span>{title}</span>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Product;
