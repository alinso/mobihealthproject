import React from 'react';
import {Image, View} from "react-native";
import styles from "../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import Storage from "../Storage";

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        let self=this;
        setTimeout(function (){
            self.onSwipeLeft(null);
        },3000)

    }

    onSwipeLeft(state) {
        let self = this;
        Storage.getData('@lang').then(function (res) {
            if (res != null) {
                self.props.navigation.navigate("ModuleList");
            } else {
                self.props.navigation.navigate('SelectLanguage');
            }
        });

    }

    render() {
        return (
            <View style={styles.welcomeContainer}>
                <GestureRecognizer
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                >
                    <Image style={styles.euImage}
                           source={require("../../assets/eu.png")}
                    />

                </GestureRecognizer>
            </View>
        );
    }
}

export default withNavigation(Welcome);
