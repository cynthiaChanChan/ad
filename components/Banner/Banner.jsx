import AnimatedNumber from "animated-number-react"; //无对应type package, 因此改为jsx

import styles from "./Banner.module.scss";
import bannerList from "./Banner.data";

const Banner = () => {
    const formatValue = (value) => value.toFixed(0);
    return (
        <section className={styles.banner}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sub_heading}>驾悦传媒</h2>
                <h1 className={styles.heading}>中国大型品牌驾校媒体</h1>
                <ul className={styles.list}>
                    {bannerList.map(({ total, title }) => (
                        <li key={title}>
                            <span>
                                <AnimatedNumber
                                    value={total}
                                    formatValue={formatValue}
                                ></AnimatedNumber>
                            </span>
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Banner;
