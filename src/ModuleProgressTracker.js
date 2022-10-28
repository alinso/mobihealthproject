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

        Storage.getData(moduleName).then(function (resx) {
            let moduleArray = JSON.parse(resx);
            moduleArray[titleIndex]=1;
            let copyStr = JSON.stringify(moduleArray);
            Storage.save(moduleName, copyStr);
        });
    }

    async isAllowed(moduleName){

        let prevModule;
        if(moduleName==="@medicine"){
            return true;
        } else if(moduleName==="@firstAid") {
            prevModule = "@medicine";
        }else if(moduleName==="@sickness") {
            prevModule = "@firstAid";
        }else if(moduleName==="@body") {
            prevModule = "@sickness";
        }else if(moduleName==="@healthyLife") {
            prevModule = "@body";
        }

        Storage.getData(prevModule).then(function (resx) {
            let moduleArray = JSON.parse(resx);
           for (let i=0; 1<moduleArray.length; i++){
               if(moduleArray[i]===0){
                   return false;
               }
               return true;
           }
        });
    }

    async calculateProgress(moduleName){
        Storage.getData(moduleName).then(function (resx) {
            let openedTitleCount=0;
            let moduleArray = JSON.parse(resx);
            for (let i=0; 1<moduleArray.length; i++){
                if(moduleArray[i]===1){
                    openedTitleCount++;
                }
                return (openedTitleCount/moduleArray.length)*100;
            }
        });
    }
}
export default ModuleProgressTracker;












