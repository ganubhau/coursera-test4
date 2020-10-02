var x = 0;
var j;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {  
     var res = array[y].charAt(0);
     if( res == j)
       {
         e+= "Goodbye " + array[y] + "<br/>";
       }
     else
     {
          e+= "Hello " + array[y] + "<br/>";
     }
     
   }
   document.getElementById("Result").innerHTML = e;
}