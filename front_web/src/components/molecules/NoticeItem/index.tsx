import React from "react";
import Box from "@atoms/Box";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

export interface NoticeItemProps {
	date?: any;
	title?: any;
	content?: any;
}

const NoticeItem = ({ date, title, content }: NoticeItemProps) => {
	return (
		<Box
			type="colFlex"
			width="656px"
			height="151px"
			background="#f3f1ee"
			borderRadius="10px"
			padding="16px 27px"
			margin="20px 0px 0px 0px"
			flexAlign="flex-start"
		>
			<Box type="rowFlex" width="100%" background="#f3f1ee">
				<Text>{date}</Text>
				<Button styleType="none" onClick={(e) => console.log(e.target)}>
					X
				</Button>
			</Box>
			<Text type="bold">{title}</Text>
			<Text>{content}</Text>
		</Box>
	);
};

export default NoticeItem;
