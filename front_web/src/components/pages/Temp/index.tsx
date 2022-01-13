import React from "react";
import DropDown from "../../molecules/DropDown";
import Text from "../../atoms/Text";
import Base from "../../organisms/Base";

const Temp = () => {
	return (
		<Base>
			<Text>페이지 내용</Text>
			<DropDown items={["123", "456", "789"]} />
		</Base>
	);
};

export default Temp;
