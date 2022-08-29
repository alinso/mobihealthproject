import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import Welcome from "./src/pages/Welcome";
import ModuleList from "./src/pages/ModuleList";
import 'react-native-gesture-handler';
import SelectLanguage from "./src/pages/SelectLanguage";
import MedicineMenu from "./src/pages/medicine/MedicineMenu";
import MedicineSteps from "./src/pages/medicine/MedicineSteps";
import About from "./src/pages/About";
import FirstaidMenu from "./src/pages/firstaid/FirstaidMenu";
import FirstaidSteps from "./src/pages/firstaid/FirstaidSteps";
import HealthyLifeMenu from "./src/pages/healthyLife/HealthyLifeMenu";
import HealthyLifeSteps from "./src/pages/healthyLife/HealthyLifeSteps";



const Stack = createStackNavigator({
        ModuleList: {screen: ModuleList},
        Welcome: {screen: Welcome},
        SelectLanguage: {screen: SelectLanguage},
        MedicineMenu:{screen:MedicineMenu},
        MedicineSteps:{screen:MedicineSteps},
        FirstaidMenu:{screen:FirstaidMenu},
        FirstaidSteps:{screen:FirstaidSteps},
        HealthyLifeMenu:{screen:HealthyLifeMenu},
        HealthyLifeSteps:{screen:HealthyLifeSteps},
        About:{screen:About},
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
