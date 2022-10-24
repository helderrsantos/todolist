import React from "react";
import { Background } from "../../components/Background";
import { InputText } from "../../components/InputText/Index";
import { TaskBox } from "../../components/TaskBox";
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

export function TaskView(){
    const todoList = useSelector(selectTodoList)

    return(
        <Container>
            <Background/> 
            <TaskField>
                <InputText/>            
            </TaskField>      
            <TaskTitle>
                <OpenTaskTitle>Em aberto</OpenTaskTitle>
                <ContactorBox>
                    <Counter>{todoList.length}</Counter>
                </ContactorBox>
            </TaskTitle> 

						{todoList.length === 0 
						? (      
            <Box>
            <Divider/>
                <OpenTaskBox>
                    <Clipboard source={require('../../assets/Clipboard.png')}></Clipboard>
                </OpenTaskBox>
                <NoTasks>Você ainda não tem tarefas cadastradas</NoTasks>
                <CreateTasks>Crie tarefas e organize seus itens a fazer</CreateTasks>
            </Box> ) 
						: ( 
            <Box>           
            {todoList.map((item: { item: string; done: boolean; id: number})=> 
              	<TaskBox
              	    name={item.item}
              	    done={item.done}
										id={item.id}
              	/> )
						}
            </Box>)}
        </Container>
    )
}