const list = document.getElementById('todo-list');
const addItemButton = document.getElementById('add-button');
const itemInput = document.getElementById('todo-input');
const savelistButton = document.getElementById('save-button');
const deleteButton = document.getElementById('delete-button');
const clearAllButton = document.getElementById('clear-all-button');

addItemButton.addEventListener('click', () => {
    const newItemText = itemInput.value.trim();

    // ❗ Validate FIRST
    if (newItemText === '') {
        alert('Please enter a to-do item.');
        return;
    }

    // Create list item
    const listItem = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create text span
    const textSpan = document.createElement('span');
    textSpan.textContent = newItemText;

    // Toggle completed state
    checkbox.addEventListener('change', () => {
        textSpan.style.textDecoration = checkbox.checked
            ? 'line-through'
            : 'none';
    });

    // Append elements
    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
    list.appendChild(listItem);

    // Remove "no tasks" message safely
    const noTasksMessage = document.getElementById('no-tasks-message');
    if (noTasksMessage) {
        noTasksMessage.remove();
    }

    // Clear input AFTER successful add
    itemInput.value = '';
});

itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItemButton.click();
    }
});


savelistButton.addEventListener('click', () => {
    const items = [];
    list.querySelectorAll('li').forEach((li) => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        const text = li.querySelector('span').textContent;
        items.push({ text, completed: checkbox.checked });
    });

    localStorage.setItem('todoList', JSON.stringify(items));
    alert('To-do list saved!');
});


deleteButton.addEventListener('click', () => {
    const items = list.querySelectorAll('li');
    items.forEach((li) => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            li.remove();
        }
    });

    // If list is empty, show "no tasks" message
    if (list.children.length === 0) {
        const noTasksMessage = document.createElement('p');
        noTasksMessage.id = 'no-tasks-message';
        noTasksMessage.textContent = 'No tasks available.';
        list.appendChild(noTasksMessage);
    }
});

clearAllButton.addEventListener('click', () => {
    list.innerHTML = '';
    const noTasksMessage = document.createElement('p');
    noTasksMessage.id = 'no-tasks-message';
    noTasksMessage.textContent = 'No tasks available.';
    list.appendChild(noTasksMessage);
});

