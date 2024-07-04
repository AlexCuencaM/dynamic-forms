import { FormDTO } from "../DTO/FormDTO";
import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { Form } from "../Entities/Form";
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
                    
                    isActive: inputDTO.isActive,
                    formInputId: inputDTO.formInputId,
                    label: inputDTO.label,
                    formtypeDataId: inputDTO.formtypeDataId,
                    formType: inputDTO.formType
                }))
            } as Form;
        }
        catch(e){
            throw e;
        }
    },
    // postAsync: function (form: Form): Promise<MessageInfoDTO> {
    //     throw new Error("Function not implemented.");
    // },
    // putAsync: function (form: Form): Promise<MessageInfoDTO> {
    //     throw new Error("Function not implemented.");
    // },
    // deleteAsync: function (formId: number): Promise<MessageInfoDTO> {
    //     throw new Error("Function not implemented.");
    // }
}