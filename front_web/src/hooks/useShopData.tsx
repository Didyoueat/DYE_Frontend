import { useDispatch } from "react-redux";
import { changeShopInfo } from "../redux/shop";

export interface ShopDataType {
	// 대표 메뉴 따로 값 만들어야하나?
	shopId: number;
	businessNumber: string;
	businessName: string;
	businessPhone: string;
	dayOff: boolean[];
	address: string;
	latitude: number;
	longitude: number;
	name: string;
	phone: string;
	origin: string;
	content: string;
	imageUrl: string;
	officeHour: string; // "09:00-18:00"
	temporaryDayStart: Date; // type: Date, allow null
	temporaryDayEnd: Date; // type: Date, allow null
	createdAt: Date;
	updatedAt: Date;
	dishes: {
		dishId: number;
		shopId: number;
		main: boolean;
		thumbnail: boolean;
		title: string;
		content: string;
		price: number;
		count: number;
		weight: number;
		imageUrl: string;
		createdAt: Date;
		updatedAt: Date;
	}[];
}

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
	dispatch(changeShopInfo(data));
};

export default useShopData;
