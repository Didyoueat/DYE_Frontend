import React, { useMemo } from "react";
import useModal from "@hooks/useModal";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import DishAddForm from "@organisms/DishAddForm";
import Table from "@molecules/Table";

// import Modal from "@molecules/Modal";
import img from "@assets/imshiShopImg.png";
import Text from "@atoms/Text";

// todo: 다른 컴포넌트에서도 사용한다면 따로 빼기
const ImgCell = (cell) => {
	return <img src={cell.cell.value} />;
};

const DishesInfo = (info) => {
	// 일단 더미데이터 사용, api 요청 시 info 사용
	const columns = useMemo(
		() => [
			{ Header: "반찬 사진", accessor: "imageUrl", Cell: ImgCell },
			{ Header: "반찬 이름", accessor: "title" },
			{ Header: "반찬 유형", accessor: "main" },
			{ Header: "무게(g)", accessor: "weight" },
			{ Header: "가격(원)", accessor: "price" },
		],
		[],
	);

	const dishData = [
		{
			imageUrl: img,
			title: "제육볶음",
			main: "메인 반찬",
			weight: 150,
			price: 5000,
		},
		{
			imageUrl: img,
			title: "돈까스",
			main: "메인 반찬",
			weight: 200,
			price: 6000,
		},
		{
			imageUrl: img,
			title: "가지볶음",
			main: "밑반찬",
			weight: 150,
			price: 3000,
		},
		{
			imageUrl: img,
			title: "아메리카노",
			main: "밑반찬",
			weight: 200,
			price: 3000,
		},
		{
			imageUrl: img,
			title: "삼겹살",
			main: "메인 반찬",
			weight: 300,
			price: 5000,
		},
		{
			imageUrl: img,
			title: "멸치볶음",
			main: "밑반찬",
			weight: 150,
			price: 3000,
		},
		{
			imageUrl: img,
			title: "고사리",
			main: "밑반찬",
			weight: 150,
			price: 3000,
		},
		{
			imageUrl: img,
			title: "마늘쫑무침",
			main: "밑반찬",
			weight: 150,
			price: 3000,
		},
		{
			imageUrl: img,
			title: "고추장찌개",
			main: "메인 반찬",
			weight: 300,
			price: 6000,
		},
		{
			imageUrl: img,
			title: "닭도리탕",
			main: "메인 반찬",
			weight: 500,
			price: 8000,
		},
	];

	const dishAdd = useModal();
	const handleAddComplete = () => {
		console.log("add submit");
		dishAdd.handleModal();
	};

	// const dishDelete = useModal();
	// const handleDeleteComplete = () => {
	// 	console.log("delete submit");
	// 	dishDelete.handleModal();
	// };

	return (
		<Box width="1564px" height="888px" padding="44px" borderRadius="20px">
			<Box type="rowFlex">
				<Button
					styleType="defaultRed"
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
			</Box>
			<Box type="colFlex" width="100%">
				<Text>Table 들어갈 자리</Text>
			</Box>
			{/* <Button type="defaultWhite" onClick={dishDelete.handleModal}>
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
			)} */}
		</Box>
	);
};

export default DishesInfo;
