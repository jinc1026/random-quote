var quotes = ["The best preparation for tomorrow is doing your best today", "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart" , "What we think, we become", "Happiness is not something you postpone for the future; it is something you design for the present"];
var by = ["H. Jackson Brown Jr.", "Francis of Assisi", "Helen Keller" , "Buddha", "Jim Rohn"];

function getQuote(){
  return Math.floor(Math.random() * quotes.length);
}
var quoteNum = getQuote();

// widgets.js script
  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
  // widgets.js script ENDS



$(document).ready(function(){
  
  //Initial quote upon page loading
  $("#quote").text("\"" + quotes[quoteNum] + "\"");
  $("#person").text("- " + by[quoteNum]);
 
});

twttr.ready(function (twttr) {
        twttr.widgets.createShareButton(
            'http://codepen.io/jinc1026/pen/KgWagK',
            document.getElementById('twtbtn'),
            function (el) {
                console.log("Button created.")
            },
            {
                count: 'none',
                size: 'large',
                dnt: 'false',
                lang: 'el',
                related: 'related',
                text: quotes[quoteNum] + ' - ' + by[quoteNum],
                via: 'Jin_Choe',
                hashtags: 'quote'
            }
        );

        twttr.events.bind('tweet', function (event) {
            console.log(event, event.target);
        });
    });

 
  //generate a new quote unpon clicking the button
  $('button').click(function() {
    quoteNum = getQuote();
    
    $('#quote').text("\"" + quotes[quoteNum] +"\"");
    $("#person").text("By " + by[quoteNum]);
    
    // Remove existing iframe
    $('#twtbtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-size', 'large')
        .attr('data-url', 'http://codepen.io/anon/pen/NRBKga')
        .attr('data-text', quotes[quoteNum] + ' - ' + by[quoteNum]);
    $('#twtbtn').append(tweetBtn);
    twttr.widgets.load();

    
    
    
  });



