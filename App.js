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
import BodyMenu from "./src/pages/body/BodyMenu";
import BodySteps from "./src/pages/body/BodySteps";
import SicknessMenu from "./src/pages/sickness/SicknessMenu";
import SicknessSteps from "./src/pages/sickness/SicknessSteps";
import Search from "./src/pages/dictionary/Search";
import Certificate from "./src/pages/certificate/Certificate";

const Stack = createStackNavigator({
        ModuleList: {screen:ModuleList},
        Welcome: {screen:Welcome},
        SelectLanguage: {screen:SelectLanguage},
        MedicineMenu:{screen:MedicineMenu},
        MedicineSteps:{screen:MedicineSteps},
        FirstaidMenu:{screen:FirstaidMenu},
        FirstaidSteps:{screen:FirstaidSteps},
        HealthyLifeMenu:{screen:HealthyLifeMenu},
        HealthyLifeSteps:{screen:HealthyLifeSteps},
        BodyMenu:{screen:BodyMenu},
        BodySteps:{screen:BodySteps},
        SicknessMenu:{screen:SicknessMenu},
        SicknessSteps:{screen:SicknessSteps},
        Search:{screen:Search},
        About:{screen:About},
        Certificate:{screen:Certificate},
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
