export interface Name {
	en: string;
	tr: string;
}

export interface Nuts1 {
	code: string;
	name: Name;
}

export interface Nuts2 {
	code: string;
	name: string;
}

export interface Nut {
	nuts1: Nuts1;
	nuts2: Nuts2;
	nuts3: string;
}

export interface Coordinate {
	latitude: number;
	longitude: number;
}

export interface Map {
	googleMaps: string;
	openStreetMap: string;
}

export interface Region {
	en: string;
	tr: string;
}

export interface District {
	id: number;
	name: string;
	area: number;
	population: number;
	province: string;
}

export interface Data {
	id: number;
	name: string;
	area: number;
	population: number;
	altitude: number;
	areaCode: number[];
	isMetropolitan: boolean;
	nuts: Nut;
	coordinates: Coordinate;
	maps: Map;
	region: Region;
	districts: District[];
}

export interface DistrictResponseModel {
	status: string;
	data: Data[];
}