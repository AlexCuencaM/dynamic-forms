import { FormDTO } from "../DTO/FormDTO";
import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { Form, FormInput } from "../Entities/Form";
import { Get } from "../HttpClient/ClientMethods";
import { IFormRepository } from "../Interfaces/IFormRepository";

export const FormRepository: IFormRepository = {
    getAsync: async function (optionId: number): Promise<Form> {
        try{
            const res = await Get<FormDTO>(`Form/${optionId}`);
            return {
                id: res.id,
                optionId: res.optionId,
                name: res.name,
                formInputs: res.formInputs.map(inputDTO => ({
                    formId: res.id,
                    id: inputDTO.formInputId,
                    isActive: inputDTO.isActive,
                    label: inputDTO.label,
                    formtypeDataId: inputDTO.formtypeDataId,
                    formType: inputDTO.formType
                } as FormInput))
            } as Form;
        }
        catch(e){
            throw e;
        }
    },
}