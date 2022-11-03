import React from 'react';
import ItemList from "./ItemList";
import { useAppSelector } from '../../app/hooks';
import { selectList } from './listSlice';
import { List } from "@mui/material";
import './index.css'



const ListOfPkhBalance = () => {
    const listPkh = useAppSelector(selectList);

    return (
        listPkh.length ?
            <List className="paper" component="nav" aria-label="main list pkh">
                {listPkh.map(({pkh, balance}, index) => {
                    return <ItemList key={index} pkh={pkh} balance={balance} index={index}/>
                })}
            </List> :
            <></>
    );
};

export default ListOfPkhBalance;