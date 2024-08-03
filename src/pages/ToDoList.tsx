import { Button, Col, Input, Row, Space } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const ToDoList = () => {
	const [itemsList, setItemsList] = useState<string[]>(["note1", "note2", "note3"]);

	const addNewItem = () => {
		setItemsList((items) => [...items, "new"]);
	};
	const deleteItem = (idx: number) => {
		setItemsList((items) => {
			let updatedItems = [...items]; // Crea una copia dell'array originale
			updatedItems = updatedItems.splice(idx, 1); // Rimuovi l'elemento dalla copia
			return updatedItems; // Restituisci la copia aggiornata
		});
	};
	return (
		<Space direction="vertical" size="middle" style={{ display: "flex" }}>
			{itemsList.map((item, idx) => (
				<Space.Compact key={idx} style={{ width: "100%" }}>
					<Input size="large" defaultValue={item} />
					{itemsList[itemsList.length - 1] === item && (
						<Button type="primary" icon={<PlusOutlined />} size="large" onClick={addNewItem}></Button>
					)}
					<Button type="primary" icon={<DeleteOutlined />} size="large" danger onClick={() => deleteItem(idx)}></Button>
				</Space.Compact>
			))}
		</Space>
	);
};
export default ToDoList;
