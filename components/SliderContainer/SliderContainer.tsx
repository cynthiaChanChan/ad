import { Settings } from "react-slick";

import { useRef, useEffect, useState } from "react";

import styles from "./SliderContainer.module.scss";
import { useRouter } from "next/router";

const SliderContainer = (
    WrappedComponent: React.FunctionComponent<{ settings: Settings }>,
    nav: string[]
) => {
    const Container = ({
        navIndex,
        isBig,
    }: {
        navIndex: number;
        isBig?: boolean;
    }) => {
        const [containerTop, setContainerTop] = useState(0);
        const router = useRouter();
        const containerEl = useRef<null | HTMLDivElement>(null);
        const settings = {
            initialSlide: navIndex,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 400,
            cssEase: "linear",
            customPaging(i: number) {
                return (
                    <div
                        className={`${styles.link} ${isBig ? styles.big : ""}`}
                    >
                        <span>{nav[i]}</span>
                    </div>
                );
            },
            dots: true,
            dotsClass: styles.slickNav,
            adaptiveHeight: true,
            beforeChange(i: number) {
                window.scrollTo(0, containerTop);
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        speed: 200,
                        beforeChange(i: number) {
                            //80 is the height of the header
                            window.scrollTo(0, containerTop - 80);
                        },
                    },
                },
            ],
        };
        useEffect(() => {
            if (router.query.type && containerEl && containerEl.current) {
                const offsetTop = containerEl.current.offsetTop;
                window.scrollTo(0, offsetTop - 80);
            }
            if (containerEl && containerEl.current) {
                setContainerTop(containerEl.current.offsetTop);
            }
        }, [containerEl, router.query.type]);
        return (
            <div className={styles.sliderContainer} ref={containerEl}>
                <WrappedComponent settings={settings} />
            </div>
        );
    };

    return Container;
};

export default SliderContainer;
