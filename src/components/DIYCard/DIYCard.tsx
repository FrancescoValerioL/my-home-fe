import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Card, Progress, ProgressProps, Typography } from "antd";
const { Text } = Typography;
const { Meta } = Card;

const DIYCard = () => {
	const twoColors: ProgressProps["strokeColor"] = {
		"0%": "#ffadad",
		"50%": "#fdffb6",
		"100%": "#caffbf",
	};
	return (
		<Card
			style={{ width: 300 }}
			cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
			actions={[
				<EditOutlined key="edit" />,
				<Text type="danger">
					<CloseOutlined key="close" />
				</Text>,
			]}
		>
			<Meta title="Card title" />
			<Progress percent={100} strokeColor={twoColors} />
		</Card>
	);
};
export default DIYCard;
