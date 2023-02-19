import express, { Router } from 'express'
const app = express()
const PORT = 8080


import userRoute from ('./routes/User.js')

app.listen(PORT, () => {
  console.log("server running");
})



export default Router = new.Mo