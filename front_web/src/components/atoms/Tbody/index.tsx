import React from "react";
import styled, { css } from "styled-components";

interface STbody {
	color?: string;
	// 나중에 style 요소 추가
}

const TbodyStyles = css<STbody>`
	text-align: center;
	background-color: #ffffff;
	width: 100%;
	height: 600px;
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledTbody = styled.tbody<STbody>`
	${TbodyStyles};
`;

export interface TbodyProps extends STbody {
	children?: any;
}

const Tbody = ({ children, ...props }: TbodyProps) => {
	return <StyledTbody {...props}>{children}</StyledTbody>;
};

export default Tbody;
