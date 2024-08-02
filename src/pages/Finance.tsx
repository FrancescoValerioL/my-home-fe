import { Row, Col, Typography, Table, Space } from "antd";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

const Finance = () => {
	const { t, i18n } = useTranslation();
	const budget: number = 1800;
	const spent: number = 800;
	const dataSource = [
		{
			key: "1",
			category: "Food",
			budget: 320,
			spent: 150,
			balance: 170,
		},
		{
			key: "2",
			category: "Bills",
			budget: 320,
			spent: 150,
			balance: 170,
		},
		{
			key: "3",
			category: "Car",
			budget: 320,
			spent: 350,
			balance: -20,
		},
	];

	const columns = [
		{
			title: t("finance.category"),
			dataIndex: "category",
			key: "category",
		},
		{
			title: t("finance.budget"),
			dataIndex: "budget",
			key: "budget",
		},
		{
			title: t("finance.spent"),
			dataIndex: "spent",
			key: "spent",
		},
		{
			title: t("finance.balance"),
			dataIndex: "balance",
			key: "balance",
			render: (balance: number) => <Text type={balance > 0 ? "success" : "danger"}>{balance}</Text>,
		},
	];

	const state = {
		options: {
			chart: {
				id: "pie-budget",
			},
			labels: ["Budget", "Spent"],
		},
		series: [budget, spent],
	};

	const pieCategory = {
		options: {
			chart: {
				id: "pie-category",
			},
			labels: ["Food", "Cleaning", "Car", "Bills"],
		},
		series: [100, 200, 50, 500],
	};
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
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_category")}</Text>
						<Chart options={pieCategory.options} series={pieCategory.series} type="pie" width="500" />
					</Space>
				</Col>
				<Col span={12} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_spent")}</Text>
						<Chart options={state.options} series={state.series} type="pie" width="500" />
					</Space>
				</Col>
			</Row>
			<Row>
				<Col span={24} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_spent_category")}</Text>
						<Table columns={columns} dataSource={dataSource} size="large" />
					</Space>
				</Col>
			</Row>
		</>
	);
};
export default Finance;
