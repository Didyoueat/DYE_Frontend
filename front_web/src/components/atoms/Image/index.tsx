import React from "react";
import styled, { css } from "styled-components";

interface SImage {
	color?: string;
	// 나중에 style 요소 추가
}

const ImageStyles = css<SImage>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledImage = styled.img<SImage>`
	${ImageStyles}
`;

export interface ImageProps extends SImage {
	src?: any;
	alt?: any;
}

const Image = ({ ...props }: ImageProps) => {
	return <StyledImage {...props} />;
};

export default Image;
