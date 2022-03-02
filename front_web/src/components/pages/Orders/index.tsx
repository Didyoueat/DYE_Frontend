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
			{ Header: "주문 일자", accessor: "orderDay" },
			{ Header: "배송 담당자", accessor: "deliveryMan" },
		],
		[],
	);

	const userData = () => {
		const dummy = [];

		for (let i = 0; i < 250; i++) {
			dummy.push({
				orderState:
					i < 3
						? "결제 대기"
						: i < 6
						? "결제 완료"
						: i < 9
						? "준비 중"
						: i < 12
						? "배송 대기"
						: i < 15
						? "배송 중"
						: i < 18
						? "배송 완료"
						: "주문 취소",
				userName: `유저 ${i + 1}`,
				orderId: i + 1,
				orderPrice: 3000,
				deliveryDay:
					i < 3
						? dateToString(new Date(2022, 1, 28, 7))
						: i < 6
						? dateToString(new Date(2022, 2, 1, 7))
						: i < 9
						? dateToString(new Date(2022, 2, 2, 7))
						: i < 12
						? dateToString(new Date(2022, 2, 9, 7))
						: i < 15
						? dateToString(new Date(2022, 1, 25, 7))
						: dateToString(new Date(2022, 0, 28, 7)),
				orderDay:
					i < 3
						? dateToString(new Date(2022, 1, 28 - 1, 7))
						: i < 6
						? dateToString(new Date(2022, 2, 1 - 1, 7))
						: i < 9
						? dateToString(new Date(2022, 2, 2 - 1, 7))
						: i < 12
						? dateToString(new Date(2022, 2, 9 - 1, 7))
						: i < 15
						? dateToString(new Date(2022, 1, 25 - 1, 7))
						: dateToString(new Date(2022, 0, 28 - 1, 7)),
				deliveryMan: "김성수",
			});
		}

		return dummy;
	};

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
			data: userData().map((value) => value.orderState),
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
			data: userData().map((value) => value.orderDay),
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
			data: userData().map((value) => value.deliveryDay),
		},
	];
	const [data, setData] = useState(userData());
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
			userData().filter(
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
			userData().filter((value) => {
				const nowDate = stringToDate(value[flag], true);

				return (
					(!date[0] && !date[1]) ||
					(startDate <= nowDate && nowDate <= endDate)
				);
			}),
		);

		if (idx2 === null) {
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

	const settingData = (originData) => {
		const newData = originData;
		const necessaryRow = 10 - (originData.length % 10);
		const column = columns.map((value) => value.accessor);
		if (necessaryRow !== 10 || !originData.length) {
			for (let i = 0; i < necessaryRow; i++) {
				const row = () => {
					const newRow = {};

					column.map((value) => {
						newRow[value] = "ㅤ";
					});
					return newRow;
				};

				newData.push(row());
			}
		}
		return newData;
	};
	settingData(data);
	return (
		<Base>
			{!flag ? null : (
				<Table
					columns={columns}
					datas={settingData(data)}
					count={userData().length}
					buttonStateManager={buttonStateManager}
					dateStateManager={dateStateManager}
					filterData={filterData}
					clickedButton={clickedButton || clickedDate}
				/>
			)}
		</Base>
	);
};

export default Orders;
