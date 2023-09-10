
 function validation(){
    let u = document.pop.user;
    let m = document.pop.mail;
    let n = document.pop.num;


    if(u.value.length == 0 || m.value.length == 0 || n.value.length == 0 ){
        if(u.value.length == 0){
            printError("errName","This section must be filled");
            u.style.borderColor = "red";
            u = prompt("Enter The Name Here  !");
            console.log(u);
            if(u != ""){
                document.getElementsByName("user")[0].value = u;
            }
        }
        else{
            printError("errName","");
            u.style.borderColor = "black";
        }
        if(m.value.length == 0){
            printError("errMail","This Section Must be Filled");
            m.style.borderColor= "red";
            m = prompt("Enter The Mail Here  !");
            console.log(m);
            if(u != ""){
                document.getElementsByName("mail")[0].value = m;
            }
        }else{
            printError("errMail","");
            m.style.borderColor = "black";
        }
        if(n.value.length == 0){
            printError("errNum","This Section Must Be Filled");
            n.style.borderColor = "red";
             n= prompt("Enter The Number Here  !");
            console.log(n);
            if(n != ""){
                document.getElementsByName("num")[0].value = n;
            }
        }
        else{
            printError("errNum","");
            n.style.borderColor = "black";
        }
    }
    else{
        printError("errName","");
        printError("errMail","");
        printError("errNum","");
    }

    function printError(elementId,elementData){
        return document.getElementById(elementId).innerText = elementData;
        }
        
        var g = document.pop.gender;
        
        for (var i = 0; i < g.length; i++) {
             if (g[i].checked){
                break;
            }
        }
        if (i == g.length){
            alert("Please Check Any Of The One Option !");
        }
        // confirm(Are You Sure! You Want To Submit The Details );
}