console.log("==================================step1=========================================");
function display()
{
console.log("My favourite language is JavaScript");
}
display();
function print()
{
    console.log("Hello World");
}
print();
console.log("==================================step2=========================================");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("Personals details are:");
    console.log("First Name is:",firstName);
    console.log("Last Name is:",lastName);
    console.log("College Name is:",collegeName);
    
}
personalDetails('Kanchan','Choudhari','D.Y Patil college of engineering,Akurdi');
console.log("==================================step3=========================================");
function swapValues(n1,n2)
{
    console.log("Before Swapping Elements are:");
    console.log("n1:",n1);
    console.log("n2:",n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After Swapping Elements are:");
    console.log("n1:",n1);
    console.log("n2:",n2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("==================================step4=========================================");
function addThreeValues(val1,val2,val3)
{
console.log("Given numbers are:",val1,val2,val3);
var result=val1+val2+val3;
console.log("Addition of three numbers are:",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

