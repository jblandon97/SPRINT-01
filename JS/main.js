//CAJERO AUTOMÁTICO

class user {
    _name;
    _ID;
    _password;
    _userType;

    constructor(nameIn, IDIn, passwordIn, userTypeIn) {
        this.name = nameIn;
        this.ID = IDIn;
        this.password = passwordIn;
        this.userType = userTypeIn;
    }




}

let users = [
    new user("jonathan", "1020477218", "jonathan97", 1),
    new user("carlos", "1035677215", "soyuribista", 1),
    new user("juan", "1056799218", "blanquito46", 2),
    new user("julian", "1020687218", "tresdecorazones", 2),
    new user("luis", "1020777215", "luisitocomunica888", 2),
    new user("jonathan", "1020615320", "phpmyadmin", 2),
];

function ATM(_5In, _10In, _20In, _50In, _100In,) {

    this._5 = _5In
    this._10 = _10In
    this._20 = _20In
    this._50 = _50In
    this._100 = _100In
    this.money5 = this._5 * 5000
    this.money10 = this._10 * 10000
    this.money20 = this._20 * 20000
    this.money50 = this._50 * 50000
    this.money100 = this._100 * 100000

    this.saveMoney = function () {
        this.money = this.money5 + this.money10 + this.money20 + this.money50 + this.money100;
        return this.money;
    }

}




//LOGIN

let userType, userName;
let check = function (ID, password) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].ID == ID && users[i].password == password) {
            if (users[i].userType == 1) {
                userType = "administrador"
            }
            if (users[i].userType == 2) {
                userType = "cliente"
            }
            userName = users[i].name;
            return true;
        }
    }
    return false;
}


let setMoney = function () {
    let recharges = [];
    alert("El cajer tiene actualmente " + money + "$")
    let _5 = parseInt(prompt("Cuantos billetes de 5000 $ desea cargar"));
    let _10 = parseInt(prompt("Cuantos billetes de 10000 $ desea cargar"));
    let _20 = parseInt(prompt("Cuantos billetes de 20000 $ desea cargar"));
    let _50 = parseInt(prompt("Cuantos billetes de 50000 $ desea cargar"));
    let _100 = parseInt(prompt("Cuantos billetes de 100000 $ desea cargar"));
    let recharge = new ATM(_5, _10, _20, _50, _100,);
    recharges.push(recharge);
    for (let i = 0; i < recharges.length; i++) {
        money += recharges[i].saveMoney();
    }
    alert(money);
}

function getMoney(money) {
    let array = [];
    if (money == 0) {
        alert("Cajero en mantenimiento, vuelva pronto");
    } else {
        let withdrawal = parseInt(prompt("cantidad deseada a retirar ?"));
        withdrawal = Math.floor(withdrawal / 1000) * 1000;
        if (withdrawal > money) {
            withdrawal = money;
        }
        alert("El cajeto le puede entregar " + withdrawal + " $");
        money -= withdrawal;
        alert("El cajeto tiene ahora " + money + " $");

        return money;
    }

}



let ID, password;
let input = false;
let money = 0;
let numberOfBillsForDenomination = 0;

while (!input) {
    ID = prompt("Ingrese su número de documento");
    password = prompt("Ingrese su contraseña");
    if (!check(ID, password)) {
        alert("usted no se encuentra en el sistema o la contraseña \
        y/o el usuario son incorrectos")
    } else {
        if (userType == "administrador") {
            alert("Bienvenido admin")
            setMoney();

        }
        else if (userType == "cliente") {
            alert("bienvenido sr(a) " + userName)
            money = getMoney(money);

        }
        let answer = prompt("Desea realizar otra operación ? Conteste solo si o no");
        if (answer.toUpperCase() == "SI") {
            input = false;
        } else {
            input = true;
        }
    }
}


