import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CustomTabPanel } from './CustomTabPanel';
import { IOptionsRepository } from '@/data/Interfaces/IOptionsRepository';
import { useEffect, useState } from 'react';
import { Options } from '@/data/Entities/Options';
import { IFormRepository } from '@/data/Interfaces/IFormRepository';
import { FormComponent } from '../Form/Form';
import { Form } from '@/data/Entities/Form';
import { IFormTypeDataRepository } from '@/data/Interfaces/IFormTypeDataRepository';
import { FormInputCreate } from '../Input/FormInputCreate';
import { FormTypeData } from '@/data/Entities/FormTypeData';
import { IFormInputRepository } from '@/data/Interfaces/IFormInputRepository';
interface BasicTabsProps{
    optionRepository: IOptionsRepository;
    formRepository: IFormRepository;
    formTypeDataRepository: IFormTypeDataRepository;
    formInputRepository: IFormInputRepository;
}
const initialForm = {
  id:0,
  optionId:0,
  name: '',
  formInputs: []
} as Form
export default function BasicTabs({optionRepository, formRepository, formTypeDataRepository, formInputRepository}: BasicTabsProps) {
  const [value, setValue] = React.useState(0);
  const [options, setOptions] = useState<Options[]>([]);
  const [form, setForm] = useState<Form>(initialForm);
  const [formTypeData, setFormTypeData] = useState<FormTypeData[]>([]);
  useEffect(() => {
    formTypeDataRepository.getAsync().then(results => {
      setFormTypeData(results);
    });
    optionRepository.getOptions()
    .then((results => {
        setValue(results[0].optionId);
        setOptions(results);
        return formRepository.getAsync(results[0].optionId);
    }))
    .then(form => {
      console.log(form)
      setForm(form);
    });
  }, [])
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    formRepository.getAsync(newValue).then(form => {
      setValue(newValue);
      setForm(form);
    })
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {options.map(opt => (
            <Tab key={`${opt.name}-${opt.optionId}`} label={opt.name} value={opt.optionId} />
          ))}
        </Tabs>
      </Box>
        {options.map((opt) => (
            <CustomTabPanel key={`comp-${opt.name}-${opt.optionId}`} value={value} index={opt.optionId}>
                <FormComponent 
                  form={form}
                  setForm={setForm}
                  formInputRepository={formInputRepository}
                />

                <FormInputCreate 
                form={form} 
                setForm={setForm}
                formTypesData={formTypeData} 
                formInputRepository={formInputRepository}/>
            </CustomTabPanel>
        ))}
    </Box>
  );
}