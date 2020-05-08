import Slider, { Settings } from "react-slick";
import SliderContainer from "../SliderContainer/SliderContainer";

import CaseOne from "../CaseOne/CaseOne";
import CaseTwo from "../CaseTwo/CaseTwo";
import CaseThree from "../CaseThree/CaseThree";

import styles from "./CasesContainer.module.scss";

type CasesContainerProps = {
    settings: Settings;
};

const nav = ["东风日产", "广汽传祺", "一汽丰田"];

const CasesContainer = ({ settings }: CasesContainerProps) => {
    return (
        <Slider {...settings} className={styles.slider}>
            <CaseOne pageHeading={styles.pageHeading} />
            <CaseTwo pageHeading={styles.pageHeading} />
            <CaseThree pageHeading={styles.pageHeading} />
        </Slider>
    );
};

export default SliderContainer(CasesContainer, nav);
