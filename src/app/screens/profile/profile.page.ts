import { Component } from "@angular/core";
import faker from "faker";
interface Profile {
  userName: string;
  name: string;
  avatar: string;
  description: string;
  uri: string;
  posts: number;
  followers: number;
  following: number;
}

@Component({
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"],
})
export class ProfilePage {
  constructor() {
    this.profile = {
      name: faker.name.findName(),
      userName: faker.internet.userName(),
      description: "Açıklama",
      uri: "https://github.com",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
      posts: Math.floor(Math.random() * 30),
      followers: Math.floor(Math.random() * 300),
      following: Math.floor(Math.random() * 300),
    };
  }
  ngOnInit() {
    let posts = [];
    for (let i = 0; i < this.profile.posts; i++) {
      posts.push(faker.image.image());
    }
    this.posts = posts;
  }
  posts: Object[] = [];
  profile: Profile;
}
