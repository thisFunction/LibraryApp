import Controller from "@ember/controller";
import { gte, and, match } from "@ember/object/computed";

export default Controller.extend({
  messageIsLongEnough: gte("message.length", 5),
  isValid: and("messageIsLongEnough", "emailIsValid"),
  emailIsValid: match("emailAddress", /^.+@.+\..+$/),
  actions: {
    sendMessage() {
      var email = this.get("emailAddress");
      var message = this.get("message");

      const newMessage = this.store.createRecord("contact", {
        email: email,
        message: message
      });
      newMessage.save().then(() => {
        var responseMessage = "To: " + email + ", Message: " + message;
        this.set("responseMessage", responseMessage);
        this.set("emailAddress", "");
        this.set("message", "");
      });
    }
  }
});


