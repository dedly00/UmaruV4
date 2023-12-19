import fs from 'fs';
export const setup = {
  name: "prefix",
  version: "40.0.0",
  permission: "Users",
  creator: "John Lester",
  description: "prefix",
  category: "No Prefix",
  usages: [""],
  mainScreenshot: ["/media/prefix/screenshot/main.jpg"],
  screenshot: ["/media/prefix/screenshot/main.jpg"],
  cooldown: 10
};
export const domain = {"prefix": setup.name};
export const execEvent = async function({api, event, cooldown, umaru, prefix, translate, systemadmin}) {
    if(!systemadmin.includes(event.senderID) && cooldown.isCooldown(this.setup.name+event.senderID, this.setup.cooldown)) return;
    let input = ["prefix"];
    if(event.body && input.some(a => event.body.toLowerCase().startsWith(a))) {
        let msg = (await translate(`🌐 System prefix: {{a}}\n💠 Group chat prefix: {{b}}`, event, null, true)).replace("{{a}}", umaru.config.prefix).replace("{{b}}", prefix);
        cooldown.create(this.setup.name+event.senderID);
        return api.sendMessage(msg, event.threadID, event.messageID)
    }
}
export const execCommand = async function({api, event, umaru, prefix, translate}) {
  if(prefix == "") return;
  let msg = (await translate(`🌐 System prefix: {{a}}\n💠 Group chat prefix: {{b}}`, event, null, true)).replace("{{a}}", umaru.config.prefix).replace("{{b}}", prefix);
  return api.sendMessage(msg, event.threadID, event.messageID)
}