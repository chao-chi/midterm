window.onload = function() {
    create($("#zoomwall"));
  
    function create(blocks){
      resize(blocks.children().children());
    }
  
    function resize(blocks){
      var row = [];
      var top = -1;
  
      for (var c = 0; c < blocks.length; c++) {
        var block = blocks[c];
        if (block) {
          if (top == -1) {
            top = block.offsetTop;
  
          } else if (block.offsetTop != top) {
            resizeRow(row, calcRowWidth(row));
  
            row = [];
            top = block.offsetTop;
          }
  
          row.push(block);
  
        }
      }
      resizeRow(row, calcRowWidth(row));
    }
  
    function resizeRow(row, width){
      //console.log(row[].naturalWidth);
      if (row && row.length > 1) {
        for (var i in row) {
          row[i].style.width = (parseInt(window.getComputedStyle(row[i]).width, 10) / width * 100) + '%';
          row[i].style.height = 'auto';
        }
      }
    }
  
    function calcRowWidth(row){
      var width = 0;
  
      for (var i in row) {
        width += parseInt(window.getComputedStyle(row[i]).width, 10);
      }
      return width;
    }
  };
    $(function(){
      var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
    });