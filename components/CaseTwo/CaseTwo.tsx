import CaseTwoCard from "../CaseTwoCard/CaseTwoCard";

import caseTwoData from "./CaseTwo.data";

import styles from "./CaseTwo.module.scss";

type CaseTwoProps = {
    pageHeading: string;
};

const CaseTwo = ({ pageHeading }: CaseTwoProps) => {
    return (
        <div className={styles.marketing}>
            {caseTwoData.map(
                (item, index): React.ReactNode => (
                    <CaseTwoCard
                        data={item}
                        key={index}
                        pageHeading={pageHeading}
                    />
                )
            )}
        </div>
    );
};

export default CaseTwo;
