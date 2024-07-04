import { Options } from "../Entities/Options";

export interface IOptionsRepository{
    getOptions(): Promise<Options[]>;
}