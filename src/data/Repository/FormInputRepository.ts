import { FormInputDTO } from "../DTO/FormDTO";
import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { FormInput } from "../Entities/Form";
import { Post } from "../HttpClient/ClientMethods";
import { IFormInputRepository } from "../Interfaces/IFormInputRepository";

export const FormInputRepository: IFormInputRepository = {
    postAsync: async function (form: FormInput): Promise<MessageInfoDTO> {
        try{
            const sendData:FormInputDTO = {
                formInputId: form.formInputId,
                label: form.label,
                formtypeDataId: form.formtypeDataId,
                isActive: form.isActive,
            }  
            const res = await Post<MessageInfoDTO>("FormInput", sendData);
            return res;
        }
        catch(e){
            throw e;
        }
    }
}