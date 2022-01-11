import React, { useState } from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import DaumPost from "../../atoms/DaumPost";
import LabelInput from "../LabelInput";

export interface PostInputProps {
	label?: any;
	setValue?: any;
	value?: any;
}

const PostInput = ({ label, setValue, value }: PostInputProps) => {
	const [search, setSearch] = useState(false);
	return (
		<Box type="rowFlex">
			<LabelInput
				label={label}
				type="text"
				id="address"
				value={value}
				onChange={() => console.log("dont change")}
				readonly="true"
			/>
			<Button
				onClick={(e) => {
					e.preventDefault();
					setSearch(!search);
				}}
			>
				검색
			</Button>
			{search && (
				<DaumPost
					setValue={setValue}
					search={search}
					setSearch={setSearch}
				/>
			)}
		</Box>
	);
};

export default PostInput;
