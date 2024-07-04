import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { Form } from "../Entities/Form";

export interface IFormRepository{
    getAsync(optionId: number):Promise<Form[]>;
    postAsync(form:Form):Promise<MessageInfoDTO>;
    putAsync(form:Form):Promise<MessageInfoDTO>;
    deleteAsync(formId:number):Promise<MessageInfoDTO>;
}