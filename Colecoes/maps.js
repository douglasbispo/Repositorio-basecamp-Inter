function getAdmins(map) {
    let admins = [];
    let users = [];

    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push("'" + key + "'");
        }
        else if (value === "User") {
            users.push("'" + key + "'")
        }
    }

    return `    Admins: [${admins}]
    Users: [${users}]`;
}

const usuarios = new Map();

usuarios.set("Luiz", "User");
usuarios.set("Douglas", "Admin");
usuarios.set("Elisa", "Admin");
usuarios.set("João", "User");
usuarios.set("Marcos", "User");
usuarios.set("Marta", "Admin");

console.log(getAdmins(usuarios));