import React, { useState } from "react";
import i18next from "i18next";
import {
	UnorderedListOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	HomeOutlined,
	ScissorOutlined,
	BookOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Flex, Menu } from "antd";
import { useTranslation } from "react-i18next";
import Sider from "antd/es/layout/Sider";
import logo from "../assets/logo.png";
import { Image } from "antd";
import { Link, Outlet } from "react-router-dom";

const SideMenu = (props: any) => {
	const [collapsed, setCollapsed] = useState(true);
	const { t, i18n } = useTranslation();
	function changeLanguage(language: string) {
		i18next.changeLanguage(language, (err, t) => {
			if (err) return console.log("something went wrong loading", err);
			t("key"); // -> same as i18next.t
		});
	}
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
			<Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} items={props.items} />
		</Sider>
	);
};

export default SideMenu;
