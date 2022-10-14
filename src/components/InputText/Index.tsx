import React, {useState} from "react";
import { Input } from "./style";

export function InputText({...props}){

    return(
        <Input 
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            maxLength={25}
            returnKeyType='done'
            {...props}
        />   
    )
}
