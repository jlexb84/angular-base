const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , trunks = "Not found"] = dbz;
console.log(`Personaje 3: ${dbz[3] || "No se ha encontrado"}`);
console.log(`Personaje 3: ${trunks}`);
export {};
