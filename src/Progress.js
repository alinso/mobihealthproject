import Storage from "./Storage";

class Progress {

    medicineCurent;
    medicineLimit;

    constructor() {
        this.medicineCurent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.medicineLimit = [0, 9, 7, 2, 2, 0, 1, 1, 1, 4, 2, 4, 0, 0, 2, 2, 0];


        let self = this;
        Storage.getData("@medicine").then(function (res) {

            console.log("asdasdas");
            if (res == null) {
                Storage.save("@medicine", medicineCurent);
            } else {
                self.medicineCurent = JSON.parse(res);
            }
        });
    }


    //titles are submodules such as medication sources
    proceed(moduleName, moduleArray, titleIndex, val) {
        console.log("tit " + titleIndex + " " + moduleName);
        console.log(moduleArray);
        if (val > moduleArray[titleIndex]) {
            moduleArray[titleIndex] = val;
            let copyStr = JSON.stringify(moduleArray);
            Storage.save(moduleName, copyStr);
        }
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
             res = await Storage.getData("@medicine").then(function (res) {
                self.medicineCurent = JSON.parse(res);
                console.log(self.medicineCurent);

                if (self.medicineCurent[titleIndex - 1] == self.medicineLimit[titleIndex - 1]) {
                    console.log("true");
                    return true;
                } else {
                    console.log("false");
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
