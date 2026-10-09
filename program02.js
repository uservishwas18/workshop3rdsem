const fs = require("fs");

// CREATE / WRITE
fs.writeFile("Notes.txt", "Today I learned Node.js", (err) => {
    if (err)
        console.log("File not created");
    else
        console.log("File created");
});

// UPDATE / APPEND
fs.appendFile("Notes.txt", "\nI practiced file handling", (err) => {
    if (err)
        console.log("Append error");
    else
        console.log("Data added");
});

// READ
fs.readFile("Notes.txt", "utf8", (err, data) => {
    if (err)
        console.log("File not found");
    else
        console.log(data);
});

// DELETE
setTimeout(() => {
    fs.unlink("Notes.txt", (err) => {
        if (err)
            console.log("Delete error");
        else
            console.log("File deleted");
    });
}, 4000);