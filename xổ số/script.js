var dem = 0
function btn () {
    var n = document.getElementById("myNumber").value
    console.log(n)
    var random = Math.floor(Math.random() * 11); 
    console.log(random)
    
        dem += 1
        console.log(dem)
    if((n >= 0) && (n <= 10)){
        if(n == random){
            alert('Chúc mừng bạn, bạn là người chiến thắng');
            document.getElementById("myBtn").removeEventListener("click", btn);
        }else{
            alert(`Sai rồi! Kết quả là ${random}, mời bạn chơi lại`)
        }
    }else{
        alert('Nhập số từ 0 đến 10')
    }
    if ( dem == 3 ){
        alert('Bạn đã hết lượt chơi')
        document.getElementById("myBtn").removeEventListener("click", btn);
    }
}
document.getElementById("myBtn").addEventListener("click", btn);
