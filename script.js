//Declare Varibles

const Pizzas = ["Cheese", "Peperonie", "Sasage","Barbaque","Cannadian Bacon","Hawian"];

window.addEventListener ('load' , onLoad);

var phoneNum =  /\d\d\d[-.]\d\d\d[-.]\d\d\d\d/;

function onLoad(){
    const Pnum = document.getElementById("PizzaNumber");
    const Ptype = document.getElementById("PizzaSelect");
    for (let i = 0; i < 10; i++)
    {
        const numOpt =  document.createElement("option");
        numOpt.value = i + 1;
        numOpt.text = i + 1;
        Pnum.appendChild(numOpt)
    }
    for (let i = 0; i < Pizzas.length; i++)
    {
        const typeOpt = document.createElement("option");
        typeOpt.value = Pizzas[i];
        typeOpt.text = Pizzas[i];
        Ptype.appendChild(typeOpt)
    }
}   

function ValidationCheck(Order)
{
    var Valid = true;

    if (Order.name.value == "")
    {
        Valid = false;
        Order.name.focus();
        Order.name.style.backgroundColor = "#ffccff";
        var name = document.getElementById('nameError');
        name.style.display = "inline"
        name.innerHTML ="* please enter your name"
    }
    else if (Order.name.value.length <= 6)
    {
        Valid = false;
        Order.name.focus();
        Order.name.style.backgroundColor = "#ffccff";
        var name = document.getElementById('nameError');
        name.style.display = "inline";
        name.innerHTML ="* name must be more than 6 Chara long";
    }
    else
    {
        Order.name.style.backgroundColor = "white";
        var name = document.getElementById('nameError');
        name.style.display = "none";
        name.innerHTML ="* good";
    }

    if (phoneNum.test(Order.phone.value))
    {
        name.style.display = "none";
        name.innerHTML ="* good";
        Order.phone.style.backgroundColor = "white";
    }
    else 
    {
        Valid = false;
        Order.phone.focus();
        Order.phone.style.backgroundColor = "#ffccff";
        var phone = document.getElementById('phoneError');
        phone.style.display = "inline";
        phone.innerHTML ="* please input a valid phone number";

    }
    console.log(Valid);
}

