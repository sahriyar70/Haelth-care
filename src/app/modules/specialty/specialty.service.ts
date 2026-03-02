
import { Specialty } from "../../../generated/prisma/client";
import { SpecialtyCreateInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (paylod : SpecialtyCreateInput): Promise <Specialty> =>{
    const specialty = await prisma.specialty.create({
        data : paylod
    })
    return specialty
}

const getAllSpecialty = async () : Promise<Specialty[]> =>{
    const specialty = await prisma.specialty.findMany();
    return specialty 
}

const deleteSpecialty = async (id: string) : Promise<Specialty> =>{
    const specialty = await prisma.specialty.delete({
        where :{id}
    })
    return specialty 
}

const updateSpecialty = async ( id : string , paylod : Partial<Specialty>): Promise<Specialty> =>{
    const isExist = await prisma.specialty.findUnique({
        where : {id}
    })

    if (!isExist){
        throw new Error ( " specialty not found")
    }

    const result = await prisma.specialty.update({
        where :{id},
        data : paylod
    })
    return result
}

export const SpecialtyService = {
    createSpecialty ,
    getAllSpecialty ,
    deleteSpecialty,
    updateSpecialty
}