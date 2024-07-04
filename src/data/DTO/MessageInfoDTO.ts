export type MessageInfoDTO = {
    message:string,
    detail?:object,
    success: boolean,
}

export type PostFormInputDetail = {
    id: number,
    formType: string;
}