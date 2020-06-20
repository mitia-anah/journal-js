// arrays of object have been created here
    let journal = [
        {
            title : "My first journal",
            content : "Shool news"      },
        {
            title : "My second journal",
            content : "Wonderful day"
        },
    ];
    console.log(journal);
   // This prompt let the user to choose until they quit
    let entryMenu = prompt(`
    Welcom to my onja journal!

    Choose (1) for listing all the entries.
    Choose (2) fro adding a new entry.
    Choose (3) to quit.
    Choose (4) to delete the last entry.
    Choose (5) to delete a specific entry. (with its index)
    `);

    // to show the list of the journal
    switch (entryMenu) {
        case "1":
            for (let i = 0; i < journal.length; i++) {
                let myJournal = `
                Title : ${journal[i].title}
                content : ${journal[i].content}
                `;
                alert(myJournal);
            }
            break;
        case "2": 
            // the user asked to enter new entry to add new array
            let entryTitle = prompt("Enter the journal title:");
            let entryContent = prompt("Enter the journal content")

            let entry = {
                title : entryTitle,
                content : entryContent,
            }
            journal.push(entry);
            for (let i = 0; i < journal.length; i++) {
                let myJournal = `
                Title : ${journal[i].title}
                content : ${journal[i].content}
                `;
                    alert(myJournal);
        }
            break;
        case "3": 
            alert(`Want to quit? (press Ok)`);
            break;
        case "4":
            entryDeleted = journal.pop();
            alert(`${entryDeleted.title} last entry deleted.`);
            break;
        case "5": 
        // Remove an existing link from array
        let journalToRemove = Number(
            prompt(`Enter a specific number you want to delete: (between 0 to 2)`)
        );
        let removedjournal = journal.splice(journalToRemove--, 1);
            alert(`link ${removedjournal[0].title} removed succefully`);
            break;
        default:
    }
