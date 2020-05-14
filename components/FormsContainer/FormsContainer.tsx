import Slider, { Settings } from "react-slick";
import SliderContainer from "../SliderContainer/SliderContainer";

import Board from "../Board/Board";
import Wifi from "../Wifi/Wifi";
import Marketing from "../Marketing/Marketing";
import Platform from "../Platform/Platform";

import styles from "./FormsContainer.module.scss";

type FormsContainerProps = {
    settings: Settings;
};

const nav = ["户外广告大牌", "落地营销活动", "Wi-Fi 页面广告", "学车平台"];

const FormsContainer = ({ settings }: FormsContainerProps) => {
    return (
        <Slider {...settings} className={styles.slider}>
            <Board pageHeading={styles.pageHeading} />
            <Marketing pageHeading={styles.pageHeading} />
            <Wifi pageHeading={styles.pageHeading} />
            <Platform pageHeading={styles.pageHeading} />
        </Slider>
    );
};

export default SliderContainer(FormsContainer, nav);
