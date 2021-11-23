function clearScreen() {
    document.getElementById("result").value = "0";
   }
   function Clear() {
       var input = document.getElementById("result").value
       document.getElementById('result').value = input.substring(0, input.length - 1);
       
   }
   
   // This function display values
  
function display(value)
{
    
    document.getElementById("result").value +=value;
    


}
   
   function add() {
    var input = document.getElementById('result').value;
    if(input.includes('+'))
    {
        var [a,b] = input.split('+');
        document.getElementById('result').value = parseInt(a) + parseInt(b);
        if(document.getElementById('result').value.length > 8)
        {
            document.write('ERR');
            alert("output exceeding 8 digits");
        }
    }
    else if(input.includes('-'))
    {
        var [a,b] = input.split('-');
        document.getElementById('result').value = parseInt(a) - parseInt(b);
    }
    else if(input.includes('/'))
    {
        var [a,b] = input.split('/');
        document.getElementById('result').value = parseInt(a) / parseInt(b);
    }
    else
    {
        var [a,b] = input.split('*');
        document.getElementById('result').value = parseInt(a) * parseInt(b);
    }
    }
    
    
  
   // This function evaluates the expression and return result
   