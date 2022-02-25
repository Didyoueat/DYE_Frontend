import React from "react";
import Base from "@organisms/Base";
import Box from "@atoms/Box";
import Table from "@molecules/Table";
import Text from "@atoms/Text";
import DropDown from "@molecules/DropDown";
import Input from "@atoms/Input";

const Users = () => {
	// 일단 더미데이터 사용
	const columnData = [
		{
			accessor: "userId",
			Header: "고객 번호",
		},
		{
			accessor: "userName",
			Header: "고객명",
		},
		{
			accessor: "subState",
			Header: "구독 상태",
		},
		{
			accessor: "subWeeks",
			Header: "구독 주차",
		},
		{
			accessor: "userPhone",
			Header: "고객 연락처",
		},
		{
			accessor: "lastOrder",
			Header: "지난 주문 보기",
		},
	];

	const imshidata = [
		{
			userId: 1,
			userName: "현지",
			subState: "구독 중",
			subWeeks: "1",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 1,
			userName: "현지",
			subState: "구독 중",
			subWeeks: "1",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 1,
			userName: "현지",
			subState: "구독 중",
			subWeeks: "1",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 1,
			userName: "현지",
			subState: "구독 중",
			subWeeks: "1",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 1,
			userName: "현지",
			subState: "구독 중",
			subWeeks: "1",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
	];

	return (
		<Base>
			<Box
				type="rowFlex"
				padding="0 0.5em"
				width="80%"
				height="100%"
				background="#ffffff"
			>
				<Box
					type="colFlex"
					padding="0.1em"
					width="100%"
					border="1px solid #333333"
				>
					<Box type="rowFlex" width="100%">
						<Text type="bold">구독 상태: </Text>
						<Box border="1px solid #333333">전체 고객</Box>
						<Box border="1px solid #333333">구독 중</Box>
						<Box border="1px solid #333333">신규 구독</Box>
						<Box border="1px solid #333333">미구독</Box>
					</Box>
					<Box type="rowFlex" width="100%">
						<Text type="bold">고객 등급: </Text>
					</Box>
					<Box type="rowFlex" width="100%">
						<Text type="bold">주문 유형: </Text>
					</Box>
				</Box>
				<Box type="colFlex" width="100%">
					<Box type="rowFlex" width="100%">
						<Text type="bold">
							총 고객 수: 000 검색된 고객 수: 000
						</Text>
						<Box type="rowFlex">
							<DropDown
								items={[
									"모두",
									"고객 번호",
									"고객명",
									"고객 연락처",
								]}
								onChange={(e) => {
									console.log(e.target.value);
								}}
								selected={0}
							/>
							<Input
								type="text"
								id="userSearch"
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</Box>
					</Box>
					<Table
						width="100%"
						columnsTemp={columnData}
						dataTemp={imshidata}
					/>
				</Box>
			</Box>
		</Base>
	);
};

export default Users;
