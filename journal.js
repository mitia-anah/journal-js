let journal = Number(prompt("Welcome to my journal\n choose(1) for listing all  the entries\n Choose (2) for adding a new entry\n Choose (3) to quit"));

for (let i = 0; i < journal; i++) {
    if (journal === 1) {
        console.log(Number(prompt("Title: My first blog \n content: This is one the amazing blog which I have ever seen in my life, have a read whenever you got time.")));
    } else if (journal === 2){
        console.log(Number(prompt("Title: God is my favour \n Content: To rise me from my weakness , to lead me into the rigth way, and to cover me from my illness is Jesus.")))
    }
    
}