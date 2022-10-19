import { FormControl, FormLabel, Input} from '@chakra-ui/react';

interface PropsData{

    title: string
    hasError: boolean, 
    inputChangeHandler: Function, 
    blurChangeHandler: Function ,
    inputValue: string,
    helperText: string,
    inputType: string,
    formErrorMessage: string,
    
}

const InputField: React.FC<PropsData> = (props) => {

    const handleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.inputChangeHandler(e.target.value)
    };
    const blurInputHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        props.blurChangeHandler(e.target.value)
    };

    return (
      <FormControl isInvalid={props.hasError} marginBottom={"1.5em"}>
        <FormLabel> {props.title}</FormLabel>
        <Input type={props.inputType} value={props.inputValue} onChange={handleInputHandler} onBlur={blurInputHandler} />
      </FormControl>
    )
  }

  export default InputField;