function nameCard ()
{
    const Name = document.querySelector('#Name').value;
    const Age = parseInt(document.querySelector('#age').value,10);

    const Output = document.querySelector('.output');
    if(!Name)
    {
        Output.innerHTML = "Please Enter your name";
        return;
    }
    if(isNaN(Age))
    {
        Output.innerHTML = "Please Enter Your age";
        return;
    }
    if(Age<=19)
    {
        Output.innerHTML = `${Name} you can buy child ticket`;
    }
    else
    {
        Output.innerHTML = `${Name} you can buy adult ticket`
    }
}

function FoodCard()
{
    const Name = document.querySelector('#Name1').value;
    const Food =document.querySelector('#food').value;

    const Output = document.querySelector('.output1');
    if(!Name)
        {
            Output.innerHTML = "Please Enter your name";
            return;
        }
    if(!Food)
        {
         Output.innerHTML = "Please Enter your Food name";
         return;
        }
    Output.innerHTML = `${Name} you like ${Food}`;
}

