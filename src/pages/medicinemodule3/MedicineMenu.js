import React from 'react';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from "../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';


class MedicineMenu extends React.Component {
    state = {
        myState: 'Lang Selection'
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('ModuleList');
    }

    goToModule(module){
        this.props.navigation.navigate(module);
    }

    render() {
        return (
            <ScrollView style={[styles.appContainer,styles.flexContainer]}>
                <GestureRecognizer
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                >
                    <Image source={require("../../../assets/images/menu-icons/medicine.svg")}
                                     style={styles.moduleTitle} resizeMode={"cover"}/>

                        <TouchableOpacity onPress={() => this.goToModule('MedicineInfo1')}>
                            < Image source={require("../../../assets/images/menu-icons/module-info.svg")}
                                    style={styles.moduleStep}/>
                        </TouchableOpacity>

                </GestureRecognizer>
            </ScrollView>
        );
    }
}

export default withNavigation(MedicineMenu);
