export interface ShopInfo {
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
