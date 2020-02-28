let ajax = new FuckingHTTP();
let data = {
  title: "MA TITLE",
  body: "Hello World :)"
};
// GET METHOD
// ajax.GETMethod('https://jsonplaceholder.typicode.com/users',function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// POST METHOD
ajax.POSTMethod('https://jsonplaceholder.typicode.com/posts',data,function(status){console.log(console.log(status))});
// PUT METHOD

// DELETE METHOD
