import { Flex } from "antd";
import DIYCard from "../components/DIYCard/DIYCard";
import DIYInterface from "../interfaces/DIY";

const DIY = () => {
	const cards: DIYInterface[] = [
		{
			title: "DIY Test",
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
			title: "DIY Test 2",
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
			title: "DIY Test 3",
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
			{cards.map((card, idx) => (
				<DIYCard key={idx} card={card} />
			))}
		</Flex>
	);
};
export default DIY;
