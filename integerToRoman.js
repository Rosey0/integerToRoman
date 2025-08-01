/*
* Integer to Roman
*/

var romanToInt = function(s) {
    var arr = [['I','V'],['X','L'],['C','D'],['M','']];
    let ans = "";
    let str = Number(s);
    let len = s.length;

    for (let i=1; i<=len; i++){
        let cur = len - i;
        let div = 10 ** cur; 
        let num = Math.floor(str/div) % 10;

        if (num === 9){
            ans += arr[cur][0] + arr[cur+1][0];
        }
        else if (num >= 5) {
            ans += arr[cur][1] + arr[cur][0].repeat(num-5);
        }
        else if (num === 4) {
            ans += arr[cur][0] + arr[cur][1];
        }
        else {
            ans += arr[cur][0].repeat(num);
        }
    }
    return ans;
};

console.log(romanToInt('49'));      // Output: XLIX
console.log(romanToInt('89'));      // Output: LXXXIX
console.log(romanToInt('490'));     // Output: CDXC
console.log(romanToInt('1000'));    // Output: M

