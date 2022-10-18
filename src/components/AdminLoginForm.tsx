import { Box, Button } from '@chakra-ui/react';
import useInput from '../hooks/user-input';
import InputField from './InputField';

const AdminLoginForm = () => {
    const {
      hasError: inputHasError, 
      inputChangeHandler: emailInputHandler, 
      blurChangeHandler: emailBlurHandler, 
      inputValue: emailValue
    } = useInput((value) => {return value.includes('@')});

    const {
        hasError: passwordHasError, 
        inputChangeHandler: passwordInputHandler, 
        blurChangeHandler: passwordBlurHandler, 
        inputValue: passwordValue
    } = useInput((value) => {return value.length > 6});
    
    return(
        <form>
            <Box borderWidth='1px' p={5} w={"25%"} marginX={"auto"} marginY={"10%"}>
                <InputField 
                    hasError= {inputHasError} 
                    inputChangeHandler = {emailInputHandler} 
                    blurChangeHandler = {emailBlurHandler} 
                    inputValue = {emailValue}
                    helperText = {""}
                    formErrorMessage = {"Email is Invalid."}
                    inputType = {"text"}
                    title={"Email"}
                />
                <InputField  
                    hasError= {passwordHasError} 
                    inputChangeHandler = {passwordInputHandler} 
                    blurChangeHandler = {passwordBlurHandler} 
                    inputValue = {passwordValue}
                    helperText = {""}
                    formErrorMessage = {"Password is Invalid."}
                    inputType = {"password"}
                    title={"Password"}
                />
                <Button colorScheme='green' size='md' w={"100%"}> Log In </Button>
            </Box> 

            
        </form>
    );
}

export default AdminLoginForm;