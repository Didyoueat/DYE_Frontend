import React from "react";
import styled from "styled-components";
import Box from "@atoms/Box";

import shopImg from "@assets/imshiShopImg.png";
import Text from "@atoms/Text";

const StyledShopProfile = styled.div`
	width: 180px;
	height: 50px;
	margin: 24px 0px;
	display: flex;
	flex-flow: row;
	align-items: center;
	img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		margin-right: 12px;
	}
`;

export interface ShopProfileProps {
	dong: string;
	businessName: string;
}

const ShopProfile = ({ dong, businessName }: ShopProfileProps) => {
	return (
		<StyledShopProfile>
			<img src={shopImg} alt="shopThumbnail" />
			<div className="shopProfile">
				<Text type="bold">{dong}</Text>
				<Text>{businessName}</Text>
			</div>
		</StyledShopProfile>
	);
};

export default ShopProfile;
