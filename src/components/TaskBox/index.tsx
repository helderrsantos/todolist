import { useNavigation } from '@react-navigation/native';
import React from  'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/reducers/todoSlice';
import { Box, Tasks} from './style';

export interface TaskBoxProps {
    name: string,
    done: boolean,
    id: number,
}

export function TaskBox({ name, done, id}: TaskBoxProps){
   const dispatch = useDispatch();
   const navigation = useNavigation();

   function handleCompleted(){
    
    navigation.navigate('TaskCompleted');
   }
   
    return(
        <Box onPress={handleCompleted}>
            <BouncyCheckbox
                fillColor='#4EA8DE'
                unfillColor='#262626'
                size={24}
                textStyle={{ fontFamily: 'Inter_400Regular', color:'#4EA8DE'}}
                isChecked={done}
                text={<Tasks>{name}</Tasks>}
            />           
        </Box>
    )
}

