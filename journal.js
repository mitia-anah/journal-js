const journalArray = [
    {
        title : "My first blog",
        content : "This is one the amazing blog which I have ever seen in my life, have a read whenever you got time."
    },

    {
       titlte : "My new entry",
       content : "To rise me from my weakness , to lead me into the rigth way, and to cover me from my illness is Jesus."
    },

    {
        title : "Sky is the limite",
        content: "Don't let anyone to have your crow, keep it 'till jesus's coming. "
    }
];

 let journal = Number(prompt("Welcome to my journal\n choose(1) for listing all  the entries\n Choose (2) for adding a new entry\n Choose (3) to quit"));
   for (let i = 0; i < journalArray.length; i++) {
    let myEntries = journalArray[i];
    for (let property in myEntries) {
    //   alert(property + '=' + myEntries[property]);
    if (journal === 1) {
     alert(property + '=' + myEntries[property]);
     } else if(journal === 2) {
         alert(`2`);
     } else if (journal === 3) {
         alert(3);
     }
    }
}
