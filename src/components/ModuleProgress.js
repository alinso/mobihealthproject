import React from 'react';
import { Text,  View} from "react-native";
import ModuleProgressTracker from "../ModuleProgressTracker";
let progress =new ModuleProgressTracker();


function ModuleProgress(props) {

    let percentage=1000;

    progress.calculateProgress(props.moduleName).then(function (res){
        percentage=res;
    });

    if(percentage===1000)
        return null;

    return (
        <View style={{width:"95%", height:"7%",backgroundColor:"#E3D1CD",marginBottom:"0%", marginTop:"3%"}}>
            <View style={{
                width: percentage + "%",
                height: "100%",
                padding:"1%",
                backgroundColor: "orange",
                alignSelf: "flex-start",

            }}><Text style={{fontSize:9,color:"white"}}>{percentage}%</Text>
            </View>
        </View>
    );

}

export default ModuleProgress;
