export class AddPost {
  title: any;
  body: any;
  related: any;
  author: any;
  time: any;
  constructor(body, related, author, title, time) {
    this.time = new time();
    this.body = body;
    this.related = related;
    this.author = author;
    this.title = title;
  }
}
