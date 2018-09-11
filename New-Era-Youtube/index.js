var vurl;

function geturl(){
  pageurl = window.location.href;
  if (pageurl.includes("?") == true) {
    urlsplit = pageurl.split("v=");
    urlstart = "https://stream.myedapp.com/?fwd=https://www.youtube.com/embed/";
    vurl = urlstart.concat(urlsplit[1]);
    addiframe();
  }
  else{
    vurl = "https://stream.myedapp.com/?fwd=https://www.youtube.com/embed/FN7ALfpGxiI";
    addiframe();
  }
}


function addiframe() {
  parta = '<iframe src="'
  partb = '" frameborder="0" allow="autoplay" allowfullscreen style="position:absolute;width:100%;height:100%;left:0;top:0;border:0;" border="0"></iframe>'
  srcurl = parta.concat(vurl, partb);
  document.getElementById("divd").innerHTML = srcurl;
}


function StreamVideo(){
  var pageurl = window.location.href;
  var inputurl = document.getElementById("inputa").value;

  var urlsplit;
  var url;
  var outputurl;
  var v1 = inputurl.includes("youtube");
  var v2 = inputurl.includes("youtu.be");

  if (v1 == true) {
    urlsplit = inputurl.split("=");
    url = pageurl.split("?");
    outputurl = url[0].concat("?v=",urlsplit[1]);
    location.href = outputurl;
  }
  else if (v2 == true) {
    urlsplit = inputurl.split("/");
    url = pageurl.split("?");
    outputurl = url[0].concat("?v=",urlsplit[1]);
    location.href = outputurl;
  }
  else {
    var message = "Invalid URL! Please use www.youtube.com/watch?v=xxxxxxxxxxxxx or  http://youtu.be/xxxxxxxxxxxxx";
    document.getElementById("errormessage").innerHTML = message;
    
  }
  
}
