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

import refreshButton from "@assets/refreshButton.svg";

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
	clickedButton?: any;
}

const Table = ({
	columns,
	datas,
	count,
	buttonStateManager,
	dateStateManager,
	filterData,
	clickedButton,
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
			<Box type="colFlex" width="100%" background="#e5e5e5">
				<Box
					type="rowFlex"
					width="1572px"
					height="144px"
					margin="0px 0px 20px 0px"
					padding="32px 40px"
					borderRadius="10px"
				>
					<Box type="rowFlex" width="1200px">
						<TableFilter
							buttonStateManager={buttonStateManager}
							dateStateManager={dateStateManager}
							filterData={filterData}
							clickedButton={clickedButton}
						/>
					</Box>
					<Box
						type="colFlex"
						width="340px"
						height="135px"
						flexAlign="flex-end"
					>
						<Box type="rowFlex">
							<Text type="bold">검색 결과&nbsp;&nbsp;</Text>
							<Text type="bold" color="#ff5439">
								{rows.length}
							</Text>
							<Text type="bold">&nbsp;/ {count}&nbsp;&nbsp;</Text>
							<Button styleType="none">
								<img src={refreshButton} alt="refreshButton" />
							</Button>
						</Box>
						<TableSearch setGlobalFilter={setGlobalFilter} />
					</Box>
				</Box>
			</Box>
			<Box>
				<StyledTable {...getTableProps()}>
					<Thead>
						{headerGroups.map((headerGroup, idx) => (
							<tr
								{...headerGroup.getHeaderGroupProps()}
								key={idx}
							>
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
											<td
												{...cell.getCellProps()}
												key={idx}
											>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</Tbody>
				</StyledTable>
			</Box>
		</>
	);
};

export default Table;
