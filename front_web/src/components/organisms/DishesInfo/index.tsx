import React from "react";
import useModal from "../../../hooks/useModal";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import DishDelete from "../../molecules/DishDelete";
import Modal from "../../molecules/Modal";

const DishesInfo = () => {
	// const dishAdd = useModal();
	const dishDelete = useModal();

	return (
		<Box width="100%" height="100%">
			<Button>반찬 추가하기</Button>
			<Button onClick={dishDelete.handleModal}>삭제</Button>
			{dishDelete.showModal && (
				<Modal
					showModal={dishDelete.showModal}
					handleModal={dishDelete.handleModal}
				>
					<DishDelete />
				</Modal>
			)}
		</Box>
	);
};

export default DishesInfo;
