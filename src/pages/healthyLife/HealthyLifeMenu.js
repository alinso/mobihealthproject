import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import Storage from "../../Storage";
import Progress from "../../Progress";

let progress = new Progress();

class HealthyLifeMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            progress: null,
            limits: progress.healthyLifeLimit
        }

        this.activePassive = this.activePassive.bind(this);
        getLocalTitles(LocalTitles, this);

        let self = this;
        Storage.getData("@healthyLife").then(function (resx) {
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
                                                title={this.state.titles.fundamentals}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Fundamentals"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.nutrition}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Nutrition"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={1}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>

                            <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                            title={this.state.titles.foodTypes}
                                            href={"HealthyLifeSteps"}
                                            navParam={"FoodTypes"}
                                            lockWarning={this.state.titles.lockWarning}
                                            moduleName={"@healthyLife"}
                                            titleIndex={2}
                            />
                            <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                            title={this.state.titles.physicalActivity}
                                            href={"HealthyLifeSteps"}
                                            navParam={"PhysicalActivity"}
                                            lockWarning={this.state.titles.lockWarning}
                                            moduleName={"@healthyLife"}
                                            titleIndex={3}
                            />
                        </View>
                            <View style={{flexDirection: "row"}}>

                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.obesity}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Obesity"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.physicalActivity}
                                                href={"HealthyLifeSteps"}
                                                navParam={"PhysicalActivity"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={5}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>

                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.bodyTypes}
                                                href={"HealthyLifeSteps"}
                                                navParam={"BodyTypes"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={6}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.physicalActivity}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Pregnancy"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={7}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>

                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.biberon}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Biberon"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.oldPeople}
                                                href={"HealthyLifeSteps"}
                                                navParam={"OldPeople"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={9}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.workers}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Workers"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={10}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.sportsmen}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Sportsmen"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={11}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.vegetarian}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Vegetarian"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={12}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.chronicles}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Chronicles"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={13}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.diets}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Diets"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={14}
                                />
                                <ModuleSubtitle imgSource={this.activePassive(1).module.medicine.fundamentals}
                                                title={this.state.titles.foodSafety}
                                                href={"HealthyLifeSteps"}
                                                navParam={"FoodSafety"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={15}
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

export default withNavigation(HealthyLifeMenu);
