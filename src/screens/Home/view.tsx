import { useNavigation } from "@react-navigation/native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from "react-redux";
import { Background } from "../../components/Background";
import { InputText } from "../../components/InputText/Index";
import { selectTodoList } from "../../redux/reducers/todoSlice";
import {
    Container,
    TaskTitle,
    OpenTask,
    TaskBox,
    TaskCompleted,
    Counter,
    TaskField,
    ContactorBox,
 } from "./styles";

export function HomeView(){
    const navigation = useNavigation();
    const todoList = useSelector(selectTodoList)

    return(
        <Container>
            <Background/>
            <TaskField>
                <InputText/>            
            </TaskField>
            <TaskTitle>Minhas tarefas</TaskTitle>
            <TaskBox>
                <OpenTask> 
                    <BouncyCheckbox                       
                        fillColor='#4EA8DE'
                        unfillColor='#262626'
                        text='Em Aberto' 
                        size={24}
                        textStyle={{ fontFamily: 'Inter_700Bold', color:'#4EA8DE', textDecorationLine:'none'}}
                        style={{marginLeft:24, marginTop:37,marginRight:24, marginBottom:36}}
                        onPress={(isChecked: boolean) => {isChecked ? navigation.navigate('Task') : false}}
                    />
                    <ContactorBox>
                        <Counter>{todoList.length}</Counter>                    
                    </ContactorBox>
                </OpenTask>
                <TaskCompleted>
                    <BouncyCheckbox
                        fillColor='#5E60CE'
                        unfillColor='#262626'
                        text='Concluídas' 
                        size={24}
                        textStyle={{ fontFamily: 'Inter_700Bold', color:'#5E60CE', textDecorationLine:'none'}}
                        style={{marginLeft:24, marginTop:37,marginRight:18, marginBottom:36}}
                        onPress={(isChecked: boolean) => {isChecked ? navigation.navigate('TaskCompleted') : false}}
                    />
                    <ContactorBox>
                        <Counter>{todoList.length}</Counter>                    
                    </ContactorBox>
                </TaskCompleted>
            </TaskBox>           
        </Container>
    )
}