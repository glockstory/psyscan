import React from "react";
import RegistrationPage from "./components/RegistrationPage";
import WelcomePage from "./components/WelcomePage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

export default function Navigate() {
    return( 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options= {{title: 'Главная'}}
            />
            <Stack.Screen
            name="Registration"
            component={RegistrationPage}
            options= {{title: 'Регистрация'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}