import { plates } from '../app/data/plates'
export default async function getPlate(plateNumber: string) {
    // const res = await fetch(`./data/plates.ts${plateNumber}`)

    // if (!res.ok) throw new Error('failed to fetch user')
    const res = plates?.find(plate => plate.plateNumber === plateNumber);

    // return res.json()
    return res;
}