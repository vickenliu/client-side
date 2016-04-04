var xhr = require('xhr')
var example = require('./views/example.hbs')
var show = require('./views/show.hbs')
var $ = require('jquery')
function showAll(url){
    xhr.get(url, function(err, data) {
      if (err) console.log(err) // do something
      var name = 'json',
          returnData = JSON.parse(data.body)
    /*  returnData.forEach(function(obj){
        console.log(obj)
      })*/
      console.log(returnData);
      $('body').html( example( {cats: returnData.cats} ) );
    })

}

$(document).ready(function(){
  showAll('http://localhost:3000/cats');
  showSingle();
  $('body').on('click','#showAll',function(e){
    e.preventDefault();
    showAll('http://localhost:3000/cats');
  });
});

function showSingle(){
  $('body').on('click','.showCat',function(e){
    e.preventDefault();
    var cat = e.target,
        id=$(cat).data('id');
        console.log('id, cat', id, cat)
    xhr.get('http://localhost:3000/cats/'+id, function(err, data) {
      if (err) console.log(err) // do something

      var  returnData = JSON.parse(data.body)
    /*  returnData.forEach(function(obj){
        console.log(obj)
      })*/
      console.log(returnData);
      $('body').html( show( returnData.cats[0] ) );
    })
  })

}






// cats api :
