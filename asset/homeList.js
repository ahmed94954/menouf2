$(document).ready(function(){

  $('form').on('submit', function(){


      var information = $('form input');
      var home = {information: information.val()};

      $.ajax({
        type: 'POST',
        url: '/homeAdmin',
        data: home,
        success: function(data){
          //do something with the data via front-end framework
        window.location.reload(false);
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var information = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/homeAdmin/' + information,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
