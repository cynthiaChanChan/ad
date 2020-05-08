export type CaseThreeCardData = {
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
};

const caseThreeData: CaseThreeCardData[] = [
    {
        sectionHeading: {
            title: "一汽丰田",
            subTitle: "驾校落地营销活动",
        },
        parts: [
            {
                title: "活动整体执行",
                info:
                    "活动以“驾校线下体验式促销”为核心，深度传递产品价值，下沉留资集客。",
                list: [
                    {
                        title: "场地：",
                        text: "大型连锁驾校",
                    },
                    {
                        title: "形式：",
                        text: "联合驾校邀约学员回校参与毕业派对",
                    },
                    {
                        title: "对象：",
                        text: "近期毕业学员/教练/在学学员产品",
                    },
                    {
                        title: "价值呈现方式：",
                        text: "动态试驾试乘+静态体验+物料辅助",
                    },
                ],
                img: "/toyota_drive1.png",
            },
            {
                title: "活动优质成果",
                info:
                    "结合车型及驾校特性制作了创新型邀约物料，既很好传播了活动信息也传递了车型形象；透过驾校数据库与教练微信宣传邀约即将购车人群,达到极好的宣传效果；通过活动邀约宣传获得的数据，为实现订单提供直接来源。",
                img: "/toyota_drive2.png",
            },
        ],
    },
    {
        sectionHeading: {
            title: "一汽丰田",
            subTitle: "驾校停展试驾活动",
        },
        parts: [
            {
                title: "停展形式",
                list: [
                    {
                        title: "场地：",
                        text: "优选大型考场",
                    },
                    {
                        title: "时间：",
                        text: "14天",
                    },
                    {
                        title: "对象：",
                        text: "考试学员（重点科目四在考学员）",
                    },
                ],
                img: "/toyota_drive3.png",
            },
            {
                title: "停展整体价值与效果",
                info:
                    "考场人流大，停展时间长，能达到最好的曝光效果；活动现场大量科四考生，意向购车学员拿证后跟进周期更短，数据更精准；</br>活动现场产生大量的意向客户，实现活动效果最大化，同时也极大的宣传品牌、车型；为后期实现更大的订单转化，受到参与经销商的一致好评。",
                img: "/toyota_drive4.png",
            },
        ],
    },
];

export default caseThreeData;
