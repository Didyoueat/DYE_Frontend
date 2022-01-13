import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../../redux";
import Box from "../../atoms/Box";
import Base from "../../organisms/Base";
import DishesInfo from "../../organisms/DishesInfo";

const Dishes = () => {
	// 일단 더미데이터 사용
	const shopInfo = useSelector((state: rootState) => state.shopReducer.info);

	return (
		<Base>
			<Box
				type="rowFlex"
				padding="0 0.5em"
				width="80%"
				height="100%"
				background="#e5e5e5"
			>
				<DishesInfo info={shopInfo} />
			</Box>
		</Base>
	);
};

export default Dishes;
