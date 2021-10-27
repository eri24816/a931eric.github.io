

var words=['cat', 'good', 'hello']
var answer = []
var question = []
var i = 0;
var q;
var a,la;

window.onload = function () {
    q = document.getElementById("q");
    a = document.getElementById("a");
    la = document.getElementById("lastans");
    answer = answer.concat(answer)
    question = question.concat(question)
    a.oninput = function (){
        if (a.value == answer[i]) {
            la.textContent = answer[i];
            answer.splice(i, 1)
            question.splice(i, 1)
            update();
            
        }

    }
    a.onkeypress = function (e) {
    
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            a.value = '';
            if (a.placeholder == "") {
                answer.push(answer[i])
                answer.push(answer[i])
                question.push(question[i])
                question.push(question[i])
                a.placeholder = answer[i];
            }
            
        }
            
    }
    document.getElementById("get").onclick = function () {
        get();
        update();
    }
}
function update() {
    i=Math.floor(Math.random() * question.length);//between 0 and len-1
    
    a.value = '';
    a.placeholder = "";
    document.getElementById("q1").textContent = question[i]['d'];
    document.getElementById("q2").textContent = question[i]['e'];
}

function get() {
    words=document.getElementById("input").value.split("\n")
    question = []
    answer = []
    words.forEach(a => {
        $.ajax({
            async:false,
            url: 'https://api.dictionaryapi.dev/api/v1/entries/en/'+a,
            dataType: 'json',
            success: function (data) {
                var s = {'d': Object.values(data[0]['meaning'])[0][0]['definition'].replace(RegExp(a, 'g'),a[0]+'__'+a[a.length-1]),'e': (Object.values(data[0]['meaning'])[0][0]['example']).replace(RegExp(a, 'g'),a[0]+'__'+a[a.length-1]) }

                answer.push(a)
                answer.push(a)
                question.push(s)
                question.push(s)
            }
            
        });
    });
    
    
}
/*
suburb
cram
vast
errand
withdraw
deposit
weave
cuisine
tempt
stimulate
bustling
leather
immense
stereotype
identical
neglect
adolescent
sloppy
ethical
distort
prejudice
monopoly
glamour
peculiar
*/
