export const setup = {
  name: "setexp",
  version: "40.0.0",
  permission: "Admin",
  creator: "John Lester",
  description: "Set the exp",
  category: "system",
  usages: ["[number]","[number] [uid] ", "[number] [mention]"],
  cooldown: 10,
  isPrefix: true
};
export const domain = {"setexp": setup.name}
export const execCommand = async function({api, event, umaru, args, translate, Users, usage, prefix}) {
  let mentions = Object.keys(event.mentions);
  (mentions.length === 0 && /^[0-9]+$/.test(args[1])) ? mentions[0] = args[1]: (event.type == "message_reply") ? mentions[0] = event.messageReply.senderID : (mentions.length === 0) ? mentions[0] = event.senderID: mentions[0] = mentions[0];
  let num = parseFloat(args[0])
  let val = parseInt(num);
  if(isNaN(val)) return usage(this, prefix, event);
  let value = (val <= 1) ? 1.5 : val;
  if(mentions[0] === event.senderID) {
    umaru.data.users[event.senderID].exp = value;
    await umaru.save();
    return api.sendMessage((await translate("✅ Successfully change your exp to {{m}}.", event, null, true)).replace("{{m}}", num), event.threadID, event.messageID)
  } else {
    let name = await Users.getName(mentions[0]);
    if(!umaru.data.users[mentions[0]]) umaru.data.users[mentions[0]] = {};
    umaru.data.users[mentions[0]].exp = value;
    await umaru.save();
    return api.sendMessage((await translate("✅ Successfully change {{n}}'s exp to {{m}}.", event, null, true)).replace("{{m}}", num).replace("{{n}}", name), event.threadID, event.messageID);
  }
}
