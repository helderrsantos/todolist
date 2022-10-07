import React from "react";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { InputText } from "../../components/InputText/Index";
import { ButtonInput } from "../../components/ButtonInput";
import { useSelector } from "react-redux";
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
import { TaskProps } from "../Home/view";

export function TaskView({onPress}:TaskProps){
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.total);

    return(
        <Container>
            <Background/> 
            <TaskField>
                <InputText/>            
                <ButtonInput
                    onPress={onPress}
                />
            </TaskField>      
            <TaskTitle>
                <OpenTaskTitle>Em aberto</OpenTaskTitle>
                <ContactorBox>
                    <Counter>{count}</Counter>
                </ContactorBox>
            </TaskTitle>
            <Divider/>
            <Box onPress={() => navigation.goBack()}>
                <OpenTaskBox>
                    <Clipboard source={require('../../assets/Clipboard.png')}></Clipboard>
                </OpenTaskBox>
                <NoTasks>Você ainda não tem tarefas cadastradas</NoTasks>
                <CreateTasks>Crie tarefas e organize seus itens a fazer</CreateTasks>
            </Box>
        </Container>
    )
}