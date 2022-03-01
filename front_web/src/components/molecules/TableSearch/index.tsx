import React, { useState } from "react";
import Button from "@atoms/Button";
import Input from "@atoms/Input";
import styled from "styled-components";

import tableSearch from "@assets/tableSearch.svg";

const StyledForm = styled.form`
	width: 300px;
	height: 44px;
	padding-left: 18px;
	border: 1px solid #ff5439;
	border-radius: 5px;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
`;

const StyledButton = styled.button`
	width: 60px;
	height: 44px;
	color: #ffffff;
	background: #ff5439;
	border: 1px solid #ff5439;
	border-radius: 0px 5px 5px 0px;
	font-size: 18px;
	cursor: pointer;
`;

const TableSearch = ({ setGlobalFilter }) => {
	const [value, setValue] = useState("");
	const handleSearch = (e) => {
		e.preventDefault();
		setGlobalFilter(value);
	};

	return (
		<StyledForm onSubmit={handleSearch}>
			<img src={tableSearch} alt="tableSearch" />
			<Input
				styleType="tableSearch"
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				placeholder="검색어를 입력해주세요."
			/>
			<StyledButton>검색</StyledButton>
		</StyledForm>
	);
};

export default TableSearch;
