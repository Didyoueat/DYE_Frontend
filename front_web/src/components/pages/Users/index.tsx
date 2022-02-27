import React, { useMemo, useEffect, useState } from "react";
import Base from "@organisms/Base";
import Box from "@atoms/Box";
import Table from "@molecules/Table";
import TableFilter from "@molecules/TableFilter";

const Users = () => {
	// 일단 더미데이터 사용
	const columns = useMemo(
		() => [
			{
				Header: "고객 번호",
				accessor: "userId",
			},
			{
				Header: "고객명",
				accessor: "userName",
			},
			{
				Header: "구독 상태",
				accessor: "subsState",
			},
			{
				Header: "구독 주차",
				accessor: "subsWeeks",
			},
			{
				Header: "고객 연락처",
				accessor: "userPhone",
			},
			{
				Header: "지난 주문 보기",
				accessor: "lastOrder",
			},
		],
		[],
	);

	const userData = [
		{
			userId: 1,
			userName: "박승한",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 2,
			userName: "김성수",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 3,
			userName: "정현지",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 4,
			userName: "이지환",
			subsState: "미 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 5,
			userName: "유저 1",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 6,
			userName: "유저 2",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 7,
			userName: "유저 3",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 8,
			userName: "유저 4",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 9,
			userName: "유저 5",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 10,
			userName: "유저 6",
			subsState: "미 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 11,
			userName: "유저 7",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 12,
			userName: "유저 8",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 13,
			userName: "유저 9",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 14,
			userName: "유저 10",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 15,
			userName: "유저 11",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 16,
			userName: "유저 12",
			subsState: "미 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 17,
			userName: "유저 13",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 18,
			userName: "유저 14",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 19,
			userName: "유저 15",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 20,
			userName: "유저 16",
			subsState: "신규 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 21,
			userName: "유저 17",
			subsState: "구독 중",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
		{
			userId: 22,
			userName: "유저 18",
			subsState: "미 구독",
			userPhone: "010-1234-1234",
			lastOrder: "-",
		},
	];

	const stateManager = (e) => {
		setFlag(false);
		setTest(
			userData.filter(
				(value) =>
					e.target.value === "전체" ||
					e.target.value === value.subsState,
			),
		);
		setFilter(e.target.innerText.split("(")[0]);
	};

	const matrix = {
		stateManager: stateManager,
		category: [
			{
				name: "구독 상태",
				filter: ["전체", "구독 중", "신규 구독", "미 구독"],
				data: userData.map((value) => value.subsState),
			},
			{
				name: "고객 등급",
				filter: [],
				data: [],
			},
			{
				name: "주문 유형",
				filter: ["정기 구독", "단기 구매"],
				data: [],
			},
		],
	};

	const [test, setTest] = useState(userData);
	const [filter, setFilter] = useState("전체");
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		setFlag(true);
	}, [test]);

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
					<TableFilter
						stateManager={matrix.stateManager}
						category={matrix.category}
					/>
				</Box>
				<Box type="colFlex" width="100%">
					{!flag ? (
						"로딩중"
					) : (
						<Table
							columns={columns}
							datas={test}
							filter={filter}
							count={userData.length}
						/>
					)}
				</Box>
			</Box>
		</Base>
	);
};

export default Users;
