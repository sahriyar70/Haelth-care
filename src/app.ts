import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { time } from "node:console";
import { title } from "node:process";
import { SpecialtyRouter } from "./app/modules/specialty/specialty.route";
import { IndexRouter } from "./app/router";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", IndexRouter)

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