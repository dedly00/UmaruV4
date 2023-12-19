let context = {}
let tid = {};
import moment from "moment-timezone";
export const setup = {
    name: "ai",
    version: "40.0.0",
    permission: "Users",
    creator: "John Lester",
    description: "Question and answering",
    category: "AI",
    usages: "[prompt]",
    isPrefix: true
};
export const domain = {"ai": setup.name};
export const execCommand = async function({api, event, args, key, kernel, Users, timeZone, usage, prefix}) {
  if(args.length === 0) return usage(this, prefix, event);
  let botname = await Users.getName(api.getCurrentUserID());
  let username = await Users.getName(event.senderID);
  if(!context.hasOwnProperty(event.senderID)) {
    context[event.senderID] = [];
  }
  if(event.type == "message_reply" && event.messageReply.senderID === api.getCurrentUserID() && !context[event.senderID].some(a => a.content === event.messageReply.body)) {
    context[event.senderID].push({ role: 'assistant', content: event.messageReply.body});
  }
  context[event.senderID].push({ role: 'user', content: args.join(" ")});
    let ai = await kernel.read(["ai"], { key: key, completions: context[event.senderID], username: username, botname: botname, timezone: timeZone, senderID: event.senderID});
    context[event.senderID].push(ai);
    return api.sendMessage(ai.content, event.threadID, event.messageID)
}
