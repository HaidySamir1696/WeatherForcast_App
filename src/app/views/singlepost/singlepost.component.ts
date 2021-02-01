import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsinterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  constructor(private postService:PostService, private router:Router,private route:ActivatedRoute) { }
  posts:Posts={}
id:string = this.route.snapshot.params.id
getSinglePost(){
  this.postService.getSinglePost(this.id).subscribe((res)=>(this.posts = res))
}
  back(){
    this.router.navigate(['/posts'])
  }

  ngOnInit(): void {
    this.getSinglePost()
  }

}
