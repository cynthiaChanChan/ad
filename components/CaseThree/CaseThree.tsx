import CaseThreeCard from "../CaseThreeCard/CaseThreeCard";

import caseThreeData from "./CaseThree.data";

import styles from "./CaseThree.module.scss";

type CaseThreeProps = {
    pageHeading: string;
};

const CaseThree = ({ pageHeading }: CaseThreeProps) => {
    return (
        <div className={styles.marketing}>
            {caseThreeData.map(
                (item, index): React.ReactNode => (
                    <CaseThreeCard
                        data={item}
                        key={index}
                        pageHeading={pageHeading}
                    />
                )
            )}
        </div>
    );
};

export default CaseThree;
