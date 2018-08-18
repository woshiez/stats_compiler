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
function totime(a) {
    fen = parseFloat(a.split(":")[0]);
    miao = parseFloat(a.split(":")[1]);
    return fen * 60 + miao;
};
function sumtime(a, b) {
    return a + totime(b.getElementsByTagName("td")[2].innerHTML);
};
arr=Array.from(lines);
temp = parseFloat(lines[0].getElementsByTagName("td")[6].innerHTML);
arr[0] = (temp ? temp : 0);
zm = arr.reduce(sumseven);
temp = parseFloat(lines[0].getElementsByTagName("td")[5].innerHTML);
arr[0] = (temp ? temp : 0);
zt = arr.reduce(sumsix);
temp = parseFloat(lines[0].getElementsByTagName("td")[4].innerHTML);
arr[0] = (temp ? temp : 0);
zss = arr.reduce(sumss);
temp = parseFloat(lines[0].getElementsByTagName("td")[4].innerHTML.split("(")[1]);
arr[0] = (temp ? temp : 0);
ztemp = arr.reduce(sumtemp) - zss;
arr[0] = totime(lines[0].getElementsByTagName("td")[2].innerHTML);
ztime = arr.reduce(sumtime);
zsec = ztime % 60;
zmin = parseInt((ztime % 3600) / 60);
zhour = parseInt((ztime % 86400) / 3600);
zday = parseInt(ztime / 86400);
console.log("total time: " + zday + "d " + zhour + "h " + zmin + "m " + zsec + "s (" + ztime + "s)\n" + "autonomous miles: " + zm.toFixed(2) + "\n" + 
"TKOs: " + zt + "\n" +
"SS: " + zss +"\n"+
"temp faults: " + ztemp);
