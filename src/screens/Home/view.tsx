import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Background } from "../../components/Background";
import {
    Container,
    TaskTitle,
    OpenTask,
    TaskBox,
    TaskCompleted,
    Counter,
 } from "./styles";

export function HomeView(){

    return(
        <Container>
            <Background/>
            <TaskTitle>Minhas tarefas</TaskTitle>
            <TaskBox>
                <OpenTask>  
                    <BouncyCheckbox
                        onPress={() => alert('teste')}
                        fillColor='#4EA8DE'
                        unfillColor='#262626'
                        text='Em Aberto' 
                        size={24}
                        textStyle={{ fontFamily: 'Inter_700Bold', color:'#4EA8DE', textDecorationLine:'none'}}
                        style={{marginLeft:24, marginTop:37,marginRight:24, marginBottom:36}}
                    />
                    <Counter></Counter>
                </OpenTask>
                <TaskCompleted>
                    <BouncyCheckbox
                        fillColor='#5E60CE'
                        unfillColor='#262626'
                        text='Concluídas' 
                        size={24}
                        textStyle={{ fontFamily: 'Inter_700Bold', color:'#5E60CE', textDecorationLine:'none'}}
                        style={{marginLeft:24, marginTop:37,marginRight:18, marginBottom:36}}
                    />
                    <Counter></Counter>
                </TaskCompleted>
            </TaskBox>           
        </Container>
    )
}