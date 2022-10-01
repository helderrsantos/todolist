import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { ButtonMain } from "./style";
import { TouchableOpacity } from "react-native";

export function ButtonInput(){
    return(
        <ButtonMain activeOpacity={0.7}> 
            <Ionicons 
                name="add-circle-outline" 
                size={16} 
                color="white" 
                style={{margin: 18 }}
            />
        </ButtonMain>
    )
}