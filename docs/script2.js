let taskList3 = document.getElementById('taskDisplay');
console.log(taskList3);
let taskList = document.getElementById("tasks");
let taskOrder = document.getElementById("order");
let taskDisplay2 = '';

let okButton1 = document.getElementById('okButton');
let refreshButton1 = document.getElementById('refreshButton');

refreshButton1.addEventListener("click", function(){
    fetch('https://api.openai.com/v1/completions', {
        body: JSON.stringify({
            'model': 'text-davinci-003',
            'prompt': 'Put the tasks: '+taskList.value+' in order from '+taskOrder.value,
            'temperature': 2,
            'max_tokens': 20,
        }),
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer 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',
        },
    }) .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        console.log (data.choices[0].text);
        taskDisplay2 = data.choices[0].text
        document.getElementById('taskDisplay3').innerHTML = taskDisplay2;   
    });
}); 


