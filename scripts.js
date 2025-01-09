

function addEvents() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for(i=0;i<coll.length;i++){
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.classList.toggle("expanded");
            var envelope = this.parentElement;
            if(envelope.style.height == envelope.id + "px"){
                envelope.style.height = "120px";
            }
            else {
                envelope.style.height = envelope.id + "px";
            }
        });
    }
}

function mOver(obj) {
    obj.parentElement.classList.toggle("shrinked");
    obj.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function mOut(obj) {
    obj.parentElement.classList.toggle("shrinked");
    obj.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

function changePage(a) {
    if(a == 1) document.location.href = "index.html";
    else if(a == 2) document.location.href = "experiences.html";
    else if(a == 3) document.location.href = "projects.html";
    else if(a == 4) document.location.href = "contacts.html";
}
