import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import Images from "../../Images";


class BodyMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
        }

        getLocalTitles(LocalTitles, this);

    }



    onSwipeRight(state) {
        this.props.navigation.navigate('ModuleList');
    }

    goToStep(module) {
        this.props.navigation.navigate(module);
    }

    render() {
        if (this.state.titles == null)
            return null;


        return (
            <ScrollView>
                <GestureRecognizer
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    style={styles.appContainer}>

                    <View style={styles.flexContainer}>
                        <View style={{flex: 1}}/>

                        <View style={{flexDirection: "column", flex: 4}}>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.medicine.info}
                                                title={this.state.titles.info}
                                                href={"BodySteps"}
                                                navParam={"BodyInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={Images.module.medicine.info}
                                                title={this.state.titles.info}
                                                href={"BodySteps"}
                                                navParam={"BodyInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={0}
                                />

                            </View>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                </GestureRecognizer>
                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </ScrollView>
        );
    }
}

export default withNavigation(BodyMenu);
