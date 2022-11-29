import Storage from "./Storage";

class ModuleProgressTracker {

    bodyArr;
    firstAidArr;
    healthyLifeArr;
    medicineArr;

    constructor() {
        this.bodyArr = new Array(12).fill(0);
        this.firstAidArr = new Array(24).fill(0);
        this.healthyLifeArr = new Array(16).fill(0);
        this.medicineArr = new Array(17).fill(0);
        this.sicknessArr = new Array(14).fill(0);


        let modules = [{name: "@medicine", arr: this.medicineArr},
            {name: "@body", arr: this.bodyArr},
            {name: "@firstAid", arr: this.firstAidArr},
            {name: "@healthyLife", arr: this.healthyLifeArr},
            {name: "@sickness", arr: this.sicknessArr}];

        for (let i = 0; i < modules.length; i++) {
            Storage.getData(modules[i].name).then(function (res) {
                if (res == null|| true ) { //TODO:REMOVE TRUE
                    let arrStr = JSON.stringify(modules[i].arr);
                    Storage.save(modules[i].name, arrStr);
                }else{
                    modules[i].arr = JSON.parse(res);
                }
            });
        }
    }

    proceed(moduleName, titleIndex) {

        let self = this;
        Storage.getData(moduleName).then(function (resx) {

            let moduleArray;

            if (resx === null && moduleName === "@firstAid")
                moduleArray = self.firstAidArr;
            else if (resx === null && moduleName === "@body")
                moduleArray = self.bodyArr;
            else if (resx === null && moduleName === "@medicine")
                moduleArray = self.medicineArr;
            else if (resx === null && moduleName === "@healthyLife")
                moduleArray = self.healthyLifeArr;
            else if (resx === null && moduleName === "@sickness")
                moduleArray = self.sicknessArr;
            else
                moduleArray = JSON.parse(resx);


            moduleArray[titleIndex] = 1;
            let copyStr = JSON.stringify(moduleArray);
            Storage.save(moduleName, copyStr);
        });
    }


    async calculateProgress(moduleName) {
        let val = await Storage.getData(moduleName).then(function (resx) {
            let openedTitleCount = 0;

            if (resx === null)
                return 0;

            let moduleArray = JSON.parse(resx);

            for (let i = 0; i < moduleArray.length; i++) {
                if (moduleArray[i] === 1) {
                    openedTitleCount++;
                }
            }
            return (openedTitleCount / moduleArray.length) * 100;
        });
        return Math.round(parseInt(val));
    }
}

export default ModuleProgressTracker;












