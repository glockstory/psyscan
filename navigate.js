import React from "react";
import LoginPage from "./components/Authentification/LoginPage";
import WelcomePage from "./components/WelcomePage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationPage from "./components/Authentification/RegistrationPage";
import ChooseTest from "./components/Authentification/ChooseTest";


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
            <Stack.Screen
            name="ChooseTest"
            component={ChooseTest}
            options= {{title: 'Choose the test'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}