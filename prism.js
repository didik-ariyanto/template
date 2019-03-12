var _0xd2fd = ["Prism", "languages", "hasOwnProperty", "call", "toString", "prototype", "[object Object]", 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code', "querySelectorAll", "highlightElement", "parentNode", "className", "test", "match", "", " ", "replace", " language-", "nodeName", "trim", "textContent", "&gt;", "&lt;", "&amp;", "before-highlight", "run", "hooks", "Worker", "filename", "onmessage", "highlightedCode", "data", "parse", "stringify",
    "innerHTML", "element", "after-highlight", "language", "code", "postMessage", "grammar", "highlight", "tokenize", "Token", "rest", "inside", "lookbehind", "pattern", "length", "lastIndex", "exec", "index", "slice", "push", "apply", "splice", "all", "type", "content", "string", "[object Array]", "join", "span", "token", "comment", "spellcheck", "attributes", "true", "wrap", '="', '"', "<", "tag", ' class="', "classes", '" ', ">", "</", "document", "message", "close", "addEventListener", "script",
    "getElementsByTagName", "src", "data-manual", "hasAttribute", "DOMContentLoaded", "highlightAll", "markup", "entity", "title", "&", "add", "css", "insertBefore", "javascript", "java", 'Created by <a href="http://www.sinaumaneh.zone.id">Didik Ariyanto</a>', "html", "#cpright", "#cpright:visible", "href", "location", "http://www.sinaumaneh.zone.id", "ready", "Ctrl+U", " http://www.sinaumaneh.zone.id/", "keydown", "undefined", "all_shortcuts", "target", "getElementById", "toLowerCase", "event",
    "disable_in_input", "srcElement", "nodeType", "INPUT", "tagName", "TEXTAREA", "keyCode", "which", "fromCharCode", ",", ".", "+", "split", "~", "!", "@", "#", "$", "%", "^", "*", "(", ")", "_", ":", "?", "|", "metaKey", "altKey", "shiftKey", "ctrlKey", "ctrl", "control", "shift", "alt", "meta", "keycode", "propagate", "stopPropagation", "returnValue", "cancelBubble", "preventDefault", "attachEvent", "on", "callback", "detachEvent", "removeEventListener"
];
(function() {
    var _0xdcc3x1$jscomp$0 = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
    var _0xdcc3x2$jscomp$0 = self[_0xd2fd[0]] = {
        languages: {
            insertBefore: function(_0xdcc3x3$jscomp$0, _0xdcc3x4$jscomp$0, _0xdcc3x5$jscomp$0, _0xdcc3x6$jscomp$0) {
                _0xdcc3x6$jscomp$0 = _0xdcc3x6$jscomp$0 || _0xdcc3x2$jscomp$0[_0xd2fd[1]];
                var _0xdcc3x7$jscomp$0 = _0xdcc3x6$jscomp$0[_0xdcc3x3$jscomp$0];
                var _0xdcc3x8$jscomp$0 = {};
                var _0xdcc3x9$jscomp$0;
                for (_0xdcc3x9$jscomp$0 in _0xdcc3x7$jscomp$0) {
                    if (_0xdcc3x7$jscomp$0[_0xd2fd[2]](_0xdcc3x9$jscomp$0)) {
                        if (_0xdcc3x9$jscomp$0 == _0xdcc3x4$jscomp$0) {
                            var _0xdcc3xa$jscomp$0;
                            for (_0xdcc3xa$jscomp$0 in _0xdcc3x5$jscomp$0) {
                                if (_0xdcc3x5$jscomp$0[_0xd2fd[2]](_0xdcc3xa$jscomp$0)) {
                                    _0xdcc3x8$jscomp$0[_0xdcc3xa$jscomp$0] = _0xdcc3x5$jscomp$0[_0xdcc3xa$jscomp$0];
                                }
                            }
                        }
                        _0xdcc3x8$jscomp$0[_0xdcc3x9$jscomp$0] = _0xdcc3x7$jscomp$0[_0xdcc3x9$jscomp$0];
                    }
                }
                return _0xdcc3x6$jscomp$0[_0xdcc3x3$jscomp$0] = _0xdcc3x8$jscomp$0;
            },
            DFS: function(_0xdcc3xb$jscomp$0, _0xdcc3xc$jscomp$0) {
                var _0xdcc3xd$jscomp$0;
                for (_0xdcc3xd$jscomp$0 in _0xdcc3xb$jscomp$0) {
                    _0xdcc3xc$jscomp$0[_0xd2fd[3]](_0xdcc3xb$jscomp$0, _0xdcc3xd$jscomp$0, _0xdcc3xb$jscomp$0[_0xdcc3xd$jscomp$0]);
                    if (Object[_0xd2fd[5]][_0xd2fd[4]][_0xd2fd[3]](_0xdcc3xb$jscomp$0) === _0xd2fd[6]) {
                        _0xdcc3x2$jscomp$0[_0xd2fd[1]].DFS(_0xdcc3xb$jscomp$0[_0xdcc3xd$jscomp$0], _0xdcc3xc$jscomp$0);
                    }
                }
            }
        },
        highlightAll: function(_0xdcc3xe$jscomp$0, _0xdcc3xc$jscomp$1) {
            var _0xdcc3xf$jscomp$0 = document[_0xd2fd[8]](_0xd2fd[7]);
            var _0xdcc3xd$jscomp$1 = 0;
            var _0xdcc3x10$jscomp$0;
            for (; _0xdcc3x10$jscomp$0 = _0xdcc3xf$jscomp$0[_0xdcc3xd$jscomp$1++];) {
                _0xdcc3x2$jscomp$0[_0xd2fd[9]](_0xdcc3x10$jscomp$0, _0xdcc3xe$jscomp$0 === true, _0xdcc3xc$jscomp$1);
            }
        },
        highlightElement: function(_0xdcc3x10$jscomp$1, _0xdcc3xe$jscomp$1, _0xdcc3xc$jscomp$2) {
            var _0xdcc3x11$jscomp$0;
            var _0xdcc3x7$jscomp$1;
            var _0xdcc3x12$jscomp$0 = _0xdcc3x10$jscomp$1;
            for (; _0xdcc3x12$jscomp$0 && !_0xdcc3x1$jscomp$0[_0xd2fd[12]](_0xdcc3x12$jscomp$0[_0xd2fd[11]]);) {
                _0xdcc3x12$jscomp$0 = _0xdcc3x12$jscomp$0[_0xd2fd[10]];
            }
            if (_0xdcc3x12$jscomp$0) {
                _0xdcc3x11$jscomp$0 = (_0xdcc3x12$jscomp$0[_0xd2fd[11]][_0xd2fd[13]](_0xdcc3x1$jscomp$0) || [, _0xd2fd[14]])[1];
                _0xdcc3x7$jscomp$1 = _0xdcc3x2$jscomp$0[_0xd2fd[1]][_0xdcc3x11$jscomp$0];
            }
            if (!_0xdcc3x7$jscomp$1) {
                return;
            }
            _0xdcc3x10$jscomp$1[_0xd2fd[11]] = _0xdcc3x10$jscomp$1[_0xd2fd[11]][_0xd2fd[16]](_0xdcc3x1$jscomp$0, _0xd2fd[14])[_0xd2fd[16]](/\s+/g, _0xd2fd[15]) + _0xd2fd[17] + _0xdcc3x11$jscomp$0;
            _0xdcc3x12$jscomp$0 = _0xdcc3x10$jscomp$1[_0xd2fd[10]];
            if (/pre/i [_0xd2fd[12]](_0xdcc3x12$jscomp$0[_0xd2fd[18]])) {
                _0xdcc3x12$jscomp$0[_0xd2fd[11]] = _0xdcc3x12$jscomp$0[_0xd2fd[11]][_0xd2fd[16]](_0xdcc3x1$jscomp$0, _0xd2fd[14])[_0xd2fd[16]](/\s+/g, _0xd2fd[15]) + _0xd2fd[17] + _0xdcc3x11$jscomp$0;
            }
            var _0xdcc3x13$jscomp$0 = _0xdcc3x10$jscomp$1[_0xd2fd[20]][_0xd2fd[19]]();
            if (!_0xdcc3x13$jscomp$0) {
                return;
            }
            _0xdcc3x13$jscomp$0 = _0xdcc3x13$jscomp$0[_0xd2fd[16]](/&/g, _0xd2fd[23])[_0xd2fd[16]](/</g, _0xd2fd[22])[_0xd2fd[16]](/>/g, _0xd2fd[21])[_0xd2fd[16]](/\u00a0/g, _0xd2fd[15]);
            var _0xdcc3x14$jscomp$0 = {
                element: _0xdcc3x10$jscomp$1,
                language: _0xdcc3x11$jscomp$0,
                grammar: _0xdcc3x7$jscomp$1,
                code: _0xdcc3x13$jscomp$0
            };
            _0xdcc3x2$jscomp$0[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[24], _0xdcc3x14$jscomp$0);
            if (_0xdcc3xe$jscomp$1 && self[_0xd2fd[27]]) {
                var _0xdcc3x15$jscomp$0 = new Worker(_0xdcc3x2$jscomp$0[_0xd2fd[28]]);
                _0xdcc3x15$jscomp$0[_0xd2fd[29]] = function(_0xdcc3x16$jscomp$0) {
                    _0xdcc3x14$jscomp$0[_0xd2fd[30]] = _0xdcc3x18$jscomp$0[_0xd2fd[33]](JSON[_0xd2fd[32]](_0xdcc3x16$jscomp$0[_0xd2fd[31]]));
                    _0xdcc3x14$jscomp$0[_0xd2fd[35]][_0xd2fd[34]] = _0xdcc3x14$jscomp$0[_0xd2fd[30]];
                    if (_0xdcc3xc$jscomp$2) {
                        _0xdcc3xc$jscomp$2[_0xd2fd[3]](_0xdcc3x14$jscomp$0[_0xd2fd[35]]);
                    }
                    _0xdcc3x2$jscomp$0[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[36], _0xdcc3x14$jscomp$0);
                };
                _0xdcc3x15$jscomp$0[_0xd2fd[39]](JSON[_0xd2fd[33]]({
                    language: _0xdcc3x14$jscomp$0[_0xd2fd[37]],
                    code: _0xdcc3x14$jscomp$0[_0xd2fd[38]]
                }));
            } else {
                _0xdcc3x14$jscomp$0[_0xd2fd[30]] = _0xdcc3x2$jscomp$0[_0xd2fd[41]](_0xdcc3x14$jscomp$0[_0xd2fd[38]], _0xdcc3x14$jscomp$0[_0xd2fd[40]]);
                _0xdcc3x14$jscomp$0[_0xd2fd[35]][_0xd2fd[34]] = _0xdcc3x14$jscomp$0[_0xd2fd[30]];
                if (_0xdcc3xc$jscomp$2) {
                    _0xdcc3xc$jscomp$2[_0xd2fd[3]](_0xdcc3x10$jscomp$1);
                }
                _0xdcc3x2$jscomp$0[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[36], _0xdcc3x14$jscomp$0);
            }
        },
        highlight: function(_0xdcc3x17$jscomp$0, _0xdcc3x7$jscomp$2) {
            return _0xdcc3x18$jscomp$0[_0xd2fd[33]](_0xdcc3x2$jscomp$0[_0xd2fd[42]](_0xdcc3x17$jscomp$0, _0xdcc3x7$jscomp$2));
        },
        tokenize: function(_0xdcc3x17$jscomp$1, _0xdcc3x7$jscomp$3) {
            var _0xdcc3x18$jscomp$1 = _0xdcc3x2$jscomp$0[_0xd2fd[43]];
            var _0xdcc3x19$jscomp$0 = [_0xdcc3x17$jscomp$1];
            var _0xdcc3x1a$jscomp$0 = _0xdcc3x7$jscomp$3[_0xd2fd[44]];
            if (_0xdcc3x1a$jscomp$0) {
                var _0xdcc3x9$jscomp$1;
                for (_0xdcc3x9$jscomp$1 in _0xdcc3x1a$jscomp$0) {
                    _0xdcc3x7$jscomp$3[_0xdcc3x9$jscomp$1] = _0xdcc3x1a$jscomp$0[_0xdcc3x9$jscomp$1];
                }
                delete _0xdcc3x7$jscomp$3[_0xd2fd[44]];
            }
            tokenloop: for (_0xdcc3x9$jscomp$1 in _0xdcc3x7$jscomp$3) {
                if (!_0xdcc3x7$jscomp$3[_0xd2fd[2]](_0xdcc3x9$jscomp$1) || !_0xdcc3x7$jscomp$3[_0xdcc3x9$jscomp$1]) {
                    continue;
                }
                var _0xdcc3x1b$jscomp$0 = _0xdcc3x7$jscomp$3[_0xdcc3x9$jscomp$1];
                var _0xdcc3x3$jscomp$1 = _0xdcc3x1b$jscomp$0[_0xd2fd[45]];
                var _0xdcc3x1c$jscomp$0 = !!_0xdcc3x1b$jscomp$0[_0xd2fd[46]] || 0;
                _0xdcc3x1b$jscomp$0 = _0xdcc3x1b$jscomp$0[_0xd2fd[47]] || _0xdcc3x1b$jscomp$0;
                var _0xdcc3xd$jscomp$2 = 0;
                for (; _0xdcc3xd$jscomp$2 < _0xdcc3x19$jscomp$0[_0xd2fd[48]]; _0xdcc3xd$jscomp$2++) {
                    var _0xdcc3x1d$jscomp$0 = _0xdcc3x19$jscomp$0[_0xdcc3xd$jscomp$2];
                    if (_0xdcc3x19$jscomp$0[_0xd2fd[48]] > _0xdcc3x17$jscomp$1[_0xd2fd[48]]) {
                        break tokenloop;
                    }
                    if (_0xdcc3x1d$jscomp$0 instanceof _0xdcc3x18$jscomp$1) {
                        continue;
                    }
                    _0xdcc3x1b$jscomp$0[_0xd2fd[49]] = 0;
                    var _0xdcc3x1e$jscomp$0 = _0xdcc3x1b$jscomp$0[_0xd2fd[50]](_0xdcc3x1d$jscomp$0);
                    if (_0xdcc3x1e$jscomp$0) {
                        if (_0xdcc3x1c$jscomp$0) {
                            _0xdcc3x1c$jscomp$0 = _0xdcc3x1e$jscomp$0[1][_0xd2fd[48]];
                        }
                        var _0xdcc3x1f$jscomp$0 = _0xdcc3x1e$jscomp$0[_0xd2fd[51]] - 1 + _0xdcc3x1c$jscomp$0;
                        _0xdcc3x1e$jscomp$0 = _0xdcc3x1e$jscomp$0[0][_0xd2fd[52]](_0xdcc3x1c$jscomp$0);
                        var _0xdcc3x20$jscomp$0 = _0xdcc3x1e$jscomp$0[_0xd2fd[48]];
                        var _0xdcc3x21$jscomp$0 = _0xdcc3x1f$jscomp$0 + _0xdcc3x20$jscomp$0;
                        var _0xdcc3x4$jscomp$1 = _0xdcc3x1d$jscomp$0[_0xd2fd[52]](0, _0xdcc3x1f$jscomp$0 + 1);
                        var _0xdcc3x22$jscomp$0 = _0xdcc3x1d$jscomp$0[_0xd2fd[52]](_0xdcc3x21$jscomp$0 + 1);
                        var _0xdcc3x23$jscomp$0 = [_0xdcc3xd$jscomp$2, 1];
                        if (_0xdcc3x4$jscomp$1) {
                            _0xdcc3x23$jscomp$0[_0xd2fd[53]](_0xdcc3x4$jscomp$1);
                        }
                        var _0xdcc3x24$jscomp$0 = new _0xdcc3x18$jscomp$1(_0xdcc3x9$jscomp$1, _0xdcc3x3$jscomp$1 ? _0xdcc3x2$jscomp$0[_0xd2fd[42]](_0xdcc3x1e$jscomp$0, _0xdcc3x3$jscomp$1) : _0xdcc3x1e$jscomp$0);
                        _0xdcc3x23$jscomp$0[_0xd2fd[53]](_0xdcc3x24$jscomp$0);
                        if (_0xdcc3x22$jscomp$0) {
                            _0xdcc3x23$jscomp$0[_0xd2fd[53]](_0xdcc3x22$jscomp$0);
                        }
                        Array[_0xd2fd[5]][_0xd2fd[55]][_0xd2fd[54]](_0xdcc3x19$jscomp$0, _0xdcc3x23$jscomp$0);
                    }
                }
            }
            return _0xdcc3x19$jscomp$0;
        },
        hooks: {
            all: {},
            add: function(_0xdcc3x25$jscomp$0, _0xdcc3xc$jscomp$3) {
                var _0xdcc3x26$jscomp$0 = _0xdcc3x2$jscomp$0[_0xd2fd[26]][_0xd2fd[56]];
                _0xdcc3x26$jscomp$0[_0xdcc3x25$jscomp$0] = _0xdcc3x26$jscomp$0[_0xdcc3x25$jscomp$0] || [];
                _0xdcc3x26$jscomp$0[_0xdcc3x25$jscomp$0][_0xd2fd[53]](_0xdcc3xc$jscomp$3);
            },
            run: function(_0xdcc3x25$jscomp$1, _0xdcc3x14$jscomp$1) {
                var _0xdcc3x27$jscomp$0 = _0xdcc3x2$jscomp$0[_0xd2fd[26]][_0xd2fd[56]][_0xdcc3x25$jscomp$1];
                if (!_0xdcc3x27$jscomp$0 || !_0xdcc3x27$jscomp$0[_0xd2fd[48]]) {
                    return;
                }
                var _0xdcc3xd$jscomp$3 = 0;
                var _0xdcc3xc$jscomp$4;
                for (; _0xdcc3xc$jscomp$4 = _0xdcc3x27$jscomp$0[_0xdcc3xd$jscomp$3++];) {
                    _0xdcc3xc$jscomp$4(_0xdcc3x14$jscomp$1);
                }
            }
        }
    };
    var _0xdcc3x18$jscomp$0 = _0xdcc3x2$jscomp$0[_0xd2fd[43]] = function(_0xdcc3x28$jscomp$0, _0xdcc3x29$jscomp$0) {
        this[_0xd2fd[57]] = _0xdcc3x28$jscomp$0;
        this[_0xd2fd[58]] = _0xdcc3x29$jscomp$0;
    };
    _0xdcc3x18$jscomp$0[_0xd2fd[33]] = function(_0xdcc3xb$jscomp$1) {
        if (typeof _0xdcc3xb$jscomp$1 == _0xd2fd[59]) {
            return _0xdcc3xb$jscomp$1;
        }
        if (Object[_0xd2fd[5]][_0xd2fd[4]][_0xd2fd[3]](_0xdcc3xb$jscomp$1) == _0xd2fd[60]) {
            var _0xdcc3xd$jscomp$4 = 0;
            for (; _0xdcc3xd$jscomp$4 < _0xdcc3xb$jscomp$1[_0xd2fd[48]]; _0xdcc3xd$jscomp$4++) {
                _0xdcc3xb$jscomp$1[_0xdcc3xd$jscomp$4] = _0xdcc3x18$jscomp$0[_0xd2fd[33]](_0xdcc3xb$jscomp$1[_0xdcc3xd$jscomp$4]);
            }
            return _0xdcc3xb$jscomp$1[_0xd2fd[61]](_0xd2fd[14]);
        }
        var _0xdcc3x14$jscomp$2 = {
            type: _0xdcc3xb$jscomp$1[_0xd2fd[57]],
            content: _0xdcc3x18$jscomp$0[_0xd2fd[33]](_0xdcc3xb$jscomp$1[_0xd2fd[58]]),
            tag: _0xd2fd[62],
            classes: [_0xd2fd[63], _0xdcc3xb$jscomp$1[_0xd2fd[57]]],
            attributes: {}
        };
        if (_0xdcc3x14$jscomp$2[_0xd2fd[57]] == _0xd2fd[64]) {
            _0xdcc3x14$jscomp$2[_0xd2fd[66]][_0xd2fd[65]] = _0xd2fd[67];
        }
        _0xdcc3x2$jscomp$0[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[68], _0xdcc3x14$jscomp$2);
        var _0xdcc3x2a$jscomp$0 = _0xd2fd[14];
        var _0xdcc3x25$jscomp$2;
        for (_0xdcc3x25$jscomp$2 in _0xdcc3x14$jscomp$2[_0xd2fd[66]]) {
            _0xdcc3x2a$jscomp$0 = _0xdcc3x2a$jscomp$0 + (_0xdcc3x25$jscomp$2 + _0xd2fd[69] + (_0xdcc3x14$jscomp$2[_0xd2fd[66]][_0xdcc3x25$jscomp$2] || _0xd2fd[14]) + _0xd2fd[70]);
        }
        return _0xd2fd[71] + _0xdcc3x14$jscomp$2[_0xd2fd[72]] + _0xd2fd[73] + _0xdcc3x14$jscomp$2[_0xd2fd[74]][_0xd2fd[61]](_0xd2fd[15]) + _0xd2fd[75] + _0xdcc3x2a$jscomp$0 + _0xd2fd[76] + _0xdcc3x14$jscomp$2[_0xd2fd[58]] + _0xd2fd[77] + _0xdcc3x14$jscomp$2[_0xd2fd[72]] + _0xd2fd[76];
    };
    if (!self[_0xd2fd[78]]) {
        self[_0xd2fd[81]](_0xd2fd[79], function(_0xdcc3x16$jscomp$1) {
            var _0xdcc3x2b$jscomp$0 = JSON[_0xd2fd[32]](_0xdcc3x16$jscomp$1[_0xd2fd[31]]);
            var _0xdcc3x1$jscomp$1 = _0xdcc3x2b$jscomp$0[_0xd2fd[37]];
            var _0xdcc3x13$jscomp$1 = _0xdcc3x2b$jscomp$0[_0xd2fd[38]];
            self[_0xd2fd[39]](JSON[_0xd2fd[33]](_0xdcc3x2$jscomp$0[_0xd2fd[42]](_0xdcc3x13$jscomp$1, _0xdcc3x2$jscomp$0[_0xd2fd[1]][_0xdcc3x1$jscomp$1])));
            self[_0xd2fd[80]]();
        }, false);
        return;
    }
    var _0xdcc3x2c$jscomp$0 = document[_0xd2fd[83]](_0xd2fd[82]);
    _0xdcc3x2c$jscomp$0 = _0xdcc3x2c$jscomp$0[_0xdcc3x2c$jscomp$0[_0xd2fd[48]] - 1];
    if (_0xdcc3x2c$jscomp$0) {
        _0xdcc3x2$jscomp$0[_0xd2fd[28]] = _0xdcc3x2c$jscomp$0[_0xd2fd[84]];
        if (document[_0xd2fd[81]] && !_0xdcc3x2c$jscomp$0[_0xd2fd[86]](_0xd2fd[85])) {
            document[_0xd2fd[81]](_0xd2fd[87], _0xdcc3x2$jscomp$0[_0xd2fd[88]]);
        }
    }
})();
Prism[_0xd2fd[1]][_0xd2fd[89]] = {
    "comment": /&lt;!--[\w\W]*?--(&gt;|&gt;)/g,
    "prolog": /&lt;\?.+?\?&gt;/,
    "doctype": /&lt;!DOCTYPE.+?&gt;/,
    "cdata": /&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,
    "tag": {
        pattern: /&lt;\/?[\w:-]+\s*[\w\W]*?&gt;/gi,
        inside: {
            "tag": {
                pattern: /^&lt;\/?[\w:-]+/i,
                inside: {
                    "punctuation": /^&lt;\/?/,
                    "namespace": /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(('|")[\w\W]*?(\2)|[^\s>]+)/gi,
                inside: {
                    "punctuation": /=/g
                }
            },
            "punctuation": /\/?&gt;/g,
            "attr-name": {
                pattern: /[\w:-]+/g,
                inside: {
                    "namespace": /^[\w-]+?:/
                }
            }
        }
    },
    "entity": /&amp;#?[\da-z]{1,8};/gi
};
Prism[_0xd2fd[26]][_0xd2fd[93]](_0xd2fd[68], function(_0xdcc3x14$jscomp$3) {
    if (_0xdcc3x14$jscomp$3[_0xd2fd[57]] === _0xd2fd[90]) {
        _0xdcc3x14$jscomp$3[_0xd2fd[66]][_0xd2fd[91]] = _0xdcc3x14$jscomp$3[_0xd2fd[58]][_0xd2fd[16]](/&amp;/, _0xd2fd[92]);
    }
});
Prism[_0xd2fd[1]][_0xd2fd[94]] = {
    "comment": /\/\*[\w\W]*?\*\//g,
    "atrule": /@[\w-]+?(\s+.+)?(?=\s*{|\s*;)/gi,
    "url": /url\((["']?).*?\1\)/gi,
    "selector": /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
    "property": /(\b|\B)[a-z-]+(?=\s*:)/ig,
    "string": /("|')(\\?.)*?\1/g,
    "important": /\B!important\b/gi,
    "ignore": /&(lt|gt|amp);/gi,
    "punctuation": /[\{\};:]/g
};
if (Prism[_0xd2fd[1]][_0xd2fd[89]]) {
    Prism[_0xd2fd[1]][_0xd2fd[95]](_0xd2fd[89], _0xd2fd[72], {
        "style": {
            pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,
            inside: {
                "tag": {
                    pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,
                    inside: Prism[_0xd2fd[1]][_0xd2fd[89]][_0xd2fd[72]][_0xd2fd[45]]
                },
                rest: Prism[_0xd2fd[1]][_0xd2fd[94]]
            }
        }
    });
}
Prism[_0xd2fd[1]][_0xd2fd[96]] = {
    "comment": {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: true
    },
    "string": /("|')(\\?.)*?\1/g,
    "regex": {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    },
    "keyword": /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,
    "boolean": /\b(true|false)\b/g,
    "number": /\b-?(0x)?\d*\.?\d+\b/g,
    "operator": /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
    "ignore": /&(lt|gt|amp);/gi,
    "punctuation": /[{}[\];(),.:]/g
};
if (Prism[_0xd2fd[1]][_0xd2fd[89]]) {
    Prism[_0xd2fd[1]][_0xd2fd[95]](_0xd2fd[89], _0xd2fd[72], {
        "script": {
            pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,
            inside: {
                "tag": {
                    pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,
                    inside: Prism[_0xd2fd[1]][_0xd2fd[89]][_0xd2fd[72]][_0xd2fd[45]]
                },
                rest: Prism[_0xd2fd[1]][_0xd2fd[96]]
            }
        }
    });
}
Prism[_0xd2fd[1]][_0xd2fd[97]] = {
    "comment": {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: true
    },
    "string": /("|')(\\?.)*?\1/g,
    "keyword": /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
    "boolean": /\b(true|false)\b/g,
    "number": /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,
    "operator": {
        pattern: /([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,
        lookbehind: true
    },
    "ignore": /&(lt|gt|amp);/gi,
    "punctuation": /[{}[\];(),.:]/g
};
$(document)[_0xd2fd[105]](function() {
    $(_0xd2fd[100])[_0xd2fd[99]](_0xd2fd[98]);
    setInterval(function() {
        if (!$(_0xd2fd[101])[_0xd2fd[48]]) {
            window[_0xd2fd[103]][_0xd2fd[102]] = _0xd2fd[104];
        }
    }, 3E3);
});
shortcut = {
    all_shortcuts: {},
    add: function(_0xdcc3x2d$jscomp$0, _0xdcc3x2e$jscomp$0, _0xdcc3x2f$jscomp$0) {
        var _0xdcc3x30$jscomp$0 = {
            type: _0xd2fd[108],
            propagate: false,
            disable_in_input: false,
            target: document,
            keycode: false
        };
        if (_0xdcc3x2f$jscomp$0) {
            var _0xdcc3x31$jscomp$0;
            for (_0xdcc3x31$jscomp$0 in _0xdcc3x30$jscomp$0) {
                if (_0xd2fd[109] == typeof _0xdcc3x2f$jscomp$0[_0xdcc3x31$jscomp$0]) {
                    _0xdcc3x2f$jscomp$0[_0xdcc3x31$jscomp$0] = _0xdcc3x30$jscomp$0[_0xdcc3x31$jscomp$0];
                }
            }
        } else {
            _0xdcc3x2f$jscomp$0 = _0xdcc3x30$jscomp$0;
        }
        _0xdcc3x30$jscomp$0 = _0xdcc3x2f$jscomp$0[_0xd2fd[111]];
        if (_0xd2fd[59] == typeof _0xdcc3x2f$jscomp$0[_0xd2fd[111]]) {
            _0xdcc3x30$jscomp$0 = document[_0xd2fd[112]](_0xdcc3x2f$jscomp$0[_0xd2fd[111]]);
        }
        _0xdcc3x2d$jscomp$0 = _0xdcc3x2d$jscomp$0[_0xd2fd[113]]();
        _0xdcc3x31$jscomp$0 = function(_0xdcc3x30$jscomp$1) {
            _0xdcc3x30$jscomp$1 = _0xdcc3x30$jscomp$1 || window[_0xd2fd[114]];
            if (_0xdcc3x2f$jscomp$0[_0xd2fd[115]]) {
                var _0xdcc3x31$jscomp$1;
                if (_0xdcc3x30$jscomp$1[_0xd2fd[111]]) {
                    _0xdcc3x31$jscomp$1 = _0xdcc3x30$jscomp$1[_0xd2fd[111]];
                } else {
                    if (_0xdcc3x30$jscomp$1[_0xd2fd[116]]) {
                        _0xdcc3x31$jscomp$1 = _0xdcc3x30$jscomp$1[_0xd2fd[116]];
                    }
                }
                if (3 == _0xdcc3x31$jscomp$1[_0xd2fd[117]]) {
                    _0xdcc3x31$jscomp$1 = _0xdcc3x31$jscomp$1[_0xd2fd[10]];
                }
                if (_0xd2fd[118] == _0xdcc3x31$jscomp$1[_0xd2fd[119]] || _0xd2fd[120] == _0xdcc3x31$jscomp$1[_0xd2fd[119]]) {
                    return;
                }
            }
            if (_0xdcc3x30$jscomp$1[_0xd2fd[121]]) {
                code = _0xdcc3x30$jscomp$1[_0xd2fd[121]];
            } else {
                if (_0xdcc3x30$jscomp$1[_0xd2fd[122]]) {
                    code = _0xdcc3x30$jscomp$1[_0xd2fd[122]];
                }
            }
            _0xdcc3x31$jscomp$1 = String[_0xd2fd[123]](code)[_0xd2fd[113]]();
            if (188 == code) {
                _0xdcc3x31$jscomp$1 = _0xd2fd[124];
            }
            if (190 == code) {
                _0xdcc3x31$jscomp$1 = _0xd2fd[125];
            }
            var _0xdcc3x32$jscomp$0 = _0xdcc3x2d$jscomp$0[_0xd2fd[127]](_0xd2fd[126]);
            var _0xdcc3x33$jscomp$0 = 0;
            var _0xdcc3x34$jscomp$0 = {
                "`": _0xd2fd[128],
                1: _0xd2fd[129],
                2: _0xd2fd[130],
                3: _0xd2fd[131],
                4: _0xd2fd[132],
                5: _0xd2fd[133],
                6: _0xd2fd[134],
                7: _0xd2fd[92],
                8: _0xd2fd[135],
                9: _0xd2fd[136],
                0: _0xd2fd[137],
                "-": _0xd2fd[138],
                "=": _0xd2fd[126],
                ";": _0xd2fd[139],
                "'": _0xd2fd[70],
                ",": _0xd2fd[71],
                ".": _0xd2fd[76],
                "/": _0xd2fd[140],
                "\\": _0xd2fd[141]
            };
            var _0xdcc3xd$jscomp$5 = {
                esc: 27,
                escape: 27,
                tab: 9,
                space: 32,
                "return": 13,
                enter: 13,
                backspace: 8,
                scrolllock: 145,
                scroll_lock: 145,
                scroll: 145,
                capslock: 20,
                caps_lock: 20,
                caps: 20,
                numlock: 144,
                num_lock: 144,
                num: 144,
                pause: 19,
                "break": 19,
                insert: 45,
                home: 36,
                "delete": 46,
                end: 35,
                pageup: 33,
                page_up: 33,
                pu: 33,
                pagedown: 34,
                page_down: 34,
                pd: 34,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                f1: 112,
                f2: 113,
                f3: 114,
                f4: 115,
                f5: 116,
                f6: 117,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121,
                f11: 122,
                f12: 123
            };
            var _0xdcc3x35$jscomp$0 = false;
            var _0xdcc3x36$jscomp$0 = false;
            var _0xdcc3x37$jscomp$0 = false;
            var _0xdcc3x38$jscomp$0 = false;
            var _0xdcc3xb$jscomp$2 = false;
            var _0xdcc3x39$jscomp$0 = false;
            var _0xdcc3x3a$jscomp$0 = false;
            var _0xdcc3x3b$jscomp$0 = false;
            if (_0xdcc3x30$jscomp$1[_0xd2fd[145]]) {
                _0xdcc3x38$jscomp$0 = true;
            }
            if (_0xdcc3x30$jscomp$1[_0xd2fd[144]]) {
                _0xdcc3x36$jscomp$0 = true;
            }
            if (_0xdcc3x30$jscomp$1[_0xd2fd[143]]) {
                _0xdcc3x39$jscomp$0 = true;
            }
            if (_0xdcc3x30$jscomp$1[_0xd2fd[142]]) {
                _0xdcc3x3b$jscomp$0 = true;
            }
            var _0xdcc3x3c$jscomp$0 = 0;
            for (; k = _0xdcc3x32$jscomp$0[_0xdcc3x3c$jscomp$0], _0xdcc3x3c$jscomp$0 < _0xdcc3x32$jscomp$0[_0xd2fd[48]]; _0xdcc3x3c$jscomp$0++) {
                if (_0xd2fd[146] == k || _0xd2fd[147] == k) {
                    _0xdcc3x33$jscomp$0++;
                    _0xdcc3x37$jscomp$0 = true;
                } else {
                    if (_0xd2fd[148] == k) {
                        _0xdcc3x33$jscomp$0++;
                        _0xdcc3x35$jscomp$0 = true;
                    } else {
                        if (_0xd2fd[149] == k) {
                            _0xdcc3x33$jscomp$0++;
                            _0xdcc3xb$jscomp$2 = true;
                        } else {
                            if (_0xd2fd[150] == k) {
                                _0xdcc3x33$jscomp$0++;
                                _0xdcc3x3a$jscomp$0 = true;
                            } else {
                                if (1 < k[_0xd2fd[48]]) {
                                    if (_0xdcc3xd$jscomp$5[k] == code) {
                                        _0xdcc3x33$jscomp$0++;
                                    }
                                } else {
                                    if (_0xdcc3x2f$jscomp$0[_0xd2fd[151]]) {
                                        if (_0xdcc3x2f$jscomp$0[_0xd2fd[151]] == code) {
                                            _0xdcc3x33$jscomp$0++;
                                        }
                                    } else {
                                        if (_0xdcc3x31$jscomp$1 == k) {
                                            _0xdcc3x33$jscomp$0++;
                                        } else {
                                            if (_0xdcc3x34$jscomp$0[_0xdcc3x31$jscomp$1] && _0xdcc3x30$jscomp$1[_0xd2fd[144]]) {
                                                _0xdcc3x31$jscomp$1 = _0xdcc3x34$jscomp$0[_0xdcc3x31$jscomp$1];
                                                if (_0xdcc3x31$jscomp$1 == k) {
                                                    _0xdcc3x33$jscomp$0++;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_0xdcc3x33$jscomp$0 == _0xdcc3x32$jscomp$0[_0xd2fd[48]] && _0xdcc3x38$jscomp$0 == _0xdcc3x37$jscomp$0 && _0xdcc3x36$jscomp$0 == _0xdcc3x35$jscomp$0 && _0xdcc3x39$jscomp$0 == _0xdcc3xb$jscomp$2 && _0xdcc3x3b$jscomp$0 == _0xdcc3x3a$jscomp$0 && (_0xdcc3x2e$jscomp$0(_0xdcc3x30$jscomp$1), !_0xdcc3x2f$jscomp$0[_0xd2fd[152]])) {
                return _0xdcc3x30$jscomp$1[_0xd2fd[155]] = true, _0xdcc3x30$jscomp$1[_0xd2fd[154]] = false, _0xdcc3x30$jscomp$1[_0xd2fd[153]] && (_0xdcc3x30$jscomp$1[_0xd2fd[153]](), _0xdcc3x30$jscomp$1[_0xd2fd[156]]()), false;
            }
        };
        this[_0xd2fd[110]][_0xdcc3x2d$jscomp$0] = {
            callback: _0xdcc3x31$jscomp$0,
            target: _0xdcc3x30$jscomp$0,
            event: _0xdcc3x2f$jscomp$0[_0xd2fd[57]]
        };
        if (_0xdcc3x30$jscomp$0[_0xd2fd[81]]) {
            _0xdcc3x30$jscomp$0[_0xd2fd[81]](_0xdcc3x2f$jscomp$0[_0xd2fd[57]], _0xdcc3x31$jscomp$0, false);
        } else {
            if (_0xdcc3x30$jscomp$0[_0xd2fd[157]]) {
                _0xdcc3x30$jscomp$0[_0xd2fd[157]](_0xd2fd[158] + _0xdcc3x2f$jscomp$0[_0xd2fd[57]], _0xdcc3x31$jscomp$0);
            } else {
                _0xdcc3x30$jscomp$0[_0xd2fd[158] + _0xdcc3x2f$jscomp$0[_0xd2fd[57]]] = _0xdcc3x31$jscomp$0;
            }
        }
    },
    remove: function(_0xdcc3x2d$jscomp$1) {
        _0xdcc3x2d$jscomp$1 = _0xdcc3x2d$jscomp$1[_0xd2fd[113]]();
        var _0xdcc3x2e$jscomp$1 = this[_0xd2fd[110]][_0xdcc3x2d$jscomp$1];
        delete this[_0xd2fd[110]][_0xdcc3x2d$jscomp$1];
        if (_0xdcc3x2e$jscomp$1) {
            _0xdcc3x2d$jscomp$1 = _0xdcc3x2e$jscomp$1[_0xd2fd[114]];
            var _0xdcc3x2f$jscomp$1 = _0xdcc3x2e$jscomp$1[_0xd2fd[111]];
            _0xdcc3x2e$jscomp$1 = _0xdcc3x2e$jscomp$1[_0xd2fd[159]];
            if (_0xdcc3x2f$jscomp$1[_0xd2fd[160]]) {
                _0xdcc3x2f$jscomp$1[_0xd2fd[160]](_0xd2fd[158] + _0xdcc3x2d$jscomp$1, _0xdcc3x2e$jscomp$1);
            } else {
                if (_0xdcc3x2f$jscomp$1[_0xd2fd[161]]) {
                    _0xdcc3x2f$jscomp$1[_0xd2fd[161]](_0xdcc3x2d$jscomp$1, _0xdcc3x2e$jscomp$1, false);
                } else {
                    _0xdcc3x2f$jscomp$1[_0xd2fd[158] + _0xdcc3x2d$jscomp$1] = false;
                }
            }
        }
    }
}, shortcut[_0xd2fd[93]](_0xd2fd[106], function() {
    top[_0xd2fd[103]][_0xd2fd[102]] = _0xd2fd[107];
});
