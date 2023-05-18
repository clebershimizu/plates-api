import getPlateById from "@/lib/getPlateById"
import { Suspense } from "react"
import Plate from "./components/plateDetails"
import type { Metadata } from 'next'

type Params = {
    params: {
        plateId: number
    }
}

export async function generateMetadata({ params: { plateId } }: Params): Promise<Metadata> {
    const plate: Promise<Plate | undefined> = getPlateById(plateId)
    
    return {
        title: (await plate)?.plateNumber,
        description: `This is the page of ${(await plate)?.plateNumber}`
    }

}

export default async function UserPage({ params: { plateId } }: Params) {
    const plateData: Promise<Plate | undefined> = getPlateById(plateId)

    const plate = await plateData

    return (
        <>
            <h2>{plate?.plateNumber}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <Plate promise={plateData} />
            </Suspense>
        </>
    )
}