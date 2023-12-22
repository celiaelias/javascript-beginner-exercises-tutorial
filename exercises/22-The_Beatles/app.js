function sing() {
    let text = ""
    for(let i = 0; i < 4; i++) {
        text = text + "let it be, "
    }
    text = text + "there will be an answer, "
    for(let i = 0; i < 5; i++) {
        text = text + "let it be, "
    }
    text = text + "whisper words of wisdom, let it be"
    return text;
}

//Your code above ^^^

console.log(sing());