$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  function getTweets(){
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      var $userID = $('<span>@' + tweet.user + '</span>');
      $tweet.text( $userID + ": " + tweet.message + ' ' + ' | created at ' + tweet.created_at);
      $tweet.appendTo($body);
      index -= 1;
    }
  }
  //get initial tweets to load page;
  getTweets();

  //auto load tweets every 3000ms
  setInterval(function(){
    getTweets();
  }, 3000);

  $("html").load()    
});