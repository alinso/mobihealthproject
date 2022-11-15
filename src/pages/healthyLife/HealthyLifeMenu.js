import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";

class HealthyLifeMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
        }

        getLocalTitles(LocalTitles, this);

        let self = this;

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
                                            title={this.state.titles.fundamentals}
                                            href={"HealthyLifeSteps"}
                                            navParam={"Fundamentals"}
                                            lockWarning={this.state.titles.lockWarning}
                                            moduleName={"@healthyLife"}
                                            titleIndex={0}
                            />
                                <ModuleSubtitle imgSource={Images.module.healthylife.nutrition}
                                    title={this.state.titles.nutrition}
                                    href={"HealthyLifeSteps"}
                                    navParam={"Nutrition"}
                                    lockWarning={this.state.titles.lockWarning}
                                    moduleName={"@healthyLife"}
                                    titleIndex={1}
                                    />
                            </View>
                            <View style={{flexDirection: "row"}}>

                                    <ModuleSubtitle imgSource={Images.module.healthylife.foodTypes}
                                            title={this.state.titles.foodTypes}
                                            href={"HealthyLifeSteps"}
                                            navParam={"FoodTypes"}
                                            lockWarning={this.state.titles.lockWarning}
                                            moduleName={"@healthyLife"}
                                            titleIndex={2}
                            />
                            <ModuleSubtitle imgSource={Images.module.healthylife.physicalActivity}
                                            title={this.state.titles.physicalActivity}
                                            href={"HealthyLifeSteps"}
                                            navParam={"PhysicalActivity"}
                                            lockWarning={this.state.titles.lockWarning}
                                            moduleName={"@healthyLife"}
                                            titleIndex={3}
                            />
                        </View>
                            <View style={{flexDirection: "row"}}>

                                <ModuleSubtitle imgSource={Images.module.healthylife.obesity}
                                                title={this.state.titles.obesity}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Obesity"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={4}
                                />
                                <ModuleSubtitle imgSource={Images.module.healthylife.physicalActivity}
                                                title={this.state.titles.physicalActivity}
                                                href={"HealthyLifeSteps"}
                                                navParam={"PhysicalActivity"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={5}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>

                                <ModuleSubtitle imgSource={Images.module.healthylife.bodyTypes}
                                                title={this.state.titles.bodyTypes}
                                                href={"HealthyLifeSteps"}
                                                navParam={"BodyTypes"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={6}
                                />
                                <ModuleSubtitle imgSource={Images.module.healthylife.pregnancy}
                                                title={this.state.titles.pregnancy}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Pregnancy"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={7}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>

                                <ModuleSubtitle imgSource={Images.module.healthylife.biberon}
                                                title={this.state.titles.biberon}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Biberon"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={Images.module.healthylife.oldPeople}
                                                title={this.state.titles.oldPeople}
                                                href={"HealthyLifeSteps"}
                                                navParam={"OldPeople"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={9}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.healthylife.workers}
                                                title={this.state.titles.workers}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Workers"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={10}
                                />
                                <ModuleSubtitle imgSource={Images.module.healthylife.sportsmen}
                                                title={this.state.titles.sportsmen}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Sportsmen"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={11}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.healthylife.vegetarian}
                                                title={this.state.titles.vegetarian}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Vegetarian"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={12}
                                />
                                <ModuleSubtitle imgSource={Images.module.healthylife.chronicles}
                                                title={this.state.titles.chronicles}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Chronicles"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={13}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.healthylife.diets}
                                                title={this.state.titles.diets}
                                                href={"HealthyLifeSteps"}
                                                navParam={"Diets"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@healthyLife"}
                                                titleIndex={14}
                                />
                                <ModuleSubtitle imgSource={Images.module.healthylife.foodSafety}
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
