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
            link: "/",
            linkName: "案例详情",
        },
        {
            logo: "/case_logo2.png",
            name: "广汽本田",
            link: "/",
            linkName: "案例详情",
        },
        {
            logo: "/case_logo3.png",
            name: "长安马自达",
            link: "/",
            linkName: "案例详情",
        },
    ],
    imgList: ["/case1.png", "/case2.png", "/case3.png", "/case4.png"],
};

export default casesData;
