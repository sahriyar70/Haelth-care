
import { Specialty } from "../../../generated/prisma/client";
import { SpecialtyCreateInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (paylod : SpecialtyCreateInput): Promise <Specialty> =>{
    const specialty = await prisma.specialty.create({
        data : paylod
    })
    return specialty
}

export const SpecialtyService = {
    createSpecialty 
}