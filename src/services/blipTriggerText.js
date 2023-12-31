const uuid = require("uuid");
const axios = require("axios");
const https = require("https");

module.exports = sendMessage = async (
  preffix,
  template,
  parameters,
  phone,
  routerBotKey
) => {
  const url = "https://" + preffix + "http.msging.net/messages"; 
  const token = routerBotKey; 
  const recipient = phone + "@wa.gw.msging.net"; 

  const messageData = {
    id: uuid.v1(), 
    to: recipient,
    type: "application/json",
    content: {
      type: "template",
      template: {
        name: template,
        language: {
          code: "pt_BR",
          policy: "deterministic",
        },
        components: [
          {
            type: "body",
            parameters: [{type: "text", text: parameters}],
          },
        ],
      },
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${token}`,
      },
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
