import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../appHistorias/screens/Profile";
import StackNavigator from "./StackNavigation";
import LogoutScreen from "../screens/LogoutScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Tela Inicial' component={StackNavigator} ></Drawer.Screen>
            <Drawer.Screen name='Perfil' component={ProfileScreen} ></Drawer.Screen>
            <Drawer.Screen name="Sair" component={LogoutScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;