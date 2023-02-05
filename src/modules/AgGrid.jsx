import React, { useState, useEffect } from 'react'

import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'

import {url} from '../const'

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

const AgGrid = () => {

  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([])

  useEffect(() => {
    // axios.get(url).then((res)=>setClother(res.data.clothes))
  }, [])

  return (
    <div className='ag-theme-alpine'>
    sda
      {/* <AgGridReact rowData columnDefs /> */}
    </div>
  )
}

export default AgGrid