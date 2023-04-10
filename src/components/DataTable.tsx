import React, { useState } from 'react'
import Button from './Button'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import Modal from './Modal'


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: false },
    { field: 'color', headerName: 'Color', flex: 1 },
    { field: 'num_of_lemons', headerName: 'Num_Of_Lemons', flex: 1},
    { field: 'time_to_make', headerName: 'Time_To_Make', flex: 1},

  ]

function DataTable() {


    const [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }

    return (
        <>

      
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />



        <div className='flex flex-row bg-sky-400'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Add New Lemonade Recipe
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>




        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 bg-yellow-400 my-2 rounded">My Lemonade Recipes</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
        <div>
        </div>
      </>

    )
  }

export default DataTable
