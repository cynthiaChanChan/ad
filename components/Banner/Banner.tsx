import styles from "./Banner.module.scss";
import bannerList from "./Banner.data";

const Banner = () => (
    <section className={styles.banner}>
        <div className={`${styles.container} container`}>
            <h2 className={styles.sub_heading}>驾悦传媒</h2>
            <h1 className={styles.heading}>中国大型品牌驾校媒体</h1>
            <ul className={styles.list}>
                {bannerList.map(
                    ({ total, title }): React.ReactNode => (
                        <li key={title}>
                            <span>{total}</span>
                            {title}
                        </li>
                    )
                )}
            </ul>
        </div>
    </section>
);

export default Banner;
