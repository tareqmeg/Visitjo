var food = prompt("do you want try sweets or shawerma ");

while(food !== "sweets" && food !== "shawerma")
{
    food = prompt("do you want try sweets or shawerma ");
}

var itemor ="";
if (food == "sweets")
    {
        itemor =' <img src="https://www.recipegirl.com/wp-content/uploads/2007/03/White-Wedding-Cake-1.jpg" width="300" height="300"> ';

    }
    else if( food == "shawerma")
        {
        itemor = '<img src="https://i.redd.it/4htqspfi6gy31.jpg" width="300" height="600" >';

        }

        
        
        function item (){
            var itemsn = prompt("how many Items do you want?");
            var res ="";
        for (i = 0; i<itemsn; i++)
        {
        res = res + itemor;
        }
        
        document.write(res);
        }
        item();

       function greet(){
            var nameg = prompt("Enter Your NAme Please no worries for upper or lowercase all names will appear in lower case");
             
            var y = nameg.toLowerCase();

            console.log("Hello " + y);

            document.write("Hello " + y );
        }
        greet();
        
