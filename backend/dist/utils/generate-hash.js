"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomHash = void 0;
const randomHash = function (len) {
    let options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+';
    let ans = '';
    for (let i = 0; i <= len; i++) {
        ans += options[Math.floor(Math.random() * len)];
    }
    return ans;
};
exports.randomHash = randomHash;
