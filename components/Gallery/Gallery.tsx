import styles from "./Gallery.module.scss";

type GalleryProps = {
    gallery: string[];
    className?: string;
};

const Gallery = ({ gallery, className }: GalleryProps) => {
    return (
        <div className={`${styles.gallery} ${className}`}>
            <div className={`${styles.container} container`}>
                {gallery.map((img, index) => (
                    <div className={styles.imgContainer} key={index}>
                        <img src={img} alt="case picture" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
