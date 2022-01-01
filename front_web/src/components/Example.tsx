import React from "react";
import A from "./atoms/A";
import Button from "./atoms/Button";
import Image from "./atoms/Image";
import Input from "./atoms/Input";
import Label from "./atoms/Label";
import Text from "./atoms/Text";

import logo from "./assets/logo.svg";

const Example = () => {
	const handleClick = () => {
		console.log("clicked!\n");
	};

	return (
		<div>
			<A to="/">hey</A>
			<Label type="input" name="hey" id="hey">
				이건 라벨
			</Label>
			<Button onClick={handleClick}>hey</Button>
			<Input type="text" name="input" />
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
				consequatur esse velit? Veniam illo cum quidem inventore?
				Tenetur, quia quos omnis corporis accusantium officia excepturi
				porro nostrum nesciunt commodi veniam!
			</Text>
			<Image src={logo} alt="logo" />
		</div>
	);
};

export default Example;
