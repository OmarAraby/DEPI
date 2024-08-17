// import file system build in package

import fs from "fs";
// append create file and append on it
fs.appendFile("My-note.txt", "Bla Bla Bla Bla Bla Bla Bla ", function (error) {
    if (error) console.log(error.message);
    console.log("Saved Successfully");
    fs.readFile("./My-note.txt", "utf8", function (error, data) {
        if (error) console.log(error.message);
        console.log(data);

        fs.appendFile(
            "My-note.txt",
            "Just a Bla Bla Bla Bla Bla Bla",
            function (error) {
                if (error) console.log(error.message);
                console.log("Saved Successfully 2");
                fs.rename("./My-note.txt", "New-my-note.txt", function (error) {
                    if (error) console.log(error.message);
                    console.log("renamed successfully");
                    fs.unlink("./New-my-note.txt", function (error) {
                        if (error) console.log(error.message);
                        console.log("Deleted Successfully");
                    });
                });
            },
        );
    });
});
