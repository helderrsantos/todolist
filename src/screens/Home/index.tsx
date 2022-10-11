import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeView } from './view';
import { increment } from '../../redux/reducers/counter';
import { useDispatch } from 'react-redux';

export function Home({}: NativeStackScreenProps<ParamListBase, 'Task'>){
    const dispatch = useDispatch();

    function handlePressCalcular(){
        dispatch(increment());
    }

    return(
        <HomeView
            onPress={handlePressCalcular}
        />
    )
}