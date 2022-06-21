import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View,Alert} from 'react-native';
import styles from "../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';


class SelectLanguage extends React.Component {
    state = {
        myState: 'Lang Selection'
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('Welcome');
    }

    languageSelected(language) {
        this.props.navigation.navigate("ModuleList",{lang:language});
    }

    render() {
        return (
            <View>
                <GestureRecognizer
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                >
                    <ImageBackground source={require("../../assets/selectLanguageBackground.png")}
                                     style={styles.selectLanguageCover} resizeMode={"cover"}>

                        <TouchableOpacity onPress={() => this.languageSelected('ingilizce')} style={[styles.flagContainer,styles.ukFlag]}>
                            < Image source={require("../../assets/images/flags/uk.png")}
                                    style={styles.flag}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.languageSelected('avusturyaca')}  style={[styles.flagContainer,styles.austriaFlag]}>
                        <Image source={require("../../assets/images/flags/austria.png")}
                               style={styles.flag}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.languageSelected('portekizce')} style={[styles.flagContainer,styles.portugalFlag]}>
                        <Image source={require("../../assets/images/flags/portugal.png")}
                               style={styles.flag}/>
                        </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.languageSelected('türkçe')} style={[styles.flagContainer,styles.turkeyFlag]}>
                        <Image source={require("../../assets/images/flags/turkey.png")}
                               style={styles.flag}/>
                            </TouchableOpacity>

                    </ImageBackground>
                </GestureRecognizer>
            </View>
        );
    }
}

export default withNavigation(SelectLanguage);
