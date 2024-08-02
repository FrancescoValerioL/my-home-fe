import { Card, Flex, Image } from "antd";
import React from "react";
import diy from "../assets/images/diy.jpg";
import calendar from "../assets/images/calendar.jpg";
import library from "../assets/images/library.jpg";
import todo from "../assets/images/todo.jpg";
import { useTranslation } from "react-i18next";
import { useMyContext } from "../services/MyProvider";
import PagesEnum from "../services/PagesEnum";

const Home: React.FC = () => {
	const { t, i18n } = useTranslation();
	const { setValue } = useMyContext();

	const updateValue = (page: PagesEnum) => {
		setValue(page);
	};
	return (
		<Flex gap="large" justify="center" wrap align="center">
			<Card
				title={t("title.todo")}
				style={{ width: 300, cursor: "pointer" }}
				onClick={() => updateValue(PagesEnum.TODO)}
			>
				<Image preview={false} width={250} src={todo} />
			</Card>
			<Card title={t("title.diy")} style={{ width: 300, cursor: "pointer" }} onClick={() => updateValue(PagesEnum.DIY)}>
				<Image preview={false} width={250} src={diy} />
			</Card>
			<Card
				title={t("title.library")}
				style={{ width: 300, cursor: "pointer" }}
				onClick={() => updateValue(PagesEnum.LIBRARY)}
			>
				<Image preview={false} width={250} src={library} />
			</Card>
			<Card
				title={t("title.calendar")}
				style={{ width: 300, cursor: "pointer" }}
				onClick={() => updateValue(PagesEnum.CALENDAR)}
			>
				<Image preview={false} width={250} src={calendar} />
			</Card>
			<Card
				title={t("title.finance")}
				style={{ width: 300, cursor: "pointer" }}
				onClick={() => updateValue(PagesEnum.FINANCE)}
			>
				<Image preview={false} width={250} src={calendar} />
			</Card>
		</Flex>
	);
};
export default Home;
