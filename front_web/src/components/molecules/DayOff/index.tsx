import React from "react";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";
import LabelInput from "../LabelInput";

export interface DayOffProps {
	value?: any;
	setValue?: any;
}

const DayOff = ({ value, setValue }: DayOffProps) => {
	const dayOff = value.slice();
	const handleChange = (idx: number) => {
		dayOff[idx] = !dayOff[idx];
		setValue(dayOff);
	};

	return (
		<Box type="rowFlex">
			<Label htmlFor="dayOff">휴무일</Label>
			<LabelInput
				label="월"
				type="checkbox"
				id="dayOffMon"
				onChange={() => handleChange(0)}
				checked={value[0]}
			/>
			<LabelInput
				label="화"
				type="checkbox"
				id="dayOffTue"
				onChange={() => handleChange(1)}
				checked={value[1]}
			/>
			<LabelInput
				label="수"
				type="checkbox"
				id="dayOffWed"
				onChange={() => handleChange(2)}
				checked={value[2]}
			/>
			<LabelInput
				label="목"
				type="checkbox"
				id="dayOffThu"
				onChange={() => handleChange(3)}
				checked={value[3]}
			/>
			<LabelInput
				label="금"
				type="checkbox"
				id="dayOffFri"
				onChange={() => handleChange(4)}
				checked={value[4]}
			/>
			<LabelInput
				label="토"
				type="checkbox"
				id="dayOffSat"
				onChange={() => handleChange(5)}
				checked={value[5]}
			/>
			<LabelInput
				label="일"
				type="checkbox"
				id="dayOffSun"
				onChange={() => handleChange(6)}
				checked={value[6]}
			/>
		</Box>
	);
};

export default DayOff;
