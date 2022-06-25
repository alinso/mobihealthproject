import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import Lang from "./Lang";
import getLocalContent from "../../getLocalContent";

class MedicineMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            lang:null
        }
        getLocalContent(Lang,this);
    }


    onSwipeRight(state) {
        this.props.navigation.navigate('ModuleList');
    }

    goToStep(module) {
        this.props.navigation.navigate(module);
    }

    render() {
        if (this.state.lang == null)
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
                                            title={this.state.lang.info} href={"MedicineInfo1"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.basics}
                                            title={this.state.lang.basics1} href={"MedicineInfo1"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.basics}
                                            title={this.state.lang.basics2} href={"MedicineInfo2"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.sources}
                                            title={this.state.lang.sources} href={"MedicineSources"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.taxonomy}
                                            title={this.state.lang.taxonomy} href={"Taxonomy"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.naming}
                                            title={this.state.lang.naming} href={"Naming"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.shapes}
                                            title={this.state.lang.shapes1} href={"Shapes1"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.shapes}
                                            title={this.state.lang.shapes2} href={"Shapes2"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.giving}
                                            title={this.state.lang.taking1} href={"Giving1"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.giving}
                                            title={this.state.lang.taking2} href={"Giving2"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.farma}
                                            title={this.state.lang.farmo} href={"Farma"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.engagement}
                                            title={this.state.lang.engagement} href={"Engagement"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.recipes}
                                            title={this.state.lang.prescription} href={"Recipes"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.criterias}
                                            title={this.state.lang.application} href={"Engagement"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.antibiotics}
                                            title={this.state.lang.antibiotics} href={"Antibiotics"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.usage}
                                            title={this.state.lang.smartuse} href={"Usage"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.terms}
                                            title={this.state.lang.terms} href={"Terms"}/>
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
