import React, { useState } from "react";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import DaumPost from "@atoms/DaumPost";
import Label from "@atoms/Label";
import Input from "@atoms/Input";

export interface PostInputProps {
	label?: any;
	setValue?: any;
	value?: any;
	styleType?: any;
}

const PostInput = ({ label, setValue, value, styleType }: PostInputProps) => {
	const [search, setSearch] = useState(false);
	return (
		<Box type="rowFlex" background="#f5f4f2" margin="20px 0px">
			<Label htmlFor="address">{label}</Label>
			<Box width="388px" type="rowFlex" background="#f5f4f2">
				<Input
					styleType={styleType}
					type="text"
					id="address"
					value={value}
					onChange={() =>
						alert("주소는 임의로 변경하실 수 없습니다.")
					}
					readonly="true"
				></Input>
				<Button
					styleType="small"
					onClick={(e) => {
						e.preventDefault();
						setSearch(!search);
					}}
				>
					검색
				</Button>
			</Box>
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
