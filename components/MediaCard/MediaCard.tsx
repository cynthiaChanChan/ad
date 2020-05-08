import Link from "next/link";

import styles from "./MediaCard.module.scss";
import { MediaItem } from "../Media/Media.data";

type MediaCardProps = {
    card: MediaItem;
};

const MediaCard = ({ card }: MediaCardProps) => {
    const { title, subTitle, list, link, linkContent } = card;
    return (
        <div className={styles.card}>
            <h3 className={styles.heading}>{title}</h3>
            <h4 className={styles.sub_heading}>{subTitle}</h4>
            <ul className={styles.list}>
                {list.map(
                    (item, index): React.ReactNode => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
            <Link href={link}>
                <a className={styles.link} target="_blank">
                    {linkContent}
                </a>
            </Link>
        </div>
    );
};

export default MediaCard;
