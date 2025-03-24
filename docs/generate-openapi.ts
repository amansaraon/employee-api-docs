import fs from "fs";
import swaggerSpec from "../src/swagger";


fs.writeFileSync("./openapi.json", JSON.stringify(swaggerSpec, null, 2));
console.log("✅ OpenAPI spec generated as openapi.json");
