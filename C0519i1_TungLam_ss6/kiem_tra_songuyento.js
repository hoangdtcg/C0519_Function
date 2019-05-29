function isSNT(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function display() {
    for (let j = 2; j < 1000; j++) {
        if (isSNT(j)) {
            document.write(j + "" + "<br/>");
        }
    }
}

display();
