import React, { useMemo, useState } from "react";
import { useGlobalFilter, useTable } from "react-table";
import styled, { css } from "styled-components";
import TableSearch from "@molecules/TableSearch";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Thead from "@atoms/Thead";
import Tbody from "@atoms/Tbody";

interface STable {
	width?: string;
	color?: string;
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
	border: 1px solid #333333;
	width: 100%;
`;

export interface TableProps extends STable {
	columns?: any;
	datas?: any;
	filter?: any;
	count?: any;
}

const Table = ({ columns, datas, filter, count }: TableProps) => {
	const [data] = useState(useMemo(() => datas, []));

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		setGlobalFilter,
	} = useTable({ columns, data }, useGlobalFilter);

	return (
		<>
			<Box type="rowFlex" width="100%">
				<Box type="rowFlex">
					<Text type="bold">총 고객 수: {count}</Text>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<Text type="bold">
						{filter} 수: {rows.length}
					</Text>
				</Box>
				<TableSearch setGlobalFilter={setGlobalFilter} />
			</Box>
			<StyledTable {...getTableProps()}>
				<Thead>
					{headerGroups.map((headerGroup, idx) => (
						<tr {...headerGroup.getHeaderGroupProps()} key={idx}>
							{headerGroup.headers.map((column, idx) => (
								<th {...column.getHeaderProps()} key={idx}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</Thead>
				<Tbody {...getTableBodyProps()}>
					{rows.map((row, idx) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} key={idx}>
								{row.cells.map((cell, idx) => {
									return (
										<td {...cell.getCellProps()} key={idx}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</Tbody>
			</StyledTable>
		</>
	);
};

export default Table;
