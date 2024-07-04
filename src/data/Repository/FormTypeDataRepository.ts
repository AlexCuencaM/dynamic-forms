import { FormTypeDataDTO } from "../DTO/FormTypeDataDTO";
import { FormTypeData } from "../Entities/FormTypeData";
import { Get } from "../HttpClient/ClientMethods";
import { IFormTypeDataRepository } from "../Interfaces/IFormTypeDataRepository";

export const FormTypeDataRepository: IFormTypeDataRepository = {
    getAsync: async function (): Promise<FormTypeData[]> {
        try{
            const res = await Get<FormTypeDataDTO[]>("FormTypeData");
            const result: FormTypeData[] = res.map(t => ({
                id: t.id,
                name: t.name
            } as FormTypeData))
            return result;
        }
        catch(e){
            throw e;
        }
    }
}