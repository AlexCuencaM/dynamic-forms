import { Form } from '@/data/Entities/Form';
import { Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
interface FormProps{
    form: Form;
}
export const FormComponent = ({form}:FormProps) => {
    const typeField = (formType: string ) => {
        if(formType === "Text"){
            return "text";
        }
        if(formType === "Number"){
            return "number"
        }
        return "text";
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Ver Formulario</h1>
        <TextField label={form.name} value={form.name}/>
        <h4>Ver Preguntas</h4>
        {form.formInputs.map(input => (
            input.formType === "Date" ? 
            <DatePicker key={`input-${input.label}`} label={input.label}/>
            :
            <TextField key={`input-${input.label}`} label={input.label} type={typeField(input.formType)}/>
        ))}
    </Box>
  )
}
