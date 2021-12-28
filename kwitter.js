function addUser(){
    user_name = document.getElementById("user_name").value;

    if (user_name.length == 0){
        document.getElementById("user_name").placeholder = "please enter your username";
    }
    else {
        localStorage.setItem("user_name", user_name);
        window.location = "kwitter_room.html";
    }
   
}
