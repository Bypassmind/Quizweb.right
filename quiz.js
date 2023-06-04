const questions = [{
    'qus': 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JS', 
    'd': 'none of above',
    'correct': 'a',
},
{
    'qus': 'Governor is appointed by the ...',
    'a':'Prime Minister',
    'b': 'President',
    'c': 'Chief Justice of India',
    'd':'Chief Justice of the concerned state high court',
    'correct': 'b',
}, 
{
    'qus': "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
]
 let index = 0;
 let total = questions.length;
 let correct = 0;
 let wrong = 0, right = 0;
 const quesbox = document.getElementById('quesbox')
 const optionsinput = document.querySelectorAll('.options')
 
const loadquestion = () => {
    if(index === total){
        return endquiz()
    }
    reset();
    const data = questions[index];
    // console.log(data);
    quesbox.innerText =` ${index+1}) ${data.qus}`;
    optionsinput[0].nextElementSibling.innerText = data.a;
    optionsinput[1].nextElementSibling.innerText = data.b;
    optionsinput[2].nextElementSibling.innerText = data.c;
    optionsinput[3].nextElementSibling.innerText = data.d;
}
const submitquiz = () => {
    const data = questions[index];
    const ans = getanswer();
    console.log(data, ans)
    if (ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getanswer = () => {
    let answer;
    optionsinput.forEach(
        (input) => {
            if(input.checked){
                console.log(input.value)
                answer = input.value;
            }  
        } 
    )
    return answer;
}
const reset = () => {
    optionsinput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endquiz = () =>{
    document.getElementById('box').innerHTML = `<h3>Thank you<h3>
    <h2>${right} / ${total} are correct</h2>
    `;
}
loadquestion();