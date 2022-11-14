import Storage from "../../Storage";
import EnglishDictionary from "./EnglishDictionary";
import GermanDictionary from "./GermanDictionary";
import TurkishDictionary from "./TurkishDictionary";
import PortugalDictionary from "./PortugalDictionary";

const setLocalDictionary = async (PageRef) => {
    Storage.getData('@lang').then(function (res) {
        let dictFile;
        if (res === "turkish")
            dictFile=TurkishDictionary;

        if (res === "english")
            dictFile = EnglishDictionary;

        if (res === "portugal")
                dictFile=PortugalDictionary;

        if (res === "german")
            dictFile=GermanDictionary;

        PageRef.setState({keyz: dictFile.keyz});
        PageRef.setState({valuez:dictFile.valuez});
        PageRef.setState({currentLng:res});

    });
}

export default setLocalDictionary;
