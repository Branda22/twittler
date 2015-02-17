$(document).ready(function(){
  var $section = $('body').find('section');
  $section.html('');
  function buildTweet(index){
      var tweet = streams.home[index];
      var userMessages = streams.users[tweet.user];
      var idx = userMessages.length - 1;
      var $tweet = $('<div></div>').addClass('tweet');
      var $user = $('<a href="#">@' + tweet.user +'</a>').addClass('user');
      var $message = $('<p>' + tweet.message + '</p>').addClass('message');
      var $time = $('<p>'+ tweet.created_at +'</p>').addClass('time');

      var $timeline = $('<div></div>').addClass('timeline'); 
      for(idx; idx >= 0; idx--){
        var msg = userMessages[idx]["message"];
        $timeline.append($('<p>' + msg + '</p>'));
      }
      $tweet.append($user);
      $tweet.append($message);
      $tweet.append($time);
      $tweet.append($timeline);
      $tweet.appendTo($section);

  }
  
  function getTweets(){
    var index = streams.home.length - 1;
    for(index; index >= 0; index--){
        buildTweet(index);         
    }
  }
  //get initial tweets to load page;
  getTweets();

  //auto load tweets every random amount of time.
  setInterval(function(){
    getTweets();
  }, 5000);

  $('.tweet').on('click','.user', function(){
    $(this).find(".message").append('<p>hello</p>').slideToggle();    
  });
  
  $("html").load()    
});
