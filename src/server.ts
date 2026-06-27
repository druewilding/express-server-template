import { app } from "./web/app.js";
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

export { server };
