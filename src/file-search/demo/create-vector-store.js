import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  // Create a vector store including our two files.
  let vectorStore = await openai.beta.vectorStores.create({
    name: "Financial Statement",
  });
  console.log(vectorStore);
}

main();
