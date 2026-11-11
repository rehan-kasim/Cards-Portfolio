const display = document.getElementById('display');
let content = '';

function addDisplay(num){
    content += num;
    display.value = content;
};

function cleardisplay(){
    content = '';
    display.value = content;
};

function calculate(){
    try {
        if (display.value === '') return;
        display.value = eval(content);
    } catch (error) {
        display.value = 'Error';
    }
};

function deletelastchar() {
    content = display.value.slice(0,-1);
    display.value = content;
};