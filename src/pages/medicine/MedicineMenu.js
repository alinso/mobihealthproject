import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";

class MedicineMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            titles:null
        }
        getLocalTitles(LocalTitles,this);
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
                                            title={this.state.titles.info} href={"MedicineSteps"} navParam={"MedicineInfo"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.fundamentals}
                                            title={this.state.titles.fundamentals1} href={"MedicineSteps"}  navParam={"Fundamentals1"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.fundamentals}
                                            title={this.state.titles.fundamentals2} href={"MedicineSteps"}  navParam={"Fundamentals2"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.sources}
                                            title={this.state.titles.sources} href={"MedicineSteps"}  navParam={"Sources"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.taxonomy}
                                            title={this.state.titles.taxonomy} href={"MedicineSteps"}  navParam={"Taxonomy"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.naming}
                                            title={this.state.titles.naming} href={"Naming"}  navParam={"MedicineInfo"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.shapes}
                                            title={this.state.titles.shapes1} href={"Shapes1"}  navParam={"MedicineInfo"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.shapes}
                                            title={this.state.titles.shapes2} href={"Shapes2"}  navParam={"MedicineInfo"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.giving}
                                            title={this.state.titles.taking1} href={"Giving1"}  navParam={"MedicineInfo"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.giving}
                                            title={this.state.titles.taking2} href={"Giving2"}  navParam={"MedicineInfo"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.farma}
                                            title={this.state.titles.farmo} href={"Farma"}  navParam={"MedicineInfo"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.engagement}
                                            title={this.state.titles.engagement} href={"Engagement"}  navParam={"MedicineInfo"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.recipes}
                                            title={this.state.titles.prescription} href={"Recipes"}  navParam={"MedicineInfo"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.criterias}
                                            title={this.state.titles.application} href={"Engagement"}  navParam={"MedicineInfo"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.antibiotics}
                                            title={this.state.titles.antibiotics} href={"Antibiotics"}  navParam={"MedicineInfo"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.usage}
                                            title={this.state.titles.smartuse} href={"Usage"}  navParam={"MedicineInfo"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.terms}
                                            title={this.state.titles.terms} href={"Terms"}  navParam={"MedicineInfo"}/>
                            <View style={{flex:2}}/>
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
