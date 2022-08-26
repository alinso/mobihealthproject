import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import ImagesPassive from "../../ImagesPassive";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import Storage from "../../Storage";
import Progress from "../../Progress";

let progress = new Progress();

class FirstaidMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            progress: null,
            limits: progress.firstaidLimit
        }

        this.activePassive = this.activePassive.bind(this);
        getLocalTitles(LocalTitles, this);

        let self = this;
        Storage.getData("@firstaid").then(function (resx) {
            let resxArr = JSON.parse(resx);
            self.setState({progress: resxArr});
        });

    }

     activePassive(titleIndex) {

        console.log(this.state.progress);
            if (this.state.progress[titleIndex] === this.state.limits[titleIndex]) {
                return Images;
            } else {
                return ImagesPassive;
            }

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

        if(this.state.progress==null)
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
                                <ModuleSubtitle imgSource={this.activePassive(0).module.medicine.info}
                                                title={this.state.titles.info}
                                                href={"FirstaidSteps"}
                                                navParam={"FirstaidInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.fundamentals}
                                                href={"FirstaidSteps"}
                                                navParam={"Fundamentals"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={1}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.medicine.info}
                                                title={this.state.titles.basicApplications}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicApplications"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={2}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.info}
                                                title={this.state.titles.basicIndicators}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicIndicators"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={3}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.medicine.info}
                                                title={this.state.titles.basicLifeSupport}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicLifeSupport"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.info}
                                                title={this.state.titles.lifeKiss}
                                                href={"FirstaidSteps"}
                                                navParam={"LifeKiss"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={5}
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

export default withNavigation(FirstaidMenu);
