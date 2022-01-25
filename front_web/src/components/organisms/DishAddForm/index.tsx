import React, { useState } from "react";
import useInput from "@hooks/useInput";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import LabelInput from "@molecules/LabelInput";
import { ModalProps } from "@interfaces/modal.interface";
import Modal from "@molecules/Modal";

const DishAddForm = ({ ...props }: ModalProps) => {
	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
	const title = useInput("");
	const price = useInput("");
	const weight = useInput("");
	const maxOrders = useInput("");
	const content = useInput("");

	return (
		<Modal {...props}>
			<Box>
				<Text type="title">반찬 정보</Text>
				<Box type="rowFlex">
					<LabelInput
						label="주문 가능 여부"
						type="checkbox"
						id=""
						onChange={(e) => console.log(e.target.value)}
					/>
					<LabelInput
						label="반찬 사진"
						type="file"
						id="imageUrl"
						onChange={(e) => {
							if (e.target.files) setSelectedFile(e.target.files);
						}}
					/>
					<LabelInput
						label="반찬 이름"
						type="text"
						id="title"
						onChange={title.onChange}
						value={title.value}
					/>
					{/* 반찬 분류 들어갈 곳 */}
					<LabelInput
						label="가격(원)"
						type="number"
						id="price"
						onChange={price.onChange}
						value={price.value}
					/>
					<LabelInput
						label="무게(g)"
						type="number"
						id="weight"
						onChange={weight.onChange}
						value={weight.value}
					/>
					<LabelInput
						label="1일 최대 주문량"
						type="number"
						id="maxOrders"
						onChange={maxOrders.onChange}
						value={maxOrders.value}
					/>
					<LabelInput
						label="반찬 소개글"
						type="text"
						id="content"
						onChange={content.onChange}
						value={content.value}
					/>
				</Box>
			</Box>
		</Modal>
	);
};

export default DishAddForm;
