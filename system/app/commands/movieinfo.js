import fs from 'fs';
import axios from 'axios';
export const setup = {
  name: "movieinfo",
  version: "40.0.0",
  permission: "Users",
  creator: "John Lester",
  description: "Get a movie info",
  category: "media",
  usages: ["[title]"],
  mainScreenshot: ["/media/movieinfo/screenshot/main.jpg"],
  screenshot: ["/media/movieinfo/screenshot/main.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"movieinfo": setup.name}
export const execCommand = async function({api, event, key, kernel, umaru, args, keyGenerator, context,   prefix, usage, translate}) {
  if(args.length === 0) return usage(this, prefix, event);
  let text = args.join(" ");
  await umaru.createJournal(event);
  let data = await kernel.read(["movieinfo"], {key: key, search: text});
  if(typeof data === "string") return api.sendMessage("⚠️ "+data, event.threadID, event.messageID);
  let msg = (await translate(`🌸 Title: {{a}}\n🌸 Language: {{b}}\n🌸 Overview: {{c}}\n🌸 Release date: {{d}}\n🌸 Popularity: {{e}}\n🌸 Vote average: {{f}}\n🌸 Vote count: {{g}}`, event, null, true)).replace("{{a}}", data.original_title).replace("{{b}}", data.original_language).replace("{{c}}", data.overview).replace("{{d}}", data.release_date).replace("{{e}}", data.popularity).replace("{{f}}", data.vote_average).replace("{{g}}", data.vote_count);
  try {
  let img = (await axios.get(data.imageBase+data.poster_path, {responseType: "stream"})).data;
  let path = umaru.sdcard+"/Pictures/"+keyGenerator()+".jpg";
  await kernel.writeStream(path, img);
  return api.sendMessage({body: context+msg, attachment: fs.createReadStream(path)},event.threadID,async (err) => {
    if(err) api.sendMessage(context+msg, event.threadID, event.messageID);
    await umaru.deleteJournal(event);
    await fs.promises.unlink(path);
  }, event.messageID)
  } catch {
    api.sendMessage(context+msg, event.threadID, async() => {
      await umaru.deleteJournal(event);
    },event.messageID);
  }
}