import { useDispatch } from "react-redux";
import { changeShopInfo } from "../redux/shop";

const getDayOff = (dayOff: number) => {
	console.log(dayOff);
	const ret = [false, false, false, false, false, false, false];
	for (let i = 6; i >= 0 && dayOff >= 0; i--) {
		if (dayOff >= 2 ** i) {
			ret[6 - i] = true;
			dayOff -= 2 ** i;
		}
	}
	return ret;
};

const useShopData = (data) => {
	const dispatch = useDispatch();

	// data.dayOff = getDayOff(data["dayOff"]);
	// 지금은 initialState가 제대로 선언돼 있어서 해줄 필요 없음, 추후 진짜 데이터 받아올 때 이 부분 활성화

	if (typeof data.businessPhone !== "object")
		data.businessPhone = data.businessPhone.toString().split("-");
	if (typeof data.phone !== "object")
		data.phone = data.phone.toString().split("-");
	if (typeof data.officeHour !== "object")
		data.officeHour = data.officeHour.toString().split("-");
	dispatch(changeShopInfo(data));
};

export default useShopData;
