var words = ["education", "technology", "mathematics", "science", "engineering", "arithmetic"]
$( document ).ready(function() {
  var x= $('#hiddenStuff')
  x.hide()
});

$('#button').click(function(){
  var x= $('#hiddenStuff')
  x.show()
  var number = $('#text').find('textarea[name="number"]').text();
  console.log(number)
})

