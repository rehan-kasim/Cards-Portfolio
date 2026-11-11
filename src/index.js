const uselesscontent = document.getElementById('useless-thing');
let uselessThings = [
    "There Are 7 Continents",
    "Zach Latta Love You (He is the Founder Hack Club)",
    "I Am A developer",
    "A dice Have 6 Sides",
    "Ahmm nothing",
    "What Should I tell You??",
    "Hackclub Is the Best",
    "I Sleep 14 Hours A day (Not Joking)"
];

function douseless() {
    index = Math.floor(Math.random()* (6 - 0 + 1));
    uselesscontent.textContent = uselessThings[index];
}

function change(href) {
    window.location.href=`apps/${href}`;
}

console.log('Bruh Why you Opened Console')