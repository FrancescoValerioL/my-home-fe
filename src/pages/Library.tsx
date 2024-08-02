import { Button, Flex, Space, Table, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

const Library = () => {
	const { t, i18n } = useTranslation();
	const dataSource = [
		{
			key: "1",
			id: 1,
			title: "title",
			author: "author",
			comic: false,
			volumes: 1,
			pages: 100,
			year: 1998,
			desc: "desc",
			read: true,
			packed: false,
		},
		{
			key: "2",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "3",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "4",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "5",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "6",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "7",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "8",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "9",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "10",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "11",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "12",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "13",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "14",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "15",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
		{
			key: "16",
			id: 1,
			title: "title",
			author: "author",
			comic: true,
			volumes: 12,
			pages: 0,
			year: 1998,
			desc: "desc",
			read: false,
			packed: true,
		},
	];

	const columns = [
		{
			title: t("library.columns.id"),
			dataIndex: "id",
			key: "id",
		},
		{
			title: t("library.columns.title"),
			dataIndex: "title",
			key: "title",
		},
		{
			title: t("library.columns.author"),
			dataIndex: "author",
			key: "author",
		},
		{
			title: t("library.columns.comic"),
			dataIndex: "comic",
			key: "comic",
			render: (comic: boolean) =>
				comic === true ? (
					<Flex justify="center">
						<Text type="success">
							<CheckOutlined />
						</Text>
					</Flex>
				) : (
					<Flex justify="center">
						<Text type="danger">
							<CloseOutlined />
						</Text>
					</Flex>
				),
		},
		{
			title: t("library.columns.volumes"),
			dataIndex: "volumes",
			key: "volumes",
		},
		{
			title: t("library.columns.pages"),
			dataIndex: "pages",
			key: "pages",
		},
		{
			title: t("library.columns.year"),
			dataIndex: "year",
			key: "year",
		},
		{
			title: t("library.columns.desc"),
			dataIndex: "desc",
			key: "desc",
		},
		{
			title: t("library.columns.read"),
			dataIndex: "read",
			key: "read",
			render: (read: boolean) =>
				read === true ? (
					<Flex justify="center">
						<Text type="success">
							<CheckOutlined />
						</Text>
					</Flex>
				) : (
					<Flex justify="center">
						<Text type="danger">
							<CloseOutlined />
						</Text>
					</Flex>
				),
		},
		{
			title: t("library.columns.packed"),
			dataIndex: "packed",
			key: "packed",
			render: (packed: boolean) =>
				packed === true ? (
					<Flex justify="center">
						<Text type="success">
							<CheckOutlined />
						</Text>
					</Flex>
				) : (
					<Flex justify="center">
						<Text type="danger">
							<CloseOutlined />
						</Text>
					</Flex>
				),
		},
		{
			title: t("library.columns.actions"),
			dataIndex: "actions",
			key: "actions",
			render: (id: number) => (
				<Space.Compact>
					<Button icon={<EditOutlined />} type="primary" ghost></Button>
					<Button icon={<DeleteOutlined />} danger></Button>
				</Space.Compact>
			),
		},
	];
	return (
		<Flex justify="center">
			<Table pagination={{ pageSize: 10 }} scroll={{ y: 800 }} columns={columns} dataSource={dataSource} size="large" />
		</Flex>
	);
};
export default Library;
