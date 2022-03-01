import React, { useMemo, useState } from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import styled, { css } from "styled-components";
import TableFilter from "@molecules/TableFilter";
import TableSearch from "@molecules/TableSearch";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Thead from "@atoms/Thead";
import Tbody from "@atoms/Tbody";
import Button from "@atoms/Button";

import angle_bracket_d_l from "@assets/two_arrows_left.svg";
import angle_bracket_d_r from "@assets/two_arrows_right.svg";
import angle_bracket_s_l from "@assets/one_arrows_left.svg";
import angle_bracket_s_r from "@assets/one_arrows_right.svg";

import refreshButton from "@assets/refreshButton.svg";

interface STable {
	width?: string;
	color?: string;
}

const TableStyles = css<STable>`
	width: 100%;
	height: 643px;
	border-radius: 10px;
	background: #dddddd;
	border-collapse: collapse;
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
	const [pageIndex, setPageIndex] = useState(0);
	const [data] = useState(useMemo(() => datas, []));

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state,
		prepareRow,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: {
				pageSize: 10,
				pageIndex: 0,
			},
		},
		useGlobalFilter,
		usePagination,
	);

	return (
		<>
			<Box type="colFlex" width="100%" background="#f3f1ee">
				{/* 상단 박스 */}
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
			{/* 하단 박스 */}
			<Box type="colFlex" width="100%" height="746px" borderRadius="10px">
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
						{page.map((row, idx) => {
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
				<Box type="rowFlex" width="680px" margin="0px 0px 12px 0px">
					<Box type="filterButtonWrapper" margin="0px 12px 8px 0px">
						<Button
							styleType="filterNone"
							width="36px"
							height="36px"
							onClick={() => {
								setPageIndex(pageIndex - 10);
								gotoPage(pageIndex - 10);
							}}
							disabled={state.pageIndex - 10 < 0}
						>
							{"<<"}
						</Button>
					</Box>
					<Box type="filterButtonWrapper" margin="0px 0px 8px 0px">
						<Button
							styleType="filterNone"
							width="36px"
							height="36px"
							onClick={() => {
								setPageIndex(
									state.pageIndex - 1 === pageIndex - 1
										? pageIndex - 10
										: pageIndex,
								);
								previousPage();
							}}
							disabled={!canPreviousPage}
						>
							{"<"}
						</Button>
					</Box>
					<Box type="rowFlex" width="480px" flexJustify="center">
						<Box type="filterButtonWrapper">
							{pageOptions.map((page, idx) => {
								return (
									pageIndex <= idx &&
									idx < pageIndex + 10 && (
										<Button
											width="44px"
											height="36px"
											styleType={
												state.pageIndex === idx
													? "filterRed"
													: "filterNone"
											}
											key={idx}
											onClick={() => {
												gotoPage(idx);
												console.log(idx);
											}}
										>
											{idx + 1}
										</Button>
									)
								);
							})}
						</Box>
					</Box>
					<Box type="filterButtonWrapper" margin="0px 0px 8px 0px">
						<Button
							styleType="filterNone"
							width="36px"
							height="36px"
							onClick={() => {
								setPageIndex(
									state.pageIndex + 1 === pageIndex + 10
										? pageIndex + 10
										: pageIndex,
								);
								nextPage();
							}}
							disabled={!canNextPage}
						>
							{">"}
						</Button>
					</Box>
					<Box margin="0px 0px 8px 12px">
						<Button
							styleType="filterNone"
							width="36px"
							height="36px"
							onClick={() => {
								setPageIndex(pageIndex + 10);
								gotoPage(pageIndex + 10);
							}}
							disabled={pageCount < pageIndex + 10}
						>
							<img src={angle_bracket_d_r} />
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Table;
