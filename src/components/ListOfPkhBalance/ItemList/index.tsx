import React from 'react';
import {deleteItemByIndex, listItem} from "../listSlice";
import {useAppDispatch} from "../../../app/hooks";
import {ListItem, ListItemText, ListItemButton, ListItemIcon} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css'


interface propsListItem extends listItem {
    index: number;
}

const ItemList = ({pkh, balance, index}: propsListItem) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteItemByIndex(index))
    }

    return (
        <ListItem className="item">
            <ListItemText className="pkh" primary={pkh}/>
            <ListItemText className="balance" primary={balance}/>
            <ListItemButton className="deleteButton" onClick={handleDelete}>
                <ListItemIcon>
                    <DeleteIcon />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
};

export default ItemList;