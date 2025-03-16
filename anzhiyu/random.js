var posts=["2025/01/02/CSS层叠规则/","2025/01/02/值的比较/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };