export const setup = {
    name: "uid",
    version: "40.0.0",
    permission: "Users",
    description: "Get userID",
    category: "General",
    usages: ["","[@mentions]"],
    mainScreenshot: ["/media/uid/screenshot/main.jpg"],
    screenshot: ["/media/uid/screenshot/uid.jpg", "/media/uid/screenshot/mention.jpg"],
    cooldown: 5,
    isPrefix: true
}
export const domain = {"uid": setup.name}
export const execCommand = async function({api, event, Users, translate}) {
    let mentions = Object.keys(event.mentions)
    if(mentions.length !== 0) {
        let name = await Users.getName(mentions[0])
        return api.sendMessage({body: (await translate("🌠 Here's the user ID for {{n}}: {{s}}", event, null, true)).replace("{{n}}", name).replace("{{s}}",mentions[0]), mentions: [{tag: name, id: mentions[0]}]}, event.threadID, event.messageID)
    } else {
        let name = await Users.getName(event.senderID)
    return api.sendMessage({body: (await translate("🌠 Here's the user ID for {{n}}: {{s}}", event, null, true)).replace("{{n}}", name).replace("{{s}}",event.senderID), mentions: [{tag: name, id: event.senderID}]}, event.threadID, event.messageID)
    }
}