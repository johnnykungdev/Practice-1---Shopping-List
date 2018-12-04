var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function createListElement(){
    if (input.value != ""){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        
        li.addEventListener('click', function(e){
            var target = e.target;
            target.classList.toggle('done');
            
            if (target.className == 'done'){
                var option = document.createElement('button');
                option.appendChild(document.createTextNode('delete'));
                li.appendChild(option);

                option.addEventListener('click', function(){
                    target.remove();
                })

            }else if(target.className != 'done'){
                target.childNodes[1].remove();
            }
        })
        ul.appendChild(li);
        input.value="";
    }
}

function createListElement_byenter(e){
    if (input.value != "" && e.keyCode == 13){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        
        li.addEventListener('click', function(e){
            var target = e.target;
            target.classList.toggle('done');
            
            if (target.className == 'done'){
                var option = document.createElement('button');
                option.appendChild(document.createTextNode('delete'));
                li.appendChild(option);

                option.addEventListener('click', function(){
                    target.remove();
                })

            }else if(target.className != 'done'){
                target.childNodes[1].remove();
            }
        })
                
        ul.appendChild(li);
        input.value="";
    }
}

button.addEventListener('click', createListElement)

input.addEventListener('keydown', createListElement_byenter)


/* when click on the list item, toggles ".done" class on and off */

var item = document.querySelectorAll('li');

for (i = 0; i < item.length ; i++){
    item[i].addEventListener('click', function(e){
        var target = e.target;
        target.classList.toggle('done');
    })
}
