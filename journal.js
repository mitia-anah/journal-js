// arrays of object have been created here
const journalArray = [
    {
        title : "My first entry",
        content : "This is one the amazing blog which I have ever seen in my life, have a read whenever you got time."
    },

    {
       titlte : "My second entry",
       content : "To rise me from my weakness , to lead me into the rigth way, and to cover me from my illness is Jesus."
    }
];

// This is prompt to show the user's choice 
  let journal = prompt(`
  Welcome to my journal

  choose(1) for listing all  the entries
  Choose (2) for adding a new entry
  Choose (3) to quit
  choose

  `);
  alert(journal);




















// Number(prompt("Welcome to my journal\n choose(1) for listing all  the entries\n Choose (2) for adding a new entry\n Choose (3) to quit"));
//    for (let i = 0; i < journalArray.length; i++) {
//     let myEntries = journalArray[i];
//     for (let property in myEntries) {
//     if (journal === 1) {
//      alert(property + " " + ':' + " " + myEntries[property] );
//      } else if (journal === 2) {
//         let entryTitle = prompt("Enter your title:"); 
//         let entryContent = prompt("Enter your content:");
//         let entry = {
//             title: entryTitle,
//             content: entryContent,
//         };
//         journalArray.push(entry);
//      } else if (journal === 3) {
//          alert(`just leave the site!`);
//      }
//     }
// }
