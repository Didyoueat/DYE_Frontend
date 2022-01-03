import React from "react";
import A from "../atoms/A";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Text from "../atoms/Text";

import logo from "../assets/logo.svg";
import Box from "../atoms/Box";
import SideNav from "../molecules/SideNav";
import LabelInput from "../molecules/LabelInput";

const Example = () => {
	const handleClick = () => {
		console.log("clicked!\n");
	};

	return (
		<Box>
			<A to="/">hey</A>
			<Label for="hey">이건 라벨</Label>
			<Button onClick={handleClick}>hey</Button>
			<Input type="text" id="input" />
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
				consequatur esse velit? Veniam illo cum quidem inventore?
				Tenetur, quia quos omnis corporis accusantium officia excepturi
				porro nostrum nesciunt commodi veniam!
			</Text>
			<Image src={logo} alt="logo" />
			<SideNav>주문</SideNav>
			<LabelInput labelFor="뭘 위한 라벨인가" type="text" id="labelInput">
				라벨인풋
			</LabelInput>
		</Box>
	);
};

export default Example;
