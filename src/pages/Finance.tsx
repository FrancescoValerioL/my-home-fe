import { Row, Col, Typography, Table, Space, Button } from "antd";
import { DeleteOutlined, EditOutlined, ReloadOutlined } from "@ant-design/icons";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import FinanceModal from "../components/FinanceModal/FinanceModal";
import FinanceData from "../interfaces/FinanceData";
const { Text, Title } = Typography;

const Finance = () => {
	const { t, i18n } = useTranslation();
	const dataSource: FinanceData[] = [
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
			category: "Cleaning",
			budget: 100,
			spent: 95,
			balance: 5,
		},
		{
			key: "4",
			category: "Entertainment",
			budget: 100,
			spent: 95,
			balance: 5,
		},
		{
			key: "5",
			category: "Rent",
			budget: 695,
			spent: 695,
			balance: 0,
		},
		{
			key: "6",
			category: "Loans",
			budget: 200,
			spent: 168,
			balance: 32,
		},
		{
			key: "7",
			category: "Subscriptions",
			budget: 100,
			spent: 95,
			balance: 5,
		},
	];

	const spent: number = dataSource.reduce((total, item) => total + item.spent, 0);
	const budget: number = dataSource.reduce((total, item) => total + item.budget, 0);

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
		{
			title: t("library.columns.actions"),
			dataIndex: "key",
			key: "actions",
			render: (key: string) => (
				<Space.Compact>
					<FinanceModal data={dataSource[dataSource.findIndex((data: FinanceData) => data.key === key)]} />
					<Button icon={<ReloadOutlined />} danger></Button>
				</Space.Compact>
			),
		},
	];

	const state = {
		options: {
			chart: {
				id: "pie-budget",
			},
			colors: ["#caffbf", "#a0c4ff"],
			labels: [t("finance.budget"), t("finance.spent")],
		},
		series: [budget, spent],
	};

	const pieCategory = {
		options: {
			chart: {
				id: "pie-category",
			},
			colors: ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"],
			labels: [
				t("finance.categories.food"),
				t("finance.categories.bills"),
				t("finance.categories.cleaning"),
				t("finance.categories.entertainment"),
				t("finance.categories.rent"),
				t("finance.categories.loans"),
				t("finance.categories.subscriptions"),
			],
		},
		series: dataSource.map((item) => item.spent),
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
				<Col lg={12} sm={24} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_category")}</Text>
						<Chart options={pieCategory.options} series={pieCategory.series} type="pie" width="500" />
					</Space>
				</Col>
				<Col lg={12} sm={24} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_spent")}</Text>
						<Chart className="chart" options={state.options} series={state.series} type="pie" width="500" />
					</Space>
				</Col>
			</Row>
			<Row>
				<Col lg={24} style={{ justifyContent: "center", display: "flex" }}>
					<Space direction="vertical">
						<Text type="secondary">{t("finance.budget_spent_category")}</Text>
						<Table pagination={false} columns={columns} dataSource={dataSource} size="large" scroll={{ y: 250 }} />
					</Space>
				</Col>
			</Row>
		</>
	);
};
export default Finance;
