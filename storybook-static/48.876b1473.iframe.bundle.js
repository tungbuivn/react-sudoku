/*! For license information please see 48.876b1473.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkt_react_sudoku = self.webpackChunkt_react_sudoku || []).push([
  [48],
  {
    './node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js': function(
      module
    ) {
      'use strict';
      module.exports = function(cssWithMappingToString) {
        var list = [];
        return (
          (list.toString = function toString() {
            return this.map(function(item) {
              var content = '',
                needLayer = void 0 !== item[5];
              return (
                item[4] && (content += '@supports ('.concat(item[4], ') {')),
                item[2] && (content += '@media '.concat(item[2], ' {')),
                needLayer &&
                  (content += '@layer'.concat(
                    item[5].length > 0 ? ' '.concat(item[5]) : '',
                    ' {'
                  )),
                (content += cssWithMappingToString(item)),
                needLayer && (content += '}'),
                item[2] && (content += '}'),
                item[4] && (content += '}'),
                content
              );
            }).join('');
          }),
          (list.i = function i(modules, media, dedupe, supports, layer) {
            'string' == typeof modules && (modules = [[null, modules, void 0]]);
            var alreadyImportedModules = {};
            if (dedupe)
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                null != id && (alreadyImportedModules[id] = !0);
              }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              (dedupe && alreadyImportedModules[item[0]]) ||
                (void 0 !== layer &&
                  (void 0 === item[5] ||
                    (item[1] = '@layer'
                      .concat(
                        item[5].length > 0 ? ' '.concat(item[5]) : '',
                        ' {'
                      )
                      .concat(item[1], '}')),
                  (item[5] = layer)),
                media &&
                  (item[2]
                    ? ((item[1] = '@media '
                        .concat(item[2], ' {')
                        .concat(item[1], '}')),
                      (item[2] = media))
                    : (item[2] = media)),
                supports &&
                  (item[4]
                    ? ((item[1] = '@supports ('
                        .concat(item[4], ') {')
                        .concat(item[1], '}')),
                      (item[4] = supports))
                    : (item[4] = ''.concat(supports))),
                list.push(item));
            }
          }),
          list
        );
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js': function(
      module
    ) {
      'use strict';
      module.exports = function(item) {
        var content = item[1],
          cssMapping = item[3];
        if (!cssMapping) return content;
        if ('function' == typeof btoa) {
          var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            ),
            data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
              base64
            ),
            sourceMapping = '/*# '.concat(data, ' */');
          return [content].concat([sourceMapping]).join('\n');
        }
        return [content].join('\n');
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': function(
      module
    ) {
      'use strict';
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        for (var result = -1, i = 0; i < stylesInDOM.length; i++)
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        return result;
      }
      function modulesToDom(list, options) {
        for (
          var idCountMap = {}, identifiers = [], i = 0;
          i < list.length;
          i++
        ) {
          var item = list[i],
            id = options.base ? item[0] + options.base : item[0],
            count = idCountMap[id] || 0,
            identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier),
            obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
          if (-1 !== indexByIdentifier)
            stylesInDOM[indexByIdentifier].references++,
              stylesInDOM[indexByIdentifier].updater(obj);
          else {
            var updater = addElementStyle(obj, options);
            (options.byIndex = i),
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        return function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            )
              return;
            api.update((obj = newObj));
          } else api.remove();
        };
      }
      module.exports = function(list, options) {
        var lastIdentifiers = modulesToDom(
          (list = list || []),
          (options = options || {})
        );
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var index = getIndexByIdentifier(lastIdentifiers[i]);
            stylesInDOM[index].references--;
          }
          for (
            var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
            _i < lastIdentifiers.length;
            _i++
          ) {
            var _index = getIndexByIdentifier(lastIdentifiers[_i]);
            0 === stylesInDOM[_index].references &&
              (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js': function(
      module
    ) {
      'use strict';
      var memo = {};
      module.exports = function insertBySelector(insert, style) {
        var target = (function getTarget(target) {
          if (void 0 === memo[target]) {
            var styleTarget = document.querySelector(target);
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            )
              try {
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                styleTarget = null;
              }
            memo[target] = styleTarget;
          }
          return memo[target];
        })(insert);
        if (!target)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        target.appendChild(style);
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js': function(
      module
    ) {
      'use strict';
      module.exports = function insertStyleElement(options) {
        var element = document.createElement('style');
        return (
          options.setAttributes(element, options.attributes),
          options.insert(element, options.options),
          element
        );
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      module.exports = function setAttributesWithoutAttributes(styleElement) {
        var nonce = __webpack_require__.nc;
        nonce && styleElement.setAttribute('nonce', nonce);
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js': function(
      module
    ) {
      'use strict';
      module.exports = function domAPI(options) {
        if ('undefined' == typeof document)
          return { update: function update() {}, remove: function remove() {} };
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            !(function apply(styleElement, options, obj) {
              var css = '';
              obj.supports &&
                (css += '@supports ('.concat(obj.supports, ') {')),
                obj.media && (css += '@media '.concat(obj.media, ' {'));
              var needLayer = void 0 !== obj.layer;
              needLayer &&
                (css += '@layer'.concat(
                  obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                  ' {'
                )),
                (css += obj.css),
                needLayer && (css += '}'),
                obj.media && (css += '}'),
                obj.supports && (css += '}');
              var sourceMap = obj.sourceMap;
              sourceMap &&
                'undefined' != typeof btoa &&
                (css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                  ' */'
                )),
                options.styleTagTransform(css, styleElement, options.options);
            })(styleElement, options, obj);
          },
          remove: function remove() {
            !(function removeStyleElement(styleElement) {
              if (null === styleElement.parentNode) return !1;
              styleElement.parentNode.removeChild(styleElement);
            })(styleElement);
          },
        };
      };
    },
    './node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js': function(
      module
    ) {
      'use strict';
      module.exports = function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
        else {
          for (; styleElement.firstChild; )
            styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      };
    },
    './node_modules/@storybook/testing-library/dist/index.mjs': function(
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      var directApi_namespaceObject = {};
      __webpack_require__.r(directApi_namespaceObject),
        __webpack_require__.d(directApi_namespaceObject, {
          clear: function() {
            return directApi_clear;
          },
          click: function() {
            return directApi_click;
          },
          copy: function() {
            return directApi_copy;
          },
          cut: function() {
            return directApi_cut;
          },
          dblClick: function() {
            return directApi_dblClick;
          },
          deselectOptions: function() {
            return directApi_deselectOptions;
          },
          hover: function() {
            return directApi_hover;
          },
          keyboard: function() {
            return directApi_keyboard;
          },
          paste: function() {
            return directApi_paste;
          },
          pointer: function() {
            return directApi_pointer;
          },
          selectOptions: function() {
            return directApi_selectOptions;
          },
          tab: function() {
            return directApi_tab;
          },
          tripleClick: function() {
            return directApi_tripleClick;
          },
          type: function() {
            return directApi_type;
          },
          unhover: function() {
            return directApi_unhover;
          },
          upload: function() {
            return directApi_upload;
          },
        });
      var clickableInputTypes,
        dom_esm = __webpack_require__(
          './node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js'
        );
      function isElementType(element, tag, props) {
        return (
          (!element.namespaceURI ||
            'http://www.w3.org/1999/xhtml' === element.namespaceURI) &&
          (!!(tag = Array.isArray(tag) ? tag : [tag]).includes(
            element.tagName.toLowerCase()
          ) &&
            (!props ||
              Object.entries(props).every(([k, v]) => element[k] === v)))
        );
      }
      function isClickableInput(element) {
        return (
          isElementType(element, 'button') ||
          (isElementType(element, 'input') &&
            element.type in clickableInputTypes)
        );
      }
      !(function(clickableInputTypes) {
        (clickableInputTypes.button = 'button'),
          (clickableInputTypes.color = 'color'),
          (clickableInputTypes.file = 'file'),
          (clickableInputTypes.image = 'image'),
          (clickableInputTypes.reset = 'reset'),
          (clickableInputTypes.submit = 'submit'),
          (clickableInputTypes.checkbox = 'checkbox'),
          (clickableInputTypes.radio = 'radio');
      })(clickableInputTypes || (clickableInputTypes = {}));
      var helpers = __webpack_require__(
        './node_modules/@testing-library/dom/dist/helpers.js'
      );
      const { getWindowFromNode: getWindowFromNode } = helpers;
      function getWindow(node) {
        return getWindowFromNode(node);
      }
      function readBlobText(blob, FileReader) {
        return new Promise((res, rej) => {
          const fr = new FileReader();
          (fr.onerror = rej),
            (fr.onabort = rej),
            (fr.onload = () => {
              res(String(fr.result));
            }),
            fr.readAsText(blob);
        });
      }
      function createFileList(window, files) {
        const list = {
          ...files,
          length: files.length,
          item: index => list[index],
          [Symbol.iterator]: function* nextFile() {
            for (let i = 0; i < list.length; i++) yield list[i];
          },
        };
        return (
          (list.constructor = window.FileList),
          window.FileList &&
            Object.setPrototypeOf(list, window.FileList.prototype),
          Object.freeze(list),
          list
        );
      }
      function _define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      class DataTransferItemStub {
        getAsFile() {
          return this.file;
        }
        getAsString(callback) {
          'string' == typeof this.data && callback(this.data);
        }
        webkitGetAsEntry() {
          throw new Error('not implemented');
        }
        constructor(dataOrFile, type) {
          _define_property(this, 'kind', void 0),
            _define_property(this, 'type', void 0),
            _define_property(this, 'file', null),
            _define_property(this, 'data', void 0),
            'string' == typeof dataOrFile
              ? ((this.kind = 'string'),
                (this.type = String(type)),
                (this.data = dataOrFile))
              : ((this.kind = 'file'),
                (this.type = dataOrFile.type),
                (this.file = dataOrFile));
        }
      }
      class DataTransferItemListStub extends Array {
        add(...args) {
          const item = new DataTransferItemStub(args[0], args[1]);
          return this.push(item), item;
        }
        clear() {
          this.splice(0, this.length);
        }
        remove(index) {
          this.splice(index, 1);
        }
      }
      function getTypeMatcher(type, exact) {
        const [group, sub] = type.split('/'),
          isGroup = !sub || '*' === sub;
        return item =>
          exact
            ? item.type === (isGroup ? group : type)
            : isGroup
              ? item.type.startsWith(`${group}/`)
              : item.type === group;
      }
      function createDataTransfer(window, files = []) {
        const dt =
          void 0 === window.DataTransfer
            ? (function createDataTransferStub(window) {
                return new class DataTransferStub {
                  getData(format) {
                    var _this_items_find;
                    const match =
                      null !==
                        (_this_items_find = this.items.find(
                          getTypeMatcher(format, !0)
                        )) && void 0 !== _this_items_find
                        ? _this_items_find
                        : this.items.find(getTypeMatcher(format, !1));
                    let text = '';
                    return (
                      null == match ||
                        match.getAsString(t => {
                          text = t;
                        }),
                      text
                    );
                  }
                  setData(format, data) {
                    const matchIndex = this.items.findIndex(
                        getTypeMatcher(format, !0)
                      ),
                      item = new DataTransferItemStub(data, format);
                    matchIndex >= 0
                      ? this.items.splice(matchIndex, 1, item)
                      : this.items.push(item);
                  }
                  clearData(format) {
                    if (format) {
                      const matchIndex = this.items.findIndex(
                        getTypeMatcher(format, !0)
                      );
                      matchIndex >= 0 && this.items.remove(matchIndex);
                    } else this.items.clear();
                  }
                  get types() {
                    const t = [];
                    return (
                      this.files.length && t.push('Files'),
                      this.items.forEach(i => t.push(i.type)),
                      Object.freeze(t),
                      t
                    );
                  }
                  setDragImage() {}
                  constructor() {
                    _define_property(this, 'dropEffect', 'none'),
                      _define_property(this, 'effectAllowed', 'uninitialized'),
                      _define_property(
                        this,
                        'items',
                        new DataTransferItemListStub()
                      ),
                      _define_property(
                        this,
                        'files',
                        createFileList(window, [])
                      );
                  }
                }();
              })(window)
            : new window.DataTransfer();
        return (
          Object.defineProperty(dt, 'files', {
            get: () => createFileList(window, files),
          }),
          dt
        );
      }
      function getBlobFromDataTransferItem(window, item) {
        if ('file' === item.kind) return item.getAsFile();
        let data = '';
        return (
          item.getAsString(s => {
            data = s;
          }),
          new window.Blob([data], { type: item.type })
        );
      }
      function Clipboard_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function createClipboardItem(window, ...blobs) {
        const dataMap = Object.fromEntries(
          blobs.map(b => [
            'string' == typeof b ? 'text/plain' : b.type,
            Promise.resolve(b),
          ])
        );
        return void 0 !== window.ClipboardItem
          ? new window.ClipboardItem(dataMap)
          : new class ClipboardItem {
              get types() {
                return Array.from(Object.keys(this.data));
              }
              async getType(type) {
                const value = await this.data[type];
                if (!value)
                  throw new Error(
                    `${type} is not one of the available MIME types on this item.`
                  );
                return value instanceof window.Blob
                  ? value
                  : new window.Blob([value], { type: type });
              }
              constructor(d) {
                Clipboard_define_property(this, 'data', void 0),
                  (this.data = d);
              }
            }(dataMap);
      }
      const ClipboardStubControl = Symbol('Manage ClipboardSub');
      function createClipboardStub(window, control) {
        return Object.assign(
          new class Clipboard extends window.EventTarget {
            async read() {
              return Array.from(this.items);
            }
            async readText() {
              let text = '';
              for (const item of this.items) {
                const type = item.types.includes('text/plain')
                  ? 'text/plain'
                  : item.types.find(t => t.startsWith('text/'));
                type &&
                  (text += await item
                    .getType(type)
                    .then(b => readBlobText(b, window.FileReader)));
              }
              return text;
            }
            async write(data) {
              this.items = data;
            }
            async writeText(text) {
              this.items = [createClipboardItem(window, text)];
            }
            constructor(...args) {
              super(...args), Clipboard_define_property(this, 'items', []);
            }
          }(),
          { [ClipboardStubControl]: control }
        );
      }
      function isClipboardStub(clipboard) {
        return !!(null == clipboard ? void 0 : clipboard[ClipboardStubControl]);
      }
      async function writeDataTransferToClipboard(document, clipboardData) {
        const window = getWindow(document),
          clipboard = window.navigator.clipboard,
          items = [];
        for (let i = 0; i < clipboardData.items.length; i++) {
          const blob = getBlobFromDataTransferItem(
            window,
            clipboardData.items[i]
          );
          items.push(createClipboardItem(window, blob));
        }
        if (
          !(
            clipboard && (await clipboard.write(items).then(() => !0, () => !1))
          )
        )
          throw new Error('The Clipboard API is unavailable.');
      }
      const g = globalThis;
      function isContentEditable(element) {
        return (
          element.hasAttribute('contenteditable') &&
          ('true' == element.getAttribute('contenteditable') ||
            '' == element.getAttribute('contenteditable'))
        );
      }
      function getContentEditable(node) {
        const element = (function getElement(node) {
          return 1 === node.nodeType ? node : node.parentElement;
        })(node);
        return (
          element &&
          (element.closest('[contenteditable=""]') ||
            element.closest('[contenteditable="true"]'))
        );
      }
      function isEditable(element) {
        return (
          (isEditableInputOrTextArea(element) && !element.readOnly) ||
          isContentEditable(element)
        );
      }
      var editableInputTypes, maxLengthSupportedTypes;
      function isEditableInputOrTextArea(element) {
        return (
          isElementType(element, 'textarea') ||
          (isElementType(element, 'input') &&
            element.type in editableInputTypes)
        );
      }
      'function' == typeof g.afterEach &&
        g.afterEach(() =>
          (function resetClipboardStubOnView(window) {
            isClipboardStub(window.navigator.clipboard) &&
              window.navigator.clipboard[
                ClipboardStubControl
              ].resetClipboardStub();
          })(globalThis.window)
        ),
        'function' == typeof g.afterAll &&
          g.afterAll(() =>
            (function detachClipboardStubFromView(window) {
              isClipboardStub(window.navigator.clipboard) &&
                window.navigator.clipboard[
                  ClipboardStubControl
                ].detachClipboardStub();
            })(globalThis.window)
          ),
        (function(editableInputTypes) {
          (editableInputTypes.text = 'text'),
            (editableInputTypes.date = 'date'),
            (editableInputTypes['datetime-local'] = 'datetime-local'),
            (editableInputTypes.email = 'email'),
            (editableInputTypes.month = 'month'),
            (editableInputTypes.number = 'number'),
            (editableInputTypes.password = 'password'),
            (editableInputTypes.search = 'search'),
            (editableInputTypes.tel = 'tel'),
            (editableInputTypes.time = 'time'),
            (editableInputTypes.url = 'url'),
            (editableInputTypes.week = 'week');
        })(editableInputTypes || (editableInputTypes = {})),
        (function(maxLengthSupportedTypes) {
          (maxLengthSupportedTypes.email = 'email'),
            (maxLengthSupportedTypes.password = 'password'),
            (maxLengthSupportedTypes.search = 'search'),
            (maxLengthSupportedTypes.telephone = 'telephone'),
            (maxLengthSupportedTypes.text = 'text'),
            (maxLengthSupportedTypes.url = 'url');
        })(maxLengthSupportedTypes || (maxLengthSupportedTypes = {}));
      const FOCUSABLE_SELECTOR = [
        'input:not([type=hidden]):not([disabled])',
        'button:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable=""]',
        '[contenteditable="true"]',
        'a[href]',
        '[tabindex]:not([disabled])',
      ].join(', ');
      function isFocusable(element) {
        return element.matches(FOCUSABLE_SELECTOR);
      }
      var bracketDict, ApiLevel, PointerEventsCheckLevel;
      function readNextDescriptor(text, context) {
        let pos = 0;
        const startBracket = text[pos] in bracketDict ? text[pos] : '';
        pos += startBracket.length;
        const type = new RegExp(`^\\${startBracket}{2}`).test(text)
          ? ''
          : startBracket;
        return {
          type: type,
          ...('' === type
            ? readPrintableChar(text, pos, context)
            : readTag(text, pos, type, context)),
        };
      }
      function readPrintableChar(text, pos, context) {
        const descriptor = text[pos];
        return (
          assertDescriptor(descriptor, text, pos, context),
          {
            consumedLength: (pos += descriptor.length),
            descriptor: descriptor,
            releasePrevious: !1,
            releaseSelf: !0,
            repeat: 1,
          }
        );
      }
      function readTag(text, pos, startBracket, context) {
        var _text_slice_match, _text_slice_match1;
        const releasePreviousModifier = '/' === text[pos] ? '/' : '';
        pos += releasePreviousModifier.length;
        const escapedDescriptor = '{' === startBracket && '\\' === text[pos];
        pos += Number(escapedDescriptor);
        const descriptor = escapedDescriptor
          ? text[pos]
          : null ===
              (_text_slice_match = text
                .slice(pos)
                .match('{' === startBracket ? /^\w+|^[^}>/]/ : /^\w+/)) ||
            void 0 === _text_slice_match
            ? void 0
            : _text_slice_match[0];
        var _text_slice_match_;
        assertDescriptor(descriptor, text, pos, context),
          (pos += descriptor.length);
        const repeatModifier =
            null !==
              (_text_slice_match_ =
                null ===
                  (_text_slice_match1 = text.slice(pos).match(/^>\d+/)) ||
                void 0 === _text_slice_match1
                  ? void 0
                  : _text_slice_match1[0]) && void 0 !== _text_slice_match_
              ? _text_slice_match_
              : '',
          releaseSelfModifier =
            '/' === text[(pos += repeatModifier.length)] ||
            (!repeatModifier && '>' === text[pos])
              ? text[pos]
              : '';
        pos += releaseSelfModifier.length;
        const expectedEndBracket = bracketDict[startBracket],
          endBracket =
            text[pos] === expectedEndBracket ? expectedEndBracket : '';
        if (!endBracket)
          throw new Error(
            getErrorMessage(
              [
                !repeatModifier && 'repeat modifier',
                !releaseSelfModifier && 'release modifier',
                `"${expectedEndBracket}"`,
              ]
                .filter(Boolean)
                .join(' or '),
              text[pos],
              text,
              context
            )
          );
        return {
          consumedLength: (pos += endBracket.length),
          descriptor: descriptor,
          releasePrevious: !!releasePreviousModifier,
          repeat: repeatModifier
            ? Math.max(Number(repeatModifier.substr(1)), 1)
            : 1,
          releaseSelf: hasReleaseSelf(releaseSelfModifier, repeatModifier),
        };
      }
      function assertDescriptor(descriptor, text, pos, context) {
        if (!descriptor)
          throw new Error(
            getErrorMessage('key descriptor', text[pos], text, context)
          );
      }
      function hasReleaseSelf(releaseSelfModifier, repeatModifier) {
        return releaseSelfModifier
          ? '/' === releaseSelfModifier
          : !repeatModifier && void 0;
      }
      function getErrorMessage(expected, found, text, context) {
        return `Expected ${expected} but found "${
          null != found ? found : ''
        }" in "${text}"\n    See ${
          'pointer' === context
            ? 'https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen'
            : 'https://testing-library.com/docs/user-event/keyboard'
        }\n    for more information about how userEvent parses your input.`;
      }
      function setLevelRef(instance, level) {
        instance.levelRefs[level] = {};
      }
      function getLevelRef(instance, level) {
        return instance.levelRefs[level];
      }
      function isDisabled(element) {
        for (let el = element; el; el = el.parentElement)
          if (
            isElementType(el, [
              'button',
              'input',
              'select',
              'textarea',
              'optgroup',
              'option',
            ])
          ) {
            if (el.hasAttribute('disabled')) return !0;
          } else if (isElementType(el, 'fieldset')) {
            var _el_querySelector;
            if (
              el.hasAttribute('disabled') &&
              !(null ===
                (_el_querySelector = el.querySelector(':scope > legend')) ||
              void 0 === _el_querySelector
                ? void 0
                : _el_querySelector.contains(element))
            )
              return !0;
          } else if (
            el.tagName.includes('-') &&
            el.constructor.formAssociated &&
            el.hasAttribute('disabled')
          )
            return !0;
        return !1;
      }
      function getActiveElement(document) {
        const activeElement = document.activeElement;
        return (null == activeElement
        ? void 0
        : activeElement.shadowRoot)
          ? getActiveElement(activeElement.shadowRoot)
          : isDisabled(activeElement)
            ? document.ownerDocument
              ? document.ownerDocument.body
              : document.body
            : activeElement;
      }
      function getActiveElementOrBody(document) {
        var _getActiveElement;
        return null !== (_getActiveElement = getActiveElement(document)) &&
          void 0 !== _getActiveElement
          ? _getActiveElement
          : document.body;
      }
      function hasOwnSelection(node) {
        return isElement(node) && isEditableInputOrTextArea(node);
      }
      function isElement(node) {
        return 1 === node.nodeType;
      }
      !(function(bracketDict) {
        (bracketDict['{'] = '}'), (bracketDict['['] = ']');
      })(bracketDict || (bracketDict = {})),
        (function(ApiLevel) {
          (ApiLevel[(ApiLevel.Trigger = 2)] = 'Trigger'),
            (ApiLevel[(ApiLevel.Call = 1)] = 'Call');
        })(ApiLevel || (ApiLevel = {})),
        (function(PointerEventsCheckLevel) {
          (PointerEventsCheckLevel[(PointerEventsCheckLevel.EachTrigger = 4)] =
            'EachTrigger'),
            (PointerEventsCheckLevel[
              (PointerEventsCheckLevel.EachApiCall = 2)
            ] = 'EachApiCall'),
            (PointerEventsCheckLevel[(PointerEventsCheckLevel.EachTarget = 1)] =
              'EachTarget'),
            (PointerEventsCheckLevel[(PointerEventsCheckLevel.Never = 0)] =
              'Never');
        })(PointerEventsCheckLevel || (PointerEventsCheckLevel = {}));
      const { getConfig: getConfig } = dom_esm;
      function wrapEvent(cb, _element) {
        return getConfig().eventWrapper(cb);
      }
      function focusElement(element) {
        const target = (function findClosest(element, callback) {
            let el = element;
            do {
              if (callback(el)) return el;
              el = el.parentElement;
            } while (el && el !== element.ownerDocument.body);
          })(element, isFocusable),
          activeElement = getActiveElement(element.ownerDocument);
        (null != target ? target : element.ownerDocument.body) !==
          activeElement &&
          (wrapEvent(
            target
              ? () => target.focus()
              : () => (null == activeElement ? void 0 : activeElement.blur())
          ),
          (function updateSelectionOnFocus(element) {
            const selection = element.ownerDocument.getSelection();
            if (
              (null == selection ? void 0 : selection.focusNode) &&
              hasOwnSelection(element)
            ) {
              const contenteditable = getContentEditable(selection.focusNode);
              if (contenteditable) {
                if (!selection.isCollapsed) {
                  var _contenteditable_firstChild;
                  const focusNode =
                    3 ===
                    (null ===
                      (_contenteditable_firstChild =
                        contenteditable.firstChild) ||
                    void 0 === _contenteditable_firstChild
                      ? void 0
                      : _contenteditable_firstChild.nodeType)
                      ? contenteditable.firstChild
                      : contenteditable;
                  selection.setBaseAndExtent(focusNode, 0, focusNode, 0);
                }
              } else selection.setBaseAndExtent(element, 0, element, 0);
            }
          })(null != target ? target : element.ownerDocument.body));
      }
      const behavior = {};
      behavior.click = (event, target, instance) => {
        const context = target.closest('button,input,label,select,textarea'),
          control =
            context && isElementType(context, 'label') && context.control;
        return control
          ? () => {
              isFocusable(control) && focusElement(control),
                instance.dispatchEvent(
                  control,
                  (function cloneEvent(event) {
                    return new event.constructor(event.type, event);
                  })(event)
                );
            }
          : isElementType(target, 'input', { type: 'file' })
            ? () => {
                !(function blurElement(element) {
                  if (!isFocusable(element)) return;
                  getActiveElement(element.ownerDocument) === element &&
                    wrapEvent(() => element.blur());
                })(target),
                  target.dispatchEvent(
                    new (getWindow(target)).Event('fileDialog')
                  ),
                  focusElement(target);
              }
            : void 0;
      };
      const UIValue = Symbol('Displayed value in UI'),
        UISelection = Symbol('Displayed selection in UI'),
        InitialValue = Symbol('Initial value to compare on blur');
      function getUIValue(element) {
        return void 0 === element[UIValue]
          ? element.value
          : String(element[UIValue]);
      }
      function setUIValueClean(element) {
        element[UIValue] = void 0;
      }
      function clearInitialValue(element) {
        element[InitialValue] = void 0;
      }
      function setUISelection(
        element,
        {
          focusOffset: focusOffsetParam,
          anchorOffset: anchorOffsetParam = focusOffsetParam,
        },
        mode = 'replace'
      ) {
        const valueLength = getUIValue(element).length,
          sanitizeOffset = o => Math.max(0, Math.min(valueLength, o)),
          anchorOffset =
            'replace' === mode || void 0 === element[UISelection]
              ? sanitizeOffset(anchorOffsetParam)
              : element[UISelection].anchorOffset,
          focusOffset = sanitizeOffset(focusOffsetParam),
          startOffset = Math.min(anchorOffset, focusOffset),
          endOffset = Math.max(anchorOffset, focusOffset);
        if (
          ((element[UISelection] = {
            anchorOffset: anchorOffset,
            focusOffset: focusOffset,
          }),
          element.selectionStart === startOffset &&
            element.selectionEnd === endOffset)
        )
          return;
        const startObj = Object.assign(new Number(startOffset), {
          [UISelection]: !0,
        });
        try {
          element.setSelectionRange(startObj, endOffset);
        } catch {}
      }
      function getUISelection(element) {
        var _element_selectionStart,
          _element_selectionEnd,
          _element_UISelection;
        const sel =
          null !== (_element_UISelection = element[UISelection]) &&
          void 0 !== _element_UISelection
            ? _element_UISelection
            : {
                anchorOffset:
                  null !== (_element_selectionStart = element.selectionStart) &&
                  void 0 !== _element_selectionStart
                    ? _element_selectionStart
                    : 0,
                focusOffset:
                  null !== (_element_selectionEnd = element.selectionEnd) &&
                  void 0 !== _element_selectionEnd
                    ? _element_selectionEnd
                    : 0,
              };
        return {
          ...sel,
          startOffset: Math.min(sel.anchorOffset, sel.focusOffset),
          endOffset: Math.max(sel.anchorOffset, sel.focusOffset),
        };
      }
      function setUISelectionClean(element) {
        element[UISelection] = void 0;
      }
      const timeValue_parseInt = globalThis.parseInt;
      function build(onlyDigitsValue, index) {
        const hours = onlyDigitsValue.slice(0, index),
          validHours = Math.min(timeValue_parseInt(hours, 10), 23),
          minuteCharacters = onlyDigitsValue.slice(index),
          parsedMinutes = timeValue_parseInt(minuteCharacters, 10),
          validMinutes = Math.min(parsedMinutes, 59);
        return `${validHours
          .toString()
          .padStart(2, '0')}:${validMinutes.toString().padStart(2, '0')}`;
      }
      function isValidDateOrTimeValue(element, value) {
        const clone = element.cloneNode();
        return (clone.value = value), clone.value === value;
      }
      function getNextCursorPosition(node, offset, direction, inputType) {
        if (
          isTextNode(node) &&
          offset + direction >= 0 &&
          offset + direction <= node.nodeValue.length
        )
          return { node: node, offset: offset + direction };
        const nextNode = getNextCharacterContentNode(node, offset, direction);
        if (nextNode) {
          if (isTextNode(nextNode))
            return {
              node: nextNode,
              offset:
                direction > 0
                  ? Math.min(1, nextNode.nodeValue.length)
                  : Math.max(nextNode.nodeValue.length - 1, 0),
            };
          if (isElementType(nextNode, 'br')) {
            const nextPlusOne = getNextCharacterContentNode(
              nextNode,
              void 0,
              direction
            );
            return nextPlusOne
              ? isTextNode(nextPlusOne)
                ? {
                    node: nextPlusOne,
                    offset: direction > 0 ? 0 : nextPlusOne.nodeValue.length,
                  }
                : direction < 0 && isElementType(nextPlusOne, 'br')
                  ? { node: nextNode.parentNode, offset: getOffset(nextNode) }
                  : {
                      node: nextPlusOne.parentNode,
                      offset: getOffset(nextPlusOne) + (direction > 0 ? 0 : 1),
                    }
              : direction < 0 && 'deleteContentBackward' === inputType
                ? { node: nextNode.parentNode, offset: getOffset(nextNode) }
                : void 0;
          }
          return {
            node: nextNode.parentNode,
            offset: getOffset(nextNode) + (direction > 0 ? 1 : 0),
          };
        }
      }
      function getNextCharacterContentNode(node, offset, direction) {
        const nextOffset = Number(offset) + (direction < 0 ? -1 : 0);
        return (
          void 0 !== offset &&
            cursor_isElement(node) &&
            nextOffset >= 0 &&
            nextOffset < node.children.length &&
            (node = node.children[nextOffset]),
          (function walkNodes(node, direction, callback) {
            for (;;) {
              var _node_ownerDocument;
              const sibling = node[`${direction}Sibling`];
              if (sibling) {
                if (
                  callback(
                    (node = getDescendant(
                      sibling,
                      'next' === direction ? 'first' : 'last'
                    ))
                  )
                )
                  return node;
              } else {
                if (
                  !node.parentNode ||
                  (cursor_isElement(node.parentNode) &&
                    (isContentEditable(node.parentNode) ||
                      node.parentNode ===
                        (null === (_node_ownerDocument = node.ownerDocument) ||
                        void 0 === _node_ownerDocument
                          ? void 0
                          : _node_ownerDocument.body)))
                )
                  break;
                node = node.parentNode;
              }
            }
          })(
            node,
            1 === direction ? 'next' : 'previous',
            isTreatedAsCharacterContent
          )
        );
      }
      function isTreatedAsCharacterContent(node) {
        if (isTextNode(node)) return !0;
        if (cursor_isElement(node)) {
          if (isElementType(node, ['input', 'textarea']))
            return 'hidden' !== node.type;
          if (isElementType(node, 'br')) return !0;
        }
        return !1;
      }
      function getOffset(node) {
        let i = 0;
        for (; node.previousSibling; ) i++, (node = node.previousSibling);
        return i;
      }
      function cursor_isElement(node) {
        return 1 === node.nodeType;
      }
      function isTextNode(node) {
        return 3 === node.nodeType;
      }
      function getDescendant(node, direction) {
        for (; node.hasChildNodes(); ) node = node[`${direction}Child`];
        return node;
      }
      const TrackChanges = Symbol(
        'Track programmatic changes for React workaround'
      );
      function startTrackValue(element) {
        (function isReact17Element(element) {
          return (
            Object.getOwnPropertyNames(element).some(k =>
              k.startsWith('__react')
            ) && 17 === getWindow(element).REACT_VERSION
          );
        })(element) &&
          (element[TrackChanges] = {
            previousValue: String(element.value),
            tracked: [],
          });
      }
      function commitValueAfterInput(element, cursorOffset) {
        var _changes_tracked;
        const changes = element[TrackChanges];
        if (
          ((element[TrackChanges] = void 0),
          !(null == changes ||
          null === (_changes_tracked = changes.tracked) ||
          void 0 === _changes_tracked
            ? void 0
            : _changes_tracked.length))
        )
          return;
        const isJustReactStateUpdate =
          2 === changes.tracked.length &&
          changes.tracked[0] === changes.previousValue &&
          changes.tracked[1] === element.value;
        isJustReactStateUpdate || setUIValueClean(element),
          (function hasUISelection(element) {
            return !!element[UISelection];
          })(element) &&
            setUISelection(element, {
              focusOffset: isJustReactStateUpdate
                ? cursorOffset
                : element.value.length,
            });
      }
      function getTargetTypeAndSelection(node) {
        const element = (function getTargetTypeAndSelection_getElement(node) {
          return 1 === node.nodeType ? node : node.parentElement;
        })(node);
        if (element && hasOwnSelection(element))
          return { type: 'input', selection: getUISelection(element) };
        const selection =
          null == element ? void 0 : element.ownerDocument.getSelection();
        return {
          type:
            getContentEditable(node) &&
            (null == selection ? void 0 : selection.anchorNode) &&
            getContentEditable(selection.anchorNode)
              ? 'contenteditable'
              : 'default',
          selection: selection,
        };
      }
      function setSelection({
        focusNode: focusNode,
        focusOffset: focusOffset,
        anchorNode: anchorNode = focusNode,
        anchorOffset: anchorOffset = focusOffset,
      }) {
        var _anchorNode_ownerDocument_getSelection, _anchorNode_ownerDocument;
        if ('input' === getTargetTypeAndSelection(focusNode).type)
          return setUISelection(focusNode, {
            anchorOffset: anchorOffset,
            focusOffset: focusOffset,
          });
        null === (_anchorNode_ownerDocument = anchorNode.ownerDocument) ||
          void 0 === _anchorNode_ownerDocument ||
          null ===
            (_anchorNode_ownerDocument_getSelection = _anchorNode_ownerDocument.getSelection()) ||
          void 0 === _anchorNode_ownerDocument_getSelection ||
          _anchorNode_ownerDocument_getSelection.setBaseAndExtent(
            anchorNode,
            anchorOffset,
            focusNode,
            focusOffset
          );
      }
      function isDateOrTime(element) {
        return (
          isElementType(element, 'input') &&
          ['date', 'time'].includes(element.type)
        );
      }
      function input(instance, element, data, inputType = 'insertText') {
        const inputRange = (function getInputRange(focusNode) {
          const typeAndSelection = getTargetTypeAndSelection(focusNode);
          return 'input' === typeAndSelection.type
            ? typeAndSelection.selection
            : 'contenteditable' === typeAndSelection.type
              ? null ===
                  (_typeAndSelection_selection = typeAndSelection.selection) ||
                void 0 === _typeAndSelection_selection
                ? void 0
                : _typeAndSelection_selection.getRangeAt(0)
              : void 0;
          var _typeAndSelection_selection;
        })(element);
        if (inputRange) {
          if (!isDateOrTime(element)) {
            if (
              !instance.dispatchUIEvent(element, 'beforeinput', {
                inputType: inputType,
                data: data,
              })
            )
              return;
          }
          'startContainer' in inputRange
            ? (function editContenteditable(
                instance,
                element,
                inputRange,
                data,
                inputType
              ) {
                let del = !1;
                if (inputRange.collapsed) {
                  if (
                    ['deleteContentBackward', 'deleteContentForward'].includes(
                      inputType
                    )
                  ) {
                    const nextPosition = getNextCursorPosition(
                      inputRange.startContainer,
                      inputRange.startOffset,
                      'deleteContentBackward' === inputType ? -1 : 1,
                      inputType
                    );
                    if (nextPosition) {
                      del = !0;
                      const delRange = inputRange.cloneRange();
                      delRange.comparePoint(
                        nextPosition.node,
                        nextPosition.offset
                      ) < 0
                        ? delRange.setStart(
                            nextPosition.node,
                            nextPosition.offset
                          )
                        : delRange.setEnd(
                            nextPosition.node,
                            nextPosition.offset
                          ),
                        delRange.deleteContents();
                    }
                  }
                } else (del = !0), inputRange.deleteContents();
                if (data)
                  if (3 === inputRange.endContainer.nodeType) {
                    const offset = inputRange.endOffset;
                    inputRange.endContainer.insertData(offset, data),
                      inputRange.setStart(
                        inputRange.endContainer,
                        offset + data.length
                      ),
                      inputRange.setEnd(
                        inputRange.endContainer,
                        offset + data.length
                      );
                  } else {
                    const text = element.ownerDocument.createTextNode(data);
                    inputRange.insertNode(text),
                      inputRange.setStart(text, data.length),
                      inputRange.setEnd(text, data.length);
                  }
                (del || data) &&
                  instance.dispatchUIEvent(element, 'input', {
                    inputType: inputType,
                  });
              })(instance, element, inputRange, data, inputType)
            : (function editInputElement(
                instance,
                element,
                inputRange,
                data,
                inputType
              ) {
                let dataToInsert = data;
                if (
                  (function supportsMaxLength(element) {
                    return (
                      isElementType(element, 'textarea') ||
                      (isElementType(element, 'input') &&
                        element.type in maxLengthSupportedTypes)
                    );
                  })(element)
                ) {
                  const maxLength = (function getMaxLength(element) {
                    var _element_getAttribute;
                    const attr =
                      null !==
                        (_element_getAttribute = element.getAttribute(
                          'maxlength'
                        )) && void 0 !== _element_getAttribute
                        ? _element_getAttribute
                        : '';
                    return /^\d+$/.test(attr) && Number(attr) >= 0
                      ? Number(attr)
                      : void 0;
                  })(element);
                  if (void 0 !== maxLength && data.length > 0) {
                    const spaceUntilMaxLength =
                      maxLength - element.value.length;
                    if (!(spaceUntilMaxLength > 0)) return;
                    dataToInsert = data.substring(0, spaceUntilMaxLength);
                  }
                }
                const {
                  newValue: newValue,
                  newOffset: newOffset,
                  oldValue: oldValue,
                } = (function calculateNewValue(
                  inputData,
                  node,
                  { startOffset: startOffset, endOffset: endOffset },
                  inputType
                ) {
                  const value = getUIValue(node),
                    prologEnd = Math.max(
                      0,
                      startOffset === endOffset &&
                      'deleteContentBackward' === inputType
                        ? startOffset - 1
                        : startOffset
                    ),
                    prolog = value.substring(0, prologEnd),
                    epilogStart = Math.min(
                      value.length,
                      startOffset === endOffset &&
                      'deleteContentForward' === inputType
                        ? startOffset + 1
                        : endOffset
                    ),
                    epilog = value.substring(epilogStart, value.length);
                  let newValue = `${prolog}${inputData}${epilog}`,
                    newOffset = prologEnd + inputData.length;
                  if (isElementType(node, 'input', { type: 'time' })) {
                    const builtValue = (function buildTimeValue(value) {
                      const onlyDigitsValue = value.replace(/\D/g, '');
                      if (onlyDigitsValue.length < 2) return value;
                      const firstDigit = timeValue_parseInt(
                          onlyDigitsValue[0],
                          10
                        ),
                        secondDigit = timeValue_parseInt(
                          onlyDigitsValue[1],
                          10
                        );
                      if (
                        firstDigit >= 3 ||
                        (2 === firstDigit && secondDigit >= 4)
                      ) {
                        let index;
                        return (
                          (index = firstDigit >= 3 ? 1 : 2),
                          build(onlyDigitsValue, index)
                        );
                      }
                      return 2 === value.length
                        ? value
                        : build(onlyDigitsValue, 2);
                    })(newValue);
                    '' !== builtValue &&
                      isValidDateOrTimeValue(node, builtValue) &&
                      ((newValue = builtValue),
                      (newOffset = builtValue.length));
                  }
                  return {
                    oldValue: value,
                    newValue: newValue,
                    newOffset: newOffset,
                  };
                })(dataToInsert, element, inputRange, inputType);
                if (
                  newValue === oldValue &&
                  newOffset === inputRange.startOffset &&
                  newOffset === inputRange.endOffset
                )
                  return;
                if (
                  isElementType(element, 'input', { type: 'number' }) &&
                  !(function isValidNumberInput(value) {
                    var _value_match, _value_match1;
                    const valueParts = value.split('e', 2);
                    return !(
                      /[^\d.\-e]/.test(value) ||
                      Number(
                        null === (_value_match = value.match(/-/g)) ||
                        void 0 === _value_match
                          ? void 0
                          : _value_match.length
                      ) > 2 ||
                      Number(
                        null === (_value_match1 = value.match(/\./g)) ||
                        void 0 === _value_match1
                          ? void 0
                          : _value_match1.length
                      ) > 1 ||
                      (valueParts[1] && !/^-?\d*$/.test(valueParts[1]))
                    );
                  })(newValue)
                )
                  return;
                (function setUIValue(element, value) {
                  void 0 === element[InitialValue] &&
                    (element[InitialValue] = element.value),
                    (element[UIValue] = value),
                    (element.value = Object.assign(new String(value), {
                      [UIValue]: !0,
                    }));
                })(element, newValue),
                  setSelection({
                    focusNode: element,
                    anchorOffset: newOffset,
                    focusOffset: newOffset,
                  }),
                  isDateOrTime(element)
                    ? isValidDateOrTimeValue(element, newValue) &&
                      (commitInput(instance, element, newOffset, {}),
                      instance.dispatchUIEvent(element, 'change'),
                      clearInitialValue(element))
                    : commitInput(instance, element, newOffset, {
                        data: data,
                        inputType: inputType,
                      });
              })(instance, element, inputRange, data, inputType);
        }
      }
      function commitInput(instance, element, newOffset, inputInit) {
        instance.dispatchUIEvent(element, 'input', inputInit),
          commitValueAfterInput(element, newOffset);
      }
      function isVisible(element) {
        const window = getWindow(element);
        for (
          let el = element;
          null == el ? void 0 : el.ownerDocument;
          el = el.parentElement
        ) {
          const {
            display: display,
            visibility: visibility,
          } = window.getComputedStyle(el);
          if ('none' === display) return !1;
          if ('hidden' === visibility) return !1;
        }
        return !0;
      }
      function moveSelection(node, direction) {
        if (hasOwnSelection(node)) {
          const selection = getUISelection(node);
          setSelection({
            focusNode: node,
            focusOffset:
              selection.startOffset === selection.endOffset
                ? selection.focusOffset + direction
                : direction < 0
                  ? selection.startOffset
                  : selection.endOffset,
          });
        } else {
          const selection = node.ownerDocument.getSelection();
          if (!(null == selection ? void 0 : selection.focusNode)) return;
          if (selection.isCollapsed) {
            const nextPosition = getNextCursorPosition(
              selection.focusNode,
              selection.focusOffset,
              direction
            );
            nextPosition &&
              setSelection({
                focusNode: nextPosition.node,
                focusOffset: nextPosition.offset,
              });
          } else
            selection[direction < 0 ? 'collapseToStart' : 'collapseToEnd']();
        }
      }
      function selectAll(target) {
        if (hasOwnSelection(target))
          return setSelection({
            focusNode: target,
            anchorOffset: 0,
            focusOffset: getUIValue(target).length,
          });
        var _getContentEditable;
        const focusNode =
          null !== (_getContentEditable = getContentEditable(target)) &&
          void 0 !== _getContentEditable
            ? _getContentEditable
            : target.ownerDocument.body;
        setSelection({
          focusNode: focusNode,
          anchorOffset: 0,
          focusOffset: focusNode.childNodes.length,
        });
      }
      function setSelectionRange(element, anchorOffset, focusOffset) {
        var _element_firstChild;
        if (hasOwnSelection(element))
          return setSelection({
            focusNode: element,
            anchorOffset: anchorOffset,
            focusOffset: focusOffset,
          });
        if (
          isContentEditable(element) &&
          3 ===
            (null === (_element_firstChild = element.firstChild) ||
            void 0 === _element_firstChild
              ? void 0
              : _element_firstChild.nodeType)
        )
          return setSelection({
            focusNode: element.firstChild,
            anchorOffset: anchorOffset,
            focusOffset: focusOffset,
          });
        throw new Error(
          'Not implemented. The result of this interaction is unreliable.'
        );
      }
      function walkRadio(instance, el, direction) {
        const window = getWindow(el),
          group = Array.from(
            el.ownerDocument.querySelectorAll(
              el.name
                ? `input[type="radio"][name="${window.CSS.escape(el.name)}"]`
                : 'input[type="radio"][name=""], input[type="radio"]:not([name])'
            )
          );
        for (
          let i = group.findIndex(e => e === el) + direction;
          ;
          i += direction
        ) {
          if (
            (group[i] || (i = direction > 0 ? 0 : group.length - 1),
            group[i] === el)
          )
            return;
          isDisabled(group[i]) ||
            (focusElement(group[i]),
            instance.dispatchUIEvent(group[i], 'click'));
        }
      }
      (behavior.cut = (event, target, instance) => () => {
        isEditable(target) && input(instance, target, '', 'deleteByCut');
      }),
        (behavior.keydown = (event, target, instance) => {
          var _keydownBehavior_event_key, _keydownBehavior_event_key1;
          return null !==
            (_keydownBehavior_event_key1 =
              null ===
                (_keydownBehavior_event_key = keydownBehavior[event.key]) ||
              void 0 === _keydownBehavior_event_key
                ? void 0
                : _keydownBehavior_event_key.call(
                    keydownBehavior,
                    event,
                    target,
                    instance
                  )) && void 0 !== _keydownBehavior_event_key1
            ? _keydownBehavior_event_key1
            : combinationBehavior(event, target, instance);
        });
      const keydownBehavior = {
          ArrowDown: (event, target, instance) => {
            if (isElementType(target, 'input', { type: 'radio' }))
              return () => walkRadio(instance, target, -1);
          },
          ArrowLeft: (event, target, instance) =>
            isElementType(target, 'input', { type: 'radio' })
              ? () => walkRadio(instance, target, -1)
              : () => moveSelection(target, -1),
          ArrowRight: (event, target, instance) =>
            isElementType(target, 'input', { type: 'radio' })
              ? () => walkRadio(instance, target, 1)
              : () => moveSelection(target, 1),
          ArrowUp: (event, target, instance) => {
            if (isElementType(target, 'input', { type: 'radio' }))
              return () => walkRadio(instance, target, 1);
          },
          Backspace: (event, target, instance) => {
            if (isEditable(target))
              return () => {
                input(instance, target, '', 'deleteContentBackward');
              };
          },
          Delete: (event, target, instance) => {
            if (isEditable(target))
              return () => {
                input(instance, target, '', 'deleteContentForward');
              };
          },
          End: (event, target) => {
            if (
              isElementType(target, ['input', 'textarea']) ||
              isContentEditable(target)
            )
              return () => {
                var _getValueOrTextContent, _getValueOrTextContent_length;
                const newPos =
                  null !==
                    (_getValueOrTextContent_length =
                      null ===
                        (_getValueOrTextContent = (function getValueOrTextContent(
                          element
                        ) {
                          return element
                            ? isContentEditable(element)
                              ? element.textContent
                              : getUIValue(element)
                            : null;
                        })(target)) || void 0 === _getValueOrTextContent
                        ? void 0
                        : _getValueOrTextContent.length) &&
                  void 0 !== _getValueOrTextContent_length
                    ? _getValueOrTextContent_length
                    : 0;
                setSelectionRange(target, newPos, newPos);
              };
          },
          Home: (event, target) => {
            if (
              isElementType(target, ['input', 'textarea']) ||
              isContentEditable(target)
            )
              return () => {
                setSelectionRange(target, 0, 0);
              };
          },
          PageDown: (event, target) => {
            if (isElementType(target, ['input']))
              return () => {
                const newPos = getUIValue(target).length;
                setSelectionRange(target, newPos, newPos);
              };
          },
          PageUp: (event, target) => {
            if (isElementType(target, ['input']))
              return () => {
                setSelectionRange(target, 0, 0);
              };
          },
          Tab: (event, target, instance) => () => {
            const dest = (function getTabDestination(activeElement, shift) {
              const document = activeElement.ownerDocument,
                focusableElements = document.querySelectorAll(
                  FOCUSABLE_SELECTOR
                ),
                enabledElements = Array.from(focusableElements).filter(
                  el =>
                    el === activeElement ||
                    !(Number(el.getAttribute('tabindex')) < 0 || isDisabled(el))
                );
              Number(activeElement.getAttribute('tabindex')) >= 0 &&
                enabledElements.sort((a, b) => {
                  const i = Number(a.getAttribute('tabindex')),
                    j = Number(b.getAttribute('tabindex'));
                  return i === j ? 0 : 0 === i ? 1 : 0 === j ? -1 : i - j;
                });
              const checkedRadio = {};
              let prunedElements = [document.body];
              const activeRadioGroup = isElementType(activeElement, 'input', {
                type: 'radio',
              })
                ? activeElement.name
                : void 0;
              enabledElements.forEach(currentElement => {
                const el = currentElement;
                if (isElementType(el, 'input', { type: 'radio' }) && el.name) {
                  if (el === activeElement) return void prunedElements.push(el);
                  if (el.name === activeRadioGroup) return;
                  if (el.checked)
                    return (
                      (prunedElements = prunedElements.filter(
                        e =>
                          !isElementType(e, 'input', {
                            type: 'radio',
                            name: el.name,
                          })
                      )),
                      prunedElements.push(el),
                      void (checkedRadio[el.name] = el)
                    );
                  if (void 0 !== checkedRadio[el.name]) return;
                }
                prunedElements.push(el);
              });
              for (
                let index = prunedElements.findIndex(
                  el => el === activeElement
                );
                ;

              )
                if (
                  ((index += shift ? -1 : 1),
                  index === prunedElements.length
                    ? (index = 0)
                    : -1 === index && (index = prunedElements.length - 1),
                  prunedElements[index] === activeElement ||
                    prunedElements[index] === document.body ||
                    isVisible(prunedElements[index]))
                )
                  return prunedElements[index];
            })(target, instance.system.keyboard.modifiers.Shift);
            focusElement(dest),
              hasOwnSelection(dest) &&
                setUISelection(dest, {
                  anchorOffset: 0,
                  focusOffset: dest.value.length,
                });
          },
        },
        combinationBehavior = (event, target, instance) => {
          if (
            'KeyA' === event.code &&
            instance.system.keyboard.modifiers.Control
          )
            return () => selectAll(target);
        };
      behavior.keypress = (event, target, instance) => {
        if ('Enter' === event.key) {
          if (
            isElementType(target, 'button') ||
            (isElementType(target, 'input') &&
              ClickInputOnEnter.includes(target.type)) ||
            (isElementType(target, 'a') && Boolean(target.href))
          )
            return () => {
              instance.dispatchUIEvent(target, 'click');
            };
          if (isElementType(target, 'input')) {
            const form = target.form,
              submit =
                null == form
                  ? void 0
                  : form.querySelector(
                      'input[type="submit"], button:not([type]), button[type="submit"]'
                    );
            return submit
              ? () => instance.dispatchUIEvent(submit, 'click')
              : form &&
                SubmitSingleInputOnEnter.includes(target.type) &&
                1 === form.querySelectorAll('input').length
                ? () => instance.dispatchUIEvent(form, 'submit')
                : void 0;
          }
        }
        if (isEditable(target)) {
          const inputType =
              'Enter' === event.key
                ? isContentEditable(target) &&
                  !instance.system.keyboard.modifiers.Shift
                  ? 'insertParagraph'
                  : 'insertLineBreak'
                : 'insertText',
            inputData = 'Enter' === event.key ? '\n' : event.key;
          return () => input(instance, target, inputData, inputType);
        }
      };
      const ClickInputOnEnter = [
          'button',
          'color',
          'file',
          'image',
          'reset',
          'submit',
        ],
        SubmitSingleInputOnEnter = [
          'email',
          'month',
          'password',
          'search',
          'tel',
          'text',
          'url',
          'week',
        ];
      behavior.keyup = (event, target, instance) => {
        var _keyupBehavior_event_key;
        return null === (_keyupBehavior_event_key = keyupBehavior[event.key]) ||
          void 0 === _keyupBehavior_event_key
          ? void 0
          : _keyupBehavior_event_key.call(
              keyupBehavior,
              event,
              target,
              instance
            );
      };
      const keyupBehavior = {
        ' ': (event, target, instance) => {
          if (isClickableInput(target))
            return () => instance.dispatchUIEvent(target, 'click');
        },
      };
      behavior.paste = (event, target, instance) => {
        if (isEditable(target))
          return () => {
            var _event_clipboardData;
            const insertData =
              null === (_event_clipboardData = event.clipboardData) ||
              void 0 === _event_clipboardData
                ? void 0
                : _event_clipboardData.getData('text');
            insertData &&
              input(instance, target, insertData, 'insertFromPaste');
          };
      };
      const eventMap = {
          ...__webpack_require__(
            './node_modules/@testing-library/dom/dist/event-map.js'
          ).Hx,
          click: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          auxclick: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          contextmenu: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          beforeInput: {
            EventType: 'InputEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
        },
        eventMapKeys = Object.fromEntries(
          Object.keys(eventMap).map(k => [k.toLowerCase(), k])
        );
      function getEventClass(type) {
        const k = eventMapKeys[type];
        return k && eventMap[k].EventType;
      }
      const mouseEvents = ['MouseEvent', 'PointerEvent'];
      const eventInitializer = {
        ClipboardEvent: [
          function initClipboardEvent(event, { clipboardData: clipboardData }) {
            assignProps(event, { clipboardData: clipboardData });
          },
        ],
        InputEvent: [
          initUIEvent,
          function initInputEvent(
            event,
            { data: data, inputType: inputType, isComposing: isComposing }
          ) {
            assignProps(event, {
              data: data,
              isComposing: Boolean(isComposing),
              inputType: String(inputType),
            });
          },
        ],
        MouseEvent: [initUIEvent, initUIEventModififiers, initMouseEvent],
        PointerEvent: [
          initUIEvent,
          initUIEventModififiers,
          initMouseEvent,
          function initPointerEvent(
            event,
            {
              pointerId: pointerId,
              width: width,
              height: height,
              pressure: pressure,
              tangentialPressure: tangentialPressure,
              tiltX: tiltX,
              tiltY: tiltY,
              twist: twist,
              pointerType: pointerType,
              isPrimary: isPrimary,
            }
          ) {
            assignProps(event, {
              pointerId: sanitizeNumber(pointerId),
              width: sanitizeNumber(width),
              height: sanitizeNumber(height),
              pressure: sanitizeNumber(pressure),
              tangentialPressure: sanitizeNumber(tangentialPressure),
              tiltX: sanitizeNumber(tiltX),
              tiltY: sanitizeNumber(tiltY),
              twist: sanitizeNumber(twist),
              pointerType: String(pointerType),
              isPrimary: Boolean(isPrimary),
            });
          },
        ],
        KeyboardEvent: [
          initUIEvent,
          initUIEventModififiers,
          function initKeyboardEvent(
            event,
            {
              key: key,
              code: code,
              location: location,
              repeat: repeat,
              isComposing: isComposing,
              charCode: charCode,
            }
          ) {
            assignProps(event, {
              key: String(key),
              code: String(code),
              location: sanitizeNumber(location),
              repeat: Boolean(repeat),
              isComposing: Boolean(isComposing),
              charCode: charCode,
            });
          },
        ],
      };
      function createEvent(type, target, init) {
        var _eventInitializer_EventType;
        const window = getWindow(target),
          { EventType: EventType, defaultInit: defaultInit } = eventMap[
            eventMapKeys[type]
          ],
          event = new ((function getEventConstructors(window) {
            var _window_Event;
            const Event =
              null !== (_window_Event = window.Event) &&
              void 0 !== _window_Event
                ? _window_Event
                : class Event {};
            var _window_AnimationEvent;
            const AnimationEvent =
              null !== (_window_AnimationEvent = window.AnimationEvent) &&
              void 0 !== _window_AnimationEvent
                ? _window_AnimationEvent
                : class AnimationEvent extends Event {};
            var _window_ClipboardEvent;
            const ClipboardEvent =
              null !== (_window_ClipboardEvent = window.ClipboardEvent) &&
              void 0 !== _window_ClipboardEvent
                ? _window_ClipboardEvent
                : class ClipboardEvent extends Event {};
            var _window_PopStateEvent;
            const PopStateEvent =
              null !== (_window_PopStateEvent = window.PopStateEvent) &&
              void 0 !== _window_PopStateEvent
                ? _window_PopStateEvent
                : class PopStateEvent extends Event {};
            var _window_ProgressEvent;
            const ProgressEvent =
              null !== (_window_ProgressEvent = window.ProgressEvent) &&
              void 0 !== _window_ProgressEvent
                ? _window_ProgressEvent
                : class ProgressEvent extends Event {};
            var _window_TransitionEvent;
            const TransitionEvent =
              null !== (_window_TransitionEvent = window.TransitionEvent) &&
              void 0 !== _window_TransitionEvent
                ? _window_TransitionEvent
                : class TransitionEvent extends Event {};
            var _window_UIEvent;
            const UIEvent =
              null !== (_window_UIEvent = window.UIEvent) &&
              void 0 !== _window_UIEvent
                ? _window_UIEvent
                : class UIEvent extends Event {};
            var _window_CompositionEvent;
            const CompositionEvent =
              null !== (_window_CompositionEvent = window.CompositionEvent) &&
              void 0 !== _window_CompositionEvent
                ? _window_CompositionEvent
                : class CompositionEvent extends UIEvent {};
            var _window_FocusEvent;
            const FocusEvent =
              null !== (_window_FocusEvent = window.FocusEvent) &&
              void 0 !== _window_FocusEvent
                ? _window_FocusEvent
                : class FocusEvent extends UIEvent {};
            var _window_InputEvent;
            const InputEvent =
              null !== (_window_InputEvent = window.InputEvent) &&
              void 0 !== _window_InputEvent
                ? _window_InputEvent
                : class InputEvent extends UIEvent {};
            var _window_KeyboardEvent;
            const KeyboardEvent =
              null !== (_window_KeyboardEvent = window.KeyboardEvent) &&
              void 0 !== _window_KeyboardEvent
                ? _window_KeyboardEvent
                : class KeyboardEvent extends UIEvent {};
            var _window_MouseEvent;
            const MouseEvent =
              null !== (_window_MouseEvent = window.MouseEvent) &&
              void 0 !== _window_MouseEvent
                ? _window_MouseEvent
                : class MouseEvent extends UIEvent {};
            var _window_DragEvent;
            const DragEvent =
              null !== (_window_DragEvent = window.DragEvent) &&
              void 0 !== _window_DragEvent
                ? _window_DragEvent
                : class DragEvent extends MouseEvent {};
            var _window_PointerEvent;
            const PointerEvent =
              null !== (_window_PointerEvent = window.PointerEvent) &&
              void 0 !== _window_PointerEvent
                ? _window_PointerEvent
                : class PointerEvent extends MouseEvent {};
            var _window_TouchEvent;
            const TouchEvent =
              null !== (_window_TouchEvent = window.TouchEvent) &&
              void 0 !== _window_TouchEvent
                ? _window_TouchEvent
                : class TouchEvent extends UIEvent {};
            return {
              Event: Event,
              AnimationEvent: AnimationEvent,
              ClipboardEvent: ClipboardEvent,
              PopStateEvent: PopStateEvent,
              ProgressEvent: ProgressEvent,
              TransitionEvent: TransitionEvent,
              UIEvent: UIEvent,
              CompositionEvent: CompositionEvent,
              FocusEvent: FocusEvent,
              InputEvent: InputEvent,
              KeyboardEvent: KeyboardEvent,
              MouseEvent: MouseEvent,
              DragEvent: DragEvent,
              PointerEvent: PointerEvent,
              TouchEvent: TouchEvent,
            };
          })(window))[EventType](type, defaultInit);
        return (
          null ===
            (_eventInitializer_EventType = eventInitializer[EventType]) ||
            void 0 === _eventInitializer_EventType ||
            _eventInitializer_EventType.forEach(f =>
              f(event, null != init ? init : {})
            ),
          event
        );
      }
      function assignProps(obj, props) {
        for (const [key, value] of Object.entries(props))
          Object.defineProperty(obj, key, {
            get: () => (null != value ? value : null),
          });
      }
      function sanitizeNumber(n) {
        return Number(null != n ? n : 0);
      }
      function initUIEvent(event, { view: view, detail: detail }) {
        assignProps(event, {
          view: view,
          detail: sanitizeNumber(null != detail ? detail : 0),
        });
      }
      function initUIEventModififiers(
        event,
        {
          altKey: altKey,
          ctrlKey: ctrlKey,
          metaKey: metaKey,
          shiftKey: shiftKey,
          modifierAltGraph: modifierAltGraph,
          modifierCapsLock: modifierCapsLock,
          modifierFn: modifierFn,
          modifierFnLock: modifierFnLock,
          modifierNumLock: modifierNumLock,
          modifierScrollLock: modifierScrollLock,
          modifierSymbol: modifierSymbol,
          modifierSymbolLock: modifierSymbolLock,
        }
      ) {
        assignProps(event, {
          altKey: Boolean(altKey),
          ctrlKey: Boolean(ctrlKey),
          metaKey: Boolean(metaKey),
          shiftKey: Boolean(shiftKey),
          getModifierState(k) {
            return Boolean(
              {
                Alt: altKey,
                AltGraph: modifierAltGraph,
                CapsLock: modifierCapsLock,
                Control: ctrlKey,
                Fn: modifierFn,
                FnLock: modifierFnLock,
                Meta: metaKey,
                NumLock: modifierNumLock,
                ScrollLock: modifierScrollLock,
                Shift: shiftKey,
                Symbol: modifierSymbol,
                SymbolLock: modifierSymbolLock,
              }[k]
            );
          },
        });
      }
      function initMouseEvent(
        event,
        {
          x: x,
          y: y,
          screenX: screenX,
          screenY: screenY,
          clientX: clientX = x,
          clientY: clientY = y,
          button: button,
          buttons: buttons,
          relatedTarget: relatedTarget,
        }
      ) {
        assignProps(event, {
          screenX: sanitizeNumber(screenX),
          screenY: sanitizeNumber(screenY),
          clientX: sanitizeNumber(clientX),
          x: sanitizeNumber(clientX),
          clientY: sanitizeNumber(clientY),
          y: sanitizeNumber(clientY),
          button: sanitizeNumber(button),
          buttons: sanitizeNumber(buttons),
          relatedTarget: relatedTarget,
        });
      }
      function dispatchUIEvent(target, type, init, preventDefault = !1) {
        ((function isMouseEvent(type) {
          return mouseEvents.includes(getEventClass(type));
        })(type) ||
          (function isKeyboardEvent(type) {
            return 'KeyboardEvent' === getEventClass(type);
          })(type)) &&
          (init = { ...init, ...this.system.getUIEventModifiers() });
        const event = createEvent(type, target, init);
        return dispatchEvent.call(this, target, event, preventDefault);
      }
      function dispatchEvent(target, event, preventDefault = !1) {
        var _behavior_type;
        const type = event.type,
          behaviorImplementation = preventDefault
            ? () => {}
            : null === (_behavior_type = behavior[type]) ||
              void 0 === _behavior_type
              ? void 0
              : _behavior_type.call(behavior, event, target, this);
        if (behaviorImplementation) {
          event.preventDefault();
          let defaultPrevented = !1;
          return (
            Object.defineProperty(event, 'defaultPrevented', {
              get: () => defaultPrevented,
            }),
            Object.defineProperty(event, 'preventDefault', {
              value: () => {
                defaultPrevented = event.cancelable;
              },
            }),
            wrapEvent(() => target.dispatchEvent(event)),
            defaultPrevented || behaviorImplementation(),
            !defaultPrevented
          );
        }
        return wrapEvent(() => target.dispatchEvent(event));
      }
      const Interceptor = Symbol('Interceptor for programmatical calls');
      function prepareInterceptor(element, propName, interceptorImpl) {
        const prototypeDescriptor = Object.getOwnPropertyDescriptor(
            element.constructor.prototype,
            propName
          ),
          objectDescriptor = Object.getOwnPropertyDescriptor(element, propName),
          target = (null == prototypeDescriptor
          ? void 0
          : prototypeDescriptor.set)
            ? 'set'
            : 'value';
        if (
          'function' !=
            typeof (null == prototypeDescriptor
              ? void 0
              : prototypeDescriptor[target]) ||
          prototypeDescriptor[target][Interceptor]
        )
          throw new Error(
            `Element ${element.tagName} does not implement "${String(
              propName
            )}".`
          );
        function intercept(...args) {
          const {
              applyNative: applyNative = !1,
              realArgs: realArgs,
              then: then,
            } = interceptorImpl.call(this, ...args),
            realFunc = ((!applyNative && objectDescriptor) ||
              prototypeDescriptor)[target];
          'set' === target
            ? realFunc.call(this, realArgs)
            : realFunc.call(this, ...realArgs),
            null == then || then();
        }
        (intercept[Interceptor] = Interceptor),
          Object.defineProperty(element, propName, {
            ...(null != objectDescriptor
              ? objectDescriptor
              : prototypeDescriptor),
            [target]: intercept,
          });
      }
      function prepareValueInterceptor(element) {
        prepareInterceptor(element, 'value', function interceptorImpl(v) {
          const isUI = (function isUIValue(value) {
            return 'object' == typeof value && UIValue in value;
          })(v);
          return (
            isUI && startTrackValue(this),
            {
              applyNative: !!isUI,
              realArgs: sanitizeValue(this, v),
              then: isUI
                ? void 0
                : () =>
                    (function trackOrSetValue(element, v) {
                      var _element_TrackChanges_tracked, _element_TrackChanges;
                      null ===
                        (_element_TrackChanges = element[TrackChanges]) ||
                        void 0 === _element_TrackChanges ||
                        null ===
                          (_element_TrackChanges_tracked =
                            _element_TrackChanges.tracked) ||
                        void 0 === _element_TrackChanges_tracked ||
                        _element_TrackChanges_tracked.push(v),
                        element[TrackChanges] ||
                          (setUIValueClean(element),
                          setUISelection(element, { focusOffset: v.length }));
                    })(this, String(v)),
            }
          );
        });
      }
      function sanitizeValue(element, v) {
        return isElementType(element, 'input', { type: 'number' }) &&
          '' !== String(v) &&
          !Number.isNaN(Number(v))
          ? String(Number(v))
          : String(v);
      }
      function prepareSelectionInterceptor(element) {
        prepareInterceptor(
          element,
          'setSelectionRange',
          function interceptorImpl(start, ...others) {
            const isUI = (function isUISelectionStart(start) {
              return (
                !!start && 'object' == typeof start && UISelection in start
              );
            })(start);
            return {
              applyNative: !!isUI,
              realArgs: [Number(start), ...others],
              then: () => (isUI ? void 0 : setUISelectionClean(element)),
            };
          }
        ),
          prepareInterceptor(
            element,
            'selectionStart',
            function interceptorImpl(v) {
              return { realArgs: v, then: () => setUISelectionClean(element) };
            }
          ),
          prepareInterceptor(element, 'selectionEnd', function interceptorImpl(
            v
          ) {
            return { realArgs: v, then: () => setUISelectionClean(element) };
          }),
          prepareInterceptor(element, 'select', function interceptorImpl() {
            return {
              realArgs: [],
              then: () =>
                (function setUISelectionRaw(element, selection) {
                  element[UISelection] = selection;
                })(element, {
                  anchorOffset: 0,
                  focusOffset: getUIValue(element).length,
                }),
            };
          });
      }
      const isPrepared = Symbol(
        'Node prepared with document state workarounds'
      );
      function prepareDocument(document) {
        document[isPrepared] ||
          (document.addEventListener(
            'focus',
            e => {
              prepareElement(e.target);
            },
            { capture: !0, passive: !0 }
          ),
          document.activeElement && prepareElement(document.activeElement),
          document.addEventListener(
            'blur',
            e => {
              const el = e.target,
                initialValue = (function getInitialValue(element) {
                  return element[InitialValue];
                })(el);
              void 0 !== initialValue &&
                (el.value !== initialValue &&
                  (function dispatchDOMEvent(target, type, init) {
                    const event = createEvent(type, target, init);
                    wrapEvent(() => target.dispatchEvent(event));
                  })(el, 'change'),
                clearInitialValue(el));
            },
            { capture: !0, passive: !0 }
          ),
          (document[isPrepared] = isPrepared));
      }
      function prepareElement(el) {
        el[isPrepared] ||
          (isElementType(el, ['input', 'textarea']) &&
            (prepareValueInterceptor(el),
            prepareSelectionInterceptor(el),
            (function prepareRangeTextInterceptor(element) {
              prepareInterceptor(
                element,
                'setRangeText',
                function interceptorImpl(...realArgs) {
                  return {
                    realArgs: realArgs,
                    then: () => {
                      setUIValueClean(element), setUISelectionClean(element);
                    },
                  };
                }
              );
            })(el)),
          (el[isPrepared] = isPrepared));
      }
      function wait(config) {
        const delay = config.delay;
        if ('number' == typeof delay)
          return Promise.all([
            new Promise(resolve =>
              globalThis.setTimeout(() => resolve(), delay)
            ),
            config.advanceTimers(delay),
          ]);
      }
      function keyboard_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      var DOM_KEY_LOCATION;
      !(function(DOM_KEY_LOCATION) {
        (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.STANDARD = 0)] = 'STANDARD'),
          (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.LEFT = 1)] = 'LEFT'),
          (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.RIGHT = 2)] = 'RIGHT'),
          (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.NUMPAD = 3)] = 'NUMPAD');
      })(DOM_KEY_LOCATION || (DOM_KEY_LOCATION = {}));
      const modifierKeys = [
        'Alt',
        'AltGraph',
        'Control',
        'Fn',
        'Meta',
        'Shift',
        'Symbol',
      ];
      function isModifierKey(key) {
        return modifierKeys.includes(key);
      }
      const modifierLocks = [
        'CapsLock',
        'FnLock',
        'NumLock',
        'ScrollLock',
        'SymbolLock',
      ];
      function isModifierLock(key) {
        return modifierLocks.includes(key);
      }
      class KeyboardHost {
        isKeyPressed(keyDef) {
          return !!this.pressed[String(keyDef.code)];
        }
        getPressedKeys() {
          return Object.values(this.pressed).map(p => p.keyDef);
        }
        async keydown(instance, keyDef) {
          var _this_pressed, _code, _this_pressed_code;
          const key = String(keyDef.key),
            code = String(keyDef.code),
            target = getActiveElementOrBody(instance.config.document);
          var _;
          this.setKeydownTarget(target),
            (null !== (_ = (_this_pressed = this.pressed)[(_code = code)]) &&
              void 0 !== _) ||
              (_this_pressed[_code] = {
                keyDef: keyDef,
                unpreventedDefault: !1,
              }),
            isModifierKey(key) && (this.modifiers[key] = !0);
          const unprevented = instance.dispatchUIEvent(target, 'keydown', {
            key: key,
            code: code,
          });
          isModifierLock(key) &&
            !this.modifiers[key] &&
            ((this.modifiers[key] = !0), (this.modifierLockStart[key] = !0)),
            (_this_pressed_code = this.pressed[code]).unpreventedDefault ||
              (_this_pressed_code.unpreventedDefault = unprevented),
            unprevented &&
              this.hasKeyPress(key) &&
              instance.dispatchUIEvent(
                getActiveElementOrBody(instance.config.document),
                'keypress',
                {
                  key: key,
                  code: code,
                  charCode:
                    'Enter' === keyDef.key
                      ? 13
                      : String(keyDef.key).charCodeAt(0),
                }
              );
        }
        async keyup(instance, keyDef) {
          const key = String(keyDef.key),
            code = String(keyDef.code),
            unprevented = this.pressed[code].unpreventedDefault;
          delete this.pressed[code],
            isModifierKey(key) &&
              !Object.values(this.pressed).find(p => p.keyDef.key === key) &&
              (this.modifiers[key] = !1),
            instance.dispatchUIEvent(
              getActiveElementOrBody(instance.config.document),
              'keyup',
              { key: key, code: code },
              !unprevented
            ),
            isModifierLock(key) &&
              this.modifiers[key] &&
              (this.modifierLockStart[key]
                ? (this.modifierLockStart[key] = !1)
                : (this.modifiers[key] = !1));
        }
        setKeydownTarget(target) {
          target !== this.lastKeydownTarget && (this.carryChar = ''),
            (this.lastKeydownTarget = target);
        }
        hasKeyPress(key) {
          return !(
            (1 !== key.length && 'Enter' !== key) ||
            this.modifiers.Control ||
            this.modifiers.Alt
          );
        }
        constructor(system) {
          keyboard_define_property(this, 'system', void 0),
            keyboard_define_property(this, 'modifiers', {
              Alt: !1,
              AltGraph: !1,
              CapsLock: !1,
              Control: !1,
              Fn: !1,
              FnLock: !1,
              Meta: !1,
              NumLock: !1,
              ScrollLock: !1,
              Shift: !1,
              Symbol: !1,
              SymbolLock: !1,
            }),
            keyboard_define_property(this, 'pressed', {}),
            keyboard_define_property(this, 'carryChar', ''),
            keyboard_define_property(this, 'lastKeydownTarget', void 0),
            keyboard_define_property(this, 'modifierLockStart', {}),
            (this.system = system);
        }
      }
      const defaultKeyMap = [
        ...'0123456789'.split('').map(c => ({ code: `Digit${c}`, key: c })),
        ...')!@#$%^&*('
          .split('')
          .map((c, i) => ({ code: `Digit${i}`, key: c, shiftKey: !0 })),
        ...'abcdefghijklmnopqrstuvwxyz'
          .split('')
          .map(c => ({ code: `Key${c.toUpperCase()}`, key: c })),
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          .split('')
          .map(c => ({ code: `Key${c}`, key: c, shiftKey: !0 })),
        { code: 'Space', key: ' ' },
        { code: 'AltLeft', key: 'Alt', location: DOM_KEY_LOCATION.LEFT },
        { code: 'AltRight', key: 'Alt', location: DOM_KEY_LOCATION.RIGHT },
        { code: 'ShiftLeft', key: 'Shift', location: DOM_KEY_LOCATION.LEFT },
        { code: 'ShiftRight', key: 'Shift', location: DOM_KEY_LOCATION.RIGHT },
        {
          code: 'ControlLeft',
          key: 'Control',
          location: DOM_KEY_LOCATION.LEFT,
        },
        {
          code: 'ControlRight',
          key: 'Control',
          location: DOM_KEY_LOCATION.RIGHT,
        },
        { code: 'MetaLeft', key: 'Meta', location: DOM_KEY_LOCATION.LEFT },
        { code: 'MetaRight', key: 'Meta', location: DOM_KEY_LOCATION.RIGHT },
        { code: 'OSLeft', key: 'OS', location: DOM_KEY_LOCATION.LEFT },
        { code: 'OSRight', key: 'OS', location: DOM_KEY_LOCATION.RIGHT },
        { code: 'Tab', key: 'Tab' },
        { code: 'CapsLock', key: 'CapsLock' },
        { code: 'Backspace', key: 'Backspace' },
        { code: 'Enter', key: 'Enter' },
        { code: 'Escape', key: 'Escape' },
        { code: 'ArrowUp', key: 'ArrowUp' },
        { code: 'ArrowDown', key: 'ArrowDown' },
        { code: 'ArrowLeft', key: 'ArrowLeft' },
        { code: 'ArrowRight', key: 'ArrowRight' },
        { code: 'Home', key: 'Home' },
        { code: 'End', key: 'End' },
        { code: 'Delete', key: 'Delete' },
        { code: 'PageUp', key: 'PageUp' },
        { code: 'PageDown', key: 'PageDown' },
        { code: 'Fn', key: 'Fn' },
        { code: 'Symbol', key: 'Symbol' },
        { code: 'AltRight', key: 'AltGraph' },
      ];
      class Buttons {
        getButtons() {
          let v = 0;
          for (const button of Object.keys(this.pressed))
            v |= 2 ** Number(button);
          return v;
        }
        down(keyDef) {
          const button = getMouseButtonId(keyDef.button);
          if (!(button in this.pressed))
            return (this.pressed[button] = [keyDef]), button;
          this.pressed[button].push(keyDef);
        }
        up(keyDef) {
          const button = getMouseButtonId(keyDef.button);
          if (
            button in this.pressed &&
            ((this.pressed[button] = this.pressed[button].filter(
              k => k.name !== keyDef.name
            )),
            0 === this.pressed[button].length)
          )
            return delete this.pressed[button], button;
        }
        constructor() {
          !(function buttons_define_property(obj, key, value) {
            return (
              key in obj
                ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (obj[key] = value),
              obj
            );
          })(this, 'pressed', {});
        }
      }
      const MouseButton = {
        primary: 0,
        secondary: 1,
        auxiliary: 2,
        back: 3,
        X1: 3,
        forward: 4,
        X2: 4,
      };
      function getMouseButtonId(button = 0) {
        return button in MouseButton ? MouseButton[button] : Number(button);
      }
      const MouseButtonFlip = { 1: 2, 2: 1 };
      function getMouseEventButton(button) {
        return (button = getMouseButtonId(button)) in MouseButtonFlip
          ? MouseButtonFlip[button]
          : button;
      }
      class Device {
        get countPressed() {
          return this.pressedKeys.size;
        }
        isPressed(keyDef) {
          return this.pressedKeys.has(keyDef.name);
        }
        addPressed(keyDef) {
          return this.pressedKeys.add(keyDef.name);
        }
        removePressed(keyDef) {
          return this.pressedKeys.delete(keyDef.name);
        }
        constructor() {
          !(function device_define_property(obj, key, value) {
            return (
              key in obj
                ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (obj[key] = value),
              obj
            );
          })(this, 'pressedKeys', new Set());
        }
      }
      function getTreeDiff(a, b) {
        const treeA = [];
        for (let el = a; el; el = el.parentElement) treeA.push(el);
        const treeB = [];
        for (let el = b; el; el = el.parentElement) treeB.push(el);
        let i = 0;
        for (
          ;
          !(
            i >= treeA.length ||
            i >= treeB.length ||
            treeA[treeA.length - 1 - i] !== treeB[treeB.length - 1 - i]
          );
          i++
        );
        return [
          treeA.slice(0, treeA.length - i),
          treeB.slice(0, treeB.length - i),
          treeB.slice(treeB.length - i),
        ];
      }
      function resolveCaretPosition({
        target: target,
        node: node,
        offset: offset,
      }) {
        return hasOwnSelection(target)
          ? {
              node: target,
              offset: null != offset ? offset : getUIValue(target).length,
            }
          : node
            ? {
                node: node,
                offset:
                  null != offset
                    ? offset
                    : 3 === node.nodeType
                      ? node.nodeValue.length
                      : node.childNodes.length,
              }
            : findNodeAtTextOffset(target, offset);
      }
      function findNodeAtTextOffset(node, offset, isRoot = !0) {
        let i = void 0 === offset ? node.childNodes.length - 1 : 0;
        const step = void 0 === offset ? -1 : 1;
        for (
          ;
          void 0 === offset
            ? i >= (isRoot ? Math.max(node.childNodes.length - 1, 0) : 0)
            : i <= node.childNodes.length;

        ) {
          if (offset && i === node.childNodes.length)
            throw new Error('The given offset is out of bounds.');
          const c = node.childNodes.item(i),
            text = String(c.textContent);
          if (text.length)
            if (void 0 !== offset && text.length < offset)
              offset -= text.length;
            else {
              if (1 === c.nodeType) return findNodeAtTextOffset(c, offset, !1);
              if (3 === c.nodeType)
                return {
                  node: c,
                  offset: null != offset ? offset : c.nodeValue.length,
                };
            }
          i += step;
        }
        return { node: node, offset: node.childNodes.length };
      }
      function setSelectionPerMouseDown({
        document: document,
        target: target,
        clickCount: clickCount,
        node: node,
        offset: offset,
      }) {
        if (
          (function hasNoSelection(node) {
            return isElement(node) && isClickableInput(node);
          })(target)
        )
          return;
        const targetHasOwnSelection = hasOwnSelection(target),
          text = String(
            targetHasOwnSelection ? getUIValue(target) : target.textContent
          ),
          [start, end] = node
            ? [offset, offset]
            : (function getTextRange(text, pos, clickCount) {
                if (clickCount % 3 == 1 || 0 === text.length) return [pos, pos];
                const textPos = null != pos ? pos : text.length;
                if (clickCount % 3 == 2)
                  return [
                    textPos -
                      text.substr(0, pos).match(/(\w+|\s+|\W)?$/)[0].length,
                    void 0 === pos
                      ? pos
                      : pos +
                        text.substr(pos).match(/^(\w+|\s+|\W)?/)[0].length,
                  ];
                return [
                  textPos - text.substr(0, pos).match(/[^\r\n]*$/)[0].length,
                  void 0 === pos
                    ? pos
                    : pos + text.substr(pos).match(/^[^\r\n]*/)[0].length,
                ];
              })(text, offset, clickCount);
        if (targetHasOwnSelection)
          return (
            setUISelection(target, {
              anchorOffset: null != start ? start : text.length,
              focusOffset: null != end ? end : text.length,
            }),
            {
              node: target,
              start: null != start ? start : 0,
              end: null != end ? end : text.length,
            }
          );
        {
          const { node: startNode, offset: startOffset } = resolveCaretPosition(
              { target: target, node: node, offset: start }
            ),
            { node: endNode, offset: endOffset } = resolveCaretPosition({
              target: target,
              node: node,
              offset: end,
            }),
            range = target.ownerDocument.createRange();
          try {
            range.setStart(startNode, startOffset),
              range.setEnd(endNode, endOffset);
          } catch (e) {
            throw new Error('The given offset is out of bounds.');
          }
          const selection = document.getSelection();
          return (
            null == selection || selection.removeAllRanges(),
            null == selection || selection.addRange(range.cloneRange()),
            range
          );
        }
      }
      function isDifferentPointerPosition(positionA, positionB) {
        var _positionA_coords,
          _positionB_coords,
          _positionA_coords1,
          _positionB_coords1,
          _positionA_caret,
          _positionB_caret,
          _positionA_caret1,
          _positionB_caret1;
        return (
          positionA.target !== positionB.target ||
          (null === (_positionA_coords = positionA.coords) ||
          void 0 === _positionA_coords
            ? void 0
            : _positionA_coords.x) !==
            (null === (_positionB_coords = positionB.coords) ||
            void 0 === _positionB_coords
              ? void 0
              : _positionB_coords.y) ||
          (null === (_positionA_coords1 = positionA.coords) ||
          void 0 === _positionA_coords1
            ? void 0
            : _positionA_coords1.y) !==
            (null === (_positionB_coords1 = positionB.coords) ||
            void 0 === _positionB_coords1
              ? void 0
              : _positionB_coords1.y) ||
          (null === (_positionA_caret = positionA.caret) ||
          void 0 === _positionA_caret
            ? void 0
            : _positionA_caret.node) !==
            (null === (_positionB_caret = positionB.caret) ||
            void 0 === _positionB_caret
              ? void 0
              : _positionB_caret.node) ||
          (null === (_positionA_caret1 = positionA.caret) ||
          void 0 === _positionA_caret1
            ? void 0
            : _positionA_caret1.offset) !==
            (null === (_positionB_caret1 = positionB.caret) ||
            void 0 === _positionB_caret1
              ? void 0
              : _positionB_caret1.offset)
        );
      }
      function mouse_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      class Mouse {
        move(instance, position) {
          const prevPosition = this.position,
            prevTarget = this.getTarget(instance);
          if (
            ((this.position = position),
            !isDifferentPointerPosition(prevPosition, position))
          )
            return;
          const nextTarget = this.getTarget(instance),
            init = this.getEventInit('mousemove'),
            [leave, enter] = getTreeDiff(prevTarget, nextTarget);
          return {
            leave: () => {
              prevTarget !== nextTarget &&
                (instance.dispatchUIEvent(prevTarget, 'mouseout', init),
                leave.forEach(el =>
                  instance.dispatchUIEvent(el, 'mouseleave', init)
                ));
            },
            enter: () => {
              prevTarget !== nextTarget &&
                (instance.dispatchUIEvent(nextTarget, 'mouseover', init),
                enter.forEach(el =>
                  instance.dispatchUIEvent(el, 'mouseenter', init)
                ));
            },
            move: () => {
              instance.dispatchUIEvent(nextTarget, 'mousemove', init),
                this.modifySelecting(instance);
            },
          };
        }
        down(instance, keyDef, pointer) {
          const button = this.buttons.down(keyDef);
          if (void 0 === button) return;
          const target = this.getTarget(instance);
          this.buttonDownTarget[button] = target;
          const disabled = isDisabled(target),
            init = this.getEventInit('mousedown', keyDef.button);
          (disabled || instance.dispatchUIEvent(target, 'mousedown', init)) &&
            (this.startSelecting(instance, init.detail), focusElement(target)),
            disabled ||
              2 !== getMouseEventButton(keyDef.button) ||
              instance.dispatchUIEvent(
                target,
                'contextmenu',
                this.getEventInit('contextmenu', keyDef.button, pointer)
              );
        }
        up(instance, keyDef, pointer) {
          const button = this.buttons.up(keyDef);
          if (void 0 === button) return;
          const target = this.getTarget(instance);
          if (!isDisabled(target)) {
            instance.dispatchUIEvent(
              target,
              'mouseup',
              this.getEventInit('mouseup', keyDef.button)
            ),
              this.endSelecting();
            const clickTarget = getTreeDiff(
              this.buttonDownTarget[button],
              target
            )[2][0];
            if (clickTarget) {
              const init = this.getEventInit('click', keyDef.button, pointer);
              init.detail &&
                (instance.dispatchUIEvent(
                  clickTarget,
                  0 === init.button ? 'click' : 'auxclick',
                  init
                ),
                0 === init.button &&
                  2 === init.detail &&
                  instance.dispatchUIEvent(clickTarget, 'dblclick', {
                    ...this.getEventInit('dblclick', keyDef.button),
                    detail: init.detail,
                  }));
            }
          }
        }
        resetClickCount() {
          this.clickCount.reset();
        }
        getEventInit(type, button, pointer) {
          const init = { ...this.position.coords };
          return (
            pointer &&
              ((init.pointerId = pointer.pointerId),
              (init.pointerType = pointer.pointerType),
              (init.isPrimary = pointer.isPrimary)),
            (init.button = getMouseEventButton(button)),
            (init.buttons = this.buttons.getButtons()),
            'mousedown' === type
              ? (init.detail = this.clickCount.getOnDown(init.button))
              : 'mouseup' === type
                ? (init.detail = this.clickCount.getOnUp(init.button))
                : ('click' !== type && 'auxclick' !== type) ||
                  (init.detail = this.clickCount.incOnClick(init.button)),
            init
          );
        }
        getTarget(instance) {
          var _this_position_target;
          return null !== (_this_position_target = this.position.target) &&
            void 0 !== _this_position_target
            ? _this_position_target
            : instance.config.document.body;
        }
        startSelecting(instance, clickCount) {
          var _this_position_caret, _this_position_caret1;
          this.selecting = setSelectionPerMouseDown({
            document: instance.config.document,
            target: this.getTarget(instance),
            node:
              null === (_this_position_caret = this.position.caret) ||
              void 0 === _this_position_caret
                ? void 0
                : _this_position_caret.node,
            offset:
              null === (_this_position_caret1 = this.position.caret) ||
              void 0 === _this_position_caret1
                ? void 0
                : _this_position_caret1.offset,
            clickCount: clickCount,
          });
        }
        modifySelecting(instance) {
          var _this_position_caret, _this_position_caret1;
          this.selecting &&
            (function modifySelectionPerMouseMove(
              selectionRange,
              { document: document, target: target, node: node, offset: offset }
            ) {
              const selectionFocus = resolveCaretPosition({
                target: target,
                node: node,
                offset: offset,
              });
              if ('node' in selectionRange) {
                if (selectionFocus.node === selectionRange.node) {
                  const anchorOffset =
                      selectionFocus.offset < selectionRange.start
                        ? selectionRange.end
                        : selectionRange.start,
                    focusOffset =
                      selectionFocus.offset > selectionRange.end ||
                      selectionFocus.offset < selectionRange.start
                        ? selectionFocus.offset
                        : selectionRange.end;
                  setUISelection(selectionRange.node, {
                    anchorOffset: anchorOffset,
                    focusOffset: focusOffset,
                  });
                }
              } else {
                const range = selectionRange.cloneRange(),
                  cmp = range.comparePoint(
                    selectionFocus.node,
                    selectionFocus.offset
                  );
                cmp < 0
                  ? range.setStart(selectionFocus.node, selectionFocus.offset)
                  : cmp > 0 &&
                    range.setEnd(selectionFocus.node, selectionFocus.offset);
                const selection = document.getSelection();
                null == selection || selection.removeAllRanges(),
                  null == selection || selection.addRange(range.cloneRange());
              }
            })(this.selecting, {
              document: instance.config.document,
              target: this.getTarget(instance),
              node:
                null === (_this_position_caret = this.position.caret) ||
                void 0 === _this_position_caret
                  ? void 0
                  : _this_position_caret.node,
              offset:
                null === (_this_position_caret1 = this.position.caret) ||
                void 0 === _this_position_caret1
                  ? void 0
                  : _this_position_caret1.offset,
            });
        }
        endSelecting() {
          this.selecting = void 0;
        }
        constructor() {
          mouse_define_property(this, 'position', {}),
            mouse_define_property(this, 'buttons', new Buttons()),
            mouse_define_property(this, 'selecting', void 0),
            mouse_define_property(this, 'buttonDownTarget', {}),
            mouse_define_property(
              this,
              'clickCount',
              new class {
                incOnClick(button) {
                  const current =
                    void 0 === this.down[button]
                      ? void 0
                      : Number(this.down[button]) + 1;
                  return (
                    (this.count =
                      void 0 === this.count[button]
                        ? {}
                        : { [button]: Number(this.count[button]) + 1 }),
                    current
                  );
                }
                getOnDown(button) {
                  var _this_count_button, _this_count_button1;
                  return (
                    (this.down = {
                      [button]:
                        null !== (_this_count_button = this.count[button]) &&
                        void 0 !== _this_count_button
                          ? _this_count_button
                          : 0,
                    }),
                    (this.count = {
                      [button]:
                        null !== (_this_count_button1 = this.count[button]) &&
                        void 0 !== _this_count_button1
                          ? _this_count_button1
                          : 0,
                    }),
                    Number(this.count[button]) + 1
                  );
                }
                getOnUp(button) {
                  return void 0 === this.down[button]
                    ? void 0
                    : Number(this.down[button]) + 1;
                }
                reset() {
                  this.count = {};
                }
                constructor() {
                  mouse_define_property(this, 'down', {}),
                    mouse_define_property(this, 'count', {});
                }
              }()
            );
        }
      }
      function hasPointerEvents(instance, element) {
        var _checkPointerEvents;
        return (
          'none' !==
          (null ===
            (_checkPointerEvents = checkPointerEvents(instance, element)) ||
          void 0 === _checkPointerEvents
            ? void 0
            : _checkPointerEvents.pointerEvents)
        );
      }
      const PointerEventsCheck = Symbol('Last check for pointer-events');
      function checkPointerEvents(instance, element) {
        const lastCheck = element[PointerEventsCheck];
        if (
          !(
            instance.config.pointerEventsCheck !==
              PointerEventsCheckLevel.Never &&
            (!lastCheck ||
              (hasBitFlag(
                instance.config.pointerEventsCheck,
                PointerEventsCheckLevel.EachApiCall
              ) &&
                lastCheck[ApiLevel.Call] !==
                  getLevelRef(instance, ApiLevel.Call)) ||
              (hasBitFlag(
                instance.config.pointerEventsCheck,
                PointerEventsCheckLevel.EachTrigger
              ) &&
                lastCheck[ApiLevel.Trigger] !==
                  getLevelRef(instance, ApiLevel.Trigger)))
          )
        )
          return null == lastCheck ? void 0 : lastCheck.result;
        const declaration = (function closestPointerEventsDeclaration(element) {
          const window = getWindow(element);
          for (
            let el = element, tree = [];
            null == el ? void 0 : el.ownerDocument;
            el = el.parentElement
          ) {
            tree.push(el);
            const pointerEvents = window.getComputedStyle(el).pointerEvents;
            if (pointerEvents && !['inherit', 'unset'].includes(pointerEvents))
              return { pointerEvents: pointerEvents, tree: tree };
          }
        })(element);
        return (
          (element[PointerEventsCheck] = {
            [ApiLevel.Call]: getLevelRef(instance, ApiLevel.Call),
            [ApiLevel.Trigger]: getLevelRef(instance, ApiLevel.Trigger),
            result: declaration,
          }),
          declaration
        );
      }
      function assertPointerEvents(instance, element) {
        const declaration = checkPointerEvents(instance, element);
        if (
          'none' === (null == declaration ? void 0 : declaration.pointerEvents)
        )
          throw new Error(
            [
              `Unable to perform pointer interaction as the element ${
                declaration.tree.length > 1 ? 'inherits' : 'has'
              } \`pointer-events: none\`:`,
              '',
              ((tree = declaration.tree),
              tree
                .reverse()
                .map((el, i) =>
                  [
                    ''.padEnd(i),
                    el.tagName,
                    el.id && `#${el.id}`,
                    el.hasAttribute('data-testid') &&
                      `(testId=${el.getAttribute('data-testid')})`,
                    getLabelDescr(el),
                    tree.length > 1 &&
                      0 === i &&
                      '  <-- This element declared `pointer-events: none`',
                    tree.length > 1 &&
                      i === tree.length - 1 &&
                      '  <-- Asserted pointer events here',
                  ]
                    .filter(Boolean)
                    .join('')
                )
                .join('\n')),
            ].join('\n')
          );
        var tree;
      }
      function getLabelDescr(element) {
        var _element_labels;
        let label;
        if (element.hasAttribute('aria-label'))
          label = element.getAttribute('aria-label');
        else if (element.hasAttribute('aria-labelledby')) {
          var _element_ownerDocument_getElementById_textContent,
            _element_ownerDocument_getElementById;
          label =
            null ===
              (_element_ownerDocument_getElementById = element.ownerDocument.getElementById(
                element.getAttribute('aria-labelledby')
              )) ||
            void 0 === _element_ownerDocument_getElementById ||
            null ===
              (_element_ownerDocument_getElementById_textContent =
                _element_ownerDocument_getElementById.textContent) ||
            void 0 === _element_ownerDocument_getElementById_textContent
              ? void 0
              : _element_ownerDocument_getElementById_textContent.trim();
        } else if (
          isElementType(element, [
            'button',
            'input',
            'meter',
            'output',
            'progress',
            'select',
            'textarea',
          ]) &&
          (null === (_element_labels = element.labels) ||
          void 0 === _element_labels
            ? void 0
            : _element_labels.length)
        )
          label = Array.from(element.labels)
            .map(el => {
              var _el_textContent;
              return null === (_el_textContent = el.textContent) ||
                void 0 === _el_textContent
                ? void 0
                : _el_textContent.trim();
            })
            .join('|');
        else if (isElementType(element, 'button')) {
          var _element_textContent;
          label =
            null === (_element_textContent = element.textContent) ||
            void 0 === _element_textContent
              ? void 0
              : _element_textContent.trim();
        }
        return (
          (label = null == label ? void 0 : label.replace(/\n/g, '  ')),
          Number(null == label ? void 0 : label.length) > 30 &&
            (label = `${null == label ? void 0 : label.substring(0, 29)}…`),
          label ? `(label=${label})` : ''
        );
      }
      function hasBitFlag(conf, flag) {
        return (conf & flag) > 0;
      }
      function pointer_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      class Pointer {
        init(instance, position) {
          this.position = position;
          const target = this.getTarget(instance),
            [, enter] = getTreeDiff(null, target),
            init = this.getEventInit();
          return (
            assertPointerEvents(instance, target),
            instance.dispatchUIEvent(target, 'pointerover', init),
            enter.forEach(el =>
              instance.dispatchUIEvent(el, 'pointerenter', init)
            ),
            this
          );
        }
        move(instance, position) {
          const prevPosition = this.position,
            prevTarget = this.getTarget(instance);
          if (
            ((this.position = position),
            !isDifferentPointerPosition(prevPosition, position))
          )
            return;
          const nextTarget = this.getTarget(instance),
            init = this.getEventInit(),
            [leave, enter] = getTreeDiff(prevTarget, nextTarget);
          return {
            leave: () => {
              hasPointerEvents(instance, prevTarget) &&
                prevTarget !== nextTarget &&
                (instance.dispatchUIEvent(prevTarget, 'pointerout', init),
                leave.forEach(el =>
                  instance.dispatchUIEvent(el, 'pointerleave', init)
                ));
            },
            enter: () => {
              assertPointerEvents(instance, nextTarget),
                prevTarget !== nextTarget &&
                  (instance.dispatchUIEvent(nextTarget, 'pointerover', init),
                  enter.forEach(el =>
                    instance.dispatchUIEvent(el, 'pointerenter', init)
                  ));
            },
            move: () => {
              instance.dispatchUIEvent(nextTarget, 'pointermove', init);
            },
          };
        }
        down(instance, _keyDef) {
          if (this.isDown) return;
          const target = this.getTarget(instance);
          assertPointerEvents(instance, target),
            (this.isDown = !0),
            (this.isPrevented = !instance.dispatchUIEvent(
              target,
              'pointerdown',
              this.getEventInit()
            ));
        }
        up(instance, _keyDef) {
          if (!this.isDown) return;
          const target = this.getTarget(instance);
          assertPointerEvents(instance, target),
            (this.isDown = !1),
            instance.dispatchUIEvent(target, 'pointerup', this.getEventInit());
        }
        release(instance) {
          const target = this.getTarget(instance),
            [leave] = getTreeDiff(target, null),
            init = this.getEventInit();
          hasPointerEvents(instance, target) &&
            (instance.dispatchUIEvent(target, 'pointerout', init),
            leave.forEach(el =>
              instance.dispatchUIEvent(el, 'pointerleave', init)
            )),
            (this.isCancelled = !0);
        }
        getTarget(instance) {
          var _this_position_target;
          return null !== (_this_position_target = this.position.target) &&
            void 0 !== _this_position_target
            ? _this_position_target
            : instance.config.document.body;
        }
        getEventInit() {
          return {
            ...this.position.coords,
            pointerId: this.pointerId,
            pointerType: this.pointerType,
            isPrimary: this.isPrimary,
          };
        }
        constructor({
          pointerId: pointerId,
          pointerType: pointerType,
          isPrimary: isPrimary,
        }) {
          pointer_define_property(this, 'pointerId', void 0),
            pointer_define_property(this, 'pointerType', void 0),
            pointer_define_property(this, 'isPrimary', void 0),
            pointer_define_property(this, 'isMultitouch', !1),
            pointer_define_property(this, 'isCancelled', !1),
            pointer_define_property(this, 'isDown', !1),
            pointer_define_property(this, 'isPrevented', !1),
            pointer_define_property(this, 'position', {}),
            (this.pointerId = pointerId),
            (this.pointerType = pointerType),
            (this.isPrimary = isPrimary),
            (this.isMultitouch = !isPrimary);
        }
      }
      function system_pointer_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      class PointerHost {
        isKeyPressed(keyDef) {
          return this.devices.get(keyDef.pointerType).isPressed(keyDef);
        }
        async press(instance, keyDef, position) {
          const pointerName = this.getPointerName(keyDef),
            pointer =
              'touch' === keyDef.pointerType
                ? this.pointers
                    .new(pointerName, keyDef)
                    .init(instance, position)
                : this.pointers.get(pointerName);
          (pointer.position = position),
            'touch' !== pointer.pointerType && (this.mouse.position = position),
            this.devices.get(keyDef.pointerType).addPressed(keyDef),
            this.buttons.down(keyDef),
            pointer.down(instance, keyDef),
            'touch' === pointer.pointerType ||
              pointer.isPrevented ||
              this.mouse.down(instance, keyDef, pointer);
        }
        async move(instance, pointerName, position) {
          const pointer = this.pointers.get(pointerName),
            pointermove = pointer.move(instance, position),
            mousemove =
              'touch' === pointer.pointerType ||
              (pointer.isPrevented && pointer.isDown)
                ? void 0
                : this.mouse.move(instance, position);
          null == pointermove || pointermove.leave(),
            null == mousemove || mousemove.leave(),
            null == pointermove || pointermove.enter(),
            null == mousemove || mousemove.enter(),
            null == pointermove || pointermove.move(),
            null == mousemove || mousemove.move();
        }
        async release(instance, keyDef, position) {
          const device = this.devices.get(keyDef.pointerType);
          device.removePressed(keyDef), this.buttons.up(keyDef);
          const pointer = this.pointers.get(this.getPointerName(keyDef));
          if (
            ((pointer.position = position),
            'touch' !== pointer.pointerType && (this.mouse.position = position),
            0 === device.countPressed && pointer.up(instance, keyDef),
            'touch' === pointer.pointerType && pointer.release(instance),
            !pointer.isPrevented)
          ) {
            if ('touch' === pointer.pointerType && !pointer.isMultitouch) {
              const mousemove = this.mouse.move(instance, pointer.position);
              null == mousemove || mousemove.leave(),
                null == mousemove || mousemove.enter(),
                null == mousemove || mousemove.move(),
                this.mouse.down(instance, keyDef, pointer);
            }
            if (!pointer.isMultitouch) {
              const mousemove = this.mouse.move(instance, pointer.position);
              null == mousemove || mousemove.leave(),
                null == mousemove || mousemove.enter(),
                null == mousemove || mousemove.move(),
                this.mouse.up(instance, keyDef, pointer);
            }
          }
        }
        getPointerName(keyDef) {
          return 'touch' === keyDef.pointerType
            ? keyDef.name
            : keyDef.pointerType;
        }
        getPreviousPosition(pointerName) {
          return this.pointers.has(pointerName)
            ? this.pointers.get(pointerName).position
            : void 0;
        }
        resetClickCount() {
          this.mouse.resetClickCount();
        }
        getMouseTarget(instance) {
          var _this_mouse_position_target;
          return null !==
            (_this_mouse_position_target = this.mouse.position.target) &&
            void 0 !== _this_mouse_position_target
            ? _this_mouse_position_target
            : instance.config.document.body;
        }
        setMousePosition(position) {
          (this.mouse.position = position),
            (this.pointers.get('mouse').position = position);
        }
        constructor(system) {
          system_pointer_define_property(this, 'system', void 0),
            system_pointer_define_property(this, 'mouse', void 0),
            system_pointer_define_property(this, 'buttons', void 0),
            system_pointer_define_property(
              this,
              'devices',
              new class {
                get(k) {
                  var _this_registry, _k, _;
                  return (
                    (null !==
                      (_ = (_this_registry = this.registry)[(_k = k)]) &&
                      void 0 !== _) ||
                      (_this_registry[_k] = new Device()),
                    this.registry[k]
                  );
                }
                constructor() {
                  system_pointer_define_property(this, 'registry', {});
                }
              }()
            ),
            system_pointer_define_property(
              this,
              'pointers',
              new class {
                new(pointerName, keyDef) {
                  const isPrimary =
                    'touch' !== keyDef.pointerType ||
                    !Object.values(this.registry).some(
                      p => 'touch' === p.pointerType && !p.isCancelled
                    );
                  return (
                    isPrimary ||
                      Object.values(this.registry).forEach(p => {
                        p.pointerType !== keyDef.pointerType ||
                          p.isCancelled ||
                          (p.isMultitouch = !0);
                      }),
                    (this.registry[pointerName] = new Pointer({
                      pointerId: this.nextId++,
                      pointerType: keyDef.pointerType,
                      isPrimary: isPrimary,
                    })),
                    this.registry[pointerName]
                  );
                }
                get(pointerName) {
                  if (!this.has(pointerName))
                    throw new Error(
                      `Trying to access pointer "${pointerName}" which does not exist.`
                    );
                  return this.registry[pointerName];
                }
                has(pointerName) {
                  return pointerName in this.registry;
                }
                constructor() {
                  system_pointer_define_property(this, 'registry', {
                    mouse: new Pointer({
                      pointerId: 1,
                      pointerType: 'mouse',
                      isPrimary: !0,
                    }),
                  }),
                    system_pointer_define_property(this, 'nextId', 2);
                }
              }()
            ),
            (this.system = system),
            (this.buttons = new Buttons()),
            (this.mouse = new Mouse());
        }
      }
      function system_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      class System {
        getUIEventModifiers() {
          return {
            altKey: this.keyboard.modifiers.Alt,
            ctrlKey: this.keyboard.modifiers.Control,
            metaKey: this.keyboard.modifiers.Meta,
            shiftKey: this.keyboard.modifiers.Shift,
            modifierAltGraph: this.keyboard.modifiers.AltGraph,
            modifierCapsLock: this.keyboard.modifiers.CapsLock,
            modifierFn: this.keyboard.modifiers.Fn,
            modifierFnLock: this.keyboard.modifiers.FnLock,
            modifierNumLock: this.keyboard.modifiers.NumLock,
            modifierScrollLock: this.keyboard.modifiers.ScrollLock,
            modifierSymbol: this.keyboard.modifiers.Symbol,
            modifierSymbolLock: this.keyboard.modifiers.SymbolLock,
          };
        }
        constructor() {
          system_define_property(this, 'keyboard', new KeyboardHost(this)),
            system_define_property(this, 'pointer', new PointerHost(this));
        }
      }
      async function keyboardAction(
        instance,
        {
          keyDef: keyDef,
          releasePrevious: releasePrevious,
          releaseSelf: releaseSelf,
          repeat: repeat,
        }
      ) {
        const { system: system } = instance;
        if (
          (system.keyboard.isKeyPressed(keyDef) &&
            (await system.keyboard.keyup(instance, keyDef)),
          !releasePrevious)
        ) {
          for (let i = 1; i <= repeat; i++)
            await system.keyboard.keydown(instance, keyDef),
              i < repeat && (await wait(instance.config));
          releaseSelf && (await system.keyboard.keyup(instance, keyDef));
        }
      }
      function copySelection(target) {
        const data = hasOwnSelection(target)
            ? { 'text/plain': readSelectedValueFromInput(target) }
            : { 'text/plain': String(target.ownerDocument.getSelection()) },
          dt = createDataTransfer(getWindow(target));
        for (const type in data) data[type] && dt.setData(type, data[type]);
        return dt;
      }
      function readSelectedValueFromInput(target) {
        const sel = getUISelection(target);
        return getUIValue(target).substring(sel.startOffset, sel.endOffset);
      }
      function parseKeyDef_parseKeyDef(pointerMap, keys) {
        const defs = [];
        do {
          const {
              descriptor: descriptor,
              consumedLength: consumedLength,
              releasePrevious: releasePrevious,
              releaseSelf: releaseSelf = !0,
            } = readNextDescriptor(keys, 'pointer'),
            keyDef = pointerMap.find(p => p.name === descriptor);
          keyDef &&
            defs.push({
              keyDef: keyDef,
              releasePrevious: releasePrevious,
              releaseSelf: releaseSelf,
            }),
            (keys = keys.slice(consumedLength));
        } while (keys);
        return defs;
      }
      async function pointerAction(instance, action) {
        var _previousPosition_caret, _previousPosition_caret1;
        const pointerName =
            'pointerName' in action && action.pointerName
              ? action.pointerName
              : 'keyDef' in action
                ? instance.system.pointer.getPointerName(action.keyDef)
                : 'mouse',
          previousPosition = instance.system.pointer.getPreviousPosition(
            pointerName
          );
        var _action_target, _action_coords, _action_node, _action_offset;
        const position = {
          target:
            null !== (_action_target = action.target) &&
            void 0 !== _action_target
              ? _action_target
              : getPrevTarget(instance, previousPosition),
          coords:
            null !== (_action_coords = action.coords) &&
            void 0 !== _action_coords
              ? _action_coords
              : null == previousPosition
                ? void 0
                : previousPosition.coords,
          caret: {
            node:
              null !== (_action_node = action.node) && void 0 !== _action_node
                ? _action_node
                : hasCaretPosition(action) ||
                  null == previousPosition ||
                  null === (_previousPosition_caret = previousPosition.caret) ||
                  void 0 === _previousPosition_caret
                  ? void 0
                  : _previousPosition_caret.node,
            offset:
              null !== (_action_offset = action.offset) &&
              void 0 !== _action_offset
                ? _action_offset
                : hasCaretPosition(action) ||
                  null == previousPosition ||
                  null ===
                    (_previousPosition_caret1 = previousPosition.caret) ||
                  void 0 === _previousPosition_caret1
                  ? void 0
                  : _previousPosition_caret1.offset,
          },
        };
        'keyDef' in action
          ? (instance.system.pointer.isKeyPressed(action.keyDef) &&
              (setLevelRef(instance, ApiLevel.Trigger),
              await instance.system.pointer.release(
                instance,
                action.keyDef,
                position
              )),
            action.releasePrevious ||
              (setLevelRef(instance, ApiLevel.Trigger),
              await instance.system.pointer.press(
                instance,
                action.keyDef,
                position
              ),
              action.releaseSelf &&
                (setLevelRef(instance, ApiLevel.Trigger),
                await instance.system.pointer.release(
                  instance,
                  action.keyDef,
                  position
                ))))
          : (setLevelRef(instance, ApiLevel.Trigger),
            await instance.system.pointer.move(
              instance,
              pointerName,
              position
            ));
      }
      function hasCaretPosition(action) {
        var _action_target, _ref;
        return !!(null !==
          (_ref =
            null !== (_action_target = action.target) &&
            void 0 !== _action_target
              ? _action_target
              : action.node) && void 0 !== _ref
          ? _ref
          : void 0 !== action.offset);
      }
      function getPrevTarget(instance, position) {
        if (!position)
          throw new Error(
            'This pointer has no previous position. Provide a target property!'
          );
        var _position_target;
        return null !== (_position_target = position.target) &&
          void 0 !== _position_target
          ? _position_target
          : instance.config.document.body;
      }
      const { getConfig: selectOptions_getConfig } = dom_esm;
      async function selectOptionsBase(newValue, select, values) {
        if (!newValue && !select.multiple)
          throw selectOptions_getConfig().getElementError(
            'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
            select
          );
        const valArray = Array.isArray(values) ? values : [values],
          allOptions = Array.from(
            select.querySelectorAll('option, [role="option"]')
          ),
          selectedOptions = valArray
            .map(val => {
              if ('string' != typeof val && allOptions.includes(val))
                return val;
              {
                const matchingOption = allOptions.find(
                  o => o.value === val || o.innerHTML === val
                );
                if (matchingOption) return matchingOption;
                throw selectOptions_getConfig().getElementError(
                  `Value "${String(val)}" not found in options`,
                  select
                );
              }
            })
            .filter(option => !isDisabled(option));
        if (isDisabled(select) || !selectedOptions.length) return;
        const selectOption = option => {
          (option.selected = newValue),
            this.dispatchUIEvent(select, 'input', {
              bubbles: !0,
              cancelable: !1,
              composed: !0,
            }),
            this.dispatchUIEvent(select, 'change');
        };
        if (isElementType(select, 'select'))
          if (select.multiple)
            for (const option of selectedOptions) {
              const withPointerEvents =
                0 === this.config.pointerEventsCheck ||
                hasPointerEvents(this, option);
              withPointerEvents &&
                (this.dispatchUIEvent(option, 'pointerover'),
                this.dispatchUIEvent(select, 'pointerenter'),
                this.dispatchUIEvent(option, 'mouseover'),
                this.dispatchUIEvent(select, 'mouseenter'),
                this.dispatchUIEvent(option, 'pointermove'),
                this.dispatchUIEvent(option, 'mousemove'),
                this.dispatchUIEvent(option, 'pointerdown'),
                this.dispatchUIEvent(option, 'mousedown')),
                focusElement(select),
                withPointerEvents &&
                  (this.dispatchUIEvent(option, 'pointerup'),
                  this.dispatchUIEvent(option, 'mouseup')),
                selectOption(option),
                withPointerEvents && this.dispatchUIEvent(option, 'click'),
                await wait(this.config);
            }
          else {
            if (1 !== selectedOptions.length)
              throw selectOptions_getConfig().getElementError(
                'Cannot select multiple options on a non-multiple select',
                select
              );
            {
              const withPointerEvents =
                0 === this.config.pointerEventsCheck ||
                hasPointerEvents(this, select);
              withPointerEvents
                ? await this.click(select)
                : focusElement(select),
                selectOption(selectedOptions[0]),
                withPointerEvents &&
                  (this.dispatchUIEvent(select, 'pointerover'),
                  this.dispatchUIEvent(select, 'pointerenter'),
                  this.dispatchUIEvent(select, 'mouseover'),
                  this.dispatchUIEvent(select, 'mouseenter'),
                  this.dispatchUIEvent(select, 'pointerup'),
                  this.dispatchUIEvent(select, 'mouseup'),
                  this.dispatchUIEvent(select, 'click')),
                await wait(this.config);
            }
          }
        else {
          if ('listbox' !== select.getAttribute('role'))
            throw selectOptions_getConfig().getElementError(
              'Cannot select options on elements that are neither select nor listbox elements',
              select
            );
          for (const option of selectedOptions)
            await this.click(option), await this.unhover(option);
        }
      }
      const fakeFiles = Symbol('files and value properties are mocked');
      function restoreProperty(obj, prop, descriptor) {
        descriptor
          ? Object.defineProperty(obj, prop, descriptor)
          : delete obj[prop];
      }
      const userEventApi = {
          click: async function click(element) {
            const pointerIn = [];
            return (
              this.config.skipHover || pointerIn.push({ target: element }),
              pointerIn.push({ keys: '[MouseLeft]', target: element }),
              this.pointer(pointerIn)
            );
          },
          dblClick: async function dblClick(element) {
            return this.pointer([
              { target: element },
              '[MouseLeft][MouseLeft]',
            ]);
          },
          tripleClick: async function tripleClick(element) {
            return this.pointer([
              { target: element },
              '[MouseLeft][MouseLeft][MouseLeft]',
            ]);
          },
          hover: async function hover(element) {
            return this.pointer({ target: element });
          },
          unhover: async function unhover(element) {
            return (
              assertPointerEvents(
                this,
                this.system.pointer.getMouseTarget(this)
              ),
              this.pointer({ target: element.ownerDocument.body })
            );
          },
          tab: async function tab({ shift: shift } = {}) {
            return this.keyboard(
              !0 === shift
                ? '{Shift>}{Tab}{/Shift}'
                : !1 === shift
                  ? '[/ShiftLeft][/ShiftRight]{Tab}'
                  : '{Tab}'
            );
          },
          keyboard: async function keyboard(text) {
            const actions = (function parseKeyDef(keyboardMap, text) {
              const defs = [];
              do {
                const {
                  type: type,
                  descriptor: descriptor,
                  consumedLength: consumedLength,
                  releasePrevious: releasePrevious,
                  releaseSelf: releaseSelf = !0,
                  repeat: repeat,
                } = readNextDescriptor(text, 'keyboard');
                var _keyboardMap_find;
                const keyDef =
                  null !==
                    (_keyboardMap_find = keyboardMap.find(def => {
                      var _def_code, _def_key;
                      return '[' === type
                        ? (null === (_def_code = def.code) ||
                          void 0 === _def_code
                            ? void 0
                            : _def_code.toLowerCase()) ===
                            descriptor.toLowerCase()
                        : '{' === type
                          ? (null === (_def_key = def.key) ||
                            void 0 === _def_key
                              ? void 0
                              : _def_key.toLowerCase()) ===
                            descriptor.toLowerCase()
                          : def.key === descriptor;
                    })) && void 0 !== _keyboardMap_find
                    ? _keyboardMap_find
                    : {
                        key: 'Unknown',
                        code: 'Unknown',
                        ['[' === type ? 'code' : 'key']: descriptor,
                      };
                defs.push({
                  keyDef: keyDef,
                  releasePrevious: releasePrevious,
                  releaseSelf: releaseSelf,
                  repeat: repeat,
                }),
                  (text = text.slice(consumedLength));
              } while (text);
              return defs;
            })(this.config.keyboardMap, text);
            for (let i = 0; i < actions.length; i++)
              await wait(this.config), await keyboardAction(this, actions[i]);
          },
          copy: async function copy() {
            const doc = this.config.document;
            var _doc_activeElement;
            const target =
                null !== (_doc_activeElement = doc.activeElement) &&
                void 0 !== _doc_activeElement
                  ? _doc_activeElement
                  : doc.body,
              clipboardData = copySelection(target);
            if (0 !== clipboardData.items.length)
              return (
                this.dispatchUIEvent(target, 'copy', {
                  clipboardData: clipboardData,
                }) &&
                  this.config.writeToClipboard &&
                  (await writeDataTransferToClipboard(doc, clipboardData)),
                clipboardData
              );
          },
          cut: async function cut() {
            const doc = this.config.document;
            var _doc_activeElement;
            const target =
                null !== (_doc_activeElement = doc.activeElement) &&
                void 0 !== _doc_activeElement
                  ? _doc_activeElement
                  : doc.body,
              clipboardData = copySelection(target);
            if (0 !== clipboardData.items.length)
              return (
                this.dispatchUIEvent(target, 'cut', {
                  clipboardData: clipboardData,
                }) &&
                  this.config.writeToClipboard &&
                  (await writeDataTransferToClipboard(
                    target.ownerDocument,
                    clipboardData
                  )),
                clipboardData
              );
          },
          paste: async function paste(clipboardData) {
            const doc = this.config.document;
            var _doc_activeElement;
            const target =
              null !== (_doc_activeElement = doc.activeElement) &&
              void 0 !== _doc_activeElement
                ? _doc_activeElement
                : doc.body;
            var _ref;
            const dataTransfer =
              null !==
                (_ref =
                  'string' == typeof clipboardData
                    ? (function getClipboardDataFromString(doc, text) {
                        const dt = createDataTransfer(getWindow(doc));
                        return dt.setData('text', text), dt;
                      })(doc, clipboardData)
                    : clipboardData) && void 0 !== _ref
                ? _ref
                : await (async function readDataTransferFromClipboard(
                    document
                  ) {
                    const window = document.defaultView,
                      clipboard =
                        null == window ? void 0 : window.navigator.clipboard,
                      items = clipboard && (await clipboard.read());
                    if (!items)
                      throw new Error('The Clipboard API is unavailable.');
                    const dt = createDataTransfer(window);
                    for (const item of items)
                      for (const type of item.types)
                        dt.setData(
                          type,
                          await item
                            .getType(type)
                            .then(b => readBlobText(b, window.FileReader))
                        );
                    return dt;
                  })(doc).catch(() => {
                    throw new Error(
                      '`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.'
                    );
                  });
            this.dispatchUIEvent(target, 'paste', {
              clipboardData: dataTransfer,
            });
          },
          pointer: async function pointer(input) {
            const { pointerMap: pointerMap } = this.config,
              actions = [];
            (Array.isArray(input) ? input : [input]).forEach(actionInput => {
              'string' == typeof actionInput
                ? actions.push(
                    ...parseKeyDef_parseKeyDef(pointerMap, actionInput)
                  )
                : 'keys' in actionInput
                  ? actions.push(
                      ...parseKeyDef_parseKeyDef(
                        pointerMap,
                        actionInput.keys
                      ).map(i => ({ ...actionInput, ...i }))
                    )
                  : actions.push(actionInput);
            });
            for (let i = 0; i < actions.length; i++)
              await wait(this.config), await pointerAction(this, actions[i]);
            this.system.pointer.resetClickCount();
          },
          clear: async function clear(element) {
            if (!isEditable(element) || isDisabled(element))
              throw new Error(
                'clear()` is only supported on editable elements.'
              );
            if (
              (focusElement(element),
              element.ownerDocument.activeElement !== element)
            )
              throw new Error(
                'The element to be cleared could not be focused.'
              );
            if (
              (selectAll(element),
              !(function isAllSelected(target) {
                if (hasOwnSelection(target))
                  return (
                    0 === getUISelection(target).startOffset &&
                    getUISelection(target).endOffset ===
                      getUIValue(target).length
                  );
                var _getContentEditable;
                const focusNode =
                    null !==
                      (_getContentEditable = getContentEditable(target)) &&
                    void 0 !== _getContentEditable
                      ? _getContentEditable
                      : target.ownerDocument.body,
                  selection = target.ownerDocument.getSelection();
                return (
                  (null == selection ? void 0 : selection.anchorNode) ===
                    focusNode &&
                  selection.focusNode === focusNode &&
                  0 === selection.anchorOffset &&
                  selection.focusOffset === focusNode.childNodes.length
                );
              })(element))
            )
              throw new Error(
                'The element content to be cleared could not be selected.'
              );
            input(this, element, '', 'deleteContentBackward');
          },
          deselectOptions: async function deselectOptions(select, values) {
            return selectOptionsBase.call(this, !1, select, values);
          },
          selectOptions: async function selectOptions(select, values) {
            return selectOptionsBase.call(this, !0, select, values);
          },
          type: async function type(
            element,
            text,
            {
              skipClick: skipClick = this.config.skipClick,
              skipAutoClose: skipAutoClose = this.config.skipAutoClose,
              initialSelectionStart: initialSelectionStart,
              initialSelectionEnd: initialSelectionEnd,
            } = {}
          ) {
            element.disabled ||
              (skipClick || (await this.click(element)),
              void 0 !== initialSelectionStart &&
                setSelectionRange(
                  element,
                  initialSelectionStart,
                  null != initialSelectionEnd
                    ? initialSelectionEnd
                    : initialSelectionStart
                ),
              await this.keyboard(text),
              skipAutoClose ||
                (await (async function releaseAllKeys(instance) {
                  for (const k of instance.system.keyboard.getPressedKeys())
                    await instance.system.keyboard.keyup(instance, k);
                })(this)));
          },
          upload: async function upload(element, fileOrFiles) {
            const input = isElementType(element, 'label')
              ? element.control
              : element;
            if (!input || !isElementType(input, 'input', { type: 'file' }))
              throw new TypeError(
                `The ${input === element ? 'given' : 'associated'} ${
                  null == input ? void 0 : input.tagName
                } element does not accept file uploads`
              );
            if (isDisabled(element)) return;
            const files = (Array.isArray(fileOrFiles)
                ? fileOrFiles
                : [fileOrFiles]
              )
                .filter(
                  file =>
                    !this.config.applyAccept ||
                    (function isAcceptableFile(file, accept) {
                      if (!accept) return !0;
                      const wildcards = ['audio/*', 'image/*', 'video/*'];
                      return accept
                        .split(',')
                        .some(
                          acceptToken =>
                            acceptToken.startsWith('.')
                              ? file.name.endsWith(acceptToken)
                              : wildcards.includes(acceptToken)
                                ? file.type.startsWith(
                                    acceptToken.substr(
                                      0,
                                      acceptToken.length - 1
                                    )
                                  )
                                : file.type === acceptToken
                        );
                    })(file, input.accept)
                )
                .slice(0, input.multiple ? void 0 : 1),
              fileDialog = () => {
                var _input_files;
                (files.length ===
                  (null === (_input_files = input.files) ||
                  void 0 === _input_files
                    ? void 0
                    : _input_files.length) &&
                  files.every((f, i) => {
                    var _input_files;
                    return (
                      f ===
                      (null === (_input_files = input.files) ||
                      void 0 === _input_files
                        ? void 0
                        : _input_files.item(i))
                    );
                  })) ||
                  (!(function setFiles(el, files) {
                    var _el_fakeFiles;
                    null === (_el_fakeFiles = el[fakeFiles]) ||
                      void 0 === _el_fakeFiles ||
                      _el_fakeFiles.restore();
                    const typeDescr = Object.getOwnPropertyDescriptor(
                        el,
                        'type'
                      ),
                      valueDescr = Object.getOwnPropertyDescriptor(el, 'value'),
                      filesDescr = Object.getOwnPropertyDescriptor(el, 'files');
                    function restore() {
                      restoreProperty(el, 'type', typeDescr),
                        restoreProperty(el, 'value', valueDescr),
                        restoreProperty(el, 'files', filesDescr);
                    }
                    (el[fakeFiles] = { restore: restore }),
                      Object.defineProperties(el, {
                        files: { configurable: !0, get: () => files },
                        value: {
                          configurable: !0,
                          get: () =>
                            files.length
                              ? `C:\\fakepath\\${files[0].name}`
                              : '',
                          set(v) {
                            var _valueDescr_set;
                            '' === v
                              ? restore()
                              : null == valueDescr ||
                                null === (_valueDescr_set = valueDescr.set) ||
                                void 0 === _valueDescr_set ||
                                _valueDescr_set.call(el, v);
                          },
                        },
                        type: {
                          configurable: !0,
                          get: () => 'file',
                          set(v) {
                            'file' !== v && (restore(), (el.type = v));
                          },
                        },
                      });
                  })(input, createFileList(getWindow(element), files)),
                  this.dispatchUIEvent(input, 'input'),
                  this.dispatchUIEvent(input, 'change'));
              };
            input.addEventListener('fileDialog', fileDialog),
              await this.click(element),
              input.removeEventListener('fileDialog', fileDialog);
          },
        },
        { getConfig: wrapAsync_getConfig } = dom_esm;
      const defaultOptionsDirect = {
          applyAccept: !0,
          autoModify: !0,
          delay: 0,
          document: globalThis.document,
          keyboardMap: defaultKeyMap,
          pointerMap: [
            { name: 'MouseLeft', pointerType: 'mouse', button: 'primary' },
            { name: 'MouseRight', pointerType: 'mouse', button: 'secondary' },
            { name: 'MouseMiddle', pointerType: 'mouse', button: 'auxiliary' },
            { name: 'TouchA', pointerType: 'touch' },
            { name: 'TouchB', pointerType: 'touch' },
            { name: 'TouchC', pointerType: 'touch' },
          ],
          pointerEventsCheck: PointerEventsCheckLevel.EachApiCall,
          skipAutoClose: !1,
          skipClick: !1,
          skipHover: !1,
          writeToClipboard: !1,
          advanceTimers: () => Promise.resolve(),
        },
        defaultOptionsSetup = { ...defaultOptionsDirect, writeToClipboard: !0 };
      function createConfig(
        options = {},
        defaults = defaultOptionsSetup,
        node
      ) {
        const document = (function getDocument(options, node, defaults) {
          var _options_document, _ref;
          return null !==
            (_ref =
              null !== (_options_document = options.document) &&
              void 0 !== _options_document
                ? _options_document
                : node &&
                  (function getDocumentFromNode(el) {
                    return (function isDocument(node) {
                      return 9 === node.nodeType;
                    })(el)
                      ? el
                      : el.ownerDocument;
                  })(node)) && void 0 !== _ref
            ? _ref
            : defaults.document;
        })(options, node, defaults);
        return { ...defaults, ...options, document: document };
      }
      function setupDirect(
        {
          keyboardState: keyboardState,
          pointerState: pointerState,
          ...options
        } = {},
        node
      ) {
        const config = createConfig(options, defaultOptionsDirect, node);
        var _ref;
        prepareDocument(config.document);
        const system =
          null !==
            (_ref = null != pointerState ? pointerState : keyboardState) &&
          void 0 !== _ref
            ? _ref
            : new System();
        return { api: createInstance(config, system).api, system: system };
      }
      function setupSub(options) {
        return createInstance({ ...this.config, ...options }, this.system).api;
      }
      function wrapAndBindImpl(instance, impl) {
        function method(...args) {
          return (
            setLevelRef(instance, ApiLevel.Call),
            (function wrapAsync(implementation) {
              return wrapAsync_getConfig().asyncWrapper(implementation);
            })(() =>
              impl
                .apply(instance, args)
                .then(async ret => (await wait(instance.config), ret))
            )
          );
        }
        return (
          Object.defineProperty(method, 'name', { get: () => impl.name }),
          method
        );
      }
      function createInstance(config, system = new System()) {
        const instance = {};
        return (
          Object.assign(instance, {
            config: config,
            dispatchEvent: dispatchEvent.bind(instance),
            dispatchUIEvent: dispatchUIEvent.bind(instance),
            system: system,
            levelRefs: {},
            ...userEventApi,
          }),
          {
            instance: instance,
            api: {
              ...Object.fromEntries(
                Object.entries(userEventApi).map(([name, api]) => [
                  name,
                  wrapAndBindImpl(instance, api),
                ])
              ),
              setup: setupSub.bind(instance),
            },
          }
        );
      }
      function directApi_clear(element) {
        return setupDirect().api.clear(element);
      }
      function directApi_click(element, options = {}) {
        return setupDirect(options, element).api.click(element);
      }
      function directApi_copy(options = {}) {
        return setupDirect(options).api.copy();
      }
      function directApi_cut(options = {}) {
        return setupDirect(options).api.cut();
      }
      function directApi_dblClick(element, options = {}) {
        return setupDirect(options).api.dblClick(element);
      }
      function directApi_deselectOptions(select, values, options = {}) {
        return setupDirect(options).api.deselectOptions(select, values);
      }
      function directApi_hover(element, options = {}) {
        return setupDirect(options).api.hover(element);
      }
      async function directApi_keyboard(text, options = {}) {
        const { api: api, system: system } = setupDirect(options);
        return api.keyboard(text).then(() => system);
      }
      async function directApi_pointer(input, options = {}) {
        const { api: api, system: system } = setupDirect(options);
        return api.pointer(input).then(() => system);
      }
      function directApi_paste(clipboardData, options) {
        return setupDirect(options).api.paste(clipboardData);
      }
      function directApi_selectOptions(select, values, options = {}) {
        return setupDirect(options).api.selectOptions(select, values);
      }
      function directApi_tripleClick(element, options = {}) {
        return setupDirect(options).api.tripleClick(element);
      }
      function directApi_type(element, text, options = {}) {
        return setupDirect(options, element).api.type(element, text, options);
      }
      function directApi_unhover(element, options = {}) {
        const { api: api, system: system } = setupDirect(options);
        return (
          system.pointer.setMousePosition({ target: element }),
          api.unhover(element)
        );
      }
      function directApi_upload(element, fileOrFiles, options = {}) {
        return setupDirect(options).api.upload(element, fileOrFiles);
      }
      function directApi_tab(options = {}) {
        return setupDirect().api.tab(options);
      }
      const userEvent = {
        ...directApi_namespaceObject,
        setup: function setupMain(options = {}) {
          const config = createConfig(options);
          var _config_document_defaultView;
          return (
            prepareDocument(config.document),
            (function attachClipboardStubToView(window) {
              if (isClipboardStub(window.navigator.clipboard))
                return window.navigator.clipboard[ClipboardStubControl];
              const realClipboard = Object.getOwnPropertyDescriptor(
                window.navigator,
                'clipboard'
              );
              let stub;
              const control = {
                resetClipboardStub: () => {
                  stub = createClipboardStub(window, control);
                },
                detachClipboardStub: () => {
                  realClipboard
                    ? Object.defineProperty(
                        window.navigator,
                        'clipboard',
                        realClipboard
                      )
                    : Object.defineProperty(window.navigator, 'clipboard', {
                        value: void 0,
                        configurable: !0,
                      });
                },
              };
              return (
                (stub = createClipboardStub(window, control)),
                Object.defineProperty(window.navigator, 'clipboard', {
                  get: () => stub,
                  configurable: !0,
                }),
                stub[ClipboardStubControl]
              );
            })(
              null !==
                (_config_document_defaultView = config.document.defaultView) &&
              void 0 !== _config_document_defaultView
                ? _config_document_defaultView
                : globalThis.window
            ),
            createInstance(config).api
          );
        },
      };
      var esm = __webpack_require__('./node_modules/ts-dedent/esm/index.js'),
        scope = (() => {
          let win;
          return (
            (win =
              typeof window < 'u'
                ? window
                : typeof globalThis < 'u'
                  ? globalThis
                  : typeof __webpack_require__.g < 'u'
                    ? __webpack_require__.g
                    : typeof self < 'u'
                      ? self
                      : {}),
            win
          );
        })(),
        { LOGLEVEL: LOGLEVEL } = scope,
        levels = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 },
        currentLogLevelNumber = levels[LOGLEVEL] || levels.info,
        logger = {
          trace: (message, ...rest) => {
            currentLogLevelNumber <= levels.trace &&
              console.trace(message, ...rest);
          },
          debug: (message, ...rest) => {
            currentLogLevelNumber <= levels.debug &&
              console.debug(message, ...rest);
          },
          info: (message, ...rest) => {
            currentLogLevelNumber <= levels.info &&
              console.info(message, ...rest);
          },
          warn: (message, ...rest) => {
            currentLogLevelNumber <= levels.warn &&
              console.warn(message, ...rest);
          },
          error: (message, ...rest) => {
            currentLogLevelNumber <= levels.error &&
              console.error(message, ...rest);
          },
          log: (message, ...rest) => {
            currentLogLevelNumber < levels.silent &&
              console.log(message, ...rest);
          },
        },
        logged = new Set(),
        once = type => (message, ...rest) => {
          if (!logged.has(message))
            return logged.add(message), logger[type](message, ...rest);
        };
      (once.clear = () => logged.clear()),
        (once.trace = once('trace')),
        (once.debug = once('debug')),
        (once.info = once('info')),
        (once.warn = once('warn')),
        (once.error = once('error')),
        (once.log = once('log'));
      once('warn');
      var pretty = type => (...args) => {
        let argArray = [];
        if (args.length) {
          let reResultArray,
            startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi,
            endTagRe = /<\/span>/gi;
          for (
            argArray.push(
              args[0].replace(startTagRe, '%c').replace(endTagRe, '%c')
            );
            (reResultArray = startTagRe.exec(args[0]));

          )
            argArray.push(reResultArray[2]), argArray.push('');
          for (let j = 1; j < args.length; j++) argArray.push(args[j]);
        }
        logger[type].apply(logger, argArray);
      };
      (pretty.trace = pretty('trace')),
        (pretty.debug = pretty('debug')),
        (pretty.info = pretty('info')),
        (pretty.warn = pretty('warn')),
        (pretty.error = pretty('error'));
      var events2,
        Channel = class {
          constructor(input = {}) {
            (this.sender = Math.random()
              .toString(16)
              .slice(2)),
              (this.events = {}),
              (this.data = {}),
              (this.transports = []),
              (this.isAsync = input.async || !1),
              void 0 !== input.transports
                ? ((this.transports = input.transports || []),
                  this.transports.forEach(t => {
                    t.setHandler(event => this.handleEvent(event));
                  }))
                : (this.transports = input.transport ? [input.transport] : []),
              this.transports.forEach(t => {
                t.setHandler(event => this.handleEvent(event));
              });
          }
          get hasTransport() {
            return this.transports.length > 0;
          }
          addListener(eventName, listener) {
            (this.events[eventName] = this.events[eventName] || []),
              this.events[eventName].push(listener);
          }
          emit(eventName, ...args) {
            let event = { type: eventName, args: args, from: this.sender },
              options = {};
            args.length >= 1 &&
              args[0] &&
              args[0].options &&
              (options = args[0].options);
            let handler = () => {
              this.transports.forEach(t => {
                t.send(event, options);
              }),
                this.handleEvent(event);
            };
            this.isAsync ? setImmediate(handler) : handler();
          }
          last(eventName) {
            return this.data[eventName];
          }
          eventNames() {
            return Object.keys(this.events);
          }
          listenerCount(eventName) {
            let listeners = this.listeners(eventName);
            return listeners ? listeners.length : 0;
          }
          listeners(eventName) {
            return this.events[eventName] || void 0;
          }
          once(eventName, listener) {
            let onceListener = this.onceListener(eventName, listener);
            this.addListener(eventName, onceListener);
          }
          removeAllListeners(eventName) {
            eventName
              ? this.events[eventName] && delete this.events[eventName]
              : (this.events = {});
          }
          removeListener(eventName, listener) {
            let listeners = this.listeners(eventName);
            listeners &&
              (this.events[eventName] = listeners.filter(l => l !== listener));
          }
          on(eventName, listener) {
            this.addListener(eventName, listener);
          }
          off(eventName, listener) {
            this.removeListener(eventName, listener);
          }
          handleEvent(event) {
            let listeners = this.listeners(event.type);
            listeners &&
              listeners.length &&
              listeners.forEach(fn => {
                fn.apply(event, event.args);
              }),
              (this.data[event.type] = event.args);
          }
          onceListener(eventName, listener) {
            let onceListener = (...args) => (
              this.removeListener(eventName, onceListener), listener(...args)
            );
            return onceListener;
          }
        },
        events = (((events2 = events || {}).CHANNEL_CREATED = 'channelCreated'),
        (events2.CONFIG_ERROR = 'configError'),
        (events2.STORY_INDEX_INVALIDATED = 'storyIndexInvalidated'),
        (events2.STORY_SPECIFIED = 'storySpecified'),
        (events2.SET_CONFIG = 'setConfig'),
        (events2.SET_STORIES = 'setStories'),
        (events2.SET_INDEX = 'setIndex'),
        (events2.SET_CURRENT_STORY = 'setCurrentStory'),
        (events2.CURRENT_STORY_WAS_SET = 'currentStoryWasSet'),
        (events2.FORCE_RE_RENDER = 'forceReRender'),
        (events2.FORCE_REMOUNT = 'forceRemount'),
        (events2.PRELOAD_ENTRIES = 'preloadStories'),
        (events2.STORY_PREPARED = 'storyPrepared'),
        (events2.DOCS_PREPARED = 'docsPrepared'),
        (events2.STORY_CHANGED = 'storyChanged'),
        (events2.STORY_UNCHANGED = 'storyUnchanged'),
        (events2.STORY_RENDERED = 'storyRendered'),
        (events2.STORY_MISSING = 'storyMissing'),
        (events2.STORY_ERRORED = 'storyErrored'),
        (events2.STORY_THREW_EXCEPTION = 'storyThrewException'),
        (events2.STORY_RENDER_PHASE_CHANGED = 'storyRenderPhaseChanged'),
        (events2.PLAY_FUNCTION_THREW_EXCEPTION = 'playFunctionThrewException'),
        (events2.UPDATE_STORY_ARGS = 'updateStoryArgs'),
        (events2.STORY_ARGS_UPDATED = 'storyArgsUpdated'),
        (events2.RESET_STORY_ARGS = 'resetStoryArgs'),
        (events2.SET_GLOBALS = 'setGlobals'),
        (events2.UPDATE_GLOBALS = 'updateGlobals'),
        (events2.GLOBALS_UPDATED = 'globalsUpdated'),
        (events2.REGISTER_SUBSCRIPTION = 'registerSubscription'),
        (events2.PREVIEW_KEYDOWN = 'previewKeydown'),
        (events2.PREVIEW_BUILDER_PROGRESS = 'preview_builder_progress'),
        (events2.SELECT_STORY = 'selectStory'),
        (events2.STORIES_COLLAPSE_ALL = 'storiesCollapseAll'),
        (events2.STORIES_EXPAND_ALL = 'storiesExpandAll'),
        (events2.DOCS_RENDERED = 'docsRendered'),
        (events2.SHARED_STATE_CHANGED = 'sharedStateChanged'),
        (events2.SHARED_STATE_SET = 'sharedStateSet'),
        (events2.NAVIGATE_URL = 'navigateUrl'),
        (events2.UPDATE_QUERY_PARAMS = 'updateQueryParams'),
        (events2.REQUEST_WHATS_NEW_DATA = 'requestWhatsNewData'),
        (events2.RESULT_WHATS_NEW_DATA = 'resultWhatsNewData'),
        (events2.SET_WHATS_NEW_CACHE = 'setWhatsNewCache'),
        (events2.TOGGLE_WHATS_NEW_NOTIFICATIONS =
          'toggleWhatsNewNotifications'),
        (events2.TELEMETRY_ERROR = 'telemetryError'),
        events2),
        {
          CHANNEL_CREATED: CHANNEL_CREATED,
          CONFIG_ERROR: CONFIG_ERROR,
          CURRENT_STORY_WAS_SET: CURRENT_STORY_WAS_SET,
          DOCS_PREPARED: DOCS_PREPARED,
          DOCS_RENDERED: DOCS_RENDERED,
          FORCE_RE_RENDER: FORCE_RE_RENDER,
          FORCE_REMOUNT: FORCE_REMOUNT,
          GLOBALS_UPDATED: GLOBALS_UPDATED,
          NAVIGATE_URL: NAVIGATE_URL,
          PLAY_FUNCTION_THREW_EXCEPTION: PLAY_FUNCTION_THREW_EXCEPTION,
          PRELOAD_ENTRIES: PRELOAD_ENTRIES,
          PREVIEW_BUILDER_PROGRESS: PREVIEW_BUILDER_PROGRESS,
          PREVIEW_KEYDOWN: PREVIEW_KEYDOWN,
          REGISTER_SUBSCRIPTION: REGISTER_SUBSCRIPTION,
          RESET_STORY_ARGS: RESET_STORY_ARGS,
          SELECT_STORY: SELECT_STORY,
          SET_CONFIG: SET_CONFIG,
          SET_CURRENT_STORY: SET_CURRENT_STORY,
          SET_GLOBALS: SET_GLOBALS,
          SET_INDEX: SET_INDEX,
          SET_STORIES: SET_STORIES,
          SHARED_STATE_CHANGED: SHARED_STATE_CHANGED,
          SHARED_STATE_SET: SHARED_STATE_SET,
          STORIES_COLLAPSE_ALL: STORIES_COLLAPSE_ALL,
          STORIES_EXPAND_ALL: STORIES_EXPAND_ALL,
          STORY_ARGS_UPDATED: STORY_ARGS_UPDATED,
          STORY_CHANGED: STORY_CHANGED,
          STORY_ERRORED: STORY_ERRORED,
          STORY_INDEX_INVALIDATED: STORY_INDEX_INVALIDATED,
          STORY_MISSING: STORY_MISSING,
          STORY_PREPARED: STORY_PREPARED,
          STORY_RENDER_PHASE_CHANGED: STORY_RENDER_PHASE_CHANGED,
          STORY_RENDERED: STORY_RENDERED,
          STORY_SPECIFIED: STORY_SPECIFIED,
          STORY_THREW_EXCEPTION: STORY_THREW_EXCEPTION,
          STORY_UNCHANGED: STORY_UNCHANGED,
          UPDATE_GLOBALS: UPDATE_GLOBALS,
          UPDATE_QUERY_PARAMS: UPDATE_QUERY_PARAMS,
          UPDATE_STORY_ARGS: UPDATE_STORY_ARGS,
          REQUEST_WHATS_NEW_DATA: REQUEST_WHATS_NEW_DATA,
          RESULT_WHATS_NEW_DATA: RESULT_WHATS_NEW_DATA,
          SET_WHATS_NEW_CACHE: SET_WHATS_NEW_CACHE,
          TOGGLE_WHATS_NEW_NOTIFICATIONS: TOGGLE_WHATS_NEW_NOTIFICATIONS,
          TELEMETRY_ERROR: TELEMETRY_ERROR,
        } = events,
        IGNORED_EXCEPTION = new Error('ignoredException'),
        { CONFIG_TYPE: CONFIG_TYPE } = scope;
      var AddonStore = class {
          constructor() {
            (this.getChannel = () => {
              if (!this.channel) {
                let channel = (function mockChannel() {
                  return new Channel({
                    transport: { setHandler: () => {}, send: () => {} },
                  });
                })();
                return this.setChannel(channel), channel;
              }
              return this.channel;
            }),
              (this.getServerChannel = () => {
                if (!this.serverChannel)
                  throw new Error('Accessing non-existent serverChannel');
                return this.serverChannel;
              }),
              (this.ready = () => this.promise),
              (this.hasChannel = () => !!this.channel),
              (this.hasServerChannel = () => !!this.serverChannel),
              (this.setChannel = channel => {
                (this.channel = channel), this.resolve();
              }),
              (this.setServerChannel = channel => {
                this.serverChannel = channel;
              }),
              (this.promise = new Promise(res => {
                this.resolve = () => res(this.getChannel());
              }));
          }
        },
        KEY = '__STORYBOOK_ADDONS_PREVIEW';
      var CallStates2,
        addons = (function getAddonsStore() {
          return scope[KEY] || (scope[KEY] = new AddonStore()), scope[KEY];
        })(),
        CallStates = (((CallStates2 = CallStates || {}).DONE = 'done'),
        (CallStates2.ERROR = 'error'),
        (CallStates2.ACTIVE = 'active'),
        (CallStates2.WAITING = 'waiting'),
        CallStates2),
        EVENTS_CALL = 'storybook/instrumenter/call',
        EVENTS_SYNC = 'storybook/instrumenter/sync',
        EVENTS_START = 'storybook/instrumenter/start',
        EVENTS_BACK = 'storybook/instrumenter/back',
        EVENTS_GOTO = 'storybook/instrumenter/goto',
        EVENTS_NEXT = 'storybook/instrumenter/next',
        EVENTS_END = 'storybook/instrumenter/end',
        controlsDisabled = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
        alreadyCompletedException = new Error(
          'This function ran after the play function completed. Did you forget to `await` it?'
        ),
        isObject = o => '[object Object]' === Object.prototype.toString.call(o),
        isInstrumentable = o => {
          if (
            !isObject(o) &&
            !(o => '[object Module]' === Object.prototype.toString.call(o))(o)
          )
            return !1;
          if (void 0 === o.constructor) return !0;
          let proto = o.constructor.prototype;
          return !(
            !isObject(proto) ||
            !1 === Object.prototype.hasOwnProperty.call(proto, 'isPrototypeOf')
          );
        },
        getInitialState = () => ({
          renderPhase: void 0,
          isDebugging: !1,
          isPlaying: !1,
          isLocked: !1,
          cursor: 0,
          calls: [],
          shadowCalls: [],
          callRefsByResult: new Map(),
          chainedCallIds: new Set(),
          ancestors: [],
          playUntil: void 0,
          resolvers: {},
          syncTimeout: void 0,
        }),
        getRetainedState = (state, isDebugging = !1) => {
          let calls = (isDebugging ? state.shadowCalls : state.calls).filter(
            call => call.retain
          );
          if (!calls.length) return;
          let callRefsByResult = new Map(
            Array.from(state.callRefsByResult.entries()).filter(
              ([, ref]) => ref.retain
            )
          );
          return {
            cursor: calls.length,
            calls: calls,
            callRefsByResult: callRefsByResult,
          };
        },
        Instrumenter = class {
          constructor() {
            (this.initialized = !1),
              (this.channel = addons.getChannel()),
              (this.state =
                scope.window.parent
                  .__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {});
            let resetState = ({
              storyId: storyId,
              isPlaying: isPlaying = !0,
              isDebugging: isDebugging = !1,
            }) => {
              let state = this.getState(storyId);
              this.setState(storyId, {
                ...getInitialState(),
                ...getRetainedState(state, isDebugging),
                shadowCalls: isDebugging ? state.shadowCalls : [],
                chainedCallIds: isDebugging ? state.chainedCallIds : new Set(),
                playUntil: isDebugging ? state.playUntil : void 0,
                isPlaying: isPlaying,
                isDebugging: isDebugging,
              }),
                this.sync(storyId);
            };
            this.channel.on(FORCE_REMOUNT, resetState),
              this.channel.on(
                STORY_RENDER_PHASE_CHANGED,
                ({ storyId: storyId, newPhase: newPhase }) => {
                  let { isDebugging: isDebugging } = this.getState(storyId);
                  this.setState(storyId, { renderPhase: newPhase }),
                    'preparing' === newPhase &&
                      isDebugging &&
                      resetState({ storyId: storyId }),
                    'playing' === newPhase &&
                      resetState({
                        storyId: storyId,
                        isDebugging: isDebugging,
                      }),
                    'played' === newPhase &&
                      this.setState(storyId, {
                        isLocked: !1,
                        isPlaying: !1,
                        isDebugging: !1,
                      }),
                    'errored' === newPhase &&
                      this.setState(storyId, { isLocked: !1, isPlaying: !1 });
                }
              ),
              this.channel.on(SET_CURRENT_STORY, () => {
                this.initialized ? this.cleanup() : (this.initialized = !0);
              });
            let start = ({ storyId: storyId, playUntil: playUntil }) => {
                this.getState(storyId).isDebugging ||
                  this.setState(storyId, ({ calls: calls }) => ({
                    calls: [],
                    shadowCalls: calls.map(call => ({
                      ...call,
                      status: 'waiting',
                    })),
                    isDebugging: !0,
                  }));
                let log = this.getLog(storyId);
                this.setState(storyId, ({ shadowCalls: shadowCalls }) => {
                  if (playUntil || !log.length) return { playUntil: playUntil };
                  let firstRowIndex = shadowCalls.findIndex(
                    call => call.id === log[0].callId
                  );
                  return {
                    playUntil: shadowCalls
                      .slice(0, firstRowIndex)
                      .filter(
                        call => call.interceptable && !call.ancestors.length
                      )
                      .slice(-1)[0]?.id,
                  };
                }),
                  this.channel.emit(FORCE_REMOUNT, {
                    storyId: storyId,
                    isDebugging: !0,
                  });
              },
              end = ({ storyId: storyId }) => {
                this.setState(storyId, { playUntil: void 0, isDebugging: !1 }),
                  Object.values(this.getState(storyId).resolvers).forEach(
                    resolve => resolve()
                  );
              };
            this.channel.on(EVENTS_START, start),
              this.channel.on(EVENTS_BACK, ({ storyId: storyId }) => {
                let log = this.getLog(storyId).filter(
                    call => !call.ancestors.length
                  ),
                  last = log.reduceRight(
                    (res, item, index) =>
                      res >= 0 || 'waiting' === item.status ? res : index,
                    -1
                  );
                start({ storyId: storyId, playUntil: log[last - 1]?.callId });
              }),
              this.channel.on(
                EVENTS_GOTO,
                ({ storyId: storyId, callId: callId }) => {
                  let {
                      calls: calls,
                      shadowCalls: shadowCalls,
                      resolvers: resolvers,
                    } = this.getState(storyId),
                    call = calls.find(({ id: id }) => id === callId),
                    shadowCall = shadowCalls.find(
                      ({ id: id }) => id === callId
                    );
                  if (
                    !call &&
                    shadowCall &&
                    Object.values(resolvers).length > 0
                  ) {
                    let nextId = this.getLog(storyId).find(
                      c => 'waiting' === c.status
                    )?.callId;
                    shadowCall.id !== nextId &&
                      this.setState(storyId, { playUntil: shadowCall.id }),
                      Object.values(resolvers).forEach(resolve => resolve());
                  } else start({ storyId: storyId, playUntil: callId });
                }
              ),
              this.channel.on(EVENTS_NEXT, ({ storyId: storyId }) => {
                let { resolvers: resolvers } = this.getState(storyId);
                if (Object.values(resolvers).length > 0)
                  Object.values(resolvers).forEach(resolve => resolve());
                else {
                  let nextId = this.getLog(storyId).find(
                    c => 'waiting' === c.status
                  )?.callId;
                  nextId
                    ? start({ storyId: storyId, playUntil: nextId })
                    : end({ storyId: storyId });
                }
              }),
              this.channel.on(EVENTS_END, end);
          }
          getState(storyId) {
            return this.state[storyId] || getInitialState();
          }
          setState(storyId, update) {
            let state = this.getState(storyId),
              patch = 'function' == typeof update ? update(state) : update;
            (this.state = { ...this.state, [storyId]: { ...state, ...patch } }),
              (scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
          }
          cleanup() {
            this.state = Object.entries(this.state).reduce(
              (acc, [storyId, state]) => {
                let retainedState = getRetainedState(state);
                return (
                  retainedState &&
                    (acc[storyId] = Object.assign(
                      getInitialState(),
                      retainedState
                    )),
                  acc
                );
              },
              {}
            );
            let payload = { controlStates: controlsDisabled, logItems: [] };
            this.channel.emit(EVENTS_SYNC, payload),
              (scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
          }
          getLog(storyId) {
            let { calls: calls, shadowCalls: shadowCalls } = this.getState(
                storyId
              ),
              merged = [...shadowCalls];
            calls.forEach((call, index) => {
              merged[index] = call;
            });
            let seen = new Set();
            return merged.reduceRight(
              (acc, call) => (
                call.args.forEach(arg => {
                  arg?.__callId__ && seen.add(arg.__callId__);
                }),
                call.path.forEach(node => {
                  node.__callId__ && seen.add(node.__callId__);
                }),
                (call.interceptable || call.exception) &&
                  !seen.has(call.id) &&
                  (acc.unshift({
                    callId: call.id,
                    status: call.status,
                    ancestors: call.ancestors,
                  }),
                  seen.add(call.id)),
                acc
              ),
              []
            );
          }
          instrument(obj, options) {
            if (!isInstrumentable(obj)) return obj;
            let { mutate: mutate = !1, path: path = [] } = options;
            return Object.keys(obj).reduce(
              (acc, key) => {
                let value = obj[key];
                return 'function' != typeof value
                  ? ((acc[key] = this.instrument(value, {
                      ...options,
                      path: path.concat(key),
                    })),
                    acc)
                  : 'function' == typeof value.__originalFn__
                    ? ((acc[key] = value), acc)
                    : ((acc[key] = (...args) =>
                        this.track(key, value, args, options)),
                      (acc[key].__originalFn__ = value),
                      Object.defineProperty(acc[key], 'name', {
                        value: key,
                        writable: !1,
                      }),
                      Object.keys(value).length > 0 &&
                        Object.assign(
                          acc[key],
                          this.instrument(
                            { ...value },
                            { ...options, path: path.concat(key) }
                          )
                        ),
                      acc);
              },
              mutate
                ? obj
                : (obj => {
                    try {
                      return new obj.constructor();
                    } catch {
                      return {};
                    }
                  })(obj)
            );
          }
          track(method, fn, args, options) {
            let storyId =
                args?.[0]?.__storyId__ ||
                scope.__STORYBOOK_PREVIEW__?.selectionStore?.selection?.storyId,
              { cursor: cursor, ancestors: ancestors } = this.getState(storyId);
            this.setState(storyId, { cursor: cursor + 1 });
            let id = `${ancestors.slice(-1)[0] ||
                storyId} [${cursor}] ${method}`,
              {
                path: path = [],
                intercept: intercept = !1,
                retain: retain = !1,
              } = options,
              interceptable =
                'function' == typeof intercept
                  ? intercept(method, path)
                  : intercept,
              call = {
                id: id,
                cursor: cursor,
                storyId: storyId,
                ancestors: ancestors,
                path: path,
                method: method,
                args: args,
                interceptable: interceptable,
                retain: retain,
              },
              result = (interceptable && !ancestors.length
                ? this.intercept
                : this.invoke
              ).call(this, fn, call, options);
            return this.instrument(result, {
              ...options,
              mutate: !0,
              path: [{ __callId__: call.id }],
            });
          }
          intercept(fn, call, options) {
            let {
                chainedCallIds: chainedCallIds,
                isDebugging: isDebugging,
                playUntil: playUntil,
              } = this.getState(call.storyId),
              isChainedUpon = chainedCallIds.has(call.id);
            return !isDebugging || isChainedUpon || playUntil
              ? (playUntil === call.id &&
                  this.setState(call.storyId, { playUntil: void 0 }),
                this.invoke(fn, call, options))
              : new Promise(resolve => {
                  this.setState(call.storyId, ({ resolvers: resolvers }) => ({
                    isLocked: !1,
                    resolvers: { ...resolvers, [call.id]: resolve },
                  }));
                }).then(
                  () => (
                    this.setState(call.storyId, state => {
                      let { [call.id]: _, ...resolvers } = state.resolvers;
                      return { isLocked: !0, resolvers: resolvers };
                    }),
                    this.invoke(fn, call, options)
                  )
                );
          }
          invoke(fn, call, options) {
            let {
                callRefsByResult: callRefsByResult,
                renderPhase: renderPhase,
              } = this.getState(call.storyId),
              serializeValues = value => {
                if (callRefsByResult.has(value))
                  return callRefsByResult.get(value);
                if (value instanceof Array) return value.map(serializeValues);
                if (value instanceof Date)
                  return { __date__: { value: value.toISOString() } };
                if (value instanceof Error) {
                  let { name: name, message: message, stack: stack } = value;
                  return {
                    __error__: { name: name, message: message, stack: stack },
                  };
                }
                if (value instanceof RegExp) {
                  let { flags: flags, source: source } = value;
                  return { __regexp__: { flags: flags, source: source } };
                }
                if (value instanceof scope.window.HTMLElement) {
                  let {
                    prefix: prefix,
                    localName: localName,
                    id: id,
                    classList: classList,
                    innerText: innerText,
                  } = value;
                  return {
                    __element__: {
                      prefix: prefix,
                      localName: localName,
                      id: id,
                      classNames: Array.from(classList),
                      innerText: innerText,
                    },
                  };
                }
                return 'function' == typeof value
                  ? { __function__: { name: value.name } }
                  : 'symbol' == typeof value
                    ? { __symbol__: { description: value.description } }
                    : 'object' == typeof value &&
                      value?.constructor?.name &&
                      'Object' !== value?.constructor?.name
                      ? { __class__: { name: value.constructor.name } }
                      : '[object Object]' ===
                        Object.prototype.toString.call(value)
                        ? Object.fromEntries(
                            Object.entries(value).map(([key, val]) => [
                              key,
                              serializeValues(val),
                            ])
                          )
                        : value;
              },
              info = { ...call, args: call.args.map(serializeValues) };
            call.path.forEach(ref => {
              ref?.__callId__ &&
                this.setState(
                  call.storyId,
                  ({ chainedCallIds: chainedCallIds }) => ({
                    chainedCallIds: new Set(
                      Array.from(chainedCallIds).concat(ref.__callId__)
                    ),
                  })
                );
            });
            let handleException = e => {
              if (e instanceof Error) {
                let {
                    name: name,
                    message: message,
                    stack: stack,
                    callId: callId = call.id,
                  } = e,
                  exception = {
                    name: name,
                    message: message,
                    stack: stack,
                    callId: callId,
                  };
                if (
                  (this.update({
                    ...info,
                    status: 'error',
                    exception: exception,
                  }),
                  this.setState(call.storyId, state => ({
                    callRefsByResult: new Map([
                      ...Array.from(state.callRefsByResult.entries()),
                      [e, { __callId__: call.id, retain: call.retain }],
                    ]),
                  })),
                  call.ancestors.length)
                )
                  throw (Object.prototype.hasOwnProperty.call(e, 'callId') ||
                    Object.defineProperty(e, 'callId', { value: call.id }),
                  e);
                if (e !== alreadyCompletedException)
                  throw (logger.warn(e), IGNORED_EXCEPTION);
              }
              throw e;
            };
            try {
              if ('played' === renderPhase && !call.retain)
                throw alreadyCompletedException;
              let result = fn(
                ...(options.getArgs
                  ? options.getArgs(call, this.getState(call.storyId))
                  : call.args
                ).map(
                  arg =>
                    'function' != typeof arg || Object.keys(arg).length
                      ? arg
                      : (...args) => {
                          let {
                            cursor: cursor,
                            ancestors: ancestors,
                          } = this.getState(call.storyId);
                          this.setState(call.storyId, {
                            cursor: 0,
                            ancestors: [...ancestors, call.id],
                          });
                          let restore = () =>
                              this.setState(call.storyId, {
                                cursor: cursor,
                                ancestors: ancestors,
                              }),
                            willRestore = !1;
                          try {
                            let res = arg(...args);
                            return res instanceof Promise
                              ? ((willRestore = !0), res.finally(restore))
                              : res;
                          } finally {
                            willRestore || restore();
                          }
                        }
                )
              );
              return (
                result &&
                  ['object', 'function', 'symbol'].includes(typeof result) &&
                  this.setState(call.storyId, state => ({
                    callRefsByResult: new Map([
                      ...Array.from(state.callRefsByResult.entries()),
                      [result, { __callId__: call.id, retain: call.retain }],
                    ]),
                  })),
                this.update({
                  ...info,
                  status: result instanceof Promise ? 'active' : 'done',
                }),
                result instanceof Promise
                  ? result.then(
                      value => (
                        this.update({ ...info, status: 'done' }), value
                      ),
                      handleException
                    )
                  : result
              );
            } catch (e) {
              return handleException(e);
            }
          }
          update(call) {
            this.channel.emit(EVENTS_CALL, call),
              this.setState(call.storyId, ({ calls: calls }) => {
                let callsById = calls
                  .concat(call)
                  .reduce((a, c) => Object.assign(a, { [c.id]: c }), {});
                return {
                  calls: Object.values(callsById).sort((a, b) =>
                    a.id.localeCompare(b.id, void 0, { numeric: !0 })
                  ),
                };
              }),
              this.sync(call.storyId);
          }
          sync(storyId) {
            let synchronize = () => {
              let { isLocked: isLocked, isPlaying: isPlaying } = this.getState(
                  storyId
                ),
                logItems = this.getLog(storyId),
                pausedAt = logItems
                  .filter(({ ancestors: ancestors }) => !ancestors.length)
                  .find(item => 'waiting' === item.status)?.callId,
                hasActive = logItems.some(item => 'active' === item.status);
              if (isLocked || hasActive || 0 === logItems.length) {
                let payload2 = {
                  controlStates: controlsDisabled,
                  logItems: logItems,
                };
                return void this.channel.emit(EVENTS_SYNC, payload2);
              }
              let hasPrevious = logItems.some(
                  item => 'done' === item.status || 'error' === item.status
                ),
                payload = {
                  controlStates: {
                    start: hasPrevious,
                    back: hasPrevious,
                    goto: !0,
                    next: isPlaying,
                    end: isPlaying,
                  },
                  logItems: logItems,
                  pausedAt: pausedAt,
                };
              this.channel.emit(EVENTS_SYNC, payload);
            };
            this.setState(
              storyId,
              ({ syncTimeout: syncTimeout }) => (
                clearTimeout(syncTimeout),
                { syncTimeout: setTimeout(synchronize, 0) }
              )
            );
          }
        };
      function instrument(obj, options = {}) {
        try {
          let forceInstrument = !1,
            skipInstrument = !1;
          return (
            scope.window.location?.search?.includes('instrument=true')
              ? (forceInstrument = !0)
              : scope.window.location?.search?.includes('instrument=false') &&
                (skipInstrument = !0),
            (scope.window.parent === scope.window && !forceInstrument) ||
            skipInstrument
              ? obj
              : (scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
                  (scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Instrumenter()),
                scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(
                  obj,
                  options
                ))
          );
        } catch (e) {
          return once.warn(e), obj;
        }
      }
      var _userEvent = userEvent.default || userEvent,
        testingLibrary = instrument(
          { ...dom_esm },
          {
            intercept: (method, path) =>
              'fireEvent' === path[0] ||
              method.startsWith('findBy') ||
              method.startsWith('waitFor'),
          }
        );
      testingLibrary.screen = Object.entries(testingLibrary.screen).reduce(
        (acc, [key, val]) =>
          Object.defineProperty(acc, key, {
            get() {
              return (
                once.warn(esm.C`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `),
                val
              );
            },
          }),
        { ...testingLibrary.screen }
      );
      var {
        buildQueries: buildQueries,
        configure: configure,
        createEvent: dist_createEvent,
        findAllByAltText: findAllByAltText,
        findAllByDisplayValue: findAllByDisplayValue,
        findAllByLabelText: findAllByLabelText,
        findAllByPlaceholderText: findAllByPlaceholderText,
        findAllByRole: findAllByRole,
        findAllByTestId: findAllByTestId,
        findAllByText: findAllByText,
        findAllByTitle: findAllByTitle,
        findByAltText: findByAltText,
        findByDisplayValue: findByDisplayValue,
        findByLabelText: findByLabelText,
        findByPlaceholderText: findByPlaceholderText,
        findByRole: findByRole,
        findByTestId: findByTestId,
        findByText: findByText,
        findByTitle: findByTitle,
        fireEvent: fireEvent,
        getAllByAltText: getAllByAltText,
        getAllByDisplayValue: getAllByDisplayValue,
        getAllByLabelText: getAllByLabelText,
        getAllByPlaceholderText: getAllByPlaceholderText,
        getAllByRole: getAllByRole,
        getAllByTestId: getAllByTestId,
        getAllByText: getAllByText,
        getAllByTitle: getAllByTitle,
        getByAltText: getByAltText,
        getByDisplayValue: getByDisplayValue,
        getByLabelText: getByLabelText,
        getByPlaceholderText: getByPlaceholderText,
        getByRole: getByRole,
        getByTestId: getByTestId,
        getByText: getByText,
        getByTitle: getByTitle,
        getConfig: dist_getConfig,
        getDefaultNormalizer: getDefaultNormalizer,
        getElementError: getElementError,
        getNodeText: getNodeText,
        getQueriesForElement: getQueriesForElement,
        getRoles: getRoles,
        getSuggestedQuery: getSuggestedQuery,
        isInaccessible: isInaccessible,
        logDOM: logDOM,
        logRoles: logRoles,
        prettyDOM: prettyDOM,
        queries: queries,
        queryAllByAltText: queryAllByAltText,
        queryAllByAttribute: queryAllByAttribute,
        queryAllByDisplayValue: queryAllByDisplayValue,
        queryAllByLabelText: queryAllByLabelText,
        queryAllByPlaceholderText: queryAllByPlaceholderText,
        queryAllByRole: queryAllByRole,
        queryAllByTestId: queryAllByTestId,
        queryAllByText: queryAllByText,
        queryAllByTitle: queryAllByTitle,
        queryByAltText: queryByAltText,
        queryByAttribute: queryByAttribute,
        queryByDisplayValue: queryByDisplayValue,
        queryByLabelText: queryByLabelText,
        queryByPlaceholderText: queryByPlaceholderText,
        queryByRole: queryByRole,
        queryByTestId: queryByTestId,
        queryByText: queryByText,
        queryByTitle: queryByTitle,
        queryHelpers: queryHelpers,
        screen: screen,
        waitFor: waitFor,
        waitForElementToBeRemoved: waitForElementToBeRemoved,
        within: within,
        prettyFormat: prettyFormat,
      } = testingLibrary;
      instrument({ userEvent: _userEvent }, { intercept: !0 }).userEvent;
    },
    './node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js': function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          buildQueries: function() {
            return buildQueries;
          },
          configure: function() {
            return configure;
          },
          createEvent: function() {
            return createEvent;
          },
          findAllByAltText: function() {
            return findAllByAltText;
          },
          findAllByDisplayValue: function() {
            return findAllByDisplayValue;
          },
          findAllByLabelText: function() {
            return findAllByLabelText;
          },
          findAllByPlaceholderText: function() {
            return findAllByPlaceholderText;
          },
          findAllByRole: function() {
            return findAllByRole;
          },
          findAllByTestId: function() {
            return findAllByTestId;
          },
          findAllByText: function() {
            return findAllByText;
          },
          findAllByTitle: function() {
            return findAllByTitle;
          },
          findByAltText: function() {
            return findByAltText;
          },
          findByDisplayValue: function() {
            return findByDisplayValue;
          },
          findByLabelText: function() {
            return findByLabelText;
          },
          findByPlaceholderText: function() {
            return findByPlaceholderText;
          },
          findByRole: function() {
            return findByRole;
          },
          findByTestId: function() {
            return findByTestId;
          },
          findByText: function() {
            return findByText;
          },
          findByTitle: function() {
            return findByTitle;
          },
          fireEvent: function() {
            return fireEvent;
          },
          getAllByAltText: function() {
            return getAllByAltText;
          },
          getAllByDisplayValue: function() {
            return getAllByDisplayValue;
          },
          getAllByLabelText: function() {
            return getAllByLabelTextWithSuggestions;
          },
          getAllByPlaceholderText: function() {
            return getAllByPlaceholderText;
          },
          getAllByRole: function() {
            return getAllByRole;
          },
          getAllByTestId: function() {
            return getAllByTestId;
          },
          getAllByText: function() {
            return getAllByText;
          },
          getAllByTitle: function() {
            return getAllByTitle;
          },
          getByAltText: function() {
            return getByAltText;
          },
          getByDisplayValue: function() {
            return getByDisplayValue;
          },
          getByLabelText: function() {
            return getByLabelTextWithSuggestions;
          },
          getByPlaceholderText: function() {
            return getByPlaceholderText;
          },
          getByRole: function() {
            return getByRole;
          },
          getByTestId: function() {
            return getByTestId;
          },
          getByText: function() {
            return getByText;
          },
          getByTitle: function() {
            return getByTitle;
          },
          getConfig: function() {
            return getConfig;
          },
          getDefaultNormalizer: function() {
            return getDefaultNormalizer;
          },
          getElementError: function() {
            return getElementError;
          },
          getMultipleElementsFoundError: function() {
            return getMultipleElementsFoundError;
          },
          getNodeText: function() {
            return getNodeText;
          },
          getQueriesForElement: function() {
            return getQueriesForElement;
          },
          getRoles: function() {
            return getRoles;
          },
          getSuggestedQuery: function() {
            return getSuggestedQuery;
          },
          isInaccessible: function() {
            return isInaccessible;
          },
          logDOM: function() {
            return logDOM;
          },
          logRoles: function() {
            return logRoles;
          },
          makeFindQuery: function() {
            return makeFindQuery;
          },
          makeGetAllQuery: function() {
            return makeGetAllQuery;
          },
          makeSingleQuery: function() {
            return makeSingleQuery;
          },
          prettyDOM: function() {
            return prettyDOM;
          },
          prettyFormat: function() {
            return build;
          },
          queries: function() {
            return queries;
          },
          queryAllByAltText: function() {
            return queryAllByAltTextWithSuggestions;
          },
          queryAllByAttribute: function() {
            return queryAllByAttribute;
          },
          queryAllByDisplayValue: function() {
            return queryAllByDisplayValueWithSuggestions;
          },
          queryAllByLabelText: function() {
            return queryAllByLabelTextWithSuggestions;
          },
          queryAllByPlaceholderText: function() {
            return queryAllByPlaceholderTextWithSuggestions;
          },
          queryAllByRole: function() {
            return queryAllByRoleWithSuggestions;
          },
          queryAllByTestId: function() {
            return queryAllByTestIdWithSuggestions;
          },
          queryAllByText: function() {
            return queryAllByTextWithSuggestions;
          },
          queryAllByTitle: function() {
            return queryAllByTitleWithSuggestions;
          },
          queryByAltText: function() {
            return queryByAltText;
          },
          queryByAttribute: function() {
            return queryByAttribute;
          },
          queryByDisplayValue: function() {
            return queryByDisplayValue;
          },
          queryByLabelText: function() {
            return queryByLabelText;
          },
          queryByPlaceholderText: function() {
            return queryByPlaceholderText;
          },
          queryByRole: function() {
            return queryByRole;
          },
          queryByTestId: function() {
            return queryByTestId;
          },
          queryByText: function() {
            return queryByText;
          },
          queryByTitle: function() {
            return queryByTitle;
          },
          queryHelpers: function() {
            return queryHelpers;
          },
          screen: function() {
            return screen;
          },
          waitFor: function() {
            return waitForWrapper;
          },
          waitForElementToBeRemoved: function() {
            return waitForElementToBeRemoved;
          },
          within: function() {
            return getQueriesForElement;
          },
          wrapAllByQueryWithSuggestion: function() {
            return wrapAllByQueryWithSuggestion;
          },
          wrapSingleQueryWithSuggestion: function() {
            return wrapSingleQueryWithSuggestion;
          },
        });
      var build = __webpack_require__(
          './node_modules/pretty-format/build/index.js'
        ),
        toStr = Object.prototype.toString;
      function isCallable(fn) {
        return (
          'function' == typeof fn || '[object Function]' === toStr.call(fn)
        );
      }
      var maxSafeInteger = Math.pow(2, 53) - 1;
      function toLength(value) {
        var len = (function toInteger(value) {
          var number = Number(value);
          return isNaN(number)
            ? 0
            : 0 !== number && isFinite(number)
              ? (number > 0 ? 1 : -1) * Math.floor(Math.abs(number))
              : number;
        })(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      }
      function arrayFrom(arrayLike, mapFn) {
        var C = Array,
          items = Object(arrayLike);
        if (null == arrayLike)
          throw new TypeError(
            'Array.from requires an array-like object - not null or undefined'
          );
        if (void 0 !== mapFn && !isCallable(mapFn))
          throw new TypeError(
            'Array.from: when provided, the second argument must be a function'
          );
        for (
          var kValue,
            len = toLength(items.length),
            A = isCallable(C) ? Object(new C(len)) : new Array(len),
            k = 0;
          k < len;

        )
          (kValue = items[k]),
            (A[k] = mapFn ? mapFn(kValue, k) : kValue),
            (k += 1);
        return (A.length = len), A;
      }
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
        }
      }
      function _toPropertyKey(arg) {
        var key = (function _toPrimitive(input, hint) {
          if ('object' !== _typeof(input) || null === input) return input;
          var prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            var res = prim.call(input, hint || 'default');
            if ('object' !== _typeof(res)) return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === hint ? String : Number)(input);
        })(arg, 'string');
        return 'symbol' === _typeof(key) ? key : String(key);
      }
      var SetLike = (function() {
          function SetLike() {
            var items =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            !(function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, SetLike),
              (function _defineProperty(obj, key, value) {
                return (
                  (key = _toPropertyKey(key)) in obj
                    ? Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (obj[key] = value),
                  obj
                );
              })(this, 'items', void 0),
              (this.items = items);
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Object.defineProperty(Constructor, 'prototype', {
                  writable: !1,
                }),
                Constructor
              );
            })(SetLike, [
              {
                key: 'add',
                value: function add(value) {
                  return !1 === this.has(value) && this.items.push(value), this;
                },
              },
              {
                key: 'clear',
                value: function clear() {
                  this.items = [];
                },
              },
              {
                key: 'delete',
                value: function _delete(value) {
                  var previousLength = this.items.length;
                  return (
                    (this.items = this.items.filter(function(item) {
                      return item !== value;
                    })),
                    previousLength !== this.items.length
                  );
                },
              },
              {
                key: 'forEach',
                value: function forEach(callbackfn) {
                  var _this = this;
                  this.items.forEach(function(item) {
                    callbackfn(item, item, _this);
                  });
                },
              },
              {
                key: 'has',
                value: function has(value) {
                  return -1 !== this.items.indexOf(value);
                },
              },
              {
                key: 'size',
                get: function get() {
                  return this.items.length;
                },
              },
            ]),
            SetLike
          );
        })(),
        polyfills_SetLike = 'undefined' == typeof Set ? Set : SetLike;
      function getLocalName(element) {
        var _element$localName;
        return null !== (_element$localName = element.localName) &&
          void 0 !== _element$localName
          ? _element$localName
          : element.tagName.toLowerCase();
      }
      var localNameToRoleMappings = {
          article: 'article',
          aside: 'complementary',
          button: 'button',
          datalist: 'listbox',
          dd: 'definition',
          details: 'group',
          dialog: 'dialog',
          dt: 'term',
          fieldset: 'group',
          figure: 'figure',
          form: 'form',
          footer: 'contentinfo',
          h1: 'heading',
          h2: 'heading',
          h3: 'heading',
          h4: 'heading',
          h5: 'heading',
          h6: 'heading',
          header: 'banner',
          hr: 'separator',
          html: 'document',
          legend: 'legend',
          li: 'listitem',
          math: 'math',
          main: 'main',
          menu: 'list',
          nav: 'navigation',
          ol: 'list',
          optgroup: 'group',
          option: 'option',
          output: 'status',
          progress: 'progressbar',
          section: 'region',
          summary: 'button',
          table: 'table',
          tbody: 'rowgroup',
          textarea: 'textbox',
          tfoot: 'rowgroup',
          td: 'cell',
          th: 'columnheader',
          thead: 'rowgroup',
          tr: 'row',
          ul: 'list',
        },
        prohibitedAttributes = {
          caption: new Set(['aria-label', 'aria-labelledby']),
          code: new Set(['aria-label', 'aria-labelledby']),
          deletion: new Set(['aria-label', 'aria-labelledby']),
          emphasis: new Set(['aria-label', 'aria-labelledby']),
          generic: new Set([
            'aria-label',
            'aria-labelledby',
            'aria-roledescription',
          ]),
          insertion: new Set(['aria-label', 'aria-labelledby']),
          paragraph: new Set(['aria-label', 'aria-labelledby']),
          presentation: new Set(['aria-label', 'aria-labelledby']),
          strong: new Set(['aria-label', 'aria-labelledby']),
          subscript: new Set(['aria-label', 'aria-labelledby']),
          superscript: new Set(['aria-label', 'aria-labelledby']),
        };
      function ignorePresentationalRole(element, implicitRole) {
        return (function hasGlobalAriaAttributes(element, role) {
          return [
            'aria-atomic',
            'aria-busy',
            'aria-controls',
            'aria-current',
            'aria-describedby',
            'aria-details',
            'aria-dropeffect',
            'aria-flowto',
            'aria-grabbed',
            'aria-hidden',
            'aria-keyshortcuts',
            'aria-label',
            'aria-labelledby',
            'aria-live',
            'aria-owns',
            'aria-relevant',
            'aria-roledescription',
          ].some(function(attributeName) {
            var _prohibitedAttributes;
            return (
              element.hasAttribute(attributeName) &&
              !(
                null !== (_prohibitedAttributes = prohibitedAttributes[role]) &&
                void 0 !== _prohibitedAttributes &&
                _prohibitedAttributes.has(attributeName)
              )
            );
          });
        })(element, implicitRole);
      }
      function getRole(element) {
        var explicitRole = (function getExplicitRole(element) {
          var role = element.getAttribute('role');
          if (null !== role) {
            var explicitRole = role.trim().split(' ')[0];
            if (explicitRole.length > 0) return explicitRole;
          }
          return null;
        })(element);
        if (null === explicitRole || 'presentation' === explicitRole) {
          var implicitRole = (function getImplicitRole(element) {
            var mappedByTag = localNameToRoleMappings[getLocalName(element)];
            if (void 0 !== mappedByTag) return mappedByTag;
            switch (getLocalName(element)) {
              case 'a':
              case 'area':
              case 'link':
                if (element.hasAttribute('href')) return 'link';
                break;
              case 'img':
                return '' !== element.getAttribute('alt') ||
                  ignorePresentationalRole(element, 'img')
                  ? 'img'
                  : 'presentation';
              case 'input':
                var type = element.type;
                switch (type) {
                  case 'button':
                  case 'image':
                  case 'reset':
                  case 'submit':
                    return 'button';
                  case 'checkbox':
                  case 'radio':
                    return type;
                  case 'range':
                    return 'slider';
                  case 'email':
                  case 'tel':
                  case 'text':
                  case 'url':
                    return element.hasAttribute('list')
                      ? 'combobox'
                      : 'textbox';
                  case 'search':
                    return element.hasAttribute('list')
                      ? 'combobox'
                      : 'searchbox';
                  case 'number':
                    return 'spinbutton';
                  default:
                    return null;
                }
              case 'select':
                return element.hasAttribute('multiple') || element.size > 1
                  ? 'listbox'
                  : 'combobox';
            }
            return null;
          })(element);
          if (
            'presentation' !== explicitRole ||
            ignorePresentationalRole(element, implicitRole || '')
          )
            return implicitRole;
        }
        return explicitRole;
      }
      function isElement(node) {
        return null !== node && node.nodeType === node.ELEMENT_NODE;
      }
      function isHTMLTableCaptionElement(node) {
        return isElement(node) && 'caption' === getLocalName(node);
      }
      function isHTMLInputElement(node) {
        return isElement(node) && 'input' === getLocalName(node);
      }
      function isHTMLLegendElement(node) {
        return isElement(node) && 'legend' === getLocalName(node);
      }
      function isSVGTitleElement(node) {
        return (
          (function isSVGElement(node) {
            return isElement(node) && void 0 !== node.ownerSVGElement;
          })(node) && 'title' === getLocalName(node)
        );
      }
      function queryIdRefs(node, attributeName) {
        if (isElement(node) && node.hasAttribute(attributeName)) {
          var ids = node.getAttribute(attributeName).split(' '),
            root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
          return ids
            .map(function(id) {
              return root.getElementById(id);
            })
            .filter(function(element) {
              return null !== element;
            });
        }
        return [];
      }
      function hasAnyConcreteRoles(node, roles) {
        return !!isElement(node) && -1 !== roles.indexOf(getRole(node));
      }
      function hasAbstractRole(node, role) {
        if (!isElement(node)) return !1;
        if ('range' === role)
          return hasAnyConcreteRoles(node, [
            'meter',
            'progressbar',
            'scrollbar',
            'slider',
            'spinbutton',
          ]);
        throw new TypeError(
          "No knowledge about abstract role '".concat(
            role,
            "'. This is likely a bug :("
          )
        );
      }
      function querySelectorAllSubtree(element, selectors) {
        var elements = arrayFrom(element.querySelectorAll(selectors));
        return (
          queryIdRefs(element, 'aria-owns').forEach(function(root) {
            elements.push.apply(
              elements,
              arrayFrom(root.querySelectorAll(selectors))
            );
          }),
          elements
        );
      }
      function querySelectedOptions(listbox) {
        return (function isHTMLSelectElement(node) {
          return isElement(node) && 'select' === getLocalName(node);
        })(listbox)
          ? listbox.selectedOptions ||
              querySelectorAllSubtree(listbox, '[selected]')
          : querySelectorAllSubtree(listbox, '[aria-selected="true"]');
      }
      function getValueOfTextbox(element) {
        return isHTMLInputElement(element) ||
          (function isHTMLTextAreaElement(node) {
            return isElement(node) && 'textarea' === getLocalName(node);
          })(element)
          ? element.value
          : element.textContent || '';
      }
      function getTextualContent(declaration) {
        var content = declaration.getPropertyValue('content');
        return /^["'].*["']$/.test(content) ? content.slice(1, -1) : '';
      }
      function isLabelableElement(element) {
        var localName = getLocalName(element);
        return (
          'button' === localName ||
          ('input' === localName &&
            'hidden' !== element.getAttribute('type')) ||
          'meter' === localName ||
          'output' === localName ||
          'progress' === localName ||
          'select' === localName ||
          'textarea' === localName
        );
      }
      function findLabelableElement(element) {
        if (isLabelableElement(element)) return element;
        var labelableElement = null;
        return (
          element.childNodes.forEach(function(childNode) {
            if (null === labelableElement && isElement(childNode)) {
              var descendantLabelableElement = findLabelableElement(childNode);
              null !== descendantLabelableElement &&
                (labelableElement = descendantLabelableElement);
            }
          }),
          labelableElement
        );
      }
      function getControlOfLabel(label) {
        if (void 0 !== label.control) return label.control;
        var htmlFor = label.getAttribute('for');
        return null !== htmlFor
          ? label.ownerDocument.getElementById(htmlFor)
          : findLabelableElement(label);
      }
      function computeTextAlternative(root) {
        var options =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          consultedNodes = new polyfills_SetLike(),
          window = (function safeWindow(node) {
            var defaultView = (null === node.ownerDocument
              ? node
              : node.ownerDocument
            ).defaultView;
            if (null === defaultView)
              throw new TypeError('no window available');
            return defaultView;
          })(root),
          _options$compute = options.compute,
          compute = void 0 === _options$compute ? 'name' : _options$compute,
          _options$computedStyl = options.computedStyleSupportsPseudoElements,
          computedStyleSupportsPseudoElements =
            void 0 === _options$computedStyl
              ? void 0 !== options.getComputedStyle
              : _options$computedStyl,
          _options$getComputedS = options.getComputedStyle,
          getComputedStyle =
            void 0 === _options$getComputedS
              ? window.getComputedStyle.bind(window)
              : _options$getComputedS,
          _options$hidden = options.hidden,
          hidden = void 0 !== _options$hidden && _options$hidden;
        function computeMiscTextAlternative(node, context) {
          var accumulatedText = '';
          if (isElement(node) && computedStyleSupportsPseudoElements) {
            var beforeContent = getTextualContent(
              getComputedStyle(node, '::before')
            );
            accumulatedText = ''
              .concat(beforeContent, ' ')
              .concat(accumulatedText);
          }
          if (
            (((function isHTMLSlotElement(node) {
              return isElement(node) && 'slot' === getLocalName(node);
            })(node)
              ? (function getSlotContents(slot) {
                  var assignedNodes = slot.assignedNodes();
                  return 0 === assignedNodes.length
                    ? arrayFrom(slot.childNodes)
                    : assignedNodes;
                })(node)
              : arrayFrom(node.childNodes).concat(
                  queryIdRefs(node, 'aria-owns')
                )
            ).forEach(function(child) {
              var result = computeTextAlternative(child, {
                  isEmbeddedInLabel: context.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                }),
                separator =
                  'inline' !==
                  (isElement(child)
                    ? getComputedStyle(child).getPropertyValue('display')
                    : 'inline')
                    ? ' '
                    : '';
              accumulatedText += ''
                .concat(separator)
                .concat(result)
                .concat(separator);
            }),
            isElement(node) && computedStyleSupportsPseudoElements)
          ) {
            var afterContent = getTextualContent(
              getComputedStyle(node, '::after')
            );
            accumulatedText = ''
              .concat(accumulatedText, ' ')
              .concat(afterContent);
          }
          return accumulatedText.trim();
        }
        function useAttribute(element, attributeName) {
          var attribute = element.getAttributeNode(attributeName);
          return null === attribute ||
            consultedNodes.has(attribute) ||
            '' === attribute.value.trim()
            ? null
            : (consultedNodes.add(attribute), attribute.value);
        }
        function computeElementTextAlternative(node) {
          if (!isElement(node)) return null;
          if (
            (function isHTMLFieldSetElement(node) {
              return isElement(node) && 'fieldset' === getLocalName(node);
            })(node)
          ) {
            consultedNodes.add(node);
            for (
              var children = arrayFrom(node.childNodes), i = 0;
              i < children.length;
              i += 1
            ) {
              var child = children[i];
              if (isHTMLLegendElement(child))
                return computeTextAlternative(child, {
                  isEmbeddedInLabel: !1,
                  isReferenced: !1,
                  recursion: !1,
                });
            }
          } else if (
            (function isHTMLTableElement(node) {
              return isElement(node) && 'table' === getLocalName(node);
            })(node)
          ) {
            consultedNodes.add(node);
            for (
              var _children = arrayFrom(node.childNodes), _i = 0;
              _i < _children.length;
              _i += 1
            ) {
              var _child = _children[_i];
              if (isHTMLTableCaptionElement(_child))
                return computeTextAlternative(_child, {
                  isEmbeddedInLabel: !1,
                  isReferenced: !1,
                  recursion: !1,
                });
            }
          } else {
            if (
              (function isSVGSVGElement(node) {
                return isElement(node) && 'svg' === getLocalName(node);
              })(node)
            ) {
              consultedNodes.add(node);
              for (
                var _children2 = arrayFrom(node.childNodes), _i2 = 0;
                _i2 < _children2.length;
                _i2 += 1
              ) {
                var _child2 = _children2[_i2];
                if (isSVGTitleElement(_child2)) return _child2.textContent;
              }
              return null;
            }
            if ('img' === getLocalName(node) || 'area' === getLocalName(node)) {
              var nameFromAlt = useAttribute(node, 'alt');
              if (null !== nameFromAlt) return nameFromAlt;
            } else if (
              (function isHTMLOptGroupElement(node) {
                return isElement(node) && 'optgroup' === getLocalName(node);
              })(node)
            ) {
              var nameFromLabel = useAttribute(node, 'label');
              if (null !== nameFromLabel) return nameFromLabel;
            }
          }
          if (
            isHTMLInputElement(node) &&
            ('button' === node.type ||
              'submit' === node.type ||
              'reset' === node.type)
          ) {
            var nameFromValue = useAttribute(node, 'value');
            if (null !== nameFromValue) return nameFromValue;
            if ('submit' === node.type) return 'Submit';
            if ('reset' === node.type) return 'Reset';
          }
          var labels = (function getLabels(element) {
            var labelsProperty = element.labels;
            return null === labelsProperty
              ? labelsProperty
              : void 0 !== labelsProperty
                ? arrayFrom(labelsProperty)
                : isLabelableElement(element)
                  ? arrayFrom(
                      element.ownerDocument.querySelectorAll('label')
                    ).filter(function(label) {
                      return getControlOfLabel(label) === element;
                    })
                  : null;
          })(node);
          if (null !== labels && 0 !== labels.length)
            return (
              consultedNodes.add(node),
              arrayFrom(labels)
                .map(function(element) {
                  return computeTextAlternative(element, {
                    isEmbeddedInLabel: !0,
                    isReferenced: !1,
                    recursion: !0,
                  });
                })
                .filter(function(label) {
                  return label.length > 0;
                })
                .join(' ')
            );
          if (isHTMLInputElement(node) && 'image' === node.type) {
            var _nameFromAlt = useAttribute(node, 'alt');
            if (null !== _nameFromAlt) return _nameFromAlt;
            var nameFromTitle = useAttribute(node, 'title');
            return null !== nameFromTitle ? nameFromTitle : 'Submit Query';
          }
          if (hasAnyConcreteRoles(node, ['button'])) {
            var nameFromSubTree = computeMiscTextAlternative(node, {
              isEmbeddedInLabel: !1,
              isReferenced: !1,
            });
            if ('' !== nameFromSubTree) return nameFromSubTree;
          }
          return null;
        }
        function computeTextAlternative(current, context) {
          if (consultedNodes.has(current)) return '';
          if (
            !hidden &&
            (function isHidden(node, getComputedStyleImplementation) {
              if (!isElement(node)) return !1;
              if (
                node.hasAttribute('hidden') ||
                'true' === node.getAttribute('aria-hidden')
              )
                return !0;
              var style = getComputedStyleImplementation(node);
              return (
                'none' === style.getPropertyValue('display') ||
                'hidden' === style.getPropertyValue('visibility')
              );
            })(current, getComputedStyle) &&
            !context.isReferenced
          )
            return consultedNodes.add(current), '';
          var labelAttributeNode = isElement(current)
              ? current.getAttributeNode('aria-labelledby')
              : null,
            labelElements =
              null === labelAttributeNode ||
              consultedNodes.has(labelAttributeNode)
                ? []
                : queryIdRefs(current, 'aria-labelledby');
          if (
            'name' === compute &&
            !context.isReferenced &&
            labelElements.length > 0
          )
            return (
              consultedNodes.add(labelAttributeNode),
              labelElements
                .map(function(element) {
                  return computeTextAlternative(element, {
                    isEmbeddedInLabel: context.isEmbeddedInLabel,
                    isReferenced: !0,
                    recursion: !1,
                  });
                })
                .join(' ')
            );
          var skipToStep2E =
            context.recursion &&
            (function isControl(node) {
              return (
                hasAnyConcreteRoles(node, [
                  'button',
                  'combobox',
                  'listbox',
                  'textbox',
                ]) || hasAbstractRole(node, 'range')
              );
            })(current) &&
            'name' === compute;
          if (!skipToStep2E) {
            var ariaLabel = (
              (isElement(current) && current.getAttribute('aria-label')) ||
              ''
            ).trim();
            if ('' !== ariaLabel && 'name' === compute)
              return consultedNodes.add(current), ariaLabel;
            if (
              !(function isMarkedPresentational(node) {
                return hasAnyConcreteRoles(node, ['none', 'presentation']);
              })(current)
            ) {
              var elementTextAlternative = computeElementTextAlternative(
                current
              );
              if (null !== elementTextAlternative)
                return consultedNodes.add(current), elementTextAlternative;
            }
          }
          if (hasAnyConcreteRoles(current, ['menu']))
            return consultedNodes.add(current), '';
          if (
            skipToStep2E ||
            context.isEmbeddedInLabel ||
            context.isReferenced
          ) {
            if (hasAnyConcreteRoles(current, ['combobox', 'listbox'])) {
              consultedNodes.add(current);
              var selectedOptions = querySelectedOptions(current);
              return 0 === selectedOptions.length
                ? isHTMLInputElement(current)
                  ? current.value
                  : ''
                : arrayFrom(selectedOptions)
                    .map(function(selectedOption) {
                      return computeTextAlternative(selectedOption, {
                        isEmbeddedInLabel: context.isEmbeddedInLabel,
                        isReferenced: !1,
                        recursion: !0,
                      });
                    })
                    .join(' ');
            }
            if (hasAbstractRole(current, 'range'))
              return (
                consultedNodes.add(current),
                current.hasAttribute('aria-valuetext')
                  ? current.getAttribute('aria-valuetext')
                  : current.hasAttribute('aria-valuenow')
                    ? current.getAttribute('aria-valuenow')
                    : current.getAttribute('value') || ''
              );
            if (hasAnyConcreteRoles(current, ['textbox']))
              return consultedNodes.add(current), getValueOfTextbox(current);
          }
          if (
            (function allowsNameFromContent(node) {
              return hasAnyConcreteRoles(node, [
                'button',
                'cell',
                'checkbox',
                'columnheader',
                'gridcell',
                'heading',
                'label',
                'legend',
                'link',
                'menuitem',
                'menuitemcheckbox',
                'menuitemradio',
                'option',
                'radio',
                'row',
                'rowheader',
                'switch',
                'tab',
                'tooltip',
                'treeitem',
              ]);
            })(current) ||
            (isElement(current) && context.isReferenced) ||
            (function isNativeHostLanguageTextAlternativeElement(node) {
              return isHTMLTableCaptionElement(node);
            })(current)
          ) {
            var accumulatedText2F = computeMiscTextAlternative(current, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: !1,
            });
            if ('' !== accumulatedText2F)
              return consultedNodes.add(current), accumulatedText2F;
          }
          if (current.nodeType === current.TEXT_NODE)
            return consultedNodes.add(current), current.textContent || '';
          if (context.recursion)
            return (
              consultedNodes.add(current),
              computeMiscTextAlternative(current, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: !1,
              })
            );
          var tooltipAttributeValue = (function computeTooltipAttributeValue(
            node
          ) {
            return isElement(node) ? useAttribute(node, 'title') : null;
          })(current);
          return null !== tooltipAttributeValue
            ? (consultedNodes.add(current), tooltipAttributeValue)
            : (consultedNodes.add(current), '');
        }
        return (function asFlatString(s) {
          return s.trim().replace(/\s\s+/g, ' ');
        })(
          computeTextAlternative(root, {
            isEmbeddedInLabel: !1,
            isReferenced: 'description' === compute,
            recursion: !1,
          })
        );
      }
      function accessible_description_typeof(obj) {
        return (
          (accessible_description_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          accessible_description_typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                accessible_description_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function accessible_description_defineProperty(obj, key, value) {
        return (
          (key = (function accessible_description_toPropertyKey(arg) {
            var key = (function accessible_description_toPrimitive(
              input,
              hint
            ) {
              if (
                'object' !== accessible_description_typeof(input) ||
                null === input
              )
                return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || 'default');
                if ('object' !== accessible_description_typeof(res)) return res;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === hint ? String : Number)(input);
            })(arg, 'string');
            return 'symbol' === accessible_description_typeof(key)
              ? key
              : String(key);
          })(key)) in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function computeAccessibleDescription(root) {
        var options =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          description = queryIdRefs(root, 'aria-describedby')
            .map(function(element) {
              return computeTextAlternative(
                element,
                _objectSpread(
                  _objectSpread({}, options),
                  {},
                  { compute: 'description' }
                )
              );
            })
            .join(' ');
        if ('' === description) {
          var title = root.getAttribute('title');
          description = null === title ? '' : title;
        }
        return description;
      }
      function computeAccessibleName(root) {
        var options =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (function prohibitsNaming(node) {
          return hasAnyConcreteRoles(node, [
            'caption',
            'code',
            'deletion',
            'emphasis',
            'generic',
            'insertion',
            'paragraph',
            'presentation',
            'strong',
            'subscript',
            'superscript',
          ]);
        })(root)
          ? ''
          : computeTextAlternative(root, options);
      }
      var lib = __webpack_require__(
          './node_modules/@testing-library/dom/node_modules/aria-query/lib/index.js'
        ),
        lz_string = __webpack_require__(
          './node_modules/lz-string/libs/lz-string.js'
        ),
        lz_string_default = __webpack_require__.n(lz_string);
      module = __webpack_require__.hmd(module);
      var process = __webpack_require__('./node_modules/process/browser.js');
      function escapeHTML(str) {
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      const printProps = (
          keys,
          props,
          config,
          indentation,
          depth,
          refs,
          printer
        ) => {
          const indentationNext = indentation + config.indent,
            colors = config.colors;
          return keys
            .map(key => {
              const value = props[key];
              let printed = printer(
                value,
                config,
                indentationNext,
                depth,
                refs
              );
              return (
                'string' != typeof value &&
                  (-1 !== printed.indexOf('\n') &&
                    (printed =
                      config.spacingOuter +
                      indentationNext +
                      printed +
                      config.spacingOuter +
                      indentation),
                  (printed = '{' + printed + '}')),
                config.spacingInner +
                  indentation +
                  colors.prop.open +
                  key +
                  colors.prop.close +
                  '=' +
                  colors.value.open +
                  printed +
                  colors.value.close
              );
            })
            .join('');
        },
        printChildren = (children, config, indentation, depth, refs, printer) =>
          children
            .map(child => {
              const printedChild =
                'string' == typeof child
                  ? printText(child, config)
                  : printer(child, config, indentation, depth, refs);
              return '' === printedChild &&
                'object' == typeof child &&
                null !== child &&
                3 !== child.nodeType
                ? ''
                : config.spacingOuter + indentation + printedChild;
            })
            .join(''),
        printText = (text, config) => {
          const contentColor = config.colors.content;
          return contentColor.open + escapeHTML(text) + contentColor.close;
        },
        printComment = (comment, config) => {
          const commentColor = config.colors.comment;
          return (
            commentColor.open +
            '\x3c!--' +
            escapeHTML(comment) +
            '--\x3e' +
            commentColor.close
          );
        },
        printElement = (
          type,
          printedProps,
          printedChildren,
          config,
          indentation
        ) => {
          const tagColor = config.colors.tag;
          return (
            tagColor.open +
            '<' +
            type +
            (printedProps &&
              tagColor.close +
                printedProps +
                config.spacingOuter +
                indentation +
                tagColor.open) +
            (printedChildren
              ? '>' +
                tagColor.close +
                printedChildren +
                config.spacingOuter +
                indentation +
                tagColor.open +
                '</' +
                type
              : (printedProps && !config.min ? '' : ' ') + '/') +
            '>' +
            tagColor.close
          );
        },
        printElementAsLeaf = (type, config) => {
          const tagColor = config.colors.tag;
          return (
            tagColor.open +
            '<' +
            type +
            tagColor.close +
            ' …' +
            tagColor.open +
            ' />' +
            tagColor.close
          );
        },
        TEXT_NODE$1 = 3,
        COMMENT_NODE$1 = 8,
        FRAGMENT_NODE = 11,
        ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/,
        testNode = val => {
          const constructorName = val.constructor.name,
            { nodeType: nodeType, tagName: tagName } = val,
            isCustomElement =
              ('string' == typeof tagName && tagName.includes('-')) ||
              ('function' == typeof val.hasAttribute && val.hasAttribute('is'));
          return (
            (1 === nodeType &&
              (ELEMENT_REGEXP.test(constructorName) || isCustomElement)) ||
            (nodeType === TEXT_NODE$1 && 'Text' === constructorName) ||
            (nodeType === COMMENT_NODE$1 && 'Comment' === constructorName) ||
            (nodeType === FRAGMENT_NODE &&
              'DocumentFragment' === constructorName)
          );
        };
      function nodeIsFragment(node) {
        return node.nodeType === FRAGMENT_NODE;
      }
      function createDOMElementFilter(filterNode) {
        return {
          test: val => {
            var _val$constructor2;
            return (
              (null == val || null == (_val$constructor2 = val.constructor)
                ? void 0
                : _val$constructor2.name) && testNode(val)
            );
          },
          serialize: (node, config, indentation, depth, refs, printer) => {
            if (
              (function nodeIsText(node) {
                return node.nodeType === TEXT_NODE$1;
              })(node)
            )
              return printText(node.data, config);
            if (
              (function nodeIsComment(node) {
                return node.nodeType === COMMENT_NODE$1;
              })(node)
            )
              return printComment(node.data, config);
            const type = nodeIsFragment(node)
              ? 'DocumentFragment'
              : node.tagName.toLowerCase();
            return ++depth > config.maxDepth
              ? printElementAsLeaf(type, config)
              : printElement(
                  type,
                  printProps(
                    nodeIsFragment(node)
                      ? []
                      : Array.from(node.attributes)
                          .map(attr => attr.name)
                          .sort(),
                    nodeIsFragment(node)
                      ? {}
                      : Array.from(node.attributes).reduce(
                          (props, attribute) => (
                            (props[attribute.name] = attribute.value), props
                          ),
                          {}
                        ),
                    config,
                    indentation + config.indent,
                    depth,
                    refs,
                    printer
                  ),
                  printChildren(
                    Array.prototype.slice
                      .call(node.childNodes || node.children)
                      .filter(filterNode),
                    config,
                    indentation + config.indent,
                    depth,
                    refs,
                    printer
                  ),
                  config,
                  indentation
                );
          },
        };
      }
      let chalk = null,
        readFileSync = null,
        codeFrameColumns = null;
      try {
        const nodeRequire = module && module.require;
        (readFileSync = nodeRequire.call(module, 'fs').readFileSync),
          (codeFrameColumns = nodeRequire.call(module, '@babel/code-frame')
            .codeFrameColumns),
          (chalk = nodeRequire.call(module, 'chalk'));
      } catch {}
      function getUserCodeFrame() {
        if (!readFileSync || !codeFrameColumns) return '';
        return (function getCodeFrame(frame) {
          const locationStart = frame.indexOf('(') + 1,
            locationEnd = frame.indexOf(')'),
            frameLocation = frame.slice(locationStart, locationEnd),
            frameLocationElements = frameLocation.split(':'),
            [filename, line, column] = [
              frameLocationElements[0],
              parseInt(frameLocationElements[1], 10),
              parseInt(frameLocationElements[2], 10),
            ];
          let rawFileContents = '';
          try {
            rawFileContents = readFileSync(filename, 'utf-8');
          } catch {
            return '';
          }
          const codeFrame = codeFrameColumns(
            rawFileContents,
            { start: { line: line, column: column } },
            { highlightCode: !0, linesBelow: 0 }
          );
          return chalk.dim(frameLocation) + '\n' + codeFrame + '\n';
        })(
          new Error().stack
            .split('\n')
            .slice(1)
            .find(frame => !frame.includes('node_modules/'))
        );
      }
      const TEXT_NODE = 3;
      function jestFakeTimersAreEnabled() {
        return (
          'undefined' != typeof jest &&
          null !== jest &&
          (!0 === setTimeout._isMockFunction ||
            Object.prototype.hasOwnProperty.call(setTimeout, 'clock'))
        );
      }
      function getDocument() {
        if ('undefined' == typeof window)
          throw new Error('Could not find default container');
        return window.document;
      }
      function getWindowFromNode(node) {
        if (node.defaultView) return node.defaultView;
        if (node.ownerDocument && node.ownerDocument.defaultView)
          return node.ownerDocument.defaultView;
        if (node.window) return node.window;
        throw node.ownerDocument && null === node.ownerDocument.defaultView
          ? new Error(
              'It looks like the window object is not available for the provided node.'
            )
          : node.then instanceof Function
            ? new Error(
                'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
              )
            : Array.isArray(node)
              ? new Error(
                  'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
                )
              : 'function' == typeof node.debug &&
                'function' == typeof node.logTestingPlaygroundURL
                ? new Error(
                    'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
                  )
                : new Error(
                    'The given node is not an Element, the node type is: ' +
                      typeof node +
                      '.'
                  );
      }
      function checkContainerType(container) {
        if (
          !container ||
          'function' != typeof container.querySelector ||
          'function' != typeof container.querySelectorAll
        )
          throw new TypeError(
            'Expected container to be an Element, a Document or a DocumentFragment but got ' +
              (function getTypeName(object) {
                if ('object' == typeof object)
                  return null === object ? 'null' : object.constructor.name;
                return typeof object;
              })(container) +
              '.'
          );
      }
      const shouldHighlight = () => {
          let colors;
          try {
            var _process;
            colors = JSON.parse(
              null == (_process = process) || null == (_process = _process.env)
                ? void 0
                : _process.COLORS
            );
          } catch (e) {}
          return 'boolean' == typeof colors
            ? colors
            : void 0 !== process &&
                void 0 !== process.versions &&
                void 0 !== process.versions.node;
        },
        { DOMCollection: DOMCollection } = build.plugins,
        ELEMENT_NODE = 1,
        COMMENT_NODE = 8;
      function filterCommentsAndDefaultIgnoreTagsTags(value) {
        return (
          value.nodeType !== COMMENT_NODE &&
          (value.nodeType !== ELEMENT_NODE ||
            !value.matches(getConfig().defaultIgnore))
        );
      }
      function prettyDOM(dom, maxLength, options) {
        if (
          (void 0 === options && (options = {}),
          dom || (dom = getDocument().body),
          'number' != typeof maxLength &&
            (maxLength =
              (void 0 !== process && process.env.DEBUG_PRINT_LIMIT) || 7e3),
          0 === maxLength)
        )
          return '';
        dom.documentElement && (dom = dom.documentElement);
        let domTypeName = typeof dom;
        if (
          ('object' === domTypeName
            ? (domTypeName = dom.constructor.name)
            : (dom = {}),
          !('outerHTML' in dom))
        )
          throw new TypeError(
            'Expected an element or document but got ' + domTypeName
          );
        const {
            filterNode: filterNode = filterCommentsAndDefaultIgnoreTagsTags,
            ...prettyFormatOptions
          } = options,
          debugContent = build.format(dom, {
            plugins: [createDOMElementFilter(filterNode), DOMCollection],
            printFunctionName: !1,
            highlight: shouldHighlight(),
            ...prettyFormatOptions,
          });
        return void 0 !== maxLength && dom.outerHTML.length > maxLength
          ? debugContent.slice(0, maxLength) + '...'
          : debugContent;
      }
      const logDOM = function() {
        const userCodeFrame = getUserCodeFrame();
        userCodeFrame
          ? console.log(prettyDOM(...arguments) + '\n\n' + userCodeFrame)
          : console.log(prettyDOM(...arguments));
      };
      let config = {
        testIdAttribute: 'data-testid',
        asyncUtilTimeout: 1e3,
        asyncWrapper: cb => cb(),
        unstable_advanceTimersWrapper: cb => cb(),
        eventWrapper: cb => cb(),
        defaultHidden: !1,
        defaultIgnore: 'script, style',
        showOriginalStackTrace: !1,
        throwSuggestions: !1,
        getElementError(message, container) {
          const prettifiedDOM = prettyDOM(container),
            error = new Error(
              [
                message,
                'Ignored nodes: comments, ' +
                  config.defaultIgnore +
                  '\n' +
                  prettifiedDOM,
              ]
                .filter(Boolean)
                .join('\n\n')
            );
          return (error.name = 'TestingLibraryElementError'), error;
        },
        _disableExpensiveErrorDiagnostics: !1,
        computedStyleSupportsPseudoElements: !1,
      };
      function configure(newConfig) {
        'function' == typeof newConfig && (newConfig = newConfig(config)),
          (config = { ...config, ...newConfig });
      }
      function getConfig() {
        return config;
      }
      const labelledNodeNames = [
        'button',
        'meter',
        'output',
        'progress',
        'select',
        'textarea',
        'input',
      ];
      function getTextContent(node) {
        return labelledNodeNames.includes(node.nodeName.toLowerCase())
          ? ''
          : node.nodeType === TEXT_NODE
            ? node.textContent
            : Array.from(node.childNodes)
                .map(childNode => getTextContent(childNode))
                .join('');
      }
      function getLabelContent(element) {
        let textContent;
        return (
          (textContent =
            'label' === element.tagName.toLowerCase()
              ? getTextContent(element)
              : element.value || element.textContent),
          textContent
        );
      }
      function getRealLabels(element) {
        var _labels;
        if (void 0 !== element.labels)
          return null != (_labels = element.labels) ? _labels : [];
        if (
          !(function isLabelable(element) {
            return (
              /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(
                element.tagName
              ) ||
              ('INPUT' === element.tagName &&
                'hidden' !== element.getAttribute('type'))
            );
          })(element)
        )
          return [];
        const labels = element.ownerDocument.querySelectorAll('label');
        return Array.from(labels).filter(label => label.control === element);
      }
      function dom_esm_getLabels(container, element, _temp) {
        let { selector: selector = '*' } = void 0 === _temp ? {} : _temp;
        const ariaLabelledBy = element.getAttribute('aria-labelledby'),
          labelsId = ariaLabelledBy ? ariaLabelledBy.split(' ') : [];
        return labelsId.length
          ? labelsId.map(labelId => {
              const labellingElement = container.querySelector(
                '[id="' + labelId + '"]'
              );
              return labellingElement
                ? {
                    content: getLabelContent(labellingElement),
                    formControl: null,
                  }
                : { content: '', formControl: null };
            })
          : Array.from(getRealLabels(element)).map(label => ({
              content: getLabelContent(label),
              formControl: Array.from(
                label.querySelectorAll(
                  'button, input, meter, output, progress, select, textarea'
                )
              ).filter(formControlElement =>
                formControlElement.matches(selector)
              )[0],
            }));
      }
      function assertNotNullOrUndefined(matcher) {
        if (null == matcher)
          throw new Error(
            'It looks like ' +
              matcher +
              ' was passed instead of a matcher. Did you do something like getByText(' +
              matcher +
              ')?'
          );
      }
      function fuzzyMatches(textToMatch, node, matcher, normalizer) {
        if ('string' != typeof textToMatch) return !1;
        assertNotNullOrUndefined(matcher);
        const normalizedText = normalizer(textToMatch);
        return 'string' == typeof matcher || 'number' == typeof matcher
          ? normalizedText
              .toLowerCase()
              .includes(matcher.toString().toLowerCase())
          : 'function' == typeof matcher
            ? matcher(normalizedText, node)
            : matchRegExp(matcher, normalizedText);
      }
      function matches(textToMatch, node, matcher, normalizer) {
        if ('string' != typeof textToMatch) return !1;
        assertNotNullOrUndefined(matcher);
        const normalizedText = normalizer(textToMatch);
        return matcher instanceof Function
          ? matcher(normalizedText, node)
          : matcher instanceof RegExp
            ? matchRegExp(matcher, normalizedText)
            : normalizedText === String(matcher);
      }
      function getDefaultNormalizer(_temp) {
        let { trim: trim = !0, collapseWhitespace: collapseWhitespace = !0 } =
          void 0 === _temp ? {} : _temp;
        return text => {
          let normalizedText = text;
          return (
            (normalizedText = trim ? normalizedText.trim() : normalizedText),
            (normalizedText = collapseWhitespace
              ? normalizedText.replace(/\s+/g, ' ')
              : normalizedText),
            normalizedText
          );
        };
      }
      function makeNormalizer(_ref) {
        let {
          trim: trim,
          collapseWhitespace: collapseWhitespace,
          normalizer: normalizer,
        } = _ref;
        if (!normalizer)
          return getDefaultNormalizer({
            trim: trim,
            collapseWhitespace: collapseWhitespace,
          });
        if (void 0 !== trim || void 0 !== collapseWhitespace)
          throw new Error(
            'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
          );
        return normalizer;
      }
      function matchRegExp(matcher, text) {
        const match = matcher.test(text);
        return (
          matcher.global &&
            0 !== matcher.lastIndex &&
            (console.warn(
              'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.'
            ),
            (matcher.lastIndex = 0)),
          match
        );
      }
      function getNodeText(node) {
        return node.matches(
          'input[type=submit], input[type=button], input[type=reset]'
        )
          ? node.value
          : Array.from(node.childNodes)
              .filter(
                child =>
                  child.nodeType === TEXT_NODE && Boolean(child.textContent)
              )
              .map(c => c.textContent)
              .join('');
      }
      const elementRoleList = (function buildElementRoleList(elementRolesMap) {
        function getSelectorSpecificity(_ref3) {
          let { attributes: attributes = [] } = _ref3;
          return attributes.length;
        }
        function match(element) {
          let { attributes: attributes = [] } = element;
          const typeTextIndex = attributes.findIndex(
            attribute =>
              attribute.value &&
              'type' === attribute.name &&
              'text' === attribute.value
          );
          typeTextIndex >= 0 &&
            (attributes = [
              ...attributes.slice(0, typeTextIndex),
              ...attributes.slice(typeTextIndex + 1),
            ]);
          const selector = (function makeElementSelector(_ref) {
            let { name: name, attributes: attributes } = _ref;
            return (
              '' +
              name +
              attributes
                .map(_ref2 => {
                  let {
                    name: attributeName,
                    value: value,
                    constraints: constraints = [],
                  } = _ref2;
                  return -1 !== constraints.indexOf('undefined')
                    ? ':not([' + attributeName + '])'
                    : value
                      ? '[' + attributeName + '="' + value + '"]'
                      : '[' + attributeName + ']';
                })
                .join('')
            );
          })({ ...element, attributes: attributes });
          return node =>
            !(typeTextIndex >= 0 && 'text' !== node.type) &&
            node.matches(selector);
        }
        let result = [];
        for (const [element, roles] of elementRolesMap.entries())
          result = [
            ...result,
            {
              match: match(element),
              roles: Array.from(roles),
              specificity: getSelectorSpecificity(element),
            },
          ];
        return result.sort(function bySelectorSpecificity(_ref4, _ref5) {
          let { specificity: leftSpecificity } = _ref4,
            { specificity: rightSpecificity } = _ref5;
          return rightSpecificity - leftSpecificity;
        });
      })(lib.Qv);
      function isSubtreeInaccessible(element) {
        if (!0 === element.hidden) return !0;
        if ('true' === element.getAttribute('aria-hidden')) return !0;
        return (
          'none' ===
          element.ownerDocument.defaultView.getComputedStyle(element).display
        );
      }
      function isInaccessible(element, options) {
        void 0 === options && (options = {});
        const {
          isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible,
        } = options;
        if (
          'hidden' ===
          element.ownerDocument.defaultView.getComputedStyle(element).visibility
        )
          return !0;
        let currentElement = element;
        for (; currentElement; ) {
          if (isSubtreeInaccessibleImpl(currentElement)) return !0;
          currentElement = currentElement.parentElement;
        }
        return !1;
      }
      function getImplicitAriaRoles(currentNode) {
        for (const { match: match, roles: roles } of elementRoleList)
          if (match(currentNode)) return [...roles];
        return [];
      }
      function getRoles(container, _temp) {
        let { hidden: hidden = !1 } = void 0 === _temp ? {} : _temp;
        return (function flattenDOM(node) {
          return [
            node,
            ...Array.from(node.children).reduce(
              (acc, child) => [...acc, ...flattenDOM(child)],
              []
            ),
          ];
        })(container)
          .filter(element => !1 !== hidden || !1 === isInaccessible(element))
          .reduce((acc, node) => {
            let roles = [];
            return (
              (roles = node.hasAttribute('role')
                ? node
                    .getAttribute('role')
                    .split(' ')
                    .slice(0, 1)
                : getImplicitAriaRoles(node)),
              roles.reduce(
                (rolesAcc, role) =>
                  Array.isArray(rolesAcc[role])
                    ? { ...rolesAcc, [role]: [...rolesAcc[role], node] }
                    : { ...rolesAcc, [role]: [node] },
                acc
              )
            );
          }, {});
      }
      function prettyRoles(dom, _ref6) {
        let { hidden: hidden, includeDescription: includeDescription } = _ref6;
        const roles = getRoles(dom, { hidden: hidden });
        return Object.entries(roles)
          .filter(_ref7 => {
            let [role] = _ref7;
            return 'generic' !== role;
          })
          .map(_ref8 => {
            let [role, elements] = _ref8;
            const delimiterBar = '-'.repeat(50);
            return (
              role +
              ':\n\n' +
              elements
                .map(el => {
                  const nameString =
                      'Name "' +
                      computeAccessibleName(el, {
                        computedStyleSupportsPseudoElements: getConfig()
                          .computedStyleSupportsPseudoElements,
                      }) +
                      '":\n',
                    domString = prettyDOM(el.cloneNode(!1));
                  if (includeDescription) {
                    return (
                      '' +
                      nameString +
                      ('Description "' +
                        computeAccessibleDescription(el, {
                          computedStyleSupportsPseudoElements: getConfig()
                            .computedStyleSupportsPseudoElements,
                        }) +
                        '":\n') +
                      domString
                    );
                  }
                  return '' + nameString + domString;
                })
                .join('\n\n') +
              '\n\n' +
              delimiterBar
            );
          })
          .join('\n');
      }
      const logRoles = function(dom, _temp2) {
        let { hidden: hidden = !1 } = void 0 === _temp2 ? {} : _temp2;
        return console.log(prettyRoles(dom, { hidden: hidden }));
      };
      function checkBooleanAttribute(element, attribute) {
        const attributeValue = element.getAttribute(attribute);
        return (
          'true' === attributeValue || ('false' !== attributeValue && void 0)
        );
      }
      const normalize = getDefaultNormalizer();
      function getRegExpMatcher(string) {
        return new RegExp(
          (function escapeRegExp(string) {
            return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
          })(string.toLowerCase()),
          'i'
        );
      }
      function makeSuggestion(queryName, element, content, _ref) {
        let { variant: variant, name: name } = _ref,
          warning = '';
        const queryOptions = {},
          queryArgs = [
            ['Role', 'TestId'].includes(queryName)
              ? content
              : getRegExpMatcher(content),
          ];
        name && (queryOptions.name = getRegExpMatcher(name)),
          'Role' === queryName &&
            isInaccessible(element) &&
            ((queryOptions.hidden = !0),
            (warning =
              'Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ')),
          Object.keys(queryOptions).length > 0 && queryArgs.push(queryOptions);
        const queryMethod = variant + 'By' + queryName;
        return {
          queryName: queryName,
          queryMethod: queryMethod,
          queryArgs: queryArgs,
          variant: variant,
          warning: warning,
          toString() {
            warning && console.warn(warning);
            let [text, options] = queryArgs;
            return (
              (text = 'string' == typeof text ? "'" + text + "'" : text),
              (options = options
                ? ', { ' +
                  Object.entries(options)
                    .map(_ref2 => {
                      let [k, v] = _ref2;
                      return k + ': ' + v;
                    })
                    .join(', ') +
                  ' }'
                : ''),
              queryMethod + '(' + text + options + ')'
            );
          },
        };
      }
      function canSuggest(currentMethod, requestedMethod, data) {
        return (
          data &&
          (!requestedMethod ||
            requestedMethod.toLowerCase() === currentMethod.toLowerCase())
        );
      }
      function getSuggestedQuery(element, variant, method) {
        var _element$getAttribute, _getImplicitAriaRoles;
        if (
          (void 0 === variant && (variant = 'get'),
          element.matches(getConfig().defaultIgnore))
        )
          return;
        const role =
          null != (_element$getAttribute = element.getAttribute('role'))
            ? _element$getAttribute
            : null == (_getImplicitAriaRoles = getImplicitAriaRoles(element))
              ? void 0
              : _getImplicitAriaRoles[0];
        if ('generic' !== role && canSuggest('Role', method, role))
          return makeSuggestion('Role', element, role, {
            variant: variant,
            name: computeAccessibleName(element, {
              computedStyleSupportsPseudoElements: getConfig()
                .computedStyleSupportsPseudoElements,
            }),
          });
        const labelText = dom_esm_getLabels(document, element)
          .map(label => label.content)
          .join(' ');
        if (canSuggest('LabelText', method, labelText))
          return makeSuggestion('LabelText', element, labelText, {
            variant: variant,
          });
        const placeholderText = element.getAttribute('placeholder');
        if (canSuggest('PlaceholderText', method, placeholderText))
          return makeSuggestion('PlaceholderText', element, placeholderText, {
            variant: variant,
          });
        const textContent = normalize(getNodeText(element));
        if (canSuggest('Text', method, textContent))
          return makeSuggestion('Text', element, textContent, {
            variant: variant,
          });
        if (canSuggest('DisplayValue', method, element.value))
          return makeSuggestion(
            'DisplayValue',
            element,
            normalize(element.value),
            { variant: variant }
          );
        const alt = element.getAttribute('alt');
        if (canSuggest('AltText', method, alt))
          return makeSuggestion('AltText', element, alt, { variant: variant });
        const title = element.getAttribute('title');
        if (canSuggest('Title', method, title))
          return makeSuggestion('Title', element, title, { variant: variant });
        const testId = element.getAttribute(getConfig().testIdAttribute);
        return canSuggest('TestId', method, testId)
          ? makeSuggestion('TestId', element, testId, { variant: variant })
          : void 0;
      }
      function copyStackTrace(target, source) {
        target.stack = source.stack.replace(source.message, target.message);
      }
      function waitFor(callback, _ref) {
        let {
          container: container = getDocument(),
          timeout: timeout = getConfig().asyncUtilTimeout,
          showOriginalStackTrace: showOriginalStackTrace = getConfig()
            .showOriginalStackTrace,
          stackTraceError: stackTraceError,
          interval: interval = 50,
          onTimeout: onTimeout = error => (
            Object.defineProperty(error, 'message', {
              value: getConfig().getElementError(error.message, container)
                .message,
            }),
            error
          ),
          mutationObserverOptions: mutationObserverOptions = {
            subtree: !0,
            childList: !0,
            attributes: !0,
            characterData: !0,
          },
        } = _ref;
        if ('function' != typeof callback)
          throw new TypeError('Received `callback` arg must be a function');
        return new Promise(async (resolve, reject) => {
          let lastError,
            intervalId,
            observer,
            finished = !1,
            promiseStatus = 'idle';
          const overallTimeoutTimer = setTimeout(function handleTimeout() {
              let error;
              lastError
                ? ((error = lastError),
                  showOriginalStackTrace ||
                    'TestingLibraryElementError' !== error.name ||
                    copyStackTrace(error, stackTraceError))
                : ((error = new Error('Timed out in waitFor.')),
                  showOriginalStackTrace ||
                    copyStackTrace(error, stackTraceError));
              onDone(onTimeout(error), null);
            }, timeout),
            usingJestFakeTimers = jestFakeTimersAreEnabled();
          if (usingJestFakeTimers) {
            const {
              unstable_advanceTimersWrapper: advanceTimersWrapper,
            } = getConfig();
            for (checkCallback(); !finished; ) {
              if (!jestFakeTimersAreEnabled()) {
                const error = new Error(
                  "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
                );
                return (
                  showOriginalStackTrace ||
                    copyStackTrace(error, stackTraceError),
                  void reject(error)
                );
              }
              if (
                (await advanceTimersWrapper(async () => {
                  jest.advanceTimersByTime(interval);
                }),
                checkCallback(),
                finished)
              )
                break;
            }
          } else {
            try {
              checkContainerType(container);
            } catch (e) {
              return void reject(e);
            }
            intervalId = setInterval(checkRealTimersCallback, interval);
            const { MutationObserver: MutationObserver } = getWindowFromNode(
              container
            );
            (observer = new MutationObserver(checkRealTimersCallback)),
              observer.observe(container, mutationObserverOptions),
              checkCallback();
          }
          function onDone(error, result) {
            (finished = !0),
              clearTimeout(overallTimeoutTimer),
              usingJestFakeTimers ||
                (clearInterval(intervalId), observer.disconnect()),
              error ? reject(error) : resolve(result);
          }
          function checkRealTimersCallback() {
            if (jestFakeTimersAreEnabled()) {
              const error = new Error(
                "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
              );
              return (
                showOriginalStackTrace ||
                  copyStackTrace(error, stackTraceError),
                reject(error)
              );
            }
            return checkCallback();
          }
          function checkCallback() {
            if ('pending' !== promiseStatus)
              try {
                const result = (function runWithExpensiveErrorDiagnosticsDisabled(
                  callback
                ) {
                  try {
                    return (
                      (config._disableExpensiveErrorDiagnostics = !0),
                      callback()
                    );
                  } finally {
                    config._disableExpensiveErrorDiagnostics = !1;
                  }
                })(callback);
                'function' == typeof (null == result ? void 0 : result.then)
                  ? ((promiseStatus = 'pending'),
                    result.then(
                      resolvedValue => {
                        (promiseStatus = 'resolved'),
                          onDone(null, resolvedValue);
                      },
                      rejectedValue => {
                        (promiseStatus = 'rejected'),
                          (lastError = rejectedValue);
                      }
                    ))
                  : onDone(null, result);
              } catch (error) {
                lastError = error;
              }
          }
        });
      }
      function waitForWrapper(callback, options) {
        const stackTraceError = new Error('STACK_TRACE_MESSAGE');
        return getConfig().asyncWrapper(() =>
          waitFor(callback, { stackTraceError: stackTraceError, ...options })
        );
      }
      function getElementError(message, container) {
        return getConfig().getElementError(message, container);
      }
      function getMultipleElementsFoundError(message, container) {
        return getElementError(
          message +
            '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
          container
        );
      }
      function queryAllByAttribute(attribute, container, text, _temp) {
        let {
          exact: exact = !0,
          collapseWhitespace: collapseWhitespace,
          trim: trim,
          normalizer: normalizer,
        } = void 0 === _temp ? {} : _temp;
        const matcher = exact ? matches : fuzzyMatches,
          matchNormalizer = makeNormalizer({
            collapseWhitespace: collapseWhitespace,
            trim: trim,
            normalizer: normalizer,
          });
        return Array.from(
          container.querySelectorAll('[' + attribute + ']')
        ).filter(node =>
          matcher(node.getAttribute(attribute), node, text, matchNormalizer)
        );
      }
      function queryByAttribute(attribute, container, text, options) {
        const els = queryAllByAttribute(attribute, container, text, options);
        if (els.length > 1)
          throw getMultipleElementsFoundError(
            'Found multiple elements by [' + attribute + '=' + text + ']',
            container
          );
        return els[0] || null;
      }
      function makeSingleQuery(allQuery, getMultipleError) {
        return function(container) {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key];
          const els = allQuery(container, ...args);
          if (els.length > 1) {
            const elementStrings = els
              .map(element => getElementError(null, element).message)
              .join('\n\n');
            throw getMultipleElementsFoundError(
              getMultipleError(container, ...args) +
                '\n\nHere are the matching elements:\n\n' +
                elementStrings,
              container
            );
          }
          return els[0] || null;
        };
      }
      function getSuggestionError(suggestion, container) {
        return getConfig().getElementError(
          'A better query is available, try this:\n' +
            suggestion.toString() +
            '\n',
          container
        );
      }
      function makeGetAllQuery(allQuery, getMissingError) {
        return function(container) {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          )
            args[_key2 - 1] = arguments[_key2];
          const els = allQuery(container, ...args);
          if (!els.length)
            throw getConfig().getElementError(
              getMissingError(container, ...args),
              container
            );
          return els;
        };
      }
      function makeFindQuery(getter) {
        return (container, text, options, waitForOptions) =>
          waitForWrapper(() => getter(container, text, options), {
            container: container,
            ...waitForOptions,
          });
      }
      const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) =>
          function(container) {
            for (
              var _len3 = arguments.length,
                args = new Array(_len3 > 1 ? _len3 - 1 : 0),
                _key3 = 1;
              _key3 < _len3;
              _key3++
            )
              args[_key3 - 1] = arguments[_key3];
            const element = query(container, ...args),
              [
                { suggest: suggest = getConfig().throwSuggestions } = {},
              ] = args.slice(-1);
            if (element && suggest) {
              const suggestion = getSuggestedQuery(element, variant);
              if (suggestion && !queryAllByName.endsWith(suggestion.queryName))
                throw getSuggestionError(suggestion.toString(), container);
            }
            return element;
          },
        wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) =>
          function(container) {
            for (
              var _len4 = arguments.length,
                args = new Array(_len4 > 1 ? _len4 - 1 : 0),
                _key4 = 1;
              _key4 < _len4;
              _key4++
            )
              args[_key4 - 1] = arguments[_key4];
            const els = query(container, ...args),
              [
                { suggest: suggest = getConfig().throwSuggestions } = {},
              ] = args.slice(-1);
            if (els.length && suggest) {
              const uniqueSuggestionMessages = [
                ...new Set(
                  els.map(element => {
                    var _getSuggestedQuery;
                    return null ==
                      (_getSuggestedQuery = getSuggestedQuery(element, variant))
                      ? void 0
                      : _getSuggestedQuery.toString();
                  })
                ),
              ];
              if (
                1 === uniqueSuggestionMessages.length &&
                !queryAllByName.endsWith(
                  getSuggestedQuery(els[0], variant).queryName
                )
              )
                throw getSuggestionError(
                  uniqueSuggestionMessages[0],
                  container
                );
            }
            return els;
          };
      function buildQueries(queryAllBy, getMultipleError, getMissingError) {
        const queryBy = wrapSingleQueryWithSuggestion(
            makeSingleQuery(queryAllBy, getMultipleError),
            queryAllBy.name,
            'query'
          ),
          getAllBy = makeGetAllQuery(queryAllBy, getMissingError),
          getBy = makeSingleQuery(getAllBy, getMultipleError),
          getByWithSuggestions = wrapSingleQueryWithSuggestion(
            getBy,
            queryAllBy.name,
            'get'
          );
        return [
          queryBy,
          wrapAllByQueryWithSuggestion(
            getAllBy,
            queryAllBy.name.replace('query', 'get'),
            'getAll'
          ),
          getByWithSuggestions,
          makeFindQuery(
            wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll')
          ),
          makeFindQuery(
            wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find')
          ),
        ];
      }
      var queryHelpers = Object.freeze({
        __proto__: null,
        getElementError: getElementError,
        wrapAllByQueryWithSuggestion: wrapAllByQueryWithSuggestion,
        wrapSingleQueryWithSuggestion: wrapSingleQueryWithSuggestion,
        getMultipleElementsFoundError: getMultipleElementsFoundError,
        queryAllByAttribute: queryAllByAttribute,
        queryByAttribute: queryByAttribute,
        makeSingleQuery: makeSingleQuery,
        makeGetAllQuery: makeGetAllQuery,
        makeFindQuery: makeFindQuery,
        buildQueries: buildQueries,
      });
      const queryAllLabelsByText = function(container, text, _temp) {
          let {
            exact: exact = !0,
            trim: trim,
            collapseWhitespace: collapseWhitespace,
            normalizer: normalizer,
          } = void 0 === _temp ? {} : _temp;
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace: collapseWhitespace,
              trim: trim,
              normalizer: normalizer,
            }),
            textToMatchByLabels = (function queryAllLabels(container) {
              return Array.from(container.querySelectorAll('label,input'))
                .map(node => ({
                  node: node,
                  textToMatch: getLabelContent(node),
                }))
                .filter(_ref => {
                  let { textToMatch: textToMatch } = _ref;
                  return null !== textToMatch;
                });
            })(container);
          return textToMatchByLabels
            .filter(_ref2 => {
              let { node: node, textToMatch: textToMatch } = _ref2;
              return matcher(textToMatch, node, text, matchNormalizer);
            })
            .map(_ref3 => {
              let { node: node } = _ref3;
              return node;
            });
        },
        queryAllByLabelText = function(container, text, _temp2) {
          let {
            selector: selector = '*',
            exact: exact = !0,
            collapseWhitespace: collapseWhitespace,
            trim: trim,
            normalizer: normalizer,
          } = void 0 === _temp2 ? {} : _temp2;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace: collapseWhitespace,
              trim: trim,
              normalizer: normalizer,
            }),
            matchingLabelledElements = Array.from(
              container.querySelectorAll('*')
            )
              .filter(
                element =>
                  getRealLabels(element).length ||
                  element.hasAttribute('aria-labelledby')
              )
              .reduce((labelledElements, labelledElement) => {
                const labelList = dom_esm_getLabels(
                  container,
                  labelledElement,
                  { selector: selector }
                );
                labelList
                  .filter(label => Boolean(label.formControl))
                  .forEach(label => {
                    matcher(
                      label.content,
                      label.formControl,
                      text,
                      matchNormalizer
                    ) &&
                      label.formControl &&
                      labelledElements.push(label.formControl);
                  });
                const labelsValue = labelList
                  .filter(label => Boolean(label.content))
                  .map(label => label.content);
                return (
                  matcher(
                    labelsValue.join(' '),
                    labelledElement,
                    text,
                    matchNormalizer
                  ) && labelledElements.push(labelledElement),
                  labelsValue.length > 1 &&
                    labelsValue.forEach((labelValue, index) => {
                      matcher(
                        labelValue,
                        labelledElement,
                        text,
                        matchNormalizer
                      ) && labelledElements.push(labelledElement);
                      const labelsFiltered = [...labelsValue];
                      labelsFiltered.splice(index, 1),
                        labelsFiltered.length > 1 &&
                          matcher(
                            labelsFiltered.join(' '),
                            labelledElement,
                            text,
                            matchNormalizer
                          ) &&
                          labelledElements.push(labelledElement);
                    }),
                  labelledElements
                );
              }, [])
              .concat(
                queryAllByAttribute('aria-label', container, text, {
                  exact: exact,
                  normalizer: matchNormalizer,
                })
              );
          return Array.from(new Set(matchingLabelledElements)).filter(element =>
            element.matches(selector)
          );
        },
        getAllByLabelText = function(container, text) {
          for (
            var _len = arguments.length,
              rest = new Array(_len > 2 ? _len - 2 : 0),
              _key = 2;
            _key < _len;
            _key++
          )
            rest[_key - 2] = arguments[_key];
          const els = queryAllByLabelText(container, text, ...rest);
          if (!els.length) {
            const labels = queryAllLabelsByText(container, text, ...rest);
            if (labels.length) {
              const tagNames = labels
                .map(label =>
                  (function getTagNameOfElementAssociatedWithLabelViaFor(
                    container,
                    label
                  ) {
                    const htmlFor = label.getAttribute('for');
                    if (!htmlFor) return null;
                    const element = container.querySelector(
                      '[id="' + htmlFor + '"]'
                    );
                    return element ? element.tagName.toLowerCase() : null;
                  })(container, label)
                )
                .filter(tagName => !!tagName);
              throw tagNames.length
                ? getConfig().getElementError(
                    tagNames
                      .map(
                        tagName =>
                          'Found a label with the text of: ' +
                          text +
                          ', however the element associated with this label (<' +
                          tagName +
                          ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                          tagName +
                          ' />, you can use aria-label or aria-labelledby instead.'
                      )
                      .join('\n\n'),
                    container
                  )
                : getConfig().getElementError(
                    'Found a label with the text of: ' +
                      text +
                      ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.',
                    container
                  );
            }
            throw getConfig().getElementError(
              'Unable to find a label with the text of: ' + text,
              container
            );
          }
          return els;
        };
      const getMultipleError$7 = (c, text) =>
          'Found multiple elements with the text of: ' + text,
        queryByLabelText = wrapSingleQueryWithSuggestion(
          makeSingleQuery(queryAllByLabelText, getMultipleError$7),
          queryAllByLabelText.name,
          'query'
        ),
        getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$7),
        findAllByLabelText = makeFindQuery(
          wrapAllByQueryWithSuggestion(
            getAllByLabelText,
            getAllByLabelText.name,
            'findAll'
          )
        ),
        findByLabelText = makeFindQuery(
          wrapSingleQueryWithSuggestion(
            getByLabelText,
            getAllByLabelText.name,
            'find'
          )
        ),
        getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(
          getAllByLabelText,
          getAllByLabelText.name,
          'getAll'
        ),
        getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(
          getByLabelText,
          getAllByLabelText.name,
          'get'
        ),
        queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByLabelText,
          queryAllByLabelText.name,
          'queryAll'
        ),
        queryAllByPlaceholderText = function() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            checkContainerType(args[0]),
            queryAllByAttribute('placeholder', ...args)
          );
        },
        queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByPlaceholderText,
          queryAllByPlaceholderText.name,
          'queryAll'
        ),
        [
          queryByPlaceholderText,
          getAllByPlaceholderText,
          getByPlaceholderText,
          findAllByPlaceholderText,
          findByPlaceholderText,
        ] = buildQueries(
          queryAllByPlaceholderText,
          (c, text) =>
            'Found multiple elements with the placeholder text of: ' + text,
          (c, text) =>
            'Unable to find an element with the placeholder text of: ' + text
        ),
        queryAllByText = function(container, text, _temp) {
          let {
            selector: selector = '*',
            exact: exact = !0,
            collapseWhitespace: collapseWhitespace,
            trim: trim,
            ignore: ignore = getConfig().defaultIgnore,
            normalizer: normalizer,
          } = void 0 === _temp ? {} : _temp;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace: collapseWhitespace,
              trim: trim,
              normalizer: normalizer,
            });
          let baseArray = [];
          return (
            'function' == typeof container.matches &&
              container.matches(selector) &&
              (baseArray = [container]),
            [...baseArray, ...Array.from(container.querySelectorAll(selector))]
              .filter(node => !ignore || !node.matches(ignore))
              .filter(node =>
                matcher(getNodeText(node), node, text, matchNormalizer)
              )
          );
        },
        queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByText,
          queryAllByText.name,
          'queryAll'
        ),
        [
          queryByText,
          getAllByText,
          getByText,
          findAllByText,
          findByText,
        ] = buildQueries(
          queryAllByText,
          (c, text) => 'Found multiple elements with the text: ' + text,
          function(c, text, options) {
            void 0 === options && (options = {});
            const {
                collapseWhitespace: collapseWhitespace,
                trim: trim,
                normalizer: normalizer,
                selector: selector,
              } = options,
              normalizedText = makeNormalizer({
                collapseWhitespace: collapseWhitespace,
                trim: trim,
                normalizer: normalizer,
              })(text.toString());
            return (
              'Unable to find an element with the text: ' +
              (normalizedText !== text.toString()
                ? normalizedText + " (normalized from '" + text + "')"
                : text) +
              ('*' !== (null != selector ? selector : '*')
                ? ", which matches selector '" + selector + "'"
                : '') +
              '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
            );
          }
        ),
        queryAllByDisplayValue = function(container, value, _temp) {
          let {
            exact: exact = !0,
            collapseWhitespace: collapseWhitespace,
            trim: trim,
            normalizer: normalizer,
          } = void 0 === _temp ? {} : _temp;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace: collapseWhitespace,
              trim: trim,
              normalizer: normalizer,
            });
          return Array.from(
            container.querySelectorAll('input,textarea,select')
          ).filter(node => {
            if ('SELECT' === node.tagName) {
              return Array.from(node.options)
                .filter(option => option.selected)
                .some(optionNode =>
                  matcher(
                    getNodeText(optionNode),
                    optionNode,
                    value,
                    matchNormalizer
                  )
                );
            }
            return matcher(node.value, node, value, matchNormalizer);
          });
        },
        queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByDisplayValue,
          queryAllByDisplayValue.name,
          'queryAll'
        ),
        [
          queryByDisplayValue,
          getAllByDisplayValue,
          getByDisplayValue,
          findAllByDisplayValue,
          findByDisplayValue,
        ] = buildQueries(
          queryAllByDisplayValue,
          (c, value) =>
            'Found multiple elements with the display value: ' + value + '.',
          (c, value) =>
            'Unable to find an element with the display value: ' + value + '.'
        ),
        VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i,
        queryAllByAltText = function(container, alt, options) {
          return (
            void 0 === options && (options = {}),
            checkContainerType(container),
            queryAllByAttribute('alt', container, alt, options).filter(node =>
              VALID_TAG_REGEXP.test(node.tagName)
            )
          );
        },
        queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByAltText,
          queryAllByAltText.name,
          'queryAll'
        ),
        [
          queryByAltText,
          getAllByAltText,
          getByAltText,
          findAllByAltText,
          findByAltText,
        ] = buildQueries(
          queryAllByAltText,
          (c, alt) => 'Found multiple elements with the alt text: ' + alt,
          (c, alt) => 'Unable to find an element with the alt text: ' + alt
        ),
        queryAllByTitle = function(container, text, _temp) {
          let {
            exact: exact = !0,
            collapseWhitespace: collapseWhitespace,
            trim: trim,
            normalizer: normalizer,
          } = void 0 === _temp ? {} : _temp;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace: collapseWhitespace,
              trim: trim,
              normalizer: normalizer,
            });
          return Array.from(
            container.querySelectorAll('[title], svg > title')
          ).filter(
            node =>
              matcher(
                node.getAttribute('title'),
                node,
                text,
                matchNormalizer
              ) ||
              ((node => {
                var _node$parentElement;
                return (
                  'title' === node.tagName.toLowerCase() &&
                  'svg' ===
                    (null == (_node$parentElement = node.parentElement)
                      ? void 0
                      : _node$parentElement.tagName.toLowerCase())
                );
              })(node) &&
                matcher(getNodeText(node), node, text, matchNormalizer))
          );
        },
        queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByTitle,
          queryAllByTitle.name,
          'queryAll'
        ),
        [
          queryByTitle,
          getAllByTitle,
          getByTitle,
          findAllByTitle,
          findByTitle,
        ] = buildQueries(
          queryAllByTitle,
          (c, title) =>
            'Found multiple elements with the title: ' + title + '.',
          (c, title) =>
            'Unable to find an element with the title: ' + title + '.'
        ),
        queryAllByRole = function(container, role, _temp) {
          let {
            hidden: hidden = getConfig().defaultHidden,
            name: name,
            description: description,
            queryFallbacks: queryFallbacks = !1,
            selected: selected,
            busy: busy,
            checked: checked,
            pressed: pressed,
            current: current,
            level: level,
            expanded: expanded,
            value: {
              now: valueNow,
              min: valueMin,
              max: valueMax,
              text: valueText,
            } = {},
          } = void 0 === _temp ? {} : _temp;
          var _allRoles$get,
            _allRoles$get2,
            _allRoles$get3,
            _allRoles$get4,
            _allRoles$get5,
            _allRoles$get6,
            _allRoles$get7,
            _allRoles$get8,
            _allRoles$get9,
            _allRoles$get10;
          if (
            (checkContainerType(container), void 0 !== selected) &&
            void 0 ===
              (null == (_allRoles$get = lib.uJ.get(role))
                ? void 0
                : _allRoles$get.props['aria-selected'])
          )
            throw new Error(
              '"aria-selected" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== busy &&
            void 0 ===
              (null == (_allRoles$get2 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get2.props['aria-busy'])
          )
            throw new Error(
              '"aria-busy" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== checked &&
            void 0 ===
              (null == (_allRoles$get3 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get3.props['aria-checked'])
          )
            throw new Error(
              '"aria-checked" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== pressed &&
            void 0 ===
              (null == (_allRoles$get4 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get4.props['aria-pressed'])
          )
            throw new Error(
              '"aria-pressed" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== current &&
            void 0 ===
              (null == (_allRoles$get5 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get5.props['aria-current'])
          )
            throw new Error(
              '"aria-current" is not supported on role "' + role + '".'
            );
          if (void 0 !== level && 'heading' !== role)
            throw new Error(
              'Role "' + role + '" cannot have "level" property.'
            );
          if (
            void 0 !== valueNow &&
            void 0 ===
              (null == (_allRoles$get6 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get6.props['aria-valuenow'])
          )
            throw new Error(
              '"aria-valuenow" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== valueMax &&
            void 0 ===
              (null == (_allRoles$get7 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get7.props['aria-valuemax'])
          )
            throw new Error(
              '"aria-valuemax" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== valueMin &&
            void 0 ===
              (null == (_allRoles$get8 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get8.props['aria-valuemin'])
          )
            throw new Error(
              '"aria-valuemin" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== valueText &&
            void 0 ===
              (null == (_allRoles$get9 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get9.props['aria-valuetext'])
          )
            throw new Error(
              '"aria-valuetext" is not supported on role "' + role + '".'
            );
          if (
            void 0 !== expanded &&
            void 0 ===
              (null == (_allRoles$get10 = lib.uJ.get(role))
                ? void 0
                : _allRoles$get10.props['aria-expanded'])
          )
            throw new Error(
              '"aria-expanded" is not supported on role "' + role + '".'
            );
          const subtreeIsInaccessibleCache = new WeakMap();
          function cachedIsSubtreeInaccessible(element) {
            return (
              subtreeIsInaccessibleCache.has(element) ||
                subtreeIsInaccessibleCache.set(
                  element,
                  isSubtreeInaccessible(element)
                ),
              subtreeIsInaccessibleCache.get(element)
            );
          }
          return Array.from(
            container.querySelectorAll(
              (function makeRoleSelector(role) {
                var _roleElements$get;
                const explicitRoleSelector = '*[role~="' + role + '"]',
                  roleRelations =
                    null != (_roleElements$get = lib.UN.get(role))
                      ? _roleElements$get
                      : new Set(),
                  implicitRoleSelectors = new Set(
                    Array.from(roleRelations).map(_ref => {
                      let { name: name } = _ref;
                      return name;
                    })
                  );
                return [explicitRoleSelector]
                  .concat(Array.from(implicitRoleSelectors))
                  .join(',');
              })(role)
            )
          )
            .filter(node => {
              if (node.hasAttribute('role')) {
                const roleValue = node.getAttribute('role');
                if (queryFallbacks)
                  return roleValue
                    .split(' ')
                    .filter(Boolean)
                    .some(roleAttributeToken => roleAttributeToken === role);
                const [firstRoleAttributeToken] = roleValue.split(' ');
                return firstRoleAttributeToken === role;
              }
              return getImplicitAriaRoles(node).some(
                implicitRole => implicitRole === role
              );
            })
            .filter(element => {
              if (void 0 !== selected)
                return (
                  selected ===
                  (function computeAriaSelected(element) {
                    return 'OPTION' === element.tagName
                      ? element.selected
                      : checkBooleanAttribute(element, 'aria-selected');
                  })(element)
                );
              if (void 0 !== busy)
                return (
                  busy ===
                  (function computeAriaBusy(element) {
                    return 'true' === element.getAttribute('aria-busy');
                  })(element)
                );
              if (void 0 !== checked)
                return (
                  checked ===
                  (function computeAriaChecked(element) {
                    if (!('indeterminate' in element) || !element.indeterminate)
                      return 'checked' in element
                        ? element.checked
                        : checkBooleanAttribute(element, 'aria-checked');
                  })(element)
                );
              if (void 0 !== pressed)
                return (
                  pressed ===
                  (function computeAriaPressed(element) {
                    return checkBooleanAttribute(element, 'aria-pressed');
                  })(element)
                );
              if (void 0 !== current)
                return (
                  current ===
                  (function computeAriaCurrent(element) {
                    var _ref9, _checkBooleanAttribut;
                    return (
                      null !=
                        (_ref9 =
                          null !=
                          (_checkBooleanAttribut = checkBooleanAttribute(
                            element,
                            'aria-current'
                          ))
                            ? _checkBooleanAttribut
                            : element.getAttribute('aria-current')) && _ref9
                    );
                  })(element)
                );
              if (void 0 !== expanded)
                return (
                  expanded ===
                  (function computeAriaExpanded(element) {
                    return checkBooleanAttribute(element, 'aria-expanded');
                  })(element)
                );
              if (void 0 !== level)
                return (
                  level ===
                  (function computeHeadingLevel(element) {
                    return (
                      (element.getAttribute('aria-level') &&
                        Number(element.getAttribute('aria-level'))) ||
                      { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[
                        element.tagName
                      ]
                    );
                  })(element)
                );
              if (
                void 0 !== valueNow ||
                void 0 !== valueMax ||
                void 0 !== valueMin ||
                void 0 !== valueText
              ) {
                let valueMatches = !0;
                var _computeAriaValueText;
                if (
                  (void 0 !== valueNow &&
                    valueMatches &&
                    (valueMatches =
                      valueNow ===
                      (function computeAriaValueNow(element) {
                        const valueNow = element.getAttribute('aria-valuenow');
                        return null === valueNow ? void 0 : +valueNow;
                      })(element)),
                  void 0 !== valueMax &&
                    valueMatches &&
                    (valueMatches =
                      valueMax ===
                      (function computeAriaValueMax(element) {
                        const valueMax = element.getAttribute('aria-valuemax');
                        return null === valueMax ? void 0 : +valueMax;
                      })(element)),
                  void 0 !== valueMin &&
                    valueMatches &&
                    (valueMatches =
                      valueMin ===
                      (function computeAriaValueMin(element) {
                        const valueMin = element.getAttribute('aria-valuemin');
                        return null === valueMin ? void 0 : +valueMin;
                      })(element)),
                  void 0 !== valueText)
                )
                  valueMatches &&
                    (valueMatches = matches(
                      null !=
                      (_computeAriaValueText = (function computeAriaValueText(
                        element
                      ) {
                        const valueText = element.getAttribute(
                          'aria-valuetext'
                        );
                        return null === valueText ? void 0 : valueText;
                      })(element))
                        ? _computeAriaValueText
                        : null,
                      element,
                      valueText,
                      text => text
                    ));
                return valueMatches;
              }
              return !0;
            })
            .filter(
              element =>
                void 0 === name ||
                matches(
                  computeAccessibleName(element, {
                    computedStyleSupportsPseudoElements: getConfig()
                      .computedStyleSupportsPseudoElements,
                  }),
                  element,
                  name,
                  text => text
                )
            )
            .filter(
              element =>
                void 0 === description ||
                matches(
                  computeAccessibleDescription(element, {
                    computedStyleSupportsPseudoElements: getConfig()
                      .computedStyleSupportsPseudoElements,
                  }),
                  element,
                  description,
                  text => text
                )
            )
            .filter(
              element =>
                !1 !== hidden ||
                !1 ===
                  isInaccessible(element, {
                    isSubtreeInaccessible: cachedIsSubtreeInaccessible,
                  })
            );
        };
      const getNameHint = name => {
          let nameHint = '';
          return (
            (nameHint =
              void 0 === name
                ? ''
                : 'string' == typeof name
                  ? ' and name "' + name + '"'
                  : ' and name `' + name + '`'),
            nameHint
          );
        },
        queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByRole,
          queryAllByRole.name,
          'queryAll'
        ),
        [
          queryByRole,
          getAllByRole,
          getByRole,
          findAllByRole,
          findByRole,
        ] = buildQueries(
          queryAllByRole,
          function(c, role, _temp2) {
            let { name: name } = void 0 === _temp2 ? {} : _temp2;
            return (
              'Found multiple elements with the role "' +
              role +
              '"' +
              getNameHint(name)
            );
          },
          function(container, role, _temp3) {
            let {
              hidden: hidden = getConfig().defaultHidden,
              name: name,
              description: description,
            } = void 0 === _temp3 ? {} : _temp3;
            if (getConfig()._disableExpensiveErrorDiagnostics)
              return 'Unable to find role="' + role + '"' + getNameHint(name);
            let roleMessage,
              roles = '';
            Array.from(container.children).forEach(childElement => {
              roles += prettyRoles(childElement, {
                hidden: hidden,
                includeDescription: void 0 !== description,
              });
            }),
              (roleMessage =
                0 === roles.length
                  ? !1 === hidden
                    ? 'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole'
                    : 'There are no available roles.'
                  : (
                      '\nHere are the ' +
                      (!1 === hidden ? 'accessible' : 'available') +
                      ' roles:\n\n  ' +
                      roles
                        .replace(/\n/g, '\n  ')
                        .replace(/\n\s\s\n/g, '\n\n') +
                      '\n'
                    ).trim());
            let nameHint = '';
            nameHint =
              void 0 === name
                ? ''
                : 'string' == typeof name
                  ? ' and name "' + name + '"'
                  : ' and name `' + name + '`';
            let descriptionHint = '';
            return (
              (descriptionHint =
                void 0 === description
                  ? ''
                  : 'string' == typeof description
                    ? ' and description "' + description + '"'
                    : ' and description `' + description + '`'),
              (
                '\nUnable to find an ' +
                (!1 === hidden ? 'accessible ' : '') +
                'element with the role "' +
                role +
                '"' +
                nameHint +
                descriptionHint +
                '\n\n' +
                roleMessage
              ).trim()
            );
          }
        ),
        getTestIdAttribute = () => getConfig().testIdAttribute,
        queryAllByTestId = function() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            checkContainerType(args[0]),
            queryAllByAttribute(getTestIdAttribute(), ...args)
          );
        },
        queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByTestId,
          queryAllByTestId.name,
          'queryAll'
        ),
        [
          queryByTestId,
          getAllByTestId,
          getByTestId,
          findAllByTestId,
          findByTestId,
        ] = buildQueries(
          queryAllByTestId,
          (c, id) =>
            'Found multiple elements by: [' +
            getTestIdAttribute() +
            '="' +
            id +
            '"]',
          (c, id) =>
            'Unable to find an element by: [' +
            getTestIdAttribute() +
            '="' +
            id +
            '"]'
        );
      var queries = Object.freeze({
        __proto__: null,
        queryAllByLabelText: queryAllByLabelTextWithSuggestions,
        queryByLabelText: queryByLabelText,
        getAllByLabelText: getAllByLabelTextWithSuggestions,
        getByLabelText: getByLabelTextWithSuggestions,
        findAllByLabelText: findAllByLabelText,
        findByLabelText: findByLabelText,
        queryByPlaceholderText: queryByPlaceholderText,
        queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
        getByPlaceholderText: getByPlaceholderText,
        getAllByPlaceholderText: getAllByPlaceholderText,
        findAllByPlaceholderText: findAllByPlaceholderText,
        findByPlaceholderText: findByPlaceholderText,
        queryByText: queryByText,
        queryAllByText: queryAllByTextWithSuggestions,
        getByText: getByText,
        getAllByText: getAllByText,
        findAllByText: findAllByText,
        findByText: findByText,
        queryByDisplayValue: queryByDisplayValue,
        queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
        getByDisplayValue: getByDisplayValue,
        getAllByDisplayValue: getAllByDisplayValue,
        findAllByDisplayValue: findAllByDisplayValue,
        findByDisplayValue: findByDisplayValue,
        queryByAltText: queryByAltText,
        queryAllByAltText: queryAllByAltTextWithSuggestions,
        getByAltText: getByAltText,
        getAllByAltText: getAllByAltText,
        findAllByAltText: findAllByAltText,
        findByAltText: findByAltText,
        queryByTitle: queryByTitle,
        queryAllByTitle: queryAllByTitleWithSuggestions,
        getByTitle: getByTitle,
        getAllByTitle: getAllByTitle,
        findAllByTitle: findAllByTitle,
        findByTitle: findByTitle,
        queryByRole: queryByRole,
        queryAllByRole: queryAllByRoleWithSuggestions,
        getAllByRole: getAllByRole,
        getByRole: getByRole,
        findAllByRole: findAllByRole,
        findByRole: findByRole,
        queryByTestId: queryByTestId,
        queryAllByTestId: queryAllByTestIdWithSuggestions,
        getByTestId: getByTestId,
        getAllByTestId: getAllByTestId,
        findAllByTestId: findAllByTestId,
        findByTestId: findByTestId,
      });
      function getQueriesForElement(element, queries$1, initialValue) {
        return (
          void 0 === queries$1 && (queries$1 = queries),
          void 0 === initialValue && (initialValue = {}),
          Object.keys(queries$1).reduce((helpers, key) => {
            const fn = queries$1[key];
            return (helpers[key] = fn.bind(null, element)), helpers;
          }, initialValue)
        );
      }
      const isRemoved = result =>
        !result || (Array.isArray(result) && !result.length);
      function initialCheck(elements) {
        if (isRemoved(elements))
          throw new Error(
            'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.'
          );
      }
      async function waitForElementToBeRemoved(callback, options) {
        const timeoutError = new Error(
          'Timed out in waitForElementToBeRemoved.'
        );
        if ('function' != typeof callback) {
          initialCheck(callback);
          const getRemainingElements = (Array.isArray(callback)
            ? callback
            : [callback]
          ).map(element => {
            let parent = element.parentElement;
            if (null === parent) return () => null;
            for (; parent.parentElement; ) parent = parent.parentElement;
            return () => (parent.contains(element) ? element : null);
          });
          callback = () => getRemainingElements.map(c => c()).filter(Boolean);
        }
        return (
          initialCheck(callback()),
          waitForWrapper(() => {
            let result;
            try {
              result = callback();
            } catch (error) {
              if ('TestingLibraryElementError' === error.name) return;
              throw error;
            }
            if (!isRemoved(result)) throw timeoutError;
          }, options)
        );
      }
      const eventMap = {
          copy: {
            EventType: 'ClipboardEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          cut: {
            EventType: 'ClipboardEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          paste: {
            EventType: 'ClipboardEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          compositionEnd: {
            EventType: 'CompositionEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          compositionStart: {
            EventType: 'CompositionEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          compositionUpdate: {
            EventType: 'CompositionEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          keyDown: {
            EventType: 'KeyboardEvent',
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0,
            },
          },
          keyPress: {
            EventType: 'KeyboardEvent',
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0,
            },
          },
          keyUp: {
            EventType: 'KeyboardEvent',
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0,
            },
          },
          focus: {
            EventType: 'FocusEvent',
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          blur: {
            EventType: 'FocusEvent',
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          focusIn: {
            EventType: 'FocusEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          focusOut: {
            EventType: 'FocusEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          change: {
            EventType: 'Event',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          input: {
            EventType: 'InputEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          invalid: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !0 },
          },
          submit: {
            EventType: 'Event',
            defaultInit: { bubbles: !0, cancelable: !0 },
          },
          reset: {
            EventType: 'Event',
            defaultInit: { bubbles: !0, cancelable: !0 },
          },
          click: {
            EventType: 'MouseEvent',
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              button: 0,
              composed: !0,
            },
          },
          contextMenu: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dblClick: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          drag: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dragEnd: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          dragEnter: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dragExit: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          dragLeave: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          dragOver: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dragStart: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          drop: {
            EventType: 'DragEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseDown: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseEnter: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          mouseLeave: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          mouseMove: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseOut: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseOver: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseUp: {
            EventType: 'MouseEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          select: {
            EventType: 'Event',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          touchCancel: {
            EventType: 'TouchEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          touchEnd: {
            EventType: 'TouchEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          touchMove: {
            EventType: 'TouchEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          touchStart: {
            EventType: 'TouchEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          resize: {
            EventType: 'UIEvent',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          scroll: {
            EventType: 'UIEvent',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          wheel: {
            EventType: 'WheelEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          abort: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          canPlay: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          canPlayThrough: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          durationChange: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          emptied: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          encrypted: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          ended: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          loadedData: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          loadedMetadata: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          loadStart: {
            EventType: 'ProgressEvent',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          pause: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          play: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          playing: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          progress: {
            EventType: 'ProgressEvent',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          rateChange: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          seeked: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          seeking: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          stalled: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          suspend: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          timeUpdate: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          volumeChange: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          waiting: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          load: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          error: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          animationStart: {
            EventType: 'AnimationEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          animationEnd: {
            EventType: 'AnimationEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          animationIteration: {
            EventType: 'AnimationEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          transitionCancel: {
            EventType: 'TransitionEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          transitionEnd: {
            EventType: 'TransitionEvent',
            defaultInit: { bubbles: !0, cancelable: !0 },
          },
          transitionRun: {
            EventType: 'TransitionEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          transitionStart: {
            EventType: 'TransitionEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          pointerOver: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerEnter: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          pointerDown: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerMove: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerUp: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerCancel: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          pointerOut: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerLeave: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          gotPointerCapture: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          lostPointerCapture: {
            EventType: 'PointerEvent',
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          popState: {
            EventType: 'PopStateEvent',
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          offline: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          online: {
            EventType: 'Event',
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
        },
        eventAliasMap = { doubleClick: 'dblClick' };
      function fireEvent(element, event) {
        return getConfig().eventWrapper(() => {
          if (!event)
            throw new Error(
              'Unable to fire an event - please provide an event object.'
            );
          if (!element)
            throw new Error(
              'Unable to fire a "' +
                event.type +
                '" event - please provide a DOM element.'
            );
          return element.dispatchEvent(event);
        });
      }
      function createEvent(eventName, node, init, _temp) {
        let { EventType: EventType = 'Event', defaultInit: defaultInit = {} } =
          void 0 === _temp ? {} : _temp;
        if (!node)
          throw new Error(
            'Unable to fire a "' +
              eventName +
              '" event - please provide a DOM element.'
          );
        const eventInit = { ...defaultInit, ...init },
          {
            target: { value: value, files: files, ...targetProperties } = {},
          } = eventInit;
        void 0 !== value &&
          (function setNativeValue(element, value) {
            const { set: valueSetter } =
                Object.getOwnPropertyDescriptor(element, 'value') || {},
              prototype = Object.getPrototypeOf(element),
              { set: prototypeValueSetter } =
                Object.getOwnPropertyDescriptor(prototype, 'value') || {};
            if (prototypeValueSetter && valueSetter !== prototypeValueSetter)
              prototypeValueSetter.call(element, value);
            else {
              if (!valueSetter)
                throw new Error(
                  'The given element does not have a value setter'
                );
              valueSetter.call(element, value);
            }
          })(node, value),
          void 0 !== files &&
            Object.defineProperty(node, 'files', {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: files,
            }),
          Object.assign(node, targetProperties);
        const window = getWindowFromNode(node),
          EventConstructor = window[EventType] || window.Event;
        let event;
        if ('function' == typeof EventConstructor)
          event = new EventConstructor(eventName, eventInit);
        else {
          event = window.document.createEvent(EventType);
          const {
            bubbles: bubbles,
            cancelable: cancelable,
            detail: detail,
            ...otherInit
          } = eventInit;
          event.initEvent(eventName, bubbles, cancelable, detail),
            Object.keys(otherInit).forEach(eventKey => {
              event[eventKey] = otherInit[eventKey];
            });
        }
        return (
          ['dataTransfer', 'clipboardData'].forEach(dataTransferKey => {
            const dataTransferValue = eventInit[dataTransferKey];
            'object' == typeof dataTransferValue &&
              ('function' == typeof window.DataTransfer
                ? Object.defineProperty(event, dataTransferKey, {
                    value: Object.getOwnPropertyNames(dataTransferValue).reduce(
                      (acc, propName) => (
                        Object.defineProperty(acc, propName, {
                          value: dataTransferValue[propName],
                        }),
                        acc
                      ),
                      new window.DataTransfer()
                    ),
                  })
                : Object.defineProperty(event, dataTransferKey, {
                    value: dataTransferValue,
                  }));
          }),
          event
        );
      }
      function getPlaygroundUrl(markup) {
        return (
          'https://testing-playground.com/#markup=' +
          (function encode(value) {
            return lz_string_default().compressToEncodedURIComponent(
              (function unindent(string) {
                return string.replace(/[ \t]*[\n][ \t]*/g, '\n');
              })(value)
            );
          })(markup)
        );
      }
      Object.keys(eventMap).forEach(key => {
        const { EventType: EventType, defaultInit: defaultInit } = eventMap[
            key
          ],
          eventName = key.toLowerCase();
        (createEvent[key] = (node, init) =>
          createEvent(eventName, node, init, {
            EventType: EventType,
            defaultInit: defaultInit,
          })),
          (fireEvent[key] = (node, init) =>
            fireEvent(node, createEvent[key](node, init)));
      }),
        Object.keys(eventAliasMap).forEach(aliasKey => {
          const key = eventAliasMap[aliasKey];
          fireEvent[aliasKey] = function() {
            return fireEvent[key](...arguments);
          };
        });
      const initialValue = {
          debug: (element, maxLength, options) =>
            Array.isArray(element)
              ? element.forEach(el => logDOM(el, maxLength, options))
              : logDOM(element, maxLength, options),
          logTestingPlaygroundURL: function(element) {
            if (
              (void 0 === element && (element = getDocument().body),
              !element || !('innerHTML' in element))
            )
              return void console.log(
                "The element you're providing isn't a valid DOM element."
              );
            if (!element.innerHTML)
              return void console.log(
                "The provided element doesn't have any children."
              );
            const playgroundUrl = getPlaygroundUrl(element.innerHTML);
            return (
              console.log('Open this URL in your browser\n\n' + playgroundUrl),
              playgroundUrl
            );
          },
        },
        screen =
          'undefined' != typeof document && document.body
            ? getQueriesForElement(document.body, queries, initialValue)
            : Object.keys(queries).reduce(
                (helpers, key) => (
                  (helpers[key] = () => {
                    throw new TypeError(
                      'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error'
                    );
                  }),
                  helpers
                ),
                initialValue
              );
    },
    './node_modules/@testing-library/dom/dist/event-map.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      exports.Hx = void 0;
      exports.Hx = {
        copy: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        cut: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        paste: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionEnd: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionStart: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionUpdate: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        keyDown: {
          EventType: 'KeyboardEvent',
          defaultInit: {
            bubbles: !0,
            cancelable: !0,
            charCode: 0,
            composed: !0,
          },
        },
        keyPress: {
          EventType: 'KeyboardEvent',
          defaultInit: {
            bubbles: !0,
            cancelable: !0,
            charCode: 0,
            composed: !0,
          },
        },
        keyUp: {
          EventType: 'KeyboardEvent',
          defaultInit: {
            bubbles: !0,
            cancelable: !0,
            charCode: 0,
            composed: !0,
          },
        },
        focus: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        blur: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        focusIn: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        focusOut: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        change: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        input: {
          EventType: 'InputEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        invalid: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !0 },
        },
        submit: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        reset: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        click: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
        },
        contextMenu: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dblClick: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        drag: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragEnd: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragEnter: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragExit: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragLeave: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragOver: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragStart: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        drop: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseDown: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseEnter: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        mouseLeave: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        mouseMove: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseOut: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseOver: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseUp: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        select: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        touchCancel: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        touchEnd: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        touchMove: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        touchStart: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        resize: {
          EventType: 'UIEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        scroll: {
          EventType: 'UIEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        wheel: {
          EventType: 'WheelEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        abort: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        canPlay: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        canPlayThrough: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        durationChange: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        emptied: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        encrypted: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        ended: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        loadedData: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        loadedMetadata: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        loadStart: {
          EventType: 'ProgressEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        pause: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        play: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        playing: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        progress: {
          EventType: 'ProgressEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        rateChange: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        seeked: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        seeking: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        stalled: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        suspend: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        timeUpdate: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        volumeChange: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        waiting: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        load: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        error: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        animationStart: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        animationEnd: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        animationIteration: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionCancel: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionEnd: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        transitionRun: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionStart: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        pointerOver: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerEnter: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        pointerDown: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerMove: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerUp: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerCancel: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        pointerOut: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerLeave: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        gotPointerCapture: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        lostPointerCapture: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        popState: {
          EventType: 'PopStateEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        offline: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        online: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
      };
    },
    './node_modules/@testing-library/dom/dist/helpers.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      exports.getWindowFromNode = function getWindowFromNode(node) {
        if (node.defaultView) return node.defaultView;
        if (node.ownerDocument && node.ownerDocument.defaultView)
          return node.ownerDocument.defaultView;
        if (node.window) return node.window;
        throw node.ownerDocument && null === node.ownerDocument.defaultView
          ? new Error(
              'It looks like the window object is not available for the provided node.'
            )
          : node.then instanceof Function
            ? new Error(
                'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
              )
            : Array.isArray(node)
              ? new Error(
                  'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
                )
              : 'function' == typeof node.debug &&
                'function' == typeof node.logTestingPlaygroundURL
                ? new Error(
                    'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
                  )
                : new Error(
                    `The given node is not an Element, the node type is: ${typeof node}.`
                  );
      };
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/ariaPropsMap.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _iterationDecorator = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js'
        )
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var properties = [
          ['aria-activedescendant', { type: 'id' }],
          ['aria-atomic', { type: 'boolean' }],
          [
            'aria-autocomplete',
            { type: 'token', values: ['inline', 'list', 'both', 'none'] },
          ],
          ['aria-busy', { type: 'boolean' }],
          ['aria-checked', { type: 'tristate' }],
          ['aria-colcount', { type: 'integer' }],
          ['aria-colindex', { type: 'integer' }],
          ['aria-colspan', { type: 'integer' }],
          ['aria-controls', { type: 'idlist' }],
          [
            'aria-current',
            {
              type: 'token',
              values: ['page', 'step', 'location', 'date', 'time', !0, !1],
            },
          ],
          ['aria-describedby', { type: 'idlist' }],
          ['aria-details', { type: 'id' }],
          ['aria-disabled', { type: 'boolean' }],
          [
            'aria-dropeffect',
            {
              type: 'tokenlist',
              values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
            },
          ],
          ['aria-errormessage', { type: 'id' }],
          ['aria-expanded', { type: 'boolean', allowundefined: !0 }],
          ['aria-flowto', { type: 'idlist' }],
          ['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-haspopup',
            {
              type: 'token',
              values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
            },
          ],
          ['aria-hidden', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-invalid',
            { type: 'token', values: ['grammar', !1, 'spelling', !0] },
          ],
          ['aria-keyshortcuts', { type: 'string' }],
          ['aria-label', { type: 'string' }],
          ['aria-labelledby', { type: 'idlist' }],
          ['aria-level', { type: 'integer' }],
          [
            'aria-live',
            { type: 'token', values: ['assertive', 'off', 'polite'] },
          ],
          ['aria-modal', { type: 'boolean' }],
          ['aria-multiline', { type: 'boolean' }],
          ['aria-multiselectable', { type: 'boolean' }],
          [
            'aria-orientation',
            { type: 'token', values: ['vertical', 'undefined', 'horizontal'] },
          ],
          ['aria-owns', { type: 'idlist' }],
          ['aria-placeholder', { type: 'string' }],
          ['aria-posinset', { type: 'integer' }],
          ['aria-pressed', { type: 'tristate' }],
          ['aria-readonly', { type: 'boolean' }],
          [
            'aria-relevant',
            {
              type: 'tokenlist',
              values: ['additions', 'all', 'removals', 'text'],
            },
          ],
          ['aria-required', { type: 'boolean' }],
          ['aria-roledescription', { type: 'string' }],
          ['aria-rowcount', { type: 'integer' }],
          ['aria-rowindex', { type: 'integer' }],
          ['aria-rowspan', { type: 'integer' }],
          ['aria-selected', { type: 'boolean', allowundefined: !0 }],
          ['aria-setsize', { type: 'integer' }],
          [
            'aria-sort',
            {
              type: 'token',
              values: ['ascending', 'descending', 'none', 'other'],
            },
          ],
          ['aria-valuemax', { type: 'number' }],
          ['aria-valuemin', { type: 'number' }],
          ['aria-valuenow', { type: 'number' }],
          ['aria-valuetext', { type: 'string' }],
        ],
        ariaPropsMap = {
          entries: function entries() {
            return properties;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                  o['@@iterator'];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && 'number' == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(properties);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, key, properties);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = properties.find(function(tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!ariaPropsMap.get(key);
          },
          keys: function keys() {
            return properties.map(function(_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return properties.map(function(_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          ariaPropsMap,
          ariaPropsMap.entries()
        );
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/domMap.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _iterationDecorator = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js'
        )
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var dom = [
          ['a', { reserved: !1 }],
          ['abbr', { reserved: !1 }],
          ['acronym', { reserved: !1 }],
          ['address', { reserved: !1 }],
          ['applet', { reserved: !1 }],
          ['area', { reserved: !1 }],
          ['article', { reserved: !1 }],
          ['aside', { reserved: !1 }],
          ['audio', { reserved: !1 }],
          ['b', { reserved: !1 }],
          ['base', { reserved: !0 }],
          ['bdi', { reserved: !1 }],
          ['bdo', { reserved: !1 }],
          ['big', { reserved: !1 }],
          ['blink', { reserved: !1 }],
          ['blockquote', { reserved: !1 }],
          ['body', { reserved: !1 }],
          ['br', { reserved: !1 }],
          ['button', { reserved: !1 }],
          ['canvas', { reserved: !1 }],
          ['caption', { reserved: !1 }],
          ['center', { reserved: !1 }],
          ['cite', { reserved: !1 }],
          ['code', { reserved: !1 }],
          ['col', { reserved: !0 }],
          ['colgroup', { reserved: !0 }],
          ['content', { reserved: !1 }],
          ['data', { reserved: !1 }],
          ['datalist', { reserved: !1 }],
          ['dd', { reserved: !1 }],
          ['del', { reserved: !1 }],
          ['details', { reserved: !1 }],
          ['dfn', { reserved: !1 }],
          ['dialog', { reserved: !1 }],
          ['dir', { reserved: !1 }],
          ['div', { reserved: !1 }],
          ['dl', { reserved: !1 }],
          ['dt', { reserved: !1 }],
          ['em', { reserved: !1 }],
          ['embed', { reserved: !1 }],
          ['fieldset', { reserved: !1 }],
          ['figcaption', { reserved: !1 }],
          ['figure', { reserved: !1 }],
          ['font', { reserved: !1 }],
          ['footer', { reserved: !1 }],
          ['form', { reserved: !1 }],
          ['frame', { reserved: !1 }],
          ['frameset', { reserved: !1 }],
          ['h1', { reserved: !1 }],
          ['h2', { reserved: !1 }],
          ['h3', { reserved: !1 }],
          ['h4', { reserved: !1 }],
          ['h5', { reserved: !1 }],
          ['h6', { reserved: !1 }],
          ['head', { reserved: !0 }],
          ['header', { reserved: !1 }],
          ['hgroup', { reserved: !1 }],
          ['hr', { reserved: !1 }],
          ['html', { reserved: !0 }],
          ['i', { reserved: !1 }],
          ['iframe', { reserved: !1 }],
          ['img', { reserved: !1 }],
          ['input', { reserved: !1 }],
          ['ins', { reserved: !1 }],
          ['kbd', { reserved: !1 }],
          ['keygen', { reserved: !1 }],
          ['label', { reserved: !1 }],
          ['legend', { reserved: !1 }],
          ['li', { reserved: !1 }],
          ['link', { reserved: !0 }],
          ['main', { reserved: !1 }],
          ['map', { reserved: !1 }],
          ['mark', { reserved: !1 }],
          ['marquee', { reserved: !1 }],
          ['menu', { reserved: !1 }],
          ['menuitem', { reserved: !1 }],
          ['meta', { reserved: !0 }],
          ['meter', { reserved: !1 }],
          ['nav', { reserved: !1 }],
          ['noembed', { reserved: !0 }],
          ['noscript', { reserved: !0 }],
          ['object', { reserved: !1 }],
          ['ol', { reserved: !1 }],
          ['optgroup', { reserved: !1 }],
          ['option', { reserved: !1 }],
          ['output', { reserved: !1 }],
          ['p', { reserved: !1 }],
          ['param', { reserved: !0 }],
          ['picture', { reserved: !0 }],
          ['pre', { reserved: !1 }],
          ['progress', { reserved: !1 }],
          ['q', { reserved: !1 }],
          ['rp', { reserved: !1 }],
          ['rt', { reserved: !1 }],
          ['rtc', { reserved: !1 }],
          ['ruby', { reserved: !1 }],
          ['s', { reserved: !1 }],
          ['samp', { reserved: !1 }],
          ['script', { reserved: !0 }],
          ['section', { reserved: !1 }],
          ['select', { reserved: !1 }],
          ['small', { reserved: !1 }],
          ['source', { reserved: !0 }],
          ['spacer', { reserved: !1 }],
          ['span', { reserved: !1 }],
          ['strike', { reserved: !1 }],
          ['strong', { reserved: !1 }],
          ['style', { reserved: !0 }],
          ['sub', { reserved: !1 }],
          ['summary', { reserved: !1 }],
          ['sup', { reserved: !1 }],
          ['table', { reserved: !1 }],
          ['tbody', { reserved: !1 }],
          ['td', { reserved: !1 }],
          ['textarea', { reserved: !1 }],
          ['tfoot', { reserved: !1 }],
          ['th', { reserved: !1 }],
          ['thead', { reserved: !1 }],
          ['time', { reserved: !1 }],
          ['title', { reserved: !0 }],
          ['tr', { reserved: !1 }],
          ['track', { reserved: !0 }],
          ['tt', { reserved: !1 }],
          ['u', { reserved: !1 }],
          ['ul', { reserved: !1 }],
          ['var', { reserved: !1 }],
          ['video', { reserved: !1 }],
          ['wbr', { reserved: !1 }],
          ['xmp', { reserved: !1 }],
        ],
        domMap = {
          entries: function entries() {
            return dom;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                  o['@@iterator'];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && 'number' == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(dom);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, key, dom);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = dom.find(function(tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!domMap.get(key);
          },
          keys: function keys() {
            return dom.map(function(_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return dom.map(function(_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(domMap, domMap.entries());
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/elementRoleMap.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _deepEqual = _interopRequireDefault(
          __webpack_require__('./node_modules/deep-equal/index.js')
        ),
        _iterationDecorator = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js'
          )
        ),
        _rolesMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/rolesMap.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      for (
        var elementRoles = [], keys = _rolesMap.default.keys(), i = 0;
        i < keys.length;
        i++
      ) {
        var key = keys[i],
          role = _rolesMap.default.get(key);
        if (role)
          for (
            var concepts = [].concat(role.baseConcepts, role.relatedConcepts),
              k = 0;
            k < concepts.length;
            k++
          ) {
            var relation = concepts[k];
            if ('HTML' === relation.module) {
              var concept = relation.concept;
              concept &&
                (function() {
                  var conceptStr = JSON.stringify(concept),
                    elementRoleRelation = elementRoles.find(function(relation) {
                      return JSON.stringify(relation[0]) === conceptStr;
                    }),
                    roles = void 0;
                  roles = elementRoleRelation ? elementRoleRelation[1] : [];
                  for (var isUnique = !0, _i = 0; _i < roles.length; _i++)
                    if (roles[_i] === key) {
                      isUnique = !1;
                      break;
                    }
                  isUnique && roles.push(key),
                    elementRoles.push([concept, roles]);
                })();
            }
          }
      }
      var elementRoleMap = {
          entries: function entries() {
            return elementRoles;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                  o['@@iterator'];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && 'number' == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(elementRoles);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  _key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, _key, elementRoles);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = elementRoles.find(function(tuple) {
              return (0, _deepEqual.default)(key, tuple[0]);
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!elementRoleMap.get(key);
          },
          keys: function keys() {
            return elementRoles.map(function(_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return elementRoles.map(function(_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          elementRoleMap,
          elementRoleMap.entries()
        );
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/commandRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-activedescendant': null, 'aria-disabled': null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/inputRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-disabled': null },
        relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-valuemax': null,
          'aria-valuemin': null,
          'aria-valuenow': null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {
          'aria-atomic': null,
          'aria-busy': null,
          'aria-controls': null,
          'aria-current': null,
          'aria-describedby': null,
          'aria-details': null,
          'aria-dropeffect': null,
          'aria-flowto': null,
          'aria-grabbed': null,
          'aria-hidden': null,
          'aria-keyshortcuts': null,
          'aria-label': null,
          'aria-labelledby': null,
          'aria-live': null,
          'aria-owns': null,
          'aria-relevant': null,
          'aria-roledescription': null,
        },
        relatedConcepts: [
          { concept: { name: 'rel' }, module: 'HTML' },
          { concept: { name: 'role' }, module: 'XHTML' },
          { concept: { name: 'type' }, module: 'Dublin Core' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: 'frontmatter' }, module: 'DTB' },
          { concept: { name: 'level' }, module: 'DTB' },
          { concept: { name: 'level' }, module: 'SMIL' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/selectRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-orientation': null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite'],
          ['roletype', 'structure', 'section', 'group'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/structureRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/windowRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-modal': null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _commandRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/commandRole.js'
          )
        ),
        _compositeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js'
          )
        ),
        _inputRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/inputRole.js'
          )
        ),
        _landmarkRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js'
          )
        ),
        _rangeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js'
          )
        ),
        _roletypeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js'
          )
        ),
        _sectionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js'
          )
        ),
        _sectionheadRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js'
          )
        ),
        _selectRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/selectRole.js'
          )
        ),
        _structureRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/structureRole.js'
          )
        ),
        _widgetRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js'
          )
        ),
        _windowRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/windowRole.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ['command', _commandRole.default],
        ['composite', _compositeRole.default],
        ['input', _inputRole.default],
        ['landmark', _landmarkRole.default],
        ['range', _rangeRole.default],
        ['roletype', _roletypeRole.default],
        ['section', _sectionRole.default],
        ['sectionhead', _sectionheadRole.default],
        ['select', _selectRole.default],
        ['structure', _structureRole.default],
        ['widget', _widgetRole.default],
        ['window', _windowRole.default],
      ];
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _docAbstractRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js'
          )
        ),
        _docAcknowledgmentsRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js'
          )
        ),
        _docAfterwordRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js'
          )
        ),
        _docAppendixRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js'
          )
        ),
        _docBacklinkRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js'
          )
        ),
        _docBiblioentryRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js'
          )
        ),
        _docBibliographyRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js'
          )
        ),
        _docBibliorefRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js'
          )
        ),
        _docChapterRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js'
          )
        ),
        _docColophonRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js'
          )
        ),
        _docConclusionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js'
          )
        ),
        _docCoverRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js'
          )
        ),
        _docCreditRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js'
          )
        ),
        _docCreditsRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js'
          )
        ),
        _docDedicationRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js'
          )
        ),
        _docEndnoteRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js'
          )
        ),
        _docEndnotesRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js'
          )
        ),
        _docEpigraphRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js'
          )
        ),
        _docEpilogueRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js'
          )
        ),
        _docErrataRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js'
          )
        ),
        _docExampleRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js'
          )
        ),
        _docFootnoteRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js'
          )
        ),
        _docForewordRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js'
          )
        ),
        _docGlossaryRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js'
          )
        ),
        _docGlossrefRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js'
          )
        ),
        _docIndexRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js'
          )
        ),
        _docIntroductionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js'
          )
        ),
        _docNoterefRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js'
          )
        ),
        _docNoticeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js'
          )
        ),
        _docPagebreakRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js'
          )
        ),
        _docPagelistRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js'
          )
        ),
        _docPartRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js'
          )
        ),
        _docPrefaceRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js'
          )
        ),
        _docPrologueRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js'
          )
        ),
        _docPullquoteRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js'
          )
        ),
        _docQnaRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js'
          )
        ),
        _docSubtitleRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js'
          )
        ),
        _docTipRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js'
          )
        ),
        _docTocRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ['doc-abstract', _docAbstractRole.default],
        ['doc-acknowledgments', _docAcknowledgmentsRole.default],
        ['doc-afterword', _docAfterwordRole.default],
        ['doc-appendix', _docAppendixRole.default],
        ['doc-backlink', _docBacklinkRole.default],
        ['doc-biblioentry', _docBiblioentryRole.default],
        ['doc-bibliography', _docBibliographyRole.default],
        ['doc-biblioref', _docBibliorefRole.default],
        ['doc-chapter', _docChapterRole.default],
        ['doc-colophon', _docColophonRole.default],
        ['doc-conclusion', _docConclusionRole.default],
        ['doc-cover', _docCoverRole.default],
        ['doc-credit', _docCreditRole.default],
        ['doc-credits', _docCreditsRole.default],
        ['doc-dedication', _docDedicationRole.default],
        ['doc-endnote', _docEndnoteRole.default],
        ['doc-endnotes', _docEndnotesRole.default],
        ['doc-epigraph', _docEpigraphRole.default],
        ['doc-epilogue', _docEpilogueRole.default],
        ['doc-errata', _docErrataRole.default],
        ['doc-example', _docExampleRole.default],
        ['doc-footnote', _docFootnoteRole.default],
        ['doc-foreword', _docForewordRole.default],
        ['doc-glossary', _docGlossaryRole.default],
        ['doc-glossref', _docGlossrefRole.default],
        ['doc-index', _docIndexRole.default],
        ['doc-introduction', _docIntroductionRole.default],
        ['doc-noteref', _docNoterefRole.default],
        ['doc-notice', _docNoticeRole.default],
        ['doc-pagebreak', _docPagebreakRole.default],
        ['doc-pagelist', _docPagelistRole.default],
        ['doc-part', _docPartRole.default],
        ['doc-preface', _docPrefaceRole.default],
        ['doc-prologue', _docPrologueRole.default],
        ['doc-pullquote', _docPullquoteRole.default],
        ['doc-qna', _docQnaRole.default],
        ['doc-subtitle', _docSubtitleRole.default],
        ['doc-tip', _docTipRole.default],
        ['doc-toc', _docTocRole.default],
      ];
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _graphicsDocumentRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js'
          )
        ),
        _graphicsObjectRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js'
          )
        ),
        _graphicsSymbolRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ['graphics-document', _graphicsDocumentRole.default],
        ['graphics-object', _graphicsObjectRole.default],
        ['graphics-symbol', _graphicsSymbolRole.default],
      ];
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _alertRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/alertRole.js'
          )
        ),
        _alertdialogRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js'
          )
        ),
        _applicationRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/applicationRole.js'
          )
        ),
        _articleRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/articleRole.js'
          )
        ),
        _bannerRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/bannerRole.js'
          )
        ),
        _blockquoteRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js'
          )
        ),
        _buttonRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/buttonRole.js'
          )
        ),
        _captionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/captionRole.js'
          )
        ),
        _cellRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/cellRole.js'
          )
        ),
        _checkboxRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js'
          )
        ),
        _codeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/codeRole.js'
          )
        ),
        _columnheaderRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js'
          )
        ),
        _comboboxRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js'
          )
        ),
        _complementaryRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js'
          )
        ),
        _contentinfoRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js'
          )
        ),
        _definitionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/definitionRole.js'
          )
        ),
        _deletionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/deletionRole.js'
          )
        ),
        _dialogRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/dialogRole.js'
          )
        ),
        _directoryRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/directoryRole.js'
          )
        ),
        _documentRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/documentRole.js'
          )
        ),
        _emphasisRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js'
          )
        ),
        _feedRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/feedRole.js'
          )
        ),
        _figureRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/figureRole.js'
          )
        ),
        _formRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/formRole.js'
          )
        ),
        _genericRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/genericRole.js'
          )
        ),
        _gridRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/gridRole.js'
          )
        ),
        _gridcellRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js'
          )
        ),
        _groupRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/groupRole.js'
          )
        ),
        _headingRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/headingRole.js'
          )
        ),
        _imgRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/imgRole.js'
          )
        ),
        _insertionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/insertionRole.js'
          )
        ),
        _linkRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/linkRole.js'
          )
        ),
        _listRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listRole.js'
          )
        ),
        _listboxRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listboxRole.js'
          )
        ),
        _listitemRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listitemRole.js'
          )
        ),
        _logRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/logRole.js'
          )
        ),
        _mainRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/mainRole.js'
          )
        ),
        _marqueeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js'
          )
        ),
        _mathRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/mathRole.js'
          )
        ),
        _menuRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuRole.js'
          )
        ),
        _menubarRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menubarRole.js'
          )
        ),
        _menuitemRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js'
          )
        ),
        _menuitemcheckboxRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js'
          )
        ),
        _menuitemradioRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js'
          )
        ),
        _meterRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/meterRole.js'
          )
        ),
        _navigationRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/navigationRole.js'
          )
        ),
        _noneRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/noneRole.js'
          )
        ),
        _noteRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/noteRole.js'
          )
        ),
        _optionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/optionRole.js'
          )
        ),
        _paragraphRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js'
          )
        ),
        _presentationRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/presentationRole.js'
          )
        ),
        _progressbarRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js'
          )
        ),
        _radioRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/radioRole.js'
          )
        ),
        _radiogroupRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js'
          )
        ),
        _regionRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/regionRole.js'
          )
        ),
        _rowRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowRole.js'
          )
        ),
        _rowgroupRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js'
          )
        ),
        _rowheaderRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js'
          )
        ),
        _scrollbarRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js'
          )
        ),
        _searchRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/searchRole.js'
          )
        ),
        _searchboxRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js'
          )
        ),
        _separatorRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/separatorRole.js'
          )
        ),
        _sliderRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/sliderRole.js'
          )
        ),
        _spinbuttonRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js'
          )
        ),
        _statusRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/statusRole.js'
          )
        ),
        _strongRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/strongRole.js'
          )
        ),
        _subscriptRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js'
          )
        ),
        _superscriptRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js'
          )
        ),
        _switchRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/switchRole.js'
          )
        ),
        _tabRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tabRole.js'
          )
        ),
        _tableRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tableRole.js'
          )
        ),
        _tablistRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tablistRole.js'
          )
        ),
        _tabpanelRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js'
          )
        ),
        _termRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/termRole.js'
          )
        ),
        _textboxRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/textboxRole.js'
          )
        ),
        _timeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/timeRole.js'
          )
        ),
        _timerRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/timerRole.js'
          )
        ),
        _toolbarRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js'
          )
        ),
        _tooltipRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js'
          )
        ),
        _treeRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treeRole.js'
          )
        ),
        _treegridRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treegridRole.js'
          )
        ),
        _treeitemRole = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ['alert', _alertRole.default],
        ['alertdialog', _alertdialogRole.default],
        ['application', _applicationRole.default],
        ['article', _articleRole.default],
        ['banner', _bannerRole.default],
        ['blockquote', _blockquoteRole.default],
        ['button', _buttonRole.default],
        ['caption', _captionRole.default],
        ['cell', _cellRole.default],
        ['checkbox', _checkboxRole.default],
        ['code', _codeRole.default],
        ['columnheader', _columnheaderRole.default],
        ['combobox', _comboboxRole.default],
        ['complementary', _complementaryRole.default],
        ['contentinfo', _contentinfoRole.default],
        ['definition', _definitionRole.default],
        ['deletion', _deletionRole.default],
        ['dialog', _dialogRole.default],
        ['directory', _directoryRole.default],
        ['document', _documentRole.default],
        ['emphasis', _emphasisRole.default],
        ['feed', _feedRole.default],
        ['figure', _figureRole.default],
        ['form', _formRole.default],
        ['generic', _genericRole.default],
        ['grid', _gridRole.default],
        ['gridcell', _gridcellRole.default],
        ['group', _groupRole.default],
        ['heading', _headingRole.default],
        ['img', _imgRole.default],
        ['insertion', _insertionRole.default],
        ['link', _linkRole.default],
        ['list', _listRole.default],
        ['listbox', _listboxRole.default],
        ['listitem', _listitemRole.default],
        ['log', _logRole.default],
        ['main', _mainRole.default],
        ['marquee', _marqueeRole.default],
        ['math', _mathRole.default],
        ['menu', _menuRole.default],
        ['menubar', _menubarRole.default],
        ['menuitem', _menuitemRole.default],
        ['menuitemcheckbox', _menuitemcheckboxRole.default],
        ['menuitemradio', _menuitemradioRole.default],
        ['meter', _meterRole.default],
        ['navigation', _navigationRole.default],
        ['none', _noneRole.default],
        ['note', _noteRole.default],
        ['option', _optionRole.default],
        ['paragraph', _paragraphRole.default],
        ['presentation', _presentationRole.default],
        ['progressbar', _progressbarRole.default],
        ['radio', _radioRole.default],
        ['radiogroup', _radiogroupRole.default],
        ['region', _regionRole.default],
        ['row', _rowRole.default],
        ['rowgroup', _rowgroupRole.default],
        ['rowheader', _rowheaderRole.default],
        ['scrollbar', _scrollbarRole.default],
        ['search', _searchRole.default],
        ['searchbox', _searchboxRole.default],
        ['separator', _separatorRole.default],
        ['slider', _sliderRole.default],
        ['spinbutton', _spinbuttonRole.default],
        ['status', _statusRole.default],
        ['strong', _strongRole.default],
        ['subscript', _subscriptRole.default],
        ['superscript', _superscriptRole.default],
        ['switch', _switchRole.default],
        ['tab', _tabRole.default],
        ['table', _tableRole.default],
        ['tablist', _tablistRole.default],
        ['tabpanel', _tabpanelRole.default],
        ['term', _termRole.default],
        ['textbox', _textboxRole.default],
        ['time', _timeRole.default],
        ['timer', _timerRole.default],
        ['toolbar', _toolbarRole.default],
        ['tooltip', _tooltipRole.default],
        ['tree', _treeRole.default],
        ['treegrid', _treegridRole.default],
        ['treeitem', _treeitemRole.default],
      ];
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'content'],
        prohibitedProps: [],
        props: { 'aria-errormessage': null, 'aria-invalid': null },
        relatedConcepts: [
          { concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command', 'link']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'EPUB biblioentry [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: ['doc-bibliography'],
        requiredContextRole: ['doc-bibliography'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'listitem']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['doc-biblioentry']],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-errormessage': null, 'aria-invalid': null },
        relatedConcepts: [
          { concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command', 'link']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'img']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: ['doc-endnotes'],
        requiredContextRole: ['doc-endnotes'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'listitem']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['doc-endnote']],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['definition'], ['term']],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-errormessage': null, 'aria-invalid': null },
        relatedConcepts: [
          { concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command', 'link']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'landmark', 'navigation'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-errormessage': null, 'aria-invalid': null },
        relatedConcepts: [
          { concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command', 'link']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'note']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'separator']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'landmark', 'navigation'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['none']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'sectionhead']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'note']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'landmark', 'navigation'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { module: 'GRAPHICS', concept: { name: 'graphics-object' } },
          { module: 'ARIA', concept: { name: 'img' } },
          { module: 'ARIA', concept: { name: 'article' } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'document']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { module: 'GRAPHICS', concept: { name: 'graphics-document' } },
          { module: 'ARIA', concept: { name: 'group' } },
          { module: 'ARIA', concept: { name: 'img' } },
          { module: 'GRAPHICS', concept: { name: 'graphics-symbol' } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'group']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'img']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/alertRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
        relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'alert'],
          ['roletype', 'window', 'dialog'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/applicationRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-activedescendant': null,
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
        },
        relatedConcepts: [
          { concept: { name: 'Device Independence Delivery Unit' } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/articleRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-posinset': null, 'aria-setsize': null },
        relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'document']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/bannerRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              constraints: ['direct descendant of document'],
              name: 'header',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/buttonRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-pressed': null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'aria-pressed' },
                { name: 'type', value: 'checkbox' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'aria-expanded', value: 'false' }],
              name: 'summary',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'aria-expanded', value: 'true' }],
              constraints: [
                'direct descendant of details element with the open attribute defined',
              ],
              name: 'summary',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'type', value: 'button' }],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'type', value: 'image' }],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'type', value: 'reset' }],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'type', value: 'submit' }],
              name: 'input',
            },
            module: 'HTML',
          },
          { concept: { name: 'button' }, module: 'HTML' },
          { concept: { name: 'trigger' }, module: 'XForms' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/captionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: ['figure', 'grid', 'table'],
        requiredContextRole: ['figure', 'grid', 'table'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/cellRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-colindex': null,
          'aria-colspan': null,
          'aria-rowindex': null,
          'aria-rowspan': null,
        },
        relatedConcepts: [
          {
            concept: { constraints: ['descendant of table'], name: 'td' },
            module: 'HTML',
          },
        ],
        requireContextRole: ['row'],
        requiredContextRole: ['row'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-checked': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-invalid': null,
          'aria-readonly': null,
          'aria-required': null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'type', value: 'checkbox' }],
              name: 'input',
            },
            module: 'HTML',
          },
          { concept: { name: 'option' }, module: 'ARIA' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-checked': null },
        superClass: [['roletype', 'widget', 'input']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/codeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-sort': null },
        relatedConcepts: [
          {
            attributes: [{ name: 'scope', value: 'col' }],
            concept: { name: 'th' },
            module: 'HTML',
          },
        ],
        requireContextRole: ['row'],
        requiredContextRole: ['row'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'cell'],
          ['roletype', 'structure', 'section', 'cell', 'gridcell'],
          ['roletype', 'widget', 'gridcell'],
          ['roletype', 'structure', 'sectionhead'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-activedescendant': null,
          'aria-autocomplete': null,
          'aria-errormessage': null,
          'aria-invalid': null,
          'aria-readonly': null,
          'aria-required': null,
          'aria-expanded': 'false',
          'aria-haspopup': 'listbox',
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'list' },
                { name: 'type', value: 'email' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'list' },
                { name: 'type', value: 'search' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'list' },
                { name: 'type', value: 'tel' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'list' },
                { name: 'type', value: 'text' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'list' },
                { name: 'type', value: 'url' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['set'], name: 'list' },
                { name: 'type', value: 'url' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'multiple' },
                { constraints: ['undefined'], name: 'size' },
              ],
              name: 'select',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'multiple' },
                { name: 'size', value: 1 },
              ],
              name: 'select',
            },
            module: 'HTML',
          },
          { concept: { name: 'select' }, module: 'XForms' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
        superClass: [['roletype', 'widget', 'input']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              constraints: ['direct descendant of document'],
              name: 'footer',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/definitionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/deletionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/dialogRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'window']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/directoryRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ module: 'DAISY Guide' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'list']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/documentRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: 'Device Independence Delivery Unit' } },
          { concept: { name: 'body' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/feedRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['article']],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'list']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/figureRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/formRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: ['set'], name: 'aria-label' }],
              name: 'form',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
              name: 'form',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ constraints: ['set'], name: 'name' }],
              name: 'form',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/genericRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [
          { concept: { name: 'span' }, module: 'HTML' },
          { concept: { name: 'div' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/gridRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-multiselectable': null, 'aria-readonly': null },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'role', value: 'grid' }],
              name: 'table',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['row'], ['row', 'rowgroup']],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite'],
          ['roletype', 'structure', 'section', 'table'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-invalid': null,
          'aria-readonly': null,
          'aria-required': null,
          'aria-selected': null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'role', value: 'gridcell' }],
              name: 'td',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: ['row'],
        requiredContextRole: ['row'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'cell'],
          ['roletype', 'widget'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/groupRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-activedescendant': null, 'aria-disabled': null },
        relatedConcepts: [
          { concept: { name: 'details' }, module: 'HTML' },
          { concept: { name: 'fieldset' }, module: 'HTML' },
          { concept: { name: 'optgroup' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/headingRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-level': '2' },
        relatedConcepts: [
          { concept: { name: 'h1' }, module: 'HTML' },
          { concept: { name: 'h2' }, module: 'HTML' },
          { concept: { name: 'h3' }, module: 'HTML' },
          { concept: { name: 'h4' }, module: 'HTML' },
          { concept: { name: 'h5' }, module: 'HTML' },
          { concept: { name: 'h6' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-level': '2' },
        superClass: [['roletype', 'structure', 'sectionhead']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/imgRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: ['set'], name: 'alt' }],
              name: 'img',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ constraints: ['undefined'], name: 'alt' }],
              name: 'img',
            },
            module: 'HTML',
          },
          { concept: { name: 'imggroup' }, module: 'DTB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/insertionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/linkRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-expanded': null,
          'aria-haspopup': null,
        },
        relatedConcepts: [
          {
            concept: { attributes: [{ name: 'href' }], name: 'a' },
            module: 'HTML',
          },
          {
            concept: { attributes: [{ name: 'href' }], name: 'area' },
            module: 'HTML',
          },
          {
            concept: { attributes: [{ name: 'href' }], name: 'link' },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: 'menu' }, module: 'HTML' },
          { concept: { name: 'ol' }, module: 'HTML' },
          { concept: { name: 'ul' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['listitem']],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listboxRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-expanded': null,
          'aria-invalid': null,
          'aria-multiselectable': null,
          'aria-readonly': null,
          'aria-required': null,
          'aria-orientation': 'vertical',
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ['>1'], name: 'size' },
                { name: 'multiple' },
              ],
              name: 'select',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ constraints: ['>1'], name: 'size' }],
              name: 'select',
            },
            module: 'HTML',
          },
          {
            concept: { attributes: [{ name: 'multiple' }], name: 'select' },
            module: 'HTML',
          },
          { concept: { name: 'datalist' }, module: 'HTML' },
          { concept: { name: 'list' }, module: 'ARIA' },
          { concept: { name: 'select' }, module: 'XForms' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['option', 'group'], ['option']],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite', 'select'],
          ['roletype', 'structure', 'section', 'group', 'select'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listitemRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-level': null,
          'aria-posinset': null,
          'aria-setsize': null,
        },
        relatedConcepts: [
          {
            concept: {
              constraints: ['direct descendant of ol, ul or menu'],
              name: 'li',
            },
            module: 'HTML',
          },
          { concept: { name: 'item' }, module: 'XForms' },
        ],
        requireContextRole: ['directory', 'list'],
        requiredContextRole: ['directory', 'list'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/logRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-live': 'polite' },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/mainRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/mathRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-orientation': 'vertical' },
        relatedConcepts: [
          { concept: { name: 'MENU' }, module: 'JAPI' },
          { concept: { name: 'list' }, module: 'ARIA' },
          { concept: { name: 'select' }, module: 'XForms' },
          { concept: { name: 'sidebar' }, module: 'DTB' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ['menuitem', 'group'],
          ['menuitemradio', 'group'],
          ['menuitemcheckbox', 'group'],
          ['menuitem'],
          ['menuitemcheckbox'],
          ['menuitemradio'],
        ],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite', 'select'],
          ['roletype', 'structure', 'section', 'group', 'select'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menubarRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-orientation': 'horizontal' },
        relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ['menuitem', 'group'],
          ['menuitemradio', 'group'],
          ['menuitemcheckbox', 'group'],
          ['menuitem'],
          ['menuitemcheckbox'],
          ['menuitemradio'],
        ],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite', 'select', 'menu'],
          ['roletype', 'structure', 'section', 'group', 'select', 'menu'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-posinset': null,
          'aria-setsize': null,
        },
        relatedConcepts: [
          { concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
          { concept: { name: 'listitem' }, module: 'ARIA' },
          { concept: { name: 'menuitem' }, module: 'HTML' },
          { concept: { name: 'option' }, module: 'ARIA' },
        ],
        requireContextRole: ['group', 'menu', 'menubar'],
        requiredContextRole: ['group', 'menu', 'menubar'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'command']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
        requireContextRole: ['group', 'menu', 'menubar'],
        requiredContextRole: ['group', 'menu', 'menubar'],
        requiredOwnedElements: [],
        requiredProps: { 'aria-checked': null },
        superClass: [
          ['roletype', 'widget', 'input', 'checkbox'],
          ['roletype', 'widget', 'command', 'menuitem'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
        requireContextRole: ['group', 'menu', 'menubar'],
        requiredContextRole: ['group', 'menu', 'menubar'],
        requiredOwnedElements: [],
        requiredProps: { 'aria-checked': null },
        superClass: [
          ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
          ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
          ['roletype', 'widget', 'input', 'radio'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/meterRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-valuetext': null,
          'aria-valuemax': '100',
          'aria-valuemin': '0',
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-valuenow': null },
        superClass: [['roletype', 'structure', 'range']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/navigationRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/noneRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/noteRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/optionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-checked': null,
          'aria-posinset': null,
          'aria-setsize': null,
          'aria-selected': 'false',
        },
        relatedConcepts: [
          { concept: { name: 'item' }, module: 'XForms' },
          { concept: { name: 'listitem' }, module: 'ARIA' },
          { concept: { name: 'option' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-selected': 'false' },
        superClass: [['roletype', 'widget', 'input']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/presentationRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-valuetext': null },
        relatedConcepts: [
          { concept: { name: 'progress' }, module: 'HTML' },
          { concept: { name: 'status' }, module: 'ARIA' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'range'],
          ['roletype', 'widget'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/radioRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-checked': null,
          'aria-posinset': null,
          'aria-setsize': null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'type', value: 'radio' }],
              name: 'input',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-checked': null },
        superClass: [['roletype', 'widget', 'input']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-invalid': null,
          'aria-readonly': null,
          'aria-required': null,
        },
        relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['radio']],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite', 'select'],
          ['roletype', 'structure', 'section', 'group', 'select'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/regionRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: ['set'], name: 'aria-label' }],
              name: 'section',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
              name: 'section',
            },
            module: 'HTML',
          },
          {
            concept: { name: 'Device Independence Glossart perceivable unit' },
          },
          { concept: { name: 'frame' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-colindex': null,
          'aria-expanded': null,
          'aria-level': null,
          'aria-posinset': null,
          'aria-rowindex': null,
          'aria-selected': null,
          'aria-setsize': null,
        },
        relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
        requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
        requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
        requiredOwnedElements: [
          ['cell'],
          ['columnheader'],
          ['gridcell'],
          ['rowheader'],
        ],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'group'],
          ['roletype', 'widget'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: 'tbody' }, module: 'HTML' },
          { concept: { name: 'tfoot' }, module: 'HTML' },
          { concept: { name: 'thead' }, module: 'HTML' },
        ],
        requireContextRole: ['grid', 'table', 'treegrid'],
        requiredContextRole: ['grid', 'table', 'treegrid'],
        requiredOwnedElements: [['row']],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-sort': null },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'scope', value: 'row' }],
              name: 'th',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [{ name: 'scope', value: 'rowgroup' }],
              name: 'th',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: ['row', 'rowgroup'],
        requiredContextRole: ['row', 'rowgroup'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'section', 'cell'],
          ['roletype', 'structure', 'section', 'cell', 'gridcell'],
          ['roletype', 'widget', 'gridcell'],
          ['roletype', 'structure', 'sectionhead'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-valuetext': null,
          'aria-orientation': 'vertical',
          'aria-valuemax': '100',
          'aria-valuemin': '0',
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
        superClass: [
          ['roletype', 'structure', 'range'],
          ['roletype', 'widget'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/searchRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'landmark']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'list' },
                { name: 'type', value: 'search' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'input', 'textbox']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/separatorRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-orientation': 'horizontal',
          'aria-valuemax': '100',
          'aria-valuemin': '0',
          'aria-valuenow': null,
          'aria-valuetext': null,
        },
        relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/sliderRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-haspopup': null,
          'aria-invalid': null,
          'aria-readonly': null,
          'aria-valuetext': null,
          'aria-orientation': 'horizontal',
          'aria-valuemax': '100',
          'aria-valuemin': '0',
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'type', value: 'range' }],
              name: 'input',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-valuenow': null },
        superClass: [
          ['roletype', 'widget', 'input'],
          ['roletype', 'structure', 'range'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-invalid': null,
          'aria-readonly': null,
          'aria-required': null,
          'aria-valuetext': null,
          'aria-valuenow': '0',
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: 'type', value: 'number' }],
              name: 'input',
            },
            module: 'HTML',
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite'],
          ['roletype', 'widget', 'input'],
          ['roletype', 'structure', 'range'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/statusRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
        relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/strongRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['prohibited'],
        prohibitedProps: ['aria-label', 'aria-labelledby'],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/switchRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { 'aria-checked': null },
        superClass: [['roletype', 'widget', 'input', 'checkbox']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tabRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {
          'aria-disabled': null,
          'aria-expanded': null,
          'aria-haspopup': null,
          'aria-posinset': null,
          'aria-setsize': null,
          'aria-selected': 'false',
        },
        relatedConcepts: [],
        requireContextRole: ['tablist'],
        requiredContextRole: ['tablist'],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ['roletype', 'structure', 'sectionhead'],
          ['roletype', 'widget'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tableRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-colcount': null, 'aria-rowcount': null },
        relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['row'], ['row', 'rowgroup']],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tablistRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-level': null,
          'aria-multiselectable': null,
          'aria-orientation': 'horizontal',
        },
        relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['tab']],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'composite']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/termRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: 'dfn' }, module: 'HTML' },
          { concept: { name: 'dt' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/textboxRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-activedescendant': null,
          'aria-autocomplete': null,
          'aria-errormessage': null,
          'aria-haspopup': null,
          'aria-invalid': null,
          'aria-multiline': null,
          'aria-placeholder': null,
          'aria-readonly': null,
          'aria-required': null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'type' },
                { constraints: ['undefined'], name: 'list' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'list' },
                { name: 'type', value: 'email' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'list' },
                { name: 'type', value: 'tel' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'list' },
                { name: 'type', value: 'text' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          {
            concept: {
              attributes: [
                { constraints: ['undefined'], name: 'list' },
                { name: 'type', value: 'url' },
              ],
              name: 'input',
            },
            module: 'HTML',
          },
          { concept: { name: 'input' }, module: 'XForms' },
          { concept: { name: 'textarea' }, module: 'HTML' },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'widget', 'input']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/timeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/timerRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'status']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: { 'aria-orientation': 'horizontal' },
        relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section', 'group']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [['roletype', 'structure', 'section']],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treeRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {
          'aria-errormessage': null,
          'aria-invalid': null,
          'aria-multiselectable': null,
          'aria-required': null,
          'aria-orientation': 'vertical',
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite', 'select'],
          ['roletype', 'structure', 'section', 'group', 'select'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treegridRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author'],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [['row'], ['row', 'rowgroup']],
        requiredProps: {},
        superClass: [
          ['roletype', 'widget', 'composite', 'grid'],
          ['roletype', 'structure', 'section', 'table', 'grid'],
          ['roletype', 'widget', 'composite', 'select', 'tree'],
          ['roletype', 'structure', 'section', 'group', 'select', 'tree'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ['author', 'contents'],
        prohibitedProps: [],
        props: { 'aria-expanded': null, 'aria-haspopup': null },
        relatedConcepts: [],
        requireContextRole: ['group', 'tree'],
        requiredContextRole: ['group', 'tree'],
        requiredOwnedElements: [],
        requiredProps: { 'aria-selected': null },
        superClass: [
          ['roletype', 'structure', 'section', 'listitem'],
          ['roletype', 'widget', 'input', 'option'],
        ],
      };
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/index.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      exports.uJ = exports.UN = exports.Qv = void 0;
      var _ariaPropsMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/ariaPropsMap.js'
          )
        ),
        _domMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/domMap.js'
          )
        ),
        _rolesMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/rolesMap.js'
          )
        ),
        _elementRoleMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/elementRoleMap.js'
          )
        ),
        _roleElementMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/roleElementMap.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      _ariaPropsMap.default, _domMap.default;
      var roles = _rolesMap.default;
      exports.uJ = roles;
      var elementRoles = _elementRoleMap.default;
      exports.Qv = elementRoles;
      var roleElements = _roleElementMap.default;
      exports.UN = roleElements;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/roleElementMap.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _iterationDecorator = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js'
          )
        ),
        _rolesMap = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/rolesMap.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      for (
        var roleElement = [],
          keys = _rolesMap.default.keys(),
          _loop = function _loop(i) {
            var key = keys[i],
              role = _rolesMap.default.get(key);
            if (role)
              for (
                var concepts = [].concat(
                    role.baseConcepts,
                    role.relatedConcepts
                  ),
                  k = 0;
                k < concepts.length;
                k++
              ) {
                var relation = concepts[k];
                if ('HTML' === relation.module) {
                  var concept = relation.concept;
                  if (concept) {
                    var roleElementRelation = roleElement.find(function(item) {
                        return item[0] === key;
                      }),
                      relationConcepts = void 0;
                    (relationConcepts = roleElementRelation
                      ? roleElementRelation[1]
                      : []).push(concept),
                      roleElement.push([key, relationConcepts]);
                  }
                }
              }
          },
          i = 0;
        i < keys.length;
        i++
      )
        _loop(i);
      var roleElementMap = {
          entries: function entries() {
            return roleElement;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                  o['@@iterator'];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && 'number' == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(roleElement);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, key, roleElement);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = roleElement.find(function(tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!roleElementMap.get(key);
          },
          keys: function keys() {
            return roleElement.map(function(_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return roleElement.map(function(_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          roleElementMap,
          roleElementMap.entries()
        );
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/rolesMap.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _ariaAbstractRoles = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js'
          )
        ),
        _ariaLiteralRoles = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js'
          )
        ),
        _ariaDpubRoles = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js'
          )
        ),
        _ariaGraphicsRoles = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js'
          )
        ),
        _iterationDecorator = _interopRequireDefault(
          __webpack_require__(
            './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it =
          ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
          o['@@iterator'];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = _unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function F() {};
            return {
              s: F,
              n: function n() {
                return i >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[i++] };
              },
              e: function e(_e2) {
                throw _e2;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function e(_e3) {
            (didErr = !0), (err = _e3);
          },
          f: function f() {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var roles = [].concat(
        _ariaAbstractRoles.default,
        _ariaLiteralRoles.default,
        _ariaDpubRoles.default,
        _ariaGraphicsRoles.default
      );
      roles.forEach(function(_ref) {
        var _step,
          roleDefinition = _slicedToArray(_ref, 2)[1],
          _iterator = _createForOfIteratorHelper(roleDefinition.superClass);
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step2,
              _iterator2 = _createForOfIteratorHelper(_step.value);
            try {
              var _loop = function _loop() {
                var obj,
                  key,
                  value,
                  superClassName = _step2.value,
                  superClassRoleTuple = roles.find(function(_ref3) {
                    return _slicedToArray(_ref3, 1)[0] === superClassName;
                  });
                if (superClassRoleTuple)
                  for (
                    var superClassDefinition = superClassRoleTuple[1],
                      _i2 = 0,
                      _Object$keys = Object.keys(superClassDefinition.props);
                    _i2 < _Object$keys.length;
                    _i2++
                  ) {
                    var prop = _Object$keys[_i2];
                    Object.prototype.hasOwnProperty.call(
                      roleDefinition.props,
                      prop
                    ) ||
                      Object.assign(
                        roleDefinition.props,
                        ((obj = {}),
                        (key = prop),
                        (value = superClassDefinition.props[prop]),
                        key in obj
                          ? Object.defineProperty(obj, key, {
                              value: value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (obj[key] = value),
                        obj)
                      );
                  }
              };
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) _loop();
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var rolesMap = {
          entries: function entries() {
            return roles;
          },
          forEach: function forEach(fn) {
            var _step3,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator3 = _createForOfIteratorHelper(roles);
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                  key = _step3$value[0],
                  values = _step3$value[1];
                fn.call(thisArg, values, key, roles);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          },
          get: function get(key) {
            var item = roles.find(function(tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!rolesMap.get(key);
          },
          keys: function keys() {
            return roles.map(function(_ref5) {
              return _slicedToArray(_ref5, 1)[0];
            });
          },
          values: function values() {
            return roles.map(function(_ref7) {
              return _slicedToArray(_ref7, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          rolesMap,
          rolesMap.entries()
        );
      exports.default = _default;
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = function iterationDecorator(collection, entries) {
          'function' == typeof Symbol &&
            'symbol' === _typeof(Symbol.iterator) &&
            Object.defineProperty(collection, Symbol.iterator, {
              value: _iteratorProxy.default.bind(entries),
            });
          return collection;
        });
      var _iteratorProxy = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iteratorProxy.js'
        )
      );
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
    },
    './node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iteratorProxy.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _default = function iteratorProxy() {
        var values = this,
          index = 0,
          iter = {
            '@@iterator': function iterator() {
              return iter;
            },
            next: function next() {
              if (index < values.length) {
                var value = values[index];
                return (index += 1), { done: !1, value: value };
              }
              return { done: !0 };
            },
          };
        return iter;
      };
      exports.default = _default;
    },
    './node_modules/ansi-regex/index.js': function(module) {
      'use strict';
      module.exports = ({ onlyFirst: onlyFirst = !1 } = {}) => {
        const pattern = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|');
        return new RegExp(pattern, onlyFirst ? void 0 : 'g');
      };
    },
    './node_modules/array-buffer-byte-length/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var $byteLength = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        )('ArrayBuffer.prototype.byteLength', !0),
        isArrayBuffer = __webpack_require__(
          './node_modules/is-array-buffer/index.js'
        );
      module.exports = function byteLength(ab) {
        return isArrayBuffer(ab)
          ? $byteLength
            ? $byteLength(ab)
            : ab.byteLength
          : NaN;
      };
    },
    './node_modules/deep-equal/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var assign = __webpack_require__(
          './node_modules/deep-equal/node_modules/object.assign/index.js'
        ),
        callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        flags = __webpack_require__(
          './node_modules/regexp.prototype.flags/index.js'
        ),
        GetIntrinsic = __webpack_require__(
          './node_modules/get-intrinsic/index.js'
        ),
        getIterator = __webpack_require__(
          './node_modules/es-get-iterator/index.js'
        ),
        getSideChannel = __webpack_require__(
          './node_modules/side-channel/index.js'
        ),
        is = __webpack_require__('./node_modules/object-is/index.js'),
        isArguments = __webpack_require__(
          './node_modules/is-arguments/index.js'
        ),
        isArray = __webpack_require__(
          './node_modules/deep-equal/node_modules/isarray/index.js'
        ),
        isArrayBuffer = __webpack_require__(
          './node_modules/is-array-buffer/index.js'
        ),
        isDate = __webpack_require__(
          './node_modules/deep-equal/node_modules/is-date-object/index.js'
        ),
        isRegex = __webpack_require__(
          './node_modules/deep-equal/node_modules/is-regex/index.js'
        ),
        isSharedArrayBuffer = __webpack_require__(
          './node_modules/is-shared-array-buffer/index.js'
        ),
        objectKeys = __webpack_require__('./node_modules/object-keys/index.js'),
        whichBoxedPrimitive = __webpack_require__(
          './node_modules/which-boxed-primitive/index.js'
        ),
        whichCollection = __webpack_require__(
          './node_modules/which-collection/index.js'
        ),
        whichTypedArray = __webpack_require__(
          './node_modules/which-typed-array/index.js'
        ),
        byteLength = __webpack_require__(
          './node_modules/array-buffer-byte-length/index.js'
        ),
        sabByteLength = callBound('SharedArrayBuffer.prototype.byteLength', !0),
        $getTime = callBound('Date.prototype.getTime'),
        gPO = Object.getPrototypeOf,
        $objToString = callBound('Object.prototype.toString'),
        $Set = GetIntrinsic('%Set%', !0),
        $mapHas = callBound('Map.prototype.has', !0),
        $mapGet = callBound('Map.prototype.get', !0),
        $mapSize = callBound('Map.prototype.size', !0),
        $setAdd = callBound('Set.prototype.add', !0),
        $setDelete = callBound('Set.prototype.delete', !0),
        $setHas = callBound('Set.prototype.has', !0),
        $setSize = callBound('Set.prototype.size', !0);
      function setHasEqualElement(set, val1, opts, channel) {
        for (
          var result, i = getIterator(set);
          (result = i.next()) && !result.done;

        )
          if (internalDeepEqual(val1, result.value, opts, channel))
            return $setDelete(set, result.value), !0;
        return !1;
      }
      function findLooseMatchingPrimitives(prim) {
        return void 0 === prim
          ? null
          : 'object' != typeof prim
            ? 'symbol' != typeof prim &&
              (('string' != typeof prim && 'number' != typeof prim) ||
                +prim == +prim)
            : void 0;
      }
      function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
        var altValue = findLooseMatchingPrimitives(prim);
        if (null != altValue) return altValue;
        var curB = $mapGet(b, altValue),
          looseOpts = assign({}, opts, { strict: !1 });
        return (
          !(
            (void 0 === curB && !$mapHas(b, altValue)) ||
            !internalDeepEqual(item, curB, looseOpts, channel)
          ) &&
          (!$mapHas(a, altValue) &&
            internalDeepEqual(item, curB, looseOpts, channel))
        );
      }
      function setMightHaveLoosePrim(a, b, prim) {
        var altValue = findLooseMatchingPrimitives(prim);
        return null != altValue
          ? altValue
          : $setHas(b, altValue) && !$setHas(a, altValue);
      }
      function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
        for (
          var result, key2, i = getIterator(set);
          (result = i.next()) && !result.done;

        )
          if (
            internalDeepEqual(key1, (key2 = result.value), opts, channel) &&
            internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
          )
            return $setDelete(set, key2), !0;
        return !1;
      }
      function internalDeepEqual(actual, expected, options, channel) {
        var opts = options || {};
        if (opts.strict ? is(actual, expected) : actual === expected) return !0;
        if (whichBoxedPrimitive(actual) !== whichBoxedPrimitive(expected))
          return !1;
        if (
          !actual ||
          !expected ||
          ('object' != typeof actual && 'object' != typeof expected)
        )
          return opts.strict ? is(actual, expected) : actual == expected;
        var sentinel,
          hasActual = channel.has(actual),
          hasExpected = channel.has(expected);
        if (hasActual && hasExpected) {
          if (channel.get(actual) === channel.get(expected)) return !0;
        } else sentinel = {};
        return (
          hasActual || channel.set(actual, sentinel),
          hasExpected || channel.set(expected, sentinel),
          (function objEquiv(a, b, opts, channel) {
            var i, key;
            if (typeof a != typeof b) return !1;
            if (null == a || null == b) return !1;
            if ($objToString(a) !== $objToString(b)) return !1;
            if (isArguments(a) !== isArguments(b)) return !1;
            var aIsArray = isArray(a),
              bIsArray = isArray(b);
            if (aIsArray !== bIsArray) return !1;
            var aIsError = a instanceof Error,
              bIsError = b instanceof Error;
            if (aIsError !== bIsError) return !1;
            if (
              (aIsError || bIsError) &&
              (a.name !== b.name || a.message !== b.message)
            )
              return !1;
            var aIsRegex = isRegex(a),
              bIsRegex = isRegex(b);
            if (aIsRegex !== bIsRegex) return !1;
            if (
              (aIsRegex || bIsRegex) &&
              (a.source !== b.source || flags(a) !== flags(b))
            )
              return !1;
            var aIsDate = isDate(a),
              bIsDate = isDate(b);
            if (aIsDate !== bIsDate) return !1;
            if ((aIsDate || bIsDate) && $getTime(a) !== $getTime(b)) return !1;
            if (opts.strict && gPO && gPO(a) !== gPO(b)) return !1;
            var aWhich = whichTypedArray(a),
              bWhich = whichTypedArray(b);
            if (aWhich !== bWhich) return !1;
            if (aWhich || bWhich) {
              if (a.length !== b.length) return !1;
              for (i = 0; i < a.length; i++) if (a[i] !== b[i]) return !1;
              return !0;
            }
            var aIsBuffer = isBuffer(a),
              bIsBuffer = isBuffer(b);
            if (aIsBuffer !== bIsBuffer) return !1;
            if (aIsBuffer || bIsBuffer) {
              if (a.length !== b.length) return !1;
              for (i = 0; i < a.length; i++) if (a[i] !== b[i]) return !1;
              return !0;
            }
            var aIsArrayBuffer = isArrayBuffer(a),
              bIsArrayBuffer = isArrayBuffer(b);
            if (aIsArrayBuffer !== bIsArrayBuffer) return !1;
            if (aIsArrayBuffer || bIsArrayBuffer)
              return (
                byteLength(a) === byteLength(b) &&
                ('function' == typeof Uint8Array &&
                  internalDeepEqual(
                    new Uint8Array(a),
                    new Uint8Array(b),
                    opts,
                    channel
                  ))
              );
            var aIsSAB = isSharedArrayBuffer(a),
              bIsSAB = isSharedArrayBuffer(b);
            if (aIsSAB !== bIsSAB) return !1;
            if (aIsSAB || bIsSAB)
              return (
                sabByteLength(a) === sabByteLength(b) &&
                ('function' == typeof Uint8Array &&
                  internalDeepEqual(
                    new Uint8Array(a),
                    new Uint8Array(b),
                    opts,
                    channel
                  ))
              );
            if (typeof a != typeof b) return !1;
            var ka = objectKeys(a),
              kb = objectKeys(b);
            if (ka.length !== kb.length) return !1;
            for (ka.sort(), kb.sort(), i = ka.length - 1; i >= 0; i--)
              if (ka[i] != kb[i]) return !1;
            for (i = ka.length - 1; i >= 0; i--)
              if (!internalDeepEqual(a[(key = ka[i])], b[key], opts, channel))
                return !1;
            var aCollection = whichCollection(a),
              bCollection = whichCollection(b);
            if (aCollection !== bCollection) return !1;
            if ('Set' === aCollection || 'Set' === bCollection)
              return (function setEquiv(a, b, opts, channel) {
                if ($setSize(a) !== $setSize(b)) return !1;
                var resultA,
                  resultB,
                  set,
                  iA = getIterator(a),
                  iB = getIterator(b);
                for (; (resultA = iA.next()) && !resultA.done; )
                  if (resultA.value && 'object' == typeof resultA.value)
                    set || (set = new $Set()), $setAdd(set, resultA.value);
                  else if (!$setHas(b, resultA.value)) {
                    if (opts.strict) return !1;
                    if (!setMightHaveLoosePrim(a, b, resultA.value)) return !1;
                    set || (set = new $Set()), $setAdd(set, resultA.value);
                  }
                if (set) {
                  for (; (resultB = iB.next()) && !resultB.done; )
                    if (resultB.value && 'object' == typeof resultB.value) {
                      if (
                        !setHasEqualElement(
                          set,
                          resultB.value,
                          opts.strict,
                          channel
                        )
                      )
                        return !1;
                    } else if (
                      !opts.strict &&
                      !$setHas(a, resultB.value) &&
                      !setHasEqualElement(
                        set,
                        resultB.value,
                        opts.strict,
                        channel
                      )
                    )
                      return !1;
                  return 0 === $setSize(set);
                }
                return !0;
              })(a, b, opts, channel);
            if ('Map' === aCollection)
              return (function mapEquiv(a, b, opts, channel) {
                if ($mapSize(a) !== $mapSize(b)) return !1;
                var resultA,
                  resultB,
                  set,
                  key,
                  item1,
                  item2,
                  iA = getIterator(a),
                  iB = getIterator(b);
                for (; (resultA = iA.next()) && !resultA.done; )
                  if (
                    ((key = resultA.value[0]),
                    (item1 = resultA.value[1]),
                    key && 'object' == typeof key)
                  )
                    set || (set = new $Set()), $setAdd(set, key);
                  else if (
                    (void 0 === (item2 = $mapGet(b, key)) &&
                      !$mapHas(b, key)) ||
                    !internalDeepEqual(item1, item2, opts, channel)
                  ) {
                    if (opts.strict) return !1;
                    if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel))
                      return !1;
                    set || (set = new $Set()), $setAdd(set, key);
                  }
                if (set) {
                  for (; (resultB = iB.next()) && !resultB.done; )
                    if (
                      ((key = resultB.value[0]),
                      (item2 = resultB.value[1]),
                      key && 'object' == typeof key)
                    ) {
                      if (!mapHasEqualEntry(set, a, key, item2, opts, channel))
                        return !1;
                    } else if (
                      !(
                        opts.strict ||
                        (a.has(key) &&
                          internalDeepEqual(
                            $mapGet(a, key),
                            item2,
                            opts,
                            channel
                          )) ||
                        mapHasEqualEntry(
                          set,
                          a,
                          key,
                          item2,
                          assign({}, opts, { strict: !1 }),
                          channel
                        )
                      )
                    )
                      return !1;
                  return 0 === $setSize(set);
                }
                return !0;
              })(a, b, opts, channel);
            return !0;
          })(actual, expected, opts, channel)
        );
      }
      function isBuffer(x) {
        return (
          !(!x || 'object' != typeof x || 'number' != typeof x.length) &&
          ('function' == typeof x.copy &&
            'function' == typeof x.slice &&
            (!(x.length > 0 && 'number' != typeof x[0]) &&
              !!(
                x.constructor &&
                x.constructor.isBuffer &&
                x.constructor.isBuffer(x)
              )))
        );
      }
      module.exports = function deepEqual(a, b, opts) {
        return internalDeepEqual(a, b, opts, getSideChannel());
      };
    },
    './node_modules/deep-equal/node_modules/define-properties/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var keys = __webpack_require__('./node_modules/object-keys/index.js'),
        hasSymbols =
          'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
        toStr = Object.prototype.toString,
        concat = Array.prototype.concat,
        defineDataProperty = __webpack_require__(
          './node_modules/define-data-property/index.js'
        ),
        supportsDescriptors = __webpack_require__(
          './node_modules/has-property-descriptors/index.js'
        )(),
        defineProperty = function(object, name, value, predicate) {
          if (name in object)
            if (!0 === predicate) {
              if (object[name] === value) return;
            } else if (
              'function' != typeof (fn = predicate) ||
              '[object Function]' !== toStr.call(fn) ||
              !predicate()
            )
              return;
          var fn;
          supportsDescriptors
            ? defineDataProperty(object, name, value, !0)
            : defineDataProperty(object, name, value);
        },
        defineProperties = function(object, map) {
          var predicates = arguments.length > 2 ? arguments[2] : {},
            props = keys(map);
          hasSymbols &&
            (props = concat.call(props, Object.getOwnPropertySymbols(map)));
          for (var i = 0; i < props.length; i += 1)
            defineProperty(
              object,
              props[i],
              map[props[i]],
              predicates[props[i]]
            );
        };
      (defineProperties.supportsDescriptors = !!supportsDescriptors),
        (module.exports = defineProperties);
    },
    './node_modules/deep-equal/node_modules/is-date-object/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var getDay = Date.prototype.getDay,
        toStr = Object.prototype.toString,
        hasToStringTag = __webpack_require__(
          './node_modules/has-tostringtag/shams.js'
        )();
      module.exports = function isDateObject(value) {
        return (
          'object' == typeof value &&
          null !== value &&
          (hasToStringTag
            ? (function tryDateGetDayCall(value) {
                try {
                  return getDay.call(value), !0;
                } catch (e) {
                  return !1;
                }
              })(value)
            : '[object Date]' === toStr.call(value))
        );
      };
    },
    './node_modules/deep-equal/node_modules/is-regex/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var has,
        $exec,
        isRegexMarker,
        badStringifier,
        callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        hasToStringTag = __webpack_require__(
          './node_modules/has-tostringtag/shams.js'
        )();
      if (hasToStringTag) {
        (has = callBound('Object.prototype.hasOwnProperty')),
          ($exec = callBound('RegExp.prototype.exec')),
          (isRegexMarker = {});
        var throwRegexMarker = function() {
          throw isRegexMarker;
        };
        (badStringifier = {
          toString: throwRegexMarker,
          valueOf: throwRegexMarker,
        }),
          'symbol' == typeof Symbol.toPrimitive &&
            (badStringifier[Symbol.toPrimitive] = throwRegexMarker);
      }
      var $toString = callBound('Object.prototype.toString'),
        gOPD = Object.getOwnPropertyDescriptor;
      module.exports = hasToStringTag
        ? function isRegex(value) {
            if (!value || 'object' != typeof value) return !1;
            var descriptor = gOPD(value, 'lastIndex');
            if (!(descriptor && has(descriptor, 'value'))) return !1;
            try {
              $exec(value, badStringifier);
            } catch (e) {
              return e === isRegexMarker;
            }
          }
        : function isRegex(value) {
            return (
              !(
                !value ||
                ('object' != typeof value && 'function' != typeof value)
              ) && '[object RegExp]' === $toString(value)
            );
          };
    },
    './node_modules/deep-equal/node_modules/isarray/index.js': function(
      module
    ) {
      var toString = {}.toString;
      module.exports =
        Array.isArray ||
        function(arr) {
          return '[object Array]' == toString.call(arr);
        };
    },
    './node_modules/deep-equal/node_modules/object.assign/implementation.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var objectKeys = __webpack_require__(
          './node_modules/object-keys/index.js'
        ),
        hasSymbols = __webpack_require__(
          './node_modules/has-symbols/shams.js'
        )(),
        callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        toObject = Object,
        $push = callBound('Array.prototype.push'),
        $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable'),
        originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
      module.exports = function assign(target, source1) {
        if (null == target) throw new TypeError('target must be an object');
        var to = toObject(target);
        if (1 === arguments.length) return to;
        for (var s = 1; s < arguments.length; ++s) {
          var from = toObject(arguments[s]),
            keys = objectKeys(from),
            getSymbols =
              hasSymbols &&
              (Object.getOwnPropertySymbols || originalGetSymbols);
          if (getSymbols)
            for (var syms = getSymbols(from), j = 0; j < syms.length; ++j) {
              var key = syms[j];
              $propIsEnumerable(from, key) && $push(keys, key);
            }
          for (var i = 0; i < keys.length; ++i) {
            var nextKey = keys[i];
            if ($propIsEnumerable(from, nextKey)) {
              var propValue = from[nextKey];
              to[nextKey] = propValue;
            }
          }
        }
        return to;
      };
    },
    './node_modules/deep-equal/node_modules/object.assign/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var defineProperties = __webpack_require__(
          './node_modules/deep-equal/node_modules/define-properties/index.js'
        ),
        callBind = __webpack_require__('./node_modules/call-bind/index.js'),
        implementation = __webpack_require__(
          './node_modules/deep-equal/node_modules/object.assign/implementation.js'
        ),
        getPolyfill = __webpack_require__(
          './node_modules/deep-equal/node_modules/object.assign/polyfill.js'
        ),
        shim = __webpack_require__(
          './node_modules/deep-equal/node_modules/object.assign/shim.js'
        ),
        polyfill = callBind.apply(getPolyfill()),
        bound = function assign(target, source1) {
          return polyfill(Object, arguments);
        };
      defineProperties(bound, {
        getPolyfill: getPolyfill,
        implementation: implementation,
        shim: shim,
      }),
        (module.exports = bound);
    },
    './node_modules/deep-equal/node_modules/object.assign/polyfill.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var implementation = __webpack_require__(
        './node_modules/deep-equal/node_modules/object.assign/implementation.js'
      );
      module.exports = function getPolyfill() {
        return Object.assign
          ? (function() {
              if (!Object.assign) return !1;
              for (
                var str = 'abcdefghijklmnopqrst',
                  letters = str.split(''),
                  map = {},
                  i = 0;
                i < letters.length;
                ++i
              )
                map[letters[i]] = letters[i];
              var obj = Object.assign({}, map),
                actual = '';
              for (var k in obj) actual += k;
              return str !== actual;
            })() ||
            (function() {
              if (!Object.assign || !Object.preventExtensions) return !1;
              var thrower = Object.preventExtensions({ 1: 2 });
              try {
                Object.assign(thrower, 'xy');
              } catch (e) {
                return 'y' === thrower[1];
              }
              return !1;
            })()
            ? implementation
            : Object.assign
          : implementation;
      };
    },
    './node_modules/deep-equal/node_modules/object.assign/shim.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var define = __webpack_require__(
          './node_modules/deep-equal/node_modules/define-properties/index.js'
        ),
        getPolyfill = __webpack_require__(
          './node_modules/deep-equal/node_modules/object.assign/polyfill.js'
        );
      module.exports = function shimAssign() {
        var polyfill = getPolyfill();
        return (
          define(Object, { assign: polyfill }, {
            assign: function() {
              return Object.assign !== polyfill;
            },
          }),
          polyfill
        );
      };
    },
    './node_modules/es-get-iterator/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var process = __webpack_require__('./node_modules/process/browser.js'),
        isArguments = __webpack_require__(
          './node_modules/is-arguments/index.js'
        ),
        getStopIterationIterator = __webpack_require__(
          './node_modules/stop-iteration-iterator/index.js'
        );
      if (
        __webpack_require__('./node_modules/has-symbols/index.js')() ||
        __webpack_require__('./node_modules/has-symbols/shams.js')()
      ) {
        var $iterator = Symbol.iterator;
        module.exports = function getIterator(iterable) {
          return null != iterable && void 0 !== iterable[$iterator]
            ? iterable[$iterator]()
            : isArguments(iterable)
              ? Array.prototype[$iterator].call(iterable)
              : void 0;
        };
      } else {
        var isArray = __webpack_require__(
            './node_modules/es-get-iterator/node_modules/isarray/index.js'
          ),
          isString = __webpack_require__('./node_modules/is-string/index.js'),
          GetIntrinsic = __webpack_require__(
            './node_modules/get-intrinsic/index.js'
          ),
          $Map = GetIntrinsic('%Map%', !0),
          $Set = GetIntrinsic('%Set%', !0),
          callBound = __webpack_require__(
            './node_modules/call-bind/callBound.js'
          ),
          $arrayPush = callBound('Array.prototype.push'),
          $charCodeAt = callBound('String.prototype.charCodeAt'),
          $stringSlice = callBound('String.prototype.slice'),
          getArrayIterator = function getArrayIterator(arraylike) {
            var i = 0;
            return {
              next: function next() {
                var value,
                  done = i >= arraylike.length;
                return (
                  done || ((value = arraylike[i]), (i += 1)),
                  { done: done, value: value }
                );
              },
            };
          },
          getNonCollectionIterator = function getNonCollectionIterator(
            iterable,
            noPrimordialCollections
          ) {
            if (isArray(iterable) || isArguments(iterable))
              return getArrayIterator(iterable);
            if (isString(iterable)) {
              var i = 0;
              return {
                next: function next() {
                  var nextIndex = (function advanceStringIndex(S, index) {
                      if (index + 1 >= S.length) return index + 1;
                      var first = $charCodeAt(S, index);
                      if (first < 55296 || first > 56319) return index + 1;
                      var second = $charCodeAt(S, index + 1);
                      return second < 56320 || second > 57343
                        ? index + 1
                        : index + 2;
                    })(iterable, i),
                    value = $stringSlice(iterable, i, nextIndex);
                  return (
                    (i = nextIndex),
                    { done: nextIndex > iterable.length, value: value }
                  );
                },
              };
            }
            return noPrimordialCollections &&
              void 0 !== iterable['_es6-shim iterator_']
              ? iterable['_es6-shim iterator_']()
              : void 0;
          };
        if ($Map || $Set) {
          var isMap = __webpack_require__('./node_modules/is-map/index.js'),
            isSet = __webpack_require__('./node_modules/is-set/index.js'),
            $mapForEach = callBound('Map.prototype.forEach', !0),
            $setForEach = callBound('Set.prototype.forEach', !0);
          if (void 0 === process || !process.versions || !process.versions.node)
            var $mapIterator = callBound('Map.prototype.iterator', !0),
              $setIterator = callBound('Set.prototype.iterator', !0);
          var $mapAtAtIterator =
              callBound('Map.prototype.@@iterator', !0) ||
              callBound('Map.prototype._es6-shim iterator_', !0),
            $setAtAtIterator =
              callBound('Set.prototype.@@iterator', !0) ||
              callBound('Set.prototype._es6-shim iterator_', !0);
          module.exports = function getIterator(iterable) {
            return (
              (function getCollectionIterator(iterable) {
                if (isMap(iterable)) {
                  if ($mapIterator)
                    return getStopIterationIterator($mapIterator(iterable));
                  if ($mapAtAtIterator) return $mapAtAtIterator(iterable);
                  if ($mapForEach) {
                    var entries = [];
                    return (
                      $mapForEach(iterable, function(v, k) {
                        $arrayPush(entries, [k, v]);
                      }),
                      getArrayIterator(entries)
                    );
                  }
                }
                if (isSet(iterable)) {
                  if ($setIterator)
                    return getStopIterationIterator($setIterator(iterable));
                  if ($setAtAtIterator) return $setAtAtIterator(iterable);
                  if ($setForEach) {
                    var values = [];
                    return (
                      $setForEach(iterable, function(v) {
                        $arrayPush(values, v);
                      }),
                      getArrayIterator(values)
                    );
                  }
                }
              })(iterable) || getNonCollectionIterator(iterable)
            );
          };
        } else
          module.exports = function getIterator(iterable) {
            if (null != iterable) return getNonCollectionIterator(iterable, !0);
          };
      }
    },
    './node_modules/es-get-iterator/node_modules/isarray/index.js': function(
      module
    ) {
      var toString = {}.toString;
      module.exports =
        Array.isArray ||
        function(arr) {
          return '[object Array]' == toString.call(arr);
        };
    },
    './node_modules/functions-have-names/index.js': function(module) {
      'use strict';
      var functionsHaveNames = function functionsHaveNames() {
          return 'string' == typeof function f() {}.name;
        },
        gOPD = Object.getOwnPropertyDescriptor;
      if (gOPD)
        try {
          gOPD([], 'length');
        } catch (e) {
          gOPD = null;
        }
      functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
        if (!functionsHaveNames() || !gOPD) return !1;
        var desc = gOPD(function() {}, 'name');
        return !!desc && !!desc.configurable;
      };
      var $bind = Function.prototype.bind;
      (functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
        return (
          functionsHaveNames() &&
          'function' == typeof $bind &&
          '' !== function f() {}.bind().name
        );
      }),
        (module.exports = functionsHaveNames);
    },
    './node_modules/has-bigints/index.js': function(module) {
      'use strict';
      var $BigInt = 'undefined' != typeof BigInt && BigInt;
      module.exports = function hasNativeBigInts() {
        return (
          'function' == typeof $BigInt &&
          'function' == typeof BigInt &&
          'bigint' == typeof $BigInt(42) &&
          'bigint' == typeof BigInt(42)
        );
      };
    },
    './node_modules/internal-slot/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var GetIntrinsic = __webpack_require__(
          './node_modules/get-intrinsic/index.js'
        ),
        has = __webpack_require__('./node_modules/has/src/index.js'),
        channel = __webpack_require__('./node_modules/side-channel/index.js')(),
        $TypeError = GetIntrinsic('%TypeError%'),
        SLOT = {
          assert: function(O, slot) {
            if (!O || ('object' != typeof O && 'function' != typeof O))
              throw new $TypeError('`O` is not an object');
            if ('string' != typeof slot)
              throw new $TypeError('`slot` must be a string');
            if ((channel.assert(O), !SLOT.has(O, slot)))
              throw new $TypeError('`' + slot + '` is not present on `O`');
          },
          get: function(O, slot) {
            if (!O || ('object' != typeof O && 'function' != typeof O))
              throw new $TypeError('`O` is not an object');
            if ('string' != typeof slot)
              throw new $TypeError('`slot` must be a string');
            var slots = channel.get(O);
            return slots && slots['$' + slot];
          },
          has: function(O, slot) {
            if (!O || ('object' != typeof O && 'function' != typeof O))
              throw new $TypeError('`O` is not an object');
            if ('string' != typeof slot)
              throw new $TypeError('`slot` must be a string');
            var slots = channel.get(O);
            return !!slots && has(slots, '$' + slot);
          },
          set: function(O, slot, V) {
            if (!O || ('object' != typeof O && 'function' != typeof O))
              throw new $TypeError('`O` is not an object');
            if ('string' != typeof slot)
              throw new $TypeError('`slot` must be a string');
            var slots = channel.get(O);
            slots || ((slots = {}), channel.set(O, slots)),
              (slots['$' + slot] = V);
          },
        };
      Object.freeze && Object.freeze(SLOT), (module.exports = SLOT);
    },
    './node_modules/is-array-buffer/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var callBind = __webpack_require__('./node_modules/call-bind/index.js'),
        callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        GetIntrinsic = __webpack_require__(
          './node_modules/get-intrinsic/index.js'
        ),
        isTypedArray = __webpack_require__(
          './node_modules/is-typed-array/index.js'
        ),
        $ArrayBuffer = GetIntrinsic('ArrayBuffer', !0),
        $Float32Array = GetIntrinsic('Float32Array', !0),
        $byteLength = callBound('ArrayBuffer.prototype.byteLength', !0),
        abSlice = $ArrayBuffer && !$byteLength && new $ArrayBuffer().slice,
        $abSlice = abSlice && callBind(abSlice);
      module.exports =
        $byteLength || $abSlice
          ? function isArrayBuffer(obj) {
              if (!obj || 'object' != typeof obj) return !1;
              try {
                return $byteLength ? $byteLength(obj) : $abSlice(obj, 0), !0;
              } catch (e) {
                return !1;
              }
            }
          : $Float32Array
            ? function IsArrayBuffer(obj) {
                try {
                  return (
                    new $Float32Array(obj).buffer === obj && !isTypedArray(obj)
                  );
                } catch (e) {
                  return 'object' == typeof obj && 'RangeError' === e.name;
                }
              }
            : function isArrayBuffer(obj) {
                return !1;
              };
    },
    './node_modules/is-bigint/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      if (__webpack_require__('./node_modules/has-bigints/index.js')()) {
        var bigIntValueOf = BigInt.prototype.valueOf;
        module.exports = function isBigInt(value) {
          return (
            null != value &&
            'boolean' != typeof value &&
            'string' != typeof value &&
            'number' != typeof value &&
            'symbol' != typeof value &&
            'function' != typeof value &&
            ('bigint' == typeof value ||
              (function tryBigIntObject(value) {
                try {
                  return bigIntValueOf.call(value), !0;
                } catch (e) {}
                return !1;
              })(value))
          );
        };
      } else
        module.exports = function isBigInt(value) {
          return !1;
        };
    },
    './node_modules/is-boolean-object/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        $boolToStr = callBound('Boolean.prototype.toString'),
        $toString = callBound('Object.prototype.toString'),
        hasToStringTag = __webpack_require__(
          './node_modules/has-tostringtag/shams.js'
        )();
      module.exports = function isBoolean(value) {
        return (
          'boolean' == typeof value ||
          (null !== value &&
            'object' == typeof value &&
            (hasToStringTag && Symbol.toStringTag in value
              ? (function booleanBrandCheck(value) {
                  try {
                    return $boolToStr(value), !0;
                  } catch (e) {
                    return !1;
                  }
                })(value)
              : '[object Boolean]' === $toString(value)))
        );
      };
    },
    './node_modules/is-map/index.js': function(module) {
      'use strict';
      var exported,
        $Map = 'function' == typeof Map && Map.prototype ? Map : null,
        $Set = 'function' == typeof Set && Set.prototype ? Set : null;
      $Map ||
        (exported = function isMap(x) {
          return !1;
        });
      var $mapHas = $Map ? Map.prototype.has : null,
        $setHas = $Set ? Set.prototype.has : null;
      exported ||
        $mapHas ||
        (exported = function isMap(x) {
          return !1;
        }),
        (module.exports =
          exported ||
          function isMap(x) {
            if (!x || 'object' != typeof x) return !1;
            try {
              if (($mapHas.call(x), $setHas))
                try {
                  $setHas.call(x);
                } catch (e) {
                  return !0;
                }
              return x instanceof $Map;
            } catch (e) {}
            return !1;
          });
    },
    './node_modules/is-number-object/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var numToStr = Number.prototype.toString,
        toStr = Object.prototype.toString,
        hasToStringTag = __webpack_require__(
          './node_modules/has-tostringtag/shams.js'
        )();
      module.exports = function isNumberObject(value) {
        return (
          'number' == typeof value ||
          ('object' == typeof value &&
            (hasToStringTag
              ? (function tryNumberObject(value) {
                  try {
                    return numToStr.call(value), !0;
                  } catch (e) {
                    return !1;
                  }
                })(value)
              : '[object Number]' === toStr.call(value)))
        );
      };
    },
    './node_modules/is-set/index.js': function(module) {
      'use strict';
      var exported,
        $Map = 'function' == typeof Map && Map.prototype ? Map : null,
        $Set = 'function' == typeof Set && Set.prototype ? Set : null;
      $Set ||
        (exported = function isSet(x) {
          return !1;
        });
      var $mapHas = $Map ? Map.prototype.has : null,
        $setHas = $Set ? Set.prototype.has : null;
      exported ||
        $setHas ||
        (exported = function isSet(x) {
          return !1;
        }),
        (module.exports =
          exported ||
          function isSet(x) {
            if (!x || 'object' != typeof x) return !1;
            try {
              if (($setHas.call(x), $mapHas))
                try {
                  $mapHas.call(x);
                } catch (e) {
                  return !0;
                }
              return x instanceof $Set;
            } catch (e) {}
            return !1;
          });
    },
    './node_modules/is-shared-array-buffer/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var $byteLength = __webpack_require__(
        './node_modules/call-bind/callBound.js'
      )('SharedArrayBuffer.prototype.byteLength', !0);
      module.exports = $byteLength
        ? function isSharedArrayBuffer(obj) {
            if (!obj || 'object' != typeof obj) return !1;
            try {
              return $byteLength(obj), !0;
            } catch (e) {
              return !1;
            }
          }
        : function isSharedArrayBuffer(obj) {
            return !1;
          };
    },
    './node_modules/is-string/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var strValue = String.prototype.valueOf,
        toStr = Object.prototype.toString,
        hasToStringTag = __webpack_require__(
          './node_modules/has-tostringtag/shams.js'
        )();
      module.exports = function isString(value) {
        return (
          'string' == typeof value ||
          ('object' == typeof value &&
            (hasToStringTag
              ? (function tryStringObject(value) {
                  try {
                    return strValue.call(value), !0;
                  } catch (e) {
                    return !1;
                  }
                })(value)
              : '[object String]' === toStr.call(value)))
        );
      };
    },
    './node_modules/is-weakmap/index.js': function(module) {
      'use strict';
      var exported,
        $WeakMap =
          'function' == typeof WeakMap && WeakMap.prototype ? WeakMap : null,
        $WeakSet =
          'function' == typeof WeakSet && WeakSet.prototype ? WeakSet : null;
      $WeakMap ||
        (exported = function isWeakMap(x) {
          return !1;
        });
      var $mapHas = $WeakMap ? $WeakMap.prototype.has : null,
        $setHas = $WeakSet ? $WeakSet.prototype.has : null;
      exported ||
        $mapHas ||
        (exported = function isWeakMap(x) {
          return !1;
        }),
        (module.exports =
          exported ||
          function isWeakMap(x) {
            if (!x || 'object' != typeof x) return !1;
            try {
              if (($mapHas.call(x, $mapHas), $setHas))
                try {
                  $setHas.call(x, $setHas);
                } catch (e) {
                  return !0;
                }
              return x instanceof $WeakMap;
            } catch (e) {}
            return !1;
          });
    },
    './node_modules/is-weakset/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var GetIntrinsic = __webpack_require__(
          './node_modules/get-intrinsic/index.js'
        ),
        callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        $WeakSet = GetIntrinsic('%WeakSet%', !0),
        $setHas = callBound('WeakSet.prototype.has', !0);
      if ($setHas) {
        var $mapHas = callBound('WeakMap.prototype.has', !0);
        module.exports = function isWeakSet(x) {
          if (!x || 'object' != typeof x) return !1;
          try {
            if (($setHas(x, $setHas), $mapHas))
              try {
                $mapHas(x, $mapHas);
              } catch (e) {
                return !0;
              }
            return x instanceof $WeakSet;
          } catch (e) {}
          return !1;
        };
      } else
        module.exports = function isWeakSet(x) {
          return !1;
        };
    },
    './node_modules/lz-string/libs/lz-string.js': function(
      module,
      exports,
      __webpack_require__
    ) {
      var __WEBPACK_AMD_DEFINE_RESULT__,
        LZString = (function() {
          var f = String.fromCharCode,
            keyStrBase64 =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            keyStrUriSafe =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            baseReverseDic = {};
          function getBaseValue(alphabet, character) {
            if (!baseReverseDic[alphabet]) {
              baseReverseDic[alphabet] = {};
              for (var i = 0; i < alphabet.length; i++)
                baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
            return baseReverseDic[alphabet][character];
          }
          var LZString = {
            compressToBase64: function(input) {
              if (null == input) return '';
              var res = LZString._compress(input, 6, function(a) {
                return keyStrBase64.charAt(a);
              });
              switch (res.length % 4) {
                default:
                case 0:
                  return res;
                case 1:
                  return res + '===';
                case 2:
                  return res + '==';
                case 3:
                  return res + '=';
              }
            },
            decompressFromBase64: function(input) {
              return null == input
                ? ''
                : '' == input
                  ? null
                  : LZString._decompress(input.length, 32, function(index) {
                      return getBaseValue(keyStrBase64, input.charAt(index));
                    });
            },
            compressToUTF16: function(input) {
              return null == input
                ? ''
                : LZString._compress(input, 15, function(a) {
                    return f(a + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function(compressed) {
              return null == compressed
                ? ''
                : '' == compressed
                  ? null
                  : LZString._decompress(compressed.length, 16384, function(
                      index
                    ) {
                      return compressed.charCodeAt(index) - 32;
                    });
            },
            compressToUint8Array: function(uncompressed) {
              for (
                var compressed = LZString.compress(uncompressed),
                  buf = new Uint8Array(2 * compressed.length),
                  i = 0,
                  TotalLen = compressed.length;
                i < TotalLen;
                i++
              ) {
                var current_value = compressed.charCodeAt(i);
                (buf[2 * i] = current_value >>> 8),
                  (buf[2 * i + 1] = current_value % 256);
              }
              return buf;
            },
            decompressFromUint8Array: function(compressed) {
              if (null == compressed) return LZString.decompress(compressed);
              for (
                var buf = new Array(compressed.length / 2),
                  i = 0,
                  TotalLen = buf.length;
                i < TotalLen;
                i++
              )
                buf[i] = 256 * compressed[2 * i] + compressed[2 * i + 1];
              var result = [];
              return (
                buf.forEach(function(c) {
                  result.push(f(c));
                }),
                LZString.decompress(result.join(''))
              );
            },
            compressToEncodedURIComponent: function(input) {
              return null == input
                ? ''
                : LZString._compress(input, 6, function(a) {
                    return keyStrUriSafe.charAt(a);
                  });
            },
            decompressFromEncodedURIComponent: function(input) {
              return null == input
                ? ''
                : '' == input
                  ? null
                  : ((input = input.replace(/ /g, '+')),
                    LZString._decompress(input.length, 32, function(index) {
                      return getBaseValue(keyStrUriSafe, input.charAt(index));
                    }));
            },
            compress: function(uncompressed) {
              return LZString._compress(uncompressed, 16, function(a) {
                return f(a);
              });
            },
            _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
              if (null == uncompressed) return '';
              var i,
                value,
                ii,
                context_dictionary = {},
                context_dictionaryToCreate = {},
                context_c = '',
                context_wc = '',
                context_w = '',
                context_enlargeIn = 2,
                context_dictSize = 3,
                context_numBits = 2,
                context_data = [],
                context_data_val = 0,
                context_data_position = 0;
              for (ii = 0; ii < uncompressed.length; ii += 1)
                if (
                  ((context_c = uncompressed.charAt(ii)),
                  Object.prototype.hasOwnProperty.call(
                    context_dictionary,
                    context_c
                  ) ||
                    ((context_dictionary[context_c] = context_dictSize++),
                    (context_dictionaryToCreate[context_c] = !0)),
                  (context_wc = context_w + context_c),
                  Object.prototype.hasOwnProperty.call(
                    context_dictionary,
                    context_wc
                  ))
                )
                  context_w = context_wc;
                else {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      context_dictionaryToCreate,
                      context_w
                    )
                  ) {
                    if (context_w.charCodeAt(0) < 256) {
                      for (i = 0; i < context_numBits; i++)
                        (context_data_val <<= 1),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++;
                      for (value = context_w.charCodeAt(0), i = 0; i < 8; i++)
                        (context_data_val =
                          (context_data_val << 1) | (1 & value)),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++,
                          (value >>= 1);
                    } else {
                      for (value = 1, i = 0; i < context_numBits; i++)
                        (context_data_val = (context_data_val << 1) | value),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++,
                          (value = 0);
                      for (value = context_w.charCodeAt(0), i = 0; i < 16; i++)
                        (context_data_val =
                          (context_data_val << 1) | (1 & value)),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++,
                          (value >>= 1);
                    }
                    0 == --context_enlargeIn &&
                      ((context_enlargeIn = Math.pow(2, context_numBits)),
                      context_numBits++),
                      delete context_dictionaryToCreate[context_w];
                  } else
                    for (
                      value = context_dictionary[context_w], i = 0;
                      i < context_numBits;
                      i++
                    )
                      (context_data_val =
                        (context_data_val << 1) | (1 & value)),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value >>= 1);
                  0 == --context_enlargeIn &&
                    ((context_enlargeIn = Math.pow(2, context_numBits)),
                    context_numBits++),
                    (context_dictionary[context_wc] = context_dictSize++),
                    (context_w = String(context_c));
                }
              if ('' !== context_w) {
                if (
                  Object.prototype.hasOwnProperty.call(
                    context_dictionaryToCreate,
                    context_w
                  )
                ) {
                  if (context_w.charCodeAt(0) < 256) {
                    for (i = 0; i < context_numBits; i++)
                      (context_data_val <<= 1),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++;
                    for (value = context_w.charCodeAt(0), i = 0; i < 8; i++)
                      (context_data_val =
                        (context_data_val << 1) | (1 & value)),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value >>= 1);
                  } else {
                    for (value = 1, i = 0; i < context_numBits; i++)
                      (context_data_val = (context_data_val << 1) | value),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value = 0);
                    for (value = context_w.charCodeAt(0), i = 0; i < 16; i++)
                      (context_data_val =
                        (context_data_val << 1) | (1 & value)),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value >>= 1);
                  }
                  0 == --context_enlargeIn &&
                    ((context_enlargeIn = Math.pow(2, context_numBits)),
                    context_numBits++),
                    delete context_dictionaryToCreate[context_w];
                } else
                  for (
                    value = context_dictionary[context_w], i = 0;
                    i < context_numBits;
                    i++
                  )
                    (context_data_val = (context_data_val << 1) | (1 & value)),
                      context_data_position == bitsPerChar - 1
                        ? ((context_data_position = 0),
                          context_data.push(getCharFromInt(context_data_val)),
                          (context_data_val = 0))
                        : context_data_position++,
                      (value >>= 1);
                0 == --context_enlargeIn &&
                  ((context_enlargeIn = Math.pow(2, context_numBits)),
                  context_numBits++);
              }
              for (value = 2, i = 0; i < context_numBits; i++)
                (context_data_val = (context_data_val << 1) | (1 & value)),
                  context_data_position == bitsPerChar - 1
                    ? ((context_data_position = 0),
                      context_data.push(getCharFromInt(context_data_val)),
                      (context_data_val = 0))
                    : context_data_position++,
                  (value >>= 1);
              for (;;) {
                if (
                  ((context_data_val <<= 1),
                  context_data_position == bitsPerChar - 1)
                ) {
                  context_data.push(getCharFromInt(context_data_val));
                  break;
                }
                context_data_position++;
              }
              return context_data.join('');
            },
            decompress: function(compressed) {
              return null == compressed
                ? ''
                : '' == compressed
                  ? null
                  : LZString._decompress(compressed.length, 32768, function(
                      index
                    ) {
                      return compressed.charCodeAt(index);
                    });
            },
            _decompress: function(length, resetValue, getNextValue) {
              var i,
                w,
                bits,
                resb,
                maxpower,
                power,
                c,
                dictionary = [],
                enlargeIn = 4,
                dictSize = 4,
                numBits = 3,
                entry = '',
                result = [],
                data = { val: getNextValue(0), position: resetValue, index: 1 };
              for (i = 0; i < 3; i += 1) dictionary[i] = i;
              for (
                bits = 0, maxpower = Math.pow(2, 2), power = 1;
                power != maxpower;

              )
                (resb = data.val & data.position),
                  (data.position >>= 1),
                  0 == data.position &&
                    ((data.position = resetValue),
                    (data.val = getNextValue(data.index++))),
                  (bits |= (resb > 0 ? 1 : 0) * power),
                  (power <<= 1);
              switch (bits) {
                case 0:
                  for (
                    bits = 0, maxpower = Math.pow(2, 8), power = 1;
                    power != maxpower;

                  )
                    (resb = data.val & data.position),
                      (data.position >>= 1),
                      0 == data.position &&
                        ((data.position = resetValue),
                        (data.val = getNextValue(data.index++))),
                      (bits |= (resb > 0 ? 1 : 0) * power),
                      (power <<= 1);
                  c = f(bits);
                  break;
                case 1:
                  for (
                    bits = 0, maxpower = Math.pow(2, 16), power = 1;
                    power != maxpower;

                  )
                    (resb = data.val & data.position),
                      (data.position >>= 1),
                      0 == data.position &&
                        ((data.position = resetValue),
                        (data.val = getNextValue(data.index++))),
                      (bits |= (resb > 0 ? 1 : 0) * power),
                      (power <<= 1);
                  c = f(bits);
                  break;
                case 2:
                  return '';
              }
              for (dictionary[3] = c, w = c, result.push(c); ; ) {
                if (data.index > length) return '';
                for (
                  bits = 0, maxpower = Math.pow(2, numBits), power = 1;
                  power != maxpower;

                )
                  (resb = data.val & data.position),
                    (data.position >>= 1),
                    0 == data.position &&
                      ((data.position = resetValue),
                      (data.val = getNextValue(data.index++))),
                    (bits |= (resb > 0 ? 1 : 0) * power),
                    (power <<= 1);
                switch ((c = bits)) {
                  case 0:
                    for (
                      bits = 0, maxpower = Math.pow(2, 8), power = 1;
                      power != maxpower;

                    )
                      (resb = data.val & data.position),
                        (data.position >>= 1),
                        0 == data.position &&
                          ((data.position = resetValue),
                          (data.val = getNextValue(data.index++))),
                        (bits |= (resb > 0 ? 1 : 0) * power),
                        (power <<= 1);
                    (dictionary[dictSize++] = f(bits)),
                      (c = dictSize - 1),
                      enlargeIn--;
                    break;
                  case 1:
                    for (
                      bits = 0, maxpower = Math.pow(2, 16), power = 1;
                      power != maxpower;

                    )
                      (resb = data.val & data.position),
                        (data.position >>= 1),
                        0 == data.position &&
                          ((data.position = resetValue),
                          (data.val = getNextValue(data.index++))),
                        (bits |= (resb > 0 ? 1 : 0) * power),
                        (power <<= 1);
                    (dictionary[dictSize++] = f(bits)),
                      (c = dictSize - 1),
                      enlargeIn--;
                    break;
                  case 2:
                    return result.join('');
                }
                if (
                  (0 == enlargeIn &&
                    ((enlargeIn = Math.pow(2, numBits)), numBits++),
                  dictionary[c])
                )
                  entry = dictionary[c];
                else {
                  if (c !== dictSize) return null;
                  entry = w + w.charAt(0);
                }
                result.push(entry),
                  (dictionary[dictSize++] = w + entry.charAt(0)),
                  (w = entry),
                  0 == --enlargeIn &&
                    ((enlargeIn = Math.pow(2, numBits)), numBits++);
              }
            },
          };
          return LZString;
        })();
      void 0 ===
        (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
          return LZString;
        }.call(exports, __webpack_require__, exports, module)) ||
        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    },
    './node_modules/object-inspect/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var hasMap = 'function' == typeof Map && Map.prototype,
        mapSizeDescriptor =
          Object.getOwnPropertyDescriptor && hasMap
            ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
            : null,
        mapSize =
          hasMap &&
          mapSizeDescriptor &&
          'function' == typeof mapSizeDescriptor.get
            ? mapSizeDescriptor.get
            : null,
        mapForEach = hasMap && Map.prototype.forEach,
        hasSet = 'function' == typeof Set && Set.prototype,
        setSizeDescriptor =
          Object.getOwnPropertyDescriptor && hasSet
            ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
            : null,
        setSize =
          hasSet &&
          setSizeDescriptor &&
          'function' == typeof setSizeDescriptor.get
            ? setSizeDescriptor.get
            : null,
        setForEach = hasSet && Set.prototype.forEach,
        weakMapHas =
          'function' == typeof WeakMap && WeakMap.prototype
            ? WeakMap.prototype.has
            : null,
        weakSetHas =
          'function' == typeof WeakSet && WeakSet.prototype
            ? WeakSet.prototype.has
            : null,
        weakRefDeref =
          'function' == typeof WeakRef && WeakRef.prototype
            ? WeakRef.prototype.deref
            : null,
        booleanValueOf = Boolean.prototype.valueOf,
        objectToString = Object.prototype.toString,
        functionToString = Function.prototype.toString,
        $match = String.prototype.match,
        $slice = String.prototype.slice,
        $replace = String.prototype.replace,
        $toUpperCase = String.prototype.toUpperCase,
        $toLowerCase = String.prototype.toLowerCase,
        $test = RegExp.prototype.test,
        $concat = Array.prototype.concat,
        $join = Array.prototype.join,
        $arrSlice = Array.prototype.slice,
        $floor = Math.floor,
        bigIntValueOf =
          'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
        gOPS = Object.getOwnPropertySymbols,
        symToString =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? Symbol.prototype.toString
            : null,
        hasShammedSymbols =
          'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
        toStringTag =
          'function' == typeof Symbol &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === hasShammedSymbols || 'symbol')
            ? Symbol.toStringTag
            : null,
        isEnumerable = Object.prototype.propertyIsEnumerable,
        gPO =
          ('function' == typeof Reflect
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function(O) {
                return O.__proto__;
              }
            : null);
      function addNumericSeparator(num, str) {
        if (
          num === 1 / 0 ||
          num === -1 / 0 ||
          num != num ||
          (num && num > -1e3 && num < 1e3) ||
          $test.call(/e/, str)
        )
          return str;
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ('number' == typeof num) {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int),
              dec = $slice.call(str, intStr.length + 1);
            return (
              $replace.call(intStr, sepRegex, '$&_') +
              '.' +
              $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '')
            );
          }
        }
        return $replace.call(str, sepRegex, '$&_');
      }
      var utilInspect = __webpack_require__('?4f7e'),
        inspectCustom = utilInspect.custom,
        inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
      function wrapQuotes(s, defaultStyle, opts) {
        var quoteChar =
          'double' === (opts.quoteStyle || defaultStyle) ? '"' : "'";
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, '&quot;');
      }
      function isArray(obj) {
        return !(
          '[object Array]' !== toStr(obj) ||
          (toStringTag && 'object' == typeof obj && toStringTag in obj)
        );
      }
      function isRegExp(obj) {
        return !(
          '[object RegExp]' !== toStr(obj) ||
          (toStringTag && 'object' == typeof obj && toStringTag in obj)
        );
      }
      function isSymbol(obj) {
        if (hasShammedSymbols)
          return obj && 'object' == typeof obj && obj instanceof Symbol;
        if ('symbol' == typeof obj) return !0;
        if (!obj || 'object' != typeof obj || !symToString) return !1;
        try {
          return symToString.call(obj), !0;
        } catch (e) {}
        return !1;
      }
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (
          has(opts, 'quoteStyle') &&
          'single' !== opts.quoteStyle &&
          'double' !== opts.quoteStyle
        )
          throw new TypeError(
            'option "quoteStyle" must be "single" or "double"'
          );
        if (
          has(opts, 'maxStringLength') &&
          ('number' == typeof opts.maxStringLength
            ? opts.maxStringLength < 0 && opts.maxStringLength !== 1 / 0
            : null !== opts.maxStringLength)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var customInspect = !has(opts, 'customInspect') || opts.customInspect;
        if ('boolean' != typeof customInspect && 'symbol' !== customInspect)
          throw new TypeError(
            'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
          );
        if (
          has(opts, 'indent') &&
          null !== opts.indent &&
          '\t' !== opts.indent &&
          !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
        )
          throw new TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if (
          has(opts, 'numericSeparator') &&
          'boolean' != typeof opts.numericSeparator
        )
          throw new TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var numericSeparator = opts.numericSeparator;
        if (void 0 === obj) return 'undefined';
        if (null === obj) return 'null';
        if ('boolean' == typeof obj) return obj ? 'true' : 'false';
        if ('string' == typeof obj) return inspectString(obj, opts);
        if ('number' == typeof obj) {
          if (0 === obj) return 1 / 0 / obj > 0 ? '0' : '-0';
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if ('bigint' == typeof obj) {
          var bigIntStr = String(obj) + 'n';
          return numericSeparator
            ? addNumericSeparator(obj, bigIntStr)
            : bigIntStr;
        }
        var maxDepth = void 0 === opts.depth ? 5 : opts.depth;
        if (
          (void 0 === depth && (depth = 0),
          depth >= maxDepth && maxDepth > 0 && 'object' == typeof obj)
        )
          return isArray(obj) ? '[Array]' : '[Object]';
        var indent = (function getIndent(opts, depth) {
          var baseIndent;
          if ('\t' === opts.indent) baseIndent = '\t';
          else {
            if (!('number' == typeof opts.indent && opts.indent > 0))
              return null;
            baseIndent = $join.call(Array(opts.indent + 1), ' ');
          }
          return {
            base: baseIndent,
            prev: $join.call(Array(depth + 1), baseIndent),
          };
        })(opts, depth);
        if (void 0 === seen) seen = [];
        else if (indexOf(seen, obj) >= 0) return '[Circular]';
        function inspect(value, from, noIndent) {
          if ((from && (seen = $arrSlice.call(seen)).push(from), noIndent)) {
            var newOpts = { depth: opts.depth };
            return (
              has(opts, 'quoteStyle') && (newOpts.quoteStyle = opts.quoteStyle),
              inspect_(value, newOpts, depth + 1, seen)
            );
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if ('function' == typeof obj && !isRegExp(obj)) {
          var name = (function nameOf(f) {
              if (f.name) return f.name;
              var m = $match.call(
                functionToString.call(f),
                /^function\s*([\w$]+)/
              );
              if (m) return m[1];
              return null;
            })(obj),
            keys = arrObjKeys(obj, inspect);
          return (
            '[Function' +
            (name ? ': ' + name : ' (anonymous)') +
            ']' +
            (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '')
          );
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols
            ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1')
            : symToString.call(obj);
          return 'object' != typeof obj || hasShammedSymbols
            ? symString
            : markBoxed(symString);
        }
        if (
          (function isElement(x) {
            if (!x || 'object' != typeof x) return !1;
            if ('undefined' != typeof HTMLElement && x instanceof HTMLElement)
              return !0;
            return (
              'string' == typeof x.nodeName &&
              'function' == typeof x.getAttribute
            );
          })(obj)
        ) {
          for (
            var s = '<' + $toLowerCase.call(String(obj.nodeName)),
              attrs = obj.attributes || [],
              i = 0;
            i < attrs.length;
            i++
          )
            s +=
              ' ' +
              attrs[i].name +
              '=' +
              wrapQuotes(quote(attrs[i].value), 'double', opts);
          return (
            (s += '>'),
            obj.childNodes && obj.childNodes.length && (s += '...'),
            (s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>')
          );
        }
        if (isArray(obj)) {
          if (0 === obj.length) return '[]';
          var xs = arrObjKeys(obj, inspect);
          return indent &&
            !(function singleLineValues(xs) {
              for (var i = 0; i < xs.length; i++)
                if (indexOf(xs[i], '\n') >= 0) return !1;
              return !0;
            })(xs)
            ? '[' + indentedJoin(xs, indent) + ']'
            : '[ ' + $join.call(xs, ', ') + ' ]';
        }
        if (
          (function isError(obj) {
            return !(
              '[object Error]' !== toStr(obj) ||
              (toStringTag && 'object' == typeof obj && toStringTag in obj)
            );
          })(obj)
        ) {
          var parts = arrObjKeys(obj, inspect);
          return 'cause' in Error.prototype ||
            !('cause' in obj) ||
            isEnumerable.call(obj, 'cause')
            ? 0 === parts.length
              ? '[' + String(obj) + ']'
              : '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }'
            : '{ [' +
                String(obj) +
                '] ' +
                $join.call(
                  $concat.call('[cause]: ' + inspect(obj.cause), parts),
                  ', '
                ) +
                ' }';
        }
        if ('object' == typeof obj && customInspect) {
          if (
            inspectSymbol &&
            'function' == typeof obj[inspectSymbol] &&
            utilInspect
          )
            return utilInspect(obj, { depth: maxDepth - depth });
          if ('symbol' !== customInspect && 'function' == typeof obj.inspect)
            return obj.inspect();
        }
        if (
          (function isMap(x) {
            if (!mapSize || !x || 'object' != typeof x) return !1;
            try {
              mapSize.call(x);
              try {
                setSize.call(x);
              } catch (s) {
                return !0;
              }
              return x instanceof Map;
            } catch (e) {}
            return !1;
          })(obj)
        ) {
          var mapParts = [];
          return (
            mapForEach &&
              mapForEach.call(obj, function(value, key) {
                mapParts.push(
                  inspect(key, obj, !0) + ' => ' + inspect(value, obj)
                );
              }),
            collectionOf('Map', mapSize.call(obj), mapParts, indent)
          );
        }
        if (
          (function isSet(x) {
            if (!setSize || !x || 'object' != typeof x) return !1;
            try {
              setSize.call(x);
              try {
                mapSize.call(x);
              } catch (m) {
                return !0;
              }
              return x instanceof Set;
            } catch (e) {}
            return !1;
          })(obj)
        ) {
          var setParts = [];
          return (
            setForEach &&
              setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
              }),
            collectionOf('Set', setSize.call(obj), setParts, indent)
          );
        }
        if (
          (function isWeakMap(x) {
            if (!weakMapHas || !x || 'object' != typeof x) return !1;
            try {
              weakMapHas.call(x, weakMapHas);
              try {
                weakSetHas.call(x, weakSetHas);
              } catch (s) {
                return !0;
              }
              return x instanceof WeakMap;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return weakCollectionOf('WeakMap');
        if (
          (function isWeakSet(x) {
            if (!weakSetHas || !x || 'object' != typeof x) return !1;
            try {
              weakSetHas.call(x, weakSetHas);
              try {
                weakMapHas.call(x, weakMapHas);
              } catch (s) {
                return !0;
              }
              return x instanceof WeakSet;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return weakCollectionOf('WeakSet');
        if (
          (function isWeakRef(x) {
            if (!weakRefDeref || !x || 'object' != typeof x) return !1;
            try {
              return weakRefDeref.call(x), !0;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return weakCollectionOf('WeakRef');
        if (
          (function isNumber(obj) {
            return !(
              '[object Number]' !== toStr(obj) ||
              (toStringTag && 'object' == typeof obj && toStringTag in obj)
            );
          })(obj)
        )
          return markBoxed(inspect(Number(obj)));
        if (
          (function isBigInt(obj) {
            if (!obj || 'object' != typeof obj || !bigIntValueOf) return !1;
            try {
              return bigIntValueOf.call(obj), !0;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        if (
          (function isBoolean(obj) {
            return !(
              '[object Boolean]' !== toStr(obj) ||
              (toStringTag && 'object' == typeof obj && toStringTag in obj)
            );
          })(obj)
        )
          return markBoxed(booleanValueOf.call(obj));
        if (
          (function isString(obj) {
            return !(
              '[object String]' !== toStr(obj) ||
              (toStringTag && 'object' == typeof obj && toStringTag in obj)
            );
          })(obj)
        )
          return markBoxed(inspect(String(obj)));
        if (
          !(function isDate(obj) {
            return !(
              '[object Date]' !== toStr(obj) ||
              (toStringTag && 'object' == typeof obj && toStringTag in obj)
            );
          })(obj) &&
          !isRegExp(obj)
        ) {
          var ys = arrObjKeys(obj, inspect),
            isPlainObject = gPO
              ? gPO(obj) === Object.prototype
              : obj instanceof Object || obj.constructor === Object,
            protoTag = obj instanceof Object ? '' : 'null prototype',
            stringTag =
              !isPlainObject &&
              toStringTag &&
              Object(obj) === obj &&
              toStringTag in obj
                ? $slice.call(toStr(obj), 8, -1)
                : protoTag
                  ? 'Object'
                  : '',
            tag =
              (isPlainObject || 'function' != typeof obj.constructor
                ? ''
                : obj.constructor.name
                  ? obj.constructor.name + ' '
                  : '') +
              (stringTag || protoTag
                ? '[' +
                  $join.call(
                    $concat.call([], stringTag || [], protoTag || []),
                    ': '
                  ) +
                  '] '
                : '');
          return 0 === ys.length
            ? tag + '{}'
            : indent
              ? tag + '{' + indentedJoin(ys, indent) + '}'
              : tag + '{ ' + $join.call(ys, ', ') + ' }';
        }
        return String(obj);
      };
      var hasOwn =
        Object.prototype.hasOwnProperty ||
        function(key) {
          return key in this;
        };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function indexOf(xs, x) {
        if (xs.indexOf) return xs.indexOf(x);
        for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
        return -1;
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength,
            trailer =
              '... ' +
              remaining +
              ' more character' +
              (remaining > 1 ? 's' : '');
          return (
            inspectString($slice.call(str, 0, opts.maxStringLength), opts) +
            trailer
          );
        }
        return wrapQuotes(
          $replace.call(
            $replace.call(str, /(['\\])/g, '\\$1'),
            /[\x00-\x1f]/g,
            lowbyte
          ),
          'single',
          opts
        );
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0),
          x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
        return x
          ? '\\' + x
          : '\\x' + (n < 16 ? '0' : '') + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return 'Object(' + str + ')';
      }
      function weakCollectionOf(type) {
        return type + ' { ? }';
      }
      function collectionOf(type, size, entries, indent) {
        return (
          type +
          ' (' +
          size +
          ') {' +
          (indent ? indentedJoin(entries, indent) : $join.call(entries, ', ')) +
          '}'
        );
      }
      function indentedJoin(xs, indent) {
        if (0 === xs.length) return '';
        var lineJoiner = '\n' + indent.prev + indent.base;
        return (
          lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev
        );
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray(obj),
          xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++)
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
        var symMap,
          syms = 'function' == typeof gOPS ? gOPS(obj) : [];
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) symMap['$' + syms[k]] = syms[k];
        }
        for (var key in obj)
          has(obj, key) &&
            ((isArr && String(Number(key)) === key && key < obj.length) ||
              (hasShammedSymbols && symMap['$' + key] instanceof Symbol) ||
              ($test.call(/[^\w$]/, key)
                ? xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj))
                : xs.push(key + ': ' + inspect(obj[key], obj))));
        if ('function' == typeof gOPS)
          for (var j = 0; j < syms.length; j++)
            isEnumerable.call(obj, syms[j]) &&
              xs.push(
                '[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj)
              );
        return xs;
      }
    },
    './node_modules/pretty-format/build/collections.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.printIteratorEntries = function printIteratorEntries(
          iterator,
          config,
          indentation,
          depth,
          refs,
          printer,
          separator = ': '
        ) {
          let result = '',
            current = iterator.next();
          if (!current.done) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (; !current.done; ) {
              (result +=
                indentationNext +
                printer(
                  current.value[0],
                  config,
                  indentationNext,
                  depth,
                  refs
                ) +
                separator +
                printer(
                  current.value[1],
                  config,
                  indentationNext,
                  depth,
                  refs
                )),
                (current = iterator.next()),
                current.done
                  ? config.min || (result += ',')
                  : (result += ',' + config.spacingInner);
            }
            result += config.spacingOuter + indentation;
          }
          return result;
        }),
        (exports.printIteratorValues = function printIteratorValues(
          iterator,
          config,
          indentation,
          depth,
          refs,
          printer
        ) {
          let result = '',
            current = iterator.next();
          if (!current.done) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (; !current.done; )
              (result +=
                indentationNext +
                printer(current.value, config, indentationNext, depth, refs)),
                (current = iterator.next()),
                current.done
                  ? config.min || (result += ',')
                  : (result += ',' + config.spacingInner);
            result += config.spacingOuter + indentation;
          }
          return result;
        }),
        (exports.printListItems = function printListItems(
          list,
          config,
          indentation,
          depth,
          refs,
          printer
        ) {
          let result = '';
          if (list.length) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (let i = 0; i < list.length; i++)
              (result += indentationNext),
                i in list &&
                  (result += printer(
                    list[i],
                    config,
                    indentationNext,
                    depth,
                    refs
                  )),
                i < list.length - 1
                  ? (result += ',' + config.spacingInner)
                  : config.min || (result += ',');
            result += config.spacingOuter + indentation;
          }
          return result;
        }),
        (exports.printObjectProperties = function printObjectProperties(
          val,
          config,
          indentation,
          depth,
          refs,
          printer
        ) {
          let result = '';
          const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
          if (keys.length) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              (result +=
                indentationNext +
                printer(key, config, indentationNext, depth, refs) +
                ': ' +
                printer(val[key], config, indentationNext, depth, refs)),
                i < keys.length - 1
                  ? (result += ',' + config.spacingInner)
                  : config.min || (result += ',');
            }
            result += config.spacingOuter + indentation;
          }
          return result;
        });
      const getKeysOfEnumerableProperties = (object, compareKeys) => {
        const keys = Object.keys(object).sort(compareKeys);
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(object).forEach(symbol => {
              Object.getOwnPropertyDescriptor(object, symbol).enumerable &&
                keys.push(symbol);
            }),
          keys
        );
      };
    },
    './node_modules/pretty-format/build/index.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.DEFAULT_OPTIONS = void 0),
        (exports.format = format),
        (exports.plugins = void 0);
      var _ansiStyles = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/node_modules/ansi-styles/index.js'
          )
        ),
        _collections = __webpack_require__(
          './node_modules/pretty-format/build/collections.js'
        ),
        _AsymmetricMatcher = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'
          )
        ),
        _ConvertAnsi = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/ConvertAnsi.js'
          )
        ),
        _DOMCollection = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/DOMCollection.js'
          )
        ),
        _DOMElement = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/DOMElement.js'
          )
        ),
        _Immutable = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/Immutable.js'
          )
        ),
        _ReactElement = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/ReactElement.js'
          )
        ),
        _ReactTestComponent = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/build/plugins/ReactTestComponent.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      const toString = Object.prototype.toString,
        toISOString = Date.prototype.toISOString,
        errorToString = Error.prototype.toString,
        regExpToString = RegExp.prototype.toString,
        getConstructorName = val =>
          ('function' == typeof val.constructor && val.constructor.name) ||
          'Object',
        isWindow = val => 'undefined' != typeof window && val === window,
        SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/,
        NEWLINE_REGEXP = /\n/gi;
      class PrettyFormatPluginError extends Error {
        constructor(message, stack) {
          super(message),
            (this.stack = stack),
            (this.name = this.constructor.name);
        }
      }
      function printFunction(val, printFunctionName) {
        return printFunctionName
          ? '[Function ' + (val.name || 'anonymous') + ']'
          : '[Function]';
      }
      function printSymbol(val) {
        return String(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
      }
      function printError(val) {
        return '[' + errorToString.call(val) + ']';
      }
      function printBasicValue(
        val,
        printFunctionName,
        escapeRegex,
        escapeString
      ) {
        if (!0 === val || !1 === val) return '' + val;
        if (void 0 === val) return 'undefined';
        if (null === val) return 'null';
        const typeOf = typeof val;
        if ('number' === typeOf)
          return (function printNumber(val) {
            return Object.is(val, -0) ? '-0' : String(val);
          })(val);
        if ('bigint' === typeOf)
          return (function printBigInt(val) {
            return String(`${val}n`);
          })(val);
        if ('string' === typeOf)
          return escapeString
            ? '"' + val.replace(/"|\\/g, '\\$&') + '"'
            : '"' + val + '"';
        if ('function' === typeOf) return printFunction(val, printFunctionName);
        if ('symbol' === typeOf) return printSymbol(val);
        const toStringed = toString.call(val);
        return '[object WeakMap]' === toStringed
          ? 'WeakMap {}'
          : '[object WeakSet]' === toStringed
            ? 'WeakSet {}'
            : '[object Function]' === toStringed ||
              '[object GeneratorFunction]' === toStringed
              ? printFunction(val, printFunctionName)
              : '[object Symbol]' === toStringed
                ? printSymbol(val)
                : '[object Date]' === toStringed
                  ? isNaN(+val)
                    ? 'Date { NaN }'
                    : toISOString.call(val)
                  : '[object Error]' === toStringed
                    ? printError(val)
                    : '[object RegExp]' === toStringed
                      ? escapeRegex
                        ? regExpToString
                            .call(val)
                            .replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : regExpToString.call(val)
                      : val instanceof Error
                        ? printError(val)
                        : null;
      }
      function printComplexValue(
        val,
        config,
        indentation,
        depth,
        refs,
        hasCalledToJSON
      ) {
        if (-1 !== refs.indexOf(val)) return '[Circular]';
        (refs = refs.slice()).push(val);
        const hitMaxDepth = ++depth > config.maxDepth,
          min = config.min;
        if (
          config.callToJSON &&
          !hitMaxDepth &&
          val.toJSON &&
          'function' == typeof val.toJSON &&
          !hasCalledToJSON
        )
          return printer(val.toJSON(), config, indentation, depth, refs, !0);
        const toStringed = toString.call(val);
        return '[object Arguments]' === toStringed
          ? hitMaxDepth
            ? '[Arguments]'
            : (min ? '' : 'Arguments ') +
              '[' +
              (0, _collections.printListItems)(
                val,
                config,
                indentation,
                depth,
                refs,
                printer
              ) +
              ']'
          : (function isToStringedArrayType(toStringed) {
              return (
                '[object Array]' === toStringed ||
                '[object ArrayBuffer]' === toStringed ||
                '[object DataView]' === toStringed ||
                '[object Float32Array]' === toStringed ||
                '[object Float64Array]' === toStringed ||
                '[object Int8Array]' === toStringed ||
                '[object Int16Array]' === toStringed ||
                '[object Int32Array]' === toStringed ||
                '[object Uint8Array]' === toStringed ||
                '[object Uint8ClampedArray]' === toStringed ||
                '[object Uint16Array]' === toStringed ||
                '[object Uint32Array]' === toStringed
              );
            })(toStringed)
            ? hitMaxDepth
              ? '[' + val.constructor.name + ']'
              : (min
                  ? ''
                  : config.printBasicPrototype ||
                    'Array' !== val.constructor.name
                    ? val.constructor.name + ' '
                    : '') +
                '[' +
                (0, _collections.printListItems)(
                  val,
                  config,
                  indentation,
                  depth,
                  refs,
                  printer
                ) +
                ']'
            : '[object Map]' === toStringed
              ? hitMaxDepth
                ? '[Map]'
                : 'Map {' +
                  (0, _collections.printIteratorEntries)(
                    val.entries(),
                    config,
                    indentation,
                    depth,
                    refs,
                    printer,
                    ' => '
                  ) +
                  '}'
              : '[object Set]' === toStringed
                ? hitMaxDepth
                  ? '[Set]'
                  : 'Set {' +
                    (0, _collections.printIteratorValues)(
                      val.values(),
                      config,
                      indentation,
                      depth,
                      refs,
                      printer
                    ) +
                    '}'
                : hitMaxDepth || isWindow(val)
                  ? '[' + getConstructorName(val) + ']'
                  : (min
                      ? ''
                      : config.printBasicPrototype ||
                        'Object' !== getConstructorName(val)
                        ? getConstructorName(val) + ' '
                        : '') +
                    '{' +
                    (0, _collections.printObjectProperties)(
                      val,
                      config,
                      indentation,
                      depth,
                      refs,
                      printer
                    ) +
                    '}';
      }
      function printPlugin(plugin, val, config, indentation, depth, refs) {
        let printed;
        try {
          printed = (function isNewPlugin(plugin) {
            return null != plugin.serialize;
          })(plugin)
            ? plugin.serialize(val, config, indentation, depth, refs, printer)
            : plugin.print(
                val,
                valChild => printer(valChild, config, indentation, depth, refs),
                str => {
                  const indentationNext = indentation + config.indent;
                  return (
                    indentationNext +
                    str.replace(NEWLINE_REGEXP, '\n' + indentationNext)
                  );
                },
                {
                  edgeSpacing: config.spacingOuter,
                  min: config.min,
                  spacing: config.spacingInner,
                },
                config.colors
              );
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
        if ('string' != typeof printed)
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
          );
        return printed;
      }
      function findPlugin(plugins, val) {
        for (let p = 0; p < plugins.length; p++)
          try {
            if (plugins[p].test(val)) return plugins[p];
          } catch (error) {
            throw new PrettyFormatPluginError(error.message, error.stack);
          }
        return null;
      }
      function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
        const plugin = findPlugin(config.plugins, val);
        if (null !== plugin)
          return printPlugin(plugin, val, config, indentation, depth, refs);
        const basicResult = printBasicValue(
          val,
          config.printFunctionName,
          config.escapeRegex,
          config.escapeString
        );
        return null !== basicResult
          ? basicResult
          : printComplexValue(
              val,
              config,
              indentation,
              depth,
              refs,
              hasCalledToJSON
            );
      }
      const DEFAULT_THEME = {
          comment: 'gray',
          content: 'reset',
          prop: 'yellow',
          tag: 'cyan',
          value: 'green',
        },
        DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME),
        DEFAULT_OPTIONS = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: DEFAULT_THEME,
        };
      exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
      const getColorsHighlight = options =>
          DEFAULT_THEME_KEYS.reduce((colors, key) => {
            const value =
                options.theme && void 0 !== options.theme[key]
                  ? options.theme[key]
                  : DEFAULT_THEME[key],
              color = value && _ansiStyles.default[value];
            if (
              !color ||
              'string' != typeof color.close ||
              'string' != typeof color.open
            )
              throw new Error(
                `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
              );
            return (colors[key] = color), colors;
          }, Object.create(null)),
        getPrintFunctionName = options =>
          options && void 0 !== options.printFunctionName
            ? options.printFunctionName
            : DEFAULT_OPTIONS.printFunctionName,
        getEscapeRegex = options =>
          options && void 0 !== options.escapeRegex
            ? options.escapeRegex
            : DEFAULT_OPTIONS.escapeRegex,
        getEscapeString = options =>
          options && void 0 !== options.escapeString
            ? options.escapeString
            : DEFAULT_OPTIONS.escapeString,
        getConfig = options => {
          var _options$printBasicPr, indent;
          return {
            callToJSON:
              options && void 0 !== options.callToJSON
                ? options.callToJSON
                : DEFAULT_OPTIONS.callToJSON,
            colors:
              options && options.highlight
                ? getColorsHighlight(options)
                : DEFAULT_THEME_KEYS.reduce(
                    (colors, key) => (
                      (colors[key] = { close: '', open: '' }), colors
                    ),
                    Object.create(null)
                  ),
            compareKeys:
              options && 'function' == typeof options.compareKeys
                ? options.compareKeys
                : DEFAULT_OPTIONS.compareKeys,
            escapeRegex: getEscapeRegex(options),
            escapeString: getEscapeString(options),
            indent:
              options && options.min
                ? ''
                : ((indent =
                    options && void 0 !== options.indent
                      ? options.indent
                      : DEFAULT_OPTIONS.indent),
                  new Array(indent + 1).join(' ')),
            maxDepth:
              options && void 0 !== options.maxDepth
                ? options.maxDepth
                : DEFAULT_OPTIONS.maxDepth,
            min:
              options && void 0 !== options.min
                ? options.min
                : DEFAULT_OPTIONS.min,
            plugins:
              options && void 0 !== options.plugins
                ? options.plugins
                : DEFAULT_OPTIONS.plugins,
            printBasicPrototype:
              null ===
                (_options$printBasicPr =
                  null == options ? void 0 : options.printBasicPrototype) ||
              void 0 === _options$printBasicPr ||
              _options$printBasicPr,
            printFunctionName: getPrintFunctionName(options),
            spacingInner: options && options.min ? ' ' : '\n',
            spacingOuter: options && options.min ? '' : '\n',
          };
        };
      function format(val, options) {
        if (
          options &&
          ((function validateOptions(options) {
            if (
              (Object.keys(options).forEach(key => {
                if (!DEFAULT_OPTIONS.hasOwnProperty(key))
                  throw new Error(`pretty-format: Unknown option "${key}".`);
              }),
              options.min && void 0 !== options.indent && 0 !== options.indent)
            )
              throw new Error(
                'pretty-format: Options "min" and "indent" cannot be used together.'
              );
            if (void 0 !== options.theme) {
              if (null === options.theme)
                throw new Error(
                  'pretty-format: Option "theme" must not be null.'
                );
              if ('object' != typeof options.theme)
                throw new Error(
                  `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
                );
            }
          })(options),
          options.plugins)
        ) {
          const plugin = findPlugin(options.plugins, val);
          if (null !== plugin)
            return printPlugin(plugin, val, getConfig(options), '', 0, []);
        }
        const basicResult = printBasicValue(
          val,
          getPrintFunctionName(options),
          getEscapeRegex(options),
          getEscapeString(options)
        );
        return null !== basicResult
          ? basicResult
          : printComplexValue(val, getConfig(options), '', 0, []);
      }
      const plugins = {
        AsymmetricMatcher: _AsymmetricMatcher.default,
        ConvertAnsi: _ConvertAnsi.default,
        DOMCollection: _DOMCollection.default,
        DOMElement: _DOMElement.default,
        Immutable: _Immutable.default,
        ReactElement: _ReactElement.default,
        ReactTestComponent: _ReactTestComponent.default,
      };
      exports.plugins = plugins;
      var _default = format;
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/AsymmetricMatcher.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _collections = __webpack_require__(
          './node_modules/pretty-format/build/collections.js'
        ),
        global =
          'undefined' != typeof globalThis
            ? globalThis
            : void 0 !== global
              ? global
              : 'undefined' != typeof self
                ? self
                : 'undefined' != typeof window
                  ? window
                  : Function('return this')(),
        Symbol = global['jest-symbol-do-not-touch'] || global.Symbol;
      const asymmetricMatcher =
          'function' == typeof Symbol && Symbol.for
            ? Symbol.for('jest.asymmetricMatcher')
            : 1267621,
        serialize = (val, config, indentation, depth, refs, printer) => {
          const stringedValue = val.toString();
          return 'ArrayContaining' === stringedValue ||
            'ArrayNotContaining' === stringedValue
            ? ++depth > config.maxDepth
              ? '[' + stringedValue + ']'
              : stringedValue +
                ' [' +
                (0, _collections.printListItems)(
                  val.sample,
                  config,
                  indentation,
                  depth,
                  refs,
                  printer
                ) +
                ']'
            : 'ObjectContaining' === stringedValue ||
              'ObjectNotContaining' === stringedValue
              ? ++depth > config.maxDepth
                ? '[' + stringedValue + ']'
                : stringedValue +
                  ' {' +
                  (0, _collections.printObjectProperties)(
                    val.sample,
                    config,
                    indentation,
                    depth,
                    refs,
                    printer
                  ) +
                  '}'
              : 'StringMatching' === stringedValue ||
                'StringNotMatching' === stringedValue ||
                'StringContaining' === stringedValue ||
                'StringNotContaining' === stringedValue
                ? stringedValue +
                  ' ' +
                  printer(val.sample, config, indentation, depth, refs)
                : val.toAsymmetricMatcher();
        };
      exports.serialize = serialize;
      const test = val => val && val.$$typeof === asymmetricMatcher;
      exports.test = test;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/ConvertAnsi.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _ansiRegex = _interopRequireDefault(
          __webpack_require__('./node_modules/ansi-regex/index.js')
        ),
        _ansiStyles = _interopRequireDefault(
          __webpack_require__(
            './node_modules/pretty-format/node_modules/ansi-styles/index.js'
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      const test = val =>
        'string' == typeof val && !!val.match((0, _ansiRegex.default)());
      exports.test = test;
      const serialize = (val, config, indentation, depth, refs, printer) =>
        printer(
          val.replace((0, _ansiRegex.default)(), match => {
            switch (match) {
              case _ansiStyles.default.red.close:
              case _ansiStyles.default.green.close:
              case _ansiStyles.default.cyan.close:
              case _ansiStyles.default.gray.close:
              case _ansiStyles.default.white.close:
              case _ansiStyles.default.yellow.close:
              case _ansiStyles.default.bgRed.close:
              case _ansiStyles.default.bgGreen.close:
              case _ansiStyles.default.bgYellow.close:
              case _ansiStyles.default.inverse.close:
              case _ansiStyles.default.dim.close:
              case _ansiStyles.default.bold.close:
              case _ansiStyles.default.reset.open:
              case _ansiStyles.default.reset.close:
                return '</>';
              case _ansiStyles.default.red.open:
                return '<red>';
              case _ansiStyles.default.green.open:
                return '<green>';
              case _ansiStyles.default.cyan.open:
                return '<cyan>';
              case _ansiStyles.default.gray.open:
                return '<gray>';
              case _ansiStyles.default.white.open:
                return '<white>';
              case _ansiStyles.default.yellow.open:
                return '<yellow>';
              case _ansiStyles.default.bgRed.open:
                return '<bgRed>';
              case _ansiStyles.default.bgGreen.open:
                return '<bgGreen>';
              case _ansiStyles.default.bgYellow.open:
                return '<bgYellow>';
              case _ansiStyles.default.inverse.open:
                return '<inverse>';
              case _ansiStyles.default.dim.open:
                return '<dim>';
              case _ansiStyles.default.bold.open:
                return '<bold>';
              default:
                return '';
            }
          }),
          config,
          indentation,
          depth,
          refs
        );
      exports.serialize = serialize;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/DOMCollection.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _collections = __webpack_require__(
        './node_modules/pretty-format/build/collections.js'
      );
      const OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap'],
        ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/,
        test = val => {
          return (
            val &&
            val.constructor &&
            !!val.constructor.name &&
            ((name = val.constructor.name),
            -1 !== OBJECT_NAMES.indexOf(name) || ARRAY_REGEXP.test(name))
          );
          var name;
        };
      exports.test = test;
      const serialize = (
        collection,
        config,
        indentation,
        depth,
        refs,
        printer
      ) => {
        const name = collection.constructor.name;
        return ++depth > config.maxDepth
          ? '[' + name + ']'
          : (config.min ? '' : name + ' ') +
              (-1 !== OBJECT_NAMES.indexOf(name)
                ? '{' +
                  (0, _collections.printObjectProperties)(
                    (collection =>
                      'NamedNodeMap' === collection.constructor.name)(
                      collection
                    )
                      ? Array.from(collection).reduce(
                          (props, attribute) => (
                            (props[attribute.name] = attribute.value), props
                          ),
                          {}
                        )
                      : { ...collection },
                    config,
                    indentation,
                    depth,
                    refs,
                    printer
                  ) +
                  '}'
                : '[' +
                  (0, _collections.printListItems)(
                    Array.from(collection),
                    config,
                    indentation,
                    depth,
                    refs,
                    printer
                  ) +
                  ']');
      };
      exports.serialize = serialize;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/DOMElement.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _markup = __webpack_require__(
        './node_modules/pretty-format/build/plugins/lib/markup.js'
      );
      const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/,
        test = val => {
          var _val$constructor;
          return (
            (null == val ||
            null === (_val$constructor = val.constructor) ||
            void 0 === _val$constructor
              ? void 0
              : _val$constructor.name) &&
            (val => {
              const constructorName = val.constructor.name,
                { nodeType: nodeType, tagName: tagName } = val,
                isCustomElement =
                  ('string' == typeof tagName && tagName.includes('-')) ||
                  (val => {
                    try {
                      return (
                        'function' == typeof val.hasAttribute &&
                        val.hasAttribute('is')
                      );
                    } catch {
                      return !1;
                    }
                  })(val);
              return (
                (1 === nodeType &&
                  (ELEMENT_REGEXP.test(constructorName) || isCustomElement)) ||
                (3 === nodeType && 'Text' === constructorName) ||
                (8 === nodeType && 'Comment' === constructorName) ||
                (11 === nodeType && 'DocumentFragment' === constructorName)
              );
            })(val)
          );
        };
      function nodeIsFragment(node) {
        return 11 === node.nodeType;
      }
      exports.test = test;
      const serialize = (node, config, indentation, depth, refs, printer) => {
        if (
          (function nodeIsText(node) {
            return 3 === node.nodeType;
          })(node)
        )
          return (0, _markup.printText)(node.data, config);
        if (
          (function nodeIsComment(node) {
            return 8 === node.nodeType;
          })(node)
        )
          return (0, _markup.printComment)(node.data, config);
        const type = nodeIsFragment(node)
          ? 'DocumentFragment'
          : node.tagName.toLowerCase();
        return ++depth > config.maxDepth
          ? (0, _markup.printElementAsLeaf)(type, config)
          : (0, _markup.printElement)(
              type,
              (0, _markup.printProps)(
                nodeIsFragment(node)
                  ? []
                  : Array.from(node.attributes)
                      .map(attr => attr.name)
                      .sort(),
                nodeIsFragment(node)
                  ? {}
                  : Array.from(node.attributes).reduce(
                      (props, attribute) => (
                        (props[attribute.name] = attribute.value), props
                      ),
                      {}
                    ),
                config,
                indentation + config.indent,
                depth,
                refs,
                printer
              ),
              (0, _markup.printChildren)(
                Array.prototype.slice.call(node.childNodes || node.children),
                config,
                indentation + config.indent,
                depth,
                refs,
                printer
              ),
              config,
              indentation
            );
      };
      exports.serialize = serialize;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/Immutable.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _collections = __webpack_require__(
        './node_modules/pretty-format/build/collections.js'
      );
      const getImmutableName = name => 'Immutable.' + name,
        printAsLeaf = name => '[' + name + ']';
      const printImmutableValues = (
          val,
          config,
          indentation,
          depth,
          refs,
          printer,
          type
        ) =>
          ++depth > config.maxDepth
            ? printAsLeaf(getImmutableName(type))
            : getImmutableName(type) +
              ' [' +
              (0, _collections.printIteratorValues)(
                val.values(),
                config,
                indentation,
                depth,
                refs,
                printer
              ) +
              ']',
        serialize = (val, config, indentation, depth, refs, printer) =>
          val['@@__IMMUTABLE_MAP__@@']
            ? ((val, config, indentation, depth, refs, printer, type) =>
                ++depth > config.maxDepth
                  ? printAsLeaf(getImmutableName(type))
                  : getImmutableName(type) +
                    ' {' +
                    (0, _collections.printIteratorEntries)(
                      val.entries(),
                      config,
                      indentation,
                      depth,
                      refs,
                      printer
                    ) +
                    '}')(
                val,
                config,
                indentation,
                depth,
                refs,
                printer,
                val['@@__IMMUTABLE_ORDERED__@@'] ? 'OrderedMap' : 'Map'
              )
            : val['@@__IMMUTABLE_LIST__@@']
              ? printImmutableValues(
                  val,
                  config,
                  indentation,
                  depth,
                  refs,
                  printer,
                  'List'
                )
              : val['@@__IMMUTABLE_SET__@@']
                ? printImmutableValues(
                    val,
                    config,
                    indentation,
                    depth,
                    refs,
                    printer,
                    val['@@__IMMUTABLE_ORDERED__@@'] ? 'OrderedSet' : 'Set'
                  )
                : val['@@__IMMUTABLE_STACK__@@']
                  ? printImmutableValues(
                      val,
                      config,
                      indentation,
                      depth,
                      refs,
                      printer,
                      'Stack'
                    )
                  : val['@@__IMMUTABLE_SEQ__@@']
                    ? ((val, config, indentation, depth, refs, printer) => {
                        const name = getImmutableName('Seq');
                        return ++depth > config.maxDepth
                          ? printAsLeaf(name)
                          : val['@@__IMMUTABLE_KEYED__@@']
                            ? name +
                              ' {' +
                              (val._iter || val._object
                                ? (0, _collections.printIteratorEntries)(
                                    val.entries(),
                                    config,
                                    indentation,
                                    depth,
                                    refs,
                                    printer
                                  )
                                : '…') +
                              '}'
                            : name +
                              ' [' +
                              (val._iter ||
                              val._array ||
                              val._collection ||
                              val._iterable
                                ? (0, _collections.printIteratorValues)(
                                    val.values(),
                                    config,
                                    indentation,
                                    depth,
                                    refs,
                                    printer
                                  )
                                : '…') +
                              ']';
                      })(val, config, indentation, depth, refs, printer)
                    : ((val, config, indentation, depth, refs, printer) => {
                        const name = getImmutableName(val._name || 'Record');
                        return ++depth > config.maxDepth
                          ? printAsLeaf(name)
                          : name +
                              ' {' +
                              (0, _collections.printIteratorEntries)(
                                (function getRecordEntries(val) {
                                  let i = 0;
                                  return {
                                    next() {
                                      if (i < val._keys.length) {
                                        const key = val._keys[i++];
                                        return {
                                          done: !1,
                                          value: [key, val.get(key)],
                                        };
                                      }
                                      return { done: !0, value: void 0 };
                                    },
                                  };
                                })(val),
                                config,
                                indentation,
                                depth,
                                refs,
                                printer
                              ) +
                              '}';
                      })(val, config, indentation, depth, refs, printer);
      exports.serialize = serialize;
      const test = val =>
        val &&
        (!0 === val['@@__IMMUTABLE_ITERABLE__@@'] ||
          !0 === val['@@__IMMUTABLE_RECORD__@@']);
      exports.test = test;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/ReactElement.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var ReactIs = (function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) return obj;
          if (
            null === obj ||
            ('object' != typeof obj && 'function' != typeof obj)
          )
            return { default: obj };
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) return cache.get(obj);
          var newObj = {},
            hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj)
            if (
              'default' !== key &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              desc && (desc.get || desc.set)
                ? Object.defineProperty(newObj, key, desc)
                : (newObj[key] = obj[key]);
            }
          (newObj.default = obj), cache && cache.set(obj, newObj);
          return newObj;
        })(
          __webpack_require__(
            './node_modules/pretty-format/node_modules/react-is/index.js'
          )
        ),
        _markup = __webpack_require__(
          './node_modules/pretty-format/build/plugins/lib/markup.js'
        );
      function _getRequireWildcardCache(nodeInterop) {
        if ('function' != typeof WeakMap) return null;
        var cacheBabelInterop = new WeakMap(),
          cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop) {
          return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      const getChildren = (arg, children = []) => (
          Array.isArray(arg)
            ? arg.forEach(item => {
                getChildren(item, children);
              })
            : null != arg && !1 !== arg && children.push(arg),
          children
        ),
        getType = element => {
          const type = element.type;
          if ('string' == typeof type) return type;
          if ('function' == typeof type)
            return type.displayName || type.name || 'Unknown';
          if (ReactIs.isFragment(element)) return 'React.Fragment';
          if (ReactIs.isSuspense(element)) return 'React.Suspense';
          if ('object' == typeof type && null !== type) {
            if (ReactIs.isContextProvider(element)) return 'Context.Provider';
            if (ReactIs.isContextConsumer(element)) return 'Context.Consumer';
            if (ReactIs.isForwardRef(element)) {
              if (type.displayName) return type.displayName;
              const functionName =
                type.render.displayName || type.render.name || '';
              return '' !== functionName
                ? 'ForwardRef(' + functionName + ')'
                : 'ForwardRef';
            }
            if (ReactIs.isMemo(element)) {
              const functionName =
                type.displayName ||
                type.type.displayName ||
                type.type.name ||
                '';
              return '' !== functionName
                ? 'Memo(' + functionName + ')'
                : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        serialize = (element, config, indentation, depth, refs, printer) =>
          ++depth > config.maxDepth
            ? (0, _markup.printElementAsLeaf)(getType(element), config)
            : (0, _markup.printElement)(
                getType(element),
                (0, _markup.printProps)(
                  (element => {
                    const { props: props } = element;
                    return Object.keys(props)
                      .filter(
                        key => 'children' !== key && void 0 !== props[key]
                      )
                      .sort();
                  })(element),
                  element.props,
                  config,
                  indentation + config.indent,
                  depth,
                  refs,
                  printer
                ),
                (0, _markup.printChildren)(
                  getChildren(element.props.children),
                  config,
                  indentation + config.indent,
                  depth,
                  refs,
                  printer
                ),
                config,
                indentation
              );
      exports.serialize = serialize;
      const test = val => null != val && ReactIs.isElement(val);
      exports.test = test;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/ReactTestComponent.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _markup = __webpack_require__(
          './node_modules/pretty-format/build/plugins/lib/markup.js'
        ),
        global =
          'undefined' != typeof globalThis
            ? globalThis
            : void 0 !== global
              ? global
              : 'undefined' != typeof self
                ? self
                : 'undefined' != typeof window
                  ? window
                  : Function('return this')(),
        Symbol = global['jest-symbol-do-not-touch'] || global.Symbol;
      const testSymbol =
          'function' == typeof Symbol && Symbol.for
            ? Symbol.for('react.test.json')
            : 245830487,
        serialize = (object, config, indentation, depth, refs, printer) =>
          ++depth > config.maxDepth
            ? (0, _markup.printElementAsLeaf)(object.type, config)
            : (0, _markup.printElement)(
                object.type,
                object.props
                  ? (0, _markup.printProps)(
                      (object => {
                        const { props: props } = object;
                        return props
                          ? Object.keys(props)
                              .filter(key => void 0 !== props[key])
                              .sort()
                          : [];
                      })(object),
                      object.props,
                      config,
                      indentation + config.indent,
                      depth,
                      refs,
                      printer
                    )
                  : '',
                object.children
                  ? (0, _markup.printChildren)(
                      object.children,
                      config,
                      indentation + config.indent,
                      depth,
                      refs,
                      printer
                    )
                  : '',
                config,
                indentation
              );
      exports.serialize = serialize;
      const test = val => val && val.$$typeof === testSymbol;
      exports.test = test;
      var _default = { serialize: serialize, test: test };
      exports.default = _default;
    },
    './node_modules/pretty-format/build/plugins/lib/escapeHTML.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = function escapeHTML(str) {
          return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        });
    },
    './node_modules/pretty-format/build/plugins/lib/markup.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0);
      var _escapeHTML = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          './node_modules/pretty-format/build/plugins/lib/escapeHTML.js'
        )
      );
      exports.printProps = (
        keys,
        props,
        config,
        indentation,
        depth,
        refs,
        printer
      ) => {
        const indentationNext = indentation + config.indent,
          colors = config.colors;
        return keys
          .map(key => {
            const value = props[key];
            let printed = printer(value, config, indentationNext, depth, refs);
            return (
              'string' != typeof value &&
                (-1 !== printed.indexOf('\n') &&
                  (printed =
                    config.spacingOuter +
                    indentationNext +
                    printed +
                    config.spacingOuter +
                    indentation),
                (printed = '{' + printed + '}')),
              config.spacingInner +
                indentation +
                colors.prop.open +
                key +
                colors.prop.close +
                '=' +
                colors.value.open +
                printed +
                colors.value.close
            );
          })
          .join('');
      };
      exports.printChildren = (
        children,
        config,
        indentation,
        depth,
        refs,
        printer
      ) =>
        children
          .map(
            child =>
              config.spacingOuter +
              indentation +
              ('string' == typeof child
                ? printText(child, config)
                : printer(child, config, indentation, depth, refs))
          )
          .join('');
      const printText = (text, config) => {
        const contentColor = config.colors.content;
        return (
          contentColor.open +
          (0, _escapeHTML.default)(text) +
          contentColor.close
        );
      };
      exports.printText = printText;
      exports.printComment = (comment, config) => {
        const commentColor = config.colors.comment;
        return (
          commentColor.open +
          '\x3c!--' +
          (0, _escapeHTML.default)(comment) +
          '--\x3e' +
          commentColor.close
        );
      };
      exports.printElement = (
        type,
        printedProps,
        printedChildren,
        config,
        indentation
      ) => {
        const tagColor = config.colors.tag;
        return (
          tagColor.open +
          '<' +
          type +
          (printedProps &&
            tagColor.close +
              printedProps +
              config.spacingOuter +
              indentation +
              tagColor.open) +
          (printedChildren
            ? '>' +
              tagColor.close +
              printedChildren +
              config.spacingOuter +
              indentation +
              tagColor.open +
              '</' +
              type
            : (printedProps && !config.min ? '' : ' ') + '/') +
          '>' +
          tagColor.close
        );
      };
      exports.printElementAsLeaf = (type, config) => {
        const tagColor = config.colors.tag;
        return (
          tagColor.open +
          '<' +
          type +
          tagColor.close +
          ' …' +
          tagColor.open +
          ' />' +
          tagColor.close
        );
      };
    },
    './node_modules/pretty-format/node_modules/ansi-styles/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      module = __webpack_require__.nmd(module);
      const wrapAnsi256 = (offset = 0) => code => `[${38 + offset};5;${code}m`,
        wrapAnsi16m = (offset = 0) => (red, green, blue) =>
          `[${38 + offset};2;${red};${green};${blue}m`;
      Object.defineProperty(module, 'exports', {
        enumerable: !0,
        get: function assembleStyles() {
          const codes = new Map(),
            styles = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                overline: [53, 55],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29],
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39],
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49],
              },
            };
          (styles.color.gray = styles.color.blackBright),
            (styles.bgColor.bgGray = styles.bgColor.bgBlackBright),
            (styles.color.grey = styles.color.blackBright),
            (styles.bgColor.bgGrey = styles.bgColor.bgBlackBright);
          for (const [groupName, group] of Object.entries(styles)) {
            for (const [styleName, style] of Object.entries(group))
              (styles[styleName] = {
                open: `[${style[0]}m`,
                close: `[${style[1]}m`,
              }),
                (group[styleName] = styles[styleName]),
                codes.set(style[0], style[1]);
            Object.defineProperty(styles, groupName, {
              value: group,
              enumerable: !1,
            });
          }
          return (
            Object.defineProperty(styles, 'codes', {
              value: codes,
              enumerable: !1,
            }),
            (styles.color.close = '[39m'),
            (styles.bgColor.close = '[49m'),
            (styles.color.ansi256 = wrapAnsi256()),
            (styles.color.ansi16m = wrapAnsi16m()),
            (styles.bgColor.ansi256 = wrapAnsi256(10)),
            (styles.bgColor.ansi16m = wrapAnsi16m(10)),
            Object.defineProperties(styles, {
              rgbToAnsi256: {
                value: (red, green, blue) =>
                  red === green && green === blue
                    ? red < 8
                      ? 16
                      : red > 248
                        ? 231
                        : Math.round(((red - 8) / 247) * 24) + 232
                    : 16 +
                      36 * Math.round((red / 255) * 5) +
                      6 * Math.round((green / 255) * 5) +
                      Math.round((blue / 255) * 5),
                enumerable: !1,
              },
              hexToRgb: {
                value: hex => {
                  const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                    hex.toString(16)
                  );
                  if (!matches) return [0, 0, 0];
                  let { colorString: colorString } = matches.groups;
                  3 === colorString.length &&
                    (colorString = colorString
                      .split('')
                      .map(character => character + character)
                      .join(''));
                  const integer = Number.parseInt(colorString, 16);
                  return [
                    (integer >> 16) & 255,
                    (integer >> 8) & 255,
                    255 & integer,
                  ];
                },
                enumerable: !1,
              },
              hexToAnsi256: {
                value: hex => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
                enumerable: !1,
              },
            }),
            styles
          );
        },
      });
    },
    './node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js': function(
      __unused_webpack_module,
      exports
    ) {
      'use strict';
      var b = 60103,
        c = 60106,
        d = 60107,
        e = 60108,
        f = 60114,
        g = 60109,
        h = 60110,
        k = 60112,
        l = 60113,
        m = 60120,
        n = 60115,
        p = 60116,
        q = 60121,
        r = 60122,
        u = 60117,
        v = 60129,
        w = 60131;
      if ('function' == typeof Symbol && Symbol.for) {
        var x = Symbol.for;
        (b = x('react.element')),
          (c = x('react.portal')),
          (d = x('react.fragment')),
          (e = x('react.strict_mode')),
          (f = x('react.profiler')),
          (g = x('react.provider')),
          (h = x('react.context')),
          (k = x('react.forward_ref')),
          (l = x('react.suspense')),
          (m = x('react.suspense_list')),
          (n = x('react.memo')),
          (p = x('react.lazy')),
          (q = x('react.block')),
          (r = x('react.server.block')),
          (u = x('react.fundamental')),
          (v = x('react.debug_trace_mode')),
          (w = x('react.legacy_hidden'));
      }
      function y(a) {
        if ('object' == typeof a && null !== a) {
          var t = a.$$typeof;
          switch (t) {
            case b:
              switch ((a = a.type)) {
                case d:
                case f:
                case e:
                case l:
                case m:
                  return a;
                default:
                  switch ((a = a && a.$$typeof)) {
                    case h:
                    case k:
                    case p:
                    case n:
                    case g:
                      return a;
                    default:
                      return t;
                  }
              }
            case c:
              return t;
          }
        }
      }
      var z = g,
        A = b,
        B = k,
        C = d,
        D = p,
        E = n,
        F = c,
        G = f,
        H = e,
        I = l;
      (exports.ContextConsumer = h),
        (exports.ContextProvider = z),
        (exports.Element = A),
        (exports.ForwardRef = B),
        (exports.Fragment = C),
        (exports.Lazy = D),
        (exports.Memo = E),
        (exports.Portal = F),
        (exports.Profiler = G),
        (exports.StrictMode = H),
        (exports.Suspense = I),
        (exports.isAsyncMode = function() {
          return !1;
        }),
        (exports.isConcurrentMode = function() {
          return !1;
        }),
        (exports.isContextConsumer = function(a) {
          return y(a) === h;
        }),
        (exports.isContextProvider = function(a) {
          return y(a) === g;
        }),
        (exports.isElement = function(a) {
          return 'object' == typeof a && null !== a && a.$$typeof === b;
        }),
        (exports.isForwardRef = function(a) {
          return y(a) === k;
        }),
        (exports.isFragment = function(a) {
          return y(a) === d;
        }),
        (exports.isLazy = function(a) {
          return y(a) === p;
        }),
        (exports.isMemo = function(a) {
          return y(a) === n;
        }),
        (exports.isPortal = function(a) {
          return y(a) === c;
        }),
        (exports.isProfiler = function(a) {
          return y(a) === f;
        }),
        (exports.isStrictMode = function(a) {
          return y(a) === e;
        }),
        (exports.isSuspense = function(a) {
          return y(a) === l;
        }),
        (exports.isValidElementType = function(a) {
          return (
            'string' == typeof a ||
            'function' == typeof a ||
            a === d ||
            a === f ||
            a === v ||
            a === e ||
            a === l ||
            a === m ||
            a === w ||
            ('object' == typeof a &&
              null !== a &&
              (a.$$typeof === p ||
                a.$$typeof === n ||
                a.$$typeof === g ||
                a.$$typeof === h ||
                a.$$typeof === k ||
                a.$$typeof === u ||
                a.$$typeof === q ||
                a[0] === r))
          );
        }),
        (exports.typeOf = y);
    },
    './node_modules/pretty-format/node_modules/react-is/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      module.exports = __webpack_require__(
        './node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js'
      );
    },
    './node_modules/react/cjs/react-jsx-runtime.production.min.js': function(
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      var f = __webpack_require__('./node_modules/react/index.js'),
        k = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        m = Object.prototype.hasOwnProperty,
        n =
          f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = '' + g),
        void 0 !== a.key && (e = '' + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps)
          for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current,
        };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    './node_modules/react/jsx-runtime.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      module.exports = __webpack_require__(
        './node_modules/react/cjs/react-jsx-runtime.production.min.js'
      );
    },
    './node_modules/regexp.prototype.flags/implementation.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var setFunctionName = __webpack_require__(
          './node_modules/set-function-name/index.js'
        ),
        $Object = Object,
        $TypeError = TypeError;
      module.exports = setFunctionName(
        function flags() {
          if (null != this && this !== $Object(this))
            throw new $TypeError(
              'RegExp.prototype.flags getter called on non-object'
            );
          var result = '';
          return (
            this.hasIndices && (result += 'd'),
            this.global && (result += 'g'),
            this.ignoreCase && (result += 'i'),
            this.multiline && (result += 'm'),
            this.dotAll && (result += 's'),
            this.unicode && (result += 'u'),
            this.unicodeSets && (result += 'v'),
            this.sticky && (result += 'y'),
            result
          );
        },
        'get flags',
        !0
      );
    },
    './node_modules/regexp.prototype.flags/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var define = __webpack_require__(
          './node_modules/regexp.prototype.flags/node_modules/define-properties/index.js'
        ),
        callBind = __webpack_require__('./node_modules/call-bind/index.js'),
        implementation = __webpack_require__(
          './node_modules/regexp.prototype.flags/implementation.js'
        ),
        getPolyfill = __webpack_require__(
          './node_modules/regexp.prototype.flags/polyfill.js'
        ),
        shim = __webpack_require__(
          './node_modules/regexp.prototype.flags/shim.js'
        ),
        flagsBound = callBind(getPolyfill());
      define(flagsBound, {
        getPolyfill: getPolyfill,
        implementation: implementation,
        shim: shim,
      }),
        (module.exports = flagsBound);
    },
    './node_modules/regexp.prototype.flags/node_modules/define-properties/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var keys = __webpack_require__('./node_modules/object-keys/index.js'),
        hasSymbols =
          'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
        toStr = Object.prototype.toString,
        concat = Array.prototype.concat,
        defineDataProperty = __webpack_require__(
          './node_modules/define-data-property/index.js'
        ),
        supportsDescriptors = __webpack_require__(
          './node_modules/has-property-descriptors/index.js'
        )(),
        defineProperty = function(object, name, value, predicate) {
          if (name in object)
            if (!0 === predicate) {
              if (object[name] === value) return;
            } else if (
              'function' != typeof (fn = predicate) ||
              '[object Function]' !== toStr.call(fn) ||
              !predicate()
            )
              return;
          var fn;
          supportsDescriptors
            ? defineDataProperty(object, name, value, !0)
            : defineDataProperty(object, name, value);
        },
        defineProperties = function(object, map) {
          var predicates = arguments.length > 2 ? arguments[2] : {},
            props = keys(map);
          hasSymbols &&
            (props = concat.call(props, Object.getOwnPropertySymbols(map)));
          for (var i = 0; i < props.length; i += 1)
            defineProperty(
              object,
              props[i],
              map[props[i]],
              predicates[props[i]]
            );
        };
      (defineProperties.supportsDescriptors = !!supportsDescriptors),
        (module.exports = defineProperties);
    },
    './node_modules/regexp.prototype.flags/polyfill.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var implementation = __webpack_require__(
          './node_modules/regexp.prototype.flags/implementation.js'
        ),
        supportsDescriptors = __webpack_require__(
          './node_modules/regexp.prototype.flags/node_modules/define-properties/index.js'
        ).supportsDescriptors,
        $gOPD = Object.getOwnPropertyDescriptor;
      module.exports = function getPolyfill() {
        if (supportsDescriptors && 'gim' === /a/gim.flags) {
          var descriptor = $gOPD(RegExp.prototype, 'flags');
          if (
            descriptor &&
            'function' == typeof descriptor.get &&
            'boolean' == typeof RegExp.prototype.dotAll &&
            'boolean' == typeof RegExp.prototype.hasIndices
          ) {
            var calls = '',
              o = {};
            if (
              (Object.defineProperty(o, 'hasIndices', {
                get: function() {
                  calls += 'd';
                },
              }),
              Object.defineProperty(o, 'sticky', {
                get: function() {
                  calls += 'y';
                },
              }),
              'dy' === calls)
            )
              return descriptor.get;
          }
        }
        return implementation;
      };
    },
    './node_modules/regexp.prototype.flags/shim.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var supportsDescriptors = __webpack_require__(
          './node_modules/regexp.prototype.flags/node_modules/define-properties/index.js'
        ).supportsDescriptors,
        getPolyfill = __webpack_require__(
          './node_modules/regexp.prototype.flags/polyfill.js'
        ),
        gOPD = Object.getOwnPropertyDescriptor,
        defineProperty = Object.defineProperty,
        TypeErr = TypeError,
        getProto = Object.getPrototypeOf,
        regex = /a/;
      module.exports = function shimFlags() {
        if (!supportsDescriptors || !getProto)
          throw new TypeErr(
            'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors'
          );
        var polyfill = getPolyfill(),
          proto = getProto(regex),
          descriptor = gOPD(proto, 'flags');
        return (
          (descriptor && descriptor.get === polyfill) ||
            defineProperty(proto, 'flags', {
              configurable: !0,
              enumerable: !1,
              get: polyfill,
            }),
          polyfill
        );
      };
    },
    './node_modules/set-function-name/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var define = __webpack_require__(
          './node_modules/define-data-property/index.js'
        ),
        hasDescriptors = __webpack_require__(
          './node_modules/has-property-descriptors/index.js'
        )(),
        functionsHaveConfigurableNames = __webpack_require__(
          './node_modules/functions-have-names/index.js'
        ).functionsHaveConfigurableNames(),
        $TypeError = TypeError;
      module.exports = function setFunctionName(fn, name) {
        if ('function' != typeof fn)
          throw new $TypeError('`fn` is not a function');
        return (
          (arguments.length > 2 &&
            !!arguments[2] &&
            !functionsHaveConfigurableNames) ||
            (hasDescriptors
              ? define(fn, 'name', name, !0, !0)
              : define(fn, 'name', name)),
          fn
        );
      };
    },
    './node_modules/side-channel/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var GetIntrinsic = __webpack_require__(
          './node_modules/get-intrinsic/index.js'
        ),
        callBound = __webpack_require__(
          './node_modules/call-bind/callBound.js'
        ),
        inspect = __webpack_require__('./node_modules/object-inspect/index.js'),
        $TypeError = GetIntrinsic('%TypeError%'),
        $WeakMap = GetIntrinsic('%WeakMap%', !0),
        $Map = GetIntrinsic('%Map%', !0),
        $weakMapGet = callBound('WeakMap.prototype.get', !0),
        $weakMapSet = callBound('WeakMap.prototype.set', !0),
        $weakMapHas = callBound('WeakMap.prototype.has', !0),
        $mapGet = callBound('Map.prototype.get', !0),
        $mapSet = callBound('Map.prototype.set', !0),
        $mapHas = callBound('Map.prototype.has', !0),
        listGetNode = function(list, key) {
          for (var curr, prev = list; null !== (curr = prev.next); prev = curr)
            if (curr.key === key)
              return (
                (prev.next = curr.next),
                (curr.next = list.next),
                (list.next = curr),
                curr
              );
        };
      module.exports = function getSideChannel() {
        var $wm,
          $m,
          $o,
          channel = {
            assert: function(key) {
              if (!channel.has(key))
                throw new $TypeError(
                  'Side channel does not contain ' + inspect(key)
                );
            },
            get: function(key) {
              if (
                $WeakMap &&
                key &&
                ('object' == typeof key || 'function' == typeof key)
              ) {
                if ($wm) return $weakMapGet($wm, key);
              } else if ($Map) {
                if ($m) return $mapGet($m, key);
              } else if ($o)
                return (function(objects, key) {
                  var node = listGetNode(objects, key);
                  return node && node.value;
                })($o, key);
            },
            has: function(key) {
              if (
                $WeakMap &&
                key &&
                ('object' == typeof key || 'function' == typeof key)
              ) {
                if ($wm) return $weakMapHas($wm, key);
              } else if ($Map) {
                if ($m) return $mapHas($m, key);
              } else if ($o)
                return (function(objects, key) {
                  return !!listGetNode(objects, key);
                })($o, key);
              return !1;
            },
            set: function(key, value) {
              $WeakMap &&
              key &&
              ('object' == typeof key || 'function' == typeof key)
                ? ($wm || ($wm = new $WeakMap()), $weakMapSet($wm, key, value))
                : $Map
                  ? ($m || ($m = new $Map()), $mapSet($m, key, value))
                  : ($o || ($o = { key: {}, next: null }),
                    (function(objects, key, value) {
                      var node = listGetNode(objects, key);
                      node
                        ? (node.value = value)
                        : (objects.next = {
                            key: key,
                            next: objects.next,
                            value: value,
                          });
                    })($o, key, value));
            },
          };
        return channel;
      };
    },
    './node_modules/stop-iteration-iterator/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var SLOT = __webpack_require__('./node_modules/internal-slot/index.js'),
        $SyntaxError = SyntaxError,
        $StopIteration =
          'object' == typeof StopIteration ? StopIteration : null;
      module.exports = function getStopIterationIterator(origIterator) {
        if (!$StopIteration)
          throw new $SyntaxError('this environment lacks StopIteration');
        SLOT.set(origIterator, '[[Done]]', !1);
        var siIterator = {
          next: function next() {
            var iterator = SLOT.get(this, '[[Iterator]]'),
              done = SLOT.get(iterator, '[[Done]]');
            try {
              return { done: done, value: done ? void 0 : iterator.next() };
            } catch (e) {
              if ((SLOT.set(iterator, '[[Done]]', !0), e !== $StopIteration))
                throw e;
              return { done: !0, value: void 0 };
            }
          },
        };
        return SLOT.set(siIterator, '[[Iterator]]', origIterator), siIterator;
      };
    },
    './node_modules/which-boxed-primitive/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var isString = __webpack_require__('./node_modules/is-string/index.js'),
        isNumber = __webpack_require__(
          './node_modules/is-number-object/index.js'
        ),
        isBoolean = __webpack_require__(
          './node_modules/is-boolean-object/index.js'
        ),
        isSymbol = __webpack_require__(
          './node_modules/which-boxed-primitive/node_modules/is-symbol/index.js'
        ),
        isBigInt = __webpack_require__('./node_modules/is-bigint/index.js');
      module.exports = function whichBoxedPrimitive(value) {
        return null == value ||
          ('object' != typeof value && 'function' != typeof value)
          ? null
          : isString(value)
            ? 'String'
            : isNumber(value)
              ? 'Number'
              : isBoolean(value)
                ? 'Boolean'
                : isSymbol(value)
                  ? 'Symbol'
                  : isBigInt(value)
                    ? 'BigInt'
                    : void 0;
      };
    },
    './node_modules/which-boxed-primitive/node_modules/is-symbol/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var toStr = Object.prototype.toString;
      if (__webpack_require__('./node_modules/has-symbols/index.js')()) {
        var symToStr = Symbol.prototype.toString,
          symStringRegex = /^Symbol\(.*\)$/;
        module.exports = function isSymbol(value) {
          if ('symbol' == typeof value) return !0;
          if ('[object Symbol]' !== toStr.call(value)) return !1;
          try {
            return (function isRealSymbolObject(value) {
              return (
                'symbol' == typeof value.valueOf() &&
                symStringRegex.test(symToStr.call(value))
              );
            })(value);
          } catch (e) {
            return !1;
          }
        };
      } else
        module.exports = function isSymbol(value) {
          return !1;
        };
    },
    './node_modules/which-collection/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      var isMap = __webpack_require__('./node_modules/is-map/index.js'),
        isSet = __webpack_require__('./node_modules/is-set/index.js'),
        isWeakMap = __webpack_require__('./node_modules/is-weakmap/index.js'),
        isWeakSet = __webpack_require__('./node_modules/is-weakset/index.js');
      module.exports = function whichCollection(value) {
        if (value && 'object' == typeof value) {
          if (isMap(value)) return 'Map';
          if (isSet(value)) return 'Set';
          if (isWeakMap(value)) return 'WeakMap';
          if (isWeakSet(value)) return 'WeakSet';
        }
        return !1;
      };
    },
  },
]);
//# sourceMappingURL=48.876b1473.iframe.bundle.js.map
