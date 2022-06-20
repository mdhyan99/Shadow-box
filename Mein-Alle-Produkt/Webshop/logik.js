// Als erstes vergeben wir den Schuh //
function produktAnzeigen(nr) {
    if (nr === 1) {
        document.getElementById("tshirt").style.display = "block";
        document.getElementById("schuh").style.display = "none";
        document.getElementById("frauen-tshirt").style.display = "none";
        document.getElementById("frauen-schuh").style.display = "none";
    }
    if (nr === 2) {
        document.getElementById("tshirt").style.display = "none";
        document.getElementById("schuh").style.display = "block";
        document.getElementById("frauen-tshirt").style.display = "none";
        document.getElementById("frauen-schuh").style.display = "none";
    }
    if (nr === 3) {
        document.getElementById("tshirt").style.display = "none";
        document.getElementById("schuh").style.display = "none";
        document.getElementById("frauen-tshirt").style.display = "block";
        document.getElementById("frauen-schuh").style.display = "none";
    }
    if (nr === 3) {
      document.getElementById("tshirt").style.display = "none";
      document.getElementById("schuh").style.display = "none";
      document.getElementById("frauen-tshirt").style.display = "none";
      document.getElementById("frauen-schuh").style.display = "block";
  } 
}
function initPayPalButton() {
    paypal
        .Buttons({
            style: {
                shape: "pill",
                color: "blue",
                layout: "vertical",
                label: "buynow",
            },

            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "T-Shirt",
                            amount: { currency_code: "EUR", value: 10 },
                        },
                    ],
                });
            },

            onApprove: function (data, actions) {
                return actions.order.capture().then(function (detailes) {
                    alert(
                        "Das  hat gekappt!" +
                            detailes.payer.name.given_name +
                            "/"
                    );
                });
            },

            onError: function (err) {
                console.log(err);
            },
        })
        .render("#paypal-button-tshirt");
    paypal
        .Buttons({
            style: {
                shape: "pill",
                color: "blue",
                layout: "vertical",
                label: "buynow",
            },

            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "schuh",
                            amount: { currency_code: "EUR", value: 30 },
                        },
                    ],
                });
            },

            onApprove: function (data, actions) {
                return actions.order.capture().then(function (detailes) {
                    alert(
                        "Das  hat gekappt!" +
                            detailes.payer.name.given_name +
                            "/"
                    );
                });
            },

            onError: function (err) {
                console.log(err);
            },
        })
        .render("#paypal-button-schuh");
    paypal
        .Buttons({
            style: {
                shape: "pill",
                color: "blue",
                layout: "vertical",
                label: "buynow",
            },

            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "frauen-T-Shirt",
                            amount: { currency_code: "EUR", value: 10 },
                        },
                    ],
                });
            },

            onApprove: function (data, actions) {
                return actions.order.capture().then(function (detailes) {
                    alert(
                        "Das  hat gekappt!" +
                            detailes.payer.name.given_name +
                            "/"
                    );
                });
            },

            onError: function (err) {
                console.log(err);
            },
        })
        .render("#paypal-button-frauen-tshirt");
    paypal
        .Buttons({
            style: {
                shape: "pill",
                color: "blue",
                layout: "vertical",
                label: "buynow",
            },

            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "frauen-schuh",
                            amount: { currency_code: "EUR", value: 10 },
                        },
                    ],
                });
            },

            onApprove: function (data, actions) {
                return actions.order.capture().then(function (detailes) {
                    alert(
                        "Das  hat gekappt!" +
                            detailes.payer.name.given_name +
                            "/"
                    );
                });
            },

            onError: function (err) {
                console.log(err);
            },
        })
        .render("#paypal-button-frauen-schuh");
}
initPayPalButton();
