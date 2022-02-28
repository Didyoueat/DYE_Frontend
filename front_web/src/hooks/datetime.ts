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

	return `${year}년.${underTen(month)}${month}월.${underTen(
		day,
	)}${day}일 (${weekLabel}) ${division} ${hour}시`;
};

export const stringToDate = (date: string) => {
	const dateSplit = date.split(" ");
	const getDate = (idx: number) => {
		const yymmddhh = idx !== 3 ? dateSplit[0].split(".") : dateSplit;

		return parseInt(
			yymmddhh[idx].substring(0, yymmddhh[idx].length - 1),
			10,
		);
	};

	const year = getDate(0);
	const month = getDate(1) - 1;
	const day = getDate(2);
	const hour = getDate(3) + (dateSplit[2] === "오후" ? 12 : 0);

	return new Date(year, month, day, hour);
};
