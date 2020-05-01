export type AdvantageItem = {
    icon: string;
    title: string;
    content: string;
};

type AdvantageList = AdvantageItem[];

const advantageList: AdvantageList = [
    {
        icon: "i-people.png",
        title: "受众精准",
        content:
            "学车学员具有强烈购车欲望，对汽车广告的态度：宝贵资讯、与人分享、主动捕捉",
    },
    {
        icon: "i-ratio.png",
        title: "到达率高",
        content:
            "驾校是购车人群主要集中地，封闭的环境营造出品牌独一、高效传递到位的广告氛围",
    },
    {
        icon: "i-comunication.png",
        title: "传递性强",
        content:
            "教练是最佳经纪人，在与学员交流汽车品牌、性能等话题中，切入软性营销，有效推动学员的最终购买决策",
    },
    {
        icon: "i-forms.png",
        title: "形式多样",
        content:
            "主题驾校、驾校落地活动、广告大牌、DM宣传单、驾校WI-FI、墙贴、探针等，各种形式全方位多维度宣传",
    },
    {
        icon: "i-dataset.png",
        title: "数据庞大",
        content:
            "「驾悦传媒」与全国驾校多年合作,积累了大量学员数据库并时时更新，可以提供精准的数据化营销        ",
    },
    {
        icon: "i-team.png",
        title: "专业团队",
        content:
            "每场活动配备专业的运营人员和主持人，加强现场互动，提高品牌认知，增强宣传和集客效果        ",
    },
];

export default advantageList;
