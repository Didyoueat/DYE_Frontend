import React from "react";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";

export interface NoticeItemProps {
	date?: any;
	title?: any;
	content?: any;
}

const NoticeItem = ({ date, title, content }: NoticeItemProps) => {
	return (
		<Card border="none" background="#e5e5e5">
			<Text>{date}</Text>
			<Text type="bold">{title}</Text>
			<Text>{content}</Text>
		</Card>
	);
};

export default NoticeItem;
