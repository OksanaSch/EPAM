import { promises as fs } from 'fs';


export default async function getArticles() {
 const path = process.cwd() + "/src/app/articles.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}
