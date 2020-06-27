import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit {

  selectedPost: Post;
  posts: Post[];
  editIndex: number;

  constructor(private postsService: PostsService) { }
  
  ngOnInit(): void {
    this.postsService.getPostObs().subscribe(posts => this.posts = posts);
    this.postsService.selectedPost.subscribe(post => this.selectedPost = post);
  }

  saveChanges(title: string, body: string): void {
    const p = this.posts.find(post => post.id == this.selectedPost.id);
    p.title = title;
    p.body = body;
    this.postsService.updateData(this.posts);
  }

  cancelChanges(): void {    
    this.postsService.updateData(this.posts);
  }
}
