import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "@redux/index";
import Base from "@organisms/Base";
import DishesInfo from "@organisms/DishesInfo";

const Dishes = () => {
	// 일단 더미데이터 사용
	const shopInfo = useSelector((state: rootState) => state.shopReducer.info);

	return (
		<Base>
			<DishesInfo info={shopInfo} />
		</Base>
	);
};

export default Dishes;
