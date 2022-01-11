import React from "react";
import Box from "../../atoms/Box";
import Base from "../../organisms/Base";
import DishesInfo from "../../organisms/DishesInfo";

const Dishes = () => {
	return (
		<Base>
			<Box
				type="rowFlex"
				padding="0 0.5em"
				width="80%"
				height="100%"
				background="#e5e5e5"
			>
				<DishesInfo />
			</Box>
		</Base>
	);
};

export default Dishes;
