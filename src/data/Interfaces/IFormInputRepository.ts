import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { FormInput } from "../Entities/Form";

export interface IFormInputRepository{    
    postAsync(form:FormInput):Promise<MessageInfoDTO>;
}