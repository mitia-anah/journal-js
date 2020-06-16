const link = [
    {
       title : `My first link`,
       url : `http://educative.io/courses/javascript-lesson`,
       author : `Rosny`,
    },
        {
       title : `My second link`,
       url : `http://educative.io/courses/exercises`,
       author : `Ashmee`
    }
];

const listOfLink = prompt(`
Choose an option:

1 : Show links
2 : Add links
3 : Remove a link
0 : Quite
`);

let menuOfLinks = Number(prompt(link));

switch (menuOfLinks) {
    case 1:
        for (let i = 0; i < link.length; i++);
        alert(menuOfLinks);
        break;
    case 2:
        break;
}
