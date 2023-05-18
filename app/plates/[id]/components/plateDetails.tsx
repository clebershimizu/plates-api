type Props = {
    promise: Promise<Plate[]>
}

export default async function Plate({ promise }: Props) {
    const plates = await promise

    const content = plates?.map(plate => {
        return (
            <article key={plate.id}>
                <h2>{plate.plateNumber}</h2>
                <p>{plate.model}</p>
                <br />
            </article>
        )
    })

    return content
}