import React, {useState} from "react";
import { Input } from "./style";

export function InputText({...props}){
    const [task, setTask] = useState('');

    return(
        <Input 
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            maxLength={25}
            returnKeyType='done'
            onChangeText={(text: React.SetStateAction<string>) =>setTask(text)}
            value={task}
            {...props}
        />   
    )
}
