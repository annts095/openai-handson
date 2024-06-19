import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  // コマンド実行時に渡されたテキストを取得
  const text = process.argv[2];

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: text }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
