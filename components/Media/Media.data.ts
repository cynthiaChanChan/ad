export type MediaItem = {
    title: string;
    subTitle: string;
    list: string[];
    link: string;
    linkContent: string;
};

type MeadiaList = MediaItem[];

const mediaData: MeadiaList = [
    {
        title: "01",
        subTitle: "户外广告大牌",
        list: [
            "严选最佳位置，全面覆盖目标群体",
            "大尺寸户外广告，画面冲击力强，封闭式的广告效果在驾校环境中尤为突出",
            "终端画面唯一，单一品牌记忆度高",
            "材质选择精益求精，细微之处彰显完美品质",
        ],
        link: "/forms?type=0#content",
        linkContent: "Read More",
    },
    {
        title: "02",
        subTitle: "Wi-Fi 页面广告",
        list: [
            "学车等待期，处在无聊和封闭的环境中，对手机网络的需求更为旺盛",
            "据调查，99.7%的学员都希望驾校内能提供免费的Wi-Fi服务",
        ],
        link: "/forms?type=1#content",
        linkContent: "Read More",
    },
    {
        title: "03",
        subTitle: "落地营销活动",
        list: [
            "活动前提前预热和宣传",
            "活动现场加强互动，提高品牌认知，增强宣传和集客效果",
            "活动后留资数据持续追踪，效果总结反馈",
        ],
        link: "/forms?type=2#content",
        linkContent: "Read More",
    },
    {
        title: "04",
        subTitle: "学车平台",
        list: [
            "3号学车，是驾悦集团旗下的一个驾校招生平台",
            "自2014年以来持续为驾校提供招生服务",
            "集合了全国各地区的驾校和学车学员，具有明显的广告效果",
        ],
        link: "/forms?type=3#content",
        linkContent: "Read More",
    },
];

export default mediaData;
