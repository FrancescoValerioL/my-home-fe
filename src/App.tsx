/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./App.scss";
import { Layout, theme, Typography } from "antd";
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
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";

const App = () => {
	const { value } = useMyContext();
	const [componentToRender, setComponentToRender] = useState<any>();
	const [headerTitle, setHeaderTitle] = useState<string>("Home");
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

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
	return (
		<Layout>
			<SideMenu />
			<Layout>
				<Header style={{ paddingRight: 50, background: colorBgContainer }}>
					<LayoutHeader headerTitle={headerTitle} />
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
