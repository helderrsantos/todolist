import React from "react";
import { InputText } from "../InputText/Index";
import { ButtonInput } from "../ButtonInput";
import {
    Main,
    Rocket, 
    HeaderMain, 
    Title,
    TitleDo,
    Header,
    TaskField,
} from './style';

export function Background(){
    return(
        <Main>                
        <HeaderMain>
            <Header>
                <Rocket source={require('../../assets/rocket.png')}></Rocket>
                <Title> to</Title>          
                <TitleDo>do</TitleDo> 
            </Header>               
        </HeaderMain>
        <TaskField>
            <InputText/>            
            <ButtonInput/>
        </TaskField>
        </Main>
    )
   
}