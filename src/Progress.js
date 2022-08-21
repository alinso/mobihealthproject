import Storage from "./Storage";

class Progress {

    medicineCurent;
    medicineLimit;

    constructor() {
        this.medicineCurent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.medicineLimit = [1, 10, 8, 3, 3, 1, 2, 2, 2, 5, 3, 5, 1, 1, 3, 3, 1];


        let self = this;
        Storage.getData("@medicine").then(function (res) {

            console.log("constructor: "+res);
            if (res == null) {
                Storage.save("@medicine", medicineCurent);
            } else {
                self.medicineCurent = JSON.parse(res);
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

        let self = this;
        let res;
        if (moduleName == "@medicine") {
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

        return res;

    }


    clear() {
        this.medicineCurent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Storage.save("medicine", medicineCurent);
    }

}

export default Progress;
