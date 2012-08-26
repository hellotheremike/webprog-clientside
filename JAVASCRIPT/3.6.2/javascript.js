
$(document).ready(function(){
  
  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
    for (var i = 0, f; f = files[i]; i++) {
    	if (!f.type.match('image.*')) {
        	continue;
      	}
      	var reader = new FileReader();
      	reader.onload = (function(theFile) {
	        return function(e) {
	          // Render thumbnail.
	          var div = document.createElement('div');
	          div.innerHTML = ['<img class="thumb" src="', e.target.result,
	                            '" title="', escape(theFile.name), '"/>'].join('');
	          document.getElementById('output').insertBefore(div, null);
	        };
	      })(f);
	    reader.readAsDataURL(f);
    }

    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('text.*')) {
          continue;
        }
        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            var pre = document.createElement('pre');
            pre.textContent = e.target.result;
            document.getElementById('output').insertBefore(pre, null);
          };
        })(f);
      reader.readAsBinaryString(f);
    }
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<p><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes</p>');
    }
    document.getElementById('output').innerHTML = output.join('');
    this.className = ''; 
    return false;
  }

  function handleFileSelectSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++){
      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var div = document.createElement('div');
            div.innerHTML = ['<img class="thumb" src="', e.target.result,
                              '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('output').insertBefore(div, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }

    for (var i = 0, f; f = files[i]; i++){
      if (!f.type.match('text.*'))
        continue;
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var pre = document.createElement('pre');
            pre.textContent = e.target.result;
            document.getElementById('output').insertBefore(pre, null);
        };
      })(f);
      reader.readAsBinaryString(f);
    }
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<p><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ', f.size, ' bytes</p>');
    }
    document.getElementById('output').innerHTML = output.join('');
  }

  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
  dropZone.addEventListener('dragover', function(){this.className='hover';return false;}, false);

  document.getElementById('files').addEventListener('change', handleFileSelectSelect, false);
});