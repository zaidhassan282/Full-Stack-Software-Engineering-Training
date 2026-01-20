const list = document.getElementById('todo-list');
const addItemButton = document.getElementById('add-button');
const itemInput = document.getElementById('todo-input');

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
