import { FormTypeData } from "../Entities/FormTypeData";

export interface IFormTypeDataRepository{
    getAsync():Promise<FormTypeData[]>
}