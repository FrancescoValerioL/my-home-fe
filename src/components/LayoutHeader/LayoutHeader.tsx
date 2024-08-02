import { Flex, Dropdown, Button, Typography, MenuProps } from "antd";
import Title from "antd/es/skeleton/Title";
import { changeLanguage, t } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DownOutlined, TranslationOutlined } from "@ant-design/icons";

const LayoutHeader = (props: HeaderProps) => {
	const { Text, Title } = Typography;
	const { t, i18n } = useTranslation();
	const [headerTitle, setHeaderTitle] = useState<string>("Home");

	useEffect(() => {
		setHeaderTitle(props.headerTitle);
	}, [props.headerTitle]);

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
	return (
		<Flex justify="space-between" align="center">
			<Title level={2} style={{ margin: "auto" }} type="secondary">
				{t(headerTitle)}
			</Title>
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
	);
};
export default LayoutHeader;
interface HeaderProps {
	headerTitle: string;
}
