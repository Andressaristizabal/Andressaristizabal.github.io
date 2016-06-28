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
         wiki_API(city);
    });

    

    $greeting.text('So, you want to live at ' + address + '?');

    
   

    return false;
};

function wiki_API (search) {
    $.ajax({
    	url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&format=json&callback=spellcheck',
    	type: 'GET',
    	dataType: 'jsonp',
    	data: {},
    })
    .done(function(data) {
    	
    	data[1].forEach( function(element, index) {
    		var aux = articuleWiki(data[1][index],data[2][index],data[3][index]);
    		$('#wikipedia-links').append(aux);
    	});

    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    
}

function articule (element) {
    var url ="http://vignette3.wikia.nocookie.net/shokugekinosoma/images/6/60/No_Image_Available.png/revision/latest/scale-to-width-down/480?cb=20150708082716";
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

function articuleWiki (title,cuerpo,link) {
	var str =  '<div class="col-sm-12 col-md-12">'+
    '<div class="thumbnail">'+
      '<div class="caption">'+
        '<h3>'+title+'</h3>'+
        '<p>'+cuerpo+'</p>'+
        '<p><a href="'+link+'" class="btn btn-primary" role="button">Ir A Wiki</a></p>'+
      '</div>'+
    '</div>'+
  '</div>';
	return str;
}

//$('#form-container').submit(loadData);
