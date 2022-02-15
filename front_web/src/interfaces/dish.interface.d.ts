export interface DishesInfo {
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
