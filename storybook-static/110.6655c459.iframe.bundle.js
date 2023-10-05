(self.webpackChunkt_react_sudoku = self.webpackChunkt_react_sudoku || []).push([
  [110],
  {
    './node_modules/@storybook/addon-actions/dist/index.mjs': function(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        aD: function() {
          return chunk_AY7I2SME.aD;
        },
      });
      var chunk_AY7I2SME = __webpack_require__(
        './node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs'
      );
    },
    './node_modules/events/events.js': function(module) {
      function EventEmitter() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function isFunction(arg) {
        return 'function' == typeof arg;
      }
      function isObject(arg) {
        return 'object' == typeof arg && null !== arg;
      }
      function isUndefined(arg) {
        return void 0 === arg;
      }
      (module.exports = EventEmitter),
        (EventEmitter.EventEmitter = EventEmitter),
        (EventEmitter.prototype._events = void 0),
        (EventEmitter.prototype._maxListeners = void 0),
        (EventEmitter.defaultMaxListeners = 10),
        (EventEmitter.prototype.setMaxListeners = function(n) {
          if (
            !(function isNumber(arg) {
              return 'number' == typeof arg;
            })(n) ||
            n < 0 ||
            isNaN(n)
          )
            throw TypeError('n must be a positive number');
          return (this._maxListeners = n), this;
        }),
        (EventEmitter.prototype.emit = function(type) {
          var er, handler, len, args, i, listeners;
          if (
            (this._events || (this._events = {}),
            'error' === type &&
              (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)))
          ) {
            if ((er = arguments[1]) instanceof Error) throw er;
            var err = new Error(
              'Uncaught, unspecified "error" event. (' + er + ')'
            );
            throw ((err.context = er), err);
          }
          if (isUndefined((handler = this._events[type]))) return !1;
          if (isFunction(handler))
            switch (arguments.length) {
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
              default:
                (args = Array.prototype.slice.call(arguments, 1)),
                  handler.apply(this, args);
            }
          else if (isObject(handler))
            for (
              args = Array.prototype.slice.call(arguments, 1),
                len = (listeners = handler.slice()).length,
                i = 0;
              i < len;
              i++
            )
              listeners[i].apply(this, args);
          return !0;
        }),
        (EventEmitter.prototype.addListener = function(type, listener) {
          var m;
          if (!isFunction(listener))
            throw TypeError('listener must be a function');
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit(
                'newListener',
                type,
                isFunction(listener.listener) ? listener.listener : listener
              ),
            this._events[type]
              ? isObject(this._events[type])
                ? this._events[type].push(listener)
                : (this._events[type] = [this._events[type], listener])
              : (this._events[type] = listener),
            isObject(this._events[type]) &&
              !this._events[type].warned &&
              (m = isUndefined(this._maxListeners)
                ? EventEmitter.defaultMaxListeners
                : this._maxListeners) &&
              m > 0 &&
              this._events[type].length > m &&
              ((this._events[type].warned = !0),
              console.error(
                '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                this._events[type].length
              ),
              'function' == typeof console.trace && console.trace()),
            this
          );
        }),
        (EventEmitter.prototype.on = EventEmitter.prototype.addListener),
        (EventEmitter.prototype.once = function(type, listener) {
          if (!isFunction(listener))
            throw TypeError('listener must be a function');
          var fired = !1;
          function g() {
            this.removeListener(type, g),
              fired || ((fired = !0), listener.apply(this, arguments));
          }
          return (g.listener = listener), this.on(type, g), this;
        }),
        (EventEmitter.prototype.removeListener = function(type, listener) {
          var list, position, length, i;
          if (!isFunction(listener))
            throw TypeError('listener must be a function');
          if (!this._events || !this._events[type]) return this;
          if (
            ((length = (list = this._events[type]).length),
            (position = -1),
            list === listener ||
              (isFunction(list.listener) && list.listener === listener))
          )
            delete this._events[type],
              this._events.removeListener &&
                this.emit('removeListener', type, listener);
          else if (isObject(list)) {
            for (i = length; i-- > 0; )
              if (
                list[i] === listener ||
                (list[i].listener && list[i].listener === listener)
              ) {
                position = i;
                break;
              }
            if (position < 0) return this;
            1 === list.length
              ? ((list.length = 0), delete this._events[type])
              : list.splice(position, 1),
              this._events.removeListener &&
                this.emit('removeListener', type, listener);
          }
          return this;
        }),
        (EventEmitter.prototype.removeAllListeners = function(type) {
          var key, listeners;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              0 === arguments.length
                ? (this._events = {})
                : this._events[type] && delete this._events[type],
              this
            );
          if (0 === arguments.length) {
            for (key in this._events)
              'removeListener' !== key && this.removeAllListeners(key);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = {}),
              this
            );
          }
          if (isFunction((listeners = this._events[type])))
            this.removeListener(type, listeners);
          else if (listeners)
            for (; listeners.length; )
              this.removeListener(type, listeners[listeners.length - 1]);
          return delete this._events[type], this;
        }),
        (EventEmitter.prototype.listeners = function(type) {
          return this._events && this._events[type]
            ? isFunction(this._events[type])
              ? [this._events[type]]
              : this._events[type].slice()
            : [];
        }),
        (EventEmitter.prototype.listenerCount = function(type) {
          if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            if (evlistener) return evlistener.length;
          }
          return 0;
        }),
        (EventEmitter.listenerCount = function(emitter, type) {
          return emitter.listenerCount(type);
        });
    },
    './node_modules/immutable/dist/immutable.js': function(module) {
      module.exports = (function() {
        'use strict';
        var SLICE$0 = Array.prototype.slice;
        function createClass(ctor, superClass) {
          superClass && (ctor.prototype = Object.create(superClass.prototype)),
            (ctor.prototype.constructor = ctor);
        }
        function Iterable(value) {
          return isIterable(value) ? value : Seq(value);
        }
        function KeyedIterable(value) {
          return isKeyed(value) ? value : KeyedSeq(value);
        }
        function IndexedIterable(value) {
          return isIndexed(value) ? value : IndexedSeq(value);
        }
        function SetIterable(value) {
          return isIterable(value) && !isAssociative(value)
            ? value
            : SetSeq(value);
        }
        function isIterable(maybeIterable) {
          return !(!maybeIterable || !maybeIterable[IS_ITERABLE_SENTINEL]);
        }
        function isKeyed(maybeKeyed) {
          return !(!maybeKeyed || !maybeKeyed[IS_KEYED_SENTINEL]);
        }
        function isIndexed(maybeIndexed) {
          return !(!maybeIndexed || !maybeIndexed[IS_INDEXED_SENTINEL]);
        }
        function isAssociative(maybeAssociative) {
          return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
        }
        function isOrdered(maybeOrdered) {
          return !(!maybeOrdered || !maybeOrdered[IS_ORDERED_SENTINEL]);
        }
        createClass(KeyedIterable, Iterable),
          createClass(IndexedIterable, Iterable),
          createClass(SetIterable, Iterable),
          (Iterable.isIterable = isIterable),
          (Iterable.isKeyed = isKeyed),
          (Iterable.isIndexed = isIndexed),
          (Iterable.isAssociative = isAssociative),
          (Iterable.isOrdered = isOrdered),
          (Iterable.Keyed = KeyedIterable),
          (Iterable.Indexed = IndexedIterable),
          (Iterable.Set = SetIterable);
        var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@',
          IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@',
          IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@',
          IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@',
          DELETE = 'delete',
          SHIFT = 5,
          SIZE = 1 << SHIFT,
          MASK = SIZE - 1,
          NOT_SET = {},
          CHANGE_LENGTH = { value: !1 },
          DID_ALTER = { value: !1 };
        function MakeRef(ref) {
          return (ref.value = !1), ref;
        }
        function SetRef(ref) {
          ref && (ref.value = !0);
        }
        function OwnerID() {}
        function arrCopy(arr, offset) {
          offset = offset || 0;
          for (
            var len = Math.max(0, arr.length - offset),
              newArr = new Array(len),
              ii = 0;
            ii < len;
            ii++
          )
            newArr[ii] = arr[ii + offset];
          return newArr;
        }
        function ensureSize(iter) {
          return (
            void 0 === iter.size && (iter.size = iter.__iterate(returnTrue)),
            iter.size
          );
        }
        function wrapIndex(iter, index) {
          if ('number' != typeof index) {
            var uint32Index = index >>> 0;
            if ('' + uint32Index !== index || 4294967295 === uint32Index)
              return NaN;
            index = uint32Index;
          }
          return index < 0 ? ensureSize(iter) + index : index;
        }
        function returnTrue() {
          return !0;
        }
        function wholeSlice(begin, end, size) {
          return (
            (0 === begin || (void 0 !== size && begin <= -size)) &&
            (void 0 === end || (void 0 !== size && end >= size))
          );
        }
        function resolveBegin(begin, size) {
          return resolveIndex(begin, size, 0);
        }
        function resolveEnd(end, size) {
          return resolveIndex(end, size, size);
        }
        function resolveIndex(index, size, defaultIndex) {
          return void 0 === index
            ? defaultIndex
            : index < 0
              ? Math.max(0, size + index)
              : void 0 === size
                ? index
                : Math.min(size, index);
        }
        var ITERATE_KEYS = 0,
          ITERATE_VALUES = 1,
          ITERATE_ENTRIES = 2,
          REAL_ITERATOR_SYMBOL = 'function' == typeof Symbol && Symbol.iterator,
          FAUX_ITERATOR_SYMBOL = '@@iterator',
          ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
        function Iterator(next) {
          this.next = next;
        }
        function iteratorValue(type, k, v, iteratorResult) {
          var value = 0 === type ? k : 1 === type ? v : [k, v];
          return (
            iteratorResult
              ? (iteratorResult.value = value)
              : (iteratorResult = { value: value, done: !1 }),
            iteratorResult
          );
        }
        function iteratorDone() {
          return { value: void 0, done: !0 };
        }
        function hasIterator(maybeIterable) {
          return !!getIteratorFn(maybeIterable);
        }
        function isIterator(maybeIterator) {
          return maybeIterator && 'function' == typeof maybeIterator.next;
        }
        function getIterator(iterable) {
          var iteratorFn = getIteratorFn(iterable);
          return iteratorFn && iteratorFn.call(iterable);
        }
        function getIteratorFn(iterable) {
          var iteratorFn =
            iterable &&
            ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
              iterable[FAUX_ITERATOR_SYMBOL]);
          if ('function' == typeof iteratorFn) return iteratorFn;
        }
        function isArrayLike(value) {
          return value && 'number' == typeof value.length;
        }
        function Seq(value) {
          return null == value
            ? emptySequence()
            : isIterable(value)
              ? value.toSeq()
              : seqFromValue(value);
        }
        function KeyedSeq(value) {
          return null == value
            ? emptySequence().toKeyedSeq()
            : isIterable(value)
              ? isKeyed(value)
                ? value.toSeq()
                : value.fromEntrySeq()
              : keyedSeqFromValue(value);
        }
        function IndexedSeq(value) {
          return null == value
            ? emptySequence()
            : isIterable(value)
              ? isKeyed(value)
                ? value.entrySeq()
                : value.toIndexedSeq()
              : indexedSeqFromValue(value);
        }
        function SetSeq(value) {
          return (null == value
            ? emptySequence()
            : isIterable(value)
              ? isKeyed(value)
                ? value.entrySeq()
                : value
              : indexedSeqFromValue(value)
          ).toSetSeq();
        }
        (Iterator.prototype.toString = function() {
          return '[Iterator]';
        }),
          (Iterator.KEYS = ITERATE_KEYS),
          (Iterator.VALUES = ITERATE_VALUES),
          (Iterator.ENTRIES = ITERATE_ENTRIES),
          (Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
            return this.toString();
          }),
          (Iterator.prototype[ITERATOR_SYMBOL] = function() {
            return this;
          }),
          createClass(Seq, Iterable),
          (Seq.of = function() {
            return Seq(arguments);
          }),
          (Seq.prototype.toSeq = function() {
            return this;
          }),
          (Seq.prototype.toString = function() {
            return this.__toString('Seq {', '}');
          }),
          (Seq.prototype.cacheResult = function() {
            return (
              !this._cache &&
                this.__iterateUncached &&
                ((this._cache = this.entrySeq().toArray()),
                (this.size = this._cache.length)),
              this
            );
          }),
          (Seq.prototype.__iterate = function(fn, reverse) {
            return seqIterate(this, fn, reverse, !0);
          }),
          (Seq.prototype.__iterator = function(type, reverse) {
            return seqIterator(this, type, reverse, !0);
          }),
          createClass(KeyedSeq, Seq),
          (KeyedSeq.prototype.toKeyedSeq = function() {
            return this;
          }),
          createClass(IndexedSeq, Seq),
          (IndexedSeq.of = function() {
            return IndexedSeq(arguments);
          }),
          (IndexedSeq.prototype.toIndexedSeq = function() {
            return this;
          }),
          (IndexedSeq.prototype.toString = function() {
            return this.__toString('Seq [', ']');
          }),
          (IndexedSeq.prototype.__iterate = function(fn, reverse) {
            return seqIterate(this, fn, reverse, !1);
          }),
          (IndexedSeq.prototype.__iterator = function(type, reverse) {
            return seqIterator(this, type, reverse, !1);
          }),
          createClass(SetSeq, Seq),
          (SetSeq.of = function() {
            return SetSeq(arguments);
          }),
          (SetSeq.prototype.toSetSeq = function() {
            return this;
          }),
          (Seq.isSeq = isSeq),
          (Seq.Keyed = KeyedSeq),
          (Seq.Set = SetSeq),
          (Seq.Indexed = IndexedSeq);
        var EMPTY_SEQ,
          EMPTY_REPEAT,
          EMPTY_RANGE,
          IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
        function ArraySeq(array) {
          (this._array = array), (this.size = array.length);
        }
        function ObjectSeq(object) {
          var keys = Object.keys(object);
          (this._object = object),
            (this._keys = keys),
            (this.size = keys.length);
        }
        function IterableSeq(iterable) {
          (this._iterable = iterable),
            (this.size = iterable.length || iterable.size);
        }
        function IteratorSeq(iterator) {
          (this._iterator = iterator), (this._iteratorCache = []);
        }
        function isSeq(maybeSeq) {
          return !(!maybeSeq || !maybeSeq[IS_SEQ_SENTINEL]);
        }
        function emptySequence() {
          return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
        }
        function keyedSeqFromValue(value) {
          var seq = Array.isArray(value)
            ? new ArraySeq(value).fromEntrySeq()
            : isIterator(value)
              ? new IteratorSeq(value).fromEntrySeq()
              : hasIterator(value)
                ? new IterableSeq(value).fromEntrySeq()
                : 'object' == typeof value
                  ? new ObjectSeq(value)
                  : void 0;
          if (!seq)
            throw new TypeError(
              'Expected Array or iterable object of [k, v] entries, or keyed object: ' +
                value
            );
          return seq;
        }
        function indexedSeqFromValue(value) {
          var seq = maybeIndexedSeqFromValue(value);
          if (!seq)
            throw new TypeError(
              'Expected Array or iterable object of values: ' + value
            );
          return seq;
        }
        function seqFromValue(value) {
          var seq =
            maybeIndexedSeqFromValue(value) ||
            ('object' == typeof value && new ObjectSeq(value));
          if (!seq)
            throw new TypeError(
              'Expected Array or iterable object of values, or keyed object: ' +
                value
            );
          return seq;
        }
        function maybeIndexedSeqFromValue(value) {
          return isArrayLike(value)
            ? new ArraySeq(value)
            : isIterator(value)
              ? new IteratorSeq(value)
              : hasIterator(value)
                ? new IterableSeq(value)
                : void 0;
        }
        function seqIterate(seq, fn, reverse, useKeys) {
          var cache = seq._cache;
          if (cache) {
            for (
              var maxIndex = cache.length - 1, ii = 0;
              ii <= maxIndex;
              ii++
            ) {
              var entry = cache[reverse ? maxIndex - ii : ii];
              if (!1 === fn(entry[1], useKeys ? entry[0] : ii, seq))
                return ii + 1;
            }
            return ii;
          }
          return seq.__iterateUncached(fn, reverse);
        }
        function seqIterator(seq, type, reverse, useKeys) {
          var cache = seq._cache;
          if (cache) {
            var maxIndex = cache.length - 1,
              ii = 0;
            return new Iterator(function() {
              var entry = cache[reverse ? maxIndex - ii : ii];
              return ii++ > maxIndex
                ? iteratorDone()
                : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
            });
          }
          return seq.__iteratorUncached(type, reverse);
        }
        function fromJS(json, converter) {
          return converter
            ? fromJSWith(converter, json, '', { '': json })
            : fromJSDefault(json);
        }
        function fromJSWith(converter, json, key, parentJSON) {
          return Array.isArray(json)
            ? converter.call(
                parentJSON,
                key,
                IndexedSeq(json).map(function(v, k) {
                  return fromJSWith(converter, v, k, json);
                })
              )
            : isPlainObj(json)
              ? converter.call(
                  parentJSON,
                  key,
                  KeyedSeq(json).map(function(v, k) {
                    return fromJSWith(converter, v, k, json);
                  })
                )
              : json;
        }
        function fromJSDefault(json) {
          return Array.isArray(json)
            ? IndexedSeq(json)
                .map(fromJSDefault)
                .toList()
            : isPlainObj(json)
              ? KeyedSeq(json)
                  .map(fromJSDefault)
                  .toMap()
              : json;
        }
        function isPlainObj(value) {
          return (
            value &&
            (value.constructor === Object || void 0 === value.constructor)
          );
        }
        function is(valueA, valueB) {
          if (valueA === valueB || (valueA != valueA && valueB != valueB))
            return !0;
          if (!valueA || !valueB) return !1;
          if (
            'function' == typeof valueA.valueOf &&
            'function' == typeof valueB.valueOf
          ) {
            if (
              (valueA = valueA.valueOf()) === (valueB = valueB.valueOf()) ||
              (valueA != valueA && valueB != valueB)
            )
              return !0;
            if (!valueA || !valueB) return !1;
          }
          return !(
            'function' != typeof valueA.equals ||
            'function' != typeof valueB.equals ||
            !valueA.equals(valueB)
          );
        }
        function deepEqual(a, b) {
          if (a === b) return !0;
          if (
            !isIterable(b) ||
            (void 0 !== a.size && void 0 !== b.size && a.size !== b.size) ||
            (void 0 !== a.__hash &&
              void 0 !== b.__hash &&
              a.__hash !== b.__hash) ||
            isKeyed(a) !== isKeyed(b) ||
            isIndexed(a) !== isIndexed(b) ||
            isOrdered(a) !== isOrdered(b)
          )
            return !1;
          if (0 === a.size && 0 === b.size) return !0;
          var notAssociative = !isAssociative(a);
          if (isOrdered(a)) {
            var entries = a.entries();
            return (
              b.every(function(v, k) {
                var entry = entries.next().value;
                return (
                  entry &&
                  is(entry[1], v) &&
                  (notAssociative || is(entry[0], k))
                );
              }) && entries.next().done
            );
          }
          var flipped = !1;
          if (void 0 === a.size)
            if (void 0 === b.size)
              'function' == typeof a.cacheResult && a.cacheResult();
            else {
              flipped = !0;
              var _ = a;
              (a = b), (b = _);
            }
          var allEqual = !0,
            bSize = b.__iterate(function(v, k) {
              if (
                notAssociative
                  ? !a.has(v)
                  : flipped
                    ? !is(v, a.get(k, NOT_SET))
                    : !is(a.get(k, NOT_SET), v)
              )
                return (allEqual = !1), !1;
            });
          return allEqual && a.size === bSize;
        }
        function Repeat(value, times) {
          if (!(this instanceof Repeat)) return new Repeat(value, times);
          if (
            ((this._value = value),
            (this.size = void 0 === times ? 1 / 0 : Math.max(0, times)),
            0 === this.size)
          ) {
            if (EMPTY_REPEAT) return EMPTY_REPEAT;
            EMPTY_REPEAT = this;
          }
        }
        function invariant(condition, error) {
          if (!condition) throw new Error(error);
        }
        function Range(start, end, step) {
          if (!(this instanceof Range)) return new Range(start, end, step);
          if (
            (invariant(0 !== step, 'Cannot step a Range by 0'),
            (start = start || 0),
            void 0 === end && (end = 1 / 0),
            (step = void 0 === step ? 1 : Math.abs(step)),
            end < start && (step = -step),
            (this._start = start),
            (this._end = end),
            (this._step = step),
            (this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1)),
            0 === this.size)
          ) {
            if (EMPTY_RANGE) return EMPTY_RANGE;
            EMPTY_RANGE = this;
          }
        }
        function Collection() {
          throw TypeError('Abstract');
        }
        function KeyedCollection() {}
        function IndexedCollection() {}
        function SetCollection() {}
        (Seq.prototype[IS_SEQ_SENTINEL] = !0),
          createClass(ArraySeq, IndexedSeq),
          (ArraySeq.prototype.get = function(index, notSetValue) {
            return this.has(index)
              ? this._array[wrapIndex(this, index)]
              : notSetValue;
          }),
          (ArraySeq.prototype.__iterate = function(fn, reverse) {
            for (
              var array = this._array, maxIndex = array.length - 1, ii = 0;
              ii <= maxIndex;
              ii++
            )
              if (!1 === fn(array[reverse ? maxIndex - ii : ii], ii, this))
                return ii + 1;
            return ii;
          }),
          (ArraySeq.prototype.__iterator = function(type, reverse) {
            var array = this._array,
              maxIndex = array.length - 1,
              ii = 0;
            return new Iterator(function() {
              return ii > maxIndex
                ? iteratorDone()
                : iteratorValue(
                    type,
                    ii,
                    array[reverse ? maxIndex - ii++ : ii++]
                  );
            });
          }),
          createClass(ObjectSeq, KeyedSeq),
          (ObjectSeq.prototype.get = function(key, notSetValue) {
            return void 0 === notSetValue || this.has(key)
              ? this._object[key]
              : notSetValue;
          }),
          (ObjectSeq.prototype.has = function(key) {
            return this._object.hasOwnProperty(key);
          }),
          (ObjectSeq.prototype.__iterate = function(fn, reverse) {
            for (
              var object = this._object,
                keys = this._keys,
                maxIndex = keys.length - 1,
                ii = 0;
              ii <= maxIndex;
              ii++
            ) {
              var key = keys[reverse ? maxIndex - ii : ii];
              if (!1 === fn(object[key], key, this)) return ii + 1;
            }
            return ii;
          }),
          (ObjectSeq.prototype.__iterator = function(type, reverse) {
            var object = this._object,
              keys = this._keys,
              maxIndex = keys.length - 1,
              ii = 0;
            return new Iterator(function() {
              var key = keys[reverse ? maxIndex - ii : ii];
              return ii++ > maxIndex
                ? iteratorDone()
                : iteratorValue(type, key, object[key]);
            });
          }),
          (ObjectSeq.prototype[IS_ORDERED_SENTINEL] = !0),
          createClass(IterableSeq, IndexedSeq),
          (IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
            if (reverse) return this.cacheResult().__iterate(fn, reverse);
            var iterator = getIterator(this._iterable),
              iterations = 0;
            if (isIterator(iterator))
              for (
                var step;
                !(step = iterator.next()).done &&
                !1 !== fn(step.value, iterations++, this);

              );
            return iterations;
          }),
          (IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
            if (reverse) return this.cacheResult().__iterator(type, reverse);
            var iterator = getIterator(this._iterable);
            if (!isIterator(iterator)) return new Iterator(iteratorDone);
            var iterations = 0;
            return new Iterator(function() {
              var step = iterator.next();
              return step.done
                ? step
                : iteratorValue(type, iterations++, step.value);
            });
          }),
          createClass(IteratorSeq, IndexedSeq),
          (IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
            if (reverse) return this.cacheResult().__iterate(fn, reverse);
            for (
              var step,
                iterator = this._iterator,
                cache = this._iteratorCache,
                iterations = 0;
              iterations < cache.length;

            )
              if (!1 === fn(cache[iterations], iterations++, this))
                return iterations;
            for (; !(step = iterator.next()).done; ) {
              var val = step.value;
              if (
                ((cache[iterations] = val), !1 === fn(val, iterations++, this))
              )
                break;
            }
            return iterations;
          }),
          (IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
            if (reverse) return this.cacheResult().__iterator(type, reverse);
            var iterator = this._iterator,
              cache = this._iteratorCache,
              iterations = 0;
            return new Iterator(function() {
              if (iterations >= cache.length) {
                var step = iterator.next();
                if (step.done) return step;
                cache[iterations] = step.value;
              }
              return iteratorValue(type, iterations, cache[iterations++]);
            });
          }),
          createClass(Repeat, IndexedSeq),
          (Repeat.prototype.toString = function() {
            return 0 === this.size
              ? 'Repeat []'
              : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
          }),
          (Repeat.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._value : notSetValue;
          }),
          (Repeat.prototype.includes = function(searchValue) {
            return is(this._value, searchValue);
          }),
          (Repeat.prototype.slice = function(begin, end) {
            var size = this.size;
            return wholeSlice(begin, end, size)
              ? this
              : new Repeat(
                  this._value,
                  resolveEnd(end, size) - resolveBegin(begin, size)
                );
          }),
          (Repeat.prototype.reverse = function() {
            return this;
          }),
          (Repeat.prototype.indexOf = function(searchValue) {
            return is(this._value, searchValue) ? 0 : -1;
          }),
          (Repeat.prototype.lastIndexOf = function(searchValue) {
            return is(this._value, searchValue) ? this.size : -1;
          }),
          (Repeat.prototype.__iterate = function(fn, reverse) {
            for (var ii = 0; ii < this.size; ii++)
              if (!1 === fn(this._value, ii, this)) return ii + 1;
            return ii;
          }),
          (Repeat.prototype.__iterator = function(type, reverse) {
            var this$0 = this,
              ii = 0;
            return new Iterator(function() {
              return ii < this$0.size
                ? iteratorValue(type, ii++, this$0._value)
                : iteratorDone();
            });
          }),
          (Repeat.prototype.equals = function(other) {
            return other instanceof Repeat
              ? is(this._value, other._value)
              : deepEqual(other);
          }),
          createClass(Range, IndexedSeq),
          (Range.prototype.toString = function() {
            return 0 === this.size
              ? 'Range []'
              : 'Range [ ' +
                  this._start +
                  '...' +
                  this._end +
                  (1 !== this._step ? ' by ' + this._step : '') +
                  ' ]';
          }),
          (Range.prototype.get = function(index, notSetValue) {
            return this.has(index)
              ? this._start + wrapIndex(this, index) * this._step
              : notSetValue;
          }),
          (Range.prototype.includes = function(searchValue) {
            var possibleIndex = (searchValue - this._start) / this._step;
            return (
              possibleIndex >= 0 &&
              possibleIndex < this.size &&
              possibleIndex === Math.floor(possibleIndex)
            );
          }),
          (Range.prototype.slice = function(begin, end) {
            return wholeSlice(begin, end, this.size)
              ? this
              : ((begin = resolveBegin(begin, this.size)),
                (end = resolveEnd(end, this.size)) <= begin
                  ? new Range(0, 0)
                  : new Range(
                      this.get(begin, this._end),
                      this.get(end, this._end),
                      this._step
                    ));
          }),
          (Range.prototype.indexOf = function(searchValue) {
            var offsetValue = searchValue - this._start;
            if (offsetValue % this._step == 0) {
              var index = offsetValue / this._step;
              if (index >= 0 && index < this.size) return index;
            }
            return -1;
          }),
          (Range.prototype.lastIndexOf = function(searchValue) {
            return this.indexOf(searchValue);
          }),
          (Range.prototype.__iterate = function(fn, reverse) {
            for (
              var maxIndex = this.size - 1,
                step = this._step,
                value = reverse ? this._start + maxIndex * step : this._start,
                ii = 0;
              ii <= maxIndex;
              ii++
            ) {
              if (!1 === fn(value, ii, this)) return ii + 1;
              value += reverse ? -step : step;
            }
            return ii;
          }),
          (Range.prototype.__iterator = function(type, reverse) {
            var maxIndex = this.size - 1,
              step = this._step,
              value = reverse ? this._start + maxIndex * step : this._start,
              ii = 0;
            return new Iterator(function() {
              var v = value;
              return (
                (value += reverse ? -step : step),
                ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v)
              );
            });
          }),
          (Range.prototype.equals = function(other) {
            return other instanceof Range
              ? this._start === other._start &&
                  this._end === other._end &&
                  this._step === other._step
              : deepEqual(this, other);
          }),
          createClass(Collection, Iterable),
          createClass(KeyedCollection, Collection),
          createClass(IndexedCollection, Collection),
          createClass(SetCollection, Collection),
          (Collection.Keyed = KeyedCollection),
          (Collection.Indexed = IndexedCollection),
          (Collection.Set = SetCollection);
        var imul =
          'function' == typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function imul(a, b) {
                var c = 65535 & (a |= 0),
                  d = 65535 & (b |= 0);
                return (
                  (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) |
                  0
                );
              };
        function smi(i32) {
          return ((i32 >>> 1) & 1073741824) | (3221225471 & i32);
        }
        function hash(o) {
          if (!1 === o || null == o) return 0;
          if (
            'function' == typeof o.valueOf &&
            (!1 === (o = o.valueOf()) || null == o)
          )
            return 0;
          if (!0 === o) return 1;
          var type = typeof o;
          if ('number' === type) {
            if (o != o || o === 1 / 0) return 0;
            var h = 0 | o;
            for (h !== o && (h ^= 4294967295 * o); o > 4294967295; )
              h ^= o /= 4294967295;
            return smi(h);
          }
          if ('string' === type)
            return o.length > STRING_HASH_CACHE_MIN_STRLEN
              ? cachedHashString(o)
              : hashString(o);
          if ('function' == typeof o.hashCode) return o.hashCode();
          if ('object' === type) return hashJSObj(o);
          if ('function' == typeof o.toString) return hashString(o.toString());
          throw new Error('Value type ' + type + ' cannot be hashed.');
        }
        function cachedHashString(string) {
          var hash = stringHashCache[string];
          return (
            void 0 === hash &&
              ((hash = hashString(string)),
              STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE &&
                ((STRING_HASH_CACHE_SIZE = 0), (stringHashCache = {})),
              STRING_HASH_CACHE_SIZE++,
              (stringHashCache[string] = hash)),
            hash
          );
        }
        function hashString(string) {
          for (var hash = 0, ii = 0; ii < string.length; ii++)
            hash = (31 * hash + string.charCodeAt(ii)) | 0;
          return smi(hash);
        }
        function hashJSObj(obj) {
          var hash;
          if (usingWeakMap && void 0 !== (hash = weakMap.get(obj))) return hash;
          if (void 0 !== (hash = obj[UID_HASH_KEY])) return hash;
          if (!canDefineProperty) {
            if (
              void 0 !==
              (hash =
                obj.propertyIsEnumerable &&
                obj.propertyIsEnumerable[UID_HASH_KEY])
            )
              return hash;
            if (void 0 !== (hash = getIENodeHash(obj))) return hash;
          }
          if (
            ((hash = ++objHashUID),
            1073741824 & objHashUID && (objHashUID = 0),
            usingWeakMap)
          )
            weakMap.set(obj, hash);
          else {
            if (void 0 !== isExtensible && !1 === isExtensible(obj))
              throw new Error(
                'Non-extensible objects are not allowed as keys.'
              );
            if (canDefineProperty)
              Object.defineProperty(obj, UID_HASH_KEY, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: hash,
              });
            else if (
              void 0 !== obj.propertyIsEnumerable &&
              obj.propertyIsEnumerable ===
                obj.constructor.prototype.propertyIsEnumerable
            )
              (obj.propertyIsEnumerable = function() {
                return this.constructor.prototype.propertyIsEnumerable.apply(
                  this,
                  arguments
                );
              }),
                (obj.propertyIsEnumerable[UID_HASH_KEY] = hash);
            else {
              if (void 0 === obj.nodeType)
                throw new Error(
                  'Unable to set a non-enumerable property on object.'
                );
              obj[UID_HASH_KEY] = hash;
            }
          }
          return hash;
        }
        var isExtensible = Object.isExtensible,
          canDefineProperty = (function() {
            try {
              return Object.defineProperty({}, '@', {}), !0;
            } catch (e) {
              return !1;
            }
          })();
        function getIENodeHash(node) {
          if (node && node.nodeType > 0)
            switch (node.nodeType) {
              case 1:
                return node.uniqueID;
              case 9:
                return node.documentElement && node.documentElement.uniqueID;
            }
        }
        var weakMap,
          usingWeakMap = 'function' == typeof WeakMap;
        usingWeakMap && (weakMap = new WeakMap());
        var objHashUID = 0,
          UID_HASH_KEY = '__immutablehash__';
        'function' == typeof Symbol && (UID_HASH_KEY = Symbol(UID_HASH_KEY));
        var STRING_HASH_CACHE_MIN_STRLEN = 16,
          STRING_HASH_CACHE_MAX_SIZE = 255,
          STRING_HASH_CACHE_SIZE = 0,
          stringHashCache = {};
        function assertNotInfinite(size) {
          invariant(
            size !== 1 / 0,
            'Cannot perform this action with an infinite size.'
          );
        }
        function Map(value) {
          return null == value
            ? emptyMap()
            : isMap(value) && !isOrdered(value)
              ? value
              : emptyMap().withMutations(function(map) {
                  var iter = KeyedIterable(value);
                  assertNotInfinite(iter.size),
                    iter.forEach(function(v, k) {
                      return map.set(k, v);
                    });
                });
        }
        function isMap(maybeMap) {
          return !(!maybeMap || !maybeMap[IS_MAP_SENTINEL]);
        }
        createClass(Map, KeyedCollection),
          (Map.of = function() {
            var keyValues = SLICE$0.call(arguments, 0);
            return emptyMap().withMutations(function(map) {
              for (var i = 0; i < keyValues.length; i += 2) {
                if (i + 1 >= keyValues.length)
                  throw new Error('Missing value for key: ' + keyValues[i]);
                map.set(keyValues[i], keyValues[i + 1]);
              }
            });
          }),
          (Map.prototype.toString = function() {
            return this.__toString('Map {', '}');
          }),
          (Map.prototype.get = function(k, notSetValue) {
            return this._root
              ? this._root.get(0, void 0, k, notSetValue)
              : notSetValue;
          }),
          (Map.prototype.set = function(k, v) {
            return updateMap(this, k, v);
          }),
          (Map.prototype.setIn = function(keyPath, v) {
            return this.updateIn(keyPath, NOT_SET, function() {
              return v;
            });
          }),
          (Map.prototype.remove = function(k) {
            return updateMap(this, k, NOT_SET);
          }),
          (Map.prototype.deleteIn = function(keyPath) {
            return this.updateIn(keyPath, function() {
              return NOT_SET;
            });
          }),
          (Map.prototype.update = function(k, notSetValue, updater) {
            return 1 === arguments.length
              ? k(this)
              : this.updateIn([k], notSetValue, updater);
          }),
          (Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
            updater || ((updater = notSetValue), (notSetValue = void 0));
            var updatedValue = updateInDeepMap(
              this,
              forceIterator(keyPath),
              notSetValue,
              updater
            );
            return updatedValue === NOT_SET ? void 0 : updatedValue;
          }),
          (Map.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = 0),
                  (this._root = null),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : emptyMap();
          }),
          (Map.prototype.merge = function() {
            return mergeIntoMapWith(this, void 0, arguments);
          }),
          (Map.prototype.mergeWith = function(merger) {
            return mergeIntoMapWith(this, merger, SLICE$0.call(arguments, 1));
          }),
          (Map.prototype.mergeIn = function(keyPath) {
            var iters = SLICE$0.call(arguments, 1);
            return this.updateIn(keyPath, emptyMap(), function(m) {
              return 'function' == typeof m.merge
                ? m.merge.apply(m, iters)
                : iters[iters.length - 1];
            });
          }),
          (Map.prototype.mergeDeep = function() {
            return mergeIntoMapWith(this, deepMerger, arguments);
          }),
          (Map.prototype.mergeDeepWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoMapWith(this, deepMergerWith(merger), iters);
          }),
          (Map.prototype.mergeDeepIn = function(keyPath) {
            var iters = SLICE$0.call(arguments, 1);
            return this.updateIn(keyPath, emptyMap(), function(m) {
              return 'function' == typeof m.mergeDeep
                ? m.mergeDeep.apply(m, iters)
                : iters[iters.length - 1];
            });
          }),
          (Map.prototype.sort = function(comparator) {
            return OrderedMap(sortFactory(this, comparator));
          }),
          (Map.prototype.sortBy = function(mapper, comparator) {
            return OrderedMap(sortFactory(this, comparator, mapper));
          }),
          (Map.prototype.withMutations = function(fn) {
            var mutable = this.asMutable();
            return (
              fn(mutable),
              mutable.wasAltered()
                ? mutable.__ensureOwner(this.__ownerID)
                : this
            );
          }),
          (Map.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
          }),
          (Map.prototype.asImmutable = function() {
            return this.__ensureOwner();
          }),
          (Map.prototype.wasAltered = function() {
            return this.__altered;
          }),
          (Map.prototype.__iterator = function(type, reverse) {
            return new MapIterator(this, type, reverse);
          }),
          (Map.prototype.__iterate = function(fn, reverse) {
            var this$0 = this,
              iterations = 0;
            return (
              this._root &&
                this._root.iterate(function(entry) {
                  return iterations++, fn(entry[1], entry[0], this$0);
                }, reverse),
              iterations
            );
          }),
          (Map.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID
              ? this
              : ownerID
                ? makeMap(this.size, this._root, ownerID, this.__hash)
                : ((this.__ownerID = ownerID), (this.__altered = !1), this);
          }),
          (Map.isMap = isMap);
        var EMPTY_MAP,
          IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@',
          MapPrototype = Map.prototype;
        function ArrayMapNode(ownerID, entries) {
          (this.ownerID = ownerID), (this.entries = entries);
        }
        function BitmapIndexedNode(ownerID, bitmap, nodes) {
          (this.ownerID = ownerID),
            (this.bitmap = bitmap),
            (this.nodes = nodes);
        }
        function HashArrayMapNode(ownerID, count, nodes) {
          (this.ownerID = ownerID), (this.count = count), (this.nodes = nodes);
        }
        function HashCollisionNode(ownerID, keyHash, entries) {
          (this.ownerID = ownerID),
            (this.keyHash = keyHash),
            (this.entries = entries);
        }
        function ValueNode(ownerID, keyHash, entry) {
          (this.ownerID = ownerID),
            (this.keyHash = keyHash),
            (this.entry = entry);
        }
        function MapIterator(map, type, reverse) {
          (this._type = type),
            (this._reverse = reverse),
            (this._stack = map._root && mapIteratorFrame(map._root));
        }
        function mapIteratorValue(type, entry) {
          return iteratorValue(type, entry[0], entry[1]);
        }
        function mapIteratorFrame(node, prev) {
          return { node: node, index: 0, __prev: prev };
        }
        function makeMap(size, root, ownerID, hash) {
          var map = Object.create(MapPrototype);
          return (
            (map.size = size),
            (map._root = root),
            (map.__ownerID = ownerID),
            (map.__hash = hash),
            (map.__altered = !1),
            map
          );
        }
        function emptyMap() {
          return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
        }
        function updateMap(map, k, v) {
          var newRoot, newSize;
          if (map._root) {
            var didChangeSize = MakeRef(CHANGE_LENGTH),
              didAlter = MakeRef(DID_ALTER);
            if (
              ((newRoot = updateNode(
                map._root,
                map.__ownerID,
                0,
                void 0,
                k,
                v,
                didChangeSize,
                didAlter
              )),
              !didAlter.value)
            )
              return map;
            newSize =
              map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
          } else {
            if (v === NOT_SET) return map;
            (newSize = 1),
              (newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]));
          }
          return map.__ownerID
            ? ((map.size = newSize),
              (map._root = newRoot),
              (map.__hash = void 0),
              (map.__altered = !0),
              map)
            : newRoot
              ? makeMap(newSize, newRoot)
              : emptyMap();
        }
        function updateNode(
          node,
          ownerID,
          shift,
          keyHash,
          key,
          value,
          didChangeSize,
          didAlter
        ) {
          return node
            ? node.update(
                ownerID,
                shift,
                keyHash,
                key,
                value,
                didChangeSize,
                didAlter
              )
            : value === NOT_SET
              ? node
              : (SetRef(didAlter),
                SetRef(didChangeSize),
                new ValueNode(ownerID, keyHash, [key, value]));
        }
        function isLeafNode(node) {
          return (
            node.constructor === ValueNode ||
            node.constructor === HashCollisionNode
          );
        }
        function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
          if (node.keyHash === keyHash)
            return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
          var newNode,
            idx1 = (0 === shift ? node.keyHash : node.keyHash >>> shift) & MASK,
            idx2 = (0 === shift ? keyHash : keyHash >>> shift) & MASK;
          return new BitmapIndexedNode(
            ownerID,
            (1 << idx1) | (1 << idx2),
            idx1 === idx2
              ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
              : ((newNode = new ValueNode(ownerID, keyHash, entry)),
                idx1 < idx2 ? [node, newNode] : [newNode, node])
          );
        }
        function createNodes(ownerID, entries, key, value) {
          ownerID || (ownerID = new OwnerID());
          for (
            var node = new ValueNode(ownerID, hash(key), [key, value]), ii = 0;
            ii < entries.length;
            ii++
          ) {
            var entry = entries[ii];
            node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
          }
          return node;
        }
        function packNodes(ownerID, nodes, count, excluding) {
          for (
            var bitmap = 0,
              packedII = 0,
              packedNodes = new Array(count),
              ii = 0,
              bit = 1,
              len = nodes.length;
            ii < len;
            ii++, bit <<= 1
          ) {
            var node = nodes[ii];
            void 0 !== node &&
              ii !== excluding &&
              ((bitmap |= bit), (packedNodes[packedII++] = node));
          }
          return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
        }
        function expandNodes(ownerID, nodes, bitmap, including, node) {
          for (
            var count = 0, expandedNodes = new Array(SIZE), ii = 0;
            0 !== bitmap;
            ii++, bitmap >>>= 1
          )
            expandedNodes[ii] = 1 & bitmap ? nodes[count++] : void 0;
          return (
            (expandedNodes[including] = node),
            new HashArrayMapNode(ownerID, count + 1, expandedNodes)
          );
        }
        function mergeIntoMapWith(map, merger, iterables) {
          for (var iters = [], ii = 0; ii < iterables.length; ii++) {
            var value = iterables[ii],
              iter = KeyedIterable(value);
            isIterable(value) ||
              (iter = iter.map(function(v) {
                return fromJS(v);
              })),
              iters.push(iter);
          }
          return mergeIntoCollectionWith(map, merger, iters);
        }
        function deepMerger(existing, value, key) {
          return existing && existing.mergeDeep && isIterable(value)
            ? existing.mergeDeep(value)
            : is(existing, value)
              ? existing
              : value;
        }
        function deepMergerWith(merger) {
          return function(existing, value, key) {
            if (existing && existing.mergeDeepWith && isIterable(value))
              return existing.mergeDeepWith(merger, value);
            var nextValue = merger(existing, value, key);
            return is(existing, nextValue) ? existing : nextValue;
          };
        }
        function mergeIntoCollectionWith(collection, merger, iters) {
          return 0 ===
            (iters = iters.filter(function(x) {
              return 0 !== x.size;
            })).length
            ? collection
            : 0 !== collection.size ||
              collection.__ownerID ||
              1 !== iters.length
              ? collection.withMutations(function(collection) {
                  for (
                    var mergeIntoMap = merger
                        ? function(value, key) {
                            collection.update(key, NOT_SET, function(existing) {
                              return existing === NOT_SET
                                ? value
                                : merger(existing, value, key);
                            });
                          }
                        : function(value, key) {
                            collection.set(key, value);
                          },
                      ii = 0;
                    ii < iters.length;
                    ii++
                  )
                    iters[ii].forEach(mergeIntoMap);
                })
              : collection.constructor(iters[0]);
        }
        function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
          var isNotSet = existing === NOT_SET,
            step = keyPathIter.next();
          if (step.done) {
            var existingValue = isNotSet ? notSetValue : existing,
              newValue = updater(existingValue);
            return newValue === existingValue ? existing : newValue;
          }
          invariant(isNotSet || (existing && existing.set), 'invalid keyPath');
          var key = step.value,
            nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET),
            nextUpdated = updateInDeepMap(
              nextExisting,
              keyPathIter,
              notSetValue,
              updater
            );
          return nextUpdated === nextExisting
            ? existing
            : nextUpdated === NOT_SET
              ? existing.remove(key)
              : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
        }
        function popCount(x) {
          return (
            (x =
              ((x =
                (858993459 & (x -= (x >> 1) & 1431655765)) +
                ((x >> 2) & 858993459)) +
                (x >> 4)) &
              252645135),
            (x += x >> 8),
            127 & (x += x >> 16)
          );
        }
        function setIn(array, idx, val, canEdit) {
          var newArray = canEdit ? array : arrCopy(array);
          return (newArray[idx] = val), newArray;
        }
        function spliceIn(array, idx, val, canEdit) {
          var newLen = array.length + 1;
          if (canEdit && idx + 1 === newLen) return (array[idx] = val), array;
          for (
            var newArray = new Array(newLen), after = 0, ii = 0;
            ii < newLen;
            ii++
          )
            ii === idx
              ? ((newArray[ii] = val), (after = -1))
              : (newArray[ii] = array[ii + after]);
          return newArray;
        }
        function spliceOut(array, idx, canEdit) {
          var newLen = array.length - 1;
          if (canEdit && idx === newLen) return array.pop(), array;
          for (
            var newArray = new Array(newLen), after = 0, ii = 0;
            ii < newLen;
            ii++
          )
            ii === idx && (after = 1), (newArray[ii] = array[ii + after]);
          return newArray;
        }
        (MapPrototype[IS_MAP_SENTINEL] = !0),
          (MapPrototype[DELETE] = MapPrototype.remove),
          (MapPrototype.removeIn = MapPrototype.deleteIn),
          (ArrayMapNode.prototype.get = function(
            shift,
            keyHash,
            key,
            notSetValue
          ) {
            for (
              var entries = this.entries, ii = 0, len = entries.length;
              ii < len;
              ii++
            )
              if (is(key, entries[ii][0])) return entries[ii][1];
            return notSetValue;
          }),
          (ArrayMapNode.prototype.update = function(
            ownerID,
            shift,
            keyHash,
            key,
            value,
            didChangeSize,
            didAlter
          ) {
            for (
              var removed = value === NOT_SET,
                entries = this.entries,
                idx = 0,
                len = entries.length;
              idx < len && !is(key, entries[idx][0]);
              idx++
            );
            var exists = idx < len;
            if (exists ? entries[idx][1] === value : removed) return this;
            if (
              (SetRef(didAlter),
              (removed || !exists) && SetRef(didChangeSize),
              !removed || 1 !== entries.length)
            ) {
              if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE)
                return createNodes(ownerID, entries, key, value);
              var isEditable = ownerID && ownerID === this.ownerID,
                newEntries = isEditable ? entries : arrCopy(entries);
              return (
                exists
                  ? removed
                    ? idx === len - 1
                      ? newEntries.pop()
                      : (newEntries[idx] = newEntries.pop())
                    : (newEntries[idx] = [key, value])
                  : newEntries.push([key, value]),
                isEditable
                  ? ((this.entries = newEntries), this)
                  : new ArrayMapNode(ownerID, newEntries)
              );
            }
          }),
          (BitmapIndexedNode.prototype.get = function(
            shift,
            keyHash,
            key,
            notSetValue
          ) {
            void 0 === keyHash && (keyHash = hash(key));
            var bit = 1 << ((0 === shift ? keyHash : keyHash >>> shift) & MASK),
              bitmap = this.bitmap;
            return 0 == (bitmap & bit)
              ? notSetValue
              : this.nodes[popCount(bitmap & (bit - 1))].get(
                  shift + SHIFT,
                  keyHash,
                  key,
                  notSetValue
                );
          }),
          (BitmapIndexedNode.prototype.update = function(
            ownerID,
            shift,
            keyHash,
            key,
            value,
            didChangeSize,
            didAlter
          ) {
            void 0 === keyHash && (keyHash = hash(key));
            var keyHashFrag =
                (0 === shift ? keyHash : keyHash >>> shift) & MASK,
              bit = 1 << keyHashFrag,
              bitmap = this.bitmap,
              exists = 0 != (bitmap & bit);
            if (!exists && value === NOT_SET) return this;
            var idx = popCount(bitmap & (bit - 1)),
              nodes = this.nodes,
              node = exists ? nodes[idx] : void 0,
              newNode = updateNode(
                node,
                ownerID,
                shift + SHIFT,
                keyHash,
                key,
                value,
                didChangeSize,
                didAlter
              );
            if (newNode === node) return this;
            if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE)
              return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
            if (
              exists &&
              !newNode &&
              2 === nodes.length &&
              isLeafNode(nodes[1 ^ idx])
            )
              return nodes[1 ^ idx];
            if (exists && newNode && 1 === nodes.length && isLeafNode(newNode))
              return newNode;
            var isEditable = ownerID && ownerID === this.ownerID,
              newBitmap = exists
                ? newNode
                  ? bitmap
                  : bitmap ^ bit
                : bitmap | bit,
              newNodes = exists
                ? newNode
                  ? setIn(nodes, idx, newNode, isEditable)
                  : spliceOut(nodes, idx, isEditable)
                : spliceIn(nodes, idx, newNode, isEditable);
            return isEditable
              ? ((this.bitmap = newBitmap), (this.nodes = newNodes), this)
              : new BitmapIndexedNode(ownerID, newBitmap, newNodes);
          }),
          (HashArrayMapNode.prototype.get = function(
            shift,
            keyHash,
            key,
            notSetValue
          ) {
            void 0 === keyHash && (keyHash = hash(key));
            var idx = (0 === shift ? keyHash : keyHash >>> shift) & MASK,
              node = this.nodes[idx];
            return node
              ? node.get(shift + SHIFT, keyHash, key, notSetValue)
              : notSetValue;
          }),
          (HashArrayMapNode.prototype.update = function(
            ownerID,
            shift,
            keyHash,
            key,
            value,
            didChangeSize,
            didAlter
          ) {
            void 0 === keyHash && (keyHash = hash(key));
            var idx = (0 === shift ? keyHash : keyHash >>> shift) & MASK,
              removed = value === NOT_SET,
              nodes = this.nodes,
              node = nodes[idx];
            if (removed && !node) return this;
            var newNode = updateNode(
              node,
              ownerID,
              shift + SHIFT,
              keyHash,
              key,
              value,
              didChangeSize,
              didAlter
            );
            if (newNode === node) return this;
            var newCount = this.count;
            if (node) {
              if (!newNode && --newCount < MIN_HASH_ARRAY_MAP_SIZE)
                return packNodes(ownerID, nodes, newCount, idx);
            } else newCount++;
            var isEditable = ownerID && ownerID === this.ownerID,
              newNodes = setIn(nodes, idx, newNode, isEditable);
            return isEditable
              ? ((this.count = newCount), (this.nodes = newNodes), this)
              : new HashArrayMapNode(ownerID, newCount, newNodes);
          }),
          (HashCollisionNode.prototype.get = function(
            shift,
            keyHash,
            key,
            notSetValue
          ) {
            for (
              var entries = this.entries, ii = 0, len = entries.length;
              ii < len;
              ii++
            )
              if (is(key, entries[ii][0])) return entries[ii][1];
            return notSetValue;
          }),
          (HashCollisionNode.prototype.update = function(
            ownerID,
            shift,
            keyHash,
            key,
            value,
            didChangeSize,
            didAlter
          ) {
            void 0 === keyHash && (keyHash = hash(key));
            var removed = value === NOT_SET;
            if (keyHash !== this.keyHash)
              return removed
                ? this
                : (SetRef(didAlter),
                  SetRef(didChangeSize),
                  mergeIntoNode(this, ownerID, shift, keyHash, [key, value]));
            for (
              var entries = this.entries, idx = 0, len = entries.length;
              idx < len && !is(key, entries[idx][0]);
              idx++
            );
            var exists = idx < len;
            if (exists ? entries[idx][1] === value : removed) return this;
            if (
              (SetRef(didAlter),
              (removed || !exists) && SetRef(didChangeSize),
              removed && 2 === len)
            )
              return new ValueNode(ownerID, this.keyHash, entries[1 ^ idx]);
            var isEditable = ownerID && ownerID === this.ownerID,
              newEntries = isEditable ? entries : arrCopy(entries);
            return (
              exists
                ? removed
                  ? idx === len - 1
                    ? newEntries.pop()
                    : (newEntries[idx] = newEntries.pop())
                  : (newEntries[idx] = [key, value])
                : newEntries.push([key, value]),
              isEditable
                ? ((this.entries = newEntries), this)
                : new HashCollisionNode(ownerID, this.keyHash, newEntries)
            );
          }),
          (ValueNode.prototype.get = function(
            shift,
            keyHash,
            key,
            notSetValue
          ) {
            return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
          }),
          (ValueNode.prototype.update = function(
            ownerID,
            shift,
            keyHash,
            key,
            value,
            didChangeSize,
            didAlter
          ) {
            var removed = value === NOT_SET,
              keyMatch = is(key, this.entry[0]);
            return (keyMatch
            ? value === this.entry[1]
            : removed)
              ? this
              : (SetRef(didAlter),
                removed
                  ? void SetRef(didChangeSize)
                  : keyMatch
                    ? ownerID && ownerID === this.ownerID
                      ? ((this.entry[1] = value), this)
                      : new ValueNode(ownerID, this.keyHash, [key, value])
                    : (SetRef(didChangeSize),
                      mergeIntoNode(this, ownerID, shift, hash(key), [
                        key,
                        value,
                      ])));
          }),
          (ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(
            fn,
            reverse
          ) {
            for (
              var entries = this.entries, ii = 0, maxIndex = entries.length - 1;
              ii <= maxIndex;
              ii++
            )
              if (!1 === fn(entries[reverse ? maxIndex - ii : ii])) return !1;
          }),
          (BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(
            fn,
            reverse
          ) {
            for (
              var nodes = this.nodes, ii = 0, maxIndex = nodes.length - 1;
              ii <= maxIndex;
              ii++
            ) {
              var node = nodes[reverse ? maxIndex - ii : ii];
              if (node && !1 === node.iterate(fn, reverse)) return !1;
            }
          }),
          (ValueNode.prototype.iterate = function(fn, reverse) {
            return fn(this.entry);
          }),
          createClass(MapIterator, Iterator),
          (MapIterator.prototype.next = function() {
            for (var type = this._type, stack = this._stack; stack; ) {
              var maxIndex,
                node = stack.node,
                index = stack.index++;
              if (node.entry) {
                if (0 === index) return mapIteratorValue(type, node.entry);
              } else if (node.entries) {
                if (index <= (maxIndex = node.entries.length - 1))
                  return mapIteratorValue(
                    type,
                    node.entries[this._reverse ? maxIndex - index : index]
                  );
              } else if (index <= (maxIndex = node.nodes.length - 1)) {
                var subNode =
                  node.nodes[this._reverse ? maxIndex - index : index];
                if (subNode) {
                  if (subNode.entry)
                    return mapIteratorValue(type, subNode.entry);
                  stack = this._stack = mapIteratorFrame(subNode, stack);
                }
                continue;
              }
              stack = this._stack = this._stack.__prev;
            }
            return iteratorDone();
          });
        var MAX_ARRAY_MAP_SIZE = SIZE / 4,
          MAX_BITMAP_INDEXED_SIZE = SIZE / 2,
          MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
        function List(value) {
          var empty = emptyList();
          if (null == value) return empty;
          if (isList(value)) return value;
          var iter = IndexedIterable(value),
            size = iter.size;
          return 0 === size
            ? empty
            : (assertNotInfinite(size),
              size > 0 && size < SIZE
                ? makeList(0, size, SHIFT, null, new VNode(iter.toArray()))
                : empty.withMutations(function(list) {
                    list.setSize(size),
                      iter.forEach(function(v, i) {
                        return list.set(i, v);
                      });
                  }));
        }
        function isList(maybeList) {
          return !(!maybeList || !maybeList[IS_LIST_SENTINEL]);
        }
        createClass(List, IndexedCollection),
          (List.of = function() {
            return this(arguments);
          }),
          (List.prototype.toString = function() {
            return this.__toString('List [', ']');
          }),
          (List.prototype.get = function(index, notSetValue) {
            if ((index = wrapIndex(this, index)) >= 0 && index < this.size) {
              var node = listNodeFor(this, (index += this._origin));
              return node && node.array[index & MASK];
            }
            return notSetValue;
          }),
          (List.prototype.set = function(index, value) {
            return updateList(this, index, value);
          }),
          (List.prototype.remove = function(index) {
            return this.has(index)
              ? 0 === index
                ? this.shift()
                : index === this.size - 1
                  ? this.pop()
                  : this.splice(index, 1)
              : this;
          }),
          (List.prototype.insert = function(index, value) {
            return this.splice(index, 0, value);
          }),
          (List.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = this._origin = this._capacity = 0),
                  (this._level = SHIFT),
                  (this._root = this._tail = null),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : emptyList();
          }),
          (List.prototype.push = function() {
            var values = arguments,
              oldSize = this.size;
            return this.withMutations(function(list) {
              setListBounds(list, 0, oldSize + values.length);
              for (var ii = 0; ii < values.length; ii++)
                list.set(oldSize + ii, values[ii]);
            });
          }),
          (List.prototype.pop = function() {
            return setListBounds(this, 0, -1);
          }),
          (List.prototype.unshift = function() {
            var values = arguments;
            return this.withMutations(function(list) {
              setListBounds(list, -values.length);
              for (var ii = 0; ii < values.length; ii++)
                list.set(ii, values[ii]);
            });
          }),
          (List.prototype.shift = function() {
            return setListBounds(this, 1);
          }),
          (List.prototype.merge = function() {
            return mergeIntoListWith(this, void 0, arguments);
          }),
          (List.prototype.mergeWith = function(merger) {
            return mergeIntoListWith(this, merger, SLICE$0.call(arguments, 1));
          }),
          (List.prototype.mergeDeep = function() {
            return mergeIntoListWith(this, deepMerger, arguments);
          }),
          (List.prototype.mergeDeepWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoListWith(this, deepMergerWith(merger), iters);
          }),
          (List.prototype.setSize = function(size) {
            return setListBounds(this, 0, size);
          }),
          (List.prototype.slice = function(begin, end) {
            var size = this.size;
            return wholeSlice(begin, end, size)
              ? this
              : setListBounds(
                  this,
                  resolveBegin(begin, size),
                  resolveEnd(end, size)
                );
          }),
          (List.prototype.__iterator = function(type, reverse) {
            var index = 0,
              values = iterateList(this, reverse);
            return new Iterator(function() {
              var value = values();
              return value === DONE
                ? iteratorDone()
                : iteratorValue(type, index++, value);
            });
          }),
          (List.prototype.__iterate = function(fn, reverse) {
            for (
              var value, index = 0, values = iterateList(this, reverse);
              (value = values()) !== DONE && !1 !== fn(value, index++, this);

            );
            return index;
          }),
          (List.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID
              ? this
              : ownerID
                ? makeList(
                    this._origin,
                    this._capacity,
                    this._level,
                    this._root,
                    this._tail,
                    ownerID,
                    this.__hash
                  )
                : ((this.__ownerID = ownerID), this);
          }),
          (List.isList = isList);
        var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@',
          ListPrototype = List.prototype;
        function VNode(array, ownerID) {
          (this.array = array), (this.ownerID = ownerID);
        }
        (ListPrototype[IS_LIST_SENTINEL] = !0),
          (ListPrototype[DELETE] = ListPrototype.remove),
          (ListPrototype.setIn = MapPrototype.setIn),
          (ListPrototype.deleteIn = ListPrototype.removeIn =
            MapPrototype.removeIn),
          (ListPrototype.update = MapPrototype.update),
          (ListPrototype.updateIn = MapPrototype.updateIn),
          (ListPrototype.mergeIn = MapPrototype.mergeIn),
          (ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn),
          (ListPrototype.withMutations = MapPrototype.withMutations),
          (ListPrototype.asMutable = MapPrototype.asMutable),
          (ListPrototype.asImmutable = MapPrototype.asImmutable),
          (ListPrototype.wasAltered = MapPrototype.wasAltered),
          (VNode.prototype.removeBefore = function(ownerID, level, index) {
            if (index === level ? 1 << level : 0 === this.array.length)
              return this;
            var originIndex = (index >>> level) & MASK;
            if (originIndex >= this.array.length) return new VNode([], ownerID);
            var newChild,
              removingFirst = 0 === originIndex;
            if (level > 0) {
              var oldChild = this.array[originIndex];
              if (
                (newChild =
                  oldChild &&
                  oldChild.removeBefore(ownerID, level - SHIFT, index)) ===
                  oldChild &&
                removingFirst
              )
                return this;
            }
            if (removingFirst && !newChild) return this;
            var editable = editableVNode(this, ownerID);
            if (!removingFirst)
              for (var ii = 0; ii < originIndex; ii++)
                editable.array[ii] = void 0;
            return (
              newChild && (editable.array[originIndex] = newChild), editable
            );
          }),
          (VNode.prototype.removeAfter = function(ownerID, level, index) {
            if (index === (level ? 1 << level : 0) || 0 === this.array.length)
              return this;
            var newChild,
              sizeIndex = ((index - 1) >>> level) & MASK;
            if (sizeIndex >= this.array.length) return this;
            if (level > 0) {
              var oldChild = this.array[sizeIndex];
              if (
                (newChild =
                  oldChild &&
                  oldChild.removeAfter(ownerID, level - SHIFT, index)) ===
                  oldChild &&
                sizeIndex === this.array.length - 1
              )
                return this;
            }
            var editable = editableVNode(this, ownerID);
            return (
              editable.array.splice(sizeIndex + 1),
              newChild && (editable.array[sizeIndex] = newChild),
              editable
            );
          });
        var EMPTY_LIST,
          EMPTY_ORDERED_MAP,
          DONE = {};
        function iterateList(list, reverse) {
          var left = list._origin,
            right = list._capacity,
            tailPos = getTailOffset(right),
            tail = list._tail;
          return iterateNodeOrLeaf(list._root, list._level, 0);
          function iterateNodeOrLeaf(node, level, offset) {
            return 0 === level
              ? iterateLeaf(node, offset)
              : iterateNode(node, level, offset);
          }
          function iterateLeaf(node, offset) {
            var array =
                offset === tailPos ? tail && tail.array : node && node.array,
              from = offset > left ? 0 : left - offset,
              to = right - offset;
            return (
              to > SIZE && (to = SIZE),
              function() {
                if (from === to) return DONE;
                var idx = reverse ? --to : from++;
                return array && array[idx];
              }
            );
          }
          function iterateNode(node, level, offset) {
            var values,
              array = node && node.array,
              from = offset > left ? 0 : (left - offset) >> level,
              to = 1 + ((right - offset) >> level);
            return (
              to > SIZE && (to = SIZE),
              function() {
                for (;;) {
                  if (values) {
                    var value = values();
                    if (value !== DONE) return value;
                    values = null;
                  }
                  if (from === to) return DONE;
                  var idx = reverse ? --to : from++;
                  values = iterateNodeOrLeaf(
                    array && array[idx],
                    level - SHIFT,
                    offset + (idx << level)
                  );
                }
              }
            );
          }
        }
        function makeList(origin, capacity, level, root, tail, ownerID, hash) {
          var list = Object.create(ListPrototype);
          return (
            (list.size = capacity - origin),
            (list._origin = origin),
            (list._capacity = capacity),
            (list._level = level),
            (list._root = root),
            (list._tail = tail),
            (list.__ownerID = ownerID),
            (list.__hash = hash),
            (list.__altered = !1),
            list
          );
        }
        function emptyList() {
          return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
        }
        function updateList(list, index, value) {
          if ((index = wrapIndex(list, index)) != index) return list;
          if (index >= list.size || index < 0)
            return list.withMutations(function(list) {
              index < 0
                ? setListBounds(list, index).set(0, value)
                : setListBounds(list, 0, index + 1).set(index, value);
            });
          index += list._origin;
          var newTail = list._tail,
            newRoot = list._root,
            didAlter = MakeRef(DID_ALTER);
          return (
            index >= getTailOffset(list._capacity)
              ? (newTail = updateVNode(
                  newTail,
                  list.__ownerID,
                  0,
                  index,
                  value,
                  didAlter
                ))
              : (newRoot = updateVNode(
                  newRoot,
                  list.__ownerID,
                  list._level,
                  index,
                  value,
                  didAlter
                )),
            didAlter.value
              ? list.__ownerID
                ? ((list._root = newRoot),
                  (list._tail = newTail),
                  (list.__hash = void 0),
                  (list.__altered = !0),
                  list)
                : makeList(
                    list._origin,
                    list._capacity,
                    list._level,
                    newRoot,
                    newTail
                  )
              : list
          );
        }
        function updateVNode(node, ownerID, level, index, value, didAlter) {
          var newNode,
            idx = (index >>> level) & MASK,
            nodeHas = node && idx < node.array.length;
          if (!nodeHas && void 0 === value) return node;
          if (level > 0) {
            var lowerNode = node && node.array[idx],
              newLowerNode = updateVNode(
                lowerNode,
                ownerID,
                level - SHIFT,
                index,
                value,
                didAlter
              );
            return newLowerNode === lowerNode
              ? node
              : (((newNode = editableVNode(node, ownerID)).array[
                  idx
                ] = newLowerNode),
                newNode);
          }
          return nodeHas && node.array[idx] === value
            ? node
            : (SetRef(didAlter),
              (newNode = editableVNode(node, ownerID)),
              void 0 === value && idx === newNode.array.length - 1
                ? newNode.array.pop()
                : (newNode.array[idx] = value),
              newNode);
        }
        function editableVNode(node, ownerID) {
          return ownerID && node && ownerID === node.ownerID
            ? node
            : new VNode(node ? node.array.slice() : [], ownerID);
        }
        function listNodeFor(list, rawIndex) {
          if (rawIndex >= getTailOffset(list._capacity)) return list._tail;
          if (rawIndex < 1 << (list._level + SHIFT)) {
            for (
              var node = list._root, level = list._level;
              node && level > 0;

            )
              (node = node.array[(rawIndex >>> level) & MASK]),
                (level -= SHIFT);
            return node;
          }
        }
        function setListBounds(list, begin, end) {
          void 0 !== begin && (begin |= 0), void 0 !== end && (end |= 0);
          var owner = list.__ownerID || new OwnerID(),
            oldOrigin = list._origin,
            oldCapacity = list._capacity,
            newOrigin = oldOrigin + begin,
            newCapacity =
              void 0 === end
                ? oldCapacity
                : end < 0
                  ? oldCapacity + end
                  : oldOrigin + end;
          if (newOrigin === oldOrigin && newCapacity === oldCapacity)
            return list;
          if (newOrigin >= newCapacity) return list.clear();
          for (
            var newLevel = list._level, newRoot = list._root, offsetShift = 0;
            newOrigin + offsetShift < 0;

          )
            (newRoot = new VNode(
              newRoot && newRoot.array.length ? [void 0, newRoot] : [],
              owner
            )),
              (offsetShift += 1 << (newLevel += SHIFT));
          offsetShift &&
            ((newOrigin += offsetShift),
            (oldOrigin += offsetShift),
            (newCapacity += offsetShift),
            (oldCapacity += offsetShift));
          for (
            var oldTailOffset = getTailOffset(oldCapacity),
              newTailOffset = getTailOffset(newCapacity);
            newTailOffset >= 1 << (newLevel + SHIFT);

          )
            (newRoot = new VNode(
              newRoot && newRoot.array.length ? [newRoot] : [],
              owner
            )),
              (newLevel += SHIFT);
          var oldTail = list._tail,
            newTail =
              newTailOffset < oldTailOffset
                ? listNodeFor(list, newCapacity - 1)
                : newTailOffset > oldTailOffset
                  ? new VNode([], owner)
                  : oldTail;
          if (
            oldTail &&
            newTailOffset > oldTailOffset &&
            newOrigin < oldCapacity &&
            oldTail.array.length
          ) {
            for (
              var node = (newRoot = editableVNode(newRoot, owner)),
                level = newLevel;
              level > SHIFT;
              level -= SHIFT
            ) {
              var idx = (oldTailOffset >>> level) & MASK;
              node = node.array[idx] = editableVNode(node.array[idx], owner);
            }
            node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
          }
          if (
            (newCapacity < oldCapacity &&
              (newTail = newTail && newTail.removeAfter(owner, 0, newCapacity)),
            newOrigin >= newTailOffset)
          )
            (newOrigin -= newTailOffset),
              (newCapacity -= newTailOffset),
              (newLevel = SHIFT),
              (newRoot = null),
              (newTail = newTail && newTail.removeBefore(owner, 0, newOrigin));
          else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
            for (offsetShift = 0; newRoot; ) {
              var beginIndex = (newOrigin >>> newLevel) & MASK;
              if ((beginIndex !== newTailOffset >>> newLevel) & MASK) break;
              beginIndex && (offsetShift += (1 << newLevel) * beginIndex),
                (newLevel -= SHIFT),
                (newRoot = newRoot.array[beginIndex]);
            }
            newRoot &&
              newOrigin > oldOrigin &&
              (newRoot = newRoot.removeBefore(
                owner,
                newLevel,
                newOrigin - offsetShift
              )),
              newRoot &&
                newTailOffset < oldTailOffset &&
                (newRoot = newRoot.removeAfter(
                  owner,
                  newLevel,
                  newTailOffset - offsetShift
                )),
              offsetShift &&
                ((newOrigin -= offsetShift), (newCapacity -= offsetShift));
          }
          return list.__ownerID
            ? ((list.size = newCapacity - newOrigin),
              (list._origin = newOrigin),
              (list._capacity = newCapacity),
              (list._level = newLevel),
              (list._root = newRoot),
              (list._tail = newTail),
              (list.__hash = void 0),
              (list.__altered = !0),
              list)
            : makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
        }
        function mergeIntoListWith(list, merger, iterables) {
          for (
            var iters = [], maxSize = 0, ii = 0;
            ii < iterables.length;
            ii++
          ) {
            var value = iterables[ii],
              iter = IndexedIterable(value);
            iter.size > maxSize && (maxSize = iter.size),
              isIterable(value) ||
                (iter = iter.map(function(v) {
                  return fromJS(v);
                })),
              iters.push(iter);
          }
          return (
            maxSize > list.size && (list = list.setSize(maxSize)),
            mergeIntoCollectionWith(list, merger, iters)
          );
        }
        function getTailOffset(size) {
          return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
        }
        function OrderedMap(value) {
          return null == value
            ? emptyOrderedMap()
            : isOrderedMap(value)
              ? value
              : emptyOrderedMap().withMutations(function(map) {
                  var iter = KeyedIterable(value);
                  assertNotInfinite(iter.size),
                    iter.forEach(function(v, k) {
                      return map.set(k, v);
                    });
                });
        }
        function isOrderedMap(maybeOrderedMap) {
          return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
        }
        function makeOrderedMap(map, list, ownerID, hash) {
          var omap = Object.create(OrderedMap.prototype);
          return (
            (omap.size = map ? map.size : 0),
            (omap._map = map),
            (omap._list = list),
            (omap.__ownerID = ownerID),
            (omap.__hash = hash),
            omap
          );
        }
        function emptyOrderedMap() {
          return (
            EMPTY_ORDERED_MAP ||
            (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
          );
        }
        function updateOrderedMap(omap, k, v) {
          var newMap,
            newList,
            map = omap._map,
            list = omap._list,
            i = map.get(k),
            has = void 0 !== i;
          if (v === NOT_SET) {
            if (!has) return omap;
            list.size >= SIZE && list.size >= 2 * map.size
              ? ((newMap = (newList = list.filter(function(entry, idx) {
                  return void 0 !== entry && i !== idx;
                }))
                  .toKeyedSeq()
                  .map(function(entry) {
                    return entry[0];
                  })
                  .flip()
                  .toMap()),
                omap.__ownerID &&
                  (newMap.__ownerID = newList.__ownerID = omap.__ownerID))
              : ((newMap = map.remove(k)),
                (newList =
                  i === list.size - 1 ? list.pop() : list.set(i, void 0)));
          } else if (has) {
            if (v === list.get(i)[1]) return omap;
            (newMap = map), (newList = list.set(i, [k, v]));
          } else
            (newMap = map.set(k, list.size)),
              (newList = list.set(list.size, [k, v]));
          return omap.__ownerID
            ? ((omap.size = newMap.size),
              (omap._map = newMap),
              (omap._list = newList),
              (omap.__hash = void 0),
              omap)
            : makeOrderedMap(newMap, newList);
        }
        function ToKeyedSequence(indexed, useKeys) {
          (this._iter = indexed),
            (this._useKeys = useKeys),
            (this.size = indexed.size);
        }
        function ToIndexedSequence(iter) {
          (this._iter = iter), (this.size = iter.size);
        }
        function ToSetSequence(iter) {
          (this._iter = iter), (this.size = iter.size);
        }
        function FromEntriesSequence(entries) {
          (this._iter = entries), (this.size = entries.size);
        }
        function flipFactory(iterable) {
          var flipSequence = makeSequence(iterable);
          return (
            (flipSequence._iter = iterable),
            (flipSequence.size = iterable.size),
            (flipSequence.flip = function() {
              return iterable;
            }),
            (flipSequence.reverse = function() {
              var reversedSequence = iterable.reverse.apply(this);
              return (
                (reversedSequence.flip = function() {
                  return iterable.reverse();
                }),
                reversedSequence
              );
            }),
            (flipSequence.has = function(key) {
              return iterable.includes(key);
            }),
            (flipSequence.includes = function(key) {
              return iterable.has(key);
            }),
            (flipSequence.cacheResult = cacheResultThrough),
            (flipSequence.__iterateUncached = function(fn, reverse) {
              var this$0 = this;
              return iterable.__iterate(function(v, k) {
                return !1 !== fn(k, v, this$0);
              }, reverse);
            }),
            (flipSequence.__iteratorUncached = function(type, reverse) {
              if (type === ITERATE_ENTRIES) {
                var iterator = iterable.__iterator(type, reverse);
                return new Iterator(function() {
                  var step = iterator.next();
                  if (!step.done) {
                    var k = step.value[0];
                    (step.value[0] = step.value[1]), (step.value[1] = k);
                  }
                  return step;
                });
              }
              return iterable.__iterator(
                type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
                reverse
              );
            }),
            flipSequence
          );
        }
        function mapFactory(iterable, mapper, context) {
          var mappedSequence = makeSequence(iterable);
          return (
            (mappedSequence.size = iterable.size),
            (mappedSequence.has = function(key) {
              return iterable.has(key);
            }),
            (mappedSequence.get = function(key, notSetValue) {
              var v = iterable.get(key, NOT_SET);
              return v === NOT_SET
                ? notSetValue
                : mapper.call(context, v, key, iterable);
            }),
            (mappedSequence.__iterateUncached = function(fn, reverse) {
              var this$0 = this;
              return iterable.__iterate(function(v, k, c) {
                return !1 !== fn(mapper.call(context, v, k, c), k, this$0);
              }, reverse);
            }),
            (mappedSequence.__iteratorUncached = function(type, reverse) {
              var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
              return new Iterator(function() {
                var step = iterator.next();
                if (step.done) return step;
                var entry = step.value,
                  key = entry[0];
                return iteratorValue(
                  type,
                  key,
                  mapper.call(context, entry[1], key, iterable),
                  step
                );
              });
            }),
            mappedSequence
          );
        }
        function reverseFactory(iterable, useKeys) {
          var reversedSequence = makeSequence(iterable);
          return (
            (reversedSequence._iter = iterable),
            (reversedSequence.size = iterable.size),
            (reversedSequence.reverse = function() {
              return iterable;
            }),
            iterable.flip &&
              (reversedSequence.flip = function() {
                var flipSequence = flipFactory(iterable);
                return (
                  (flipSequence.reverse = function() {
                    return iterable.flip();
                  }),
                  flipSequence
                );
              }),
            (reversedSequence.get = function(key, notSetValue) {
              return iterable.get(useKeys ? key : -1 - key, notSetValue);
            }),
            (reversedSequence.has = function(key) {
              return iterable.has(useKeys ? key : -1 - key);
            }),
            (reversedSequence.includes = function(value) {
              return iterable.includes(value);
            }),
            (reversedSequence.cacheResult = cacheResultThrough),
            (reversedSequence.__iterate = function(fn, reverse) {
              var this$0 = this;
              return iterable.__iterate(function(v, k) {
                return fn(v, k, this$0);
              }, !reverse);
            }),
            (reversedSequence.__iterator = function(type, reverse) {
              return iterable.__iterator(type, !reverse);
            }),
            reversedSequence
          );
        }
        function filterFactory(iterable, predicate, context, useKeys) {
          var filterSequence = makeSequence(iterable);
          return (
            useKeys &&
              ((filterSequence.has = function(key) {
                var v = iterable.get(key, NOT_SET);
                return (
                  v !== NOT_SET && !!predicate.call(context, v, key, iterable)
                );
              }),
              (filterSequence.get = function(key, notSetValue) {
                var v = iterable.get(key, NOT_SET);
                return v !== NOT_SET &&
                  predicate.call(context, v, key, iterable)
                  ? v
                  : notSetValue;
              })),
            (filterSequence.__iterateUncached = function(fn, reverse) {
              var this$0 = this,
                iterations = 0;
              return (
                iterable.__iterate(function(v, k, c) {
                  if (predicate.call(context, v, k, c))
                    return (
                      iterations++, fn(v, useKeys ? k : iterations - 1, this$0)
                    );
                }, reverse),
                iterations
              );
            }),
            (filterSequence.__iteratorUncached = function(type, reverse) {
              var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse),
                iterations = 0;
              return new Iterator(function() {
                for (;;) {
                  var step = iterator.next();
                  if (step.done) return step;
                  var entry = step.value,
                    key = entry[0],
                    value = entry[1];
                  if (predicate.call(context, value, key, iterable))
                    return iteratorValue(
                      type,
                      useKeys ? key : iterations++,
                      value,
                      step
                    );
                }
              });
            }),
            filterSequence
          );
        }
        function countByFactory(iterable, grouper, context) {
          var groups = Map().asMutable();
          return (
            iterable.__iterate(function(v, k) {
              groups.update(grouper.call(context, v, k, iterable), 0, function(
                a
              ) {
                return a + 1;
              });
            }),
            groups.asImmutable()
          );
        }
        function groupByFactory(iterable, grouper, context) {
          var isKeyedIter = isKeyed(iterable),
            groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
          iterable.__iterate(function(v, k) {
            groups.update(grouper.call(context, v, k, iterable), function(a) {
              return (a = a || []).push(isKeyedIter ? [k, v] : v), a;
            });
          });
          var coerce = iterableClass(iterable);
          return groups.map(function(arr) {
            return reify(iterable, coerce(arr));
          });
        }
        function sliceFactory(iterable, begin, end, useKeys) {
          var originalSize = iterable.size;
          if (
            (void 0 !== begin && (begin |= 0),
            void 0 !== end &&
              (end === 1 / 0 ? (end = originalSize) : (end |= 0)),
            wholeSlice(begin, end, originalSize))
          )
            return iterable;
          var resolvedBegin = resolveBegin(begin, originalSize),
            resolvedEnd = resolveEnd(end, originalSize);
          if (resolvedBegin != resolvedBegin || resolvedEnd != resolvedEnd)
            return sliceFactory(
              iterable.toSeq().cacheResult(),
              begin,
              end,
              useKeys
            );
          var sliceSize,
            resolvedSize = resolvedEnd - resolvedBegin;
          resolvedSize == resolvedSize &&
            (sliceSize = resolvedSize < 0 ? 0 : resolvedSize);
          var sliceSeq = makeSequence(iterable);
          return (
            (sliceSeq.size =
              0 === sliceSize
                ? sliceSize
                : (iterable.size && sliceSize) || void 0),
            !useKeys &&
              isSeq(iterable) &&
              sliceSize >= 0 &&
              (sliceSeq.get = function(index, notSetValue) {
                return (index = wrapIndex(this, index)) >= 0 &&
                  index < sliceSize
                  ? iterable.get(index + resolvedBegin, notSetValue)
                  : notSetValue;
              }),
            (sliceSeq.__iterateUncached = function(fn, reverse) {
              var this$0 = this;
              if (0 === sliceSize) return 0;
              if (reverse) return this.cacheResult().__iterate(fn, reverse);
              var skipped = 0,
                isSkipping = !0,
                iterations = 0;
              return (
                iterable.__iterate(function(v, k) {
                  if (!isSkipping || !(isSkipping = skipped++ < resolvedBegin))
                    return (
                      iterations++,
                      !1 !== fn(v, useKeys ? k : iterations - 1, this$0) &&
                        iterations !== sliceSize
                    );
                }),
                iterations
              );
            }),
            (sliceSeq.__iteratorUncached = function(type, reverse) {
              if (0 !== sliceSize && reverse)
                return this.cacheResult().__iterator(type, reverse);
              var iterator =
                  0 !== sliceSize && iterable.__iterator(type, reverse),
                skipped = 0,
                iterations = 0;
              return new Iterator(function() {
                for (; skipped++ < resolvedBegin; ) iterator.next();
                if (++iterations > sliceSize) return iteratorDone();
                var step = iterator.next();
                return useKeys || type === ITERATE_VALUES
                  ? step
                  : iteratorValue(
                      type,
                      iterations - 1,
                      type === ITERATE_KEYS ? void 0 : step.value[1],
                      step
                    );
              });
            }),
            sliceSeq
          );
        }
        function takeWhileFactory(iterable, predicate, context) {
          var takeSequence = makeSequence(iterable);
          return (
            (takeSequence.__iterateUncached = function(fn, reverse) {
              var this$0 = this;
              if (reverse) return this.cacheResult().__iterate(fn, reverse);
              var iterations = 0;
              return (
                iterable.__iterate(function(v, k, c) {
                  return (
                    predicate.call(context, v, k, c) &&
                    ++iterations &&
                    fn(v, k, this$0)
                  );
                }),
                iterations
              );
            }),
            (takeSequence.__iteratorUncached = function(type, reverse) {
              var this$0 = this;
              if (reverse) return this.cacheResult().__iterator(type, reverse);
              var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse),
                iterating = !0;
              return new Iterator(function() {
                if (!iterating) return iteratorDone();
                var step = iterator.next();
                if (step.done) return step;
                var entry = step.value,
                  k = entry[0],
                  v = entry[1];
                return predicate.call(context, v, k, this$0)
                  ? type === ITERATE_ENTRIES
                    ? step
                    : iteratorValue(type, k, v, step)
                  : ((iterating = !1), iteratorDone());
              });
            }),
            takeSequence
          );
        }
        function skipWhileFactory(iterable, predicate, context, useKeys) {
          var skipSequence = makeSequence(iterable);
          return (
            (skipSequence.__iterateUncached = function(fn, reverse) {
              var this$0 = this;
              if (reverse) return this.cacheResult().__iterate(fn, reverse);
              var isSkipping = !0,
                iterations = 0;
              return (
                iterable.__iterate(function(v, k, c) {
                  if (
                    !isSkipping ||
                    !(isSkipping = predicate.call(context, v, k, c))
                  )
                    return (
                      iterations++, fn(v, useKeys ? k : iterations - 1, this$0)
                    );
                }),
                iterations
              );
            }),
            (skipSequence.__iteratorUncached = function(type, reverse) {
              var this$0 = this;
              if (reverse) return this.cacheResult().__iterator(type, reverse);
              var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse),
                skipping = !0,
                iterations = 0;
              return new Iterator(function() {
                var step, k, v;
                do {
                  if ((step = iterator.next()).done)
                    return useKeys || type === ITERATE_VALUES
                      ? step
                      : iteratorValue(
                          type,
                          iterations++,
                          type === ITERATE_KEYS ? void 0 : step.value[1],
                          step
                        );
                  var entry = step.value;
                  (k = entry[0]),
                    (v = entry[1]),
                    skipping &&
                      (skipping = predicate.call(context, v, k, this$0));
                } while (skipping);
                return type === ITERATE_ENTRIES
                  ? step
                  : iteratorValue(type, k, v, step);
              });
            }),
            skipSequence
          );
        }
        function concatFactory(iterable, values) {
          var isKeyedIterable = isKeyed(iterable),
            iters = [iterable]
              .concat(values)
              .map(function(v) {
                return (
                  isIterable(v)
                    ? isKeyedIterable && (v = KeyedIterable(v))
                    : (v = isKeyedIterable
                        ? keyedSeqFromValue(v)
                        : indexedSeqFromValue(Array.isArray(v) ? v : [v])),
                  v
                );
              })
              .filter(function(v) {
                return 0 !== v.size;
              });
          if (0 === iters.length) return iterable;
          if (1 === iters.length) {
            var singleton = iters[0];
            if (
              singleton === iterable ||
              (isKeyedIterable && isKeyed(singleton)) ||
              (isIndexed(iterable) && isIndexed(singleton))
            )
              return singleton;
          }
          var concatSeq = new ArraySeq(iters);
          return (
            isKeyedIterable
              ? (concatSeq = concatSeq.toKeyedSeq())
              : isIndexed(iterable) || (concatSeq = concatSeq.toSetSeq()),
            ((concatSeq = concatSeq.flatten(!0)).size = iters.reduce(function(
              sum,
              seq
            ) {
              if (void 0 !== sum) {
                var size = seq.size;
                if (void 0 !== size) return sum + size;
              }
            },
            0)),
            concatSeq
          );
        }
        function flattenFactory(iterable, depth, useKeys) {
          var flatSequence = makeSequence(iterable);
          return (
            (flatSequence.__iterateUncached = function(fn, reverse) {
              var iterations = 0,
                stopped = !1;
              function flatDeep(iter, currentDepth) {
                var this$0 = this;
                iter.__iterate(function(v, k) {
                  return (
                    (!depth || currentDepth < depth) && isIterable(v)
                      ? flatDeep(v, currentDepth + 1)
                      : !1 === fn(v, useKeys ? k : iterations++, this$0) &&
                        (stopped = !0),
                    !stopped
                  );
                }, reverse);
              }
              return flatDeep(iterable, 0), iterations;
            }),
            (flatSequence.__iteratorUncached = function(type, reverse) {
              var iterator = iterable.__iterator(type, reverse),
                stack = [],
                iterations = 0;
              return new Iterator(function() {
                for (; iterator; ) {
                  var step = iterator.next();
                  if (!1 === step.done) {
                    var v = step.value;
                    if (
                      (type === ITERATE_ENTRIES && (v = v[1]),
                      (depth && !(stack.length < depth)) || !isIterable(v))
                    )
                      return useKeys
                        ? step
                        : iteratorValue(type, iterations++, v, step);
                    stack.push(iterator),
                      (iterator = v.__iterator(type, reverse));
                  } else iterator = stack.pop();
                }
                return iteratorDone();
              });
            }),
            flatSequence
          );
        }
        function flatMapFactory(iterable, mapper, context) {
          var coerce = iterableClass(iterable);
          return iterable
            .toSeq()
            .map(function(v, k) {
              return coerce(mapper.call(context, v, k, iterable));
            })
            .flatten(!0);
        }
        function interposeFactory(iterable, separator) {
          var interposedSequence = makeSequence(iterable);
          return (
            (interposedSequence.size = iterable.size && 2 * iterable.size - 1),
            (interposedSequence.__iterateUncached = function(fn, reverse) {
              var this$0 = this,
                iterations = 0;
              return (
                iterable.__iterate(function(v, k) {
                  return (
                    (!iterations ||
                      !1 !== fn(separator, iterations++, this$0)) &&
                    !1 !== fn(v, iterations++, this$0)
                  );
                }, reverse),
                iterations
              );
            }),
            (interposedSequence.__iteratorUncached = function(type, reverse) {
              var step,
                iterator = iterable.__iterator(ITERATE_VALUES, reverse),
                iterations = 0;
              return new Iterator(function() {
                return (!step || iterations % 2) &&
                  (step = iterator.next()).done
                  ? step
                  : iterations % 2
                    ? iteratorValue(type, iterations++, separator)
                    : iteratorValue(type, iterations++, step.value, step);
              });
            }),
            interposedSequence
          );
        }
        function sortFactory(iterable, comparator, mapper) {
          comparator || (comparator = defaultComparator);
          var isKeyedIterable = isKeyed(iterable),
            index = 0,
            entries = iterable
              .toSeq()
              .map(function(v, k) {
                return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
              })
              .toArray();
          return (
            entries
              .sort(function(a, b) {
                return comparator(a[3], b[3]) || a[2] - b[2];
              })
              .forEach(
                isKeyedIterable
                  ? function(v, i) {
                      entries[i].length = 2;
                    }
                  : function(v, i) {
                      entries[i] = v[1];
                    }
              ),
            isKeyedIterable
              ? KeyedSeq(entries)
              : isIndexed(iterable)
                ? IndexedSeq(entries)
                : SetSeq(entries)
          );
        }
        function maxFactory(iterable, comparator, mapper) {
          if ((comparator || (comparator = defaultComparator), mapper)) {
            var entry = iterable
              .toSeq()
              .map(function(v, k) {
                return [v, mapper(v, k, iterable)];
              })
              .reduce(function(a, b) {
                return maxCompare(comparator, a[1], b[1]) ? b : a;
              });
            return entry && entry[0];
          }
          return iterable.reduce(function(a, b) {
            return maxCompare(comparator, a, b) ? b : a;
          });
        }
        function maxCompare(comparator, a, b) {
          var comp = comparator(b, a);
          return (0 === comp && b !== a && (null == b || b != b)) || comp > 0;
        }
        function zipWithFactory(keyIter, zipper, iters) {
          var zipSequence = makeSequence(keyIter);
          return (
            (zipSequence.size = new ArraySeq(iters)
              .map(function(i) {
                return i.size;
              })
              .min()),
            (zipSequence.__iterate = function(fn, reverse) {
              for (
                var step,
                  iterator = this.__iterator(ITERATE_VALUES, reverse),
                  iterations = 0;
                !(step = iterator.next()).done &&
                !1 !== fn(step.value, iterations++, this);

              );
              return iterations;
            }),
            (zipSequence.__iteratorUncached = function(type, reverse) {
              var iterators = iters.map(function(i) {
                  return (
                    (i = Iterable(i)), getIterator(reverse ? i.reverse() : i)
                  );
                }),
                iterations = 0,
                isDone = !1;
              return new Iterator(function() {
                var steps;
                return (
                  isDone ||
                    ((steps = iterators.map(function(i) {
                      return i.next();
                    })),
                    (isDone = steps.some(function(s) {
                      return s.done;
                    }))),
                  isDone
                    ? iteratorDone()
                    : iteratorValue(
                        type,
                        iterations++,
                        zipper.apply(
                          null,
                          steps.map(function(s) {
                            return s.value;
                          })
                        )
                      )
                );
              });
            }),
            zipSequence
          );
        }
        function reify(iter, seq) {
          return isSeq(iter) ? seq : iter.constructor(seq);
        }
        function validateEntry(entry) {
          if (entry !== Object(entry))
            throw new TypeError('Expected [K, V] tuple: ' + entry);
        }
        function resolveSize(iter) {
          return assertNotInfinite(iter.size), ensureSize(iter);
        }
        function iterableClass(iterable) {
          return isKeyed(iterable)
            ? KeyedIterable
            : isIndexed(iterable)
              ? IndexedIterable
              : SetIterable;
        }
        function makeSequence(iterable) {
          return Object.create(
            (isKeyed(iterable)
              ? KeyedSeq
              : isIndexed(iterable)
                ? IndexedSeq
                : SetSeq
            ).prototype
          );
        }
        function cacheResultThrough() {
          return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : Seq.prototype.cacheResult.call(this);
        }
        function defaultComparator(a, b) {
          return a > b ? 1 : a < b ? -1 : 0;
        }
        function forceIterator(keyPath) {
          var iter = getIterator(keyPath);
          if (!iter) {
            if (!isArrayLike(keyPath))
              throw new TypeError(
                'Expected iterable or array-like: ' + keyPath
              );
            iter = getIterator(Iterable(keyPath));
          }
          return iter;
        }
        function Record(defaultValues, name) {
          var hasInitialized,
            RecordType = function Record(values) {
              if (values instanceof RecordType) return values;
              if (!(this instanceof RecordType)) return new RecordType(values);
              if (!hasInitialized) {
                hasInitialized = !0;
                var keys = Object.keys(defaultValues);
                setProps(RecordTypePrototype, keys),
                  (RecordTypePrototype.size = keys.length),
                  (RecordTypePrototype._name = name),
                  (RecordTypePrototype._keys = keys),
                  (RecordTypePrototype._defaultValues = defaultValues);
              }
              this._map = Map(values);
            },
            RecordTypePrototype = (RecordType.prototype = Object.create(
              RecordPrototype
            ));
          return (RecordTypePrototype.constructor = RecordType), RecordType;
        }
        createClass(OrderedMap, Map),
          (OrderedMap.of = function() {
            return this(arguments);
          }),
          (OrderedMap.prototype.toString = function() {
            return this.__toString('OrderedMap {', '}');
          }),
          (OrderedMap.prototype.get = function(k, notSetValue) {
            var index = this._map.get(k);
            return void 0 !== index ? this._list.get(index)[1] : notSetValue;
          }),
          (OrderedMap.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
                : emptyOrderedMap();
          }),
          (OrderedMap.prototype.set = function(k, v) {
            return updateOrderedMap(this, k, v);
          }),
          (OrderedMap.prototype.remove = function(k) {
            return updateOrderedMap(this, k, NOT_SET);
          }),
          (OrderedMap.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered();
          }),
          (OrderedMap.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._list.__iterate(function(entry) {
              return entry && fn(entry[1], entry[0], this$0);
            }, reverse);
          }),
          (OrderedMap.prototype.__iterator = function(type, reverse) {
            return this._list.fromEntrySeq().__iterator(type, reverse);
          }),
          (OrderedMap.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map.__ensureOwner(ownerID),
              newList = this._list.__ensureOwner(ownerID);
            return ownerID
              ? makeOrderedMap(newMap, newList, ownerID, this.__hash)
              : ((this.__ownerID = ownerID),
                (this._map = newMap),
                (this._list = newList),
                this);
          }),
          (OrderedMap.isOrderedMap = isOrderedMap),
          (OrderedMap.prototype[IS_ORDERED_SENTINEL] = !0),
          (OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove),
          createClass(ToKeyedSequence, KeyedSeq),
          (ToKeyedSequence.prototype.get = function(key, notSetValue) {
            return this._iter.get(key, notSetValue);
          }),
          (ToKeyedSequence.prototype.has = function(key) {
            return this._iter.has(key);
          }),
          (ToKeyedSequence.prototype.valueSeq = function() {
            return this._iter.valueSeq();
          }),
          (ToKeyedSequence.prototype.reverse = function() {
            var this$0 = this,
              reversedSequence = reverseFactory(this, !0);
            return (
              this._useKeys ||
                (reversedSequence.valueSeq = function() {
                  return this$0._iter.toSeq().reverse();
                }),
              reversedSequence
            );
          }),
          (ToKeyedSequence.prototype.map = function(mapper, context) {
            var this$0 = this,
              mappedSequence = mapFactory(this, mapper, context);
            return (
              this._useKeys ||
                (mappedSequence.valueSeq = function() {
                  return this$0._iter.toSeq().map(mapper, context);
                }),
              mappedSequence
            );
          }),
          (ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
            var ii,
              this$0 = this;
            return this._iter.__iterate(
              this._useKeys
                ? function(v, k) {
                    return fn(v, k, this$0);
                  }
                : ((ii = reverse ? resolveSize(this) : 0),
                  function(v) {
                    return fn(v, reverse ? --ii : ii++, this$0);
                  }),
              reverse
            );
          }),
          (ToKeyedSequence.prototype.__iterator = function(type, reverse) {
            if (this._useKeys) return this._iter.__iterator(type, reverse);
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse),
              ii = reverse ? resolveSize(this) : 0;
            return new Iterator(function() {
              var step = iterator.next();
              return step.done
                ? step
                : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
            });
          }),
          (ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = !0),
          createClass(ToIndexedSequence, IndexedSeq),
          (ToIndexedSequence.prototype.includes = function(value) {
            return this._iter.includes(value);
          }),
          (ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this,
              iterations = 0;
            return this._iter.__iterate(function(v) {
              return fn(v, iterations++, this$0);
            }, reverse);
          }),
          (ToIndexedSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse),
              iterations = 0;
            return new Iterator(function() {
              var step = iterator.next();
              return step.done
                ? step
                : iteratorValue(type, iterations++, step.value, step);
            });
          }),
          createClass(ToSetSequence, SetSeq),
          (ToSetSequence.prototype.has = function(key) {
            return this._iter.includes(key);
          }),
          (ToSetSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._iter.__iterate(function(v) {
              return fn(v, v, this$0);
            }, reverse);
          }),
          (ToSetSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
            return new Iterator(function() {
              var step = iterator.next();
              return step.done
                ? step
                : iteratorValue(type, step.value, step.value, step);
            });
          }),
          createClass(FromEntriesSequence, KeyedSeq),
          (FromEntriesSequence.prototype.entrySeq = function() {
            return this._iter.toSeq();
          }),
          (FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._iter.__iterate(function(entry) {
              if (entry) {
                validateEntry(entry);
                var indexedIterable = isIterable(entry);
                return fn(
                  indexedIterable ? entry.get(1) : entry[1],
                  indexedIterable ? entry.get(0) : entry[0],
                  this$0
                );
              }
            }, reverse);
          }),
          (FromEntriesSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
            return new Iterator(function() {
              for (;;) {
                var step = iterator.next();
                if (step.done) return step;
                var entry = step.value;
                if (entry) {
                  validateEntry(entry);
                  var indexedIterable = isIterable(entry);
                  return iteratorValue(
                    type,
                    indexedIterable ? entry.get(0) : entry[0],
                    indexedIterable ? entry.get(1) : entry[1],
                    step
                  );
                }
              }
            });
          }),
          (ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough),
          createClass(Record, KeyedCollection),
          (Record.prototype.toString = function() {
            return this.__toString(recordName(this) + ' {', '}');
          }),
          (Record.prototype.has = function(k) {
            return this._defaultValues.hasOwnProperty(k);
          }),
          (Record.prototype.get = function(k, notSetValue) {
            if (!this.has(k)) return notSetValue;
            var defaultVal = this._defaultValues[k];
            return this._map ? this._map.get(k, defaultVal) : defaultVal;
          }),
          (Record.prototype.clear = function() {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var RecordType = this.constructor;
            return (
              RecordType._empty ||
              (RecordType._empty = makeRecord(this, emptyMap()))
            );
          }),
          (Record.prototype.set = function(k, v) {
            if (!this.has(k))
              throw new Error(
                'Cannot set unknown key "' + k + '" on ' + recordName(this)
              );
            if (this._map && !this._map.has(k) && v === this._defaultValues[k])
              return this;
            var newMap = this._map && this._map.set(k, v);
            return this.__ownerID || newMap === this._map
              ? this
              : makeRecord(this, newMap);
          }),
          (Record.prototype.remove = function(k) {
            if (!this.has(k)) return this;
            var newMap = this._map && this._map.remove(k);
            return this.__ownerID || newMap === this._map
              ? this
              : makeRecord(this, newMap);
          }),
          (Record.prototype.wasAltered = function() {
            return this._map.wasAltered();
          }),
          (Record.prototype.__iterator = function(type, reverse) {
            var this$0 = this;
            return KeyedIterable(this._defaultValues)
              .map(function(_, k) {
                return this$0.get(k);
              })
              .__iterator(type, reverse);
          }),
          (Record.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return KeyedIterable(this._defaultValues)
              .map(function(_, k) {
                return this$0.get(k);
              })
              .__iterate(fn, reverse);
          }),
          (Record.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map && this._map.__ensureOwner(ownerID);
            return ownerID
              ? makeRecord(this, newMap, ownerID)
              : ((this.__ownerID = ownerID), (this._map = newMap), this);
          });
        var RecordPrototype = Record.prototype;
        function makeRecord(likeRecord, map, ownerID) {
          var record = Object.create(Object.getPrototypeOf(likeRecord));
          return (record._map = map), (record.__ownerID = ownerID), record;
        }
        function recordName(record) {
          return record._name || record.constructor.name || 'Record';
        }
        function setProps(prototype, names) {
          try {
            names.forEach(setProp.bind(void 0, prototype));
          } catch (error) {}
        }
        function setProp(prototype, name) {
          Object.defineProperty(prototype, name, {
            get: function() {
              return this.get(name);
            },
            set: function(value) {
              invariant(this.__ownerID, 'Cannot set on an immutable record.'),
                this.set(name, value);
            },
          });
        }
        function Set(value) {
          return null == value
            ? emptySet()
            : isSet(value) && !isOrdered(value)
              ? value
              : emptySet().withMutations(function(set) {
                  var iter = SetIterable(value);
                  assertNotInfinite(iter.size),
                    iter.forEach(function(v) {
                      return set.add(v);
                    });
                });
        }
        function isSet(maybeSet) {
          return !(!maybeSet || !maybeSet[IS_SET_SENTINEL]);
        }
        (RecordPrototype[DELETE] = RecordPrototype.remove),
          (RecordPrototype.deleteIn = RecordPrototype.removeIn =
            MapPrototype.removeIn),
          (RecordPrototype.merge = MapPrototype.merge),
          (RecordPrototype.mergeWith = MapPrototype.mergeWith),
          (RecordPrototype.mergeIn = MapPrototype.mergeIn),
          (RecordPrototype.mergeDeep = MapPrototype.mergeDeep),
          (RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith),
          (RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn),
          (RecordPrototype.setIn = MapPrototype.setIn),
          (RecordPrototype.update = MapPrototype.update),
          (RecordPrototype.updateIn = MapPrototype.updateIn),
          (RecordPrototype.withMutations = MapPrototype.withMutations),
          (RecordPrototype.asMutable = MapPrototype.asMutable),
          (RecordPrototype.asImmutable = MapPrototype.asImmutable),
          createClass(Set, SetCollection),
          (Set.of = function() {
            return this(arguments);
          }),
          (Set.fromKeys = function(value) {
            return this(KeyedIterable(value).keySeq());
          }),
          (Set.prototype.toString = function() {
            return this.__toString('Set {', '}');
          }),
          (Set.prototype.has = function(value) {
            return this._map.has(value);
          }),
          (Set.prototype.add = function(value) {
            return updateSet(this, this._map.set(value, !0));
          }),
          (Set.prototype.remove = function(value) {
            return updateSet(this, this._map.remove(value));
          }),
          (Set.prototype.clear = function() {
            return updateSet(this, this._map.clear());
          }),
          (Set.prototype.union = function() {
            var iters = SLICE$0.call(arguments, 0);
            return 0 ===
              (iters = iters.filter(function(x) {
                return 0 !== x.size;
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== iters.length
                ? this.withMutations(function(set) {
                    for (var ii = 0; ii < iters.length; ii++)
                      SetIterable(iters[ii]).forEach(function(value) {
                        return set.add(value);
                      });
                  })
                : this.constructor(iters[0]);
          }),
          (Set.prototype.intersect = function() {
            var iters = SLICE$0.call(arguments, 0);
            if (0 === iters.length) return this;
            iters = iters.map(function(iter) {
              return SetIterable(iter);
            });
            var originalSet = this;
            return this.withMutations(function(set) {
              originalSet.forEach(function(value) {
                iters.every(function(iter) {
                  return iter.includes(value);
                }) || set.remove(value);
              });
            });
          }),
          (Set.prototype.subtract = function() {
            var iters = SLICE$0.call(arguments, 0);
            if (0 === iters.length) return this;
            iters = iters.map(function(iter) {
              return SetIterable(iter);
            });
            var originalSet = this;
            return this.withMutations(function(set) {
              originalSet.forEach(function(value) {
                iters.some(function(iter) {
                  return iter.includes(value);
                }) && set.remove(value);
              });
            });
          }),
          (Set.prototype.merge = function() {
            return this.union.apply(this, arguments);
          }),
          (Set.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return this.union.apply(this, iters);
          }),
          (Set.prototype.sort = function(comparator) {
            return OrderedSet(sortFactory(this, comparator));
          }),
          (Set.prototype.sortBy = function(mapper, comparator) {
            return OrderedSet(sortFactory(this, comparator, mapper));
          }),
          (Set.prototype.wasAltered = function() {
            return this._map.wasAltered();
          }),
          (Set.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._map.__iterate(function(_, k) {
              return fn(k, k, this$0);
            }, reverse);
          }),
          (Set.prototype.__iterator = function(type, reverse) {
            return this._map
              .map(function(_, k) {
                return k;
              })
              .__iterator(type, reverse);
          }),
          (Set.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map.__ensureOwner(ownerID);
            return ownerID
              ? this.__make(newMap, ownerID)
              : ((this.__ownerID = ownerID), (this._map = newMap), this);
          }),
          (Set.isSet = isSet);
        var EMPTY_SET,
          IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@',
          SetPrototype = Set.prototype;
        function updateSet(set, newMap) {
          return set.__ownerID
            ? ((set.size = newMap.size), (set._map = newMap), set)
            : newMap === set._map
              ? set
              : 0 === newMap.size
                ? set.__empty()
                : set.__make(newMap);
        }
        function makeSet(map, ownerID) {
          var set = Object.create(SetPrototype);
          return (
            (set.size = map ? map.size : 0),
            (set._map = map),
            (set.__ownerID = ownerID),
            set
          );
        }
        function emptySet() {
          return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
        }
        function OrderedSet(value) {
          return null == value
            ? emptyOrderedSet()
            : isOrderedSet(value)
              ? value
              : emptyOrderedSet().withMutations(function(set) {
                  var iter = SetIterable(value);
                  assertNotInfinite(iter.size),
                    iter.forEach(function(v) {
                      return set.add(v);
                    });
                });
        }
        function isOrderedSet(maybeOrderedSet) {
          return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
        }
        (SetPrototype[IS_SET_SENTINEL] = !0),
          (SetPrototype[DELETE] = SetPrototype.remove),
          (SetPrototype.mergeDeep = SetPrototype.merge),
          (SetPrototype.mergeDeepWith = SetPrototype.mergeWith),
          (SetPrototype.withMutations = MapPrototype.withMutations),
          (SetPrototype.asMutable = MapPrototype.asMutable),
          (SetPrototype.asImmutable = MapPrototype.asImmutable),
          (SetPrototype.__empty = emptySet),
          (SetPrototype.__make = makeSet),
          createClass(OrderedSet, Set),
          (OrderedSet.of = function() {
            return this(arguments);
          }),
          (OrderedSet.fromKeys = function(value) {
            return this(KeyedIterable(value).keySeq());
          }),
          (OrderedSet.prototype.toString = function() {
            return this.__toString('OrderedSet {', '}');
          }),
          (OrderedSet.isOrderedSet = isOrderedSet);
        var EMPTY_ORDERED_SET,
          OrderedSetPrototype = OrderedSet.prototype;
        function makeOrderedSet(map, ownerID) {
          var set = Object.create(OrderedSetPrototype);
          return (
            (set.size = map ? map.size : 0),
            (set._map = map),
            (set.__ownerID = ownerID),
            set
          );
        }
        function emptyOrderedSet() {
          return (
            EMPTY_ORDERED_SET ||
            (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
          );
        }
        function Stack(value) {
          return null == value
            ? emptyStack()
            : isStack(value)
              ? value
              : emptyStack().unshiftAll(value);
        }
        function isStack(maybeStack) {
          return !(!maybeStack || !maybeStack[IS_STACK_SENTINEL]);
        }
        (OrderedSetPrototype[IS_ORDERED_SENTINEL] = !0),
          (OrderedSetPrototype.__empty = emptyOrderedSet),
          (OrderedSetPrototype.__make = makeOrderedSet),
          createClass(Stack, IndexedCollection),
          (Stack.of = function() {
            return this(arguments);
          }),
          (Stack.prototype.toString = function() {
            return this.__toString('Stack [', ']');
          }),
          (Stack.prototype.get = function(index, notSetValue) {
            var head = this._head;
            for (index = wrapIndex(this, index); head && index--; )
              head = head.next;
            return head ? head.value : notSetValue;
          }),
          (Stack.prototype.peek = function() {
            return this._head && this._head.value;
          }),
          (Stack.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (
              var newSize = this.size + arguments.length,
                head = this._head,
                ii = arguments.length - 1;
              ii >= 0;
              ii--
            )
              head = { value: arguments[ii], next: head };
            return this.__ownerID
              ? ((this.size = newSize),
                (this._head = head),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : makeStack(newSize, head);
          }),
          (Stack.prototype.pushAll = function(iter) {
            if (0 === (iter = IndexedIterable(iter)).size) return this;
            assertNotInfinite(iter.size);
            var newSize = this.size,
              head = this._head;
            return (
              iter.reverse().forEach(function(value) {
                newSize++, (head = { value: value, next: head });
              }),
              this.__ownerID
                ? ((this.size = newSize),
                  (this._head = head),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : makeStack(newSize, head)
            );
          }),
          (Stack.prototype.pop = function() {
            return this.slice(1);
          }),
          (Stack.prototype.unshift = function() {
            return this.push.apply(this, arguments);
          }),
          (Stack.prototype.unshiftAll = function(iter) {
            return this.pushAll(iter);
          }),
          (Stack.prototype.shift = function() {
            return this.pop.apply(this, arguments);
          }),
          (Stack.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = 0),
                  (this._head = void 0),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : emptyStack();
          }),
          (Stack.prototype.slice = function(begin, end) {
            if (wholeSlice(begin, end, this.size)) return this;
            var resolvedBegin = resolveBegin(begin, this.size);
            if (resolveEnd(end, this.size) !== this.size)
              return IndexedCollection.prototype.slice.call(this, begin, end);
            for (
              var newSize = this.size - resolvedBegin, head = this._head;
              resolvedBegin--;

            )
              head = head.next;
            return this.__ownerID
              ? ((this.size = newSize),
                (this._head = head),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : makeStack(newSize, head);
          }),
          (Stack.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID
              ? this
              : ownerID
                ? makeStack(this.size, this._head, ownerID, this.__hash)
                : ((this.__ownerID = ownerID), (this.__altered = !1), this);
          }),
          (Stack.prototype.__iterate = function(fn, reverse) {
            if (reverse) return this.reverse().__iterate(fn);
            for (
              var iterations = 0, node = this._head;
              node && !1 !== fn(node.value, iterations++, this);

            )
              node = node.next;
            return iterations;
          }),
          (Stack.prototype.__iterator = function(type, reverse) {
            if (reverse) return this.reverse().__iterator(type);
            var iterations = 0,
              node = this._head;
            return new Iterator(function() {
              if (node) {
                var value = node.value;
                return (
                  (node = node.next), iteratorValue(type, iterations++, value)
                );
              }
              return iteratorDone();
            });
          }),
          (Stack.isStack = isStack);
        var EMPTY_STACK,
          IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@',
          StackPrototype = Stack.prototype;
        function makeStack(size, head, ownerID, hash) {
          var map = Object.create(StackPrototype);
          return (
            (map.size = size),
            (map._head = head),
            (map.__ownerID = ownerID),
            (map.__hash = hash),
            (map.__altered = !1),
            map
          );
        }
        function emptyStack() {
          return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
        }
        function mixin(ctor, methods) {
          var keyCopier = function(key) {
            ctor.prototype[key] = methods[key];
          };
          return (
            Object.keys(methods).forEach(keyCopier),
            Object.getOwnPropertySymbols &&
              Object.getOwnPropertySymbols(methods).forEach(keyCopier),
            ctor
          );
        }
        (StackPrototype[IS_STACK_SENTINEL] = !0),
          (StackPrototype.withMutations = MapPrototype.withMutations),
          (StackPrototype.asMutable = MapPrototype.asMutable),
          (StackPrototype.asImmutable = MapPrototype.asImmutable),
          (StackPrototype.wasAltered = MapPrototype.wasAltered),
          (Iterable.Iterator = Iterator),
          mixin(Iterable, {
            toArray: function() {
              assertNotInfinite(this.size);
              var array = new Array(this.size || 0);
              return (
                this.valueSeq().__iterate(function(v, i) {
                  array[i] = v;
                }),
                array
              );
            },
            toIndexedSeq: function() {
              return new ToIndexedSequence(this);
            },
            toJS: function() {
              return this.toSeq()
                .map(function(value) {
                  return value && 'function' == typeof value.toJS
                    ? value.toJS()
                    : value;
                })
                .__toJS();
            },
            toJSON: function() {
              return this.toSeq()
                .map(function(value) {
                  return value && 'function' == typeof value.toJSON
                    ? value.toJSON()
                    : value;
                })
                .__toJS();
            },
            toKeyedSeq: function() {
              return new ToKeyedSequence(this, !0);
            },
            toMap: function() {
              return Map(this.toKeyedSeq());
            },
            toObject: function() {
              assertNotInfinite(this.size);
              var object = {};
              return (
                this.__iterate(function(v, k) {
                  object[k] = v;
                }),
                object
              );
            },
            toOrderedMap: function() {
              return OrderedMap(this.toKeyedSeq());
            },
            toOrderedSet: function() {
              return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
            },
            toSet: function() {
              return Set(isKeyed(this) ? this.valueSeq() : this);
            },
            toSetSeq: function() {
              return new ToSetSequence(this);
            },
            toSeq: function() {
              return isIndexed(this)
                ? this.toIndexedSeq()
                : isKeyed(this)
                  ? this.toKeyedSeq()
                  : this.toSetSeq();
            },
            toStack: function() {
              return Stack(isKeyed(this) ? this.valueSeq() : this);
            },
            toList: function() {
              return List(isKeyed(this) ? this.valueSeq() : this);
            },
            toString: function() {
              return '[Iterable]';
            },
            __toString: function(head, tail) {
              return 0 === this.size
                ? head + tail
                : head +
                    ' ' +
                    this.toSeq()
                      .map(this.__toStringMapper)
                      .join(', ') +
                    ' ' +
                    tail;
            },
            concat: function() {
              return reify(
                this,
                concatFactory(this, SLICE$0.call(arguments, 0))
              );
            },
            includes: function(searchValue) {
              return this.some(function(value) {
                return is(value, searchValue);
              });
            },
            entries: function() {
              return this.__iterator(ITERATE_ENTRIES);
            },
            every: function(predicate, context) {
              assertNotInfinite(this.size);
              var returnValue = !0;
              return (
                this.__iterate(function(v, k, c) {
                  if (!predicate.call(context, v, k, c))
                    return (returnValue = !1), !1;
                }),
                returnValue
              );
            },
            filter: function(predicate, context) {
              return reify(this, filterFactory(this, predicate, context, !0));
            },
            find: function(predicate, context, notSetValue) {
              var entry = this.findEntry(predicate, context);
              return entry ? entry[1] : notSetValue;
            },
            forEach: function(sideEffect, context) {
              return (
                assertNotInfinite(this.size),
                this.__iterate(context ? sideEffect.bind(context) : sideEffect)
              );
            },
            join: function(separator) {
              assertNotInfinite(this.size),
                (separator = void 0 !== separator ? '' + separator : ',');
              var joined = '',
                isFirst = !0;
              return (
                this.__iterate(function(v) {
                  isFirst ? (isFirst = !1) : (joined += separator),
                    (joined += null != v ? v.toString() : '');
                }),
                joined
              );
            },
            keys: function() {
              return this.__iterator(ITERATE_KEYS);
            },
            map: function(mapper, context) {
              return reify(this, mapFactory(this, mapper, context));
            },
            reduce: function(reducer, initialReduction, context) {
              var reduction, useFirst;
              return (
                assertNotInfinite(this.size),
                arguments.length < 2
                  ? (useFirst = !0)
                  : (reduction = initialReduction),
                this.__iterate(function(v, k, c) {
                  useFirst
                    ? ((useFirst = !1), (reduction = v))
                    : (reduction = reducer.call(context, reduction, v, k, c));
                }),
                reduction
              );
            },
            reduceRight: function(reducer, initialReduction, context) {
              var reversed = this.toKeyedSeq().reverse();
              return reversed.reduce.apply(reversed, arguments);
            },
            reverse: function() {
              return reify(this, reverseFactory(this, !0));
            },
            slice: function(begin, end) {
              return reify(this, sliceFactory(this, begin, end, !0));
            },
            some: function(predicate, context) {
              return !this.every(not(predicate), context);
            },
            sort: function(comparator) {
              return reify(this, sortFactory(this, comparator));
            },
            values: function() {
              return this.__iterator(ITERATE_VALUES);
            },
            butLast: function() {
              return this.slice(0, -1);
            },
            isEmpty: function() {
              return void 0 !== this.size
                ? 0 === this.size
                : !this.some(function() {
                    return !0;
                  });
            },
            count: function(predicate, context) {
              return ensureSize(
                predicate ? this.toSeq().filter(predicate, context) : this
              );
            },
            countBy: function(grouper, context) {
              return countByFactory(this, grouper, context);
            },
            equals: function(other) {
              return deepEqual(this, other);
            },
            entrySeq: function() {
              var iterable = this;
              if (iterable._cache) return new ArraySeq(iterable._cache);
              var entriesSequence = iterable
                .toSeq()
                .map(entryMapper)
                .toIndexedSeq();
              return (
                (entriesSequence.fromEntrySeq = function() {
                  return iterable.toSeq();
                }),
                entriesSequence
              );
            },
            filterNot: function(predicate, context) {
              return this.filter(not(predicate), context);
            },
            findEntry: function(predicate, context, notSetValue) {
              var found = notSetValue;
              return (
                this.__iterate(function(v, k, c) {
                  if (predicate.call(context, v, k, c))
                    return (found = [k, v]), !1;
                }),
                found
              );
            },
            findKey: function(predicate, context) {
              var entry = this.findEntry(predicate, context);
              return entry && entry[0];
            },
            findLast: function(predicate, context, notSetValue) {
              return this.toKeyedSeq()
                .reverse()
                .find(predicate, context, notSetValue);
            },
            findLastEntry: function(predicate, context, notSetValue) {
              return this.toKeyedSeq()
                .reverse()
                .findEntry(predicate, context, notSetValue);
            },
            findLastKey: function(predicate, context) {
              return this.toKeyedSeq()
                .reverse()
                .findKey(predicate, context);
            },
            first: function() {
              return this.find(returnTrue);
            },
            flatMap: function(mapper, context) {
              return reify(this, flatMapFactory(this, mapper, context));
            },
            flatten: function(depth) {
              return reify(this, flattenFactory(this, depth, !0));
            },
            fromEntrySeq: function() {
              return new FromEntriesSequence(this);
            },
            get: function(searchKey, notSetValue) {
              return this.find(
                function(_, key) {
                  return is(key, searchKey);
                },
                void 0,
                notSetValue
              );
            },
            getIn: function(searchKeyPath, notSetValue) {
              for (
                var step, nested = this, iter = forceIterator(searchKeyPath);
                !(step = iter.next()).done;

              ) {
                var key = step.value;
                if (
                  (nested =
                    nested && nested.get
                      ? nested.get(key, NOT_SET)
                      : NOT_SET) === NOT_SET
                )
                  return notSetValue;
              }
              return nested;
            },
            groupBy: function(grouper, context) {
              return groupByFactory(this, grouper, context);
            },
            has: function(searchKey) {
              return this.get(searchKey, NOT_SET) !== NOT_SET;
            },
            hasIn: function(searchKeyPath) {
              return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
            },
            isSubset: function(iter) {
              return (
                (iter =
                  'function' == typeof iter.includes ? iter : Iterable(iter)),
                this.every(function(value) {
                  return iter.includes(value);
                })
              );
            },
            isSuperset: function(iter) {
              return (iter =
                'function' == typeof iter.isSubset
                  ? iter
                  : Iterable(iter)).isSubset(this);
            },
            keyOf: function(searchValue) {
              return this.findKey(function(value) {
                return is(value, searchValue);
              });
            },
            keySeq: function() {
              return this.toSeq()
                .map(keyMapper)
                .toIndexedSeq();
            },
            last: function() {
              return this.toSeq()
                .reverse()
                .first();
            },
            lastKeyOf: function(searchValue) {
              return this.toKeyedSeq()
                .reverse()
                .keyOf(searchValue);
            },
            max: function(comparator) {
              return maxFactory(this, comparator);
            },
            maxBy: function(mapper, comparator) {
              return maxFactory(this, comparator, mapper);
            },
            min: function(comparator) {
              return maxFactory(
                this,
                comparator ? neg(comparator) : defaultNegComparator
              );
            },
            minBy: function(mapper, comparator) {
              return maxFactory(
                this,
                comparator ? neg(comparator) : defaultNegComparator,
                mapper
              );
            },
            rest: function() {
              return this.slice(1);
            },
            skip: function(amount) {
              return this.slice(Math.max(0, amount));
            },
            skipLast: function(amount) {
              return reify(
                this,
                this.toSeq()
                  .reverse()
                  .skip(amount)
                  .reverse()
              );
            },
            skipWhile: function(predicate, context) {
              return reify(
                this,
                skipWhileFactory(this, predicate, context, !0)
              );
            },
            skipUntil: function(predicate, context) {
              return this.skipWhile(not(predicate), context);
            },
            sortBy: function(mapper, comparator) {
              return reify(this, sortFactory(this, comparator, mapper));
            },
            take: function(amount) {
              return this.slice(0, Math.max(0, amount));
            },
            takeLast: function(amount) {
              return reify(
                this,
                this.toSeq()
                  .reverse()
                  .take(amount)
                  .reverse()
              );
            },
            takeWhile: function(predicate, context) {
              return reify(this, takeWhileFactory(this, predicate, context));
            },
            takeUntil: function(predicate, context) {
              return this.takeWhile(not(predicate), context);
            },
            valueSeq: function() {
              return this.toIndexedSeq();
            },
            hashCode: function() {
              return this.__hash || (this.__hash = hashIterable(this));
            },
          });
        var IterablePrototype = Iterable.prototype;
        (IterablePrototype[IS_ITERABLE_SENTINEL] = !0),
          (IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values),
          (IterablePrototype.__toJS = IterablePrototype.toArray),
          (IterablePrototype.__toStringMapper = quoteString),
          (IterablePrototype.inspect = IterablePrototype.toSource = function() {
            return this.toString();
          }),
          (IterablePrototype.chain = IterablePrototype.flatMap),
          (IterablePrototype.contains = IterablePrototype.includes),
          mixin(KeyedIterable, {
            flip: function() {
              return reify(this, flipFactory(this));
            },
            mapEntries: function(mapper, context) {
              var this$0 = this,
                iterations = 0;
              return reify(
                this,
                this.toSeq()
                  .map(function(v, k) {
                    return mapper.call(context, [k, v], iterations++, this$0);
                  })
                  .fromEntrySeq()
              );
            },
            mapKeys: function(mapper, context) {
              var this$0 = this;
              return reify(
                this,
                this.toSeq()
                  .flip()
                  .map(function(k, v) {
                    return mapper.call(context, k, v, this$0);
                  })
                  .flip()
              );
            },
          });
        var KeyedIterablePrototype = KeyedIterable.prototype;
        function keyMapper(v, k) {
          return k;
        }
        function entryMapper(v, k) {
          return [k, v];
        }
        function not(predicate) {
          return function() {
            return !predicate.apply(this, arguments);
          };
        }
        function neg(predicate) {
          return function() {
            return -predicate.apply(this, arguments);
          };
        }
        function quoteString(value) {
          return 'string' == typeof value
            ? JSON.stringify(value)
            : String(value);
        }
        function defaultZipper() {
          return arrCopy(arguments);
        }
        function defaultNegComparator(a, b) {
          return a < b ? 1 : a > b ? -1 : 0;
        }
        function hashIterable(iterable) {
          if (iterable.size === 1 / 0) return 0;
          var ordered = isOrdered(iterable),
            keyed = isKeyed(iterable),
            h = ordered ? 1 : 0;
          return murmurHashOfSize(
            iterable.__iterate(
              keyed
                ? ordered
                  ? function(v, k) {
                      h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
                    }
                  : function(v, k) {
                      h = (h + hashMerge(hash(v), hash(k))) | 0;
                    }
                : ordered
                  ? function(v) {
                      h = (31 * h + hash(v)) | 0;
                    }
                  : function(v) {
                      h = (h + hash(v)) | 0;
                    }
            ),
            h
          );
        }
        function murmurHashOfSize(size, h) {
          return (
            (h = imul(h, 3432918353)),
            (h = imul((h << 15) | (h >>> -15), 461845907)),
            (h = imul((h << 13) | (h >>> -13), 5)),
            (h = imul(
              (h = ((h + 3864292196) | 0) ^ size) ^ (h >>> 16),
              2246822507
            )),
            (h = smi((h = imul(h ^ (h >>> 13), 3266489909)) ^ (h >>> 16)))
          );
        }
        function hashMerge(a, b) {
          return (a ^ (b + 2654435769 + (a << 6) + (a >> 2))) | 0;
        }
        return (
          (KeyedIterablePrototype[IS_KEYED_SENTINEL] = !0),
          (KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries),
          (KeyedIterablePrototype.__toJS = IterablePrototype.toObject),
          (KeyedIterablePrototype.__toStringMapper = function(v, k) {
            return JSON.stringify(k) + ': ' + quoteString(v);
          }),
          mixin(IndexedIterable, {
            toKeyedSeq: function() {
              return new ToKeyedSequence(this, !1);
            },
            filter: function(predicate, context) {
              return reify(this, filterFactory(this, predicate, context, !1));
            },
            findIndex: function(predicate, context) {
              var entry = this.findEntry(predicate, context);
              return entry ? entry[0] : -1;
            },
            indexOf: function(searchValue) {
              var key = this.keyOf(searchValue);
              return void 0 === key ? -1 : key;
            },
            lastIndexOf: function(searchValue) {
              var key = this.lastKeyOf(searchValue);
              return void 0 === key ? -1 : key;
            },
            reverse: function() {
              return reify(this, reverseFactory(this, !1));
            },
            slice: function(begin, end) {
              return reify(this, sliceFactory(this, begin, end, !1));
            },
            splice: function(index, removeNum) {
              var numArgs = arguments.length;
              if (
                ((removeNum = Math.max(0 | removeNum, 0)),
                0 === numArgs || (2 === numArgs && !removeNum))
              )
                return this;
              index = resolveBegin(index, index < 0 ? this.count() : this.size);
              var spliced = this.slice(0, index);
              return reify(
                this,
                1 === numArgs
                  ? spliced
                  : spliced.concat(
                      arrCopy(arguments, 2),
                      this.slice(index + removeNum)
                    )
              );
            },
            findLastIndex: function(predicate, context) {
              var entry = this.findLastEntry(predicate, context);
              return entry ? entry[0] : -1;
            },
            first: function() {
              return this.get(0);
            },
            flatten: function(depth) {
              return reify(this, flattenFactory(this, depth, !1));
            },
            get: function(index, notSetValue) {
              return (index = wrapIndex(this, index)) < 0 ||
                this.size === 1 / 0 ||
                (void 0 !== this.size && index > this.size)
                ? notSetValue
                : this.find(
                    function(_, key) {
                      return key === index;
                    },
                    void 0,
                    notSetValue
                  );
            },
            has: function(index) {
              return (
                (index = wrapIndex(this, index)) >= 0 &&
                (void 0 !== this.size
                  ? this.size === 1 / 0 || index < this.size
                  : -1 !== this.indexOf(index))
              );
            },
            interpose: function(separator) {
              return reify(this, interposeFactory(this, separator));
            },
            interleave: function() {
              var iterables = [this].concat(arrCopy(arguments)),
                zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables),
                interleaved = zipped.flatten(!0);
              return (
                zipped.size &&
                  (interleaved.size = zipped.size * iterables.length),
                reify(this, interleaved)
              );
            },
            keySeq: function() {
              return Range(0, this.size);
            },
            last: function() {
              return this.get(-1);
            },
            skipWhile: function(predicate, context) {
              return reify(
                this,
                skipWhileFactory(this, predicate, context, !1)
              );
            },
            zip: function() {
              return reify(
                this,
                zipWithFactory(
                  this,
                  defaultZipper,
                  [this].concat(arrCopy(arguments))
                )
              );
            },
            zipWith: function(zipper) {
              var iterables = arrCopy(arguments);
              return (
                (iterables[0] = this),
                reify(this, zipWithFactory(this, zipper, iterables))
              );
            },
          }),
          (IndexedIterable.prototype[IS_INDEXED_SENTINEL] = !0),
          (IndexedIterable.prototype[IS_ORDERED_SENTINEL] = !0),
          mixin(SetIterable, {
            get: function(value, notSetValue) {
              return this.has(value) ? value : notSetValue;
            },
            includes: function(value) {
              return this.has(value);
            },
            keySeq: function() {
              return this.valueSeq();
            },
          }),
          (SetIterable.prototype.has = IterablePrototype.includes),
          (SetIterable.prototype.contains = SetIterable.prototype.includes),
          mixin(KeyedSeq, KeyedIterable.prototype),
          mixin(IndexedSeq, IndexedIterable.prototype),
          mixin(SetSeq, SetIterable.prototype),
          mixin(KeyedCollection, KeyedIterable.prototype),
          mixin(IndexedCollection, IndexedIterable.prototype),
          mixin(SetCollection, SetIterable.prototype),
          {
            Iterable: Iterable,
            Seq: Seq,
            Collection: Collection,
            Map: Map,
            OrderedMap: OrderedMap,
            List: List,
            Stack: Stack,
            Set: Set,
            OrderedSet: OrderedSet,
            Record: Record,
            Range: Range,
            Repeat: Repeat,
            is: is,
            fromJS: fromJS,
          }
        );
      })();
    },
    './node_modules/sudoku/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var undefined,
        _ = __webpack_require__('./node_modules/underscore/underscore.js');
      function checkpuzzle(puzzle, board) {
        board == undefined && (board = null);
        var tuple1 = solveboard(puzzle);
        if (null == tuple1.answer) return -1;
        if (
          null != board &&
          0 ==
            (function boardmatches(b1, b2) {
              for (var i = 0; i < 81; i++) if (b1[i] != b2[i]) return !1;
              return !0;
            })(board, tuple1.answer)
        )
          return -1;
        var difficulty = tuple1.state.length;
        return null != solvenext(tuple1.state).answer ? -1 : difficulty;
      }
      function solvepuzzle(board) {
        return solveboard(board).answer;
      }
      function solveboard(original) {
        var board = [].concat(original),
          guesses = deduce(board);
        return null == guesses
          ? { state: [], answer: board }
          : solvenext([{ guesses: guesses, count: 0, board: board }]);
      }
      function solvenext(remembered) {
        for (; remembered.length > 0; ) {
          var tuple1 = remembered.pop();
          if (!(tuple1.count >= tuple1.guesses.length)) {
            remembered.push({
              guesses: tuple1.guesses,
              count: tuple1.count + 1,
              board: tuple1.board,
            });
            var workspace = [].concat(tuple1.board),
              tuple2 = tuple1.guesses[tuple1.count];
            workspace[tuple2.pos] = tuple2.num;
            var guesses = deduce(workspace);
            if (null == guesses)
              return { state: remembered, answer: workspace };
            remembered.push({ guesses: guesses, count: 0, board: workspace });
          }
        }
        return { state: [], answer: null };
      }
      function deduce(board) {
        for (;;) {
          for (
            var stuck = !0,
              guess = null,
              count = 0,
              tuple1 = figurebits(board),
              allowed = tuple1.allowed,
              needed = tuple1.needed,
              pos = 0;
            pos < 81;
            pos++
          )
            if (null == board[pos]) {
              if (0 == (numbers = listbits(allowed[pos])).length) return [];
              if (1 == numbers.length) (board[pos] = numbers[0]), (stuck = !1);
              else if (1 == stuck) {
                var tuple2 = pickbetter(
                  guess,
                  count,
                  _.map(numbers, function(val, key) {
                    return { pos: pos, num: val };
                  })
                );
                (guess = tuple2.guess), (count = tuple2.count);
              }
            }
          if (0 == stuck) {
            var tuple3 = figurebits(board);
            (allowed = tuple3.allowed), (needed = tuple3.needed);
          }
          for (var axis = 0; axis < 3; axis++)
            for (var x = 0; x < 9; x++)
              for (
                var numbers = listbits(needed[9 * axis + x]), i = 0;
                i < numbers.length;
                i++
              ) {
                for (
                  var n = numbers[i], bit = 1 << n, spots = [], y = 0;
                  y < 9;
                  y++
                ) {
                  allowed[(pos = posfor(x, y, axis))] & bit && spots.push(pos);
                }
                if (0 == spots.length) return [];
                if (1 == spots.length) (board[spots[0]] = n), (stuck = !1);
                else if (stuck) {
                  var tuple4 = pickbetter(
                    guess,
                    count,
                    _.map(spots, function(val, key) {
                      return { pos: val, num: n };
                    })
                  );
                  (guess = tuple4.guess), (count = tuple4.count);
                }
              }
          if (1 == stuck) return null != guess && shuffleArray(guess), guess;
        }
      }
      function figurebits(board) {
        for (
          var needed = [],
            allowed = _.map(
              board,
              function(val, key) {
                return null == val ? 511 : 0;
              },
              []
            ),
            axis = 0;
          axis < 3;
          axis++
        )
          for (var x = 0; x < 9; x++) {
            var bits = axismissing(board, x, axis);
            needed.push(bits);
            for (var y = 0; y < 9; y++) {
              var pos = posfor(x, y, axis);
              allowed[pos] = allowed[pos] & bits;
            }
          }
        return { allowed: allowed, needed: needed };
      }
      function posfor(x, y, axis) {
        return (
          axis == undefined && (axis = 0),
          0 == axis
            ? 9 * x + y
            : 1 == axis
              ? 9 * y + x
              : [0, 3, 6, 27, 30, 33, 54, 57, 60][x] +
                [0, 1, 2, 9, 10, 11, 18, 19, 20][y]
        );
      }
      function axismissing(board, x, axis) {
        for (var bits = 0, y = 0; y < 9; y++) {
          var e = board[posfor(x, y, axis)];
          null != e && (bits |= 1 << e);
        }
        return 511 ^ bits;
      }
      function listbits(bits) {
        for (var list = [], y = 0; y < 9; y++)
          0 != (bits & (1 << y)) && list.push(y);
        return list;
      }
      function pickbetter(b, c, t) {
        return null == b || t.length < b.length
          ? { guess: t, count: 1 }
          : t.length > b.length
            ? { guess: b, count: c }
            : 0 ==
              (function randomInt(max) {
                return Math.floor(Math.random() * (max + 1));
              })(c)
              ? { guess: t, count: c + 1 }
              : { guess: b, count: c + 1 };
      }
      function boardforentries(entries) {
        for (
          var board = _.map(_.range(81), function(val, key) {
              return null;
            }),
            i = 0;
          i < entries.length;
          i++
        ) {
          var item = entries[i],
            pos = item.pos,
            num = item.num;
          board[pos] = num;
        }
        return board;
      }
      function shuffleArray(original) {
        for (var i = 0; i < original.length; i++) {
          for (var j = i; j == i; )
            j = Math.floor(Math.random() * original.length);
          var contents = original[i];
          (original[i] = original[j]), (original[j] = contents);
        }
      }
      function removeElement(array, from, to) {
        var rest = array.slice((to || from) + 1 || array.length);
        return (
          (array.length = from < 0 ? array.length + from : from),
          array.push.apply(array, rest)
        );
      }
      function makeArray(length, value) {
        return _.map(_.range(length), function(val, key) {
          return value;
        });
      }
      module.exports = {
        makepuzzle: function() {
          return (function makepuzzle(board) {
            var puzzle = [],
              deduced = makeArray(81, null),
              order = _.range(81);
            shuffleArray(order);
            for (var i = 0; i < order.length; i++) {
              var pos = order[i];
              null == deduced[pos] &&
                (puzzle.push({ pos: pos, num: board[pos] }),
                (deduced[pos] = board[pos]),
                deduce(deduced));
            }
            for (shuffleArray(puzzle), i = puzzle.length - 1; i >= 0; i--) {
              var e = puzzle[i];
              removeElement(puzzle, i),
                -1 == checkpuzzle(boardforentries(puzzle), board) &&
                  puzzle.push(e);
            }
            return boardforentries(puzzle);
          })(solvepuzzle(makeArray(81, null)));
        },
        solvepuzzle: solvepuzzle,
        ratepuzzle: function ratepuzzle(puzzle, samples) {
          for (var total = 0, i = 0; i < samples; i++) {
            var tuple = solveboard(puzzle);
            if (null == tuple.answer) return -1;
            total += tuple.state.length;
          }
          return total / samples;
        },
        posfor: posfor,
      };
    },
    './node_modules/t-sudoku-generator/index.js': function(
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      const {
          makepuzzle: makepuzzle,
          solvepuzzle: solvepuzzle,
        } = __webpack_require__('./node_modules/sudoku/index.js'),
        { List: List } = __webpack_require__(
          './node_modules/immutable/dist/immutable.js'
        ),
        DIFFICULTIES_EASY = 'EASY',
        DIFFICULTIES_MEDIUM = 'MEDIUM',
        DIFFICULTIES_HARD = 'HARD',
        DIFF_FORMATTER = {
          EASY: () => Math.floor(5 * Math.random()) <= 1,
          MEDIUM: () => Math.floor(15 * Math.random()) <= 2,
          HARD: () => Math.floor(40 * Math.random()) <= 2,
        },
        getBoard = difficulty => {
          let arr = [];
          const x = makepuzzle(),
            y = solvepuzzle(x),
            initialAnswers = ((difficulty, board, answerBoard) =>
              board.map(
                (v, index) => (
                  DIFF_FORMATTER[difficulty]() &&
                    (v =
                      difficulty === DIFFICULTIES_HARD
                        ? null
                        : answerBoard[index]),
                  v
                )
              ))(difficulty, x, y);
          return y.reduce((acc, j, i) => {
            const formatValue = v => (null === v ? null : v + 1);
            if (8 === arr.length) {
              const y = [
                ...arr,
                {
                  answer: formatValue(j),
                  value: formatValue(initialAnswers[i]),
                },
              ];
              return (arr = []), acc.push(y);
            }
            return (
              (arr = [
                ...arr,
                {
                  answer: formatValue(j),
                  value: formatValue(initialAnswers[i]),
                },
              ]),
              acc
            );
          }, new List());
        },
        Sudoku = {
          easy: () => getBoard(DIFFICULTIES_EASY),
          medium: () => getBoard(DIFFICULTIES_MEDIUM),
          hard: () => getBoard(DIFFICULTIES_HARD),
        };
      module.exports = Sudoku;
    },
    './node_modules/underscore/underscore.js': function(module) {
      !(function() {
        var root = this,
          previousUnderscore = root._,
          breaker = {},
          ArrayProto = Array.prototype,
          ObjProto = Object.prototype,
          FuncProto = Function.prototype,
          slice = ArrayProto.slice,
          unshift = ArrayProto.unshift,
          toString = ObjProto.toString,
          hasOwnProperty = ObjProto.hasOwnProperty,
          nativeForEach = ArrayProto.forEach,
          nativeMap = ArrayProto.map,
          nativeReduce = ArrayProto.reduce,
          nativeReduceRight = ArrayProto.reduceRight,
          nativeFilter = ArrayProto.filter,
          nativeEvery = ArrayProto.every,
          nativeSome = ArrayProto.some,
          nativeIndexOf = ArrayProto.indexOf,
          nativeLastIndexOf = ArrayProto.lastIndexOf,
          nativeIsArray = Array.isArray,
          nativeKeys = Object.keys,
          nativeBind = FuncProto.bind,
          _ = function(obj) {
            return new wrapper(obj);
          };
        module.exports ? ((module.exports = _), (_._ = _)) : (root._ = _),
          (_.VERSION = '1.1.6');
        var each = (_.each = _.forEach = function(obj, iterator, context) {
          if (null != obj)
            if (nativeForEach && obj.forEach === nativeForEach)
              obj.forEach(iterator, context);
            else if (_.isNumber(obj.length)) {
              for (var i = 0, l = obj.length; i < l; i++)
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            } else
              for (var key in obj)
                if (
                  hasOwnProperty.call(obj, key) &&
                  iterator.call(context, obj[key], key, obj) === breaker
                )
                  return;
        });
        (_.map = function(obj, iterator, context) {
          var results = [];
          return null == obj
            ? results
            : nativeMap && obj.map === nativeMap
              ? obj.map(iterator, context)
              : (each(obj, function(value, index, list) {
                  results[results.length] = iterator.call(
                    context,
                    value,
                    index,
                    list
                  );
                }),
                results);
        }),
          (_.reduce = _.foldl = _.inject = function(
            obj,
            iterator,
            memo,
            context
          ) {
            var initial = void 0 !== memo;
            if (
              (null == obj && (obj = []),
              nativeReduce && obj.reduce === nativeReduce)
            )
              return (
                context && (iterator = _.bind(iterator, context)),
                initial ? obj.reduce(iterator, memo) : obj.reduce(iterator)
              );
            if (
              (each(obj, function(value, index, list) {
                initial || 0 !== index
                  ? (memo = iterator.call(context, memo, value, index, list))
                  : ((memo = value), (initial = !0));
              }),
              !initial)
            )
              throw new TypeError(
                'Reduce of empty array with no initial value'
              );
            return memo;
          }),
          (_.reduceRight = _.foldr = function(obj, iterator, memo, context) {
            if (
              (null == obj && (obj = []),
              nativeReduceRight && obj.reduceRight === nativeReduceRight)
            )
              return (
                context && (iterator = _.bind(iterator, context)),
                void 0 !== memo
                  ? obj.reduceRight(iterator, memo)
                  : obj.reduceRight(iterator)
              );
            var reversed = (_.isArray(obj)
              ? obj.slice()
              : _.toArray(obj)
            ).reverse();
            return _.reduce(reversed, iterator, memo, context);
          }),
          (_.find = _.detect = function(obj, iterator, context) {
            var result;
            return (
              any(obj, function(value, index, list) {
                if (iterator.call(context, value, index, list))
                  return (result = value), !0;
              }),
              result
            );
          }),
          (_.filter = _.select = function(obj, iterator, context) {
            var results = [];
            return null == obj
              ? results
              : nativeFilter && obj.filter === nativeFilter
                ? obj.filter(iterator, context)
                : (each(obj, function(value, index, list) {
                    iterator.call(context, value, index, list) &&
                      (results[results.length] = value);
                  }),
                  results);
          }),
          (_.reject = function(obj, iterator, context) {
            var results = [];
            return (
              null == obj ||
                each(obj, function(value, index, list) {
                  iterator.call(context, value, index, list) ||
                    (results[results.length] = value);
                }),
              results
            );
          }),
          (_.every = _.all = function(obj, iterator, context) {
            var result = !0;
            return null == obj
              ? result
              : nativeEvery && obj.every === nativeEvery
                ? obj.every(iterator, context)
                : (each(obj, function(value, index, list) {
                    if (
                      !(result =
                        result && iterator.call(context, value, index, list))
                    )
                      return breaker;
                  }),
                  result);
          });
        var any = (_.some = _.any = function(obj, iterator, context) {
          iterator || (iterator = _.identity);
          var result = !1;
          return null == obj
            ? result
            : nativeSome && obj.some === nativeSome
              ? obj.some(iterator, context)
              : (each(obj, function(value, index, list) {
                  if ((result = iterator.call(context, value, index, list)))
                    return breaker;
                }),
                result);
        });
        (_.include = _.contains = function(obj, target) {
          var found = !1;
          return null == obj
            ? found
            : nativeIndexOf && obj.indexOf === nativeIndexOf
              ? -1 != obj.indexOf(target)
              : (any(obj, function(value) {
                  if ((found = value === target)) return !0;
                }),
                found);
        }),
          (_.invoke = function(obj, method) {
            var args = slice.call(arguments, 2);
            return _.map(obj, function(value) {
              return (method.call ? method || value : value[method]).apply(
                value,
                args
              );
            });
          }),
          (_.pluck = function(obj, key) {
            return _.map(obj, function(value) {
              return value[key];
            });
          }),
          (_.max = function(obj, iterator, context) {
            if (!iterator && _.isArray(obj)) return Math.max.apply(Math, obj);
            var result = { computed: -1 / 0 };
            return (
              each(obj, function(value, index, list) {
                var computed = iterator
                  ? iterator.call(context, value, index, list)
                  : value;
                computed >= result.computed &&
                  (result = { value: value, computed: computed });
              }),
              result.value
            );
          }),
          (_.min = function(obj, iterator, context) {
            if (!iterator && _.isArray(obj)) return Math.min.apply(Math, obj);
            var result = { computed: 1 / 0 };
            return (
              each(obj, function(value, index, list) {
                var computed = iterator
                  ? iterator.call(context, value, index, list)
                  : value;
                computed < result.computed &&
                  (result = { value: value, computed: computed });
              }),
              result.value
            );
          }),
          (_.sortBy = function(obj, iterator, context) {
            return _.pluck(
              _.map(obj, function(value, index, list) {
                return {
                  value: value,
                  criteria: iterator.call(context, value, index, list),
                };
              }).sort(function(left, right) {
                var a = left.criteria,
                  b = right.criteria;
                return a < b ? -1 : a > b ? 1 : 0;
              }),
              'value'
            );
          }),
          (_.sortedIndex = function(array, obj, iterator) {
            iterator || (iterator = _.identity);
            for (var low = 0, high = array.length; low < high; ) {
              var mid = (low + high) >> 1;
              iterator(array[mid]) < iterator(obj)
                ? (low = mid + 1)
                : (high = mid);
            }
            return low;
          }),
          (_.toArray = function(iterable) {
            return iterable
              ? iterable.toArray
                ? iterable.toArray()
                : _.isArray(iterable)
                  ? iterable
                  : _.isArguments(iterable)
                    ? slice.call(iterable)
                    : _.values(iterable)
              : [];
          }),
          (_.size = function(obj) {
            return _.toArray(obj).length;
          }),
          (_.first = _.head = function(array, n, guard) {
            return null == n || guard ? array[0] : slice.call(array, 0, n);
          }),
          (_.rest = _.tail = function(array, index, guard) {
            return slice.call(array, null == index || guard ? 1 : index);
          }),
          (_.last = function(array) {
            return array[array.length - 1];
          }),
          (_.compact = function(array) {
            return _.filter(array, function(value) {
              return !!value;
            });
          }),
          (_.flatten = function(array) {
            return _.reduce(
              array,
              function(memo, value) {
                return _.isArray(value)
                  ? memo.concat(_.flatten(value))
                  : ((memo[memo.length] = value), memo);
              },
              []
            );
          }),
          (_.without = function(array) {
            var values = slice.call(arguments, 1);
            return _.filter(array, function(value) {
              return !_.include(values, value);
            });
          }),
          (_.uniq = _.unique = function(array, isSorted) {
            return _.reduce(
              array,
              function(memo, el, i) {
                return (
                  (0 != i &&
                    (!0 === isSorted
                      ? _.last(memo) == el
                      : _.include(memo, el))) ||
                    (memo[memo.length] = el),
                  memo
                );
              },
              []
            );
          }),
          (_.intersect = function(array) {
            var rest = slice.call(arguments, 1);
            return _.filter(_.uniq(array), function(item) {
              return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
              });
            });
          }),
          (_.zip = function() {
            for (
              var args = slice.call(arguments),
                length = _.max(_.pluck(args, 'length')),
                results = new Array(length),
                i = 0;
              i < length;
              i++
            )
              results[i] = _.pluck(args, '' + i);
            return results;
          }),
          (_.indexOf = function(array, item, isSorted) {
            if (null == array) return -1;
            var i, l;
            if (isSorted)
              return array[(i = _.sortedIndex(array, item))] === item ? i : -1;
            if (nativeIndexOf && array.indexOf === nativeIndexOf)
              return array.indexOf(item);
            for (i = 0, l = array.length; i < l; i++)
              if (array[i] === item) return i;
            return -1;
          }),
          (_.lastIndexOf = function(array, item) {
            if (null == array) return -1;
            if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf)
              return array.lastIndexOf(item);
            for (var i = array.length; i--; ) if (array[i] === item) return i;
            return -1;
          }),
          (_.range = function(start, stop, step) {
            arguments.length <= 1 && ((stop = start || 0), (start = 0)),
              (step = arguments[2] || 1);
            for (
              var len = Math.max(Math.ceil((stop - start) / step), 0),
                idx = 0,
                range = new Array(len);
              idx < len;

            )
              (range[idx++] = start), (start += step);
            return range;
          }),
          (_.bind = function(func, obj) {
            if (func.bind === nativeBind && nativeBind)
              return nativeBind.apply(func, slice.call(arguments, 1));
            var args = slice.call(arguments, 2);
            return function() {
              return func.apply(obj, args.concat(slice.call(arguments)));
            };
          }),
          (_.bindAll = function(obj) {
            var funcs = slice.call(arguments, 1);
            return (
              0 == funcs.length && (funcs = _.functions(obj)),
              each(funcs, function(f) {
                obj[f] = _.bind(obj[f], obj);
              }),
              obj
            );
          }),
          (_.memoize = function(func, hasher) {
            var memo = {};
            return (
              hasher || (hasher = _.identity),
              function() {
                var key = hasher.apply(this, arguments);
                return hasOwnProperty.call(memo, key)
                  ? memo[key]
                  : (memo[key] = func.apply(this, arguments));
              }
            );
          }),
          (_.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
              return func.apply(func, args);
            }, wait);
          }),
          (_.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
          });
        var limit = function(func, wait, debounce) {
          var timeout;
          return function() {
            var context = this,
              args = arguments;
            debounce && clearTimeout(timeout),
              (!debounce && timeout) ||
                (timeout = setTimeout(function() {
                  (timeout = null), func.apply(context, args);
                }, wait));
          };
        };
        (_.throttle = function(func, wait) {
          return limit(func, wait, !1);
        }),
          (_.debounce = function(func, wait) {
            return limit(func, wait, !0);
          }),
          (_.once = function(func) {
            var memo,
              ran = !1;
            return function() {
              return ran
                ? memo
                : ((ran = !0), (memo = func.apply(this, arguments)));
            };
          }),
          (_.wrap = function(func, wrapper) {
            return function() {
              var args = [func].concat(slice.call(arguments));
              return wrapper.apply(this, args);
            };
          }),
          (_.compose = function() {
            var funcs = slice.call(arguments);
            return function() {
              for (
                var args = slice.call(arguments), i = funcs.length - 1;
                i >= 0;
                i--
              )
                args = [funcs[i].apply(this, args)];
              return args[0];
            };
          }),
          (_.after = function(times, func) {
            return function() {
              if (--times < 1) return func.apply(this, arguments);
            };
          }),
          (_.keys =
            nativeKeys ||
            function(obj) {
              if (obj !== Object(obj)) throw new TypeError('Invalid object');
              var keys = [];
              for (var key in obj)
                hasOwnProperty.call(obj, key) && (keys[keys.length] = key);
              return keys;
            }),
          (_.values = function(obj) {
            return _.map(obj, _.identity);
          }),
          (_.functions = _.methods = function(obj) {
            return _.filter(_.keys(obj), function(key) {
              return _.isFunction(obj[key]);
            }).sort();
          }),
          (_.extend = function(obj) {
            return (
              each(slice.call(arguments, 1), function(source) {
                for (var prop in source)
                  void 0 !== source[prop] && (obj[prop] = source[prop]);
              }),
              obj
            );
          }),
          (_.defaults = function(obj) {
            return (
              each(slice.call(arguments, 1), function(source) {
                for (var prop in source)
                  null == obj[prop] && (obj[prop] = source[prop]);
              }),
              obj
            );
          }),
          (_.clone = function(obj) {
            return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
          }),
          (_.tap = function(obj, interceptor) {
            return interceptor(obj), obj;
          }),
          (_.isEqual = function(a, b) {
            if (a === b) return !0;
            var atype = typeof a;
            if (atype != typeof b) return !1;
            if (a == b) return !0;
            if ((!a && b) || (a && !b)) return !1;
            if (
              (a._chain && (a = a._wrapped),
              b._chain && (b = b._wrapped),
              a.isEqual)
            )
              return a.isEqual(b);
            if (_.isDate(a) && _.isDate(b)) return a.getTime() === b.getTime();
            if (_.isNaN(a) && _.isNaN(b)) return !1;
            if (_.isRegExp(a) && _.isRegExp(b))
              return (
                a.source === b.source &&
                a.global === b.global &&
                a.ignoreCase === b.ignoreCase &&
                a.multiline === b.multiline
              );
            if ('object' !== atype) return !1;
            if (a.length && a.length !== b.length) return !1;
            var aKeys = _.keys(a),
              bKeys = _.keys(b);
            if (aKeys.length != bKeys.length) return !1;
            for (var key in a)
              if (!(key in b) || !_.isEqual(a[key], b[key])) return !1;
            return !0;
          }),
          (_.isEmpty = function(obj) {
            if (_.isArray(obj) || _.isString(obj)) return 0 === obj.length;
            for (var key in obj) if (hasOwnProperty.call(obj, key)) return !1;
            return !0;
          }),
          (_.isElement = function(obj) {
            return !(!obj || 1 != obj.nodeType);
          }),
          (_.isArray =
            nativeIsArray ||
            function(obj) {
              return '[object Array]' === toString.call(obj);
            }),
          (_.isArguments = function(obj) {
            return !(!obj || !hasOwnProperty.call(obj, 'callee'));
          }),
          (_.isFunction = function(obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
          }),
          (_.isString = function(obj) {
            return !!('' === obj || (obj && obj.charCodeAt && obj.substr));
          }),
          (_.isNumber = function(obj) {
            return !!(0 === obj || (obj && obj.toExponential && obj.toFixed));
          }),
          (_.isNaN = function(obj) {
            return obj != obj;
          }),
          (_.isBoolean = function(obj) {
            return !0 === obj || !1 === obj;
          }),
          (_.isDate = function(obj) {
            return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear);
          }),
          (_.isRegExp = function(obj) {
            return !(
              !(obj && obj.test && obj.exec) ||
              (!obj.ignoreCase && !1 !== obj.ignoreCase)
            );
          }),
          (_.isNull = function(obj) {
            return null === obj;
          }),
          (_.isUndefined = function(obj) {
            return void 0 === obj;
          }),
          (_.noConflict = function() {
            return (root._ = previousUnderscore), this;
          }),
          (_.identity = function(value) {
            return value;
          }),
          (_.times = function(n, iterator, context) {
            for (var i = 0; i < n; i++) iterator.call(context, i);
          }),
          (_.mixin = function(obj) {
            each(_.functions(obj), function(name) {
              addToWrapper(name, (_[name] = obj[name]));
            });
          });
        var idCounter = 0;
        (_.uniqueId = function(prefix) {
          var id = idCounter++;
          return prefix ? prefix + id : id;
        }),
          (_.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
          }),
          (_.template = function(str, data) {
            var c = _.templateSettings,
              tmpl =
                "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" +
                str
                  .replace(/\\/g, '\\\\')
                  .replace(/'/g, "\\'")
                  .replace(c.interpolate, function(match, code) {
                    return "'," + code.replace(/\\'/g, "'") + ",'";
                  })
                  .replace(c.evaluate || null, function(match, code) {
                    return (
                      "');" +
                      code.replace(/\\'/g, "'").replace(/[\r\n\t]/g, ' ') +
                      "__p.push('"
                    );
                  })
                  .replace(/\r/g, '\\r')
                  .replace(/\n/g, '\\n')
                  .replace(/\t/g, '\\t') +
                "');}return __p.join('');",
              func = new Function('obj', tmpl);
            return data ? func(data) : func;
          });
        var wrapper = function(obj) {
          this._wrapped = obj;
        };
        _.prototype = wrapper.prototype;
        var result = function(obj, chain) {
            return chain ? _(obj).chain() : obj;
          },
          addToWrapper = function(name, func) {
            wrapper.prototype[name] = function() {
              var args = slice.call(arguments);
              return (
                unshift.call(args, this._wrapped),
                result(func.apply(_, args), this._chain)
              );
            };
          };
        _.mixin(_),
          each(
            ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
            function(name) {
              var method = ArrayProto[name];
              wrapper.prototype[name] = function() {
                return (
                  method.apply(this._wrapped, arguments),
                  result(this._wrapped, this._chain)
                );
              };
            }
          ),
          each(['concat', 'join', 'slice'], function(name) {
            var method = ArrayProto[name];
            wrapper.prototype[name] = function() {
              return result(
                method.apply(this._wrapped, arguments),
                this._chain
              );
            };
          }),
          (wrapper.prototype.chain = function() {
            return (this._chain = !0), this;
          }),
          (wrapper.prototype.value = function() {
            return this._wrapped;
          });
      })();
    },
  },
]);
