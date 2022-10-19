import { Box } from "@chakra-ui/react";
import AdminLoginForm from "../components/AdminLoginForm";


const Login = () => {
    return(
        <>
        <Box display={"flex"} justifyContent={"center"}>
           <AdminLoginForm/>
        </Box>
        </>
    );
}

export default Login;