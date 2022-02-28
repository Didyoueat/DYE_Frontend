import React, { useMemo, useEffect, useState } from "react";
import Base from "@organisms/Base";
import Box from "@atoms/Box";
import Table from "@molecules/Table";
import { dateToString, stringToDate } from "@hooks/datetime";

const Orders = () => {
	// 일단 더미데이터 사용
	const columns = useMemo(
		() => [
			{ Header: "주문 상태", accessor: "orderState" },
			{ Header: "고객 명", accessor: "userName" },
			{ Header: "주문 번호", accessor: "orderId" },
			{ Header: "주문 금액", accessor: "orderPrice" },
			{ Header: "배송 일자", accessor: "deliveryDay" },
			{ Header: "배송 담당자", accessor: "deliveryMan" },
		],
		[],
	);

	const userData = [
		{
			orderState: "결제 대기",
			userName: "박승한",
			orderId: 1,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "결제 대기",
			userName: "김성수",
			orderId: 2,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "결제 대기",
			userName: "정현지",
			orderId: 3,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "결제 완료",
			userName: "이지환",
			orderId: 4,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 27, 7)),
			orderDay: dateToString(new Date(2022, 1, 27, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "결제 완료",
			userName: "유저 1",
			orderId: 5,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 27, 7)),
			orderDay: dateToString(new Date(2022, 1, 27, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "결제 완료",
			userName: "유저 2",
			orderId: 6,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 27, 7)),
			orderDay: dateToString(new Date(2022, 1, 27, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "준비 중",
			userName: "유저 3",
			orderId: 7,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 1, 7)),
			orderDay: dateToString(new Date(2022, 2, 1, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "준비 중",
			userName: "유저 4",
			orderId: 8,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 1, 7)),
			orderDay: dateToString(new Date(2022, 2, 1, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "준비 중",
			userName: "유저 5",
			orderId: 9,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 1, 7)),
			orderDay: dateToString(new Date(2022, 2, 1, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 대기",
			userName: "유저 6",
			orderId: 10,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 20, 7)),
			orderDay: dateToString(new Date(2022, 1, 20, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 대기",
			userName: "유저 7",
			orderId: 11,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 20, 7)),
			orderDay: dateToString(new Date(2022, 1, 20, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 대기",
			userName: "유저 8",
			orderId: 12,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 20, 7)),
			orderDay: dateToString(new Date(2022, 1, 20, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 중",
			userName: "유저 9",
			orderId: 13,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 9, 7)),
			orderDay: dateToString(new Date(2022, 2, 9, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 중",
			userName: "유저 10",
			orderId: 14,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 9, 7)),
			orderDay: dateToString(new Date(2022, 2, 9, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 중",
			userName: "유저 11",
			orderId: 15,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 9, 7)),
			orderDay: dateToString(new Date(2022, 2, 9, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 완료",
			userName: "유저 12",
			orderId: 16,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 2, 9, 7)),
			orderDay: dateToString(new Date(2022, 2, 9, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 완료",
			userName: "유저 13",
			orderId: 17,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "배송 완료",
			userName: "유저 14",
			orderId: 18,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "주문 취소",
			userName: "유저 15",
			orderId: 19,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "주문 취소",
			userName: "유저 16",
			orderId: 20,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "주문 취소",
			userName: "유저 17",
			orderId: 21,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
		{
			orderState: "주문 취소",
			userName: "유저 18",
			orderId: 22,
			orderPrice: 3000,
			deliveryDay: dateToString(new Date(2022, 1, 28, 7)),
			orderDay: dateToString(new Date(2022, 1, 28, 7)),
			deliveryMan: "김성수",
		},
	];

	const filterData = [
		{
			type: "button",
			name: "주문 상태",
			filter: [
				"전체",
				"결제 대기",
				"결제 완료",
				"준비 중",
				"배송 대기",
				"배송 중",
				"배송 완료",
				"주문 취소",
			],
			flag: "orderState",
			data: userData.map((value) => value.orderState),
		},
		{
			type: "date",
			name: "주문 일자",
			filter: [
				"전체",
				"오늘",
				"어제",
				"내일",
				"이번주",
				"지난주",
				"다음주",
			],
			flag: "orderDay",
			data: userData.map((value) => value.orderDay),
		},
		{
			type: "date",
			name: "배송 일자",
			filter: [
				"전체",
				"오늘",
				"어제",
				"내일",
				"이번주",
				"지난주",
				"다음주",
			],
			flag: "deliveryDay",
			data: userData.map((value) => value.deliveryDay),
		},
	];
	const [data, setData] = useState(userData);
	const [clickedButton, setClickedButton] = useState({
		idx1: 0,
		idx2: 0,
		name: filterData[0].filter[0],
	});
	const [clickedDate, setClickedDate] = useState([new Date(), new Date(), 0]);
	const [flag, setFlag] = useState(false);

	const buttonStateManager = (
		e,
		flag: string,
		idx1: number,
		idx2: number,
	) => {
		setFlag(false);
		setData(
			userData.filter(
				(value) =>
					e.target.value === "전체" || e.target.value === value[flag],
			),
		);
		setClickedButton({
			idx1: idx1,
			idx2: idx2,
			name: filterData[idx1].filter[idx2],
		});
	};

	const dateStateManager = (
		date: Array<Date>,
		flag: string,
		idx1: number,
		idx2?: number,
	) => {
		const startDate = new Date(date[0]);
		const endDate =
			startDate > new Date(date[1]) ? startDate : new Date(date[1]);

		setFlag(false);

		setData(
			userData.filter((value) => {
				const nowDate = stringToDate(value[flag], true);

				if (startDate === new Date(null)) {
					return true;
				} else {
					return startDate <= nowDate && nowDate <= endDate;
				}
			}),
		);

		if (!idx2) {
			setClickedDate([startDate, endDate, idx1]);
			setClickedButton(null);
		} else {
			setClickedButton({
				idx1: idx1,
				idx2: idx2,
				name: filterData[idx1].filter[idx2],
			});
			setClickedDate(null);
		}
	};

	useEffect(() => {
		setFlag(true);
	}, [data]);

	return (
		<Base>
			<Box width="100%" height="100%">
				{!flag ? (
					"로딩중"
				) : (
					<Table
						columns={columns}
						datas={data}
						count={userData.length}
						buttonStateManager={buttonStateManager}
						dateStateManager={dateStateManager}
						filterData={filterData}
						clickedButton={clickedButton || clickedDate}
					/>
				)}
			</Box>
		</Base>
	);
};

export default Orders;
