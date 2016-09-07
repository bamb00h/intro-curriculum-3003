'use strict';
const memo = new Map();
memo.set(1, 0);
memo.set(2, 0);
memo.set(3, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    // a=0;b=1;c=1;for(i=0;i<n;i++){[a,b,c]=[b,c,a+b+c]}
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 1; i <= length; i++) {
    console.log(trib(i));
}
