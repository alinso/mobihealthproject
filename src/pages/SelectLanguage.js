import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from "../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import Storage from "../Storage";

class SelectLanguage extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        myState: 'Lang Selection'
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('Welcome');
    }

    languageSelected(language) {
        let self=this;
        Storage.save("@lang", language).then(function (){
                self.props.navigation.push("ModuleList");
        })


    }

    render() {

        return (
            <View>
                <GestureRecognizer
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                >
                    <ImageBackground source={require("../../assets/selectLanguageBackground.png")}
                                     style={styles.selectLanguageCover} resizeMode={"cover"}>

                        <TouchableOpacity onPress={() => this.languageSelected('english')}
                                          style={[styles.flagContainer, styles.ukFlag]}>
                            < Image source={require("../../assets/images/flags/uk.png")}
                                    style={styles.flag}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.languageSelected('german')}
                                          style={[styles.flagContainer, styles.austriaFlag]}>
                            <Image source={require("../../assets/images/flags/austria.png")}
                                   style={styles.flag}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.languageSelected('portugal')}
                                          style={[styles.flagContainer, styles.portugalFlag]}>
                            <Image source={require("../../assets/images/flags/portugal.png")}
                                   style={styles.flag}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.languageSelected('turkish')}
                                          style={[styles.flagContainer, styles.turkeyFlag]}>
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
