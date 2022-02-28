import React, { useMemo, useEffect, useState } from "react";
import Base from "@organisms/Base";
import Box from "@atoms/Box";
import Table from "@molecules/Table";

const Users = () => {
	// 일단 더미데이터 사용
	const columns = useMemo(
		() => [
			{ Header: "고객 등급", accessor: "userGrade" },
			{ Header: "고객 명", accessor: "userName" },
			{ Header: "구독 상태", accessor: "subsState" },
			{ Header: "구독 주차", accessor: "subsWeeks" },
			{ Header: "지난 주문 보기", accessor: "lastOrder" },
		],
		[],
	);

	const userData = [
		{
			userGrade: "단골 고객",
			userName: "박승한",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "김성수",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "정현지",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "이지환",
			subsState: "미 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "유저 1",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "유저 2",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "유저 3",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "유저 4",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "단골 고객",
			userName: "유저 5",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 6",
			subsState: "미 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 7",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 8",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 9",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 10",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 11",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 12",
			subsState: "미 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 13",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 14",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 15",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 16",
			subsState: "신규 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 17",
			subsState: "구독 중",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
		{
			userGrade: "일반 고객",
			userName: "유저 18",
			subsState: "미 구독",
			subsWeeks: "n주차",
			lastOrder: "-",
		},
	];

	const [data, setData] = useState(userData);
	const [filter, setFilter] = useState("전체");
	const [flag, setFlag] = useState(false);

	const buttonStateManager = (e, flag: string) => {
		setFlag(false);
		setData(
			userData.filter(
				(value) =>
					e.target.value === "전체" || e.target.value === value[flag],
			),
		);
		setFilter(e.target.value);
	};

	const filterData = [
		{
			type: "button",
			name: "구독 상태",
			filter: ["전체", "구독 중", "신규 구독", "미 구독"],
			flag: "subsState",
			data: userData.map((value) => value.subsState),
		},
		{
			type: "button",
			name: "고객 등급",
			filter: ["전체", "단골 고객", "일반 고객"],
			flag: "userGrade",
			data: userData.map((value) => value.userGrade),
		},
	];

	useEffect(() => {
		setFlag(true);
	}, [data]);

	return (
		<Base>
			<Box
				type="rowFlex"
				padding="0 0.5em"
				width="80%"
				height="100%"
				background="#ffffff"
			>
				<Box type="colFlex" width="100%">
					{!flag ? (
						"로딩중"
					) : (
						<Table
							columns={columns}
							datas={data}
							count={userData.length}
							buttonStateManager={buttonStateManager}
							filterData={filterData}
						/>
					)}
				</Box>
			</Box>
		</Base>
	);
};

export default Users;
