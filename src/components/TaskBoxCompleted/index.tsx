import React from  'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/reducers/todoSlice';
import { Box, Tasks} from './style';

export interface TaskBoxCompletedProps {
    name: string,
    done: boolean,
    id: number,
}

export function TaskBoxCompleted({ name, done, id}: TaskBoxCompletedProps){
   const dispatch = useDispatch();
   
    return(
        <Box onPress={()=> dispatch(reset({id:id}))}>
            <BouncyCheckbox
                fillColor='#5E60CE'
                unfillColor='#262626'
                size={24}
                textStyle={{ fontFamily: 'Inter_400Regular', color:'#5E60CE'}}
                text={<Tasks>{name}</Tasks>}
            />           
        </Box>
    )
}

