bod=document.getElementsByTagName("tbody")[0];
lines=bod.getElementsByTagName("tr");
function sumseven(a, b) {
    c = parseFloat(b.getElementsByTagName("td")[6].innerHTML);
    d = parseFloat(b.getElementsByTagName("td")[2].innerHTML);
    if (c && d) {return a+c;}
    else {return a;};
};
function sumsix(a, b) {
    c = parseFloat(b.getElementsByTagName("td")[5].innerHTML);
    if (c) {return a+c;}
    else {return a;};
};
function sumss(a, b) {
    c = parseFloat(b.getElementsByTagName("td")[4].innerHTML);
    if (c) {return a+c;}
    else {return a;};
};
function sumtemp(a, b) {
    c = parseFloat(b.getElementsByTagName("td")[4].innerHTML.split("(")[1]);
    if (c) {return a+c;}
    else {return a;};
};
arr=Array.from(lines);
arr[0] = parseFloat(lines[0].getElementsByTagName("td")[6].innerHTML);
zm = arr.reduce(sumseven);
arr[0] = parseFloat(lines[0].getElementsByTagName("td")[5].innerHTML);
zt = arr.reduce(sumsix);
arr[0] = parseFloat(lines[0].getElementsByTagName("td")[4].innerHTML);
zss = arr.reduce(sumss);
arr[0] = parseFloat(lines[0].getElementsByTagName("td")[4].innerHTML.split("(")[1]);
ztemp = arr.reduce(sumtemp);
console.log("autonomous miles: " + zm.toFixed(2) + "\n" + 
"TKOs: " + zt + "\n" +
"SS: " + zss +"\n"+
"temp faults: " + ztemp);
