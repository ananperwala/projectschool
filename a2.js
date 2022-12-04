function func() {
    var x = document.getElementById("tableau");
    var y = document.getElementById("alt");
    x.style.display = "block";
    y.style.display="none";
}
function data(){
    var p;
    const names = ["Ananya","Shriya","Kavya","Kiran","Nameera"];
    const sno=[1,2,3,4,5];
    var r;
    for(r=0;r<5;r++){
        document.getElementById(10+r).innerHTML=names[r];
        document.getElementById(r).innerHTML=sno[r];
    }
}
