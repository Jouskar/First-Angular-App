import { Component } from '@angular/core';
import { Post } from "../post";
import { UsersComponent } from "../users/users.component";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [UsersComponent]
})
export class PostsComponent{
  
  isClicked: boolean;
  activePosts: number[] = [0];
  posts: Post[];
  msg:string;

  constructor(private usersComponent: UsersComponent, private postsService: PostsService) {  }

  ngOnInit(): void {
    this.postsService.getPostObs().subscribe(posts => this.posts = posts);
    this.isClicked = false;
    this.postsService.currentMsg.subscribe(msg => this.msg = msg);  }

  activatePosts(postId: number): void {
    let postIndex = this.activePosts.indexOf(postId);
    if (postIndex != -1) {
      delete this.activePosts[postIndex];
    }

    else {
      this.activePosts.push(postId);
    }
  }
    
  setMaxHeight(postId: number) {
    return {
      maxHeight: this.activePosts.indexOf(postId) != -1 ? "none": "0"
    }
  }
}
