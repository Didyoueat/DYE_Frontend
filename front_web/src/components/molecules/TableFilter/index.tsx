import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

import "react-datepicker/dist/react-datepicker.css";

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
}

const TableFilter = ({
	buttonStateManager,
	dateStateManager,
	filterData,
}: matrix) => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<>
			{filterData.map((row, idx: number) => {
				if (row.type === "button") {
					return (
						<Box type="rowFlex" width="100%" key={idx}>
							<Text type="bold">{`${row.name}: `}</Text>
							{row.filter.map((col, idx: number) => {
								return (
									<Button
										onClick={(e) =>
											buttonStateManager(e, row.flag)
										}
										value={`${col}`}
										key={idx}
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
					);
				} else if (row.type === "date") {
					return (
						<Box type="rowFlex" width="100%" key={idx}>
							<Text type="bold">{`${row.name}: `}</Text>
							<Box type="rowFlex" width="20%">
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
								/>
								<Text> ~ </Text>
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
								/>
							</Box>
							{row.filter.map((col, idx: number) => {
								return (
									<Button
										onClick={(e) =>
											dateStateManager(e, row.flag)
										}
										value={`${col}`}
										key={idx}
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
					);
				}
			})}
		</>
	);
};

export default TableFilter;
