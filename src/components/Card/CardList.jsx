import CardContext from "./CardContext"

const CardList = () => {
    return (
        <section className='w-full flex flex-col items-center'>
            <header className='text-center m-4 py-4 px-4'>
                <h2 className='text-3xl'>Our Toys</h2>
                <p>Explore what we have to offer</p>
            </header>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center'>
                    <CardContext />
                </div>
            </div>
        </section>
    )
}

export default CardList