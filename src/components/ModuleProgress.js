import React from 'react';
import { Text,  View} from "react-native";


function ModuleProgress(props) {
    return (
        <View style={{width:"95%", height:"7%",backgroundColor:"#E3D1CD",marginBottom:"0%", marginTop:"3%"}}>
            <View style={{
                width: props.progress + "%",
                height: "100%",
                padding:"1%",
                backgroundColor: "orange",
                alignSelf: "flex-start",

            }}><Text style={{fontSize:9,color:"white"}}>{props.progress}%</Text>
            </View>
        </View>
    );

}

export default ModuleProgress;
