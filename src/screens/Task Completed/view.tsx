import React from "react";
import { Background } from "../../components/Background";
import { InputText } from "../../components/InputText/Index";
import { TaskBoxCompleted } from "../../components/TaskBoxCompleted";
import { useSelector } from "react-redux";
import { selectTodoList} from "../../redux/reducers/todoSlice"

import {
    Box,
    ContactorBox,
    Container,
    Counter, 
    Divider, 
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
            <Box>           
            { 
                todoList.map((item: { item: string; done: boolean; id: number; })=> 
                    <TaskBoxCompleted 
                        name={item.item}
                        done={item.done}
                        id={item.id}
                    /> )
            }
            </Box>
            
                
            {/*<Divider/>
            <Box>
                <OpenTaskBox>
                    <Clipboard source={require('../../assets/Clipboard.png')}></Clipboard>
                </OpenTaskBox>
                <NoTasks>Você ainda não tem tarefas cadastradas</NoTasks>
                <CreateTasks>Crie tarefas e organize seus itens a fazer{tasks}</CreateTasks>
            </Box>*/}
        </Container>
    )
}