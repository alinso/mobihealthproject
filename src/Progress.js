import Storage from "./Storage";

class Progress {

    medicineCurent;
    medicineLimit;

      constructor()
    {
        this.medicineCurent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.medicineLimit = [1, 10, 8, 3, 3, 1, 2, 2, 2, 5, 3, 5, 1, 1, 3, 3, 1];



        Storage.getData("@medicine").then(function (res){
            if(res==null){
                Storage.save("@medicine",medicineCurent);
            }
        });
    }


    //titles are submodules such as medication sources
     proceed(moduleName,moduleArray, titleIndex, val)
    {
        if (val > moduleArray[titleIndex]) {
            moduleArray[titleIndex] = val;
            let copy={...moduleArray};
            let copyStr = JSON.stringify(copy);
            Storage.save(moduleName,copyStr);
        }
    }


     getTotal(arr){
         let sum=0;
         for(let i=0;i<arr.length;i++){
             sum=arr[i]+sum;
        }
         return sum;
    }


     clear()
    {
        this.medicineCurent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Storage.save("medicine",medicineCurent);
    }

}
export default Progress;
