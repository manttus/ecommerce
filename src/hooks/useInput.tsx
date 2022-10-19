import {Reducer, useReducer} from "react";

const initialState = {
    value: "",
    isTouched: false
}

interface InitialStateReducer{
    value: string,
    isTouched: boolean
}

interface IssueAction{
    type: string,
    value: string
}


const inputReducer: Reducer<InitialStateReducer, IssueAction>  = (state, action) => {

    if(action.type === "INPUT"){
        return {value: action.value , isTouched: state.isTouched};
    }

    if(action.type === "BLUR"){
        return {value: state.value , isTouched: true};
    }

    return {value: state.value, isTouched: state.isTouched};

}

const useInput = (validateInput: (value: string)=>{}) => {

    const [inputState, dispatchInputState] = useReducer(inputReducer, initialState);
    const hasError = !validateInput(inputState.value) && inputState.isTouched;

    const inputChangeHandler = (value: string) => {
        console.log()
        dispatchInputState({type: "INPUT", value: value});
    }

    const blurChangeHandler = () => {
        dispatchInputState({type: "BLUR", value: ""});
    }
    
    return {
        hasError,
        inputChangeHandler,
        blurChangeHandler,
        inputValue: inputState.value
    }

};

export default useInput;