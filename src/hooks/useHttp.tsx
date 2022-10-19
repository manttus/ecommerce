const useHttp = (requestConfig: any, dispatchFunction: Function) => {

    const sendRequest = async () => {

        try{
            const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method ? requestConfig.method: 'GET',
                headers: requestConfig.headers ? requestConfig.headers: {},
                body: requestConfig.body? JSON.stringify(requestConfig.body): null
            });

            if(!response.ok){
                throw new Error();
            }

            const data = await response.json();
            dispatchFunction(data);
        }
        catch(err: string | unknown){
            console.log(err)
        }
        
    }

    return {
        sendRequest
    }

}

export default useHttp;