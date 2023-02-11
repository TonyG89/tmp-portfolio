import React, { useState, useEffect, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-enterprise';
import axios from 'axios'

import Loading from '../components/Loading';
import { url, clothesProps } from '../const'


import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

const AgGrid = () => {
  const [rowData, setRowData] = useState([])
  const [columnDefs, setColumnDefs] = useState([])
  const [loaded, setLoaded] = useState(false)



  useEffect(() => {
    setLoaded(false)
    axios.get(url).then((res) => {
      let keys = Object.keys(...res.data.clothes).filter((item) => item !== "type" && item !== "id-items" && item !== "link" && item !== "category")

      const titleName = (same) => clothesProps[Object.keys(clothesProps).filter(prop => prop == same)]
      const mainColumn = (i) => ({ field: i, headerName: titleName(i), rowGroup: i == "name", hide: i === "name", minWidth: i === "color" ? 160 : 90, aggFunc: i === "amount" && 'sum' })

      setColumnDefs(keys.map(mainColumn))
      setRowData(res.data.clothes)
      setLoaded(true)
    })
  }, [])

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    suppressAutoSize: true
  }), [])

  const autoGroupColumnDef = useMemo(() => ({
    headerName: 'Тип одежі',
    minWidth: 150,
    showRowGroup: true,
    cellRendererParams: {
      suppressCount: true,
      footerValueGetter: params => {
        console.log(params)
        const isRootLevel = params.node.level === -1;
        if (isRootLevel) {
          return 'Загальна сумма';
        }
        return `Кількість ${params.value}`;
      },
    },
  }), [])

  console.log(columnDefs)

  return (
    <div className={`ag-theme-alpine w-full mx-auto text-white ${loaded ? 'h-screen' : ''} `}>
      {loaded ?
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          suppressDragLeaveHidesColumns={true}
          animateRows
          suppressRowClickSelection
          groupIncludeFooter={true}
          groupIncludeTotalFooter={true}

          showOpenedGroup={true}
        /> :
        <Loading />
      }
    </div>
  )
}

export default AgGrid