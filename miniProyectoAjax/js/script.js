var street ;
var city;
var request_imgStreet = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=";
var key="AIzaSyAizGLWa-zSAByycoOw5ApIgLWpAcxY6O4";
var key_Nyt = "58915ec83a4d4c73bf86d55f7a02a1e3";
function loadData() {
    
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    street = $('#street').val();
    city = $('#city').val();
    request_imgStreet += street+", "+city+"&key="+key;
   
  //  $body.append('<img  class="bgimg" src="'+request_imgStreet+'">');
    $('.bgimg').attr('src', request_imgStreet);
    var articles;
    request_imgStreet="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=";


    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    $.getJSON('https://api.nytimes.com/svc/search/v2/articlesearch.json', {q:city,sort:'newest','api-key':key_Nyt}, function(json, textStatus) {
        var data = json;
        data.response.docs.forEach( function(element, index) {
            $nytElem.append(articule(element));

        });
         wiki_API();
    });

    

    $greeting.text('So, you want to live at ' + address + '?');

    
   

    return false;
};

function wiki_API () {
    $.getJSON('https://en.wikipedia.org/w/api.php', {action:'opensearch',search:'Medellin',format: 'json',callback:'spellcheck'}, function(json, textStatus) {
            alert(json);
     }); 
}

function articule (element) {
    var url ="";
    if (element.multimedia.length > 0) {
        url = "http://www.nytimes.com/"+element.multimedia[0].url;
    }
    str =  ' <div class="col-sm-6 col-md-4">'+
  '  <div class="thumbnail">'+
   '   <img src="'+url+'" >'+
    '  <div class="caption">'+
     '  <h3>'+element.headline.main+'</h3>'+
      '  <p>'+element.lead_paragraph+'</p>'+
       ' <p><a href="'+element.web_url+'" target="_blank" class="btn btn-primary" role="button">Leer Mas</a></p>'+
      '</div>'+
    '</div>'+
  '</div>' ;
    return str;
}

//$('#form-container').submit(loadData);
