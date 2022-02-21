import Tbody from "@atoms/Tbody";
import Thead from "@atoms/Thead";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled, { css } from "styled-components";

interface STable {
	color?: string;
	// 나중에 style 요소 추가
}

const TableStyles = css<STable>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledTable = styled.table<STable>`
	${TableStyles};
`;

export interface TableProps extends STable {
	columnsTemp?: any;
	dataTemp?: any;
	children?: any;
}

const Table = ({ columnsTemp, dataTemp, children, ...props }: TableProps) => {
	const columns = useMemo(() => columnsTemp, []);
	const data = useMemo(() => dataTemp, []);

	console.log(columns, data);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<StyledTable>
			<Thead>
				{headerGroups.map((headerGroup) => (
					<tr
						key={headerGroup}
						{...headerGroup.getHeaderGroupProps()}
					>
						{headerGroup.headers.map((column) => (
							<th key={column} {...column.getHeaderProps()}>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</Thead>
			<Tbody>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr key={row} {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td key={cell} {...cell.getCellProps()}>
									{cell.render("Cell")}
								</td>
							))}
						</tr>
					);
				})}
			</Tbody>
		</StyledTable>
	);
};

export default Table;
