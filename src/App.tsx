import { useEffect, useState } from "react";
import "./App.scss";
import { Button, Col, Dropdown, Flex, Layout, MenuProps, Row, theme, Typography } from "antd";
import { DownOutlined, TranslationOutlined } from "@ant-design/icons";
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
import CalendarPage from "./pages/CalendarPage";
import Finance from "./pages/Finance";

const App = () => {
	const { Text, Title } = Typography;
	const { t, i18n } = useTranslation();
	const { value } = useMyContext();
	const [componentToRender, setComponentToRender] = useState<any>();
	const [headerTitle, setHeaderTitle] = useState<string>("Home");
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const items: MenuProps["items"] = [
		{
			label: <a onClick={() => changeLanguage("en")}>{t("language.en")}</a>,
			key: "0",
		},
		{
			label: <a onClick={() => changeLanguage("it")}>{t("language.it")}</a>,
			key: "1",
		},
	];

	useEffect(() => {
		switch (value) {
			case PagesEnum.DIY:
				setComponentToRender(<DIY />);
				setHeaderTitle("title.diy");
				break;
			case PagesEnum.HOME:
				setComponentToRender(<Home />);
				setHeaderTitle("title.home");
				break;
			case PagesEnum.LIBRARY:
				setComponentToRender(<Library />);
				setHeaderTitle("title.library");
				break;
			case PagesEnum.TODO:
				setComponentToRender(<ToDoList />);
				setHeaderTitle("title.todo");
				break;
			case PagesEnum.CALENDAR:
				setComponentToRender(<CalendarPage />);
				setHeaderTitle("title.calendar");
				break;
			case PagesEnum.FINANCE:
				setComponentToRender(<Finance />);
				setHeaderTitle("title.finance");
				break;

			default:
				break;
		}
	}, [value]);

	function changeLanguage(language: string) {
		i18next.changeLanguage(language, (err, t) => {
			if (err) return console.log("something went wrong loading", err);
			t("key");
		});
		setHeaderTitle(headerTitle);
	}
	return (
		<Layout>
			<SideMenu />
			<Layout>
				<Header style={{ paddingRight: 50, background: colorBgContainer }}>
					<Flex justify="space-between" align="center">
						<Title style={{ margin: "auto" }}>{t(headerTitle)}</Title>
						<Dropdown menu={{ items }} trigger={["click"]}>
							<Button
								type="text"
								icon={<TranslationOutlined />}
								onClick={(e) => e.preventDefault()}
								style={{
									fontSize: "16px",
									height: 64,
									maxWidth: 160,
								}}
							>
								<Text className="button-text">{t("language.change")}</Text>
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
};

export default App;
