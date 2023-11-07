var posts=["2023/11/07/2023-11-07-No.1hulhub-fastjson任意命令执行/","2023/11/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };