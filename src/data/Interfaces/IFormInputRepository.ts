import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { FormInput } from "../Entities/Form";

export interface IFormInputRepository{    
    postAsync(form:FormInput):Promise<MessageInfoDTO>;
    putAsync(form:FormInput):Promise<MessageInfoDTO>;
    deleteAsync(formId:number):Promise<MessageInfoDTO>;
}