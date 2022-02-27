import React from "react";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

interface matrix {
	stateManager: any;
	category: Array<{
		name: string;
		filter: Array<string>;
		data: Array<string>;
	}>;
}

const TableFilter = ({ stateManager, category }: matrix) => {
	return (
		<>
			{category.map((row, idx: number) => {
				return (
					<Box type="rowFlex" width="100%" key={idx}>
						<Text type="bold">{`${row.name}: `}</Text>
						{row.filter.map((col, idx: number) => {
							return (
								<Button
									onClick={(e) => stateManager(e)}
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
			})}
		</>
	);
};

export default TableFilter;
