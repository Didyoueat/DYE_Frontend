export interface ShopInfo {
	shopId: number;
	businessNumber: string;
	businessName: string;
	businessPhone: string[];
	dayOff: boolean[];
	address: string;
	latitude: number;
	longitude: number;
	name: string;
	phone: string[];
	origin: string;
	content: string;
	imageUrl: string;
	officeHour: string[];
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
	}[];
}
