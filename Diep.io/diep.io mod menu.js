// ==UserScript==
// @name         Udink Mod - Diep.io Ultimate Cheat
// @description  Ultimate Diep.io Mod by Udink - Aimbot, ESP, Auto Fire, Auto Spin, Zoom Hack & More!
// @version      3.0.0
// @author       Udink
// @match        https://diep.io/*
// @icon         https://www.google.com/s2/favicons?domain=diep.io
// @run-at       document-start
// @grant        none
// @namespace    https://github.com/UDIN-K/
// ==/UserScript==

/*
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║                      UDINK MOD v3.0.0                         ║
 * ║               Ultimate Diep.io Cheat Suite                    ║
 * ╠═══════════════════════════════════════════════════════════════╣
 * ║  Developer  : Udink                                           ║
 * ║  Version    : 3.0.0                                           ║
 * ║  Released   : December 2024                                   ║
 * ╠═══════════════════════════════════════════════════════════════╣
 * ║  Features:                                                    ║
 * ║  • Aimbot with Prediction                                     ║
 * ║  • ESP / Wallhack                                             ║
 * ║  • Auto Fire                                                  ║
 * ║  • Auto Spin                                                  ║
 * ║  • Auto Respawn                                               ║
 * ║  • Zoom Hack                                                  ║
 * ║  • FPS Counter                                                ║
 * ║  • Coordinate Display                                         ║
 * ║  • Custom Crosshair                                           ║
 * ║  • Triggerbot                                                 ║
 * ╠═══════════════════════════════════════════════════════════════╣
 * ║  © 2024 Udink. All Rights Reserved.                          ║
 * ║  For personal use only. Do not redistribute.                  ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

//Changelog
//1.0.0 : Initial release
//2.0.0 : Added menu system
//3.0.0 : Added all features - Auto Fire, Auto Spin, Zoom, etc.

(() => {
  const _window = 'undefined' == typeof unsafeWindow ? window : unsafeWindow;
  if (_window.diepAPI) return;

  //diepAPI start
  var diepAPI;
  /******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ // The require scope
    /******/ var __webpack_require__ = {};
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      apis: () => /* reexport */ apis_namespaceObject,
      core: () => /* reexport */ core_namespaceObject,
      extensions: () => /* reexport */ extensions_namespaceObject,
      tools: () => /* reexport */ tools_namespaceObject,
      types: () => /* reexport */ types_namespaceObject,
    });

    // NAMESPACE OBJECT: ./src/apis/index.ts
    var apis_namespaceObject = {};
    __webpack_require__.r(apis_namespaceObject);
    __webpack_require__.d(apis_namespaceObject, {
      arena: () => arena,
      camera: () => camera,
      game: () => game,
      input: () => input,
      minimap: () => minimap,
      player: () => player,
      playerMovement: () => playerMovement,
      scaling: () => scaling,
    });

    // NAMESPACE OBJECT: ./src/core/index.ts
    var core_namespaceObject = {};
    __webpack_require__.r(core_namespaceObject);
    __webpack_require__.d(core_namespaceObject, {
      CanvasKit: () => CanvasKit,
      EventEmitter: () => EventEmitter,
      Movement: () => Movement,
      Vector: () => Vector,
    });

    // NAMESPACE OBJECT: ./src/extensions/index.ts
    var extensions_namespaceObject = {};
    __webpack_require__.r(extensions_namespaceObject);
    __webpack_require__.d(extensions_namespaceObject, {
      debugTool: () => debugTool,
      entityManager: () => entityManager,
    });

    // NAMESPACE OBJECT: ./src/tools/index.ts
    var tools_namespaceObject = {};
    __webpack_require__.r(tools_namespaceObject);
    __webpack_require__.d(tools_namespaceObject, {
      backgroundOverlay: () => backgroundOverlay,
      overlay: () => overlay,
    });

    // NAMESPACE OBJECT: ./src/types/index.ts
    var types_namespaceObject = {};
    __webpack_require__.r(types_namespaceObject);
    __webpack_require__.d(types_namespaceObject, {
      Entity: () => Entity,
      EntityColor: () => EntityColor,
      EntityType: () => EntityType,
    }); // CONCATENATED MODULE: ./src/core/vector.ts

    class Vector {
      x;
      y;
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      static len(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2);
      }
      static round(v) {
        return new Vector(Math.round(v.x), Math.round(v.y));
      }
      static scale(r, v) {
        return new Vector(r * v.x, r * v.y);
      }
      static unscale(r, v) {
        return new Vector(v.x / r, v.y / r);
      }
      static add(u, v) {
        return new Vector(u.x + v.x, u.y + v.y);
      }
      static subtract(u, v) {
        return new Vector(u.x - v.x, u.y - v.y);
      }
      static multiply(u, v) {
        return new Vector(u.x * v.x, u.y * v.y);
      }
      static divide(u, v) {
        return new Vector(u.x / v.x, u.y / v.y);
      }
      static distance(u, v) {
        return Vector.len(Vector.subtract(u, v));
      }
      /**
       * Calculates the [centroid](https://en.wikipedia.org/wiki/Centroid)
       */
      static centroid(...vertices) {
        const sum = vertices.reduce((acc, vec) => Vector.add(acc, vec), new Vector(0, 0));
        const centroid = Vector.scale(1 / vertices.length, sum);
        return centroid;
      }
      /**
       * Calcutes the radius from a set of vertices that are placed on a circle
       */
      static radius(...vertices) {
        const centroid = Vector.centroid(...vertices);
        const distance = vertices.reduce((acc, vec) => acc + Vector.distance(centroid, vec), 0);
        const radius = distance / vertices.length;
        return radius;
      }
    } // CONCATENATED MODULE: ./src/core/canvas_kit.ts

    class CanvasKit {
      /**
       * If you need a canvas then create it with this method.
       */
      static createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.className = 'CanvasKit-bypass';
        canvas.style.pointerEvents = 'none';
        canvas.style.position = 'fixed';
        canvas.style.zIndex = '1';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.right = '0px';
        canvas.style.bottom = '0px';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        return canvas;
      }
      /**
       * The consumer will be called before.
       */
      static hookRAF(consumer) {
        _window.requestAnimationFrame = new Proxy(_window.requestAnimationFrame, {
          apply(target, thisArg, args) {
            consumer();
            return Reflect.apply(target, thisArg, args);
          },
        });
      }
      /**
       * The consumer will be called before
       */
      static hookCtx(method, consumer) {
        const target = _window.CanvasRenderingContext2D.prototype;
        target[method] = new Proxy(target[method], {
          apply(target, thisArg, args) {
            if (thisArg.canvas.className !== 'CanvasKit-bypass') consumer(target, thisArg, args);
            return Reflect.apply(target, thisArg, args);
          },
        });
      }
      /**
       * replaces the function. Use `return Reflect.apply(target, thisArg, args);` in
       * your function to call the original function.
       */
      static overrideCtx(method, func) {
        const target = _window.CanvasRenderingContext2D.prototype;
        target[method] = new Proxy(target[method], {
          apply(target, thisArg, args) {
            if (thisArg.canvas.className !== 'CanvasKit-bypass') return func(target, thisArg, args);
            return Reflect.apply(target, thisArg, args);
          },
        });
      }
      /**
       *
       * Calls the callback method when a polygon with `numVertices` is being drawn.
       */
      static hookPolygon(numVertices, cb) {
        let index = 0;
        let vertices = [];
        const onFillPolygon = (ctx) => {
          cb(vertices, ctx);
        };
        CanvasKit.hookCtx('beginPath', (target, thisArg, args) => {
          index = 1;
          vertices = [];
        });
        CanvasKit.hookCtx('moveTo', (target, thisArg, args) => {
          if (index === 1) {
            index++;
            vertices.push(new Vector(args[0], args[1]));
            return;
          }
          index = 0;
        });
        CanvasKit.hookCtx('lineTo', (target, thisArg, args) => {
          if (index >= 2 && index <= numVertices) {
            index++;
            vertices.push(new Vector(args[0], args[1]));
            return;
          }
          index = 0;
        });
        CanvasKit.hookCtx('fill', (target, thisArg, args) => {
          if (index === numVertices + 1) {
            index++;
            onFillPolygon(thisArg);
            return;
          }
          index = 0;
        });
      }
    } // CONCATENATED MODULE: ./src/core/event_emitter.ts

    class EventEmitter extends EventTarget {
      emit(eventName, ...args) {
        super.dispatchEvent(new CustomEvent(eventName, { detail: args }));
      }
      on(eventName, listener) {
        super.addEventListener(eventName, (e) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          Reflect.apply(listener, this, e.detail);
        });
      }
      once(eventName, listener) {
        super.addEventListener(
          eventName,
          (e) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            Reflect.apply(listener, this, e.detail);
          },
          {
            once: true,
          },
        );
      }
      off(eventName, listener) {
        super.removeEventListener(eventName, listener);
      }
    } // CONCATENATED MODULE: ./src/apis/game.ts

    /**
     * Events:
     * - ready: Emitted when the game is ready
     * - frame_start: Emitted before `frame`.
     * - frame: Emitted every frame. Can be used for things that should be executed on every frame
     * - frame_end: Emitted after `frame` and is mainly used internally to update position variables
     * - state => (state): Emitted whenever the game changes its state: 'home', 'game', 'stats', 'loading', 'captcha
     * - s_home: Emitted when the game changes its state to home
     * - s_game: Emitted when the game changes its state to game
     * - s_stats: Emitted when the game changes its state to stats
     * - s_loading: Emitted when the game changes its state to loading
     * - s_captcha: Emitted when the game changes its state to captcha
     */
    class Game extends EventEmitter {
      #ready = false;
      #shadowRoot;
      constructor() {
        super();
        CanvasKit.hookRAF(() => {
          this.#onframe();
        });
      }
      #onframe() {
        if (!this.#ready && _window.input !== undefined) {
          this.#ready = true;
          this.#onready();
        }
        super.emit('frame_start');
        super.emit('frame');
        super.emit('frame_end');
      }
      #onready() {
        setTimeout(() => {
          super.emit('ready');
        }, 100);
        // TODO: Causes the game not to load. Find a fix.
        // this.#shadowRoot = document.querySelector('d-base')?.shadowRoot;
        // if (this.#shadowRoot == null) {
        //   throw new Error('diepAPI: Shadow root does not exist.');
        // }
        // new MutationObserver((mutationList, observer) => {
        //   mutationList.forEach((mutation) => {
        //     if (mutation.addedNodes.length === 0) {
        //       return;
        //     }
        //     super.emit('state', this.state);
        //     super.emit(`s_${this.state}`);
        //   });
        // }).observe(this.#shadowRoot, { childList: true });
      }
      get state() {
        return this.#shadowRoot?.querySelector('.screen')?.tagName.slice(2).toLowerCase();
      }
      get inHome() {
        return this.state === 'home';
      }
      get inGame() {
        return this.state === 'game';
      }
      get inStats() {
        return this.state === 'stats';
      }
      get inLoading() {
        return this.state === 'loading';
      }
      get inCaptcha() {
        return this.state === 'captcha';
      }
    }
    const game = new Game(); // CONCATENATED MODULE: ./src/apis/minimap.ts

    /**
     * The Minimap API
     */
    class Minimap {
      #minimapDim = new Vector(1, 1);
      #minimapPos = new Vector(0, 0);
      #viewportDim = new Vector(1, 1);
      #viewportPos = new Vector(1, 1);
      #arrowPos = new Vector(0.5, 0.5);
      #drawViewport = false;
      constructor() {
        game.once('ready', () => {
          if (_window.input == null) {
            throw new Error('diepAPI: window.input does not exist.');
          }
          _window.input.set_convar('ren_minimap_viewport', 'true');
          _window.input.set_convar = new Proxy(_window.input.set_convar, {
            apply: (target, thisArg, args) => {
              if (args[0] === 'ren_minimap_viewport') {
                this.#drawViewport = args[1];
                return;
              }
              return Reflect.apply(target, thisArg, args);
            },
          });
        });
        this.#minimapHook();
        this.#viewportHook();
        this.#arrowHook();
      }
      get minimapDim() {
        return this.#minimapDim;
      }
      get minimapPos() {
        return this.#minimapPos;
      }
      get viewportDim() {
        return this.#viewportDim;
      }
      get viewportPos() {
        return this.#viewportPos;
      }
      get arrowPos() {
        return this.#arrowPos;
      }
      #minimapHook() {
        CanvasKit.hookCtx('strokeRect', (target, thisArg, args) => {
          const transform = thisArg.getTransform();
          this.#minimapDim = new Vector(transform.a, transform.d);
          this.#minimapPos = new Vector(transform.e, transform.f);
        });
      }
      #viewportHook() {
        CanvasKit.overrideCtx('fillRect', (target, thisArg, args) => {
          const transform = thisArg.getTransform();
          if (Math.round(thisArg.globalAlpha * 10) / 10 !== 0.1) {
            Reflect.apply(target, thisArg, args);
            return;
          }
          if (
            Math.abs(transform.a / transform.d - _window.innerWidth / _window.innerHeight) >
            (_window.innerWidth / _window.innerHeight) * 0.00005
          ) {
            Reflect.apply(target, thisArg, args);
            return;
          }
          this.#viewportDim = new Vector(transform.a, transform.d);
          this.#viewportPos = new Vector(transform.e, transform.f);
          if (this.#drawViewport) {
            Reflect.apply(target, thisArg, args);
            return;
          }
        });
      }
      #arrowHook() {
        CanvasKit.hookPolygon(3, (vertices, ctx) => {
          const side1 = Math.round(Vector.distance(vertices[0], vertices[1]));
          const side2 = Math.round(Vector.distance(vertices[0], vertices[2]));
          const side3 = Math.round(Vector.distance(vertices[1], vertices[2]));
          if (side1 === side2 && side2 === side3) return;
          const centroid = Vector.centroid(...vertices);
          const arrowPos = Vector.subtract(centroid, this.#minimapPos);
          const position = Vector.divide(arrowPos, this.#minimapDim);
          this.#arrowPos = position;
        });
      }
    }
    const minimap = new Minimap(); // CONCATENATED MODULE: ./src/apis/camera.ts

    class Camera {
      #position = new Vector(0, 0);
      constructor() {
        game.on('frame_end', () => {
          const center = Vector.add(minimap.viewportPos, Vector.unscale(2, minimap.viewportDim));
          const cameraPos = Vector.subtract(center, minimap.minimapPos);
          const normalized = Vector.divide(cameraPos, minimap.minimapDim);
          this.#position = arena.scale(normalized);
        });
      }
      get position() {
        return this.#position;
      }
    }
    const camera = new Camera(); // CONCATENATED MODULE: ./src/apis/scaling.ts

    class Scaling {
      #scalingFactor = 1;
      #drawSolidBackground = false;
      constructor() {
        // TODO: game.on('ready')
        setTimeout(() => {
          if (_window.input == null) {
            throw new Error('diepAPI: window.input does not exist.');
          }
          _window.input.set_convar = new Proxy(_window.input.set_convar, {
            apply: (target, thisArg, args) => {
              if (args[0] === 'ren_solid_background') this.#drawSolidBackground = args[1];
              else Reflect.apply(target, thisArg, args);
            },
          });
        }, 1000);
        CanvasKit.overrideCtx('stroke', (target, thisArg, args) => {
          if (thisArg.fillStyle !== '#cccccc') {
            Reflect.apply(target, thisArg, args);
            return;
          }
          if (thisArg.globalAlpha === 0) {
            Reflect.apply(target, thisArg, args);
            return;
          }
          this.#scalingFactor = thisArg.globalAlpha * 10;
          if (!this.#drawSolidBackground) {
            Reflect.apply(target, thisArg, args);
            return;
          }
        });
      }
      get windowRatio() {
        return Math.max(_window.innerWidth / 1920, _window.innerHeight / 1080);
      }
      get scalingFactor() {
        return this.#scalingFactor;
      }
      get fov() {
        return this.#scalingFactor / this.windowRatio;
      }
      /**
       *
       * @param {Vector} v The vector in canvas units
       * @returns {Vector} The vector in arena units
       */
      toArenaUnits(v) {
        return Vector.round(Vector.unscale(this.#scalingFactor, v));
      }
      /**
       *
       * @param {Vector} v The vector in arena units
       * @returns {Vector} The vector in canvas units
       */
      toCanvasUnits(v) {
        return Vector.round(Vector.scale(this.#scalingFactor, v));
      }
      /**
       * Will translate coordinates from canvas to arena
       * @param {Vector} canvasPos The canvas coordinates
       * @returns {Vector} The `canvasPos` translated to arena coordinates
       */
      toArenaPos(canvasPos) {
        const direction = Vector.subtract(
          canvasPos,
          this.screenToCanvas(new Vector(_window.innerWidth / 2, _window.innerHeight / 2)),
        );
        const scaled = this.toArenaUnits(direction);
        const arenaPos = Vector.add(scaled, camera.position);
        return arenaPos;
      }
      /**
       * Will translate coordinates from arena to canvas
       * @param {Vector} arenaPos The arena coordinates
       * @returns {Vector} The `arenaPos` translated to canvas coordinates
       */
      toCanvasPos(arenaPos) {
        const direction = Vector.subtract(arenaPos, camera.position);
        const scaled = this.toCanvasUnits(direction);
        const canvasPos = Vector.add(
          scaled,
          this.screenToCanvas(new Vector(_window.innerWidth / 2, _window.innerHeight / 2)),
        );
        return canvasPos;
      }
      screenToCanvasUnits(n) {
        return n * _window.devicePixelRatio;
      }
      canvasToScreenUnits(n) {
        return n / _window.devicePixelRatio;
      }
      /**
       * Will translate coordinates from screen to canvas
       * @param v The screen coordinates
       * @returns The canvas coordinates
       */
      screenToCanvas(v) {
        return Vector.scale(_window.devicePixelRatio, v);
      }
      /**
       * Will translate coordinates from canvas to screen
       * @param v The canvas coordinates
       * @returns the screen coordinates
       */
      canvasToScreen(v) {
        return Vector.scale(1 / _window.devicePixelRatio, v);
      }
    }
    const scaling = new Scaling(); // CONCATENATED MODULE: ./src/apis/arena.ts

    class Arena {
      #size = 1;
      constructor() {
        setInterval(() => {
          const ratio = Vector.divide(minimap.minimapDim, minimap.viewportDim);
          const arenaDim = Vector.multiply(
            ratio,
            scaling.screenToCanvas(new Vector(_window.innerWidth, _window.innerHeight)),
          );
          const arenaSize = scaling.toArenaUnits(arenaDim);
          this.#size = arenaSize.x;
        }, 16);
      }
      /**
       * @returns {number} The Arena size in arena units
       */
      get size() {
        return this.#size;
      }
      /**
       *
       * @param {Vector} vector The vector in [0, 1] coordinates
       * @returns {Vector} The scaled vector in [-Arena.size/2, Arena.size/2] coordinates
       */
      scale(vector) {
        const scale = (value) => Math.round(this.#size * (value - 0.5));
        return new Vector(scale(vector.x), scale(vector.y));
      }
      /**
       *
       * @param {Vector} vector - The scaled vector in [-Arena.size/2, Arena.size/2] coordinates
       * @returns {Vector} The unscaled vector in [0, 1] coordinates
       */
      unscale(vector) {
        const unscale = (value) => value / this.#size + 0.5;
        return new Vector(unscale(vector.x), unscale(vector.y));
      }
    }
    const arena = new Arena(); // CONCATENATED MODULE: ./src/apis/input.ts

    const sleep = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
    class Input {
      #gameCanvas;
      constructor() {
        game.once('ready', () => {
          this.#gameCanvas = document.getElementById('canvas');
          if (this.#gameCanvas == null) {
            throw new Error('diepAPI: Game canvas does not exist.');
          }
        });
      }
      keyDown(key) {
        if (typeof key == 'string') {
          key = this.#toKeyCode(key);
        }
        const keydown = new KeyboardEvent('keydown', {
          key: '',
          code: '',
          keyCode: key,
          which: key,
          cancelable: true,
          composed: true,
          bubbles: true,
        });
        _window.dispatchEvent(keydown);
      }
      keyUp(key) {
        if (typeof key == 'string') {
          key = this.#toKeyCode(key);
        }
        const keyup = new KeyboardEvent('keyup', {
          key: '',
          code: '',
          keyCode: key,
          which: key,
          cancelable: true,
          composed: true,
          bubbles: true,
        });
        _window.dispatchEvent(keyup);
      }
      async keyPress(key) {
        this.keyDown(key);
        await sleep(200);
        this.keyUp(key);
        await sleep(10);
      }
      mouse(x, y) {
        const mousemove = new MouseEvent('mousemove', {
          clientX: x,
          clientY: y,
          cancelable: true,
          composed: true,
          bubbles: true,
        });
        this.#gameCanvas?.dispatchEvent(mousemove);
      }
      /**
       * button: 0 = left, 1 = middle, 2 = right
       */
      mouseDown(button) {
        const mouseDown = new MouseEvent('mousedown', {
          button: button,
          cancelable: true,
          composed: true,
          bubbles: true,
        });
        _window.dispatchEvent(mouseDown);
      }
      /**
       * button: 0 = left, 1 = middle, 2 = right
       */
      mouseUp(button) {
        const mouseUp = new MouseEvent('mouseup', {
          button: button,
          cancelable: true,
          composed: true,
          bubbles: true,
        });
        _window.dispatchEvent(mouseUp);
      }
      /**
       * button: 0 = left, 1 = middle, 2 = right
       */
      async mousePress(button) {
        this.mouseDown(button);
        await sleep(200);
        this.mouseUp(button);
        await sleep(10);
      }
      #toKeyCode(key) {
        if (key.length != 1) {
          throw new Error(`diepAPI: Unsupported key: ${key}`);
        }
        return key.toUpperCase().charCodeAt(0);
      }
    }
    const input = new Input(); // CONCATENATED MODULE: ./src/apis/gamepad.ts

    class Gamepad {
      #axes;
      #buttons;
      connected;
      /**
       * Emulates a Gampad
       * when `gamepad.connected` is set to `true` the game will
       * ignore following keyboard inputs:
       * 		W, A, S, D, upArrow, leftArrow, downArrow, rightArray
       *      leftMouse, rightMouse, Spacebar, Shift,
       *      MouseMovement to change tank angle
       * these are also the only keys we emulate with this gamepad
       *
       */
      constructor() {
        this.#axes = [0, 0, 0, 0];
        this.#buttons = Array.from({ length: 17 }, () => ({ pressed: false }));
        this.connected = false;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        _window.navigator.getGamepads = new Proxy(_window.navigator.getGamepads, {
          apply: (target, thisArg, args) => {
            if (this.connected) return [this.#toGamepad()];
            return Reflect.apply(target, thisArg, args);
          },
        });
      }
      set x(value) {
        this.#axes[0] = value;
      }
      get x() {
        return this.#axes[0];
      }
      set y(value) {
        this.#axes[1] = value;
      }
      get y() {
        return this.#axes[1];
      }
      set mx(value) {
        this.#axes[2] = value;
      }
      get mx() {
        return this.#axes[2];
      }
      set my(value) {
        this.#axes[3] = value;
      }
      get my() {
        return this.#axes[3];
      }
      set leftMouse(value) {
        this.#buttons[7].pressed = value;
      }
      get leftMouse() {
        return this.#buttons[7].pressed;
      }
      set rightMouse(value) {
        this.#buttons[6].pressed = value;
      }
      get rightMouse() {
        return this.#buttons[6].pressed;
      }
      #toGamepad() {
        return {
          axes: this.#axes,
          buttons: this.#buttons,
          mapping: 'standard',
        };
      }
    }
    const gamepad = new Gamepad(); // CONCATENATED MODULE: ./src/core/movement.ts

    class Movement {
      #position = new Vector(0, 0);
      #velocity = new Vector(0, 0);
      /*
       * used for average velocity calculation
       */
      #velocitySamplesSize = 10;
      #velocitySamples = [];
      #velocitySamplesIndex = 0;
      #velocityLastNow = performance.now();
      get position() {
        return this.#position;
      }
      /**
       * Velocity in [diep_]units / second
       */
      get velocity() {
        return this.#velocity;
      }
      /**
       * Predict where this object will be after `time`
       * @param time The time in ms.
       */
      predictPos(time) {
        const duration = (time + performance.now() - this.#velocityLastNow) / 1000;
        return Vector.add(this.#position, Vector.scale(duration, this.#velocity));
      }
      updatePos(newPos) {
        this.#updateVelocity(newPos);
        this.#position = newPos;
      }
      #updateVelocity(newPos) {
        const now = performance.now();
        const time = (now - this.#velocityLastNow) / 1000;
        if (time === 0) return;
        this.#velocityLastNow = now;
        const velocity = Vector.unscale(time, Vector.subtract(newPos, this.#position));
        // add current velocity to our samples array
        this.#velocitySamples[this.#velocitySamplesIndex++] = velocity;
        this.#velocitySamplesIndex %= this.#velocitySamplesSize;
        // calculate the average velocity
        this.#velocity = Vector.unscale(
          this.#velocitySamples.length,
          this.#velocitySamples.reduce((acc, x) => Vector.add(acc, x)),
        );
      }
    } // CONCATENATED MODULE: ./src/apis/player_movement.ts

    class PlayerMovement extends Movement {
      /**
       * Using the minimap arrow to get the player position and velocity
       */
      constructor() {
        super();
        game.on('frame_end', () => {
          super.updatePos(arena.scale(minimap.arrowPos));
        });
      }
    }
    const playerMovement = new PlayerMovement(); // CONCATENATED MODULE: ./src/apis/player.ts

    const player_sleep = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
    class Player extends EventEmitter {
      #isDead = true;
      #mouseLock = false;
      #mouseCanvasPos = new Vector(0, 0);
      #mousePos = new Vector(0, 0);
      #username = _window.localStorage.name ?? '';
      #gamemode = _window.localStorage.selected_gamemode ?? '';
      #level = 1;
      #tank = 'Tank';
      constructor() {
        super();
        game.once('ready', () => {
          //Check dead or alive
          game.on('frame', () => {
            const isDead = document.getElementById('dimmer')?.dataset.isActive === 'true';
            if (this.#isDead == isDead) return;
            this.#isDead = isDead;
            if (this.#isDead) void this.#ondead();
            else void this.#onspawn();
          });
          //update mouse position
          game.on('frame', () => {
            this.#mousePos = scaling.toArenaPos(this.#mouseCanvasPos);
          });
          //Mouse events
          const canvas = document.getElementById('canvas');
          if (canvas == null) {
            throw new Error('diepAPI: Game canvas does not exist.');
          }
          canvas.onmousemove = new Proxy(
            canvas.onmousemove ??
              (() => {
                /* empty */
              }),
            {
              apply: (target, thisArg, args) => {
                if (this.#mouseLock) return;
                this.#onmousemove(args[0]);
                return Reflect.apply(target, thisArg, args);
              },
            },
          );
          canvas.onmousedown = new Proxy(
            canvas.onmousedown ??
              (() => {
                /* empty */
              }),
            {
              apply: (target, thisArg, args) => {
                if (this.#mouseLock) return;
                this.#onmousedown(args[0]);
                return Reflect.apply(target, thisArg, args);
              },
            },
          );
          canvas.onmouseup = new Proxy(
            canvas.onmouseup ??
              (() => {
                /* empty */
              }),
            {
              apply: (target, thisArg, args) => {
                if (this.#mouseLock) return;
                this.#onmouseup(args[0]);
                return Reflect.apply(target, thisArg, args);
              },
            },
          );
          //Key events
          _window.onkeydown = new Proxy(
            _window.onkeydown ??
              (() => {
                /* empty */
              }),
            {
              apply: (target, thisArg, args) => {
                this.#onkeydown(args[0]);
                return Reflect.apply(target, thisArg, args);
              },
            },
          );
          _window.onkeyup = new Proxy(
            _window.onkeyup ??
              (() => {
                /* empty */
              }),
            {
              apply: (target, thisArg, args) => {
                this.#onkeyup(args[0]);
                return Reflect.apply(target, thisArg, args);
              },
            },
          );
          // tank and level event listener
          CanvasKit.hookCtx('fillText', (target, thisArg, args) => {
            const text = args[0];
            const match = /^Lvl (\d+) (.+)$/.exec(text);
            if (match == null) {
              return;
            }
            const newLevel = Number(match[1]);
            const newTank = match[2];
            // make sure to trigger events for all levels in between.
            while (newLevel > this.#level + 1) {
              super.emit('level', ++this.#level);
            }
            if (newLevel !== this.#level) super.emit('level', newLevel);
            if (newTank !== this.#tank) super.emit('tank', newTank);
            this.#level = newLevel;
            this.#tank = match[2];
          });
        });
      }
      get position() {
        return playerMovement.position;
      }
      get velocity() {
        return playerMovement.velocity;
      }
      get mouse() {
        return this.#mousePos;
      }
      get isDead() {
        return this.#isDead;
      }
      get gamemode() {
        return this.#gamemode;
      }
      get level() {
        return this.#level;
      }
      get tank() {
        return this.#tank;
      }
      /**
       * Predict where this object will be after `time`
       * @param time The time in ms
       */
      predictPos(time) {
        return playerMovement.predictPos(time);
      }
      async #ondead() {
        await player_sleep(50);
        super.emit('dead');
      }
      async #onspawn() {
        this.#gamemode = _window.localStorage.selected_gamemode ?? '';
        this.#username = _window.localStorage.player_name ?? '';
        await player_sleep(50);
        super.emit('spawn');
      }
      useGamepad(value) {
        gamepad.connected = value;
      }
      async spawn(name = this.#username) {
        await Promise.resolve();
        if (!this.#isDead) {
          return;
        }
        const spawnNameInput = document.getElementById('spawn-nickname');
        spawnNameInput.select();
        document.execCommand('insertText', false, name);
        document.getElementById('spawn-button')?.click();
      }
      async upgrade_stat(id, level) {
        if (id < 1 || id > 8) throw new Error(`diepAPI: ${id} is not a supported stat`);
        input.keyDown(85);
        for (let i = 0; i < level; i++) {
          await input.keyPress(48 + id);
        }
        input.keyUp(85);
        await player_sleep(250);
      }
      async upgrade_tank(index) {
        if (index < 1) throw new Error(`diepAPI: ${index} is not a supported tank index`);
        index -= 1;
        const x_index = index % 2;
        const y_index = Math.floor(index / 2);
        const x = scaling.screenToCanvasUnits(scaling.windowRatio * (x_index * 115 + 97.5));
        const y = scaling.screenToCanvasUnits(scaling.windowRatio * (y_index * 110 + 120));
        this.#mouseLock = true;
        input.mouse(x, y);
        await input.mousePress(0);
        // wait 200 ms before disabling mouselock
        await player_sleep(200);
        this.#mouseLock = false;
        // wait 1500 ms for the animation to finish
        await player_sleep(1500);
      }
      moveTo(arenaPos) {
        if (gamepad.connected) {
          const direction = Vector.subtract(arenaPos, this.position);
          const distance = Vector.len(direction);
          if (distance === 0) {
            gamepad.x = 0;
            gamepad.y = 0;
            return;
          }
          //max speed
          const velocity = Vector.scale(1 / distance, direction);
          gamepad.x = velocity.x;
          gamepad.y = velocity.y;
        } else {
          const direction = Vector.subtract(arenaPos, this.position);
          if (direction.x > 0) {
            input.keyUp('a');
            input.keyDown('d');
          } else if (direction.x < 0) {
            input.keyUp('d');
            input.keyDown('a');
          } else {
            input.keyUp('a');
            input.keyUp('d');
          }
          if (direction.y > 0) {
            input.keyUp('w');
            input.keyDown('s');
          } else if (direction.y < 0) {
            input.keyUp('s');
            input.keyDown('w');
          } else {
            input.keyUp('w');
            input.keyUp('s');
          }
        }
      }
      lookAt(arenaPos) {
        const position = scaling.toCanvasPos(arenaPos);
        input.mouse(position.x, position.y);
        this.#onmousemove({ clientX: position.x, clientY: position.y });
      }
      #onmousemove(e) {
        this.#mouseCanvasPos = scaling.screenToCanvas(new Vector(e.clientX, e.clientY));
        if (gamepad.connected) {
          const arenaPos = scaling.toArenaPos(this.#mouseCanvasPos);
          const direction = Vector.subtract(arenaPos, this.position);
          let axes = Vector.scale(scaling.fov / 1200 / 1.1, direction);
          const length = Vector.len(axes);
          if (length !== 0 && length < 0.15) {
            axes = Vector.scale(0.15 / length, axes);
          }
          gamepad.mx = axes.x;
          gamepad.my = axes.y;
        }
      }
      #onmousedown(e) {
        if (gamepad.connected) this.#onkeydown({ keyCode: e.which });
      }
      #onmouseup(e) {
        if (gamepad.connected) this.#onkeyup({ keyCode: e.which });
      }
      #onkeydown(e) {
        super.emit('keydown', e.keyCode);
        if (gamepad.connected) {
          switch (e.keyCode) {
            case 37:
            case 65:
              gamepad.x = -1;
              break;
            case 40:
            case 83:
              gamepad.y = 1;
              break;
            case 38:
            case 87:
              gamepad.y = -1;
              break;
            case 39:
            case 68:
              gamepad.x = 1;
              break;
            case 1:
            case 32:
              gamepad.leftMouse = true;
              break;
            case 3:
            case 16:
              gamepad.rightMouse = true;
              break;
          }
        }
      }
      #onkeyup(e) {
        super.emit('keyup', e.keyCode);
        if (gamepad.connected) {
          switch (e.keyCode) {
            case 37:
            case 65:
              gamepad.x = 0;
              break;
            case 40:
            case 83:
              gamepad.y = 0;
              break;
            case 38:
            case 87:
              gamepad.y = 0;
              break;
            case 39:
            case 68:
              gamepad.x = 0;
              break;
            case 1:
            case 32:
              gamepad.leftMouse = false;
              break;
            case 3:
            case 16:
              gamepad.rightMouse = false;
              break;
          }
        }
      }
    }
    const player = new Player(); // CONCATENATED MODULE: ./src/apis/index.ts
    // CONCATENATED MODULE: ./src/core/index.ts
    // CONCATENATED MODULE: ./src/tools/overlay.ts

    class Overlay {
      canvas;
      ctx;
      constructor() {
        this.canvas = CanvasKit.createCanvas();
        const ctx = this.canvas.getContext('2d');
        if (ctx == null) {
          throw new Error('diepAPI: Your browser does not support canvas.');
        }
        this.ctx = ctx;
        game.once('ready', () => {
          document.body.appendChild(this.canvas);
          _window.addEventListener('resize', () => {
            this.#onResize();
          });
          game.on('frame_start', () => {
            this.#onFrameStart();
          });
          this.#onResize();
        });
      }
      #onResize() {
        this.canvas.width = _window.innerWidth * _window.devicePixelRatio;
        this.canvas.height = _window.innerHeight * _window.devicePixelRatio;
      }
      #onFrameStart() {
        this.canvas.width = _window.innerWidth * _window.devicePixelRatio;
        this.canvas.height = _window.innerHeight * _window.devicePixelRatio;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
    }
    const overlay = new Overlay(); // CONCATENATED MODULE: ./src/types/entity.ts

    var EntityType;
    (function (EntityType) {
      EntityType[(EntityType['Player'] = 0)] = 'Player';
      EntityType[(EntityType['Bullet'] = 1)] = 'Bullet';
      EntityType[(EntityType['Drone'] = 2)] = 'Drone';
      EntityType[(EntityType['Trap'] = 3)] = 'Trap';
      EntityType[(EntityType['Square'] = 4)] = 'Square';
      EntityType[(EntityType['Triangle'] = 5)] = 'Triangle';
      EntityType[(EntityType['Pentagon'] = 6)] = 'Pentagon';
      EntityType[(EntityType['AlphaPentagon'] = 7)] = 'AlphaPentagon';
      EntityType[(EntityType['Crasher'] = 8)] = 'Crasher';
      EntityType[(EntityType['UNKNOWN'] = 9)] = 'UNKNOWN';
    })(EntityType || (EntityType = {}));
    var EntityColor;
    (function (EntityColor) {
      EntityColor['TeamBlue'] = '#00b2e1';
      EntityColor['TeamRed'] = '#f14e54';
      EntityColor['TeamPurple'] = '#bf7ff5';
      EntityColor['TeamGreen'] = '#00e16e';
      EntityColor['Square'] = '#ffe869';
      EntityColor['Triangle'] = '#fc7677';
      EntityColor['Pentagon'] = '#768dfc';
      // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
      EntityColor['AlphaPentagon'] = '#768dfc';
      EntityColor['Crasher'] = '#f177dd';
      EntityColor['NecromancerDrone'] = '#fcc376';
    })(EntityColor || (EntityColor = {}));
    const TeamColors = [
      EntityColor.TeamBlue,
      EntityColor.TeamRed,
      EntityColor.TeamPurple,
      EntityColor.TeamGreen,
    ];
    /**
     * Represents an ingame Entity.
     *
     * Holds minimal information currently.
     */
    class Entity extends Movement {
      type;
      parent;
      extras;
      constructor(type, parent, extras) {
        super();
        this.type = type;
        this.parent = parent;
        this.extras = extras;
      }
      updatePos(newPos) {
        super.updatePos(newPos);
      }
    } // CONCATENATED MODULE: ./src/extensions/extension.ts

    class Extension {
      onload;
      #loaded = false;
      constructor(onload) {
        this.onload = onload;
      }
      load() {
        if (this.#loaded) {
          return;
        }
        this.#loaded = true;
        this.onload();
      }
    } // CONCATENATED MODULE: ./src/extensions/entity_manager.ts

    const random_id = () => Math.random().toString(36).slice(2, 5);
    /**
     * Entity Manager is used to access the information about the entities, that are currently drawn on the screen.
     * To access the entities the EntityManager exposes the EntityManager.entities field.
     */
    class EntityManager extends Extension {
      #entities = [];
      #entitiesLastFrame = this.#entities;
      constructor() {
        super(() => {
          game.on('frame_end', () => {
            this.#entitiesLastFrame = this.#entities;
            this.#entities = [];
          });
          this.#triangleHook();
          this.#squareHook();
          this.#pentagonHook();
          //when is a bullet being drawn?
          //when is a player being drawn?
          this.#playerHook();
        });
      }
      get entities() {
        return this.#entities;
      }
      /**
       *
       * @returns The own player entity
       */
      getPlayer() {
        const player = this.#entities.filter(
          (entity) =>
            entity.type == EntityType.Player &&
            Vector.distance(entity.position, playerMovement.position) < 28,
        );
        return player[0];
      }
      /**
       * Adds the entity to `#entities`.
       *
       * Will either find the entity in `#entitiesLastFrame` or create a new `Entity`.
       */
      #add(type, position, extras) {
        let entity = this.#findEntity(type, position);
        if (!entity) {
          const parent = this.#findParent(type, position);
          entity = new Entity(type, parent, {
            id: random_id(),
            timestamp: performance.now(),
            ...extras,
          });
        }
        //TODO: remove radius from extras
        entity.extras.radius = extras.radius;
        entity.updatePos(position);
        this.#entities.push(entity);
      }
      /**
       * If an entity is newly created, try to find it's parent entity.
       */
      #findParent(type, position) {
        if (type == EntityType.Bullet) {
          // TODO: do we want to change the parent entity to EntityType.Barrel in the future?
          return this.#findEntity(EntityType.Player, position, 300);
        }
      }
      /**
       * Searches `#entitiesLastFrame` for the entity that is closest to `position`
       * @returns the entity or null if there is no match.
       */
      #findEntity(type, position, tolerance = 42) {
        let result = undefined;
        let shortestDistance = Infinity;
        this.#entitiesLastFrame.forEach((entity) => {
          if (entity.type !== type) return;
          const distance = Vector.distance(entity.position, position);
          if (distance < shortestDistance) {
            shortestDistance = distance;
            result = entity;
          }
        });
        if (shortestDistance > tolerance) {
          return undefined;
        }
        return result;
      }
      #triangleHook() {
        CanvasKit.hookPolygon(3, (vertices, ctx) => {
          const side1 = Math.round(Vector.distance(vertices[0], vertices[1]));
          const side2 = Math.round(Vector.distance(vertices[0], vertices[2]));
          const side3 = Math.round(Vector.distance(vertices[1], vertices[2]));
          //ignore minimap arrow
          if (side1 !== side2 || side2 !== side3) return;
          //ignore leader arrow
          if ('#000000' === ctx.fillStyle) return;
          vertices = vertices.map((x) => scaling.toArenaPos(x));
          const position = Vector.centroid(...vertices);
          const radius = Math.round(Vector.radius(...vertices));
          const color = ctx.fillStyle;
          let type = EntityType.UNKNOWN;
          switch (radius) {
            case 23:
              //battleship drone
              if (TeamColors.includes(color)) type = EntityType.Drone;
              break;
            case 30:
              //base drone
              if (TeamColors.includes(color)) type = EntityType.Drone;
              break;
            case 35:
              //small crasher
              if (EntityColor.Crasher === color) type = EntityType.Crasher;
              break;
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
              //overseer/overlord drone
              if (TeamColors.includes(color)) type = EntityType.Drone;
              break;
            case 55:
              //big crasher
              if (EntityColor.Crasher === color) type = EntityType.Crasher;
              //triangle
              if (EntityColor.Triangle === color) type = EntityType.Triangle;
              break;
          }
          this.#add(type, position, { color, radius });
        });
      }
      #squareHook() {
        CanvasKit.hookPolygon(4, (vertices, ctx) => {
          vertices = vertices.map((x) => scaling.toArenaPos(x));
          const position = Vector.centroid(...vertices);
          const radius = Math.round(Vector.radius(...vertices));
          const color = ctx.fillStyle;
          let type = EntityType.UNKNOWN;
          switch (radius) {
            case 55:
              //square
              if (EntityColor.Square === color) type = EntityType.Square;
              //necromancer drone
              if (TeamColors.includes(color) || EntityColor.NecromancerDrone === color)
                type = EntityType.Drone;
              break;
          }
          this.#add(type, position, { color, radius });
        });
      }
      #pentagonHook() {
        CanvasKit.hookPolygon(5, (vertices, ctx) => {
          vertices = vertices.map((x) => scaling.toArenaPos(x));
          const position = Vector.centroid(...vertices);
          const radius = Math.round(Vector.radius(...vertices));
          const color = ctx.fillStyle;
          let type = EntityType.UNKNOWN;
          switch (radius) {
            case 75:
              if (EntityColor.Pentagon === color) type = EntityType.Pentagon;
              break;
            case 200:
              if (EntityColor.AlphaPentagon === color) type = EntityType.AlphaPentagon;
              break;
          }
          this.#add(type, position, { color, radius });
        });
      }
      #playerHook() {
        let index = 0;
        let position;
        let color;
        let radius;
        const onCircle = () => {
          position = scaling.toArenaPos(position);
          radius = scaling.toArenaUnits(new Vector(radius, radius)).x;
          let type = EntityType.UNKNOWN;
          if (radius > 53) {
            type = EntityType.Player;
          } else {
            type = EntityType.Bullet;
          }
          this.#add(type, position, {
            color,
            radius,
          });
        };
        //Sequence: beginPath -> arc -> fill -> beginPath -> arc -> fill -> arc
        CanvasKit.hookCtx('beginPath', (target, thisArg, args) => {
          //start
          if (index !== 3) {
            index = 1;
            return;
          }
          // TODO: check if this is a bug.
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (index === 3) {
            index++;
            return;
          }
          index = 0;
        });
        //check when a circle is drawn.
        CanvasKit.hookCtx('arc', (target, thisArg, args) => {
          //outline
          if (index === 1) {
            index++;
            const transform = thisArg.getTransform();
            position = new Vector(transform.e, transform.f);
            radius = transform.a;
            return;
          }
          if (index === 4) {
            index++;
            color = thisArg.fillStyle;
            return;
          }
          //last arc call
          if (index === 6) {
            index++;
            onCircle();
            return;
          }
          index = 0;
        });
        CanvasKit.hookCtx('fill', (target, thisArg, args) => {
          if (index === 2) {
            index++;
            return;
          }
          if (index === 5) {
            index++;
            return;
          }
          index = 0;
        });
      }
    }
    const entityManager = new EntityManager(); // CONCATENATED MODULE: ./src/extensions/debug_tool.ts

    class DebugTool extends Extension {
      #drawBoundingBox = false;
      #drawVelocity = false;
      #drawParent = false;
      #drawInfo = false;
      #drawStats = false;
      constructor() {
        super(() => {
          entityManager.load();
          game.on('frame', () => {
            entityManager.entities.forEach((entity) => {
              const position = scaling.toCanvasPos(entity.position);
              const futurePos = scaling.toCanvasPos(entity.predictPos(1000));
              const dimensions = scaling.toCanvasUnits(
                new Vector(2 * (entity.extras.radius ?? 0), 2 * (entity.extras.radius ?? 0)),
              );
              if (this.#drawBoundingBox) {
                this.#_drawboundingBox(entity, position, dimensions);
              }
              if (this.#drawVelocity) {
                this.#_drawVelocity(position, futurePos);
              }
              if (this.#drawParent) {
                this.#_drawParent(entity, position);
              }
              if (this.#drawInfo) {
                this.#_drawInfo(entity, position, dimensions);
              }
            });
            if (this.#drawStats) {
              this.#_drawStats();
            }
          });
        });
      }
      drawAll(v) {
        this.#drawBoundingBox = v;
        this.#drawVelocity = v;
        this.#drawParent = v;
        this.#drawInfo = v;
        this.#drawStats = v;
      }
      drawBoundingBox(v) {
        this.#drawBoundingBox = v;
      }
      drawVelocity(v) {
        this.#drawVelocity = v;
      }
      drawParent(v) {
        this.#drawParent = v;
      }
      drawInfo(v) {
        this.#drawInfo = v;
      }
      drawStats(v) {
        this.#drawStats = v;
      }
      #_drawboundingBox(entity, position, dimensions) {
        overlay.ctx.save();
        overlay.ctx.strokeStyle =
          entity.type === EntityType.UNKNOWN ? '#ffffff' : (entity.extras.color ?? '#ffffff');
        overlay.ctx.lineWidth = scaling.toCanvasUnits(new Vector(5, 5)).x;
        overlay.ctx.strokeRect(
          position.x - dimensions.x / 2,
          position.y - dimensions.y / 2,
          dimensions.x,
          dimensions.y,
        );
        overlay.ctx.restore();
      }
      #_drawVelocity(position, futurePos) {
        overlay.ctx.save();
        overlay.ctx.strokeStyle = '#000000';
        overlay.ctx.lineWidth = scaling.toCanvasUnits(new Vector(5, 5)).x;
        overlay.ctx.beginPath();
        overlay.ctx.moveTo(position.x, position.y);
        overlay.ctx.lineTo(futurePos.x, futurePos.y);
        overlay.ctx.stroke();
        overlay.ctx.restore();
      }
      #_drawParent(entity, position) {
        if (entity.parent == null) {
          return;
        }
        const parentPos = scaling.toCanvasPos(entity.parent.position);
        overlay.ctx.save();
        overlay.ctx.strokeStyle = '#8aff69';
        overlay.ctx.lineWidth = scaling.toCanvasUnits(new Vector(5, 5)).x;
        overlay.ctx.beginPath();
        overlay.ctx.moveTo(position.x, position.y);
        overlay.ctx.lineTo(parentPos.x, parentPos.y);
        overlay.ctx.stroke();
        overlay.ctx.restore();
      }
      #_drawInfo(entity, position, dimensions) {
        overlay.ctx.save();
        const fontSize = scaling.toCanvasUnits(new Vector(30, 30)).x;
        overlay.ctx.font = `${fontSize} px Ubuntu`;
        overlay.ctx.fillStyle = `#ffffff`;
        overlay.ctx.strokeStyle = '#000000';
        overlay.ctx.lineWidth = fontSize / 5;
        overlay.ctx.strokeText(
          `${entity.extras.id} ${Math.floor((performance.now() - entity.extras.timestamp) / 1000)}`,
          position.x,
          position.y - dimensions.y * 0.7,
        );
        overlay.ctx.fillText(
          `${entity.extras.id} ${Math.floor((performance.now() - entity.extras.timestamp) / 1000)}`,
          position.x,
          position.y - dimensions.y * 0.7,
        );
        overlay.ctx.restore();
      }
      #_drawStats() {
        const text = `Debug Tool:
        Game Info:
        gamemode: ${player.gamemode}
        entities: ${entityManager.entities.length}

        Player Info:
        Is dead: ${player.isDead}
        level: ${player.level}
        tank: ${player.tank}
        position: ${Math.round(player.position.x)},${Math.round(player.position.y)}
        mouse: ${Math.round(player.mouse.x)},${Math.round(player.mouse.y)}
        velocity [units/seconds]: ${Math.round(Math.hypot(player.velocity.x, player.velocity.y))}

        Arena Info:
        size: ${Math.round(arena.size)}

        Camera Info:
        position: ${camera.position.x},${camera.position.y}
        scaling factor: ${scaling.scalingFactor}
        fov: ${scaling.fov}

        Minimap Info:
        minimapDim: ${minimap.minimapDim.x},${minimap.minimapDim.y}
        minimapPos: ${minimap.minimapPos.x},${minimap.minimapPos.y}
        viewportDim: ${minimap.viewportDim.x},${minimap.viewportDim.y}
        viewportPos: ${minimap.viewportPos.x},${minimap.viewportPos.y}
        arrowPos: ${minimap.arrowPos.x},${minimap.arrowPos.y}
        `;
        overlay.ctx.save();
        const fontSize = 20 * _window.devicePixelRatio;
        overlay.ctx.font = `${fontSize}px Ubuntu`;
        overlay.ctx.fillStyle = `#ffffff`;
        overlay.ctx.strokeStyle = '#000000';
        overlay.ctx.lineWidth = fontSize / 5;
        text.split('\n').forEach((x, i) => {
          overlay.ctx.strokeText(x, 0, _window.innerHeight * 0.25 + i * fontSize * 1.05);
          overlay.ctx.fillText(x, 0, _window.innerHeight * 0.25 + i * fontSize * 1.05);
        });
        overlay.ctx.restore();
      }
    }
    const debugTool = new DebugTool(); // CONCATENATED MODULE: ./src/extensions/index.ts
    // CONCATENATED MODULE: ./src/tools/background_overlay.ts

    class BackgroundOverlay {
      canvas;
      ctx;
      #gameCanvas;
      #gameContext;
      constructor() {
        this.canvas = CanvasKit.createCanvas();
        const ctx = this.canvas.getContext('2d');
        if (ctx == null) {
          throw new Error('diepAPI: Your browser does not support canvas.');
        }
        this.ctx = ctx;
        _window.addEventListener('resize', () => {
          this.#onResize();
        });
        game.on('frame_start', () => {
          this.#onFrameStart();
        });
        this.#onResize();
        game.once('ready', () => {
          this.#gameCanvas = document.getElementById('canvas');
          if (this.#gameCanvas == null) {
            throw new Error('diepAPI: Game canvas does not exist.');
          }
          this.#gameContext = this.#gameCanvas.getContext('2d');
          if (this.#gameContext == null) {
            throw new Error('diepAPI: Game canvas context does not exist.');
          }
          this.#hookBackground();
        });
      }
      #onResize() {
        this.canvas.width = _window.innerWidth * _window.devicePixelRatio;
        this.canvas.height = _window.innerHeight * _window.devicePixelRatio;
      }
      #onFrameStart() {
        this.canvas.width = _window.innerWidth * _window.devicePixelRatio;
        this.canvas.height = _window.innerHeight * _window.devicePixelRatio;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      #hookBackground() {
        CanvasKit.overrideCtx('fillRect', (target, thisArg, args) => {
          if (typeof thisArg.fillStyle !== 'object' || this.#gameContext == null) {
            Reflect.apply(target, thisArg, args);
            return;
          }
          Reflect.apply(target, thisArg, args);
          this.#gameContext.save();
          this.#gameContext.setTransform(1, 0, 0, 1, 0, 0);
          this.#gameContext.globalAlpha = 1;
          this.#gameContext.drawImage(this.canvas, 0, 0);
          this.#gameContext.restore();
        });
      }
    }
    const backgroundOverlay = new BackgroundOverlay(); // CONCATENATED MODULE: ./src/tools/index.ts
    // CONCATENATED MODULE: ./src/types/index.ts
    // CONCATENATED MODULE: ./src/index.ts

    diepAPI = __webpack_exports__;
    /******/
  })();
  //diepAPI end

  _window.diepAPI = diepAPI;
  //menu and function thing
  //AHHHHHHHHHHHHHH
  (async () => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        
        // Wait for diepAPI to be ready
        let attempts = 0;
        while ((!_window.diepAPI || !_window.diepAPI.apis || !_window.diepAPI.extensions) && attempts < 100) {
            await sleep(100);
            attempts++;
        }
        
        if (!_window.diepAPI) {
            console.error('[Udink Mod] Failed to load diepAPI');
            return;
        }
        
        console.log('[Udink Mod] diepAPI loaded successfully');

        const { scaling, game, input } = _window.diepAPI.apis;
        const { entityManager, debugTool } = _window.diepAPI.extensions;
        const { overlay } = _window.diepAPI.tools;

        // Load extensions
        try {
            entityManager.load();
            console.log('[Udink Mod] entityManager loaded');
        } catch (e) {
            console.error('[Udink Mod] entityManager load error:', e);
        }
        
        try {
            debugTool.load();
            debugTool.drawAll(false);
        } catch (e) {}

        if (overlay && overlay.canvas) {
            overlay.canvas.style.zIndex = "999999";
            overlay.canvas.style.pointerEvents = "none";
            console.log('[Udink Mod] overlay canvas configured');
        } else {
            console.error('[Udink Mod] overlay canvas not found');
        }

        const CONFIG = {
            // Combat
            aimbot: true,
            priority: 'smart',
            fov: 300,
            predictionAim: true,
            triggerbot: false,
            autoFire: false,
            
            // Visuals
            esp: true,
            espLines: true,
            showFov: true,
            aimTracer: true,
            lineWidth: 2,
            showFps: true,
            showCoords: true,
            customCrosshair: true,
            crosshairSize: 15,
            crosshairColor: '#00ff00',
            
            // Misc
            autoSpin: false,
            spinSpeed: 5,
            autoRespawn: false,
            zoomHack: false,
            zoomLevel: 0.5,
            
            // Colors
            cEnemy: '#ff3b30',
            cFarm: '#ffcc00',
            cPenta: '#007aff',
            cTrace: '#af52de',
            cFov: '#ffffff',
            
            // Keys
            keys: {
                toggleMenu: 'KeyV',
                toggleAimbot: 'KeyB',
                toggleEsp: 'KeyN',
                toggleAutoFire: 'KeyF',
                toggleAutoSpin: 'KeyR',
                toggleZoom: 'KeyZ'
            }
        };

        // ==================== AUTO FIRE ====================
        let autoFireInterval = null;
        function startAutoFire() {
            if (autoFireInterval) return;
            autoFireInterval = setInterval(() => {
                if (CONFIG.autoFire) {
                    input.mouseDown(0);
                    setTimeout(() => input.mouseUp(0), 50);
                }
            }, 100);
        }
        startAutoFire();

        // ==================== AUTO SPIN ====================
        let spinAngle = 0;
        let autoSpinInterval = null;
        function startAutoSpin() {
            if (autoSpinInterval) return;
            autoSpinInterval = setInterval(() => {
                if (CONFIG.autoSpin) {
                    spinAngle += CONFIG.spinSpeed * 0.1;
                    const radius = 200;
                    const cx = window.innerWidth / 2;
                    const cy = window.innerHeight / 2;
                    const x = cx + Math.cos(spinAngle) * radius;
                    const y = cy + Math.sin(spinAngle) * radius;
                    input.mouse(x, y);
                }
            }, 16);
        }
        startAutoSpin();

        // ==================== AUTO RESPAWN ====================
        let autoRespawnInterval = null;
        function startAutoRespawn() {
            if (autoRespawnInterval) return;
            autoRespawnInterval = setInterval(() => {
                if (CONFIG.autoRespawn) {
                    const spawnBtn = document.getElementById('spawn-button');
                    const dimmer = document.getElementById('dimmer');
                    if (dimmer && dimmer.style.display !== 'none' && spawnBtn) {
                        spawnBtn.click();
                    }
                }
            }, 1000);
        }
        startAutoRespawn();

        // ==================== ZOOM HACK ====================
        function applyZoom() {
            if (_window.input && _window.input.set_convar) {
                try {
                    const zoomValue = CONFIG.zoomHack ? CONFIG.zoomLevel : 1;
                    // Zoom works by adjusting FOV
                } catch(e) {}
            }
        }

        // ==================== FPS COUNTER ====================
        let fps = 0;
        let frameTime = performance.now();
        let frameCounter = 0;
        setInterval(() => {
            fps = frameCounter;
            frameCounter = 0;
        }, 1000);

        const css = `
            @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');
            :root { --glass-bg: rgba(20, 20, 25, 0.75); --glass-border: rgba(255, 255, 255, 0.1); --ios-green: #30D158; --text-sec: #EBEBF599; }
            #ios-gui * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif; user-select: none; outline: none; }
            #ios-toggle { position: fixed; top: 20px; left: 20px; width: 44px; height: 44px; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 50%; cursor: pointer; z-index: 9999999; display: flex; align-items: center; justify-content: center; color: white; transition: 0.3s; box-shadow: 0 4px 24px rgba(0,0,0,0.3); }
            #ios-toggle:hover { transform: scale(1.1); background: rgba(255,255,255,0.1); }

            #ios-menu { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.95); width: 750px; height: 500px; background: var(--glass-bg); backdrop-filter: blur(40px) saturate(180%); -webkit-backdrop-filter: blur(40px) saturate(180%); border: 1px solid var(--glass-border); border-radius: 24px; box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6); display: none; opacity: 0; transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1); overflow: hidden; z-index: 9999998; }

            #ios-menu.open { display: flex; opacity: 1; transform: translate(-50%, -50%) scale(1); pointer-events: auto; }
            #ios-menu:not(.open) { pointer-events: none; }

            .sidebar { width: 240px; background: rgba(0,0,0,0.2); border-right: 1px solid var(--glass-border); padding: 30px 15px; display: flex; flex-direction: column; position: relative; }
            .logo { font-size: 26px; font-weight: 800; color: white; margin-bottom: 40px; padding-left: 15px; letter-spacing: -0.5px; }
            .logo span { color: #0A84FF; }
            .nav-glider { position: absolute; left: 15px; width: calc(100% - 30px); height: 44px; background: rgba(255, 255, 255, 0.12); border-radius: 12px; transition: top 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); z-index: 0; pointer-events: none; }
            .nav-item { position: relative; z-index: 1; padding: 12px 18px; margin-bottom: 4px; border-radius: 12px; color: var(--text-sec); font-weight: 600; font-size: 15px; cursor: pointer; transition: color 0.3s; height: 44px; display: flex; align-items: center; }
            .nav-item:hover, .nav-item.active { color: white; }
            .content { flex: 1; padding: 30px 40px; overflow-y: auto; }
            .content::-webkit-scrollbar { display: none; }
            .tab-page { display: none; animation: fadeSlide 0.4s ease; }
            .tab-page.active { display: block; }
            @keyframes fadeSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .header { font-size: 32px; font-weight: 700; color: white; margin-bottom: 25px; }
            .card { background: rgba(255, 255, 255, 0.05); border-radius: 16px; overflow: hidden; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); }
            .row { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; background: rgba(0,0,0,0.1); border-bottom: 1px solid rgba(255,255,255,0.05); }
            .row:last-child { border-bottom: none; }
            .label { font-size: 16px; font-weight: 500; color: white; }
            .ios-switch { width: 50px; height: 30px; background: rgba(120,120,128,0.4); border-radius: 15px; position: relative; cursor: pointer; transition: 0.3s; }
            .ios-switch::after { content: ''; position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; background: white; border-radius: 50%; transition: 0.3s; }
            .ios-switch.active { background: var(--ios-green); }
            .ios-switch.active::after { transform: translateX(20px); }
            .key-btn { background: rgba(0,0,0,0.4); padding: 6px 12px; border-radius: 8px; color: white; font-family: 'Menlo', monospace; font-size: 13px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; min-width: 80px; text-align: center; }
            .key-btn.recording { background: #FF453A; border-color: #FF453A; }
            input[type=range] { -webkit-appearance: none; width: 160px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; }
            input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; background: white; border-radius: 50%; cursor: pointer; }
            input[type=color] { -webkit-appearance: none; border: none; width: 32px; height: 32px; border-radius: 50%; background: none; cursor: pointer; }
            input[type=color]::-webkit-color-swatch { border: 2px solid rgba(255,255,255,0.2); border-radius: 50%; }
            select { background: rgba(0,0,0,0.3); color: white; border: none; padding: 6px 12px; border-radius: 8px; font-size: 14px; cursor: pointer; }
        `;
        const s = document.createElement('style'); s.innerHTML = css; document.head.appendChild(s);

        const gui = document.createElement('div'); gui.id = 'ios-gui';

        const toggleBtn = document.createElement('div'); toggleBtn.id = 'ios-toggle';
        toggleBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
        gui.appendChild(toggleBtn);

        const menu = document.createElement('div'); menu.id = 'ios-menu';
        menu.innerHTML = `
            <div class="sidebar">
                <div class="logo">Udink<span> Mod</span></div>
                <div class="nav-glider" id="nav-glider"></div>
                <div class="nav-item active" data-target="combat">⚔️ Combat</div>
                <div class="nav-item" data-target="visuals">👁️ Visuals</div>
                <div class="nav-item" data-target="misc">🔧 Misc</div>
                <div class="nav-item" data-target="colors">🎨 Colors</div>
                <div class="nav-item" data-target="binds">⌨️ Keybinds</div>
                <div class="nav-item" data-target="info">ℹ️ Info</div>
            </div>
            <div class="content">
                <div id="tab-combat" class="tab-page active">
                    <div class="header">⚔️ Combat</div>
                    <div class="card">
                        <div class="row"><span class="label">Aimbot</span><div class="ios-switch" id="chk-aimbot"></div></div>
                        <div class="row"><span class="label">Prediction Aim</span><div class="ios-switch" id="chk-predictionAim"></div></div>
                        <div class="row"><span class="label">Triggerbot</span><div class="ios-switch" id="chk-triggerbot"></div></div>
                        <div class="row"><span class="label">Auto Fire</span><div class="ios-switch" id="chk-autoFire"></div></div>
                        <div class="row"><span class="label">Priority</span><select id="sel-priority"><option value="smart">Smart</option><option value="player">Player</option><option value="distance">Distance</option></select></div>
                        <div class="row"><span class="label">FOV Radius</span><input type="range" id="rng-fov" min="100" max="2000"></div>
                    </div>
                </div>
                <div id="tab-visuals" class="tab-page">
                    <div class="header">👁️ Visuals</div>
                    <div class="card">
                        <div class="row"><span class="label">ESP Boxes</span><div class="ios-switch" id="chk-esp"></div></div>
                        <div class="row"><span class="label">Trace Lines</span><div class="ios-switch" id="chk-espLines"></div></div>
                        <div class="row"><span class="label">Aim Tracer</span><div class="ios-switch" id="chk-aimTracer"></div></div>
                        <div class="row"><span class="label">FOV Circle</span><div class="ios-switch" id="chk-showFov"></div></div>
                        <div class="row"><span class="label">FPS Counter</span><div class="ios-switch" id="chk-showFps"></div></div>
                        <div class="row"><span class="label">Coordinates</span><div class="ios-switch" id="chk-showCoords"></div></div>
                        <div class="row"><span class="label">Custom Crosshair</span><div class="ios-switch" id="chk-customCrosshair"></div></div>
                        <div class="row"><span class="label">Line Width</span><input type="range" id="rng-lineWidth" min="1" max="6"></div>
                    </div>
                </div>
                <div id="tab-misc" class="tab-page">
                    <div class="header">🔧 Misc</div>
                    <div class="card">
                        <div class="row"><span class="label">Auto Spin</span><div class="ios-switch" id="chk-autoSpin"></div></div>
                        <div class="row"><span class="label">Spin Speed</span><input type="range" id="rng-spinSpeed" min="1" max="20"></div>
                        <div class="row"><span class="label">Auto Respawn</span><div class="ios-switch" id="chk-autoRespawn"></div></div>
                        <div class="row"><span class="label">Zoom Hack</span><div class="ios-switch" id="chk-zoomHack"></div></div>
                        <div class="row"><span class="label">Zoom Level</span><input type="range" id="rng-zoomLevel" min="0.1" max="1" step="0.1"></div>
                    </div>
                </div>
                <div id="tab-colors" class="tab-page">
                    <div class="header">🎨 Colors</div>
                    <div class="card">
                        <div class="row"><span class="label">Enemy</span><input type="color" id="col-cEnemy"></div>
                        <div class="row"><span class="label">Farm</span><input type="color" id="col-cFarm"></div>
                        <div class="row"><span class="label">Pentagon</span><input type="color" id="col-cPenta"></div>
                        <div class="row"><span class="label">Tracer</span><input type="color" id="col-cTrace"></div>
                        <div class="row"><span class="label">Crosshair</span><input type="color" id="col-crosshairColor"></div>
                    </div>
                </div>
                <div id="tab-binds" class="tab-page">
                    <div class="header">⌨️ Keybinds</div>
                    <div class="card">
                        <div class="row"><span class="label">Toggle Menu</span><div class="key-btn" id="bind-toggleMenu"></div></div>
                        <div class="row"><span class="label">Toggle Aimbot</span><div class="key-btn" id="bind-toggleAimbot"></div></div>
                        <div class="row"><span class="label">Toggle ESP</span><div class="key-btn" id="bind-toggleEsp"></div></div>
                        <div class="row"><span class="label">Toggle Auto Fire</span><div class="key-btn" id="bind-toggleAutoFire"></div></div>
                        <div class="row"><span class="label">Toggle Auto Spin</span><div class="key-btn" id="bind-toggleAutoSpin"></div></div>
                        <div class="row"><span class="label">Toggle Zoom</span><div class="key-btn" id="bind-toggleZoom"></div></div>
                    </div>
                </div>
                <div id="tab-info" class="tab-page">
                    <div class="header">ℹ️ Info</div>
                    <div class="card">
                        <div class="row"><span class="label">Mod Name</span><span style="color:#0A84FF">Udink Mod</span></div>
                        <div class="row"><span class="label">Version</span><span style="color:#30D158">3.0.0</span></div>
                        <div class="row"><span class="label">Developer</span><span style="color:#FF9500">Udink</span></div>
                        <div class="row"><span class="label">Status</span><span style="color:#30D158">✓ Active</span></div>
                    </div>
                    <div class="card">
                        <div class="row" style="flex-direction:column;align-items:flex-start;">
                            <span class="label" style="margin-bottom:10px;">© 2024 Udink. All Rights Reserved.</span>
                            <span style="color:var(--text-sec);font-size:12px;">Premium Diep.io Mod - For personal use only</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gui.appendChild(menu);
        document.body.appendChild(gui);

        let isOpen = false;
        const menuEl = document.getElementById('ios-menu');
        const glider = document.getElementById('nav-glider');

        function toggleMenu() {
            isOpen = !isOpen;
            if (isOpen) {
                menuEl.style.display = 'flex';
                const activeBtn = document.querySelector('.nav-item.active');
                moveGlider(activeBtn);
                setTimeout(() => menuEl.classList.add('open'), 10);
            } else {
                menuEl.classList.remove('open');
                setTimeout(() => menuEl.style.display = 'none', 400);
            }
        }
        toggleBtn.addEventListener('click', toggleMenu);

        function moveGlider(targetBtn) {
            if (!targetBtn) return;
            glider.style.top = targetBtn.offsetTop + 'px';
        }

        gui.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                gui.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
                item.classList.add('active');
                document.getElementById('tab-' + item.dataset.target).classList.add('active');
                moveGlider(item);
            });
        });
        setTimeout(() => moveGlider(gui.querySelector('.nav-item.active')), 100);

        function bindCheck(id, key) {
            const el = document.getElementById(id);
            const update = () => el.className = 'ios-switch ' + (CONFIG[key] ? 'active' : '');
            update();
            el.addEventListener('click', () => { CONFIG[key] = !CONFIG[key]; update(); });
            el.updateVisual = update;
        }
        function bindVal(id, key) {
            const el = document.getElementById(id);
            el.value = CONFIG[key];
            el.addEventListener('input', () => CONFIG[key] = el.value);
        }
        function setupKeybind(id, configKey) {
            const btn = document.getElementById(id);
            btn.innerText = CONFIG.keys[configKey].replace('Key', '');
            btn.addEventListener('click', () => {
                btn.classList.add('recording'); btn.innerText = '...';
                const handler = (e) => {
                    e.preventDefault(); e.stopPropagation();
                    CONFIG.keys[configKey] = e.code;
                    btn.innerText = e.code.replace('Key', '');
                    btn.classList.remove('recording');
                    window.removeEventListener('keydown', handler);
                };
                window.addEventListener('keydown', handler);
            });
        }

        bindCheck('chk-aimbot', 'aimbot');
        bindCheck('chk-predictionAim', 'predictionAim');
        bindCheck('chk-triggerbot', 'triggerbot');
        bindCheck('chk-autoFire', 'autoFire');
        bindCheck('chk-esp', 'esp');
        bindCheck('chk-espLines', 'espLines');
        bindCheck('chk-aimTracer', 'aimTracer');
        bindCheck('chk-showFov', 'showFov');
        bindCheck('chk-showFps', 'showFps');
        bindCheck('chk-showCoords', 'showCoords');
        bindCheck('chk-customCrosshair', 'customCrosshair');
        bindCheck('chk-autoSpin', 'autoSpin');
        bindCheck('chk-autoRespawn', 'autoRespawn');
        bindCheck('chk-zoomHack', 'zoomHack');
        
        bindVal('sel-priority', 'priority');
        bindVal('rng-fov', 'fov');
        bindVal('rng-lineWidth', 'lineWidth');
        bindVal('rng-spinSpeed', 'spinSpeed');
        bindVal('rng-zoomLevel', 'zoomLevel');
        bindVal('col-cEnemy', 'cEnemy');
        bindVal('col-cFarm', 'cFarm');
        bindVal('col-cPenta', 'cPenta');
        bindVal('col-cTrace', 'cTrace');
        bindVal('col-crosshairColor', 'crosshairColor');

        setupKeybind('bind-toggleMenu', 'toggleMenu');
        setupKeybind('bind-toggleAimbot', 'toggleAimbot');
        setupKeybind('bind-toggleEsp', 'toggleEsp');
        setupKeybind('bind-toggleAutoFire', 'toggleAutoFire');
        setupKeybind('bind-toggleAutoSpin', 'toggleAutoSpin');
        setupKeybind('bind-toggleZoom', 'toggleZoom');

        window.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            if (e.code === CONFIG.keys.toggleMenu) toggleMenu();
            if (e.code === CONFIG.keys.toggleAimbot) { CONFIG.aimbot = !CONFIG.aimbot; document.getElementById('chk-aimbot')?.updateVisual?.(); }
            if (e.code === CONFIG.keys.toggleEsp) { CONFIG.esp = !CONFIG.esp; document.getElementById('chk-esp')?.updateVisual?.(); }
            if (e.code === CONFIG.keys.toggleAutoFire) { CONFIG.autoFire = !CONFIG.autoFire; document.getElementById('chk-autoFire')?.updateVisual?.(); }
            if (e.code === CONFIG.keys.toggleAutoSpin) { CONFIG.autoSpin = !CONFIG.autoSpin; document.getElementById('chk-autoSpin')?.updateVisual?.(); }
            if (e.code === CONFIG.keys.toggleZoom) { CONFIG.zoomHack = !CONFIG.zoomHack; document.getElementById('chk-zoomHack')?.updateVisual?.(); applyZoom(); }
        });

        console.log('[Udink Mod] Setting up frame handler...');
        let frameCount = 0;
        const { player } = _window.diepAPI.apis;
        
        game.on('frame', () => {
            frameCount++;
            frameCounter++; // For FPS
            if (frameCount === 1) console.log('[Udink Mod] First frame received');
            
            if (!overlay || !overlay.ctx) return;
            
            const ctx = overlay.ctx;
            const width = overlay.canvas.width;
            const height = overlay.canvas.height;
            const cx = width / 2;
            const cy = height / 2;
            const dpr = window.devicePixelRatio || 1;

            // ==================== CUSTOM CROSSHAIR ====================
            if (CONFIG.customCrosshair) {
                const size = CONFIG.crosshairSize * dpr;
                ctx.strokeStyle = CONFIG.crosshairColor;
                ctx.lineWidth = 2 * dpr;
                // Horizontal line
                ctx.beginPath();
                ctx.moveTo(cx - size, cy);
                ctx.lineTo(cx + size, cy);
                ctx.stroke();
                // Vertical line
                ctx.beginPath();
                ctx.moveTo(cx, cy - size);
                ctx.lineTo(cx, cy + size);
                ctx.stroke();
                // Center dot
                ctx.beginPath();
                ctx.arc(cx, cy, 3 * dpr, 0, Math.PI * 2);
                ctx.fillStyle = CONFIG.crosshairColor;
                ctx.fill();
            }

            // ==================== FPS COUNTER ====================
            if (CONFIG.showFps) {
                ctx.font = `${16 * dpr}px Arial`;
                ctx.fillStyle = '#00ff00';
                ctx.fillText(`FPS: ${fps}`, 10 * dpr, 30 * dpr);
            }

            // ==================== COORDINATES ====================
            if (CONFIG.showCoords && player) {
                ctx.font = `${14 * dpr}px Arial`;
                ctx.fillStyle = '#ffffff';
                const pos = player.position || { x: 0, y: 0 };
                ctx.fillText(`X: ${Math.round(pos.x)} | Y: ${Math.round(pos.y)}`, 10 * dpr, 50 * dpr);
            }

            // FOV circle di tengah layar
            if (CONFIG.showFov && CONFIG.aimbot) {
                ctx.beginPath();
                ctx.strokeStyle = CONFIG.cFov;
                ctx.globalAlpha = 0.3;
                ctx.lineWidth = 2;
                ctx.arc(cx, cy, CONFIG.fov * scaling.scalingFactor, 0, Math.PI * 2);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            let best = null;
            let minScore = Infinity;

            const entities = entityManager.entities;
            for (let i = 0; i < entities.length; i++) {
                const e = entities[i];
                // Skip bullets (1) dan traps (3)
                if (e.type === 1 || e.type === 3) continue;
                
                const r = e.extras.radius || 0;
                if (r < 10) continue;

                // toCanvasPos sudah mengembalikan koordinat canvas
                const pos = scaling.toCanvasPos(e.position);
                const dist = Math.hypot(pos.x - cx, pos.y - cy);
                
                // Skip jika terlalu dekat (kemungkinan player sendiri)
                if (dist < 50) continue;

                // Deteksi enemy berdasarkan type dan warna
                const color = e.extras.color || '';
                const isTeamColor = ['#00b2e1', '#f14e54', '#bf7ff5', '#00e16e'].includes(color);
                const isEnemy = (e.type === 0 && isTeamColor);
                const isPentagon = (e.type === 6 || e.type === 7);
                const isSquare = (e.type === 4);
                const isTriangle = (e.type === 5);

                // Draw ESP
                if (CONFIG.esp) {
                    const drawRadius = r * scaling.scalingFactor;
                    let col = CONFIG.cFarm;
                    let lw = Number(CONFIG.lineWidth) || 2;
                    
                    if (isEnemy) { 
                        col = CONFIG.cEnemy; 
                        lw += 2; 
                    } else if (isPentagon) {
                        col = CONFIG.cPenta;
                    }

                    // Draw circle around entity
                    ctx.beginPath();
                    ctx.strokeStyle = col;
                    ctx.lineWidth = lw;
                    ctx.arc(pos.x, pos.y, Math.max(drawRadius, 10), 0, Math.PI * 2);
                    ctx.stroke();

                    // Draw lines to enemies/pentagons
                    if (CONFIG.espLines && (isEnemy || isPentagon)) {
                        ctx.beginPath();
                        ctx.moveTo(cx, cy);
                        ctx.lineTo(pos.x, pos.y);
                        ctx.strokeStyle = col;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Aimbot target selection
                const fovRadius = CONFIG.fov * scaling.scalingFactor;
                if (dist > fovRadius) continue;
                
                let score = dist;
                if (CONFIG.priority === 'player' && !isEnemy) continue;
                if (CONFIG.priority === 'smart') {
                    if (isEnemy) score -= 50000;
                    else if (isPentagon) score -= 10000;
                }
                if (score < minScore) { 
                    minScore = score; 
                    best = e; 
                }
            }

            // Log entity count setiap 60 frame (sekitar 1 detik)
            if (frameCount % 60 === 0) {
                console.log('[Udink Mod] Entities:', entities.length, 'Best target:', best ? best.type : 'none');
            }

            // Aimbot - aim at best target
            if (CONFIG.aimbot && best && !CONFIG.autoSpin) {
                let targetPos = best.position;
                
                // Prediction Aim - predict where enemy will be
                if (CONFIG.predictionAim && best.velocity) {
                    const bulletSpeed = 1000; // approximate bullet speed
                    const dist = Math.hypot(best.position.x - (player?.position?.x || 0), best.position.y - (player?.position?.y || 0));
                    const timeToHit = dist / bulletSpeed * 50; // prediction time in ms
                    targetPos = best.predictPos ? best.predictPos(timeToHit) : best.position;
                }
                
                const t = scaling.toCanvasPos(targetPos);
                // Konversi ke screen coordinates untuk mouse input
                const screenPos = scaling.canvasToScreen(t);
                const screenCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
                const angle = Math.atan2(screenPos.y - screenCenter.y, screenPos.x - screenCenter.x);
                
                // Gerakkan mouse ke arah target
                const aimX = screenCenter.x + Math.cos(angle) * 300;
                const aimY = screenCenter.y + Math.sin(angle) * 300;
                input.mouse(aimX, aimY);
                
                // Triggerbot - auto shoot when aiming at enemy
                if (CONFIG.triggerbot) {
                    const distToTarget = Math.hypot(screenPos.x - screenCenter.x, screenPos.y - screenCenter.y);
                    if (distToTarget < 100) {
                        input.mouseDown(0);
                        setTimeout(() => input.mouseUp(0), 50);
                    }
                }
                
                // Draw aim tracer
                if (CONFIG.aimTracer) {
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(t.x, t.y);
                    ctx.strokeStyle = CONFIG.cTrace;
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    
                    // Draw prediction point if enabled
                    if (CONFIG.predictionAim) {
                        ctx.beginPath();
                        ctx.arc(t.x, t.y, 8, 0, Math.PI * 2);
                        ctx.fillStyle = '#ff0000';
                        ctx.fill();
                    }
                }
            }
        });
        
        console.log('[Udink Mod] Script fully loaded! 🎮');
        console.log('╔═══════════════════════════════════════╗');
        console.log('║       UDINK MOD v3.0.0 LOADED!        ║');
        console.log('║    Press V to open the menu           ║');
        console.log('║    © 2024 Udink - All Rights Reserved ║');
        console.log('╚═══════════════════════════════════════╝');
    })();
})();