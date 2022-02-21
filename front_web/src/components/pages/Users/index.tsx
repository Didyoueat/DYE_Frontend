import React from "react";
import Base from "@organisms/Base";
import Box from "@atoms/Box";
import Table from "@molecules/Table";

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
			></Box>
			<Box
				type="rowFlex"
				padding="0 0.5em"
				width="80%"
				height="100%"
				background="#ffffff"
			>
				<Table columnsTemp={columnData} dataTemp={imshidata} />
			</Box>
		</Base>
	);
};

export default Users;
