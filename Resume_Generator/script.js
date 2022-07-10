function addnewWEField(){
   // console.log("Adding new field");

   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-3");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder"," Enter here");

   let weOb= document.getElementById("we");
   let weAddButtonOb= document.getElementById("weAddButton");
   
   weOb.insertBefore(newNode, weAddButtonOb);
}

function addnewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder"," Enter here");
 
    let aqOb= document.getElementById("aq");
    let aqAddButtonOb= document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv
function generateCV()
{
    // console.log("generating CV");

    let nameField=document.getElementById("nameField").value;
    
    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML=nameField;

    // direct

    document.getElementById("nameT2").innerHTML=nameField;

    // contact

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // date of birth

    document.getElementById("dobT").innerHTML=document.getElementById("dobField").value;
    
    // address

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // Mail

    document.getElementById("gmT").innerHTML=document.getElementById("gmField").value;

    // insta

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    // linkedln

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

     // hobbies

     document.getElementById("hoT").innerHTML=document.getElementById("hoField").value;

    // objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work experience

    let wes=document.getElementsByClassName("weField")

    let str="";

    for(let e of wes)
    {
        str=str+ `<li> ${e.value} </li>`
    }

    document.getElementById("weT").innerHTML=str;

    //academic field

    let aqs=document.getElementsByClassName("eqField")

    let str1="";

    for(let e of aqs)
    {
        str1+=`<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    // code for setting image

    let file=document.getElementById("imgField").files[0]

    console.log(file);

    let reader=new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result); 

    // set the img to template

    reader.onloadend=function()
    {
        document.getElementById('imgTemplate').src=reader.result;
    };

    document.getElementById("cv-form").style.display="none";

    document.getElementById("cv-template").style.display="block";


}

// print CV

function printCV()
{
    window.print();
}



