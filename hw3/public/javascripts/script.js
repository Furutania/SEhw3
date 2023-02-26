//Checks if message has the keywork vegam
//If not submit order and display details
//parametrs: None
//Return: None
function checkMessage(){
    let notes = document.getElementById("specialOrder").value;
    const d = new Date();
    if (notes.includes("vegan")){
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
        message = "Thanks for placing your order: \n" + quantity + " " + flavor + " Cheescake(s) \n Notes: " + notes;
        document.getElementById("notes").innerText = message;
        //calling post, to with order info and date
        $.post('/neworder', {month: d.getMonth(), day: d.getDate(), quantity: quantity,
            topping: flavor, notes: notes}, function(result) {
            console.log(result);
        });

    }



}
//Changes text to selected value
//Parameters: Value selected
//Return: None
function changeMonth(month){
    document.getElementById("monthDrop").innerText = month;
    listId = ["cherryCount", "chocoCount", "plainCount"]
    $.post('/orders', {month: month}, function(result) {
        for (let i = 0; i < result.length;i++){
            document.getElementById(listId[i]).innerHTML  = result[i]["quantity"] + " " + result[i]["topping"];
        }
    });
}