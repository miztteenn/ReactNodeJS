import $ from "jquery";

$(document).ready(function(){
    $(":submit").click(function(){
        let urls = "http://localhost:8080/login/submit/";
        let username = $("#username").val();
        let password = $("#password").val();
        $.ajax({
            type: "POST",
            url: urls,
            datatype: "json",
            data: {
                username : username,
                password : password
            },
            success: (res) => {
                alert("success");
                console.log("Hula");
                console.log(res);
                //console.log("node.js /callURL")
            },
            error: (res) => {
                console.log(res);
            }
          });
    });
  });