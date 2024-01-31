function blur_all_inputs(name){
    let inputs = document.querySelectorAll(name);
    for (const input of inputs) {
        // Добавляем обработчик события keydown
        input.addEventListener('keydown', function(event) {
        // Если нажата клавиша Enter
        if (event.key === "Enter") {
            // Делаем input вне активации
            input.blur();
        }
        });
    }
}