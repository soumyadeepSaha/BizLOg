class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowercase = message.toLowerCase();
    
        if (lowercase.includes("Query") || lowercase.includes("query")) {
          this.actionProvider.greet();
        } else if (lowercase.includes("PROBLEM") || (lowercase.includes("problem")) ) {
          this.actionProvider.handleWeather();
        } else if (lowercase.includes("about")) {
          this.actionProvider.handleHelp();
        } else if (lowercase.includes("jod")) {
          this.actionProvider.handleFeedback();
        }else if (lowercase.includes("acc")) {
            this.actionProvider.handleAccount();
          }
        
        else {
          this.actionProvider.handleUnknown();
        }
      }
  }
  
  export default MessageParser;