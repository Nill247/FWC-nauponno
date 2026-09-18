$(document).ready(function() {
    const $ftList = $('#ft_list');

    loadFromCookie();

    $('#new-btn').click(function() {
        const text = prompt('Enter a new TO DO:');
        if (text && text.trim() !== '') {
            addTodo(text.trim());
            saveToCookie();
        }
    });

    function addTodo(text) {
        const $div = $('<div></div>').text(text);

        $div.click(function() {
            if (confirm('Do you want to remove this to-do item?')) {
                $(this).remove();
                saveToCookie();
            }
        });

        $ftList.prepend($div);
    }

    function saveToCookie() {
        const todos = [];
        $ftList.children('div').each(function() {
            todos.unshift($(this).text());
        });
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
});