import React from "react";
import styled from "styled-components";
import Text from "@atoms/Text";

import shopImg from "@assets/imshiShopImg.png";
// todo: 임시 이미지 말고 api 호출하여 프로필 사진 받아와 띄우기

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
