import React from "react";
import { useSelector } from "react-redux";
import useShopData from "@hooks/useShopData";
import { rootState } from "@redux/index";
import Base from "@organisms/Base";
import ShopInfo from "@organisms/ShopInfo";
import ShopNotice from "@organisms/ShopNotice";

const Shop = () => {
	// 일단 더미데이터 사용
	const shopInfo = useSelector((state: rootState) => state.shopReducer.info);
	useShopData(shopInfo);

	return (
		<Base>
			<ShopInfo info={shopInfo} />
			<ShopNotice />
		</Base>
	);
};

export default Shop;
