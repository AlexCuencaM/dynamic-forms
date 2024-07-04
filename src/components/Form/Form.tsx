import { Form } from '@/data/Entities/Form';
import { Box, TextField } from '@mui/material';
import { DynamicField } from '../Input/DynamicField';
import { IFormInputRepository } from '@/data/Interfaces/IFormInputRepository';
import { CrudButtons } from './CrudButtons';
interface FormProps{
    form: Form;
    setForm: (value: React.SetStateAction<Form>) => void
    formInputRepository: IFormInputRepository;
}

export const FormComponent = ({ form, setForm, formInputRepository }:FormProps) => {
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
            <div key={`components-${input.label}`}>
              <DynamicField input={input}/>
              <CrudButtons inputForm={input} setForm={setForm} formInputRepository={formInputRepository}/>
            </div>
        ))}
    </Box>
  )
}
