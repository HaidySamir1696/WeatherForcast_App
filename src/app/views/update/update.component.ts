import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsinterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private postService:PostService, private route:ActivatedRoute) { }
id: string = this.route.snapshot.params.id
posts:Posts={}  
getSingleData(){
    this.postService.getSinglePost(this.id).subscribe((res)=>this.posts=res)

}
updatePost(post:Posts){
  this.postService.update(this.id,post).subscribe(()=>{
    
  })
}
  ngOnInit(): void {
    this.getSingleData()
  }

}
