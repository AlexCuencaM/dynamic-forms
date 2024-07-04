import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { Form } from "../Entities/Form";
import { IFormRepository } from "../Interfaces/IFormRepository";

export const FormRepository: IFormRepository = {
    getAsync: function (optionId: number): Promise<Form[]> {
        throw new Error("Function not implemented.");
    },
    postAsync: function (form: Form): Promise<MessageInfoDTO> {
        throw new Error("Function not implemented.");
    },
    putAsync: function (form: Form): Promise<MessageInfoDTO> {
        throw new Error("Function not implemented.");
    },
    deleteAsync: function (formId: number): Promise<MessageInfoDTO> {
        throw new Error("Function not implemented.");
    }
}