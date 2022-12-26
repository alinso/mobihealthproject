import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";

class SicknessMenu extends React.Component {

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
                                                href={"SicknessSteps"}
                                                navParam={"ModuleInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.bowell}
                                                title={this.state.titles.bowell}
                                                href={"SicknessSteps"}
                                                navParam={"Bowell"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={1}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.sickness.cancer}
                                                title={this.state.titles.cancer}
                                                href={"SicknessSteps"}
                                                navParam={"xCancer"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={2}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.cancerTypes}
                                                title={this.state.titles.cancerTypes}
                                                href={"SicknessSteps"}
                                                navParam={"CancerTypes"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={3}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.sickness.cardioVaskuler}
                                                title={this.state.titles.cardioVaskuler}
                                                href={"SicknessSteps"}
                                                navParam={"CardioVaskuler"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.chronic}
                                                title={this.state.titles.chronic}
                                                href={"SicknessSteps"}
                                                navParam={"ChronicDisease"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={5}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.sickness.diabetics}
                                                title={this.state.titles.diabetics}
                                                href={"SicknessSteps"}
                                                navParam={"Diabetics"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={6}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.digestive}
                                                title={this.state.titles.digestive}
                                                href={"SicknessSteps"}
                                                navParam={"Digestive"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={7}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.sickness.hepatisis}
                                                title={this.state.titles.hepatisis}
                                                href={"SicknessSteps"}
                                                navParam={"Hepatisis"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.muscular}
                                                title={this.state.titles.muscular}
                                                href={"SicknessSteps"}
                                                navParam={"Muscular"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={9}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.sickness.respiratorySystem}
                                                title={this.state.titles.respiratorySystem}
                                                href={"SicknessSteps"}
                                                navParam={"RespiratorySystem"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={10}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.sicknessFactors}
                                                title={this.state.titles.sicknessFactors}
                                                href={"SicknessSteps"}
                                                navParam={"SicknessFactors"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={11}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.sickness.STD}
                                                title={this.state.titles.STD}
                                                href={"SicknessSteps"}
                                                navParam={"STD"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={12}
                                />
                                <ModuleSubtitle imgSource={Images.module.sickness.zootonic}
                                                title={this.state.titles.zootonic}
                                                href={"SicknessSteps"}
                                                navParam={"Zootonic"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@sickness"}
                                                titleIndex={13}
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

export default withNavigation(SicknessMenu);
