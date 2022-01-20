import React from "react";
import useModal from "@hooks/useModal";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import DropDown from "@molecules/DropDown";
import Modal from "@molecules/Modal";
import DishAddForm from "@organisms/DishAddForm";

const DishesInfo = (info: any) => {
	const dishes = info.info.dishes;

	const dishAdd = useModal();
	const handleAddComplete = () => {
		console.log("add submit");
		dishAdd.handleModal();
	};

	const dishDelete = useModal();
	const handleDeleteComplete = () => {
		console.log("delete submit");
		dishDelete.handleModal();
	};

	return (
		<Box width="100%" height="100%">
			<Box type="rowFlex">
				<Button onClick={dishAdd.handleModal}>반찬 추가하기</Button>
				{dishAdd.showModal && (
					<Modal
						showModal={dishAdd.showModal}
						handleModal={dishAdd.handleModal}
						handleComplete={handleAddComplete}
						cancelButton="취소"
						submitButton="저장"
					>
						<DishAddForm />
					</Modal>
				)}
				<DropDown items={["카테고리?", "뭐가", "있지"]} />
			</Box>
			<Button onClick={dishDelete.handleModal}>삭제</Button>
			{dishDelete.showModal && (
				<Modal
					showModal={dishDelete.showModal}
					handleModal={dishDelete.handleModal}
					handleComplete={handleDeleteComplete}
					cancelButton="아니요"
					submitButton="네"
				>
					이 반찬을 정말 삭제하시겠습니까?
				</Modal>
			)}
		</Box>
	);
};

export default DishesInfo;
