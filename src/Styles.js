import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    euImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"

    },

    appContainer: {
        paddingTop:"20%",
        minHeight:"100%",
        backgroundColor: '#e6e6e7',
        paddingBottom:"50%"
    },
    flexContainer: {
        flexDirection:"row",
    },

    selectLanguageCover: {
        width: "100%",
        height: "100%"

    },

    flag: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    flagContainer: {
        width: "10%",
        height: "10%"
    },

    ukFlag: {
        resizeMode: "contain",
        marginTop: "90%",
        marginLeft: "22%",
    },
    austriaFlag: {
        resizeMode: "contain",
        marginTop: "-5%",
        marginLeft: "55%",

    },
    portugalFlag: {
        resizeMode: "contain",
        marginTop: "-5%",
        marginLeft: "15%"
    },
    turkeyFlag: {
        resizeMode: "contain",
        marginTop: "-20%",
        marginLeft: "75%"
    },
    moduleTitle: {
        flex: 6,
        justifyContent: "center"
    },
    moduleStepImage :    {
        width:"50%",
        resizeMode:"contain",
        justifyContent: "center"
    },
    moduleSteptitle :    {
      marginTop:"-25%",
        justifyContent: "center"
    },

    moduleListItem:{
        alignItems:"center",
        flex:2,
        justifyContent:"center",
    },
    moduleListImage:{
        width:"60%",
        marginTop:"25%",
        marginBottom:"-20%",
        resizeMode:"contain",
    },
    footer:{
        alignSelf:"center",
        width:"15%",
        position:"absolute",
        bottom:"0%",
        resizeMode:"contain",
        opacity:0.3
    },
    moduleTitleImage:{
        width:"40%",
        resizeMode:"contain"
    }

});

export default styles;
