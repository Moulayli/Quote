
function Main(url="https://luha.alwaysdata.net/api/?hour=1") {
    
    let req = new XMLHttpRequest();
    //let url="https://luha.alwaysdata.net/api/?hour=1";
    req.open('GET', url);
    req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
        let data = JSON.parse(req.responseText);
        let citation=data.citation;
        document.getElementById('citation').innerHTML=" \" "+citation;
        document.getElementById('date').innerHTML=" -La citation du jour " ;
        document.getElementById('recharche').innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='currentColor' class='bi bi-arrow-counterclockwise' viewBox='0 0 16 16' id='recharge_citation'><path fill-rule='evenodd' d='M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z'/><path d='M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z'/></svg>";
        document.getElementById('recharge_citation').addEventListener('click' ,function () {
            Main('https://luha.alwaysdata.net/api/');
            
        })
        
    }
    }
    req.send();

}
document.addEventListener('DOMContentloaded',Main())