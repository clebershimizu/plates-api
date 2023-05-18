'use client';
import type { Metadata } from 'next'
import getAllPlates from '@/lib/getAllPlates'
import Link from "next/link"
import getPlate from '@/lib/getPlate';
import { useState } from 'react';


export default async function PlatesPage() {
    const platesData: Promise<Plate[] | undefined> = getAllPlates()

    // const plates = await platesData

    const [inputPlate, setInputPlate] = useState('');
    const [plateToSearch, setPlateToSearch] = useState('');
    const [plateToRender, setPlateToRender] = useState<Plate>();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        console.log('handleSubmit')

        const plate = await getPlate(plateToSearch);
        setPlateToRender(plate);
        
        // return plate;
    }

    const content = (
        <section>
            <p>
                <Link href="/">Retornar</Link>
            </p>
            <div>
                <h3>Digite a placa para busca:</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="AAA0000 ou AAA0A000" 
                        onChange={(e) => setPlateToSearch(e.currentTarget.value)
                        }>
                    </input>
                    <br/>
                    <button type="submit" >
                        Buscar
                    </button>
                </form>
            </div>
            
            <br />
            {/* {plates?.map(plate => {
                return (
                    <>
                        <p key={plate.plateNumber}>
                            <Link href={`/plates/${plate.id}`}>{plate.model}</Link>
                        </p>
                        <br />
                    </>
                )
            })} */}
            <p>{plateToRender?.plateNumber}</p>
        </section>
    )

    return content
}