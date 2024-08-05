import { Button, Card, Col, Input, Row, Space, Image, Typography } from "antd";
import { DeleteOutlined, PlusOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import push_ups from "../assets/images/workouts/push-ups.svg"

const Workout = () => {
	const { Text } = Typography;
	const [title, setTitle] = useState<string>("Card Title")

	return (
		<Space direction="vertical" size="middle" style={{ display: "flex" }}>
			<Card title={title} extra={[
				<Button type="text" >
					<Text type="secondary">
						<EditOutlined key="close" />
					</Text>
				</Button>, <Button danger type="text" >
					<CloseOutlined key="close" />
				</Button>
			]} style={{ minWidth: 300 }}>
				<Row>
					<Col span={8}>
						<Image preview={false} width="auto" src={push_ups} />
					</Col>
					<Col span={8}>
						<p>Card contenttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</p>
					</Col>
				</Row>
			</Card>
		</Space>
	);
};
export default Workout;
