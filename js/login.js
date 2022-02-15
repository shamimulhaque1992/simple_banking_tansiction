function valuTaker(inpidem, inpidps, email, password) {
    document.getElementById(inpidem).addEventListener("keyup", function (e) {
        if (e.target.value == email) {
            document.getElementById(inpidps).addEventListener("keyup", function (e) {
                if (e.target.value == password) {
                    document.getElementById("log-btn").removeAttribute("disabled")
                    document.getElementById("log-btn").addEventListener("click", function (){
                        window.location.href = "panel.html"
                    })
                }
                else {
                    document.getElementById("log-btn").setAttribute("disabled", true);
                }
            })
        }
        else {
            document.getElementById("log-btn").setAttribute("disabled", true);
        }
    })

}


valuTaker("inp-em", "inp-ps", "khandoker15-1992@diu.edu.bd", "admin")