import { Card, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DIYCard from "../components/DIYCard/DIYCard";
import DIYInterface from "../interfaces/DIY";
import { useTranslation } from "react-i18next";

const DIY = () => {
	const { t, i18n } = useTranslation();
	const cards: DIYInterface[] = [
		{
			img: "https://i.pinimg.com/736x/98/32/b5/9832b509b99e3b44ee3e105322318ff8.jpg",
			title: "Sedia",
			materials: [
				{
					name: "wood",
					quantity: 3,
					obtained: true,
				},
			],
			started: true,
			completed: false,
			notes: "CIAO",
		},
		{
			img: "https://i.pinimg.com/564x/81/cc/29/81cc2985e55c93e45db82df66c9f6bef.jpg",
			title: "Scaffale",
			materials: [
				{
					name: "wood",
					quantity: 3,
					obtained: true,
				},
			],
			started: false,
			completed: true,
			notes: "CIAO",
		},
		{
			img: "https://i.pinimg.com/736x/5f/32/98/5f3298cd45b8461bc964949bec6b90ac.jpg",
			title: "Coffee Table",
			materials: [
				{
					name: "wood",
					quantity: 3,
					obtained: true,
				},
				{
					name: "strings",
					quantity: 3,
					obtained: true,
				},
				{
					name: "test",
					quantity: 3,
					obtained: true,
				},
			],
			started: false,
			completed: false,
			notes: "CIAO",
		},
	];
	return (
		<Flex justify="space-around">
			<Card
				title={t("diy.new")}
				style={{ width: 300, height: 150, cursor: "pointer" }}
				onClick={() => console.log("Click")}
			>
				<Flex justify="center" align="center">
					<PlusOutlined style={{ fontSize: 50, color: "grey" }} />
				</Flex>
			</Card>
			{cards.map((card, idx) => (
				<DIYCard key={idx} card={card} />
			))}
		</Flex>
	);
};
export default DIY;
