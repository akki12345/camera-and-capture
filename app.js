navigator.webkitGetUserMedia({video: true},
  function(stream) {
    document.getElementById('camera').src = URL.createObjectURL(stream);
  },
  function() {
    alert('could not connect stream');
  }
);
/*taking picture from webcam
navigator.webkitGetUserMedia({video: true},
  function(stream) {
  	var video = document.getElementById("v");
		var canvas = document.getElementById("c");
		var button = document.getElementById("b");
		video.src = stream;
		button.disabled = false;
		button.onclick = function() {
			canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
			var img = canvas.toDataURL("image/png");
			alert("done");
  };
},
  function() {
    alert('could not connect stream');
  }
);
*/