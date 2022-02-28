export const dateToString = (date: Date) => {
	const week = ["일", "월", "화", "수", "목", "금", "토"];
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const today = new Date(year, month - 1, day).getDay();
	const weekLabel = week[today];
	const dateHour = date.getHours();
	const hour = dateHour >= 13 ? dateHour - 12 : dateHour;
	const division = dateHour >= 12 ? "오후" : "오전";
	const underTen = (data: number) => {
		return data < 10 ? "0" : "";
	};

	return `${year}.${underTen(month)}${month}.${underTen(
		day,
	)}${day} (${weekLabel}) ${division} ${hour}시`;
};

export const stringToDate = (date: string, yymmdd?: boolean) => {
	const dateSplit = date.split(" ");
	const getDate = (idx: number) => {
		const yymmddhh =
			idx !== 3
				? dateSplit[0].split(".")[idx]
				: dateSplit[idx].substring(0, dateSplit[idx].length - 1);

		return parseInt(yymmddhh, 10);
	};

	const year = getDate(0);
	const month = getDate(1) - 1;
	const day = getDate(2);
	const hour = !yymmdd ? getDate(3) + (dateSplit[2] === "오후" ? 12 : 0) : 9;

	return new Date(year, month, day, hour);
};

export const formatCalendarDate = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${year}-${month < 10 ? "0" : ""}${month}-${
		day < 10 ? "0" : ""
	}${day}`;
};
