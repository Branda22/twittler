$(document).ready(function(){
  var $section = $('body').find('section');
  $section.html('');
  function buildTweet(index){
      var tweet = streams.home[index];
      var userMessages = streams.users[tweet.user];
      var idx = userMessages.length - 1;
      var $tweet = $('<div></div>').addClass('tweet');
      var $user = $('<a>@' + tweet.user +'</a>').addClass('user');
      var $message = $('<p>' + tweet.message + '</p>').addClass('message');
      var $time = $('<p>'+ tweet.created_at +'</p>').addClass('time');

      var $timeline = $('<div>Your Twitls</div>').addClass('timeline');
      for(idx; idx >= 0; idx--){
        var $msg = $('<p>' + userMessages[idx]["message"] + '</p>').addClass("timeline-message");
        var $tme = $('<p>' + userMessages[idx]["created_at"] + '</p>').addClass("timeline-time"); 
        $timeline.append($msg);
        $timeline.append($tme);
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

  //Render the inital tweets on the page.
  getTweets();

  //Load tweets when the user scrolls the browser.
  //The user will never get to the end because data_generator.js
  //Never stops loading tweets.
  $(window).on('scroll', function(event){
    event.preventDefault();
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       getTweets();
    }  
  });

  $('.tweet').on('click', function(event){
    $(this).find(".timeline").slideToggle();
  });
  
  $("html").load()    
});
