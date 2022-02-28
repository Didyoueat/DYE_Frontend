import React, { useState, useEffect } from "react";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Button from "@atoms/Button";
import Input from "@atoms/Input";
import { formatCalendarDate, stringToDate } from "@hooks/datetime";

interface matrix {
	buttonStateManager: any;
	dateStateManager: any;
	filterData: Array<{
		type: string;
		name: string;
		filter: Array<string>;
		flag: string;
		data: Array<string>;
	}>;
	clickedButton: any;
}

const TableFilter = ({
	buttonStateManager,
	dateStateManager,
	filterData,
	clickedButton,
}: matrix) => {
	const [clickedDate, setClickedDate]: [[Date, Date, number] | null, any] =
		useState(!isNaN(clickedButton[2]) ? clickedButton : null);
	const [controlDate, setControlDate] = useState(
		clickedDate
			? () => {
					const row1 = [];
					const row2 = [];

					row1[clickedDate[2]] = clickedDate[0];
					row2[clickedDate[2]] = clickedDate[1];

					return [row1, row2];
			  }
			: [[], []],
	);
	const [startDate, setStartDate] = useState(controlDate[0]);
	const [endDate, setEndDate] = useState(controlDate[1]);

	useEffect(() => {
		setStartDate(controlDate[0]);
		setEndDate(controlDate[1]);
	}, [controlDate]);

	const handleCalendar = (
		e: any,
		type: string,
		flag: string,
		idx: number,
	) => {
		const dateType = type === "start" ? 0 : 1;
		const dateTemp: any = controlDate;

		dateTemp[dateType][idx] = e.target.value;
		console.log(dateTemp);

		setControlDate(dateTemp);

		if (dateTemp[0][idx] && dateTemp[1][idx]) {
			dateStateManager([dateTemp[0][idx], dateTemp[1][idx]], flag, idx);
		}
	};

	const handleDateButton = (
		e: any,
		flag: string,
		idx1: number,
		idx2: number,
	) => {
		const filterName = e.target.value;
		const today = formatCalendarDate(new Date());
		const year = parseInt(today.split("-")[0], 10);
		const month = parseInt(today.split("-")[1], 10) - 1;
		const day = parseInt(today.split("-")[2], 10);
		const getDate = (year, month, day) => new Date(year, month, day, 9);

		const dateTemp =
			filterName === "전체"
				? [null, null]
				: filterName === "오늘"
				? [getDate(year, month, day), getDate(year, month, day)]
				: filterName === "어제"
				? [getDate(year, month, day - 1), getDate(year, month, day - 1)]
				: filterName === "내일"
				? [getDate(year, month, day + 1), getDate(year, month, day + 1)]
				: [null, null];

		dateStateManager(dateTemp, flag, idx1, idx2);
	};

	return (
		<>
			{filterData.map((row, idx1: number) => {
				if (row.type === "button") {
					return (
						<Box
							type="rowFlex"
							flexJustify="flex-start"
							width="100%"
							key={idx1}
						>
							<Text type="bold">{`${row.name}`}</Text>
							<Box type="filterButtonWrapper">
								{row.filter.map((col, idx2: number) => {
									return (
										<Button
											styleType={
												col === clickedButton.name
													? "filterRed"
													: "filterNone"
											}
											onClick={(e) => {
												e.preventDefault();
												buttonStateManager(
													e,
													row.flag,
													idx1,
													idx2,
												);
											}}
											value={`${col}`}
											key={idx2}
										>{`${col} 
								(${
									row.data.length > 0
										? row.data.filter(
												(value) =>
													col === "전체" ||
													col === value,
										  ).length
										: ""
								})
								`}</Button>
									);
								})}
							</Box>
						</Box>
					);
				} else if (row.type === "date") {
					return (
						<Box
							type="rowFlex"
							flexJustify="flex-start"
							width="100%"
							key={idx1}
						>
							<Text type="bold">{`${row.name}`}</Text>
							<Box type="rowFlex" margin="12px 16px">
								<Input
									type="date"
									value={
										startDate[idx1]
											? formatCalendarDate(
													startDate[idx1],
											  )
											: undefined
									}
									onChange={(e) => {
										e.preventDefault();
										handleCalendar(
											e,
											"start",
											row.flag,
											idx1,
										);
									}}
								></Input>
								~
								<Input
									type="date"
									value={
										endDate[idx1]
											? formatCalendarDate(endDate[idx1])
											: undefined
									}
									onChange={(e) => {
										e.preventDefault();
										handleCalendar(
											e,
											"end",
											row.flag,
											idx1,
										);
									}}
								></Input>
							</Box>
							<Box type="filterButtonWrapper">
								{row.filter.map((col, idx2: number) => {
									return (
										<Button
											styleType={
												col === clickedButton.name
													? "filterRed"
													: "filterNone"
											}
											width="80px"
											onClick={(e) => {
												handleDateButton(
													e,
													row.flag,
													idx1,
													idx2,
												);
											}}
											value={`${col}`}
											key={idx2}
										>{`${col} 
								`}</Button>
									);
								})}
							</Box>
						</Box>
					);
				}
			})}
		</>
	);
};

export default TableFilter;
