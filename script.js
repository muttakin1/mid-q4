$( document ).ready(function() {
  var x= $('#hiddenStuff')
  x.hide()
});

$('#button').click(function(){
  var x= $('#hiddenStuff')
  x.show()
});