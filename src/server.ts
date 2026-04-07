import app from "./app.js";
import { envVariabls } from "./config/env.js";

const port = 5000;

const boostsrep = ()=>{
    try {
        app.listen(envVariabls.PORT, () => {
  console.log(`Server is running on http://localhost:${envVariabls.PORT }`);
});
    } catch (error) {
        console.log(error)
    }
}

boostsrep()