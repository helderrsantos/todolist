import React, { useState } from "react";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { InputText } from "../../components/InputText/Index";
import { ButtonInput } from "../../components/ButtonInput";
import { useSelector } from "react-redux";
import { TaskProps } from "../Home/view";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FlatList } from "react-native-gesture-handler";
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
    TaskBox, 
    TaskField, 
    Tasks, 
    TaskTitle,
    Trash,
    TrashBox,
 } from "./styles";

export function TaskView({onPress}:TaskProps){
    const navigation = useNavigation();
    const [task, setTask] = useState();
    const count = useSelector(state => state.counter.total);

    return(
        <Container>
            <Background/> 
            <TaskField>
                <InputText onChangeText={(text: React.SetStateAction<undefined>)=>setTask(text)} value={task}/>            
                <ButtonInput/>
            </TaskField>      
            <TaskTitle>
                <OpenTaskTitle>Em aberto</OpenTaskTitle>
                <ContactorBox>
                    <Counter>{count}</Counter>
                </ContactorBox>
            </TaskTitle>            
            <TaskBox>
                <BouncyCheckbox
                    onPress={(isChecked: boolean) => {false}}
                    size={24}
                    unfillColor='#262626'
                    fillColor='#4EA8DE'
                    textStyle={{ fontFamily: 'Inter_400Regular', color:'#F2F2F2', fontSize:14}}
                    
                />
                <FlatList
                    data={task}   
                    keyExtractor={item => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item)=>(
                        <Tasks data={item}>{task}</Tasks>
                    )}             
                />
                <TrashBox>
                    <Trash theme={{color:'red'}}source={require('../../assets/trash.png')}></Trash>
                </TrashBox>
            </TaskBox>
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