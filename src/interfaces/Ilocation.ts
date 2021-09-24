export interface IDistances {
    addressName: string;
    distance: number;
}

export interface IIlocation {
    addressName: string;
    distances: IDistances[];
    Nearest: string;
    Distant: string;
}
