$('.button').click(function(e){
  console.log(e.target.id);
  console.log(this)
  $(this).effect('highlight', null, 500);
})


