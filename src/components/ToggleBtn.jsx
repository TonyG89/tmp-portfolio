import React from 'react'
import Button from './Button';

const TableBtn = ({ setTableOn, style='', children= "check" }) => {
    const [toggle, setToggle] = React.useState(false)

    const onToggle = () => {
        setToggle(!toggle)
        setTableOn(!toggle)
    }

    return (
        <>
            <Button action={onToggle}  style={style}>{children}</Button>
        </>
    )
}

export default TableBtn