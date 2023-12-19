export const setup = {
  name: "balance",
  version: "40.0.0",
  permission: "Users",
  creator: "John Lester",
  description: "View current balance",
  category: "Economy",
  usages: ["","[uid]", "[mention]"],
  cooldown: 10,
  isPrefix: true
};
export const domain = {"balance": setup.name}
export const execCommand = async function({api, event, umaru, args, translate, Users}) {
  let mentions = Object.keys(event.mentions);
  (mentions.length === 0 && /^[0-9]+$/.test(args[0])) ? mentions[0] = args[0]: (event.type == "message_reply") ? mentions[0] = event.messageReply.senderID : (mentions.length === 0) ? mentions[0] = event.senderID: mentions[0] = mentions[0];
  let money = (umaru.data.users[event.senderID] && umaru.data.users[event.senderID].money) ? umaru.data.users[event.senderID].money: 0;
  if(mentions[0] === event.senderID) {
    return api.sendMessage((await translate("💵 Your current balance: ${{m}}", event, null, true)).replace("{{m}}", money), event.threadID, event.messageID)
  } else {
    let name = await Users.getName(mentions[0]);
    return api.sendMessage((await translate("💵 {{n}}'s current balance: ${{m}}", event, null, true)).replace("{{m}}", money).replace("{{n}}", name), event.threadID, event.messageID);
  }
}