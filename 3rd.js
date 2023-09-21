var loanAmmount=document.getElementById("home-loan");
var interestRate=document.getElementById("interest-rate");
var loanTenure=document.getElementById("loan-tenure");
document.getElementById("homeloan").value=parseFloat(loanAmmount.value).toLocaleString('en-US');
document.getElementById("interestrate").value=parseFloat(interestRate.value);
document.getElementById("loantenure").value=parseFloat(loanTenure.value);
var p=parseFloat(loanAmmount.value);
var rn=parseFloat(interestRate.value);
var n=parseFloat(loanTenure.value);
calculate(p,rn,n);
function loanam(){
    document.getElementById("homeloan").value=parseFloat(loanAmmount.value).toLocaleString('en-US');
    p=parseFloat(loanAmmount.value);
    calculate(p,rn,n);
}

function irate(){
    document.getElementById("interestrate").value=parseFloat(interestRate.value);
    rn=parseFloat(interestRate.value);
    calculate(p,rn,n);
}

function ltenure(){
    document.getElementById("loantenure").value=parseFloat(loanTenure.value);
    n=parseFloat(loanTenure.value);
    calculate(p,rn,n);
}

function calculate(p,rn,n){
    if(p==0)
    {
        document.getElementById("loanemi").innerText=0;
        document.getElementById("tipp").innerText=0;
        document.getElementById("tpp").innerText=0;
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        // Draw the chart and set the chart values
        function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Ammount', 'Rupee'],
        ['Principal Loan Ammount', 0],
        ['Total Interest', 0]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title':'Break-up of Total Payment', 'height':300,'backgroundColor': 'transparent'};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        }
    }
    else{
        n=n*12;
        var r=(rn/12)/100;
        var loanemi=p*r*(((1+r)**n)/(((1+r)**n)-1));
        var tip=loanemi*n-p;
        var totalPayment=loanemi*n;
        var Principalloanammount=totalPayment-tip;
        // console.log("emi"+Math.round(loanemi));
        // console.log("titp"+Math.round(tip));
        // console.log("total Pay"+Math.round(totalPayment));
        document.getElementById("loanemi").innerText=Math.round(loanemi).toLocaleString('en-US');
        document.getElementById("tipp").innerText=Math.round(tip).toLocaleString('en-US');
        document.getElementById("tpp").innerText=Math.round(totalPayment).toLocaleString('en-US');

        //update or call google charts
        // Load google charts
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        // Draw the chart and set the chart values
        function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Ammount', 'Rupee'],
        ['Principal Loan Ammount', Math.round(Principalloanammount)],
        ['Total Interest', Math.round(tip)]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title':'Break-up of Total Payment', 'height':300,'backgroundColor': 'transparent',colors: ['#88A825','#ED8C2B'],legend: { position: "bottom" }};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        }
    }
    
}


function hmchange(){
    var val1=document.getElementById("homeloan").value;
    loanAmmount.value=parseFloat(val1);
    p=parseFloat(val1);
    calculate(p,rn,n);
}

function irchange(){
    var val2=document.getElementById("interestrate").value;
    interestRate.value=parseFloat(val2);
    nr=parseFloat(val2);
    calculate(p,rn,n);
}

function ltchange(){
    var val3=document.getElementById("loantenure").value;
    loanTenure.value=parseFloat(val3);
    n=parseFloat(val3);
    calculate(p,rn,n);
}

function homeloanchange(){
    //alert("range is changed");
    document.getElementById("chngText").innerText="Home Loan Amount";
    loanAmmount.value=5000000;
    interestRate.value=8;
    loanTenure.value=20;
    document.getElementById("homeloan").value=5000000;
    document.getElementById("interestrate").value=8;
    document.getElementById("loantenure").value=20;
    p=loanAmmount.value;
    nr=interestRate.value;
    n=loanTenure.value;
    calculate(p,nr,n);
    loanAmmount.setAttribute("min",0);
    loanAmmount.setAttribute("max",20000000);
    loanAmmount.setAttribute("step",100000);
    interestRate.setAttribute("min",5);
    interestRate.setAttribute("max",20);
    loanTenure.setAttribute("min",1);
    loanTenure.setAttribute("max",30);
    loanTenure.setAttribute("step",0.5);
}

function personalloanchange(){
    //alert("personal loan changed");
    document.getElementById("chngText").innerText="Personal Loan Amount";
    loanAmmount.value=750000;
    interestRate.value=11;
    loanTenure.value=3;
    document.getElementById("homeloan").value=750000;
    document.getElementById("interestrate").value=11;
    document.getElementById("loantenure").value=3;
    p=loanAmmount.value;
    nr=interestRate.value;
    n=loanTenure.value;
    calculate(p,nr,n);
    loanAmmount.setAttribute("min",0);
    loanAmmount.setAttribute("max",3000000);
    loanAmmount.setAttribute("step",10000);
    interestRate.setAttribute("min",5);
    interestRate.setAttribute("max",25);
    loanTenure.setAttribute("min",1);
    loanTenure.setAttribute("max",5);
    loanTenure.setAttribute("step",0.25);
}

function carloanchange(){
    //alert("Car loan changed");
    document.getElementById("chngText").innerText="Car Loan Amount";
    loanAmmount.value=400000;
    interestRate.value=8.5;
    loanTenure.value=5;
    document.getElementById("homeloan").value=400000;
    document.getElementById("interestrate").value=8.5;
    document.getElementById("loantenure").value=5;
    p=loanAmmount.value;
    nr=interestRate.value;
    n=loanTenure.value;
    calculate(p,nr,n);
    loanAmmount.setAttribute("min",0);
    loanAmmount.setAttribute("max",2000000);
    loanAmmount.setAttribute("step",10000);
    interestRate.setAttribute("min",5);
    interestRate.setAttribute("max",20);
    loanTenure.setAttribute("min",1);
    loanTenure.setAttribute("max",7);
    loanTenure.setAttribute("step",0.25);
}