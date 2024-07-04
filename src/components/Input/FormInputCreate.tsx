import { PostFormInputDetail } from '@/data/DTO/MessageInfoDTO';
import { Form, FormInput } from '@/data/Entities/Form'
import { FormTypeData } from '@/data/Entities/FormTypeData';
import { IFormInputRepository } from '@/data/Interfaces/IFormInputRepository';
import { Button, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
interface FormInputProps{
    // input: FormInput;
    form: Form;
    formTypesData: FormTypeData[];
    formInputRepository: IFormInputRepository;
    setForm: (value: React.SetStateAction<Form>) => void
}
const initialState:FormInput ={
    id: 0,
    formId: 0,
    formtypeDataId: 0,
    formType: '',
    isActive: true,
    label: ''
};
export const FormInputCreate = ({form, setForm, formTypesData, formInputRepository}:FormInputProps) => {
  const [formInput, setFormInput] = useState<FormInput>(initialState);
  const [currentFormTypeData, setCurrentFormTypeData] = React.useState<string>('');
  useEffect(() => {
    setFormInput(formy => ({
      ...formy,
      formId: form.id
    }))
  }, [form.id])
  // console.log(formInput);
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setCurrentFormTypeData(event.target.value as string);
      setFormInput(formy => ({
        ...formy,
        [event.target.name]: event.target.value
    }));
  };
  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput(formy => ({
        ...formy,
        [event.target.name]: event.target.checked 
    }));
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput(formy => ({
        ...formy,
        [event.target.name]: event.target.value 
    }));
  };
  function handlePost(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    formInputRepository.postAsync(formInput).then(res => {
      const result = res.detail as PostFormInputDetail;
      formInput.id = Number(result.id);
      formInput.formType = result.formType;
      alert(res.message)
      setForm(formy => ({
        ...formy,
        formInputs: [...formy.formInputs, formInput]
      }))
      setCurrentFormTypeData('');
      setFormInput({...initialState, formId: formInput.formId});
    })
    .catch(err => alert(err))
  }
  return (
    <>
        <h5>Ingresar input</h5>
        <FormGroup sx={{maxWidth: 200}}>
          <FormControlLabel 
            control={<Switch
              name='isActive'
              checked={formInput.isActive}
              onChange={(e) => handleChangeSwitch(e)}
              inputProps={{ 'aria-label': 'controlled' }}
              />} 
            label="Es activo" 
          />
        </FormGroup>
        <TextField
        name='label'
        label="label"
        value={formInput.label}
        onChange={(e) => handleChangeInput(e as React.ChangeEvent<HTMLInputElement>)}
        />
        <FormControl sx={{minWidth:200}}>
          <InputLabel id="demo-simple-select-label">Tipo de dato</InputLabel>
          <Select
            name='formtypeDataId'
            label={"Tipo de dato"}
            onChange={handleChangeSelect}
            value={currentFormTypeData}
          >
            {formTypesData.map(t => (
              <MenuItem key={`type-${t.id}`} value={t.id}>{t.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant='outlined' fullWidth onClick={e => handlePost(e)}>Submit</Button>
    </>
  )
}
