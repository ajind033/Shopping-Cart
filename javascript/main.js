/***************************************
 * Data
 ******************************************/

var fruits = [{
    name: "Apple",
    category: "fruits",
    mrp: 100
}, {
    name: "Mango",
    category: "fruits",
    mrp: 90
}, {
    name: "Lichi",
    category: "fruits",
    mrp: 95
}, {
    name: "Watermelon",
    category: "fruits",
    mrp: 50
}, {
    name: "Kiwi",
    category: "fruits",
    mrp: 110
}, {
    name: "Coconut",
    category: "fruits",
    mrp: 40
}, {
    name: "Pineapple",
    category: "fruits",
    mrp: 75
}, {
    name: "Peach",
    category: "fruits",
    mrp: 30
}, {
    name: "Grape",
    category: "fruits",
    mrp: 70
}, {
    name: "Cherry",
    category: "fruits",
    mrp: 65
}];
var vegetables = [{
    name: "Broccoli",
    category: "vegetables",
    mrp: 50
}, {
    name: "Cabbage",
    category: "vegetables",
    mrp: 40
}, {
    name: "Carrot",
    category: "vegetables",
    mrp: 40
}, {
    name: "Cauliflower",
    category: "vegetables",
    mrp: 50
}, {
    name: "Cucumber",
    category: "vegetables",
    mrp: 20
}, {
    name: "Eggplant",
    category: "vegetables",
    mrp: 40
}, {
    name: "Green Bean",
    category: "vegetables",
    mrp: 30
}, {
    name: "Mushroom",
    category: "vegetables",
    mrp: 60
}, {
    name: "Pea",
    category: "vegetables",
    mrp: 40
}, {
    name: "Onion",
    category: "vegetables",
    mrp: 30
}];
var dairy = [{
    name: "Milk",
    category: "dairy",
    mrp: 50
}, {
    name: "Curd",
    category: "dairy",
    mrp: 30
}, {
    name: "Cheese",
    category: "dairy",
    mrp: 60
}, {
    name: "Butter",
    category: "dairy",
    mrp: 300
}, {
    name: "Yogart",
    category: "dairy",
    mrp: 110
}, {
    name: "Condensed Milk",
    category: "dairy",
    mrp: 400
}, {
    name: "Cream",
    category: "dairy",
    mrp: 500
}, {
    name: "Eggnog",
    category: "dairy",
    mrp: 200
}, {
    name: "Ice Cream",
    category: "dairy",
    mrp: 300
}, {
    name: "Khoa",
    category: "dairy",
    mrp: 500
}];
var pluses = [{
    name: "Green Gram",
    category: "pluses",
    mrp: 100
}, {
    name: "Lentil",
    category: "pluses",
    mrp: 110
}, {
    name: "Red Gram",
    category: "pluses",
    mrp: 120
}, {
    name: "Black Lentis",
    category: "pluses",
    mrp: 90
}, {
    name: "Cowpea",
    category: "pluses",
    mrp: 100
}, {
    name: "Sago",
    category: "pluses",
    mrp: 110
}, {
    name: "Moth Dal",
    category: "pluses",
    mrp: 90
}, {
    name: "Kidney Beans",
    category: "pluses",
    mrp: 120
}, {
    name: "Chickpeas",
    category: "pluses",
    mrp: 90
}, {
    name: "Broad beans",
    category: "pluses",
    mrp: 110
}];

var dataItems = [fruits, vegetables, pluses, dairy];
var quantity = new Array(fruits.length + dairy.length + vegetables.length + pluses.length).fill(0);

/******************************************
 * Searching the Product
 ***************************************/
var finditem = () => {

    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";

    var trHead = document.createElement("tr");
    var tableHead = ["Name", "Category", "MRP", "Quantity"];
    tableHead.forEach((head) => {
        var th = document.createElement("th");
        var node = document.createTextNode(head);
        th.appendChild(node);
        trHead.appendChild(th);
    });
    searchResult.appendChild(trHead);

    var item = document.getElementById("givenItem").value.toLowerCase();
    var reg = new RegExp(item, "g");
    var index = 0;
    dataItems.forEach((dataItem) => {
        dataItem.forEach((data) => {
            if (reg.test(data.name.toLowerCase())) {
                var trData = document.createElement("tr");

                Object.keys(data).forEach((key) => {
                    var td = document.createElement("td");
                    var node = document.createTextNode(data[key]);
                    td.appendChild(node);
                    trData.appendChild(td);
                });
                var input = document.createElement("input");
                input.type = "number";
                input.min = 0;
                input.value = quantity[index];
                input.id = index;
                trData.appendChild(input);
                searchResult.appendChild(trData);
            }
            index++;
        });
    });
    document.getElementById("bodyButtons").style.visibility = "visible";
}

/*********************************************
 * Saving the value of quantity
 **********************************************/
var saveQuantityData = () => {
    var item = document.getElementById("givenItem").value.toLowerCase();
    var reg = new RegExp(item, "g");
    var index = 0;
    dataItems.forEach((dataItem) => {
        dataItem.forEach((data) => {
            if (reg.test(data.name.toLowerCase())) {
                quantity[index] = document.getElementById(index).value;
            }
            index++;
        });
    });
}

/******************************************************
 * Add to cart
 ******************************************************/
var addToCart = () => {
    saveQuantityData();

    var cartTable = document.getElementById("cartTable");
    cartTable.innerHTML = "";

    var trHead = document.createElement("tr");
    var tableHead = ["Name", "Quantity"];
    tableHead.forEach((head) => {
        var th = document.createElement("th");
        var node = document.createTextNode(head);
        th.appendChild(node);
        trHead.appendChild(th);
    });
    cartTable.appendChild(trHead);

    var index = 0;
    dataItems.forEach((dataItem) => {
        dataItem.forEach((data) => {
            if (quantity[index] > 0) {
                var trData = document.createElement("tr");

                var td1 = document.createElement("td");
                var node1 = document.createTextNode(data.name);
                td1.appendChild(node1);
                trData.appendChild(td1);


                var td2 = document.createElement("td");
                var node2 = document.createTextNode(quantity[index]);
                td2.appendChild(node2)
                trData.appendChild(td2);
                cartTable.appendChild(trData);
            }
            index++;
        });
    });
    document.getElementById("cartBody").style.visibility = "visible";
}
/************************************************************
 * Reset the data
 *****************************************************/
var reset = () => {
    document.getElementById("givenItem").value = "";
    document.getElementById("searchResult").innerHTML = "";
    document.getElementById("bodyButtons").style.visibility = "hidden";
    document.getElementById("cartBody").style.visibility = "hidden";
    document.getElementById("checkout").style.visibility = "hidden";
    quantity.fill(0);
}
/***********************************************************
 * Check Out
 ************************************************/
var checkMeOut = () => {
    var checkTable = document.getElementById("checkTable");
    checkTable.innerHTML = "";

    var trHead = document.createElement("tr");
    var tableHead = ["Name", "Category", "MRP", "Quantity", "Price"];
    tableHead.forEach((head) => {
        var th = document.createElement("th");
        var node = document.createTextNode(head);
        th.appendChild(node);
        trHead.appendChild(th);
    });
    checkTable.appendChild(trHead);

    var total = 0;
    var index = 0;
    dataItems.forEach((dataItem) => {
        dataItem.forEach((data) => {
            if (quantity[index] > 0) {
                var trData = document.createElement("tr");

                Object.keys(data).forEach((key) => {
                    var td1 = document.createElement("td");
                    var node1 = document.createTextNode(data[key]);
                    td1.appendChild(node1);
                    trData.appendChild(td1);
                });
                var td2 = document.createElement("td");
                var node2 = document.createTextNode(quantity[index]);
                td2.appendChild(node2);
                trData.appendChild(td2);

                var td3 = document.createElement("td");
                var node3 = document.createTextNode(quantity[index] * data.mrp);
                td3.appendChild(node3);
                trData.appendChild(td3);
                checkTable.appendChild(trData);

                total += quantity[index] * data.mrp;
            }
            index++;
        });
    });
    var trTotal = document.createElement("tr");

    var th4 = document.createElement("th");
    var node4 = document.createTextNode("Total");
    th4.appendChild(node4);
    th4.setAttribute("colSpan", 4);
    trTotal.appendChild(th4);

    var th5 = document.createElement("th");
    var node5 = document.createTextNode(total);
    th5.appendChild(node5)
    trTotal.appendChild(th5);
    checkTable.appendChild(trTotal);

    document.getElementById('checkout').style.display = 'block';
    document.getElementById('fade').style.display = 'block'
}