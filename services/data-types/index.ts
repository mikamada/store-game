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
	_id: String;
	username: String;
	email: String;
	name: String;
	avatar: String;
}

export interface JwtPayloadTypes {
	player: UserTypes;
	iat: number;
}
