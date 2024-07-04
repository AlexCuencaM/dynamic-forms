import { Form, FormInput } from "@/data/Entities/Form";
import { IFormInputRepository } from "@/data/Interfaces/IFormInputRepository";
import { Button, ButtonGroup } from "@mui/material";

interface CrudButtonsProps{
    inputForm: FormInput;
    formInputRepository: IFormInputRepository;
    setForm: (value: React.SetStateAction<Form>) => void
  }
  export const CrudButtons = ({ inputForm, setForm, formInputRepository }:CrudButtonsProps) => {
    const handleDelete = () => {
      formInputRepository.deleteAsync(inputForm.id)
      .then(result => {
        alert(result.message);
        setForm(formy => ({
          ...formy,
          formInputs: formy.formInputs.filter(f => f.id !== inputForm.id)
        }))
      })
      .catch(err => alert(err))
    }
    return (
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={handleDelete}>Delete</Button>
      </ButtonGroup>
    )
  }