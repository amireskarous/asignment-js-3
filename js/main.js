var productNameInput = document.getElementById("pName")
var productpriceInput = document.getElementById("price")



var allproduct = [];

productName.onkeyup=function(){
    var nameRajex=/^[a-z]{3,}$ /
    if(!nameRajex.test(productName.value)){
        submitBtn.disabled="true"
    }
    else{
        submitBtn.removeAttribute("disabled")
    }
}
if (localStorage.getItem("allprpduct") !=null){
    allproduct = JSON.parse(localStorage.getItem("allproduct"))
}
function Submit(){
    
    var product = {
        name : productNameInput.value,
        price : productpriceInput.value,
    };
    allproduct.push(product)
    display();
    clearForm()
}
function clearForm(){
    productNameInput.value="";
    productpriceInput.value="";

}



function display(){
    var cartoona =``;
    for ( var i = 0; i< allproduct.length; i++){
        cartoona +=
        `
        <tr>
        <td> ${allproduct[i].name}</td>
        <td> ${allproduct[i].price}</td>
        <td><button onclick="updateproduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("tBody").innerHTML = cartoona
}

function deleteproduct(idx){
    allproduct.splice(idx,1);
    localStorage.getItem("allproduct" , JSON.stringify(allproduct))
    display();
}
function updateproduct(idx){
    productNameInput.value = allproduct[idx].name;
    productpriceInput.value =allproduct[idx].price;

    document.getElementById('mainBtn').innerHTML ="update";
    display();


}