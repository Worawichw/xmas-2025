document.addEventListener('DOMContentLoaded', () => {
    let num = 10;
    const displayText = document.getElementById('lower');
    const action_button = document.getElementById('action_button');
    const yes_button = document.getElementById('choose-yes');
    const no_button = document.getElementById('choose-no');
    const bf = document.getElementById('bf');
    const gf = document.getElementById('gf');

    
    function change() {
        bf.src = 'assets/bf-yay.png';
        gf.src = 'assets/gf-yay.png';

        num -= 1;
        if (num<=0){
            num=0;
            const content = document.getElementById('content');
            content.classList.add('show');
            
            document.getElementById('non-content').style.filter="blur(15px)";
            action_button.remove();
        }

        displayText.textContent = `กดอีก ${num} ครั้ง`;

        displayText.classList.remove('pop');
        void displayText.offsetWidth; 
        displayText.classList.add('pop');

        action_button.classList.remove('changebutton');
        void displayText.offsetWidth; 
        action_button.classList.add('changebutton');

        setTimeout(yay,500);
        console.log(num);
        
    }

    function showSecret(){
        const secret = document.getElementById("secret");
        secret.classList.add('show');
        content.classList.remove('show');
        content.classList.add('hide');
    }

    function yay(){
        bf.src = 'assets/bf.png';
        gf.src = 'assets/gf.png';
    }
    

    if (action_button) action_button.addEventListener('click', change);
    if (yes_button) yes_button.addEventListener('click', showSecret);
    if (no_button) no_button.addEventListener('click', showSecret);

    
});