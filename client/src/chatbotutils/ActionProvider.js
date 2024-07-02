class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
        const greetingMessage = this.createChatBotMessage("if you have a query related to the website mail to-soumyadeepsaha2106@gmail.com else TYPE:➡ OTHER PROBLEM ");
        this.updateChatbotState(greetingMessage);
      }
    
      // New actions
    
      // Action to handle questions about the weather
      handleWeather() {
        const message = this.createChatBotMessage("`I want to know about the webpage`>>TYPE>> about ||| I want to add an account to the webpage>>TYPE>>acc ||| I want to to know about the website developers>>TYPE>>jod" );

        this.updateChatbotState(message);
      }
    
      // Action to provide help or assistance
      handleHelp() {
        const message = this.createChatBotMessage("BuizLog is a social-entrepreneur,s ultimate startup funding solution. where innovation meets opportunity. Here you can connect with top investors, share your ideas, or ask any questions you may have. Let's redefine the future together ");
        this.updateChatbotState(message);
      }
    
      // Action to handle user feedback
      handleFeedback() {
        const message = this.createChatBotMessage("The developer of this website is  soumyadeep saha");
        this.updateChatbotState(message);
      }
    
      // Action to handle unknown commands
      handleUnknown() {
        const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
        this.updateChatbotState(message);
      }

      handleAccount(){
        const message = this.createChatBotMessage("Create your account on Bizlog by signing in and completing the payment process. Once confirmed, enter the platform to search for investors and tailor your pitches to connect effectively. Bizlog empowers entrepreneurs with a streamlined approach to secure funding and support for their startup ventures.");
        this.updateChatbotState(message);
      }

    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider