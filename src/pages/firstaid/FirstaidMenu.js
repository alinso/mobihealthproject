import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";


class FirstaidMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
        }

        getLocalTitles(LocalTitles, this);

    }

    onSwipeRight(state) {
        this.props.navigation.push('ModuleList');
    }
    onSwipeLeft(state) {
        this.props.navigation.push('ModuleList');
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
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    style={styles.appContainer}>

                    <View style={styles.flexContainer}>
                        <View style={{flex: 1}}/>

                        <View style={{flexDirection: "column", flex: 4}}>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.medicine.info}
                                                title={this.state.titles.info}
                                                href={"FirstaidSteps"}
                                                navParam={"FirstaidInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.fundamentals}
                                                title={this.state.titles.fundamentals}
                                                href={"FirstaidSteps"}
                                                navParam={"Fundamentals"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={1}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.basicapplications}
                                                title={this.state.titles.basicApplications}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicApplications"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={2}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.basicindicators}
                                                title={this.state.titles.basicIndicators}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicIndicators"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={3}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.basiclifesupport}
                                                title={this.state.titles.basicLifeSupport}
                                                href={"FirstaidSteps"}
                                                navParam={"BasicLifeSupport"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.lifekiss}
                                                title={this.state.titles.lifeKiss}
                                                href={"FirstaidSteps"}
                                                navParam={"LifeKiss"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={5}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.bleed}
                                                title={this.state.titles.bleed}
                                                href={"FirstaidSteps"}
                                                navParam={"Bleed"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={6}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.amputation}
                                                title={this.state.titles.amputation}
                                                href={"FirstaidSteps"}
                                                navParam={"Amputation"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={7}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.foreignBodySting}
                                                title={this.state.titles.foreignBodySting}
                                                href={"FirstaidSteps"}
                                                navParam={"ForeignBodySting"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.choking}
                                                title={this.state.titles.choking}
                                                href={"FirstaidSteps"}
                                                navParam={"Choking"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={9}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.headInjury}
                                                title={this.state.titles.headInjury}
                                                href={"FirstaidSteps"}
                                                navParam={"HeadInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={10}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.stomaInjury}
                                                title={this.state.titles.stomaInjury}
                                                href={"FirstaidSteps"}
                                                navParam={"StomaInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={11}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.chestInjury}
                                                title={this.state.titles.chestInjury}
                                                href={"FirstaidSteps"}
                                                navParam={"ChestInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={12}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.crushInjuryx}
                                                title={this.state.titles.crushIjnhury}
                                                href={"FirstaidSteps"}
                                                navParam={"CrushInjury"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={13}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.drowning}
                                                title={this.state.titles.drowning}
                                                href={"FirstaidSteps"}
                                                navParam={"Drowning"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={14}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.poisoning}
                                                title={this.state.titles.poisoning}
                                                href={"FirstaidSteps"}
                                                navParam={"Poisoning"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={15}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.brokenBone}
                                                title={this.state.titles.brokenBone}
                                                href={"FirstaidSteps"}
                                                navParam={"BrokenBone"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={16}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.detectionMethod}
                                                title={this.state.titles.detectionMethod}
                                                href={"FirstaidSteps"}
                                                navParam={"DetectionMethod"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={17}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.bugSting}
                                                title={this.state.titles.bugSting}
                                                href={"FirstaidSteps"}
                                                navParam={"BugSting"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={18}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.bites}
                                                title={this.state.titles.bites}
                                                href={"FirstaidSteps"}
                                                navParam={"Bites"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={19}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.burn}
                                                title={this.state.titles.burn}
                                                href={"FirstaidSteps"}
                                                navParam={"Burn"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={20}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.freeze}
                                                title={this.state.titles.freeze}
                                                href={"FirstaidSteps"}
                                                navParam={"Freeze"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={21}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.firstaid.foreignBody}
                                                title={this.state.titles.foreignBody}
                                                href={"FirstaidSteps"}
                                                navParam={"ForeignBody"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={22}
                                />
                                <ModuleSubtitle imgSource={Images.module.firstaid.chestPain}
                                                title={this.state.titles.chestPain}
                                                href={"FirstaidSteps"}
                                                navParam={"ChestPain"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@firstAid"}
                                                titleIndex={23}
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
