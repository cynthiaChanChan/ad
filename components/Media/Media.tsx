import styles from "./Media.module.scss";
import mediaData from "./Media.data";
import Heading from "../Heading/Heading";
import MediaCard from "../MediaCard/MediaCard";

const Media = () => {
    const heading = { title: "媒体投放形式", subTitle: "Forms of media" };

    return (
        <section className={styles.media}>
            <div className="container">
                <Heading heading={heading} attribute="small" />
                <div className={styles.imgBox}>
                    <img src="/media.jpg" alt="car image" />
                    <div className={styles.content_wrapper}>
                        <div />
                        <div />
                        <div className={styles.content}>
                            驾校汇聚意向购车群体
                            <br />
                            车企广告宣传最佳渠道
                        </div>
                    </div>
                </div>
                <div className={styles.media_list}>
                    {mediaData.map(
                        (item): React.ReactNode => (
                            <MediaCard key={item.title} card={item} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Media;
