"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
function compact(source) {
    return source.filter((s) => !!s);
}
function combine(opts = "", ...params) {
    let options = { joinWith: " " };
    if (typeof opts === "object") {
        options = opts;
    }
    else {
        params = [opts, ...params];
    }
    const { joinWith } = options;
    return compact(params).join(joinWith);
}
exports.combine = combine;
