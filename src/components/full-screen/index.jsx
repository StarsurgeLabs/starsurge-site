"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = require("@emotion/styled");
var FullScreen = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  position: relative;\n  width: 100%;\n"], ["\n  height: 100vh;\n  position: relative;\n  width: 100%;\n"])));
FullScreen.header = styled_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100vh;\n  position: relative;\n  width: 100%;\n"], ["\n  height: 100vh;\n  position: relative;\n  width: 100%;\n"])));
FullScreen.content = styled_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n"], ["\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n"])));
exports.default = FullScreen;
var templateObject_1, templateObject_2, templateObject_3;
