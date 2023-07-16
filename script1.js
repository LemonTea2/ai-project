let taskList = document.querySelector("#tasks");
let taskOrder = document.querySelector("#order");
let taskType = document.querySelector("#type");
let postReq = document.querySelector("#post1");
let taskList1_2 = '';

postReq.addEventListener("click", function(){
    console.log(taskList.value),
    console.log(taskOrder.value),
    console.log(taskType.value)
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
                'temperature': 1,
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
            let taskList1_2 = data.choices[0].text;
            let taskList = document.getElementById('taskList');
            taskList.setAttribute('value', taskList1_2);
        });
    }
});

let key = "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";