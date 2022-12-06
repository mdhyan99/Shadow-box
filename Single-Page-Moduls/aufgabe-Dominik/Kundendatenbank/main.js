async function getCustomers() {
    const response = await fetch("http://localhost:3000/customers");

    if (response.status !== 200) {
        throw new Error(response.status);
    }

    const customers = await response.json();
    return customers;
}
getCustomers();

async function inHtml() {
    try {
        const customers = await getCustomers();

        customers.forEach((name) => {
            const list = document.querySelector("ul");
            console.log(name);
            const listElement = document.createElement("li");
            const username = document.createElement("h2");
            const username2 = document.createElement("img");
            // const lastname = document.createElement("p");
            // lastname.innerText = name.last_name;
            username.innerText = `FirstName : ${name.first_name}  
            LastName:   ${name.last_name}
            Email:  ${name.email}
            ip_address :  ${name.ip_address}
            City: ${name.city}
            `;
            username2.src = name.avatar;
            list.appendChild(listElement);
            listElement.appendChild(username);
            listElement.appendChild(username2);
            // listElement.appendChild(lastname);
        });
    } catch (error) {
        console.log(error);
    }
}
inHtml();
