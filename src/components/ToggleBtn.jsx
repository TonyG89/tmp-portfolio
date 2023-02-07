import React from 'react'
import Button from './Button';

const TableBtn = ({ setTableOn }) => {
    const [toggle, setToggle] = React.useState(false)

    const onToggle = () => {
        setToggle(!toggle)
        setTableOn(!toggle)
    }

    return (
        <>
            <Button action={onToggle} children={toggle ? "Плитка" : "Таблиця"} />
        </>
    )
}

export default TableBtn