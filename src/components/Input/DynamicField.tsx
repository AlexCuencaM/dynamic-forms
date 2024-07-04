import { FormInput } from "@/data/Entities/Form";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

interface DynamicFieldProps{
    input: FormInput;
  } 
  export const DynamicField = ({input}: DynamicFieldProps) => {
    const typeField = (formType: string ) => {
      if(formType === "Text"){
          return "text";
      }
      if(formType === "Number"){
          return "number"
      }
      return "text";
  }
    return(
      input.formType === "Date" ? 
              <DatePicker label={input.label}/>
              :
              <TextField 
              label={input.label} type={typeField(input.formType)}/>
  
    )
  }