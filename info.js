
var boxCounter = 0;
document.addEventListener('DOMContentLoaded', function () {
   var mybtn = document.getElementById('mybtn');
    mybtn.className = 'squarebutton';
    mybtn.innerText = 'Add Square';

    mybtn.addEventListener('click', function(){
        var box = document.createElement('div');
        box.className = 'box';
        box.id = boxCounter;
        boxCounter++;
        box.innerText= box.id;
    

        box.addEventListener('mouseenter', function() {
            box.style.color = 'white';
        });

        box.addEventListener('mouseleave', function() {
            box.style.color = 'transparent';
        });

        box.addEventListener('click', function() {
            box.style.backgroundColor = getRandomColor();
        });
   
        box.addEventListener('dblclick', function() {
            var remove;

            if (squarebutton.id & 2 === 0) {
                remove = box.nextElementSibling;
            } else {
                remove = boxCounter.previousElementSibling;
            }

            if (remove === null || remove.tagName === 'mybtn') {
                alert('Done');
                return;
            } 
        
        });
        document.body.appendChild(box);
       });
       document.body.appendChild(mybtn);
       });
       
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
                return color;

    
    }
