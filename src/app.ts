import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { time } from "node:console";
import { title } from "node:process";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    const specialty = await prisma.specialty.create({
        data:{
            title: "Aardiology"
        }
    })
  res.status(200).json({
    success : true,
    message : " api is working",
    data : specialty
  })
});

export default app;