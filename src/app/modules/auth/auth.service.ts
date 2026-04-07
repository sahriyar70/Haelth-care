import { error } from "node:console"
import { auth } from "../../lib/auth.js"
import { paypal } from "better-auth"
import { UserStatus } from "../../../generated/prisma/enums.js"
import { prisma } from "../../lib/prisma.js"

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
    try {
        const patient = await prisma.$transaction(async(tx)=>{
       const patientTx= await tx.patient.create({
            data : {
                userId : data.user.id,
                name : paylod.name,
                email : paylod.email
                
            }
        })
        return patientTx 
    }) 
    return {
        ...data,
        patient
    } 
    } catch (error) {
        console.log("tenzection error ", error)
        await prisma.user.delete({
            where : {
                id : data.user.id
            }
        })
        throw new Error ("Failed to register patient ")
    }
}

interface ILoginuserpaylode {
    email : string,
    password : string,

}
const Loginuser = async (paylod : ILoginuserpaylode) =>{
    const { email,password}= paylod

    const data = await auth.api.signInEmail({
        body:{
            email,
            password
        }
    })

    if(!data.user){
        throw new Error("Failed to register patient ")
    }


    

    // if(data.user,status=== UserStatus.BLOCKED){
    //     throw new Error ("user is blocked")
    // }
    // if(data.user===data.user,status){
    //     throw  new Error ("user is deleted")
    // }
    return data 

    }

export const Authservices = {
    registerpatient,
    Loginuser
} 

