let taskList = document.getElementById("tasks");
let taskOrder = document.getElementById("order");
let postReq = document.getElementById('post1');
let taskList1_2 = '';

postReq.addEventListener("click", function(){
    console.log(taskList.value),
    console.log(taskOrder.value);
    if (taskList.value.length <= 0){
        console.log("error");
    } else if(taskOrder.value == "noOrder"){
        console.log("no order")
    } 
    else{
        fetch('https://api.openai.com/v1/completions', {
            body: JSON.stringify({
                'model': 'text-davinci-003',
                'prompt': 'Put the tasks: '+taskList.value+' in order from '+taskOrder.value,
                'temperature': 0.5,
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
            taskList1_2 = data.choices[0].text
            document.getElementById('taskDisplay').innerHTML = taskList1_2;   
        });
    }
});

let key = "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";