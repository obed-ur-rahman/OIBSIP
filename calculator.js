document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonText = this.textContent;
            
            if (buttonText == '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (buttonText == 'C') {
                display.value = '';
            } else {
                display.value += buttonText;
            }
        });
    });
});
