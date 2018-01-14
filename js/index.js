$(document).ready(function(){
  var randomQuote, randomNum, author;
  function getQuote(){
    var quotes = ["\"The unexamined life is not worth living\"", "\"Creativity is contagious, pass it on\"", "\"Have no fear of perfection, you'll never reach it\""];
    author = ["-Plato", "-Albert Eintstein", "-Salvador Dali"];
    randomNum = Math.floor(Math.random()*quotes.length);
    randomQuote = quotes[randomNum];
    author = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(author);
  }
   $("#newQuote").on("click", function(){
      getQuote();
    });
  
  $("#tweet").on("click" , function() {
    var tweetQuote=$(".quote").text() + $(".author").text();
  window.open("https://twitter.com/intent/tweet?text="+tweetQuote);
});
});