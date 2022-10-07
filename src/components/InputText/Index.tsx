import React, {useState} from "react";
import { Input } from "./style";

export function InputText(){
    const [task, setTask] = useState('');

    return(
        <Input 
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            onChangeText={setTask}
            value={task}
        />   
    )
}
