import React, { useState } from "react";
import Button from "@atoms/Button";
import Input from "@atoms/Input";

const TableSearch = ({ setGlobalFilter }) => {
	const [value, setValue] = useState("");
	const handleSearch = (e) => {
		e.preventDefault();
		setGlobalFilter(value);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<Input
					value={value || ""}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<Button>검색</Button>
			</form>
		</div>
	);
};

export default TableSearch;
