document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('color-picker');
    var colorValue = document.getElementById('color-value');
    var copyMessage = document.createElement('div');
    copyMessage.setAttribute('id', 'copy-message');
    copyMessage.style.display = 'none';
    copyMessage.style.marginTop = '10px';
    copyMessage.style.color = 'green';
    document.body.appendChild(copyMessage);
  
    colorPicker.addEventListener('input', function() {
      var color = colorPicker.value;
      colorValue.textContent = 'Selected Color: ' + color;
      copyToClipboard(color);
    });
  
    function copyToClipboard(text) {
      var dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
  
      showCopyMessage();
    }
  
    function showCopyMessage() {
      copyMessage.textContent = 'Color code copied to clipboard!';
      copyMessage.style.display = 'block';
      setTimeout(function() {
        copyMessage.style.display = 'none';
      }, 2000);
    }
  });
  