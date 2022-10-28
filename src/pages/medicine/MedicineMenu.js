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
import ModuleProgressTracker from "../../ModuleProgressTracker";

let progress = new ModuleProgressTracker();

class MedicineMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            progress: null,
            limits: progress.medicineLimit
        }

        this.activePassive = this.activePassive.bind(this);
        getLocalTitles(LocalTitles, this);

        let self = this;
        Storage.getData("@medicine").then(function (resx) {
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
                                                href={"MedicineSteps"}
                                                navParam={"MedicineInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.fundamentals1}
                                                href={"MedicineSteps"}
                                                navParam={"Fundamentals1"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={1}
                                />
                            </View>


                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(2).module.medicine.fundamentals}
                                                title={this.state.titles.fundamentals2} href={"MedicineSteps"}
                                                navParam={"Fundamentals2"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={2}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(3).module.medicine.sources}
                                                title={this.state.titles.sources} href={"MedicineSteps"}
                                                navParam={"Sources"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={3}
                                />
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(4).module.medicine.taxonomy}
                                                title={this.state.titles.taxonomy} href={"MedicineSteps"}
                                                navParam={"Taxonomy"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(5).module.medicine.naming}
                                                title={this.state.titles.naming} href={"MedicineSteps"}
                                                navParam={"Naming"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={5}
                                />
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(6).module.medicine.shapes}
                                                title={this.state.titles.shapes1} href={"MedicineSteps"}
                                                navParam={"Shapes1"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={6}

                                />
                                <ModuleSubtitle imgSource={this.activePassive(7).module.medicine.shapes}
                                                title={this.state.titles.shapes2} href={"MedicineSteps"}
                                                navParam={"Shapes2"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={7}

                                />
                            </View>


                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(8).module.medicine.taking}
                                                title={this.state.titles.taking1} href={"MedicineSteps"}
                                                navParam={"Taking1"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(9).module.medicine.taking}
                                                title={this.state.titles.taking2} href={"MedicineSteps"}
                                                navParam={"Taking2"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={9}
                                />
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(10).module.medicine.farmo}
                                                title={this.state.titles.farmo} href={"MedicineSteps"}
                                                navParam={"Farmo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={10}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(11).module.medicine.interaction}
                                                title={this.state.titles.interaction} href={"MedicineSteps"}
                                                navParam={"Interactions"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={11}
                                />
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(12).module.medicine.recipes}
                                                title={this.state.titles.prescription} href={"MedicineSteps"}
                                                navParam={"Prescription"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={12}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(13).module.medicine.criterias}
                                                title={this.state.titles.application} href={"MedicineSteps"}
                                                navParam={"Application"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={13}
                                />
                            </View>


                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(14).module.medicine.antibiotics}
                                                title={this.state.titles.antibiotics} href={"MedicineSteps"}
                                                navParam={"Antibiotics"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={14}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(15).module.medicine.usage}
                                                title={this.state.titles.smartuse} href={"MedicineSteps"}
                                                navParam={"SmartUse"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={15}
                                />
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(16).module.medicine.medicineTerms}
                                                title={this.state.titles.medicineTerms} href={"MedicineSteps"}
                                                navParam={"MedicineTerms"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@medicine"}
                                                titleIndex={16}
                                />
                                <View style={{flex: 2}}/>
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

export default withNavigation(MedicineMenu);
