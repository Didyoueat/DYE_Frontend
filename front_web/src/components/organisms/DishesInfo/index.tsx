import React from "react";
import useModal from "@hooks/useModal";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import DropDown from "@molecules/DropDown";
import Modal from "@molecules/Modal";
import DishAddForm from "@organisms/DishAddForm";

const DishesInfo = (info) => {
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
		<Box width="1564px" height="888px" padding="44px" borderRadius="20px">
			<Box type="rowFlex">
				<Button
					type="defaultRed"
					width="212px"
					height="44px"
					onClick={dishAdd.handleModal}
				>
					반찬 추가하기
				</Button>
				{dishAdd.showModal && (
					<DishAddForm
						showModal={dishAdd.showModal}
						handleModal={dishAdd.handleModal}
						handleComplete={handleAddComplete}
						cancelButton="취소"
						submitButton="저장"
					/>
				)}
				<DropDown items={["카테고리?", "뭐가", "있지"]} />
			</Box>
			<Button type="defaultWhite" onClick={dishDelete.handleModal}>
				삭제
			</Button>
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
