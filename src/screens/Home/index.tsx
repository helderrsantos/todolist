import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { 
    Container, 
    Rocket, 
    HeaderMain, 
    Title,
    TitleDo,
    Header,
    TaskField,
    InputText,
    ButtonInput,
 } from "./styles";

export function Home(){
    
    return(
        <Container>            
            <HeaderMain>
                <Header>
                    <Rocket source={require('../../assets/rocket.png')}></Rocket>
                    <Title> to</Title>          
                    <TitleDo>do</TitleDo> 
                </Header>               
            </HeaderMain>
            <TaskField>
                <InputText>Adicione uma nova tarefa </InputText>
                <ButtonInput><Ionicons name="add-circle-outline" size={16} color="white" style={{margin: 18 }}/></ButtonInput>
            </TaskField>
        </Container>
    )
}