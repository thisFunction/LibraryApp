import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model() {
    return hash({
      books: this.store.findAll("book"),
      authors: this.store.findAll("author"),
      libraries: this.store.findAll("library")
    });
  },

  setupController(controller, model) {
    const books = model.books;
    const authors = model.authors;
    const libraries = model.libraries;

    this._super(controller, books);

    controller.set("authors", authors);
    controller.set("libraries", libraries);
  }
});
