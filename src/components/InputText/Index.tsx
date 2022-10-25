import React, {useState} from "react";
import { Alert, Keyboard } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Input, ButtonMain } from "./style";

import { useDispatch } from "react-redux";
import { saveTodo } from "../../redux/reducers/todoSlice";

export function InputText({...props}){
    const [tasks, setTasks] = useState('');
    const dispatch = useDispatch();
    const addTodo = () =>{
        tasks === '' 
        ? Alert.alert('Crie uma tarefa') 
        : dispatch(saveTodo({
            item: tasks,
            done: false,
            id: Date.now()
        }))
    }

    return(
        <>
        <Input
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            maxLength={30}
            value={tasks}
            onChangeText={(text: React.SetStateAction<string>)=>setTasks(text)}
            {...props} />
            
        <ButtonMain 
            activeOpacity={0.7}
            onPress={addTodo}
        >
            <Ionicons
                name="add-circle-outline"
                size={16}
                color="white"
                style={{ margin: 18 }} />
        </ButtonMain>
        </>        
    )
    
}
