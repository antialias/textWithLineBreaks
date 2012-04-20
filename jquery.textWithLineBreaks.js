/*global jQuery,window*/
(function ($) {
    'use strict';
    $.fn.textWithLineBreaks = function () {
        var onnewline = true,
            f = function (n) {
                var ret = "";
                $(n).contents().each(function (i, c) {
                    var content = "";
                    if (c.nodeType === 3) {
                        content = $(c).text();
                        onnewline = false;
                    } else {
                        if ($(c).is("br")) {
                            content = "\n";
                            onnewline = true;
                        } else {
                            if ("block" === $(c).css('display') && !onnewline) {
                                content = "\n";
                                onnewline = true;
                            }
                            content = content + f(c);
                        }
                    }
                    ret = ret + content;
                });
                return ret;
            };
        return f(this.first());
    };
}(jQuery));
