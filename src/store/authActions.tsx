import {authAction} from "./auth";

export const loginUser = (userData : {email: string, password: string}) => {
    return async (dispatch: any) => {
      const sendRequest = async () => {
         const response = await fetch('http://localhost:4000/auth/admin', {
                method: 'POST',
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(userData),
              });
              if(!response.ok){
                throw new Error('Login Failed');
              }
            const responseData = response.json();
            return responseData;
          }
          try{
             const userData = await sendRequest();
             dispatch(authAction.setCredentials(userData));
          }
          catch(error){
            
          } 
    }
}


