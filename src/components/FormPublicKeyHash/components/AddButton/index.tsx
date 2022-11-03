import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import LoadingButton from '@mui/lab/LoadingButton';
import {FormControl} from "@mui/material";
import {UseFormHandleSubmit} from "react-hook-form/dist/types/form";
import {FieldValues} from "react-hook-form/dist/types/fields";
import './index.css'

interface PropsAddButton {
    handleSubmit: UseFormHandleSubmit<FieldValues>,
    label: string,
    event: (data: any) => void
    loading?: boolean,
}

const AddButton = ({handleSubmit, label, loading, event}: PropsAddButton) => {
    return (
        <FormControl>
            <LoadingButton
                className="button"
                onClick={handleSubmit(event)}
                loading={loading}
                loadingPosition="start"
                startIcon={<AddIcon />}
                variant="outlined"
                type="submit"
                sx={{
                    color: '#606062',
                    borderColor: '#606062',

                    background: "none",

                    '&:hover': {
                        color: '#404042',
                        borderColor: '#606062',

                        background: "none",
                    }
                }}
            >
                {label}
            </LoadingButton>
        </FormControl>
    );
};

export default AddButton;