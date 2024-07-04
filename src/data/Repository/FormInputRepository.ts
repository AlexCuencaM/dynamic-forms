import { FormInputDTO } from "../DTO/FormDTO";
import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { FormInput } from "../Entities/Form";
import { Delete, Post, Put } from "../HttpClient/ClientMethods";
import { IFormInputRepository } from "../Interfaces/IFormInputRepository";

export const FormInputRepository: IFormInputRepository = {
    postAsync: async function (inputForm: FormInput): Promise<MessageInfoDTO> {
        try {
            const sendData: FormInputDTO = {
                formId: inputForm.formId,
                label: inputForm.label,
                formtypeDataId: inputForm.formtypeDataId,
                isActive: inputForm.isActive,
            };
            const res = await Post<MessageInfoDTO>("FormInput", sendData);
            return res;
        }
        catch (e) {
            throw e;
        }
    },
    putAsync: async function (inputForm: FormInput): Promise<MessageInfoDTO> {
        try {
            const sendData: FormInputDTO = {
                formId: inputForm.formId,
                label: inputForm.label,
                formtypeDataId: inputForm.formtypeDataId,
                isActive: inputForm.isActive,
            };
            const res = await Put<MessageInfoDTO>("FormInput", sendData);
            return res;
        }
        catch (e) {
            throw e;
        }
    },
    deleteAsync: async function (inputFormId: number): Promise<MessageInfoDTO> {
        try{
            const res = await Delete<MessageInfoDTO>(`FormInput/`, inputFormId);
            return res;
        }
        catch(e){
            throw e;
        }
    }
}