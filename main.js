
function padIt(str,n) {
    let arr = [];
    let star ='*'

    for (let i=0;i<n;i++) {
        arr.push(star);
    }

    if (n%2==0) {
        arr.splice(n/2,0,str);
    } else if (n%2!==0) {
        arr.splice(n%2+n/2,0,str);
    }
    return arr.join('');
}
