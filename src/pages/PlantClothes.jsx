import React from 'react'
import ToggleBtn from '../components/ToggleBtn';
import Cards from '../modules/Cards';
import AgGrid from '../modules/AgGrid';

const PlantClothes = () => {
    const [tableOn, setTableOn] = React.useState(false)
    const [count, setCount] = React.useState(0)
    // STYLES
    const divClass = "xl:w-4/5 mx-auto py-10 px-5 sm:text-center"
    return (
        <>
            <ToggleBtn setTableOn={(value) => setTableOn(value)}>{tableOn ? "Плитка" : "Таблиця"}</ToggleBtn>
            <section className={divClass}>
                <h2 className='text-white'>Наявність речей ({count + " шт."})</h2>
                {tableOn ? <AgGrid /> : <Cards setCount={setCount} />}
            </section>
        </>
    )
}

export default PlantClothes