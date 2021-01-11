import { Component, OnInit } from "@angular/core";
import faker from "faker";

interface Comment {
  userName: string;
  comment: string;
}

interface Post {
  name: string;
  avatar: string;
  image: string;
  likes: number;
  description: string;
  comments: Comment[];
  createdAt: string;
}

const generateComment = (): Comment => {
  const userName = faker.internet.userName().toLowerCase();
  const comment = faker.lorem.sentence();
  return { userName, comment };
};

const generateComments = (count: number) => {
  if (count <= 0) return [];
  let comments: Comment[] = [];
  for (let i = 0; i < count; i++) comments.push(generateComment());
  return comments;
};

const generatePost = (): Post => {
  const name = faker.internet.userName();
  const avatar = faker.internet.avatar();
  const image = faker.image.image();
  const likes = Math.round(Math.random() * 1000);
  const comments = generateComments(Math.round(Math.random() * 3));
  const createdAt = `${Math.round(Math.random() * 10)} Days Ago`;
  const description = Math.random() >= 0.5 ? faker.lorem.sentence() : "";
  return { name, avatar, image, likes, description, comments, createdAt };
};
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
