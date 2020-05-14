import { Settings } from "react-slick";

import { useRef, useEffect, useState, useContext } from "react";

import styles from "./SliderContainer.module.scss";
import { useRouter } from "next/router";
import { AppContext } from "../../providers/app.provider";
import navList from "../Header/Header.data";

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
        const { setSubPageTitle } = useContext(AppContext);
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
            beforeChange(previous: number, i: number) {
                const html = document.querySelector("html");
                if (html) {
                    html.style.scrollBehavior = "auto";
                }
                window.scrollTo(0, containerTop);
                const title = document.querySelector("title");
                if (title && title.textContent) {
                    const titleArr = title.textContent.split("-");
                    let middleTitle = titleArr[1];
                    const navItem = navList.find((elem) =>
                        elem.route.includes(router.route)
                    );
                    if (navItem) {
                        middleTitle = navItem.content;
                    }
                    setSubPageTitle(`${titleArr[0]}-${middleTitle}-${nav[i]}`);
                }
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
            const title = document.querySelector("title");
            if (router.query.type && containerEl && containerEl.current) {
                const offsetTop = containerEl.current.offsetTop;
                window.scrollTo(0, offsetTop - 80);
                if (title && title.textContent) {
                    const titleArr = title.textContent.split("-");
                    setSubPageTitle(
                        `${titleArr[0]}-${titleArr[1]}-${
                            nav[+router.query.type]
                        }`
                    );
                }
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
