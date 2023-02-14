//Checks if message has the keywork vegam
//If not submit order and display details
//parametrs: None
//Return: None
function checkMessage(){
    text = document.getElementById("specialOrder").value;
    if (text.includes("vegan")){
        alert("ATTENTION: All our cheesecakes contain dairy");
    }
    else{

        //Get values from text box, radio, and drop down
        quantity = $('#quantity').val();
        flavor = document.querySelector("input[name='topping']:checked").value;



        //Hiding the Old info 
        textBox = document.getElementById("specialOrder");
        textBox.style.display = "none";
        
        button = document.getElementById("orderButton");
        button.style.display = "none";
        orderNotes = document.getElementById("orderNotes");
        orderNotes.style.display = "none";
        
        //Creating the message to be displayed
        message = "Thanks for placing your order: \n" + quantity + " " + flavor + " Cheescake(s) \n Notes: " + text;
        document.getElementById("notes").innerText = message;
    }
}
//Changes text to selected value
//Parameters: Value selected
//Return: None
function changeMonth(month){
    var data;
    document.getElementById("monthDrop").innerText = month;
    listId = ["cherryCount", "chocoCount", "plainCount"]
    $.post('/orders', function(result) {
        data = result["data"]
        for (let i = 0; i < data.length;i++){
            document.getElementById(listId[i]).innerHTML  = data[i]["quantity"] + " " + data[i]["topping"];
        }
    })
}