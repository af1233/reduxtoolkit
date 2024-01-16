import Chance from "chance";

const chance=Chance();

export const userFakeData=()=>{
   return  chance.name({ middle: true });
}