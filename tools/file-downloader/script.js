
//clear input on focus
 $('#imgUrl').focus(function(){
      $(this).css("color" , "#333");
   $(this).val("")

 })
 
 
//Handle Button click
$('button').on('click', function(e){
  //Store user entered value
  $('#imgUrl').css('color', 'black')
  var userUrl =  $('#imgUrl').val();
  e.preventDefault();
 if(userUrl == "" || !userUrl.match("^http")){
   console.log(userUrl.toString())
   $('#imgUrl').val('Must enter valid url begining with http or https');
$('#imgUrl').css('color', 'red')
 } else{
   //If pass then save url 
   saveFile(userUrl);
   
 }
  
})


// Download a file form a url.
function saveFile(url) {
  // Get file name from url.
  var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
    a.download = filename; // Set the file name.
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    delete a;
  };
  xhr.open('GET', url);
  xhr.send();
}
