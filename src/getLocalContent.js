import Storage from "./Storage";


const getMenuLocalContent = (Lang, PageRef) => {
    Storage.getData('@lang').then(function (res) {
        let steps
        if (res == "turkish")
            steps = Lang[0];
        if (res == "english")
            steps = Lang[1];
        if (res == "portugal")
            steps = Lang[2];
        if (res == "german")
            steps = Lang[3];
        PageRef.setState({content: steps});

    });
}

export default getMenuLocalContent;
