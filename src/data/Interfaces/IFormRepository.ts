import { MessageInfoDTO } from "../DTO/MessageInfoDTO";
import { Form } from "../Entities/Form";

export interface IFormRepository{
    getAsync(optionId: number):Promise<Form>;
}