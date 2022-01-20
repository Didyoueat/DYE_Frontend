import React, { useState } from "react";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import DaumPost from "@atoms/DaumPost";
import LabelInput from "@molecules/LabelInput";

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
				onChange={() => alert("주소는 임의로 변경하실 수 없습니다.")}
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
