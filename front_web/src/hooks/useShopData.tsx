import { useDispatch } from "react-redux";
import { changeShopInfo } from "../redux/shop";

const getDayOff = (dayOff: number) => {
	const ret = [false, false, false, false, false, false, false];
	for (let i = 6; i >= 0 && dayOff >= 0; i--) {
		if (dayOff >= 2 ** i) {
			ret[6 - i] = true;
			dayOff -= 2 ** i;
		}
	}
	return ret;
};

const useShopData = (data: Record<string, any>) => {
	const dispatch = useDispatch();

	data.dayOff = getDayOff(data["dayOff"]);
	data.businessPhone = data.businessPhone.toString().split("-");
	data.phone = data.phone.toString().split("-");
	data.officeHour = data.officeHour.toString().split("-");
	dispatch(changeShopInfo(data));
};

export default useShopData;
