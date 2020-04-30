import Slider from "react-slick";

import Board from "../Board/Board";
import Platform from "../Platform/Platform";
import styles from "./FormsContainer.module.scss";
import Wifi from "../Wifi/Wifi";

const FormsContainer = () => {
    return (
        <div className="forms">
            {/* <Board pageHeading={styles.pageHeading} /> */}
            {/* <Platform pageHeading={styles.pageHeading} /> */}
            <Wifi pageHeading={styles.pageHeading} />
        </div>
    );
};

export default FormsContainer;
