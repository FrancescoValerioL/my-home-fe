import React, { useState } from "react";
import { Button, Modal, Image, Col, Row, Typography, Flex, Space, Table, Checkbox, GetProp, Divider } from "antd";
import { EditOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import TextArea from "antd/es/input/TextArea";
import DIYInterface from "../../interfaces/DIY";
import MaterialInterface from "../../interfaces/Material";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (checkedValues) => {
	console.log("checked = ", checkedValues);
};

const DIYModal = (props: { diy: DIYInterface }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [value, setValue] = useState(props.diy.notes);
	const { t, i18n } = useTranslation();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const dataSource = props.diy.materials.map((material: MaterialInterface, idx: number) => {
		const newMaterial = {
			key: idx,
			material: material.name,
			quantity: material.quantity,
			obtained: material.obtained,
		};
		return newMaterial;
	});

	const columns = [
		{
			title: t("diy.material"),
			dataIndex: "material",
			key: "material",
		},
		{
			title: t("diy.qty"),
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: t("diy.obtained"),
			dataIndex: "obtained",
			key: "obtained",
			render: (obtained: boolean) =>
				obtained === true ? (
					<Flex justify="center">
						<Text type="success">
							<CheckOutlined />
						</Text>
					</Flex>
				) : (
					<Flex justify="center">
						<Text type="danger">
							<CloseOutlined />
						</Text>
					</Flex>
				),
		},
	];

	const options = [
		{ label: t("diy.started"), value: "started" },
		{ label: t("diy.completed"), value: "completed" },
	];

	return (
		<>
			<EditOutlined onClick={showModal} key="edit" />
			<Modal
				title={props.diy.title}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				width={800}
				footer={
					<Button type="primary" onClick={handleOk}>
						Save
					</Button>
				}
			>
				<Row>
					<Col span={8}>
						<Image preview={false} width="auto" src={logo} />
					</Col>
					<Col span={16}>
						<Flex justify="center">
							<Table dataSource={dataSource} columns={columns} pagination={false} />
						</Flex>
					</Col>
				</Row>
				<Divider dashed />
				<Row>
					<Col span={24}>
						<Flex justify="center">
							<Checkbox.Group
								options={options}
								defaultValue={[props.diy.started && "started", props.diy.completed && "completed"]}
								onChange={onChange}
							/>
						</Flex>
					</Col>
				</Row>
				<Divider dashed />
				<Row>
					<Col span={24}>
						<TextArea
							value={value}
							onChange={(e) => setValue(e.target.value)}
							defaultValue={props.diy.notes}
							autoSize={{ minRows: 10, maxRows: 15 }}
						/>
					</Col>
				</Row>
			</Modal>
		</>
	);
};

export default DIYModal;
