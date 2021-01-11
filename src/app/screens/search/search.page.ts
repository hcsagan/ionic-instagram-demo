import { Component } from "@angular/core";
import faker from "faker";
@Component({
  selector: "app-search",
  templateUrl: "search.page.html",
  styleUrls: ["search.page.scss"],
})
export class SearchPage {
  posts: String[];
  constructor() {}
  ngOnInit() {
    let posts: String[] = [];
    for (let i = 0; i <= 29; i++) {
      posts.push(faker.image.image());
    }
    this.posts = posts;
  }
}
