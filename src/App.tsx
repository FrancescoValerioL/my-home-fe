import { useState } from "react";
import "./App.scss";
import { Button, Dropdown, Flex, Layout, MenuProps, Space, theme } from "antd";
import { DownOutlined, TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import SideMenu from "./components/SideMenu";
import { Content, Header } from "antd/es/layout/layout";
import i18next from "i18next";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import Library from "./pages/Library";
import DIY from "./pages/DIY";
import OutletLayout from "./components/OutletLayout";

const router = createBrowserRouter([
	{
		element: <OutletLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/todo",
				element: <ToDoList />,
			},
			{
				path: "/library",
				element: <Library />,
			},
			{
				path: "/diy",
				element: <DIY />,
			},
		],
	},
]);

function App() {
	const { t, i18n } = useTranslation();

	function changeLanguage(language: string) {
		i18next.changeLanguage(language, (err, t) => {
			if (err) return console.log("something went wrong loading", err);
			t("key"); // -> same as i18next.t
		});
	}
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const items: MenuProps["items"] = [
		{
			label: <a onClick={() => changeLanguage("it")}>{t("language.it")}</a>,
			key: "0",
		},
		{
			label: <a onClick={() => changeLanguage("en")}>{t("language.en")}</a>,
			key: "1",
		},
	];
	return (
		<Layout>
			<SideMenu />
			<Layout>
				<Header style={{ paddingRight: 50, background: colorBgContainer }}>
					<Flex justify="flex-end" align="center">
						<Dropdown menu={{ items }} trigger={["click"]}>
							<Button
								type="text"
								icon={<TranslationOutlined />}
								onClick={(e) => e.preventDefault()}
								style={{
									fontSize: "16px",
									height: 64,
								}}
							>
								{t("language.change")}
								<DownOutlined />
							</Button>
						</Dropdown>
					</Flex>
				</Header>
				<Content
					style={{
						margin: "16px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<RouterProvider router={router} />
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
