let taskList = document.querySelector("#tasks");
let taskOrder = document.querySelector("#order");
let taskType = document.querySelector("#type");
let postReq = document.querySelector("#post1");

postReq.addEventListener("click", function(){
    console.log(taskList.value),
    console.log(taskOrder.value),
    console.log(taskType.value)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            body: taskList.value,
            id: 1,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
});
