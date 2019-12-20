import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';

const wsUrl = "https://jsonplaceholder.typicode.com/posts";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Array<Post>> {
        return this.http.get<Array<Post>>(wsUrl);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(wsUrl, post, httpOptions)
    }

    updatePost(post: Post): Observable<Post> {
        let updateUrl = `${wsUrl}/${post.id}`;
        return this.http.put<Post>(updateUrl, { title: post.title, body: post.body } as Post, httpOptions);
    }

    deletePost(postId: number): Observable<{}> {
        let deleteUrl = `${wsUrl}/${postId}`;
        return this.http.delete(deleteUrl, httpOptions);
    }

}
