import { useEffect, useState } from "react";
import "./App.scss";
import { Button, Dropdown, Flex, Layout, MenuProps, theme } from "antd";
import {
	DownOutlined,
	TranslationOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import SideMenu from "./components/SideMenu";
import { Content, Header } from "antd/es/layout/layout";
import i18next from "i18next";
import { useMyContext } from "./services/MyProvider";
import PagesEnum from "./services/PagesEnum";
import DIY from "./pages/DIY";
import Home from "./pages/Home";
import Library from "./pages/Library";
import ToDoList from "./pages/ToDoList";


const App = () => {
	const { t, i18n } = useTranslation();
	const { value } = useMyContext();
	const [componentToRender, setComponentToRender] = useState<any>()

	useEffect(() => {
		switch (value) {
			case PagesEnum.DIY:
				setComponentToRender(<DIY />)
				break;
			case PagesEnum.HOME:
				setComponentToRender(<Home />)
				break;

			case PagesEnum.LIBRARY:
				setComponentToRender(<Library />)
				break;
			case PagesEnum.TODO:
				setComponentToRender(<ToDoList />)
				break;

			default:
				break;
		}
	}, [value])

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
					{componentToRender}
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
