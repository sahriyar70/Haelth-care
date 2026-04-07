import express, { Application, Request, Response } from "express";
import { IndexRouter } from "./app/router/index.js";
import { prisma } from "./app/lib/prisma.js";
import { globalErrorHandler } from "./midileware/grobalerrorhandlar.js";
import { notFound } from "./midileware/notFound.js";




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

app.use(globalErrorHandler);
app.use(notFound);


export default app;