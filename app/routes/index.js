import Route from "@ember/routing/route";
import { get } from "@ember/object";
import { match, not } from "@ember/object/computed";

export default Route.extend({
  emailAddress: "",
  isValid: match("controller.emailAddress", /^.+@.+\..+$/),
  isDisabled: not("controller.isValid"),
  headerMessage: "Coming Soon",

  actions: {
    saveInvitation() {
      const email = this.controller.get("emailAddress");
      const newInvitation = this.store.createRecord("invitation", {
        email: email
      });
      newInvitation.save().then(() => {
        this.controller.set(
          "responseMessage",
          `Thank you! We have just saved your email address: ${get(
            this.controller,
            "emailAddress"
          )}`
        );
        this.controller.set("emailAddress", "");
      });
    }
  }
});
