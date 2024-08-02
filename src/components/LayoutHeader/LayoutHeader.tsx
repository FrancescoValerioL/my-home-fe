import { Flex, Dropdown, Button, Typography, MenuProps, Space } from "antd";
import { Image } from "antd";
import { changeLanguage, t } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DownOutlined, TranslationOutlined } from "@ant-design/icons";
import en from "../../assets/images/flags/en.svg";
import it from "../../assets/images/flags/it.svg";

const LayoutHeader = (props: HeaderProps) => {
	const { Text, Title } = Typography;
	const { t, i18n } = useTranslation();
	const [headerTitle, setHeaderTitle] = useState<string>("Home");

	useEffect(() => {
		setHeaderTitle(props.headerTitle);
	}, [props.headerTitle]);

	const items: MenuProps["items"] = [
		{
			label: (
				<Space onClick={() => changeLanguage("en")}>
					<Image preview={false} width={16} src={en} />
					{t("language.en")}
				</Space>
			),
			key: "0",
		},
		{
			label: (
				<Space onClick={() => changeLanguage("it")}>
					<Image preview={false} width={16} src={it} />
					{t("language.it")}
				</Space>
			),
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
