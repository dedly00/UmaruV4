import fs from "fs-extra";
import moment from 'moment-timezone';
export const setup = {
  name: "log",
  version: "40.0.0",
  creator: "John Lester",
  setEvent: ["log:thread-image", "change_thread_image", "log:thread-name", "log:subscribe", "log:unsubscribe"],
  description: "Monitor the group chat activity."
}
export const exec = async function({key, api, event, Threads, kernel, keyGenerator, translate, getNickname, Users, umaru, appState, cooldown}) {
  let path = umaru.sdcard + "/Pictures/"+keyGenerator()+".jpg";
  if(event.logMessageType === 'log:thread-name') {
    let tname = await Threads.getName(event.threadID)
    if(cooldown.isCooldown("log"+event.threadID, 120)) {
      for(const admin of umaru.config.adminbot) {
      let threadName = (tname === "") ? await translate("Name does not exist", {senderID: admin}, null, true): tname; 
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: ${(event.logMessageData.name === '') ? `The user removed the group name of "{{t}}"` :`The user changes the name of the group from "{{t}}" to "{{e}}"`}\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{t}}/g, threadName).replace(/{{e}}/g, event.logMessageData.name).replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
        api.sendMessage(record, admin , () => {});
      }
      return;
    };
    cooldown.create("log"+event.threadID);
    try {
    let monitor = await kernel.readStream(['screenshot'], {key: key, url: "https://web.facebook.com/messages/t/"+event.threadID, appstate: appState, device: "desktop"});
    await kernel.writeStream(path, monitor);

    for(const admin of umaru.config.adminbot) {
      let threadName = (tname === "") ? await translate("Name does not exist", {senderID: admin}, null, true): tname; 
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: ${(event.logMessageData.name === '') ? `The user removed the group name of "{{t}}"` :`The user changes the name of the group from "{{t}}" to "{{e}}"`}\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{t}}/g, threadName).replace(/{{e}}/g, event.logMessageData.name).replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage({body: record, attachment: fs.createReadStream(path)}, admin , (err) => {
        if(err) {
          return api.sendMessage(record, admin , () => {});
        }
      });
    }
  } catch (e) {
    console.log(e)
    for(const admin of umaru.config.adminbot) {
      let threadName = (tname === "") ? await translate("Name does not exist", {senderID: admin}, null, true): tname; 
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: ${(event.logMessageData.name === '') ? `The user removed the group name of "{{t}}"` :`The user changes the name of the group from "{{t}}" to "{{e}}"`}\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{t}}/g, threadName).replace(/{{e}}/g, event.logMessageData.name).replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage(record, admin , () => {});
    }
  }
  } else if(event.logMessageType === 'log:thread-image' || event.type === "change_thread_image") {
    if(cooldown.isCooldown("log"+event.threadID, 120)) {
      let imageUrl = ((event.image && event.image.url === null)) ? event.image.url:(event.logMessageData && event.logMessageData.url === null) ? event.logMessageData.url: null;
      for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: ${(imageUrl === null) ? `The user removed the group photo` :`The user changed the group photo`}\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
        api.sendMessage(record, admin , () => {});
      }
      return;
    };
    cooldown.create("log"+event.threadID);
    try {
    let monitor = await kernel.readStream(['screenshot'], {key: key, url: "https://web.facebook.com/messages/t/"+event.threadID, appstate: appState, device: "desktop"});
    await kernel.writeStream(path, monitor);

    for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: ${(event.image && event.image.url === null) ? `The user removed the group photo` :`The user changed the group photo`}\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage({body: record, attachment: fs.createReadStream(path)}, admin , (err) => {
        if(err) {
          return api.sendMessage(record, admin , () => {});
        }
      });
    }
  } catch (e) {
    console.log(e)
    for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: ${(event.image.url === null) ? `The user removed the group photo` :`The user changed the group photo`}\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage(record, admin , () => {});
    }
  }
  } else if(umaru.data['AutoLeave']['Mode'] == false && event.logMessageType === "log:subscribe" &&  event.logMessageData.addedParticipants.some(a => a.userFbId === api.getCurrentUserID())) {
    if(cooldown.isCooldown("log"+event.threadID, 120)) {
      for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: The user added the bot to the group\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
        api.sendMessage(record, admin , () => {});
      }
      return;
    };
    cooldown.create("log"+event.threadID);
    try {
    let monitor = await kernel.readStream(['screenshot'], {key: key, url: "https://web.facebook.com/messages/t/"+event.threadID, appstate: appState, device: "desktop"});
    await kernel.writeStream(path, monitor);

    for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: The user added the bot to the group\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage({body: record, attachment: fs.createReadStream(path)}, admin , (err) => {
        if(err) {
          return api.sendMessage(record, admin , () => {});
        }
      });
    }
  } catch (e) {
    console.log(e)
    for(const admin of umaru.config.adminbot) { 
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: The user added the bot to the group\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage(record, admin , () => {});
    }
  }
  } else if(event.logMessageType === "log:unsubscribe" &&  event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) {
    if(cooldown.isCooldown("log"+event.threadID, 120)) {
      for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: The user kicked the bot out of the group\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
        api.sendMessage(record, admin , () => {});
      }
      return;
    };
    cooldown.create("log"+event.threadID);
    try {
    let monitor = await kernel.readStream(['screenshot'], {key: key, url: "https://web.facebook.com/messages/t/"+event.threadID, appstate: appState, device: "desktop"});
    await kernel.writeStream(path, monitor);

    for(const admin of umaru.config.adminbot) {
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: The user kicked the bot out of the group\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage({body: record, attachment: fs.createReadStream(path)}, admin , (err) => {
        if(err) {
          return api.sendMessage(record, admin , () => {});
        }
      });
    }
  } catch (e) {
    console.log(e)
    for(const admin of umaru.config.adminbot) { 
      let record = (await translate(`{{b}}\n\n➣ {{i}}: ${event.threadID}\n➣ Action: The user kicked the bot out of the group\n➣ Action initiated by userID: {{u}}\n➣ Date: {{d}}`, {senderID: admin}, null, true)).replace(/{{b}}|{{B}}/g, "『   Bot Notification   』").replace(/{{u}}|{{U}}/g, event.author).replace(/{{d}}|{{D}}/g, moment.tz(umaru.config.TimeZone).format("LLL")).replace(/{{i}}|{{I}}/g, "Thread ID");
      api.sendMessage(record, admin , () => {});
    }
  }
  }
}