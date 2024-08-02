import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Card, Progress, ProgressProps, Typography } from "antd";
import DIYModal from "../DIYModal/DIYModal";
import DIYInterface from "../../interfaces/DIY";
import { useEffect, useState } from "react";
const { Text } = Typography;
const { Meta } = Card;

const DIYCard = (props: { card: DIYInterface }) => {
	const [percent, setPercent] = useState<number>(0);

	useEffect(() => {
		calculate();
	}, [props]);

	const calculate = () => {
		if (props.card.completed === true) {
			setPercent(100);
			return;
		}
		let totalSteps: number = 2;
		let stepsOk: number = 0;
		props.card.materials.forEach((material) => {
			if (material.obtained === true) {
				stepsOk++;
			}
		});
		props.card.started === true && stepsOk++;
		props.card.materials.forEach(() => totalSteps++);
		const tempPercent: number = (stepsOk / totalSteps) * 100;
		setPercent(+tempPercent.toFixed(2));
		console.log(tempPercent);
	};
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
				<DIYModal diy={props.card} />,
				<Text type="danger">
					<CloseOutlined key="close" />
				</Text>,
			]}
		>
			<Meta title={props.card.title} />
			<Progress percent={percent} strokeColor={twoColors} />
		</Card>
	);
};
export default DIYCard;
