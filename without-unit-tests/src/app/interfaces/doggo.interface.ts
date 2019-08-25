export interface DoggoApiResponse {
    doggos: Doggo[];
    totalDoggos: number;
    remainingTreats: number;
    patsCurrentlyRequired: 80;
}

export interface Doggo {
    name: string;
    breed: string;
    isAGoodBoy: boolean;
    favoriteTrick: string;
    imgUrl: string;
}
