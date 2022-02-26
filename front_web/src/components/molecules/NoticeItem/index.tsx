import React from "react";
import Box from "@atoms/Box";
import Text from "@atoms/Text";

export interface NoticeItemProps {
	date?: any;
	title?: any;
	content?: any;
}

const NoticeItem = ({ date, title, content }: NoticeItemProps) => {
	return (
		<Box background="#e5e5e5" border="1px solid #333333" padding="5px">
			<Text>{date}</Text>
			<Text type="bold">{title}</Text>
			<Text>{content}</Text>
		</Box>
	);
};

export default NoticeItem;
