export const sectionHeading = {
    title: "落地营销活动",
    subTitle: "行程规划",
};

export type MarketingData = {
    heading: {
        title: string;
        subTitle: string;
    };
    list?: {
        title?: string;
        text: string;
    }[];
    img: string;
};

const marketingListData: MarketingData[] = [
    {
        heading: {
            title: "宣传模式",
            subTitle: "",
        },
        list: [
            {
                text: "DM单宣传预热",
            },
            {
                text: "学车学员短信预热",
            },
            {
                text: "毕业学员促销短信",
            },
            {
                text: "附近驾校宣传",
            },
        ],
        img: "./marketing_broadcast.png",
    },
    {
        heading: {
            title: "现场效果",
            subTitle: "",
        },
        list: [
            {
                title: "展示区：",
                text: "可摆放三、四款展车",
            },
            {
                title: "互动区：",
                text: "可摆放5m*3m的背景板",
            },
            {
                title: "洽谈区：",
                text: "可放置2个X展架、</br>1个3m*3m帐篷1套圆桌椅",
            },
        ],
        img: "./marketing_live.png",
    },
    {
        heading: {
            title: "活动环节",
            subTitle: "",
        },
        img: "./marketing_detail.png",
    },
];

export type SecheuleData = {
    title: string;
    subtitle?: string;
    list: string[];
};

export const secheduleListData: SecheuleData[] = [
    {
        title: "活动前",
        list: [
            "确定活动驾校/时间",
            "内促政策制定、物料设计、担当店提供DM单",
            "活动前邀约及预热宣传",
        ],
    },
    {
        title: "活动日",
        subtitle: "内促政策实施",
        list: [
            "每场活动3-4台展车及1-2位销售顾问",
            "活动前做好美容工作，并需配有车铭牌",
            "现场宣传、活动环节、意向客户留资",
        ],
    },
    {
        title: "活动后",
        list: [
            "留资数据持续跟踪，内促政策实施",
            "活动订单统计，配合KPI考核",
            "活动效果意见反馈",
        ],
    },
];

export default marketingListData;
