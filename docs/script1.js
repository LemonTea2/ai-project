let taskList = document.getElementById("tasks");
let taskOrder = document.getElementById("order");
let postReq = document.getElementById('post1');
let taskDisplay1 = '';

let okButton1 = document.getElementById('okButton');
document.getElementById('okButton').style.display = 'none';
let refreshButton1 = document.getElementById('refreshButton');
document.getElementById('refreshButton').style.display = 'none';
let taskDisplay2 = '';
document.getElementById('taskDisplay3').style.display = 'none';
document.getElementById('2').style.display = 'none';
let taskOrder2 = document.getElementById("order2");
document.getElementById('order2').style.display = 'none';

postReq.addEventListener("click", function(){
    console.log(taskList.value);
    console.log(taskOrder.value);
    if (taskList.value.length <= 0){
        console.log("error");
        document.getElementById('taskDisplay3').innerHTML = 'error';
    } else if(taskOrder.value == "noOrder"){
        console.log("no order")
        document.getElementById('okButton').style.display = '';
        document.getElementById('refreshButton').style.display = '';
        document.getElementById('taskDisplay3').style.display = 'block';
        document.getElementById('2').style.display = 'block';
        document.getElementById('order2').style.display = 'block';
        document.getElementById('taskDisplay3').innerHTML = taskList.value;
        //
        document.getElementById("tasks").style.display = 'none';
        document.getElementById("order").style.display = 'none';
        document.getElementById("post1").style.display = 'none';
    } 
    else{
        document.getElementById('okButton').style.display = '';
        document.getElementById('refreshButton').style.display = '';
        document.getElementById('taskDisplay3').style.display = 'block';
        document.getElementById('order2').style.display = 'block';
        document.getElementById('2').style.display = 'block';
        //
        document.getElementById("tasks").style.display = 'none';
        document.getElementById("order").style.display = 'none';
        document.getElementById("post1").style.display = 'none';
        fetch('https://api.openai.com/v1/completions', {
            body: JSON.stringify({
                'model': 'text-davinci-003',
                'prompt': 'Put the tasks: '+taskList.value+' in this order: '+taskOrder.value,
                'temperature': 0.1,
                'max_tokens': 1000,
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
            console.log(data.choices[0].text);
            taskDisplay1 = data.choices[0].text;
            document.getElementById('taskDisplay3').innerHTML = taskDisplay1;
            finalList1 = taskDisplay1;
        });    
    }
});

let finalList1 = '';
document.getElementById('finalList').style.display = 'none';
document.getElementById('3').style.display = 'none';

refreshButton1.addEventListener("click", function(){
    fetch('https://api.openai.com/v1/completions', {
        body: JSON.stringify({
            'model': 'text-davinci-003',
            'prompt': 'Put the tasks: '+taskList.value+' in this order: '+taskOrder2.value,
            'temperature': 1.5,
            'max_tokens': 1000,
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
        finalList1 = taskDisplay2;   
    });
}); 

okButton1.addEventListener("click", function(){
    document.getElementById('okButton').style.display = 'none';
    document.getElementById('order2').style.display = 'none';
    document.getElementById('refreshButton').style.display = 'none';
    document.getElementById('taskDisplay3').style.display = 'none';
    document.getElementById('2').style.display = 'none';
    //
    document.getElementById('finalList').innerHTML = finalList1;
    //show
    document.getElementById('3').style.display = 'block';
    document.getElementById('finalList').style.display = 'block';
});