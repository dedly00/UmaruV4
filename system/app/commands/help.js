import * as words from "../../lib/prediction.js";
import fs from "fs";
export const setup = {
  name: "help",
  version: "40.0.0",
  permission: "Users",
  creator: "John Lester",
  description: "View the details of the commands.",
  category: "help",
  usages: ["","[command name]", "all", "[page number]"],
  cooldown: 5,
  isPrefix: true
}
export const domain = {"help": setup.name}
export const execCommand = async function({api, event, args, umaru, prefix}) {
  let similarity = {accuracy: 0};
  let text = args.join(" ");
  let c = text.replace(/\[|\]/g, "");
  if(c) {
    similarity = words.predict(c.toLowerCase(), umaru.client.allCommandsName);
  };
  let p = text.match(/\b\d+\b/g);
   if(args.length === 0) {
      c = 1;
 } else if(p !== null && !(similarity.accuracy >= 0.7) && isNaN(c) && c !== "all") {
     c = parseInt(p[0]);
  } else if(!(similarity.accuracy >= 0.7) && isNaN(c) && c !== "all") {
    c = 1;
  } 
  if(similarity.accuracy >= 0.7) {
    let permission;
    if (umaru.client.permission.get(similarity.data) === 1) permission = "Group Administrator";
    else if (umaru.client.permission.get(similarity.data) === 2) permission = "System Administrator"; 
    else permission = "Anyone";
    let use = "";
    let usa = umaru.usages.get(similarity.data);
    if(Array.isArray(usa)) {
    for(const data of usa) {
      use += `     •  ${prefix}${similarity.data} ${data}\n`
    }
      if(use === "")   {
        use += `     •  ${prefix}${similarity.data}\n`;
      }
  } else {
    use = `     •  ${prefix}${similarity.data} `+ usa;
  }
  
   let screenshot = [];
   let b = umaru.commandMainScreenshot.get(similarity.data);
   if(Array.isArray(b)) for(const item of b) {
    if(fs.existsSync(umaru.mainPath + item)) screenshot.push(fs.createReadStream(umaru.mainPath + item));
   };
   let a = `『 ${umaru.name.get(similarity.data)} 』\n${umaru.description.get(similarity.data)}\n\n     •  Version: ${umaru.version.get(similarity.data)}\n     •  Category: ${umaru.category.get(similarity.data)[0].toUpperCase()}${umaru.category.get(similarity.data).replace(umaru.category.get(similarity.data)[0], "")}\n     •  Cooldown: ${umaru.client.cooldown.get(similarity.data)}\n     •  Permission: ${permission}\n     •  Creator: ${umaru.client.creator.get(similarity.data)}\n\nUsage:\n${use}`
   if(screenshot.length === 0)  {
    return api.sendMessage(a, event.threadID, event.messageID)
   } else {
    return api.sendMessage({body: a+"\nScreenshot:\n", attachment: screenshot}, event.threadID, (err) => {
      if(err) return api.sendMessage(a, event.threadID, event.messageID);
    }, event.messageID)
   }
  } else if ((1000 >= parseInt(c))) {
    let items = "✨ Commands List\n\n"
    let page = parseInt(c) || 1;
    let num = 10
    let i = 1 + page * num - 10;
    let cut = page * num - num;
    const commands = umaru.client.allCommandsName.slice(cut, cut + num)
    if(commands.length === 0) return api.sendMessage(`Sorry there is no page ${page}.`, event.threadID, event.messageID)
    for (const item of commands) {
      let usage = umaru.usages.get(item);
      if(Array.isArray(usage)) {
          usage = usage[0];
      } else if(usage === "") {
        usage = "";
      }
      items += `『 ${i++} 』 ${prefix}${umaru.name.get(item)} ${usage}\n`;
    }
    let rand = [`» Use ${prefix}${this.setup.name} [command name] to display the details of the command`, `» Use ${prefix}${this.setup.name} [page number] to display the information on the additional pages`, `» Use ${prefix}${this.setup.name} all to display all the details of the command`];
    return api.sendMessage(`${items}\n» Page: ${page}/${Math.ceil(umaru.client.allCommandsName.length / num)}\n${rand[Math.floor(Math.random() * rand.length)]}.`, event.threadID, event.messageID)
    } else if(c == "all") {
      let msg = "";
      let mes = {}
      for (const item of umaru.client.allCommandsName) {
        if(!mes[umaru.category.get(item).toLowerCase()]) {
          mes[umaru.category.get(item).toLowerCase()] = [`${umaru.name.get(item)}`]
        } else {
          mes[umaru.category.get(item).toLowerCase()].push(`${umaru.name.get(item)}`)
        }
      }
     for (const item in mes) {
       msg += `『 ${`${item[0]}${item.replace(item[0], "")}`.toUpperCase()} 』\n${mes[item].join(", ")}\n\n`
     }
      return api.sendMessage(msg, event.threadID, event.messageID)
    }
}