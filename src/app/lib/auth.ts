import { betterAuth, boolean, string } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"; 
import { prisma } from "./prisma.js";
import { Role, UserStatus } from "../../generated/prisma/enums.js";



export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    emailAndPassword: {
        enabled: true, 
    },

    user :{
        additionalFields :{
            role :{
                type :"string",
                required : true,
                defaultValue : Role.PATIENT

            }
        }
    },

    status :{
        type : "string",
        requred : true,
         defaultValue : UserStatus.ACTIVE
    },

   needpasswordechange :{
    type : "boolean",
    required : true,
    defultValue : false
   },
   isdeleted :{
    type : "boolean",
    required : true,
    defultValue : false
   },
   deletedAt :{
    type :" datetime",
    required : true,
    defultValue : null
   }

});