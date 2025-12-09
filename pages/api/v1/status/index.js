import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 11 + 11;");
  console.log(result.rows);
  response.status(200).json({
    chave: "valor",
  });
}
export default status;
