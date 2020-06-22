import { Component } from '@angular/core';
import { Post } from "../post";
import { UsersComponent } from "../users/users.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [UsersComponent]
})
export class PostsComponent{
  
  isClicked: boolean;
  posts: Post[];

  constructor(private usersComponent: UsersComponent) {  }

  ngOnInit(): void {
    this.posts = this.usersComponent.posts;
    this.isClicked = false;
  }

  activatePosts(): void {
    this.isClicked = !this.isClicked;
  }

  maxHeight: string = "null";
    

}
