export class Post
{
    id:any;
    title:any;
    body:any;
    related:any;
    author:any;
    time:any;
    constructor(id,body, related, author, title, time)
    {
        this.id = id;
        this.time = time;
        this.body = body;
        this.related = related;
        this.author = author;
        this.title = title;
    }
}