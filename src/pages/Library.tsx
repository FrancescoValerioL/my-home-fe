import { Button, Flex, Input, InputRef, PaginationProps, Space, Table, TableColumnType, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined, CheckOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Book from "../interfaces/Book";
import { useRef, useState } from "react";
import BookTable from "../interfaces/BookTable";
import { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
const { Text, Title } = Typography;
type DataIndex = keyof BookTable;

const Library = () => {
	const { t, i18n } = useTranslation();
	const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current, pageSize) => {};
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef<InputRef>(null);

	const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps["confirm"], dataIndex: DataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters: () => void) => {
		clearFilters();
		setSearchText("");
	};

	const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<BookTable> => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({ closeDropdown: false });
							setSearchText((selectedKeys as string[])[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />,
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes((value as string).toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});
	const dataSource: BookTable[] = [
		{
			key: 1,
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
			key: 2,
			id: 2,
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
			key: 3,
			id: 3,
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
			key: 4,
			id: 4,
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
			key: 5,
			id: 5,
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
			key: 6,
			id: 6,
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
			key: 7,
			id: 7,
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
			key: 8,
			id: 8,
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
			key: 9,
			id: 9,
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
			key: 10,
			id: 10,
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
			key: 11,
			id: 11,
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
			key: 12,
			id: 12,
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
			key: 13,
			id: 13,
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
			key: 14,
			id: 14,
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
			key: 15,
			id: 15,
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
			key: 16,
			id: 16,
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
			sorter: {
				compare: (a: any, b: any) => a.id - b.id,
			},
			...getColumnSearchProps("id"),
		},
		{
			title: t("library.columns.title"),
			dataIndex: "title",
			key: "title",
			sorter: {
				compare: (a: any, b: any) => a.title - b.title,
			},
			...getColumnSearchProps("title"),
		},
		{
			title: t("library.columns.author"),
			dataIndex: "author",
			key: "author",
			sorter: {
				compare: (a: any, b: any) => a.author - b.author,
			},
			...getColumnSearchProps("author"),
		},
		{
			title: t("library.columns.comic"),
			dataIndex: "comic",
			key: "comic",
			sorter: {
				compare: (a: any, b: any) => a.comic - b.comic,
			},
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
			sorter: {
				compare: (a: any, b: any) => a.volumes - b.volumes,
			},
		},
		{
			title: t("library.columns.pages"),
			dataIndex: "pages",
			key: "pages",
			sorter: {
				compare: (a: any, b: any) => a.pages - b.pages,
			},
		},
		{
			title: t("library.columns.year"),
			dataIndex: "year",
			key: "year",
			sorter: {
				compare: (a: any, b: any) => a.year - b.year,
			},
			...getColumnSearchProps("year"),
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
			sorter: {
				compare: (a: any, b: any) => a.read - b.read,
			},
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
			sorter: {
				compare: (a: any, b: any) => a.packed - b.packed,
			},
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
		<Flex justify="center" vertical>
			<Table
				pagination={{
					pageSizeOptions: [10, 15, 20, 30, 50],
					showSizeChanger: true,
					onShowSizeChange: onShowSizeChange,
				}}
				scroll={{ y: 750 }}
				columns={columns}
				dataSource={dataSource}
				size="large"
			/>
		</Flex>
	);
};
export default Library;
