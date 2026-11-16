const fs = require('fs');
const vm = require('vm');

const cheatCode = fs.readFileSync('cheat.txt', 'utf8');

const sandbox = {
    console: console,
    setTimeout: setTimeout,
    setInterval: setInterval,
    TextEncoder: TextEncoder,
    Uint8Array: Uint8Array,
    Uint32Array: Uint32Array,
    btoa: btoa,
    unsafeWindow: {},
    GM_getValue: (k, d) => d,
    GM_setValue: (k, v) => { console.log(`[FAKE] GM_setValue: ${k} = ${v}`); },
    GM_addValueChangeListener: () => {},
    GM_xmlhttpRequest: () => {},
    GM_openInTab: () => {},
    GM_setClipboard: () => {},
    GM_getResourceURL: () => {},
    
    TextDecoder: function(...args) {
        const decoder = new TextDecoder(...args);
        const _decode = decoder.decode;
        decoder.decode = function(buffer) {
            const res = _decode.call(this, buffer);
            if (typeof res === 'string' && res.length > 1000) {
                console.log("\n=== CÓDIGO CAPTURADO VIA TEXTDECODER ===");
                fs.writeFileSync('cracky_limpo.js', res, 'utf8');
                console.log("Salvo em cracky_limpo.js!");
            }
            return res;
        };
        return decoder;
    },
    
    atob: function(str) {
        const res = Buffer.from(str, 'base64').toString('binary');
        if (res.length > 1000) {
            console.log("\n=== CÓDIGO CAPTURADO VIA ATOB ===");
            fs.writeFileSync('dump_atob.txt', res, 'utf8');
            console.log("Salvo em dump_atob.txt!");
        }
        return res;
    },

    window: {},
    document: { 
        createElement: () => ({ style: {}, setAttribute: () => {} }), 
        addEventListener: () => {},
        documentElement: { append: () => {} },
        head: { appendChild: () => {} }
    },
    location: { href: "https://krunker.io/", hostname: "krunker.io", host: "krunker.io", reload: () => {} },
    navigator: { userAgent: "Mozilla/5.0", platform: "Win32" },
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    fetch: () => Promise.resolve({ text: () => Promise.resolve(""), json: () => Promise.resolve({}) }),
    XMLHttpRequest: function() { this.open = () => {}; this.send = () => {}; this.setRequestHeader = () => {}; },
    WebSocket: function() { this.send = () => {}; this.close = () => {}; },
    CanvasRenderingContext2D: function() {},
    HTMLCanvasElement: function() { return { getContext: () => new CanvasRenderingContext2D() }; },
    WebGLRenderingContext: function() {},
    Image: function() {},
    Audio: function() {},
    AudioContext: function() {},
    Event: function() {},
    MouseEvent: function() {},
    KeyboardEvent: function() {},
    requestAnimationFrame: () => {},
    performance: { now: () => Date.now() },
    Math: Math,
    Date: Date,
    JSON: JSON
};

vm.createContext(sandbox);

try {
    vm.runInContext(cheatCode, sandbox);
    console.log("\n[+] SCRIPT EXECUTADO.");
} catch (e) {
    console.log("\n[-] ERRO:", e.message);
}