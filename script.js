document.addEventListener('DOMContentLoaded', () => {
    let num = 10;
    const displayText = document.getElementById('lower');
    const button = document.getElementById('action_button');

    document.getElementById('content').style.height="0px"
    document.getElementById('content').style.display="none"


    function change() {
        num -= 1;
        if (num<=0){
            num=0;
            const content = document.getElementById('content')
            content.style.height="300px"
            content.style.display="flex"
            content.classList.add('pop')
            document.getElementById('non-content').style.filter="blur(8px)"
            button.remove()
        }

        displayText.textContent = `count: ${num}`;

        displayText.classList.remove('pop');
        void displayText.offsetWidth; 
        displayText.classList.add('pop');

        button.classList.remove('changebutton');
        void displayText.offsetWidth; 
        button.classList.add('changebutton');

        console.log(num);
    }

    if (button) button.addEventListener('click', change);

    
});