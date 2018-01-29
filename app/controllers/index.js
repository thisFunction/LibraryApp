import Controller from "@ember/controller";
import { get } from "@ember/object";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  emailAddress: "",
  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),
  headerMessage: "Coming Soon",
  actions: {
    saveInvitation() {
        const email = this.get('emailAddress');
        const newInvitation = this.store.createRecord('invitation', { email: email });
        newInvitation.save().then(() => {
          this.set('responseMessage', `Thank you! We have just saved your email address: ${get(this, 'emailAddress')}`);
          this.set('emailAddress', '');
        });
    }
  }
});
