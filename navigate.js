import React from "react";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationPage from "./components/RegistrationPage";


const Stack = createStackNavigator();

export default function Navigate() {
    return( 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Main"
            component={WelcomePage}
            options= {{title: 'Main'}}
            />
            <Stack.Screen
            name="Login"
            component={LoginPage}
            options= {{title: 'Login'}}
            />
            <Stack.Screen
            name="Registration"
            component={RegistrationPage}
            options= {{title: 'Registration'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}