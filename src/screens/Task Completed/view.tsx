import React from "react";
import { Background } from "../../components/Background";
import { InputText } from "../../components/InputText/Index";
import { TaskBoxCompleted } from "../../components/TaskBoxCompleted";
import { useSelector } from "react-redux";
import { selectTodoList} from "../../redux/reducers/todoSlice"

import {
    Box,
    Clipboard,
    ContactorBox,
    Container,
    Counter, 
    CreateTasks, 
    Divider, 
    NoTasks, 
    OpenTaskBox, 
    OpenTaskTitle, 
    TaskField,
    TaskTitle,
 } from "./styles";

export function TaskCompletedView(){
    const todoList = useSelector(selectTodoList)

    return(
        <Container>
            <Background/> 
            <TaskField>
                <InputText/>            
            </TaskField>      
            <TaskTitle>
                <OpenTaskTitle>Concluídas</OpenTaskTitle>
                <ContactorBox>
                    <Counter>{todoList.length}</Counter>
                </ContactorBox>
            </TaskTitle> 
            {todoList.length === 0 
            ?
            <Box>
            <Divider/>
                <OpenTaskBox>
                    <Clipboard source={require('../../assets/Clipboard.png')}></Clipboard>
                </OpenTaskBox>
                <NoTasks>Você ainda não tem tarefas concluídas</NoTasks>
                <CreateTasks>Crie e conclua suas tarefas</CreateTasks>
            </Box>
            :
            <Box>           
            { 
                todoList.map((item: { item: string; id: number; })=> 
                    <TaskBoxCompleted 
                        name={item.item}
                        id={item.id}
                    /> )
            }
            </Box>}
        </Container>
    )
}