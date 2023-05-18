import { plates } from '../app/data/plates'

export default async function getPlate(plateId: number) {
    // const res = await fetch('../app/data/plates.tsx')
    const res = plates?.find(plate => plate.id === plateId);

    // if (!res.ok) throw new Error('failed to fetch plate')

    return res;
}