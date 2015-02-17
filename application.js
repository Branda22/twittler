$(document).ready(function(){
  var $section = $('body').find('section');
  $section.html('');

  function getTweets(){
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>').addClass('tweet');
      $tweet.html("<p><span>@" + tweet.user + "</span>: " + tweet.message + ' ' + ' | created at ' + tweet.created_at + "</p>");
      $tweet.appendTo($section);
      index -= 1;
    }
  }
  //get initial tweets to load page;
  getTweets();

  //auto load tweets every 5000ms
  setInterval(function(){
    getTweets();
  }, 5000);

  $("html").load()    
});