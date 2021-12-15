import styled from "styled-components";

export const ModalWrapper = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-height: 80%;
	width: 20rem;
	height: 80%;
	padding: 16px;
	border-radius: 10px;
	text-align: center;

	.modalActive {
		background: #f5f4f2;
		box-shadow: 0px 3px 10px rgba(51, 51, 51, 0.1);
	}
`;
