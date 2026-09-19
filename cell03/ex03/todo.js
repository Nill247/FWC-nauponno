window.onload = function () {
    const ftList = document.getElementById('ft_list');
    const newBtn = document.getElementById('new-btn');

    loadFromCookie();

    newBtn.addEventListener('click', function () {
        const text = prompt('Enter a new TO DO:');
        if (text && text.trim() !== '') {
            addTodo(text.trim());
            saveToCookie();
        }
    });

    function addTodo(text) {
        const div = document.createElement('div');
        div.textContent = text;

        div.addEventListener('click', function () {
            if (confirm('Do you want to remove this to-do item?')) {
                div.remove();
                saveToCookie();
            }
        });

        ftList.prepend(div);
    }

    function saveToCookie() {
        const todos = [];
        const items = ftList.querySelectorAll('div');

        for (let i = items.length - 1; i >= 0; i--) {
            todos.push(items[i].textContent);
        }

        const jsonStr = encodeURIComponent(JSON.stringify(todos));
        document.cookie = "ft_list=" + jsonStr + ";path=/;max-age=31536000";
    }

    function loadFromCookie() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith("ft_list=")) {
                try {
                    const jsonStr = decodeURIComponent(cookie.substring(8));
                    const todos = JSON.parse(jsonStr);
                    todos.forEach(text => addTodo(text));
                } catch (e) {
                    console.error("Cookie load error:", e);
                }
            }
        }
    }
};