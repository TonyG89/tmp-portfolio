import React, { useState, useEffect, useMemo } from 'react'

import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'

import { url } from '../const'

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

const AgGrid = () => {
  const [rowData, setRowData] = useState([])
  const [columnDefs, setColumnDefs] = useState([
  ])

  useEffect(() => {
    axios.get(url).then((res) => {
      const keys = Object.keys(...res.data.clothes)
      setColumnDefs(keys.map(i => ({ field: i })))
      setRowData(res.data.clothes)
    })
  }, [])

  const defaultColDef = useMemo(()=>({
    sortable:true,
    filter:true,
  }), [])

  return (
    <div className='ag-theme-alpine text-white h-screen'>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef}/>
    </div>
  )
}

export default AgGrid