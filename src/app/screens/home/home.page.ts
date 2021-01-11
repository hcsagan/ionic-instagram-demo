import { Component, OnInit } from "@angular/core";
import faker from "faker";

function generatePost() {
  const name = faker.internet.userName();
  const avatar = faker.internet.avatar();
  const image = faker.image.image();
  return { name, avatar, image };
}
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor() {}
  stories: Object[] | false = [];
  posts: Object[] = [];

  async ngOnInit() {
    const users = await fetch(
      "https://randomuser.me/api/?results=20&inc=name,picture&nat=en"
    )
      .then((res) => res.json())
      .catch(() => false);

    if (users) {
      this.stories = users?.results;
    } else {
      this.stories = false;
    }

    let posts = [];
    for (let i = 0; i < 20; i++) {
      posts.push(generatePost());
    }
    this.posts = posts;
    console.log(this.posts);
  }
}
