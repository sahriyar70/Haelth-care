import { error } from "node:console"
import { auth } from "../../lib/auth.js"

interface IRegisterPatientPaylode {
    name : string,
    email : string,
    password : string 
}

const registerpatient = async (paylod : IRegisterPatientPaylode) =>{
    const {email,name, password}= paylod

    const data = await auth.api.signUpEmail({
        body : {
            name ,
            email,
            password,
            
        }
    })

    if(!data.user){
        throw new Error ("Faild registerpatient")
    }
    return data 
}

export const Authservices = {
    registerpatient
}