import React from "react";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

export interface OfficeHourProps {
	value?: any;
	setValue?: any;
}

const OfficeHour = ({ value, setValue }: OfficeHourProps) => {
	return (
		<Box type="rowFlex">
			<Label htmlFor="officeHour">운영 시간</Label>
			<Input
				type="time"
				id="officeHour"
				onChange={(e) => setValue([e.target.value, value[1]])}
				value={value[0]}
			/>
			~
			<Input
				type="time"
				id="officeHour"
				onChange={(e) => setValue([value[0], e.target.value])}
				value={value[1]}
			/>
		</Box>
	);
};

export default OfficeHour;
