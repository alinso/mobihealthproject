import Storage from "./Storage";

class ModuleProgressTracker {

    bodyArr;
    firstAidArr;
    healthyLifeArr;
    medicineArr;

    constructor() {
        this.bodyArr = new Array(13).fill(0);
        this.firstAidArr = new Array(24).fill(0);
        this.healthyLifeArr = new Array(15).fill(0);
        this.medicineArr = new Array(17).fill(0);


        let self = this;
        Storage.getData("@medicine").then(function (res) {
            console.log("constructorx: " + res);
            if (res == null) {
                let medicineArrStr = JSON.stringify(self.medicineArr);
                Storage.save("@medicine", medicineArrStr);
            } else {
                self.medicineCurent = JSON.parse(res);
            }
        });

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
            else
                moduleArray = JSON.parse(resx);

            console.log("proceed > "+moduleName+" > "+moduleArray);

            moduleArray[titleIndex] = 1;
            let copyStr = JSON.stringify(moduleArray);
            Storage.save(moduleName, copyStr);
        });
    }


    async calculateProgress(moduleName) {
        let val = await Storage.getData(moduleName).then(function (resx) {
            let openedTitleCount = 0;

            console.log("calculateProgress > " + moduleName + " >" + resx);
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












