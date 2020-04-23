function move() {
    var elem = document.getElementById("timer"); 
    var height = 235;
    var id = setInterval(frame, 100);
    function frame() {
        if (height <= 20) {
            clearInterval(id);
        } else {
            height--; 
            elem.style.height = height + 'px'; 
        }
    }
}
