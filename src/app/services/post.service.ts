import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/postsinterface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url='https://jsonplaceholder.typicode.com/posts/'

  constructor(private http:HttpClient) { }
  getPosts(){
    return this.http.get<Posts []>(this.url)
  }
  getSinglePost(id:string){
    return this.http.get<Posts>(this.url+id)
  }
  addPosts(post:Posts){
    return this.http.post(this.url,post)
  }
  deletePost(id:any){
    return this.http.delete(this.url+id)
  }
  update(id:string,post:Posts){
    return this.http.patch(this.url+id,post)

  }
}
