import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsinterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[]
  constructor(private postService:PostService) { }
getposts(){
  this.postService.getPosts().subscribe((res)=>{
    this.posts=res},(error)=>{

    console.log(error)
  })
}
addPosts(post:Posts){
  this.postService.addPosts(post).subscribe(()=>{
    this.posts.splice(0,0,post)
  })
}
deletePosts(post:Posts){
  this.postService.deletePost(post.id).subscribe(()=>{
    let index = this.posts.indexOf(post)
    this.posts.splice(index,1)
  })
}

  ngOnInit(): void {
    this.getposts()
  }

}
