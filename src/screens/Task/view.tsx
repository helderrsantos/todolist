import React from "react";
import { Background } from "../../components/Background";
import {
    Box,
    Clipboard,
    Container, Counter, CreateTasks, Divider, NoTasks, OpenTaskBox, OpenTaskTitle, TaskTitle,
 } from "./styles";

export function TaskView(){
    
    return(
        <Container>
            <Background/>       
            <TaskTitle>
                <OpenTaskTitle>Em aberto</OpenTaskTitle>
                <Counter></Counter>
            </TaskTitle>
            <Divider/>
            <Box>
                <OpenTaskBox>
                    <Clipboard source={require('../../assets/Clipboard.png')}></Clipboard>
                </OpenTaskBox>
                <NoTasks>Você ainda não tem tarefas cadastradas</NoTasks>
                <CreateTasks>Crie tarefas e organize seus itens a fazer</CreateTasks>
            </Box>
        </Container>
    )
}