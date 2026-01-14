import React from 'react'
import toyStoreData from './data'

const CardContext = () => {
    return (
        <>
            {toyStoreData.map((toy, idx) => (
                <div key={idx} className="bg-neutral-primary-soft block max-w-sm p-6 border border-dashed shadow-2xl rounded-base">
                    <a href={toy.link}>
                        <img className="rounded-base w-full h-48 object-cover" src={toy.image} alt={toy.title} />
                    </a>
                    <a href={toy.link}>
                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{toy.category}</h5>
                    </a>
                    <p className="mb-6 text-body">{toy.description}</p>
                </div>
            ))}
        </>
    )
}

export default CardContext