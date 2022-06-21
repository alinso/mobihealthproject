import React from 'react';
import {Image, Text, View,ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from "../Styles";
import GestureRecognizer from "react-native-swipe-gestures";


class ModuleList extends React.Component {

    state = {
        myState: 'Moduller Listesi Gelcek'
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('SelectLanguage');
    }

    render() {
        const lang = this.props.navigation.getParam("lang");
        return (
            <GestureRecognizer onSwipeRight={(state) => this.onSwipeRight(state)} style={styles.appContainer}>

            <View style={styles.flexContainer}>
                <View style={{flex: 1}}/>
                <View style={{flexDirection: "column", flex: 4}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.moduleListItem}>
                            <Image style={styles.moduleListImage}
                                   source={require("../../assets/images/menu-icons/module1-menu.png")}
                            />
                            <Text>Tıbbi Terimler</Text>
                        </View>
                        <View style={styles.moduleListItem}>
                            <Image style={styles.moduleListImage}
                                   source={require("../../assets/images/menu-icons/body-menu.png")}
                            />
                            <Text>Vücudum</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.moduleListItem}>
                            <Image style={styles.moduleListImage}
                                   source={require("../../assets/images/menu-icons/medicine-menu.png")}
                            />
                            <Text>İlaçlar</Text>
                        </View>
                        <View style={styles.moduleListItem}>
                            <Image style={styles.moduleListImage}
                                   source={require("../../assets/images/menu-icons/sickness-menu.png")}
                            />
                            <Text>Hastalıklar</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <View style={styles.moduleListItem}>
                            <Image style={styles.moduleListImage}
                                   source={require("../../assets/images/menu-icons/firstaid-menu.png")}
                            />
                            <Text>İlk Yardım</Text>
                        </View>
                        <View style={styles.moduleListItem}>
                            <Image style={styles.moduleListImage}
                                   source={require("../../assets/images/menu-icons/healthylife.png")}
                            />
                            <Text>Sağlıklı Yaşam</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}/>
            </View>
                <Image source={require("../../assets/icon.png")} style={styles.footer}/>
            </GestureRecognizer>

        );
    }
}

export default withNavigation(ModuleList);
