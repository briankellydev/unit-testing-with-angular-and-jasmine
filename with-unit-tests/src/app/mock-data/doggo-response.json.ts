import { DoggoApiResponse } from '../interfaces/doggo.interface';

export const MockDoggoResponse: DoggoApiResponse = {
    doggos: [
        {
            name: 'Steve',
            breed: 'Shiba Inu',
            isAGoodBoy: true,
            favoriteTrick: 'Bein A Lil Dumbo',
            imgUrl: 'assets/steve.jpg'
        },
        {
            name: 'Chumbo',
            breed: 'Golden Retreiver',
            isAGoodBoy: false,
            favoriteTrick: 'Catch Some Sticks!!',
            imgUrl: 'assets/chumbo.jpg'
        },
    ],
    totalDoggos: 9000,
    remainingTreats: 400,
    patsCurrentlyRequired: 80
}