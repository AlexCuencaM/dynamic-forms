export type Form = {
    id: number,
    optionId: number,
    name: string,
    formInputs: FormInput[],
}

export type FormInput = {
    id?:number,
    isActive: boolean,
    formInputId: number,
    label: string,
    formtypeDataId?:number,
    formType: string,
}