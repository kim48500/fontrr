const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const deleteBtn = document.getElementById('deleteBtn');
addBtn.addEventListener("click", () => {
    const inputText = todoInput.value.trim();
    if (inputText === '') {
        return;
    }
    const li = document.createElement('li');

    li.innerHTML = `
    ${inputText}
    <button class="deleteBtn"> 삭제</button>
    `;
    // to do 리스트추가
    todoList.appendChild(li);
    // to do 리스트삭제
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    })
    //초기화
    todoInput.value = '';
}

)