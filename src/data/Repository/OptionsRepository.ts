import { IOptionsRepository } from "../Interfaces/IOptionsRepository";
import { Options } from '../Entities/Options';
import { Get } from "../HttpClient/ClientMethods";
import { OptionsDTO } from "../DTO/OptionsDTO";

export const OptionRepository: IOptionsRepository = {
    async getOptions(): Promise<Options[]>{
        try{
            const res = await Get<OptionsDTO[]>(`options`);
            return res.map(opt => ({
                optionId: opt.optionId,
                name: opt.name
            } as Options))
        }
        catch(e){
            throw e;
        }
    }
    
}