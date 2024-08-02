import { Row, Col, Typography, Table, Space } from "antd";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

const Finance = () => {
	const { t, i18n } = useTranslation();
	const budget: number = 1800;
	const spent: number = 800;
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
	];

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
	];
	return (
		<>
			<Row justify="center">
				<Col span={8} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget")}</Text>
						<Title level={3}>€{budget}</Title>
					</Space>
				</Col>
				<Col span={8} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.spent")}</Text>
						<Title level={3}>€{spent}</Title>
					</Space>
				</Col>
				<Col span={8} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.left")}</Text>
						<Title level={3} type={budget - spent > 0 ? "success" : "danger"}>
							€{budget - spent}
						</Title>
					</Space>
				</Col>
			</Row>
			<Row>
				<Col span={12} style={{ justifyContent: "center", display: "flex" }}>
					<Text type="secondary">{t("finance.budget_category")}</Text>
				</Col>
				<Col span={12} style={{ justifyContent: "center", display: "flex" }}>
					<Text type="secondary">{t("finance.budget_spent")}</Text>
				</Col>
			</Row>
			<Row>
				<Col span={12} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_spent_category")}</Text>
						<Table dataSource={dataSource} columns={columns} />
					</Space>
				</Col>
				<Col span={12} style={{ justifyContent: "center", display: "flex" }}>
					<Text type="secondary">{t("finance.spent")}</Text>
				</Col>
			</Row>
		</>
	);
};
export default Finance;
