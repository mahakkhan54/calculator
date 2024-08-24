(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Function to handle input from buttons
    function handleInput(value) {
        if (value === 'C') {
            screen.value = '';
        } else if (value === '=') {
            if (screen.value === '') {
                screen.value = "please enter";
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        } else {
            screen.value += value;
        }
    }

    // Add click event listeners to all buttons
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num || e.target.innerText;
            handleInput(value);
        });
    });

    // Add keypress event listener to the document
    document.addEventListener('keydown', function(e) {
        let key = e.key;
        if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
            handleInput(key);
        } else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace') {
            screen.value = screen.value.slice(0, -1);
        } else if (key === 'c' || key === 'C' || key === 'Delete') {
            handleInput('C');
        }
    });

    // Add click event listener to the equal button
    equal.addEventListener('click', function(e) {
        handleInput('=');
    });

    // Add click event listener to the clear button
    clear.addEventListener('click', function(e) {
        handleInput('C');
    });
})();
