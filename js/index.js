
$(document).ready(function(){
   var globa="Quotes";
  var globb="- Direct sharing to twitter";
   $("#newq").on("click",function(){
     var num3= Math.floor((Math.random()*10));
     var num= Math.floor((Math.random()*239)+17);
     var num1= Math.floor((Math.random()*239)+17);
     var num2= Math.floor((Math.random()*239)+17);
     console.log(num3);
     var colorstr="#";
     
     colorstr += num.toString(16).toUpperCase(); 
     colorstr += num1.toString(16).toUpperCase(); 
     colorstr += num2.toString(16).toUpperCase(); 
     console.log(colorstr);
     $("body").css("background-color",colorstr);
     $("#twit").css("background-color",colorstr);
     $("#newq").css("background-color",colorstr);
     $("#quotetext").css("color",colorstr);
     var html="";
     $.getJSON("https://quotesondesign.com/wp-json/posts?      filter[orderby]=rand&filter[posts_per_page]="+num3,function(a) {
       console.log(a);
       html+= "<i class=\"fa fa-quote-left\"><\/i> ";
       html += $('<div>'+a[0].content+'</div>').find('p:nth-child(1)').text();
       globa= $('<div>'+a[0].content+'</div>').find('p:nth-child(1)').text();
       html+= " <i class=\"fa fa-quote-right\"><\/i>";
       html += "<footer id=\"foot\">  - ";
       html +=  a[0].title ;
       globb=  a[0].title ;
         html+= "<\/footer>";
 console.log(html);      $("#quotetext").html(html);
       
    //$("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
});
   });
  $("#twit").on("click",function(){
    var urlstr="";
    urlstr += "https://twitter.com/share?text=";
    urlstr += globa + " - "+ globb;
    urlstr += "&url=https://codepen.io/zaheersyedkdr/full/NgEKKJ/&hashtags=Quotes,Z"
    console.log(urlstr);
    window.open(urlstr);
    console.log(globa);
  console.log(globb);
  });
  
});