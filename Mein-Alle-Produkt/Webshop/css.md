* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 500;
}
body {
    text-align: center;
    background-color: rgba(121, 171, 150, 0.363);
}
header .navContainer {
    background-color: rgb(35, 69, 163);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header .navContainer > * {
    flex: 1 1 100%;
}
header .navContainer .logo button {
    padding: 20px;
    background-color: #62324bc6;
    color: rgba(43, 235, 32, 0.668);
    border-radius: 50% 50%;
    font-size: 8px;
    border: 1px solid rgba(62, 244, 183, 0.429);
}
header .navContainer .logo button:hover {
    background-color: white;
    color: #b10c2b;
    border-color: white;
}
header .navContainer .navigation1 nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
}

header .navContainer .navigation1 nav ul > li {
    position: relative;
    padding: 5px 10px;
}
header .navContainer .navigation1 nav ul li > a {
    color: rgb(44, 38, 38);
    text-decoration: none;

    font-size: 1.2em;
}
header .navContainer .navigation1 nav ul li:hover a {
    color: white;
}
header .navContainer .search {
    display: flex;
    justify-content: flex-end;
}
header .navContainer .search > * {
    margin: 0px 10px;
}
header .navContainer .search > input {
    width: 150px;
    margin: 0px;
    border-radius: 20px;
    border: 1px solid white;
}
header .navContainer .search > a {
    text-decoration: none;
    color: rgb(44, 38, 38);
}
header .navContainer .search a:hover {
    color: white;
}

.produkt img {
    width: 80%;
    max-width: 240px;
    border-radius: 50% 50%;
}
#navigation {
    margin-top: 20px;
    margin-bottom: 20px;
}
#navigation .link {
    padding: 20px;
}
#navigation .link:hover {
    background-color: rgba(20, 40, 64, 0.327);
    cursor: pointer;
}
