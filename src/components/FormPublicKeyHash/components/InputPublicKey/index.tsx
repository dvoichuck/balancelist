import React from 'react';
import TextField from '@mui/material/TextField';
import { Control, Controller } from "react-hook-form";

interface PropsInputPublicKey {
    name: string,
    control: Control,
    label: string,
    loading?: boolean,
    placeholder?: string
}

const InputPublicKey = ({name, control, label, loading, placeholder}: PropsInputPublicKey ) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField
                    onChange={onChange}
                    disabled={loading}
                    defaultValue={value}
                    label={label}
                    placeholder={placeholder}
                    sx={{
                        minWidth: '550px',
                        '& .MuiInputLabel-root': {
                            color: '#606062',
                            '&.Mui-focused': {
                                color: '#606062',
                            },
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#606062',
                            },
                            '&:hover fieldset': {
                                borderColor: '#606062',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#606062',
                                color: '#606062',
                            },
                        },
                    }}
                />
            )}
        />
    );
};

export default InputPublicKey;