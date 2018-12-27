// Lesson32 = Working with DOM Nodes 6:38:56
// =========================================

// Document Object Model

// nodes

// events

// 1. inline handler
// 2. <script> at the bottom
//3. Separation of concerns : own file

(function () {
    let counter = 0;
    const colors = [
        { name: 'Alizarin', value: '#e74c3c' },
        { name: 'Belize Hole', value: '#2980b9' }
    ];
    function markButton(btns) {
        btn = btns[counter % btns.length];
        resetButtons();
        btn.className = btn.className.replace('button', 'button-clicked');
        btn.className = btn.className.replace('button-clicked-clicked', 'button-clicked');
        console.log(btn.style);
        counter++;
        renderNumber(btn);

    }
    function resetButton(btn) {
        btn.className = btn.className.replace('button-clicked', 'button');
    }
    function renderNumber(bnt) {
        let numElement = document.getElementById('numId');
        numElement.innerText = counter;
        console.log(numElement);
        numElement.style.fontSize = `${counter}em`;
    }
    function resetButtons() {
        buttons.forEach(button => resetButton(button));
    }
    /*  let myButton = document.getElementById('AMLBtn');
      myButton.addEventListener('click', function () { clickHandler('from iife') });
  */
    buttons = document.querySelectorAll(".button");
    clickme = document.getElementById("ClickMe");

    //buttons.forEach(button => button.addEventListener("click", () => markButton(button, true)));
    clickme.addEventListener('click', () => markButton(buttons));

})();
