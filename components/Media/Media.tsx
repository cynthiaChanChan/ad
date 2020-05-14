import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback } from "react";

import styles from "./Media.module.scss";
import mediaData from "./Media.data";
import Heading from "../Heading/Heading";
import MediaCard from "../MediaCard/MediaCard";

const Media = () => {
    const heading = { title: "媒体投放形式", subTitle: "Forms of media" };
    const [isElemVisible, setIsElemVisible] = useState(false);
    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);

    return (
        <section className={styles.media}>
            <div className="container">
                <VisibilitySensor onChange={handleChange}>
                    <Heading heading={heading} attribute="small" />
                </VisibilitySensor>

                <div className={styles.imgBox}>
                    <img
                        className={isElemVisible ? styles.animation : ""}
                        src="/media.jpg"
                        alt="car image"
                    />
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
