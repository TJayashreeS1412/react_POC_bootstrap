import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { DataGrid, GridColDef, GridValueGetterParams, GridActionsCellItem } from '@mui/x-data-grid';
import { useEffect } from 'react';

function CardMaterial({data}) {
    const [rows, setRows] = React.useState([]);
    useEffect(()=>{
        setRows(data);
    },[data]);
    // const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  
    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 70 },
        { field: 'userId', headerName: 'User ID', type:'number', width: 70 },
        { field: 'title', headerName: 'Title', type:'string', width: 500 },
        { field: 'body', headerName: 'Body', type: 'string', width: 500},
        { 
            field: 'actions', 
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                <GridActionsCellItem
                      icon={<DeleteIcon />}
                      label="Delete"
                      onClick={handleDeleteClick(id)}
                      color="inherit"
                    />,
            }
        }
    ];

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
      };

    return (
        <div className="body">
            <Box
                sx={{
                    height: 500,
                    width: '100%',
                    '& .actions': {
                    color: 'text.secondary',
                    },
                    '& .textPrimary': {
                    color: 'text.primary',
                    },
                }}
                >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // editMode="row"
                    // rowModesModel={rowModesModel}
                    // onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
                    // onRowEditStart={handleRowEditStart}
                    // onRowEditStop={handleRowEditStop}
                    // processRowUpdate={processRowUpdate}
                    // components={{
                    // Toolbar: EditToolbar,
                    // }}
                    // componentsProps={{
                    // toolbar: { setRows, setRowModesModel },
                    // }}
                    // experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    );
}

export default CardMaterial;