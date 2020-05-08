export type CaseOneCardData = {
    sectionHeading: {
        title: string;
        subTitle: string;
    };
    parts: {
        title: string;
        info?: string;
        list?: {
            title: string;
            text: string;
        }[];
        img: string;
    }[];
    gallery?: string[];
};

const caseOneData: CaseOneCardData[] = [
    {
        sectionHeading: {
            title: "东风日产",
            subTitle: "驾校落地营销活动",
        },
        parts: [
            {
                title: "项目目的",
                info:
                    "针对驾校准购车群体，配合东风日产车型特点、拓展驾校营销渠道、展示汽车完美外观、强大的发动机、优越性能与智能化设备、为销售做增量。",
                img: "/nissan_drive1.png",
            },
            {
                title: "项目亮点",
                info:
                    "现场有专业的安全讲解人员为活动现场学员及毕业学员讲解汽车品牌安全性，同时沟通嫁接驾校与4s店合作，得到4s店对本次活动的强烈好评！",
                img: "/nissan_drive2.png",
            },
        ],
        gallery: [
            "/nissan_drive4.png",
            "/nissan_drive5.png",
            "/nissan_drive6.png",
        ],
    },
    {
        sectionHeading: {
            title: "东风日产",
            subTitle: "学车平台广告投放",
        },
        parts: [
            {
                title: "专业更专注",
                info:
                    "3号学车是深圳五八驾悦集团旗下的一个驾校招生平台，属于行业领先的驾培平台，拥有全国各地的驾校合作方，线上有大量的学员（潜在的购车客户），拥有城市精准定向的曝光点位，广告精准定向当地城市人群，精准城市竞品拦截点位，有效拦截引流城市竞品流量，能精准影响投放区域所有学员，广告投放也拥有高强的曝光率。",
                img: "/nissan_drive3.png",
            },
        ],
    },
];

export default caseOneData;
