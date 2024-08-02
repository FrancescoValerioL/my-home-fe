import React, { useState } from "react";
import "./SideMenu.scss";
import {
	UnorderedListOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	HomeOutlined,
	ScissorOutlined,
	BookOutlined,
	CalendarOutlined,
	BankOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Flex, Menu } from "antd";
import { useTranslation } from "react-i18next";
import Sider from "antd/es/layout/Sider";
import logo from "../assets/logo.png";
import { Image } from "antd";
import { useMyContext } from "../services/MyProvider";
import PagesEnum from "../services/PagesEnum";
type MenuItem = Required<MenuProps>["items"][number];

const SideMenu = () => {
	const [collapsed, setCollapsed] = useState(true);
	const { t } = useTranslation();
	const { setValue } = useMyContext();

	const updateValue = (page: PagesEnum) => {
		setValue(page);
	};
	const items: MenuItem[] = [
		{ key: "0", icon: <HomeOutlined />, label: <a onClick={() => updateValue(PagesEnum.HOME)}>Home</a> },
		{ key: "1", icon: <UnorderedListOutlined />, label: <a onClick={() => updateValue(PagesEnum.TODO)}>ToDo List</a> },
		{
			key: "2",
			icon: <ScissorOutlined />,
			label: <a onClick={() => updateValue(PagesEnum.DIY)}>{t("sideMenu.diy")}</a>,
		},
		{
			key: "3",
			icon: <BookOutlined />,
			label: <a onClick={() => updateValue(PagesEnum.LIBRARY)}>{t("sideMenu.library")}</a>,
		},
		{
			key: "4",
			icon: <CalendarOutlined />,
			label: <a onClick={() => updateValue(PagesEnum.CALENDAR)}>{t("sideMenu.calendar")}</a>,
		},
		{
			key: "5",
			icon: <BankOutlined />,
			label: <a onClick={() => updateValue(PagesEnum.FINANCE)}>{t("sideMenu.finance")}</a>,
		},
	];
	const boxStyle: React.CSSProperties = {
		width: "100%",
		height: 64,
	};

	return (
		<Sider width={250} trigger={null} theme="light" collapsible collapsed={collapsed}>
			<Flex style={boxStyle} justify="space-around" align="center">
				<Image preview={false} width={200} src={logo} />
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						fontSize: "16px",
						width: 64,
						height: 64,
					}}
				/>
			</Flex>
			<Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} items={items} />
		</Sider>
	);
};

export default SideMenu;
