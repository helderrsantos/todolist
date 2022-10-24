import { useNavigation } from '@react-navigation/native';
import React from  'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/reducers/todoSlice';
import { Box, Tasks, Trash, TrashBox} from './style';

export interface TaskBoxProps {
    name: string,
    done: boolean,
    id: number,
}

export function TaskBox({ name, id, done}: TaskBoxProps){
   const dispatch = useDispatch();
   const navigation = useNavigation();
   const remove = () => {
    dispatch(reset({id:id}))    
}
   
    return(
        <Box>
            <BouncyCheckbox
                fillColor='#4EA8DE'
                unfillColor='#262626'
                size={24}
                textStyle={{ fontFamily: 'Inter_400Regular', color:'#4EA8DE'}}
                onPress={(isChecked: boolean) => {isChecked === true ? navigation.navigate('TaskCompleted') : false}}
                text={<Tasks>{name}</Tasks>}
            />   
            <TrashBox onPress={remove}>
                <Trash source={require('../../assets/trash.png')}/>
            </TrashBox>         
        </Box>
    )
}

