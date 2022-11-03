import React from 'react';
import './index.css'
import { useForm } from "react-hook-form";
import { Sotez } from "sotez"
import {useAppDispatch} from "../../app/hooks";
import {addItem} from "../ListOfPkhBalance/listSlice";
import InputPublicKey from "./components/InputPublicKey";
import AddButton from "./components/AddButton";

const FormPublicKeyHash = () => {
    const { handleSubmit, control } = useForm();
    const Tezos = new Sotez('https://mainnet-node.madfish.solutions')
    const dispatch = useAppDispatch();

    const onSubmit = (data: any) => {
        Tezos.getBalance(data.publicKeyHash)
            .then(balance => {
                dispatch(addItem({pkh: data.publicKeyHash, balance: Number(balance) / 1000000}))
            })
            .catch(e => console.log('publicKeyHash', e))
    };

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <InputPublicKey name={'publicKeyHash'} control={control} label={'Public Key Hash'}  placeholder="Enter your pkh here..."/>
            <AddButton handleSubmit={handleSubmit} event={onSubmit} label="Add"/>
        </form>
    );
};

export default FormPublicKeyHash;