import styles from "./Table.module.scss";

const Table = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th colSpan={3}>活动环节设置</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.heading}>
                    <td>时间</td>
                    <td>细项</td>
                    <td>环节</td>
                </tr>
                <tr>
                    <td>8:00-9:00</td>
                    <td rowSpan={2}>
                        运营<br></br>准备工作
                    </td>
                    <td>物料搭建，设备调试，工作人员签到</td>
                </tr>
                <tr>
                    <td>9:00-9:30</td>
                    <td>车辆到位，清洁车辆，车身检查</td>
                </tr>
                <tr>
                    <td>9:30-10:40</td>
                    <td rowSpan={5}>上午场</td>
                    <td>现场宣传、邀约、集客、介绍活动</td>
                </tr>
                <tr>
                    <td>10:40-11:00</td>
                    <td>（互动游戏，有奖问答）</td>
                </tr>
                <tr>
                    <td>11:00-11:10</td>
                    <td>经销商、销售顾问讲解买点</td>
                </tr>
                <tr>
                    <td>11:10-11:30</td>
                    <td rowSpan={2}>邀约试乘，静态赏车，客户留资</td>
                </tr>
                <tr>
                    <td>11:30-12:00</td>
                </tr>
                <tr>
                    <td>12:00-14:00</td>
                    <td colSpan={2}>午休</td>
                </tr>
                <tr>
                    <td>14:00-15:20</td>
                    <td>准备工作</td>
                    <td>现场宣传、邀约、集客、介绍活动</td>
                </tr>
                <tr>
                    <td>15:20-17:00</td>
                    <td>下午场</td>
                    <td>活动宣传、互动环节、教练公共、留资</td>
                </tr>
                <tr>
                    <td>17:00-17:30</td>
                    <td>后期工作</td>
                    <td>
                        整理活动成果<br></br>车辆清洁，安排回店
                        <br></br>填写执行确认表
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
