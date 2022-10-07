import { useNavigation } from "@react-navigation/native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from "react-redux";
import { Background } from "../../components/Background";
import { ButtonInput } from "../../components/ButtonInput";
import { InputText } from "../../components/InputText/Index";
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

export interface TaskProps {
    onPress:()=> void;
}

export function HomeView({onPress}:TaskProps){
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.total);

    return(
        <Container>
            <Background/>
            <TaskField>
                <InputText/>            
                <ButtonInput onPress={onPress}/>
            </TaskField>
            <TaskTitle>Minhas tarefas</TaskTitle>
            <TaskBox>
                <OpenTask> 
                    <BouncyCheckbox
                        onPress={()=> navigation.navigate('Task')}                        
                        fillColor='#4EA8DE'
                        unfillColor='#262626'
                        text='Em Aberto' 
                        size={24}
                        textStyle={{ fontFamily: 'Inter_700Bold', color:'#4EA8DE', textDecorationLine:'none'}}
                        style={{marginLeft:24, marginTop:37,marginRight:24, marginBottom:36}}
                    />
                    <ContactorBox>
                        <Counter>{count}</Counter>                    
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
                    />
                    <ContactorBox>
                        <Counter>{count}</Counter>                    
                    </ContactorBox>
                </TaskCompleted>
            </TaskBox>           
        </Container>
    )
}