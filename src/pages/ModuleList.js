import React from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from "../Styles";


class ModuleList extends React.Component {

    state = {
        myState: 'Moduller Listesi Gelcek'
    }

    render() {
        const lang = this.props.navigation.getParam("lang");
        return (
            <View>
                <Text style={styles.moduleTitle}>{lang} {this.state.myState} </Text>
            </View>
        );
    }
}

export default withNavigation(ModuleList);
