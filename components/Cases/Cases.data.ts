type Case = {
    logo: string;
    name: string;
    link: string;
    linkName: string;
};

type Cases = {
    caseList: Case[];
    imgList: string[];
};

const casesData: Cases = {
    caseList: [
        {
            logo: "/case_logo1.png",
            name: "东风日产",
            link: "/examples?type=0#content",
            linkName: "案例详情",
        },
        {
            logo: "/case_logo2.png",
            name: "广汽传祺",
            link: "/examples?type=1#content",
            linkName: "案例详情",
        },
        {
            logo: "/case_logo3.png",
            name: "一汽丰田",
            link: "/examples?type=2#content",
            linkName: "案例详情",
        },
    ],
    imgList: ["/case1.png", "/case2.png", "/case3.png", "/case4.png"],
};

export default casesData;
