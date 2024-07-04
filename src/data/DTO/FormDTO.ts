export type FormDTO = {
    id: number,
    optionId: number,
    name: string,
    formInputs: FormInputDTO[],
}

export type FormInputDTO = {
    isActive: boolean,
    formInputId?: number,
    formId: number,
    label: string,
    formtypeDataId?:number,
    formType?: string,
}