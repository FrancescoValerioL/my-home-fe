import { Modal, Button, Typography, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FinanceData from "../../interfaces/FinanceData";
const { Paragraph } = Typography;

interface FieldData {
	name: string;
	value?: any;
	touched?: boolean;
	validating?: boolean;
	errors?: string[];
}

interface CustomizedFormProps {
	onChange: (fields: FieldData[]) => void;
	fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => (
	<Form
		name="global_state"
		layout="inline"
		fields={fields}
		onFieldsChange={(_, allFields) => {
			onChange(allFields);
		}}
	>
		<Form.Item name="budget" label="Budget" rules={[{ required: true, message: "Budget is required!" }]}>
			<Input />
		</Form.Item>
		<Form.Item name="spent" label="Spent" rules={[{ required: true, message: "Spent is required!" }]}>
			<Input />
		</Form.Item>
		<Form.Item name="balance" label="Balance">
			<Input disabled />
		</Form.Item>
	</Form>
);

const FinanceModal = (props: { data: FinanceData | undefined }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { t, i18n } = useTranslation();
	const [fields, setFields] = useState<FieldData[]>([]);
	const [budget, setBudget] = useState<number>(props.data?.budget || 0);
	const [spent, setSpent] = useState<number>(props.data?.spent || 0);
	const [balance, setBalance] = useState<number>(props.data ? props.data.budget - props.data.spent : 0);

	useEffect(() => {
		setFields([
			{ name: "budget", value: budget },
			{ name: "spent", value: spent },
			{ name: "balance", value: budget - spent },
		]);
	}, [budget, spent]);

	useEffect(() => {
		if (props.data) {
			setBudget(props.data.budget);
			setSpent(props.data.spent);
			setBalance(props.data.budget - props.data.spent);
		}
	}, [props.data]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleFieldsChange = (changedFields: FieldData[]) => {
		changedFields.forEach((field) => {
			if (field.name == "budget") {
				setBudget(Number(field.value));
			} else if (field.name == "spent") {
				setSpent(Number(field.value));
			}
		});
	};

	return (
		<>
			<Button icon={<EditOutlined />} type="primary" onClick={showModal} key="edit" ghost></Button>
			<Modal
				title={props.data?.category}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				width={900}
				footer={
					<Button type="primary" onClick={handleOk}>
						Save
					</Button>
				}
			>
				<CustomizedForm
					fields={fields}
					onChange={(newFields) => {
						handleFieldsChange(newFields);
					}}
				/>
				<Paragraph style={{ maxWidth: 440, marginTop: 24 }}>
					<pre style={{ border: "none" }}>{JSON.stringify(fields, null, 2)}</pre>
				</Paragraph>
			</Modal>
		</>
	);
};

export default FinanceModal;
