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
                //todo : fix
                return Images;
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
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.basicapplications}
                                                title={this.state.titles.basicApplications}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicApplications"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={2}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.basicindicators}
                                                title={this.state.titles.basicIndicators}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicIndicators"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={3}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.basiclifesupport}
                                                title={this.state.titles.basicLifeSupport}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicLifeSupport"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.lifekiss}
                                                title={this.state.titles.lifeKiss}
                                                href={"FirstaidSteps"}
                                                navParam={"LifeKiss"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={5}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.bleed}
                                                title={this.state.titles.bleed}
                                                href={"FirstaidSteps"}
                                                navParam={"Bleed"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={6}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.amputation}
                                                title={this.state.titles.amputation}
                                                href={"FirstaidSteps"}
                                                navParam={"Amputation"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={7}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.foreignbodysting}
                                                title={this.state.titles.foreignBodySting}
                                                href={"FirstaidSteps"}
                                                navParam={"ForeignBodySting"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.choking}
                                                href={"FirstaidSteps"}
                                                navParam={"Choking"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={9}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.bleed}
                                                title={this.state.titles.headInjury}
                                                href={"FirstaidSteps"}
                                                navParam={"HeadInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={10}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.stomaInjury}
                                                href={"FirstaidSteps"}
                                                navParam={"StomaInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={11}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.bleed}
                                                title={this.state.titles.chestInjury}
                                                href={"FirstaidSteps"}
                                                navParam={"ChestInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={12}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(0).module.firstaid.bleed}
                                                title={this.state.titles.crushIjnhury}
                                                href={"FirstaidSteps"}
                                                navParam={"CrushInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={13}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.drowning}
                                                href={"FirstaidSteps"}
                                                navParam={"Drowning"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={14}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.poisoning}
                                                href={"FirstaidSteps"}
                                                navParam={"Poisoning"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={15}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.brokenBone}
                                                href={"FirstaidSteps"}
                                                navParam={"BrokenBone"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={16}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.detectionMethod}
                                                href={"FirstaidSteps"}
                                                navParam={"DetectionMethod"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={17}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.bugSting}
                                                href={"FirstaidSteps"}
                                                navParam={"BugSting"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={18}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.bites}
                                                href={"FirstaidSteps"}
                                                navParam={"Bites"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={19}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.burn}
                                                href={"FirstaidSteps"}
                                                navParam={"Burn"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={20}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.freeze}
                                                href={"FirstaidSteps"}
                                                navParam={"Freeze"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={21}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.foreignBody}
                                                href={"FirstaidSteps"}
                                                navParam={"ForeignBody"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={21}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.firstaid.bleed}
                                                title={this.state.titles.chestPain}
                                                href={"FirstaidSteps"}
                                                navParam={"ChestPain"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstaid"}
                                                titleIndex={22}
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
