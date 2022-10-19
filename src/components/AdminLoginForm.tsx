import { Box, Button } from '@chakra-ui/react';
import useInput from '../hooks/useInput';
import InputField from './InputField';
import { loginUser } from '../store/authActions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';


const AdminLoginForm = () => {
    const dispatch = useAppDispatch();   
    const navigate = useNavigate(); 

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
    } = useInput((value: string) => {return value.length > 6});

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({email: emailValue, password: passwordValue}));
       
    }
   
        return(
            <Box borderWidth='1px' borderRadius={15} padding={10} marginTop={"140px"}>
                <form onSubmit={formSubmitHandler}>
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
                <Button colorScheme='blue' size='md' w={"100%"} type="submit"> Log In </Button>
                </form>
            </Box> 
    );
}

export default AdminLoginForm;