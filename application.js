$(document).ready(function(){
  var $section = $('body').find('section');
  $section.html('');

  function buildTweet(index){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>').addClass('tweet');
      var $user = $('<a href="#">@' + tweet.user +'</a>').addClass('user');
      var $message = $('<p>' + tweet.message + '</p>').addClass('message');
      var $time = $('<p>'+ tweet.created_at +'</p>').addClass('time');
      $tweet.append($user);
      $tweet.append($message);
      $tweet.append($time);

      $tweet.appendTo($section);

  }
  
  function getTweet(){
    var index = streams.home.length - 1;
    buildTweet(index);
  }
  //get initial tweets to load page;
  getTweet();

  //auto load tweets every random amount of time.
  setInterval(function(){
    getTweet();
  }, 3000);

  $('.user').on('click', function(){
        
  });
  $("html").load()    
});
