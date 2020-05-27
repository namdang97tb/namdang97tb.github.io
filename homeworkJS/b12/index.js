// /bai 12 tao text box tinh tien

function clickSend() {
    let quantity = document.getElementById("quantity").value
    let price = document.getElementById("price").value
    let totalPricer = quantity * price
    if (isNaN(totalPricer)) {
        alert("Số liệu sai. Vui lòng nhập lại!")
    } else {
        let showtotalPrice = document.getElementById("totalPrice")
        showtotalPrice.innerHTML = "Thành tiền: " + totalPricer
    }
}