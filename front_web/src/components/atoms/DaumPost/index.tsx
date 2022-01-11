import React from "react";
import DaumPostCode from "react-daum-postcode";

export interface DaumPostProps {
	setValue?: any;
	search?: any;
	setSearch?: any;
}

const DaumPost = ({ setValue, search, setSearch }: DaumPostProps) => {
	const handleComplete = (data) => {
		setValue(data.address);
		console.log(data.address);
		setSearch(!search);
	};

	return <DaumPostCode onComplete={handleComplete} className="post-code" />;
};

export default DaumPost;
