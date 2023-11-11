/* 
Filename: sophisticated_code.js
Content: Complex and sophisticated code implementing a data structure and algorithms for a social media platform.
*/

// Data structure for storing user information
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  removeFriend(friend) {
    const index = this.friends.indexOf(friend);
    if (index !== -1) {
      this.friends.splice(index, 1);
    }
  }
}

// Data structure for representing posts
class Post {
  constructor(author, content, timestamp) {
    this.author = author;
    this.content = content;
    this.timestamp = timestamp;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment) {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
}

// Data structure for representing a social media platform
class SocialMediaPlatform {
  constructor() {
    this.users = {};
    this.posts = [];
  }

  registerUser(username, email, password) {
    const user = new User(username, email, password);
    this.users[username] = user;
  }

  createPost(username, content) {
    const author = this.users[username];
    if (!author) {
      throw new Error("User not found!");
    }

    const timestamp = new Date().getTime();
    const post = new Post(author, content, timestamp);
    this.posts.push(post);
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }

  likePost(post) {
    post.like();
  }

  addCommentToPost(post, comment) {
    post.addComment(comment);
  }

  removeCommentFromPost(post, comment) {
    post.removeComment(comment);
  }

  getUserByUsername(username) {
    return this.users[username];
  }
}

// Example usage
const platform = new SocialMediaPlatform();

// Register users
platform.registerUser("user1", "user1@example.com", "password1");
platform.registerUser("user2", "user2@example.com", "password2");
platform.registerUser("user3", "user3@example.com", "password3");

// Create posts
platform.createPost("user1", "Check out this amazing photo!");
platform.createPost("user2", "Feeling grateful today!");

// Perform actions on posts
const post1 = platform.posts[0];
const post2 = platform.posts[1];
platform.likePost(post1);
platform.likePost(post2);
platform.addCommentToPost(post1, "Wow, stunning!");
platform.addCommentToPost(post2, "So happy for you!");

// Perform actions on users
const user1 = platform.getUserByUsername("user1");
const user3 = platform.getUserByUsername("user3");
user1.addFriend(user3);
user3.addFriend(user1);

// Delete a post
platform.deletePost(post2);

console.log(platform);