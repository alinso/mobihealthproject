import React from 'react';
import {Image, View,ScrollView} from "react-native";
import styles from "../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    onSwipeLeft(state) {
        this.props.navigation.navigate('SelectLanguage');
    }

    render() {
        return (
            <View style={[styles.appContainer,styles.flexContainer]}>
                <View style={{flex:6}}>
                    <GestureRecognizer
                        onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    >
                        <Image style={styles.euImage}
                               source={require("../../assets/eu.png")}
                        /></GestureRecognizer>
                </View>
            </View>
        );
    }
}

export default withNavigation(Welcome);
