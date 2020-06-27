import { Component, Renderer2, ElementRef } from '@angular/core';
import { Post } from "../post";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  
  activePosts: number[] = [0];
  posts: Post[];
  msg:string;

  constructor(private postsService: PostsService, private renderer: Renderer2, private elementRef: ElementRef) {  }

  ngOnInit(): void {
    this.postsService.getPostObs().subscribe(posts => this.posts = posts); }

  activatePosts(postId: number): void {
    let postIndex = this.activePosts.indexOf(postId);
    if (postIndex != -1) {
      delete this.activePosts[postIndex];
    }

    else {
      this.activePosts.push(postId);
    }
  }

  editPost(post: Post): void {
    this.postsService.selectPost(post);
  }
    
  setMaxHeight(postId: number) {
    let parent = this.renderer.parentNode(this.elementRef.nativeElement);
    let postBody = parent.querySelector(".active");
    return {
      maxHeight: this.activePosts.indexOf(postId) != -1 ? postBody.scrollHeight+"px": "0"
    }
  }
}
