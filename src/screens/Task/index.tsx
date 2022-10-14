import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../../redux/reducers/counter';
import { TaskView } from './view';

export function Task(){
    const [tasks, setTasks] = useState('')
    const dispatch = useDispatch();

    function handlePressDiminuir(){
        dispatch(decrement());
    }
    return(
        <TaskView
            onPress={handlePressDiminuir}
            
        />
    )
}