
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SimpleDialog from './SimpleDialogMessage'

const columns = [
    { field: "policyName", headerName: "Policy Name", flex: 1 },
    { field: "alerts", headerName: "Alerts", flex: 1 },
    { field: "policyType", headerName: "Policy Type", flex: 1 },
    { field: "severity", headerName: "Severity", flex: 1 },
    { field: "labels", headerName: "Labels", flex: 1 },
    {
        field: "complianceStandard",
        headerName: "Compliance Standard",
        flex: 1
    }
];

export const DataTableGrid = (props) => {
    const [selectedValue, setSelectedValue] = React.useState("chayanjana20@fmail.com");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };
    const { data, rowSelected, setRowSelected, animate } = props;
    const selectionModel = rowSelected;

    const handleRowSelection = (e) => {
        setRowSelected(e);
        console.log(e);
    };

    return (
        <>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
            <div
                style={{
                    height: 500,
                    width: "100%",
                    transition: "all 1.5s linear",
                    animation: `1.5s ease-out 0s 1 ${animate ? "fadeInTable" : "fadeOutTable"
                        }`,
                    display: animate ? "block" : "none"
                }}
            >
                <DataGrid
                    rows={data}
                    columns={columns}
                    selectionModel={selectionModel}
                    onSelectionModelChange={handleRowSelection}
                />

                <Button variant="outlined" onClick={handleClickOpen}>
                    Open simple dialog
                </Button>
            </div>
        </>
    );
};
