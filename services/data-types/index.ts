export interface CategoryTypes {
	_id: string;
	name: string;
	__v: number;
}
export interface GameItemTypes {
	_id: string;
	status: string;
	name: string;
	thumbnail: string;
	category: CategoryTypes;
}

export interface BanksTypes {
	_id: string;
	name: string;
	nameBank: string;
	noRekening: string;
}

export interface PaymentTypes {
	_id: string;
	type: string;
	banks: BanksTypes[];
}

export interface NominalsTypes {
	_id: string;
	coinQuantity: number;
	coinName: string;
	price: number;
}

export interface LoginTypes {
	email: String;
	password: String;
}

export interface UserTypes {
	_id: string;
	username: string;
	email: string;
	name: string;
	avatar: string;
}

export interface JwtPayloadTypes {
	player: UserTypes;
	iat: number;
}

export interface CheckoutTypes {
	voucher: string;
	nominal: string;
	payment: string;
	bank: string;
	name: string;
	accountUser: string;
}
