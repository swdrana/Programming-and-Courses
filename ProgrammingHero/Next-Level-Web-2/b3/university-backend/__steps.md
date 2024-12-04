## Installation Command
``` bash
npm init -y          
npm i -D typescript  
tsc --init   
```        
go tsconfig.json and change 
```JSON
"rootDir": "./src/", 
"outDir": "./dist",
```
```bash
mkdir src
touch src/app.ts
npm i express
npm i --save-dev @types/express
npm i cors
npm i --save-dev @types/cors
```

app.ts
```typescript
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
```
now use tsc for compile ts to js:
```bash
tsc
node dist/app.js
```


## After Setup Project
- Routing
....
- Validation