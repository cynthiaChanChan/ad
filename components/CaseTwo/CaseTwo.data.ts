export type CaseTwoCardData = {
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
        gallery?: string[];
    }[];
};

const caseTwoData: CaseTwoCardData[] = [
    {
        sectionHeading: {
            title: "广汽传祺",
            subTitle: "户外广告广告大牌投放",
        },
        parts: [
            {
                title: "项目亮点及效果",
                info:
                    "本次广告投放因终端画面唯一，单一品牌记忆度高，得到了很好的广告效益。</br>同时，为了达到最高的广告效果，严选最佳点位，全面覆盖目标群体，选用大尺寸大牌，使画面更具冲击力；驾校封闭式的广告环境，让广告效益得到进一步的升华。",
                img: "/gac_drive01.png",
            },
        ],
    },
    {
        sectionHeading: {
            title: "广汽传祺",
            subTitle: "驾校落地营销活动",
        },
        parts: [
            {
                title: "活动现场",
                info:
                    "活动现场学员、教练的参与度极高，通过一系列互动环节，将车型、活动信息与经销商讯息有效融合，吸引学员围观，扩大传播力度与面积。",
                img: "/gac_drive05.png",
                gallery: [
                    "/gac_drive02.png",
                    "/gac_drive03.png",
                    "/gac_drive04.png",
                ],
            },
            {
                title: "活动效果",
                info:
                    "活动以有趣的互动、专业的讲解介绍，加深参与人员对广汽传祺的品牌、车型认知深度与好感，为订单成交打下基础。活动也高质量超额完成既定意向客户留资KPI，同时也利用学员购车优惠政策，进行后续的促单。",
                img: "/gac_drive06.png",
            },
        ],
    },
];

export default caseTwoData;
