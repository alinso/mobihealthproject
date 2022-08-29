import Storage from "./Storage";

class Progress {

    medicineCurent;
    medicineLimit;

    constructor() {
        this.medicineCurent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.medicineLimit = [1, 9, 8, 3, 3, 1, 2, 2, 2, 5, 3, 5, 1, 1, 3, 3, 1];

        this.firstaidCurrent=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0];
        this.firstaidLimit = [1, 5, 4, 4, 4, 1, 10, 1, 1, 11, 3, 3, 3, 2, 4, 9,8,7,4,3,1];

        this.healthyLifeCurrent=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0];
        this.healthyLifeLimit = [1, 5, 4, 4, 4, 1, 10, 1, 1, 11, 3, 3, 3, 2, 4, 9,8,7,4,3,1];


        let self = this;
        Storage.getData("@medicine").then(function (res) {

            console.log("constructor: "+res);
            if (res == null) {
                let medicineCurentStr = JSON.stringify(self.medicineCurent);
                Storage.save("@medicine", medicineCurentStr);
            } else {
                self.medicineCurent = JSON.parse(res);
            }
        });

        Storage.getData("@firstaid").then(function (res) {
            if (res == null) {
                let firstaidCurrentStr = JSON.stringify(self.firstaidCurrent);
                Storage.save("@firstaid", firstaidCurrentStr);
            } else {
                self.firstaidCurrent = JSON.parse(res);
            }
        });

        Storage.getData("@healthyLife").then(function (res) {
            if (res == null) {
                let firstaidCurrentStr = JSON.stringify(self.firstaidCurrent);
                Storage.save("@healthyLife", firstaidCurrentStr);
            } else {
                self.firstaidCurrent = JSON.parse(res);
            }
        });
    }


    //titles are submodules such as medication sources
    proceed(moduleName, titleIndex, val) {


        console.log("proceeding val "+val);
        console.log("proceeding module name "+moduleName);
        console.log("proceeding title index "+titleIndex);
        let self=this;
        Storage.getData(moduleName).then(function (resx){

          let moduleArray = JSON.parse(resx);
            if (val > moduleArray[titleIndex]) {
                moduleArray[titleIndex] = val;

                if(moduleName==="@medicine"){
                    self.medicineCurent=moduleArray;
                } else if(moduleName==="@firstaid"){
                    self.firstaidCurrent=moduleArray;
                }else if(moduleName==="@healthyLife"){
                    self.healthyLifeCurrent=moduleArray;
                }



                let copyStr = JSON.stringify(moduleArray);
                console.log("proceeding saved : "+moduleArray);
                Storage.save(moduleName, copyStr);
            }
        });

    }


    getTotal(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = arr[i] + sum;
        }
        return sum;
    }

    async isAllowed(moduleName, titleIndex) {

        return true;

        let self = this;
        let res;
        if (moduleName === "@medicine") {
             res = await Storage.getData("@medicine").then(function (resx) {
                 console.log("state in db: "+resx );
                 console.log("title index: "+titleIndex)
                 self.medicineCurent = JSON.parse(resx);
                 console.log("previous title state:"+self.medicineCurent[titleIndex-1]+ ", previous title limit : "+self.medicineLimit[titleIndex-1]);


                if (self.medicineCurent[titleIndex - 1] === self.medicineLimit[titleIndex - 1]) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        if (moduleName === "@firstaid") {
            res = await Storage.getData("@firstaid").then(function (resx) {
                console.log("state in db: "+resx );
                console.log("title index: "+titleIndex)
                self.medicineCurent = JSON.parse(resx);
                console.log("previous title state:"+self.firstaidCurrent[titleIndex-1]+ ", previous title limit : "+self.firstaidLimit[titleIndex-1]);


                if (self.firstaidCurrent[titleIndex - 1] === self.firstaidLimit[titleIndex - 1]) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        if (moduleName === "@healthyLife") {
            res = await Storage.getData("@healthyLife").then(function (resx) {
                console.log("state in db: "+resx );
                console.log("title index: "+titleIndex)
                self.medicineCurent = JSON.parse(resx);
                console.log("previous title state:"+self.healthyLifeCurrent[titleIndex-1]+ ", previous title limit : "+self.healthyLifeLimit[titleIndex-1]);

                if (self.healthyLifeCurrent[titleIndex - 1] === self.healthyLifeLimit[titleIndex - 1]) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        return res;

    }

}

export default Progress;
