import {Dimensions, StyleSheet} from "react-native";

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    euImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    searchInput: {
        backgroundColor: "#dbe8ba",
        borderRadius:3,
        width: "80%",
        left: "10%"
    },
    searchRes:{
        marginTop:"3%",
        left:"10%",
        width:"80%"
    },
    searchTitle:{
        fontWeight:"bold",
        marginTop:"5%",
        left:"10%"
    },
    stepPic: {
        resizeMode: "contain",
        width: "100%",
        height: (win.width / 2),
        marginTop: "5%",
        marginBottom: "5%",
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
        minHeight: (win.height * 1.1),
        backgroundColor: '#e8eeda',
        paddingBottom: "50%"
    },
    moduleListContainer: {
        paddingTop: "10%",
        minHeight: (win.height * 1.1),
        backgroundColor: '#e8eeda',
        paddingBottom: "50%"
    },
    welcomeContainer: {
        backgroundColor: '#e6e6e7',
    },
    backLink: {
        marginLeft: "5%"
    },
    flexContainer: {
        flexDirection: "row",
        minHeight: "100%"
    },
    pager: {
        marginTop: "5%",
        alignSelf: "center",
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
        height: 130,
        resizeMode: "contain",
        justifyContent: "center"
    },
    moduleSteptitle: {
        marginTop: "-25%",
        justifyContent: "center"
    },
    titleListItem: {
        alignItems: "center",
        flex: 2,
        justifyContent: "center",
    },
    titleListItemPassive: {
        alignItems: "center",
        flex: 2,
        justifyContent: "center",
        opacity: 0.6
    },
    moduleListItem: {
        alignItems: "center",
        flex: 2,
        justifyContent: "center",
    },
    moduleListImage: {
        width: "40%",
        resizeMode: "contain",
    },
    moduleListImage2: {
        width: "20%",
        resizeMode: "contain",
    },

    moduleListImagePassive: {
        width: "60%",
        resizeMode: "contain",
        opacity: 0.5
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
