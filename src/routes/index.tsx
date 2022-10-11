import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Task } from '../screens/Task';

const { Navigator: NavigatorStack, Screen: StackScreen } = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <NavigatorStack initialRouteName='Home' screenOptions={{headerShown:false}}>
                <StackScreen name='Home' component={Home}/>
                <StackScreen name='Task' component={Task}/>
            </NavigatorStack>
        </NavigationContainer>
    )
}

export default Routes;