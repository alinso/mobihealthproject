import {Dimensions, StyleSheet} from "react-native";

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    euImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    stepPic: {
        resizeMode:"contain",
        width: "100%",
        height:(win.width/2),
        marginTop:"5%",
        marginBottom:"5%",
    },
    stepTitle: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    stepText: {
        width: "90%",
        alignSelf: "center"
    },
    appContainer: {
        paddingTop: "20%",
        minHeight: (win.height*1.1),
        backgroundColor: '#e6e6e7',
        paddingBottom: "50%"
    },
    welcomeContainer:{
        backgroundColor: '#e6e6e7',
    },
    backLink:{
       marginLeft:"5%"
    },
    flexContainer: {
        flexDirection: "row",
        minHeight:"100%"
    },
    pager: {
    marginTop:"5%",
        alignSelf:"center",
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
    moduleStepImage: {
        width: "50%",
        resizeMode: "contain",
        justifyContent: "center"
    },
    moduleSteptitle: {
        marginTop: "-25%",
        justifyContent: "center"
    },

    moduleListItem: {
        alignItems: "center",
        flex: 2,
        justifyContent: "center",
    },
    moduleListImage: {
        width: "60%",
        marginTop: "20%",
        marginBottom: "-20%",
        resizeMode: "contain",
    },

    moduleListImagePassive: {
        width: "60%",
        marginTop: "20%",
        marginBottom: "-20%",
        resizeMode: "contain",
        opacity:0.5
    },

    footer: {
        alignSelf: "center",
        width: "15%",
        position: "absolute",
        bottom: "0%",
        resizeMode: "contain",
        opacity: 0.3
    },
    moduleTitleImage: {
        width: "40%",
        resizeMode: "contain"
    }

});

export default styles;
