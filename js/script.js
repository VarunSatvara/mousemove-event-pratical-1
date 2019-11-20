var boxparent = document.getElementById('parent-box');
var boxchild = document.getElementById('child-box');
document.onmousemove = function(e) {

    boxchild.style.left = e.clientX + 'px';
    boxchild.style.top = e.clientY + 'px';

};