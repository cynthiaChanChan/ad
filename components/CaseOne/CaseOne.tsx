import CaseOneCard from "../CaseOneCard/CaseOneCard";

import caseOneData from "./CaseOne.data";

import styles from "./CaseOne.module.scss";

type CaseOneProps = {
    pageHeading: string;
};

const CaseOne = ({ pageHeading }: CaseOneProps) => {
    return (
        <div className={styles.marketing}>
            {caseOneData.map(
                (item, index): React.ReactNode => (
                    <CaseOneCard
                        data={item}
                        key={index}
                        pageHeading={pageHeading}
                    />
                )
            )}
        </div>
    );
};

export default CaseOne;
