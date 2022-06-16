import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import Welcome from "./src/pages/Welcome";
import ModuleList from "./src/pages/ModuleList";
import 'react-native-gesture-handler';
import SelectLanguage from "./src/pages/SelectLanguage";


const Stack = createStackNavigator({
        ModuleList: {screen: ModuleList},
        Welcome: {screen: Welcome},
        SelectLanguage: {screen: SelectLanguage}
    },
    {
        headerMode: 'none',
        initialRouteName: 'Welcome',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

const AppContainer = createAppContainer(Stack);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
