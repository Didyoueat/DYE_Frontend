import React, { useMemo, useState } from "react";
import { useGlobalFilter, useTable } from "react-table";
import styled, { css } from "styled-components";
import TableFilter from "@molecules/TableFilter";
import TableSearch from "@molecules/TableSearch";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Thead from "@atoms/Thead";
import Tbody from "@atoms/Tbody";
import Button from "@atoms/Button";

interface STable {
	width?: string;
	color?: string;
}

const TableStyles = css<STable>`
	width: 100%;
	border-radius: 10px;
	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`;

const StyledTable = styled.table<STable>`
	${TableStyles};
`;

export interface TableProps extends STable {
	columns?: any;
	datas?: any;
	count?: any;
	buttonStateManager?: any;
	dateStateManager?: any;
	filterData?: any;
}

const Table = ({
	columns,
	datas,
	count,
	buttonStateManager,
	dateStateManager,
	filterData,
}: TableProps) => {
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
			<Box
				type="colFlex"
				padding="0.1em"
				width="100%"
				border="1px solid #333333"
			>
				<Box type="rowFlex" width="100%">
					<Box type="rowFlex" width="70%">
						<TableFilter
							buttonStateManager={buttonStateManager}
							dateStateManager={dateStateManager}
							filterData={filterData}
						/>
					</Box>

					<Box type="colFlex" width="30%">
						<Box type="rowFlex">
							<Text type="bold">
								검색 결과&nbsp;&nbsp;{rows.length} / {count}
								&nbsp;&nbsp;
							</Text>
							<Button>새로고침ㅋ</Button>
						</Box>
						<TableSearch setGlobalFilter={setGlobalFilter} />
					</Box>
				</Box>
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
