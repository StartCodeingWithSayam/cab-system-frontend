  namespace Api{
    const apiURL='http://localhost:8080'


    export async function signIn(email: string, password: string){
        let data = {
            email: email,
            password: password
        }

        let path = `sign-in`

        let res = await fetchData(path, data)
        if(res.status == 200){
            let json = await res.json()
            return {isSuccess: true, accountId :json.accountId , accountType: json.accountType}
        }else{
            let message = await res.json()
            return {isSuccess: false, error: message.error}
        }
        
    }

    export async function signUp(name: string, number: number, email: string, password: string, accountType: string){

        
        let data = {
            name: name,
            number: number,
            email: email,
            password: password,
            accountType: accountType
        }

        let path = `sign-up`

        let res = await fetchData(path, data)
        if(res.status == 201){
            let json = await res.json()
            return {isSuccess: true, accountId :json.accountId , accountType: json.accountType}
        }else{
            let message = await res.json()
            return {isSuccess: false, error: message.error}
        }
    }


    export async function getAccountDetail(accountId: number, accountType: string){
        let data = {
            accountId: accountId,
            accountType: accountType
        }

        let path = `account-detail`

        let res = await fetchData(path, data)
        if(res.status == 201){
            let json = await res.json()
            return {isSuccess: true, data: json}
        }else{
            let message = await res.json()
            return {isSuccess: false, error: message.error}
        }
    }

    
    function fetchData(path: string, data = {}){
        let requestOptions:RequestInit = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify(data)
        }
        return fetch(`${apiURL}/${path}`, requestOptions)
    }

}
export default Api
