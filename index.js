class Menu {
    constructor(menu = []) {
        this.menu = menu
        return this.menu
    }
}


class Shop {
    constructor(shopName) {
        this.shopName = shopName
    }

    orderMenu() {
        const h3Element = document.createElement('h3')
        h3Element.innerHTML = `Select Order!`

        const menuLists = new Menu([{ name: "Coffee", type: ["Espresso", "Cappuccino", "Latte"] }])

        const selectElement = document.createElement('SELECT')
        selectElement.setAttribute("id", "select")

        var optionSelect = document.createElement("option");
        optionSelect.value = "";
        optionSelect.text = "Select option";
        selectElement.appendChild(optionSelect);

        for (var i = 0; i < menuLists.length; i++) {
            var option = document.createElement("option");
            option.value = menuLists[i].name?.toLowerCase();
            option.text = menuLists[i].name;
            selectElement.appendChild(option);
        }

        document.body.appendChild(h3Element);
        document.body.appendChild(selectElement)
        var flag = false
        document.getElementById('select').addEventListener('change', (e) => {

            if (menuLists.some(item => item.name.toLowerCase() === e.target.value.toLowerCase())) {
                if (e.target.value === "coffee") {
                    
                    if (!flag) {
                        const selectSubElement = document.createElement('SELECT')
                        selectSubElement.setAttribute("id", "select-sub")

                        menuLists[menuLists.findIndex(item => item.name.toLowerCase() === e.target.value)]?.type.forEach((item) => {
                            var option = document.createElement("option");
                            option.value = item.toLowerCase();
                            option.text = item;
                            selectSubElement.appendChild(option);
                        })
                        flag = true
                        document.body.appendChild(selectSubElement)
                    }
                }
            }
            else if (e.target.value = "") {
                alert('Please select option!')
            }
            else {
                alert('We are not accepting this order right now!')
            }

        })
    }
    startShop() {
        const h1Element = document.createElement('h1')
        h1Element.innerHTML = `Welcome to the ${this.shopName}!`
        document.body.appendChild(h1Element);
        this.orderMenu()
    }
}
const coffeHouse = new Shop('Coffee Shop')
coffeHouse.startShop()
