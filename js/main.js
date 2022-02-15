//functional operaations

function getinpVal(inp_mny) {
    const inp_in_nm = parseFloat(document.getElementById(inp_mny).value);
    return inp_in_nm;
}
function getstatVal(stat_mny) {
    const stat_in_nm = parseFloat(document.getElementById(stat_mny).innerText);
    return stat_in_nm;
}

function getUpdate(id, cur_stat, inp, isAdd) {
    if (isAdd == true) {
        document.getElementById(id).innerText = (cur_stat + inp);
    }
    else {
        document.getElementById(id).innerText = (cur_stat - inp);
    }

}

function getClear(id) {
    document.getElementById(id).value = "";
}

function logout(){
    window.location.href = "index.html";
}


document.getElementById("dipo_btn").addEventListener("click", function () {

    //diposit update
    const dip_in = getinpVal("deposit_inp");

    //balance update    

    const balan_stat = getstatVal("balance_val")

    const dip_stat = getstatVal("diposit_val");

    if (dip_in > 0) {
        getUpdate("diposit_val", dip_stat, dip_in, true)
        getUpdate("balance_val", balan_stat, dip_in, true)
    }
    else {
        alert("Invalid Diposit Amount!")
    }


    getClear("deposit_inp")



})


//withdraw operation

document.getElementById("withd_btn").addEventListener("click", function () {
    const with_in = getinpVal("withdraw_inp");

    const with_stat = getstatVal("withdraw_val");

    const balan_stat = getstatVal("balance_val");
    if (with_in > 0 && balan_stat >= with_in) {
        getUpdate("balance_val", balan_stat, with_in, false)

        getUpdate("withdraw_val", with_in, with_stat, true)
    }
    else {
        alert("Invalid Withdraw Amount!")
    }


    getClear("withdraw_inp");
})

document.getElementById("logoutbtn").addEventListener("click",function(){
    logout();
})