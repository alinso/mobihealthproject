import React from 'react';
import {Text, View} from "react-native";
import ModuleProgressTracker from "../ModuleProgressTracker";

let progress = new ModuleProgressTracker();


class ModuleProgress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            percentage: 0,
        }

        let self = this;
        progress.calculateProgress(props.moduleName).then(function (res) {
            self.setState({percentage: res});
        });

    }

    render() {

        return (
            <View style={{width: "55%", height: 13, backgroundColor: "#E3D1CD", marginBottom: "8%", marginTop: "3%"}}>
                <View style={{
                    width: this.state.percentage + "%",
                    height: "100%",
                    padding: "1%",
                    backgroundColor: "orange",
                    alignSelf: "flex-start",

                }}><Text style={{fontSize: 9, color: "white"}}>{this.state.percentage}%</Text>
                </View>
            </View>
        );
    }
}

export default ModuleProgress;
