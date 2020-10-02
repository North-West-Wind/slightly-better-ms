const superms = require("ms");

module.exports = function (val, options) {
    if (typeof val === "string" && superms(val) === undefined) {
        var mses = [];
        let temp = "";
        let last = "";
        for (let i = 0; i < val.length; i++) {
            let char = val.substr(i, 1);
            if (!/\d/.test(last) && /\d/.test(char) && i != 0) {
                if(superms(temp) === undefined) return undefined;
                mses.push(superms(temp));
                temp = "";
            }
            temp += char;
            if(val[i+1] === undefined) mses.push(superms(temp));
        }
        return mses.reduce((acc, c) => acc + c);
    } else return superms(val, options);
}