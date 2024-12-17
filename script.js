function respond(answer) {
    const responseElement = document.getElementById('response');
    if (answer === 'yes') {
        responseElement.innerHTML = "Yay! You’ve made me the happiest person alive!";
    } else {
        responseElement.innerHTML = "Oh no! But I still love you!";
    }
}