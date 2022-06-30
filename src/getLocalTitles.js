import Storage from "./Storage";


const getLocalTitles = async (Lang, PageRef) => {
    Storage.getData('@lang').then(function (res) {
        let lng
        if (res == "turkish")
            lng = Lang[0];
        if (res == "english")
            lng = Lang[1];
        if (res == "portugal")
            lng = Lang[2];
        if (res == "german")
            lng = Lang[3];
        PageRef.setState({titles: lng});
    });
}

export default getLocalTitles;
