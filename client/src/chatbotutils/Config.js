import { createChatBotMessage } from "react-chatbot-kit"


const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi,Welcome to BizLog ,where innovation meets opportunity. Here you can connect with top investors, share your ideas, or ask any questions you may have. Let's redefine the future together. if you have any query TYPE:-➡ 𝐈 𝐡𝐚𝐯𝐞 𝐚 𝐐𝐮𝐞𝐫𝐲")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
    userMessageBox: {
      backgroundColor: "black", // Set the user input background color to black
      color: "#376B7E", // Set the user input text color to white
      fontWeight: "bold" // Make the user input text bold
    }
  },
}

export default config