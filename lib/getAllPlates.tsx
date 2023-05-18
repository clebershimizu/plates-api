import { plates } from '../app/data/plates'
export default async function getAllPlates() {
    // const res = await fetch('../data/plates.ts')

    // if (!res.ok) throw new Error('failed to fetch data')

    // return res.json()

    const res = plates;
    return res;
}