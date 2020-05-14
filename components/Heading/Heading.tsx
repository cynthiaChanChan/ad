import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback, useEffect } from "react";

import styles from "./Heading.module.scss";
import { useRouter } from "next/router";

type HeadingProps = {
    heading: {
        title: string;
        subTitle: string;
    };
    className?: string;
    attribute?: string;
};

const Heading = ({
    heading: { title, subTitle },
    className,
    attribute,
}: HeadingProps) => {
    const [isElemVisible, setIsElemVisible] = useState(false);
    const router = useRouter();
    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);
    useEffect(() => {
        setIsElemVisible(false);
    }, [router.query.section, router.query.status]);
    return (
        <div
            className={`${styles.wrapper} ${className} ${
                attribute && styles[attribute]
            } ${isElemVisible ? styles.animation : ""}`}
        >
            <VisibilitySensor onChange={handleChange} partialVisibility={true}>
                <h3 className={styles.heading}>{title}</h3>
            </VisibilitySensor>
            <h2 className={styles.sub_heading}>{subTitle}</h2>
        </div>
    );
};

export default Heading;
