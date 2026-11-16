// ==UserScript==
// @name         Cracky.io Nokey
// @namespace    local.crackyio
// @version      1.0.0
// @description  GGs ez keyauth removal
// @match        https://krunker.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

console.log("🔥 [CRACKY] Script começou a carregar!");
const exportFunction = (fn) => fn;
const cloneInto = (obj) => obj;

const CrackyAccess = {
    boot: function(initFn, icon) {
        if (typeof initFn === "function") {
            initFn(); 
        }
    },
    isUnlocked: () => true,
    parseFeed: () => [],
    cycleAt: () => 0,
    keyValid: () => true,
    slotAt: () => 0,
    presenceStep: () => 0,
    redeem: () => true,
    validCache: () => true
};
(function (_0x343c53, _0x5715db) {
  if (window["top"] !== window["self"]) return;
  let _0x190fc1 = ![];
  const _0x46cf91 = (() => {
    const _0xcd80ef = (_0x3b1aeb) =>
        _0x3b1aeb === "krunker.io" ||
        _0x3b1aeb === "browserfps.com" ||
        _0x3b1aeb["endsWith"](".browserfps.com"),
      _0x56e2b3 = () => {
        throw new Error("API\x20unavailable");
      },
      _0x29f410 = (_0x300283, _0x566855 = 0xfa0) =>
        new Promise((_0x8a9b75, _0x42dcbe) => {
          const _0x389b6b = setTimeout(
            () =>
              _0x42dcbe(
                new Error(
                  "Timed\x20out;\x20close\x20other\x20game\x20tabs\x20and\x20retry",
                ),
              ),
            _0x566855,
          );
          Promise["resolve"]()
            ["then"](_0x300283)
            ["then"](
              (_0x5ecbdd) => {
                (clearTimeout(_0x389b6b), _0x8a9b75(_0x5ecbdd));
              },
              (_0x32b059) => {
                (clearTimeout(_0x389b6b), _0x42dcbe(_0x32b059));
              },
            );
        }),
      _0x21f850 = (_0x3059c5) => {
        const _0x4c18a1 = _0x3059c5["length"];
        _0x3059c5["clear"]();
        if (_0x3059c5["length"] !== 0x0)
          throw new Error(
            "Storage\x20was\x20repopulated\x20or\x20could\x20not\x20be\x20cleared",
          );
        return _0x4c18a1;
      },
      _0x3a0fef = () => {
        const _0x461e78 = new Set(
            document["cookie"]
              ["split"](";")
              ["map"]((_0x53f04a) => _0x53f04a["trim"]()["split"]("=")[0x0])
              ["filter"](Boolean),
          ),
          _0x773bec = window["location"]["hostname"],
          _0x5dde37 = new Set(["", _0x773bec]),
          _0x1c395c = _0x773bec["split"](".");
        while (_0x1c395c["length"] > 0x2) {
          (_0x1c395c["shift"](), _0x5dde37["add"](_0x1c395c["join"](".")));
        }
        const _0x582e67 = new Set(["/"]),
          _0x49e020 = window["location"]["pathname"];
        _0x582e67["add"](_0x49e020);
        for (let _0x23dd0b = 0x1; _0x23dd0b < _0x49e020["length"]; _0x23dd0b++)
          _0x49e020[_0x23dd0b] === "/" &&
            (_0x582e67["add"](_0x49e020["slice"](0x0, _0x23dd0b)),
            _0x582e67["add"](_0x49e020["slice"](0x0, _0x23dd0b + 0x1)));
        for (const _0x2c3900 of _0x461e78)
          for (const _0x435202 of _0x582e67)
            for (const _0x3735d0 of _0x5dde37) {
              if (/[;\r\n]/["test"](_0x2c3900 + _0x435202 + _0x3735d0))
                continue;
              document["cookie"] =
                _0x2c3900 +
                "=;\x20Max-Age=0;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=" +
                _0x435202 +
                ";" +
                (_0x3735d0 ? "\x20domain=" + _0x3735d0 + ";" : "") +
                (window["location"]["protocol"] === "https:"
                  ? "\x20Secure;"
                  : "");
            }
        if (document["cookie"]["trim"]())
          throw new Error("Some\x20visible\x20cookies\x20remain");
        return _0x461e78["size"];
      },
      _0x3d0b66 = (_0x18df03, _0x22cb17) =>
        new Promise((_0x554886, _0x46fbad) => {
          const _0x5321ea = _0x18df03["deleteDatabase"](_0x22cb17);
          ((_0x5321ea["onsuccess"] = () => _0x554886()),
            (_0x5321ea["onerror"] = () =>
              _0x46fbad(new Error("Database\x20deletion\x20failed"))),
            (_0x5321ea["onblocked"] = () => {}));
        });
    async function _0x290f27(_0x54d208 = () => {}) {
      if (
        !_0xcd80ef(window["location"]?.["hostname"] || "") ||
        !/^https?:$/["test"](window["location"]["protocol"])
      )
        throw new Error(
          "Reset\x20is\x20restricted\x20to\x20the\x20current\x20game\x20origin",
        );
      _0x190fc1 = !![];
      const _0x228084 = async (_0x1e148f, _0x4e658f, _0x5993fc = !![]) => {
          let _0x4423b2;
          try {
            _0x4423b2 = {
              label: _0x1e148f,
              status: "cleared",
              count: await _0x29f410(_0x4e658f),
            };
          } catch (_0x3fcfad) {
            const _0x15bc3b = [
                "API\x20unavailable",
                "Timed\x20out;\x20close\x20other\x20game\x20tabs\x20and\x20retry",
                "Storage\x20was\x20repopulated\x20or\x20could\x20not\x20be\x20cleared",
                "Some\x20visible\x20cookies\x20remain",
                "Database\x20deletion\x20failed",
                "Database\x20remains;\x20close\x20other\x20game\x20tabs\x20and\x20retry",
                "Cache\x20remains",
                "Service\x20worker\x20remains",
              ],
              _0x3dff77 = _0x15bc3b["includes"](_0x3fcfad?.["message"])
                ? _0x3fcfad["message"]
                : "Browser\x20denied\x20cleanup\x20(" +
                  (_0x3fcfad?.["name"] || "Error") +
                  ")";
            _0x4423b2 = {
              label: _0x1e148f,
              status:
                _0x3dff77 === "API\x20unavailable"
                  ? "unavailable"
                  : "incomplete",
              detail: _0x3dff77,
            };
          }
          if (_0x5993fc) _0x54d208(_0x4423b2);
          return _0x4423b2;
        },
        _0x5e09c7 = await Promise["all"]([
          _0x228084("Local\x20storage", () =>
            _0x21f850(window["localStorage"]),
          ),
          _0x228084("Session\x20storage", () =>
            _0x21f850(window["sessionStorage"]),
          ),
          _0x228084("Visible\x20cookies", _0x3a0fef),
          _0x228084("Service\x20workers", async () => {
            const _0x251c96 = window["navigator"]?.["serviceWorker"];
            if (!_0x251c96?.["getRegistrations"]) _0x56e2b3();
            const _0x59e16f = await _0x251c96["getRegistrations"]();
            for (const _0x563319 of _0x59e16f) await _0x563319["unregister"]();
            if ((await _0x251c96["getRegistrations"]())["length"])
              throw new Error("Service\x20worker\x20remains");
            return _0x59e16f["length"];
          }),
          _0x228084("Cache\x20Storage", async () => {
            const _0x41955d = window["caches"];
            if (!_0x41955d?.["keys"]) _0x56e2b3();
            const _0x3c0922 = await _0x41955d["keys"]();
            for (const _0x42959c of _0x3c0922)
              await _0x41955d["delete"](_0x42959c);
            if ((await _0x41955d["keys"]())["length"])
              throw new Error("Cache\x20remains");
            return _0x3c0922["length"];
          }),
          _0x228084("IndexedDB", async () => {
            const _0x14c122 = window["indexedDB"];
            if (!_0x14c122?.["databases"]) _0x56e2b3();
            const _0x27652d = await _0x14c122["databases"]();
            for (const _0x2fcb1f of _0x27652d)
              if (typeof _0x2fcb1f["name"] === "string")
                await _0x3d0b66(_0x14c122, _0x2fcb1f["name"]);
            if ((await _0x14c122["databases"]())["length"])
              throw new Error(
                "Database\x20remains;\x20close\x20other\x20game\x20tabs\x20and\x20retry",
              );
            return _0x27652d["length"];
          }),
          _0x228084("Origin-private\x20files", async () => {
            const _0x46912d = window["navigator"]?.["storage"];
            if (!_0x46912d?.["getDirectory"]) _0x56e2b3();
            const _0x2c3489 = await _0x46912d["getDirectory"](),
              _0x453d6f = [];
            for await (const _0xac7bca of _0x2c3489["keys"]())
              _0x453d6f["push"](_0xac7bca);
            for (const _0x593891 of _0x453d6f)
              await _0x2c3489["removeEntry"](_0x593891, { recursive: !![] });
            for await (const _0xc48790 of _0x2c3489["keys"]())
              throw new Error("Origin-private\x20files\x20remain");
            return _0x453d6f["length"];
          }),
        ]);
      for (const [_0x12b63c, _0x349fe4] of [
        ["Local\x20storage", () => _0x21f850(window["localStorage"])],
        ["Session\x20storage", () => _0x21f850(window["sessionStorage"])],
        ["Visible\x20cookies", _0x3a0fef],
      ]) {
        const _0xdf0d1e = await _0x228084(_0x12b63c, _0x349fe4, ![]),
          _0x3855b1 = _0x5e09c7["findIndex"](
            (_0x18e9ad) => _0x18e9ad["label"] === _0x12b63c,
          );
        if (
          _0xdf0d1e["status"] !== "cleared" ||
          _0x5e09c7[_0x3855b1]["status"] !== "cleared"
        )
          _0x5e09c7[_0x3855b1] = _0xdf0d1e;
        else _0x5e09c7[_0x3855b1]["count"] += _0xdf0d1e["count"];
        _0x54d208(_0x5e09c7[_0x3855b1]);
      }
      return _0x5e09c7;
    }
    function _0x2fa818() {
      if (
        !_0xcd80ef(window["location"]?.["hostname"] || "") ||
        !document["createElement"] ||
        typeof MutationObserver !== "function"
      )
        return;
      let _0x3dabe1 = null,
        _0x32f896 = null,
        _0x4acae1 = ![],
        _0x51c1ef = null;
      const _0x5ed40b = (_0x3c9318, _0x16bc39) => {
          const _0x76dcb4 = document["createElement"](_0x3c9318);
          if (_0x16bc39) _0x76dcb4["textContent"] = _0x16bc39;
          return _0x76dcb4;
        },
        _0x5ec4c9 = (_0x5c412b, _0x50aaa1) => {
          const _0x36a416 = _0x5ed40b("button", _0x5c412b);
          return (
            (_0x36a416["type"] = "button"),
            _0x36a416["addEventListener"]("click", _0x50aaa1),
            _0x36a416
          );
        },
        _0x51efab = (_0x583d47) => {
          for (
            let _0xafe46c = _0x583d47;
            _0xafe46c;
            _0xafe46c = _0xafe46c["parentElement"]
          ) {
            const _0x5ebf40 = window["getComputedStyle"](_0xafe46c);
            if (
              _0xafe46c["hidden"] ||
              _0x5ebf40["display"] === "none" ||
              _0x5ebf40["visibility"] === "hidden"
            )
              return ![];
          }
          return !![];
        },
        _0x2fc660 = () => {
          if (_0x4acae1) return;
          (_0x32f896?.["close"](),
            _0x32f896?.["remove"](),
            (_0x32f896 = null),
            _0x3dabe1?.["querySelector"]("button")?.["focus"]());
        };
      function _0x1c0743() {
        if (_0x32f896?.["isConnected"]) return;
        ((_0x32f896 = _0x5ed40b("dialog")),
          (_0x32f896["id"] = "cracky-local-reset-dialog"),
          _0x32f896["setAttribute"](
            "aria-labelledby",
            "cracky-local-reset-title",
          ),
          _0x32f896["setAttribute"](
            "aria-describedby",
            "cracky-local-reset-description",
          ));
        const _0x9cd2a3 = _0x5ed40b("h2", "Reset\x20local\x20game\x20data?");
        _0x9cd2a3["id"] = "cracky-local-reset-title";
        const _0x1db9d1 = _0x5ed40b(
          "p",
          "Delete\x20accessible\x20data\x20on\x20" +
            window["location"]["origin"] +
            ":\x20saved\x20game/script\x20settings,\x20local\x20logins,\x20cookies,\x20databases,\x20caches\x20and\x20origin-private\x20files.\x20This\x20cannot\x20be\x20undone\x20and\x20may\x20log\x20you\x20out.\x20Close\x20other\x20game\x20tabs\x20first.",
        );
        _0x1db9d1["id"] = "cracky-local-reset-description";
        const _0xbd7676 = _0x5ed40b(
            "p",
            "This\x20does\x20not\x20lift\x20a\x20ban\x20or\x20make\x20a\x20session\x20untraceable.\x20HttpOnly/path-inaccessible\x20cookies,\x20other\x20origins,\x20browser\x20HTTP\x20cache/history,\x20server\x20records\x20and\x20identifiers\x20are\x20outside\x20this\x20script’s\x20reach.\x20Tampermonkey\x20installation\x20and\x20USER\x20task/key\x20history\x20are\x20preserved.",
          ),
          _0x276a88 = _0x5ed40b("ul");
        ((_0x276a88["id"] = "cracky-local-reset-report"),
          _0x276a88["setAttribute"]("aria-live", "polite"));
        const _0x48f88f = _0x5ed40b(
          "p",
          "Nothing\x20has\x20been\x20deleted\x20yet.",
        );
        ((_0x48f88f["id"] = "cracky-local-reset-status"),
          _0x48f88f["setAttribute"]("role", "status"));
        const _0x489f06 = _0x5ed40b("div");
        _0x489f06["className"] = "cracky-reset-actions";
        const _0x286c5f = _0x5ec4c9("Cancel", _0x2fc660),
          _0x4c0129 = _0x5ec4c9("Reload\x20game", () =>
            window["location"]["reload"](),
          );
        _0x4c0129["hidden"] = !![];
        const _0x43068a = _0x5ec4c9("Delete\x20local\x20data", async () => {
          if (_0x4acae1) return;
          ((_0x4acae1 = !![]),
            (_0x43068a["disabled"] = !![]),
            (_0x286c5f["disabled"] = !![]),
            (_0x48f88f["textContent"] =
              "Clearing\x20accessible\x20local\x20data…"),
            _0x276a88["replaceChildren"]());
          const _0x28eac3 = new Map();
          try {
            const _0x18512a = await _0x290f27((_0x321e1e) => {
              let _0x54a2f4 = _0x28eac3["get"](_0x321e1e["label"]);
              (!_0x54a2f4 &&
                ((_0x54a2f4 = _0x5ed40b("li")),
                _0x28eac3["set"](_0x321e1e["label"], _0x54a2f4),
                _0x276a88["append"](_0x54a2f4)),
                (_0x54a2f4["textContent"] =
                  _0x321e1e["label"] +
                  ":\x20" +
                  (_0x321e1e["status"] === "cleared"
                    ? "cleared\x20(" + _0x321e1e["count"] + ")"
                    : _0x321e1e["detail"])));
            });
            _0x48f88f["textContent"] = _0x18512a["some"](
              (_0xd45982) => _0xd45982["status"] !== "cleared",
            )
              ? "Cleanup\x20is\x20partial.\x20Review\x20the\x20report;\x20use\x20browser\x20site-data\x20settings\x20for\x20data\x20this\x20script\x20cannot\x20clear."
              : "Accessible\x20local\x20data\x20cleared.\x20The\x20limitations\x20above\x20still\x20apply.\x20Reload\x20to\x20start\x20a\x20new\x20page\x20session.";
          } catch {
            _0x48f88f["textContent"] =
              "Cleanup\x20could\x20not\x20complete.\x20No\x20complete-reset\x20guarantee\x20is\x20possible.";
          } finally {
            ((_0x4acae1 = ![]),
              (_0x43068a["hidden"] = !![]),
              (_0x286c5f["disabled"] = ![]),
              (_0x286c5f["textContent"] = "Close"),
              (_0x4c0129["hidden"] = ![]),
              _0x4c0129["focus"]());
          }
        });
        (_0x489f06["append"](_0x286c5f, _0x43068a, _0x4c0129),
          _0x32f896["append"](
            _0x9cd2a3,
            _0x1db9d1,
            _0xbd7676,
            _0x276a88,
            _0x48f88f,
            _0x489f06,
          ),
          document["body"]["append"](_0x32f896),
          _0x32f896["addEventListener"]("cancel", (_0x36417a) => {
            (_0x36417a["preventDefault"](), _0x2fc660());
          }),
          _0x32f896["showModal"](),
          _0x286c5f["focus"]());
      }
      function _0x4bc048() {
        _0x51c1ef = null;
        if (!document["body"]) return;
        let _0x5a5097 = ![];
        for (const _0x22d595 of ["#instructionsUpdate", "#instructions"]) {
          const _0x14a8eb = document["querySelector"](_0x22d595);
          if (
            _0x14a8eb &&
            _0x51efab(_0x14a8eb) &&
            /\bbanned\b/i["test"](_0x14a8eb["textContent"])
          ) {
            _0x5a5097 = !![];
            break;
          }
        }
        if (!_0x5a5097) {
          (_0x3dabe1?.["remove"](), (_0x3dabe1 = null));
          return;
        }
        !_0x3dabe1 &&
          ((_0x3dabe1 = _0x5ed40b("div")),
          (_0x3dabe1["id"] = "cracky-local-reset"),
          _0x3dabe1["append"](
            _0x5ec4c9("Reset\x20local\x20game\x20data", (_0x5278ae) => {
              (_0x5278ae["preventDefault"](),
                _0x5278ae["stopPropagation"](),
                _0x1c0743());
            }),
          ));
        const _0x3a00b8 = document["querySelector"]("#cracky-access"),
          _0x58b858 =
            _0x3a00b8 && _0x51efab(_0x3a00b8)
              ? _0x3a00b8
              : document["documentElement"];
        if (_0x58b858["lastElementChild"] !== _0x3dabe1)
          _0x58b858["append"](_0x3dabe1);
      }
      const _0x2a4420 = _0x5ed40b("style");
      ((_0x2a4420["id"] = "cracky-local-reset-style"),
        (_0x2a4420["textContent"] =
          "#cracky-local-reset{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:2147483647;pointer-events:auto}\x0a#cracky-local-reset\x20button,#cracky-local-reset-dialog\x20button{font:600\x2013px\x20\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-transform:none;padding:10px\x2014px;border:1px\x20solid\x20var(--cracky-primary,#ffb7d5);border-radius:8px;background:#182135;color:#f2f5ff;cursor:pointer}\x0a#cracky-local-reset\x20button:focus-visible,#cracky-local-reset-dialog\x20button:focus-visible{outline:2px\x20solid\x20var(--cracky-secondary,#a9dcff);outline-offset:3px}\x0a#cracky-local-reset-dialog{box-sizing:border-box;width:min(520px,calc(100vw\x20-\x2032px));max-height:calc(100vh\x20-\x2032px);overflow:auto;border:1px\x20solid\x20var(--cracky-secondary,#a9dcff);border-radius:14px;background:#171d2e;color:#eef3ff;padding:22px;box-shadow:0\x2012px\x2060px\x20#0009;text-align:left}\x0a#cracky-local-reset-dialog::backdrop{background:#050913b8}#cracky-local-reset-dialog\x20*{font-family:\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none!important;letter-spacing:normal;text-transform:none;box-sizing:border-box}\x0a#cracky-local-reset-dialog\x20h2{font-size:22px!important;margin:0\x200\x2012px}#cracky-local-reset-dialog\x20p,#cracky-local-reset-dialog\x20li{font-size:13px!important;line-height:1.55}#cracky-local-reset-dialog\x20p{margin:0\x200\x2014px;color:#c9d3e5}#cracky-local-reset-dialog\x20ul{padding-left:18px}#cracky-local-reset-dialog\x20[hidden]{display:none!important}#cracky-local-reset-dialog\x20button:disabled{opacity:.5;cursor:wait}.cracky-reset-actions{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}"));
      const _0x3824a6 = () => {
        if (!document["documentElement"]) return;
        document["documentElement"]["append"](_0x2a4420);
        const _0x346dbc = new MutationObserver(() => {
          if (!_0x51c1ef) _0x51c1ef = setTimeout(_0x4bc048, 0x64);
        });
        (_0x346dbc["observe"](document["documentElement"], {
          subtree: !![],
          childList: !![],
          characterData: !![],
          attributes: !![],
          attributeFilter: ["style", "class", "hidden"],
        }),
          _0x4bc048());
      };
      window["addEventListener"](
        "keydown",
        (_0x21cd32) => {
          if (
            !_0x32f896?.["open"] ||
            !["Escape", "F1", "ShiftRight", "Insert"]["includes"](
              _0x21cd32["code"],
            )
          )
            return;
          (_0x21cd32["preventDefault"](),
            _0x21cd32["stopImmediatePropagation"]());
          if (_0x21cd32["code"] === "Escape") _0x2fc660();
        },
        !![],
      );
      if (document["documentElement"]) _0x3824a6();
      else
        document["addEventListener"]("DOMContentLoaded", _0x3824a6, {
          once: !![],
        });
    }
    return { boot: _0x2fa818, clear: _0x290f27 };
  })();
  _0x46cf91["boot"]();
  let _0x41c950 = null;
  for (const _0x36fc12 of [
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointercancel",
  ])
    window["addEventListener"]?.(
      _0x36fc12,
      (_0x2f5537) => _0x41c950?.["panelPointerRouter"]?.(_0x2f5537),
      !![],
    );
  window["addEventListener"]?.(
    "keydown",
    (_0x18ba62) => _0x41c950?.["handleMenuKey"]?.(_0x18ba62),
    !![],
  );
  const _0x23ba9d = "10.0.7",
    _0x1be0cd = "10.0.7.1",
    _0x5c88cc =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8IAEQgCWAImAwEiAAIRAQMRAf/EABsAAQACAwEBAAAAAAAAAAAAAAAFBgIDBAEH/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAH6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhhStJyPisulk5Gt4n0HOiXXlNwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAB57gVeH2Y99c8PzxvLM1MU2SLNMRPvXV/917OGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAGndpKH708vfVTi7XC8Mx0nh3JY8c8PRu+7oWa8+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvZiQdZt1R63Op2Os5nPvjtnOWSZp8x11LW6p46v0NFynHIAAAAAAAAAAAAAAAAAAAAAAAAAAADz3Ega5LRXaxkDJRHKcgy29sbtLPLVCc62RuNQav0FHyHHIAAAAAAAAAAAAAAAAAAAAAAAAAADXs0FM0Ya++q3Hdsd58YhQN3bGby199SsPW911pHRV6a9nKGIyeegAAAAAAAAAAAAAAAAAAAAAAACKlK7Ve4JCF62Kjuzj4QAADp7IrustfRDzXbWWv1br8z8PM/Mjb1cAnJGo45n0LL57L5WtWeGS6KN5belH2F0VHfJZ0BviYR2+OppjiQh6262d6qwL9t+fW/EkhkAAAAAAAAABjUrXStXmrNlqWnJz7NfKAAHvQc0h7knZlG6tO/VxYx3ODyJD2OyJTfDZ1YO6q7dW3+VeV3ZP3mgas6r5xZVczJ9CZ1LovYd/nLnW/3DYuXB7W8yX7qn0Ylwy5N/XV/wBsLNcMgAAAAAAAAAaqHeqB0umt2KuyRjo5+YZGPTuzRjz850acSgAAAAPfB0dMdmkjp28NZe86On3lHXlxDuyjxJexgk0bkSHN7vI3rz6CYkteXo1Y7DDzHGeiAAAAAAAAANFDvsHpX+Dv966qXJba9xzG93ujMy48Sj08WCWdqSvPEtTdvE4ggAADq5ewz4N2lAUAAAB751G+X4LR0cnTlh01l0+2XM6unXt5QAAAAAAAAADHm6+crsPl531hWOuL5Zw4/fMAMr5AXR7DHKewDynXLxz+WuvkvywAAAAAAAAAM5DVK1JdnvnfXZM9HZyzo6c9mXnoAAAAAAAAAAeV2wUXTTzdde6Xhj+nj4ZBQLT0QFueykfSoGenQRjvJufoKXATEPfmA5gAAAAAAAOjTIGyz8Ml2uM9F22Nu/zLnAAAAAAAAAAAB4R9LsVf63GqztezOPW2c2vOTtqfP8L1TDRY64b+o4xG6fSlcYIkhz1iLvmeDygAAAAAAADcb5Hls+2/BMddScpr6OGfQAAAAAAAAAAAMcsCqRfbx9tQkJKxPLGmz673Et1VS1r588+ieHwPTeqXGnZrHdzebV5vZSws07b9Lmq+Lafq1Jivt2lQAAADPI1PfD2R1SFd8qx76327iluWc8zIAAAAAAAAAAABr2aymcvZx9tVzgkOXlj6XGXH5fLCXyhE+4KFfVx+bfSx8LmvrGUlGn5pbjkADDMUqg/c4dPivkzDy+AAA6eqM9SSx4us3WaLm+usZXhtpt6cc+cAAAAAAAAAAAAAa9mBUo2dge2oPLdr55+t/HPsdAzKcSJM/RuLBZBAzwAAAAAa9hFfJPuFSPlLfogAAB3cMik3K8Xb31M2OvWTnMxkAAAAAAAAAAAAAxy8IqoXul9LxVy21Y+w9NJu3OcnV6Hzb6TFrVpTltLXUGAGnd4Qs382my3a67UCQ+i0m1HZ56PjMF9D+fRiAADZ388pZYMsvPRuVtVLufGZjMAAAAAAAAAAAAAA1VyzcVUuPk8e2qv9b+WbeGPrrm6VQM9wnTt+d9xduGoQS/UOqHmEA8gLAK1ISoq1nyAFP+Y/SvmkmsKAzx7jOxxlh6nnrprG+UG385KjnAAAAAAAAAAAAAAGjfiQFbvNc3Yqu2L3aC+l/NeHjn7aoV0Xp+c/RuIrUH7Zp6bHsL5gAAABHFBpnZxSAr3PsTHs9sW7lsO1Ax7+LGW6d3zq288zAwAAAAAAAAAAAAAA18nfrKjG3WD6WJ4evLdrOFq4eeey1fNePE+3e/G7CfQ1Xk1lWraAADhOv5VlWE14790cnT0bK1yUj2dLjno3dL6AcJu5INylt7eLzpr6Dlp3cMgAAAAAAAAAAAAAAa+btwIaDuHPpSs7JXela8/dWCipOA4Z7Moz3Mk98RuJrdXvCze1kWKK4R1uLA7tPIN2/TtO3ZxSN17pu9Wnol8uLi7+fdA4cXKe9fF05lu6I6S9GrfKVyxcZ6IAAAAAAAAAAAAAAA8w2Dkq1vo27hr2VrbTH22L4bhttptrl8xn/pW6vjkR90oR8/d/FGO3V3DV9S4T5pjZocxnIbqtskBtn+tgeawbs3krdx59ZpGuXieLzbhsJ6drVm7WSttFvGWwYgAAAAAAAAAAAAAAAGmiXuobvHV7PwaTkDFc/Hv9Ct0XKXzwFB+nwCU6blasWmibdxHZXHnnqtsv85+jXzK1ZdJ8mt9N7Z6uWVru/fnsrz3tHPureXFH7ceGeqT0Wndgp1r63deqxZ+baMQAAAAAAAAAAAAAAADXFTGgoeVmge101ezcRK3r4jdeObyq8Gv0THT0HymF+lfPU7ML9m6RlxGAOWCs9INtF5vJJ3fW8N2RjdPuWHcna6O07a3SUl2c849mOzAAAAAAAAAAAAAAAAABjkOaPmOcomc7X+2uOHsxKjZK59K45n9zgWL+cd0on0f0UABTbkPhWr7DUkpWXZOW13un9u7xduPu7jY0tzmW9liAAAAAAAAAAAAAAAAAAAMchyRk5zlM1zUJ21ExFjr/ADz2cP0KTzKN9L3lAAAAfPfoPxs2WCNkO182yUzEJMdW7nMOhlAAAAAAAAAAAAAAAAAAAAADm3UmsNWPP21z8fNK8c/UxAAAoxc93x/7AAQ3ym8VEsPmzd31ZZDDo4Z8yAAAAAAAAAAAAAAAAAAAAAAeEJV5mI63TWZToxO+5yDIAADm+NfUfl6fSrH56oHziJlompuSjZPrbVtwz4wAAAAAAAAAAAAAAAAAAAAABhngVSLnYHtYaRxr3OfbnzyUyt6qYltVD0tyrDq+aT1bT7g+JZn2rH41rJTGMsu7tmIS1asxnjlygAAAAAAAAAAAAAAAAAAAAADz0R9NvcTpWuPtw66gtNl9zKvlZhWVm8Kx5aEV6T7WnNj1LeTLpHrHtMbhy9/HOz0gAAAAAAAAAAAAAAAAAAAAAADHR0+EXFWTTVT027DVqeVq9KvnZvUredi9iv5z3pB5TaIX2aEd19OyMNr0AAAAAAAAAAAAAAAAAAAAAAAAAeejDzYNbYMGYxZDx6PHo89AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAMBAAAgIBAwIFAwQCAgMAAAAAAQIAAwQFERIQExQgIUBQBiIwFTEyMyM0QYAkNUL/2gAIAQEAAQUC/wC1bMFFuoqIdQuMGoXCVaihisGHz1tgrTIvbIfbptNpj3tjtVYLE+d1S3lYJdatQbKsMXKsEptW0GaXbxs+cMuPK+XPzsaz1Wz1pfhZKm4XL840f+yMNmI2IG5A3P8Ax/8AS/ONMxOGQJl0EkiAATFKi7pg5PdHzbTMp7iDo55Mz7OPWYuRt0G6nCyhcvzRmYeNAmS3GmH1KNx6Yt/QEq2Hki9fmTNUbaoTPb7X9F6I3Hpi39FJRsTJF6/MGao29oma29137dUbj0xb+XRGat8XIF6fLtMtuWVLDye3+XkR9umLfz6Vu1T49wur+WsOw33a48aYfU+Wt9oPSY13cExrjRarBhNxOQm4+Sz2444mcdqm9F89bwEqce3upBbYFLMem3QM4gvuWLnXiJqUrzqXisGH57bUqD6kgn6mZXqNZldi2D2xmqN9gmcd7Lf4/gr/AI6f/LruJyWcl8m02isyGnUHWWakY2beZ4m+eJvnirxBm3iDULoNSaDUkg1CkwZlBgyKjO4kzMsVKxZ22m02lbtU2Hki9famam29wmQeV137/gT+NN3aVsqww2uZufKLHEGTYIuZEyK2/HtNptNptNuluUqHxjSrJWzpU5qtRuS+0aZh5ZROyx/5eUDeCuBQOhdRO7O4ZzacmnIzk05tO4Z3YHXoljJKssGW2hKjdYZ3rJ37Z4m2eKsnjHnjDPGieMSeKrgyKp3a4GBmW/Cpm2HdincYz9yozTX3x/aNHPK3KO1HmWubbQsBDZCSfyA7QWQEHo7cR3TO6Z3Z3Z3BO4JzWchNx5bulP7YH8DNK/qHtHgmUpamOm3VQWiqFhO0az2Kfylh3b8W5nIyssenBYiFjUnbQzBThQPaNHHCyZGOHhGxdIi8oBtGfjCd/ZUiOdl/Ko2GJSGHhqoqqgmLV3bEHtWmXj9yEFTL6RaGUoY77eQAk0aZY8XTKBDpuPLNKEvxraPx1sONjbn8lSypO44HETeU47WSmsIqj2pjCZ5UCOwRbHNj2Nt5FBY4OIuOvkIBGo4Pa9uo5GYlfbQzFp7kSlVirFHt7WCrY5ssmXbzd24jyaPXyyIGBPkI3GVV2cj2qLsMSrm8RTY9VYVQsA9xqlvoJk2duqOdz5NEPrq97VpjMy5Hl1kf+T7SpfVQWatBWhmDTxVR7ky9+7fMt+Vtp2Hl0+7sZObijKXE04Uv0zbDVHurRJqr88z2YG5HoMKrYGYtXdsQQe5zH4UCWNwrjndugUmFSOuDqHbUEFa3WxYwDBMOhGzsxaEJ3Ps612GNV3Hn7nGq7aKPcmaq32CZzbVMdliqWmPjNa2PoljTUtKOOrpt1fKq8Hpa7YWKxu1DPzjj2W5+RZ7WtdyBuaK+3WZgUxR7ozUz/mEzz99v8UXlMTD5VY1dddXTV9N7JdduquySjKtolthts6BDO1DWR7ADcgbDCqhlFfdsRdoPdNNQ/wBoTM/vt9ZpeH4m+5ksfR8wcehG41fTuwXXj1CkwVSnGaw0aPkvKdDqWJgYqrlaLU8zMK3HLIR+JRvCjTbpWuwx6u6/7D9zi09tFHu2md/tTL/2Nvu0OjtYX1BtW/8Azpeq8urAMNU0xqGFO5o0zJslOhynTMWqBQo8jKGXP0cGXUlWPp+CogddhFBY01itDMGmKPeNM/8A2RMz+9ByeteFes293P6aLqD9zrxH49QwK8tcvGemw+n4ebRDuuAPvlFXdsrXaAe8aakP80zh/l0xeefM0bZnT6fo55X59Qw0y6cmlkf8Nf8ADTx6GaaPRR70zU1+wTPHppTcNQmu4TC2YmHblPiY64tOVmU40q1XFsb8YdS3TXsTuVWjY/gH7YQ2pM0v9h70zLTnSJkrypU8WxrRdRDjUEgACZPE6vfjUtV9P2M+L5bn7VWm565g6WOtaaQxu1bowBGoUdm/zoN2lY4oZpZ/yD3zy9O3dLk4WfT2T6eTNwqcsfoa741CY9XlPrM3Ft07Jx9bqZbNZxlGbn25rY+kuiYtb1VdPqOva9vRvNUPTETnd0wW45Q9801Gv7RMyvktNjVW4WSuVR11TNbDNVi219MvKrxa8a5cinqQCLtJxbCmjYoL6fitV+jVbqNh0+pB/gs/n5VHIzEr4V9FPCxDuPemWruLE7Vkyae22BlviXY9yX1dMzGTKpXxulsNdG1msX2zKruK6QvHTvx/UrfY/wDPyovEYtXcfqZgPzx/fMJmU9xRGUOt9JqOFl2YlmDm1Za9dRo8DmqQRl75GVWoRPx67f3M3yD1iLxlNZsZFCL5MTJ7EoyarffGOJmUbEGEBhfjFIrFGwtaKym6u5ZmY65NApzqJpOnnH/Jn5Axca9yfIqloqhZTU1rVoK18+n5Hdr96RHWZWPxIPS7GV5ZU9crsetsbWrUmPqWNf8AldlRdVzvFWsdzACYtfSjGLRVCjy22rWKMnm5mA/DJHviIyzIxd4d1PSzFRo+NYvSnJuolOt3LKtax2iahivFsRvPk5VWMupai+UWJeCswVgdEXk1NCJ07qQHfyZF4rlj7lG2I9QDxdDuPfERll1K2C3GdPIyK0yqUrBYCbjqt1qwZuSsGpZYn6pmT9VzI2pZZjMWPQkCGwTuGCwGV2uktue2DEuIrdqXU8lmRkcY7bRjvKv44p5UGYL8sb35EKwrLaVeWIa36Zrb22HdpvObQF4WYTumd2d2d2dwzuNOR6rXuO0IFAmFt4mant38T/XycneO3GE79KZgH7TNKP2D4EiMsz/747qgsbk7IYKzBWIibmjScm2ZWLZjO1fkrXclBDVCCOlR3GJXXYoqQS+o1MMy4BVe6y5D4cxlI61/zwTtaZprbXj4JpeeV8vc2Wpp445VBobTdOGYlOkYqSuqusS2pLU1DSGqjpvGBHSsbLhabScHI0MTIwciiFAYq8Z27NqMhkP7js1wADpZSlksAVz+4BMCMDjna6YzcchfgmlvpdP67ksV11O1Wn04hGNNYy2xaGz8poudlLMbWrVl+Lj6nXkUPS6JvPVTpuWMujpq+LT4TAUNkzPULk4x3o632dutzssqGyjGsK14r85SOV6/BNM9ON4mTj9yGqwdNMKnAmZipl1LodMfQ6ds3T7sWYuQ+NbqOR4nKxFC0aggbH+nWIzOl1YtquqsxMj9Qfi7F2x7e0379GIUZFvdextyo3NKc36EzTqvVfgjMqruoQUbpenC36fygPKwDLquJ4TImPmNUuTlNcPp/FNa9cjHqyFbR8QRrdMWpwA+JeFV8tBLbWsjv0ReMxKu2srpa0VYYBRYPg2EvoWyXUmrplVdxQSpw9a2V9axgG1u/uY9ouomv188LHbhfbpGLYaNKxqm8v1FewjOAe4s7iw2RmJgUmIvGYuPt0RS71VhVCwD4Qxll9XNCCrS/HFkemxemFpNt4prFVc16wLgVLztHn+oMZ7AyAztTtQVwKBK8ex5TjrX09ScWjthRNvh2Ey8fuT1Bh9QRsdFy0txplZVWMmfltmXaFi93I/BfpuLcdV06rEpQcmGJWItaJ03iK1hxscVxVg+IMZZfQtktrNTTMpgOx8bk7Eljgabbkmipaa/w/UVvLIwl3um8Wux5XhyusKFWAfFERlmoAdsTLO1Fa87P0OjejTcan8ZOwy7e/k4K7VmYKbqFgWAfG3OtaX2m6yZ/wDVpy8s78CW1ueur3dnAEReCGY9fCsCbfGsdhlXm+wS69apbc1s0VeWo+fXM8g4HPxnX6ksmKvK+Yy870+P1OzjQJfZ26ySxwdHa1cXDpxR5sm3s47MWbRcQUY/X6i/3cD+wzTv7V+OM1U/eJnn7tFoF+b+DWztpqDdx6Dr9Rf7uB/YZpn9w+OM1T+0TPH36BYEzfwa5/62n+3qSANXvXIzcAQzSx6j45pqa/YJlV9ysEqcfW7UA1ymfrmPP1yifrtMGuUz9bxp+t401PUvFpORndcTv3RrHaIpc0p20MwU4Uj44y5Q6upreXY62RsWwTsWTs2TsWTsWzsWTtWTtWRcaxouLWB4eqeGqnhaoMaqKAvTFq7tiCD49hMmgWixGqO/4d5vN5vN5vN5TjM8qrCAD5AxhHTeWYamNi2CGm2dqydm2eHtnhbJ4Rp4OeDE8Gs8Ik8JXPC1zwtcSlVirAPkyIVnCcJxnCcJwnCcJwnCcZxnGcZxgHy202m02m02m02m3/cH/8QAJhEAAQMDBAEFAQEAAAAAAAAAAQACEQMgQAQQEjBQEyExYHAyQf/aAAgBAwEBPwH9YCOw8ALJ+hG4WwoUKFFsKO0I9kqVKlSp3nuCOMMJtB5R07wiCPntGHpqftyO9SmHhERlmynLqXFq07Cwe6ceIlSqv9nrCPcEbGvLDIQqS6F6o48inagAQweC5GI8cPBjBCO4MGU94d/nccYNJ6xscEWAx7qrX5NgeBjriyc9okwq1AMEiwYY2dSc0Seokn5sCOENn6gubxtOnhnLehVawQU4y6bjiG31HRxz46oyj0BT9fPQEcuFChQoz5UqfyD/xAAlEQACAgIDAAICAgMAAAAAAAAAAQIRMUAQEjAgIUFRA1ATYHD/2gAIAQIBAT8B/wBvUbOqOqGq/oFgciMhq1/QIaoXD34H8nEZEo3vxwSzzGX4JRvex8YyJRvcWSWPlH7XwpHRDgdGdGdGdWdWUUKB0Q416QyT+Vv4Wd2KaHKjud0d0dkWuJSoU2ZH5wJ51kqQ8+cXRVjjWnBFEpesVRKV6SVmBv1gvsk6WnBE37QwTelFWN17xwSzooSok791gedGC/JJ6EcEs6McEs6ECa0FxPOgnRnQgvzxPRixxsar1jG+WrJRrRjL9mRw/XmofvlujuPSUqFK+JZ8bEzt9Dd8RwPOlAk68V9H1I/xko3zDBPOlAkrK8YuuJOuIxsSom9NSskr8u74SswOWqnY434qNigYJSvXi7RPPhDA5DevFWYJO34Y2YYJv78I5JY2Y4JL78IInjZi6MnRHQ6HQUUUikXQ3e1Z3Z3O7OzOzLZb/wCOf//EADwQAAECBAMFBgUEAQIHAQAAAAEAAgMQESESMVEgIjJBYTBAUHGBkQQTIzOhQlJicrEUggVDgJCSweHw/9oACAEBAAY/Av8Aqrq40C+m3ErYQrhpX1G4VVpqPHy52QV+HkNm3DzCDm5Hx4QxkLmV89FayvdWz0kYZyOXjzz1kSrK6Bkx2h8ed5yImBIePHQ3ljZ6q6shjnhdx/58d6iZOq6SwP8AQyq2xVDxjxx56SdPpLA/0Mg5tiFezxmPGwNTJrUZ9JYH+hkHNNCFo8ZjxprdBLy2eksD85BzTQhVydzHjL/aTjtXylhdxf5kHMzQc3xclE6px6SO1Q5KyoeKVf08wgRlPPxN/tIDUo9hQqozXXnLCHuAV3O99izne6tEcswfMLfh+y4sPmqg1HcKvcAtxhK+1+VvAtVWEEd4a3UyA0HZv2MwswsxtVY4hfVGIar6bPdcQHovuFfdcvuFcQ9lcNKvDHurscv1D0X3AvuN91xN91Rl3lYnmp2MTDQrR4zHd2jQSd2QRoKkrRXedqzis6+a3m+yzp59yo3eK4QqGxkHjkgRke7P9kTI7VldWnlLNZrNZrOWU90qkS3VYhfRcZXG5cZXEuSyauALgWTlzXEuMLMK2ZlkqhXzEqaGndnnqnbd5XVu1srq0+SyWSynms9oTd5yd593tKonaV1buNu1zWavlLJUaEGyb792c08jLEyzlQqolZdVfuVe4FzxbkuH8rdFJX4R3eos5UcKGWjtVR2cqDPYoBUqsQ4B+VfEfVZO919OIfVb7ba95qg1UE72aqNFu8Bv6pFxWIqgz2ABmVU3iczs0NwvmQuDmNO81PEZYnZKzR3kuOQRcecsI4RtF5/SJUBGzQ5J7NMu71PCJBoQAyHehDHO5l1O3FHkmsYaYs0wszrtNOre61QAzKDRLEcz3tzuXKXQWVNppPCbFC9HDIrG92JwynBdWjMe8sTnikjT9Nu7YzmcpX4R3t5kXabOWwIca7eRWLksTCCJUIqFibDFUQ28TTRVOfdegzkAMygO9tbqZAalGeGEwvcqxnhvQXWOFV8Pn0VspuwxBiwZJnW6jPqcDd1BjGgml6riwj+PdqBU585fMPp3xo6SaOkuiMePVnw7dMygILQGTMaCPp8xorZT3XEeSPyzn0Re7M7Gfc/mH0lTlz76fKRQCDP+W27lE/4fhw/T3Sv9LGNIrLDrO6MWEPpHMftXSeSuVSGxz/JbwbDHVfVe5/lZUEFnqqwHfLOmYX1mf7uztsdVTlzVlQKnPn310nKqDv1RLqDFY4tjZW0VeaEL4k73J8yDcFF0FpdBP4VgSt2FhGrrL60X0avt4j/K6o0UGzRwBHVF/wALY/sRBGFw5dpkqDNU95fMd6d+PlJyDRzNE1oyAon6M3RNvw8TeB4TpsZdnfdicnIw4oo4dlmrp3lKnIZ9/aekh5KAP5Sj1/eZmL+lg/PcMJs8cJTmPFHt7IJ5k/v7XaGTSoBOtJf6iGKtPF0lSG23N3IIQ2e+q+q+h0VMZb/YdoWhwxDlP57BvMz6hV7Lzk/v7hJ3ugRmEyIP1CVfkw6/1VBYSi/6nLlVE0a3qE5rrhpoNp76VwiqdbC8cplzzRoTonI1JmQciosLQ27IDSTx08AcOUi1O+Hd5t2fqDe/cF992HSiEOGLbfzoH262OnRfXaWu6XC3cbj5IN4WftTXs+KwROeFYYkUxXfuM4UT9wojt1Q0F5t628ADxyliGYTYjOJqERvqNNiFRmJrjdB7DVpnjiHyGqbEZkdihuFXCWf1Kvjd5lfL+S0DorRYuHSqAnBP8kewvmZtdofACCi0yqOErELtPEEHwzUGZhv99EaNxwvwt6Aa/wBlT4eDTrmvnfEPq4qD5V7SC3qSjt1PCNlvS3gFRxCVDkumqxQzbm3Vbho/m07AiNH0nqoyUP4dmqa0ZAU7QjlDFNrqqBYW5bJBFQVuuvp4B8xvrKhyVWXag5poRzQb8UKj9wWKE8OHSTobueR0XymwidDRGLH+6fx2johz5eavmdq2Wqo3sKO4m+AYoeWk6jdK3gsUNxaeipHaHjUWKtEwnR1u1LnGgCrlCbwhVlZXlV9gqNFtq/ssLhSQ/lbwHFDsdFQ2M7bpWo6S+lEc3ovqsa/8LfD2K0ZvrZbr2nyO3WK6nTmqcMIfpWWxSoHmq5nWXG33Vtigu5YnFBwVUDoq+A7wW7vDY3gCgW1V1nPdiPHqrR4nuvvuX3fwF938BfeKq4knrsWldbrlf2CrgX+QgRLCzPVXzm32kz28D3gi0zppsZyuFkslksp57TMUhTOl0Fhh+66zKcJPHXwT0lVxTjrsUY2p6KpaGD+Swxm+vIrd2rTpojiFwrNC/jyKpi/C1PMrCzlK+xTUSI1Hgjz1kfYLfca9FqDkUXmJhANKUV2l5/kVSGxrfISLYjQ5p1Rf8PV7P28wuuxDEaHV5vXmqwIno5fUhGmouJ1wOprRUcatlwBWFJXF0QMhKyyTPOUM9fBH+cr8iqtKaxt6KI45OdaTfl8bjSuivHf7q0d/uqR2h7dRYr5vwzg2J/8As0YcZtCt1tfJXF+qrk4WcJxYvyx8wDMIYvORw+absE8+WwCKIVoBKGOvgmLk6WJvEuF0oOCwwywRPQ6LeiRCtyI8Hqqu3mfuCD4Z/wDqMQZUFEynMVRccwnN5Fs3sdk4UWF1nNyK4G1Rc7Mr+POdTkunKYbsfMPp4JTnyWF2cyEfh3nO7dkgioKo37brtlhpiCpSjU6O8UxWb5bFIrA5YjiA/snQBTCeYCIBxDVYXmlMlu1K3slQS6qp4jKopRVecXg297rOolUcQVRYhYfiQa/uC3cbj5KrWMDNEyIMnCssXNhUN2jlWhZ/UrFhLz/LahwQbG52LCfVY3+gkGhADwgtVDnKrbOV2mTXvIZDN+qaxnC0Uk5vNxoExo5mnYMjMFcNjLNZrNWCyoOqqbulQZq/EfCqt4lQ2M6JsImkRlqayrFd6c1idZo4QvnOG4z/AD2NXQ6HVtkHse6pNKFAaq9St1oE6NC1d4ZcX1VDL5jfVVGap8+JTzVSalVcMELUoMhijR2TIQ/SKquk7NW+fZUaKeHDWsnJrdTRccRVbDqdXX7OqiRP3FF2si4+IYnGyqcuQkPNQB/IdjRj2k9DsRDzduiQGkmt8PqV/AZS1dot5Q+lT2B+HhH+5/8AShfK4sWxBh/7k33k338Qwj9Uieaqc0H/ABBLGnlzX0m0J57cSJ+0VRc7M3QiOH1H38thv9EfKTvLxBgk0IYuFu92MT0TR12W/wBEfKTvLxBnlJp6Kh/WKdi/zCZ5jYqbBOcy7RYJxk8+IB2hlbMKosQqRWB/XJXhRFwRV9uIvtRPwvtxFwxfZcMX2QhsbhZWt+csyrPd7r7r/wDyW89x8yqNQbIam/iBByKLXSrkVahXAVwFcBXAVwFcDvZcDvZZU81vXK4Vl+VkfdZLdFJX4R4l11VHDuO9utQDRbxOhC3d1WoVwFcBXCsh7rkuILj/AAuIrNy5rL8rh/K4VutA/wCyL//EACsQAQACAAUCBAcBAQEAAAAAAAEAERAhMUFRYXEggZGhMEBQscHR8PHhgP/aAAgBAQABPyH/ANVvyBqsfRny5EeyeVPtxVGaZ8mZD5E3Pr6R1C+NB5MIrAxfXa82Nnf12WKi+6QS85lpDmYPQjmYPUl5yDVQREW73Qfrjl/7uEZ/mjtGsaY1DORj9Lp7RlAbMX10KN2f3m0uDZqMoxACMBq5QyBAsTd+vdz6LAoC10QHIes0AESMnHfBsRMkzgZAGD62MoT7Z4xxaLdCdV1zJYQLNJkFygxBZDMSZCzWOev14U2PdKwVjFUCJZpK6XKDGxc0MpFP9R9a0Yi2rlNx4pVAiWaS+lzgkXton63UHuMev+YLM41FkOfBepgdyZZOl5iYIYVVkeR9ZXXYfZNCdVW4rrx4btQHclG/Lowkdqh7zz8Dh+ri5oFyzOqvHI7XXxgJQqkg6afeJCxzWXSjF2ixlzrE6D1nWJf1Blq5PdjxHY+B+IhlaG8C7Q5CJAwzoDNSXeKd3DSaM0BdlPvzbmvxi/mc1KzpqURcg/IU1PWMeZuUzdFSrXX9Sdi1fMKuuPTFuOqc/BSm55CjCplP96f7c/0pk6SpWBm7B6MyIOBkzYtcuaP2EL/jwA/Ogm7HcQ32apvt2jbftTNee5H54EmnTDaNFiDScEdIXdhgMWR/cmb/AOBfy2nEUWvrUWU+CKlXR3CzQk7Ca2fOKaq+fgFNFn59zbvYn/fTk7jJNe0qVKlSpUqVK8QyAiQKPSZu3GvI2JN9Vn1IGcgs+VU7JYujYuLbbHfikVC5z/ImkMNw9IjaHjMJ1k6+dbCQ36YcoVvXedo/mnTaUAW4aS4ZbKFr9Fn+tAoAcu4QPVflDcaG/wCpDcXkw3Pag+qfKK49xg2nqzQm849D2YVzLXoglCseA4WNb0HyvrC33nd2WDmr4NdJvemAFBU1lHdNTUFfiJqVH23BM0tqrymkazox0E/i5TlOmzu+mE6KWaJ4RktsBn4hb9sH+PpNHymhmZY61o3U6TpnjFSo0zXmALUZyynyIUCrC24Phgbp10RzZI5lOkzoJ3mEJtqxxgJm5po+TZpi6ogMtKPZYzBSbS/7MVcEAVBdUM7XyWSxfc/FC0DWU5LwiyDM67eqVgh0ixTRvPXpKiHygg7d35j90CXzQ0h6VDD+grwElJoEGB8WsGZ38kUZDNeyPBjmd08z4dAKCQqjQ+LvfKOZ5vBCEKDIixhcb8zqwBUHywMOkArPsQjs5EcbvtKfgAl2lBBYC+R0PCyETUZQT/i9Pl8tgUUTuovSKAkbOQczQp5YNMD5VmQ6Fs1F16QmcP5WZjvtFtt8B50Mru4JEk2Hwk42iknFK9G3y3e2ZVflYzVJYDeRjNfLMq170EEuK4idWZvtt4S5eb7xhmao44iKOWd/ER/Qv5WyzQmumVNoD3jmR/4zDD5hzrmrshLsIu6vFaKvQ8O9C+2gMjFqwOacQQS9G7vAQ6AfKWIIAAmR/wCBFMxG69cEZfMMrzWqPOGdIkW23WXXGOgKH2mOdENHUggOcu+k6sbMFJk1GVODpedRMhdB7mIiWs1+Uzh1ZkbzRoUaQE3eQEAXXd5fmx5uPTFCXDBzLTmdugGkEBvdS74NLr/xNbiLJooWzup5le6DupoXl/ZTNpYtkEqvAKiq25vymdOhEALXIgF3l1imw5uCD5rfxr4LuJaOq8svQSvUkbu0X0iyt8EERLGNZb0/7lNfiNX3tUKAgrRtcSW3twBdC4vp3hyjSs/kGIIQBKin+bxRz2c4IAFBD82V9AGB30gILFNbDMOk1+VtiUlgN2wxBACOozPi/odJesxaNCfolgZ0XKR6o5+hKpe4yJaqHhbLh3LhSFDYZj5zPTM+ErgW1xRqOGfOqJwuamQGQJmGYuRAPczWAfNvbn2hPtftGw4EuUzL9tpqIj+HeCgCmq4eXtDb98RLAUjvNqohmzlC3BK1X+BzHyfLfyyuQ80qoOAK8LZz1BYzuhE5eUQPqkVAqnX4FoOUG9MM66QSdrSAzru5iljR/d8MPnBrrDAK8r7RdaEIegkI4b/Fa++ObfL7v/HgBbAPb4eQ1Bk/mbQHPMCqdfgCmkAh7oJatIY3eUAACg+dtEr5VIaSpuY81Xpn+MGNq/PizByur5BFT5Bf1LEApPhCoegDBcnUlEPnd3SGDtvKDoj7xWDRIdO7nAozmQ07TN3LmBmcaDNYcuHTIIIgjY/DSA1A5mI6EtP8ZTJGj8E0SVryXBoep8/VFrVkcq25C6iLJoCgxzltpypDQgbGBC3un0mVqFmVUf1s14rTxZ6rFDeoKc/e7OcQOBtWB+/QzpiDdhSRds9Jt8CpgW0To+rBTzA/PWCdZVnaGZODhy7S1nM9Lc8Im4GmQkNY39d5TyPqvPiAEcxhS/UD3IQN3JsiztRT7zLjfkH7sWkxoWfeG7Uuisao3V5f7BQ6+OvqTzAsGdIB+fTLQs8r2ilf1ntERpLJqWuXI48C4al38QBQbExS9ka9kva43XwOhE1GU0zsHpLV2lP2libC5E84HkfRQTNArPHtBHt4xlsCiiZny3BlYbDKBNH54wTFjlH2Bp1IZxu2XScaVykHP7bpjoGuYNVzCVmexa/U9uD/AImRRu7NGKlUC2xyOr7jfxB57/D1jvwgK0awOpvMsvy+Ay075nlD51wsteHr0i5jA7U5K9I1IGtpFpoOqMUsmcK91WnJANKiyprRcj3f+QS6EPiEU/edWLavPgCqNYI5gfpbvEEhk8CQr2q8tpkvesn54YLoPb+cBiNqXX5gjQs8DJJdJ535kN9RmH5mw5l1nLIseTH6Tpmtf38RRNFHmGVVva+DRNOYBl6ygZN3CHS/74kiUiZJEdbynqQ+fhWLq4YnqYmkc2OTSEg3dVKz+SDaUAXd0KSz4hszWrErXkeTrLJYaagHNwp+x7sBgB4rm89uUWs20rBV9hf59dhXHqOxlgKGzBmSU6TO/KaTPQ60IjSUyupurL0lYDcmaZMp1LPaaX+78p7fI+Ou/hqXlOwm5d41kqiNaJrWfeEqld3gUHfRyzYi1mQAtCdPAL5TxERSs4iZxVjRLlN7rlSNEv5+/ApGZzuTNPyJedOsHAmu6SpgrpcqbQbQYCmmU9gRz98M3I7hAt/9dJ/H9UHpPsBG73qq3HVEhtFzNvLtOIM1CrjaUA8oezRc5TsynNg6CS8Dtm7+EHMrUV2xX2ztiDLpuHsh9CLEyb53mwRDDp8y56YCNFhyI3b1mnk6CW4S0W4TpEU3IrqsUBWrhuKzSZs6r98Ad4Mb3rMw2W8Dk1hFbrgsxL+G3g7Nt9BViyKBqZoTKaJ1NXLdmdxWqEFqrHJ/ALYH3C17TKlvT7Bm96PBqehF7VG3+s1Qx0zQG5mlvyj1LzQyaPVzRlqmpBPbHmQOZoxa83XF0OstcA/q6pp+hu60hNZkuiVCbjsgkWIz3JBZma/1jIlCD2sNpMEckw/wuBrKEVzwqeWFiDfQL6xFrP71l/DjaqekPRmyqvuiEVdTaNZlIxdv2YbRDgw9wxkxT7SrmpWlzTUAsW7sjPIx6/REUXZ/eGkzsGd/vCx0YgwStTaAh+AMHwmSKGb8jT7Rm/M2+8bP4INo93hevAlRB2d4uRuxEHeDYSvw7cuLanaAp1h6LAQdcB0UIU6y+3aFeAuyu6Xjvh5jCSol6yy1DesY4nGafoeyHJ5xSxkm45i+flGDKChYc7++GdersNVD+20R/ocZlsfy3xKKyamw4YF2GAdspT0yE8wpNNHzgm1a+SY6zQUbWOvkOZpO4j83qR83VoggEbHBStDeJZodE0PQjmEp7TftCgoi4C3PpOj6EYKvLUuGPAoQcOK9TtHaS2b7nhNMCkZa/YDpgHYHS8qmT7Wo3ltIaH3eCgYNL1JZ03NvJHvGq9z5uArByG8S02ozQC+hHbVcDSX/AHYFtGsrdUyX/DFjRQGs4UsONpUaQ/QnDAoZmm4la5lq4My1/JCKKLE2YQrDz+5Mt+JkjutDm+sJOsg4wPJ5F9cpxoF3xcZlz2PSDqDpe/aBWnhuWD7/ABKE3Oo+k6kGGquXE08y5g6M4sA5wWaiL7TTaMOqH0MXgE9vpEB0NYMefxTLXJcmeAdDo6ogfVQYIhywedxtQH7po8bl66TY5iN5jHhFuEHeOeJoHWZJUdydosKQ2tCZ/m1HBPoxMOhpH3maGjZgwWnJUZlqZQxwMzZyYPijsdXlOOQ4SN0Q9fgnVz3ITDoq5T+6p94ThAXGM0p+0BvU1cIfSBcugnlBrL6WOjCavkfzEBEGiRX3xjhSaqwmzcLN7TZ+U+FeTK53f+Sm2G4xjXKuXKbl/SBgB0lH00AF3Qwd5USgNSgzTXxZ+o2AOAKPhEi0M46+6nbaWpq/aKCCu2jwbh9MdUhNPQ8iEVDzHci+BcQl2oDXgqBr3iC0DVgB7KnTOkBngkV9MFkoM2XPTQ/mCEU9hGjJRoEvNWXPT4FBfgjfWVpxv4Moeq+06QIZW9htBD6axrDN15QwO2jvGKWtZnRADq/UYc4ba+MmN2GctrPWZLDsuzY8DseB93FhHlg/TtEs6ZcHTYXKL2Njnj4KUd6e5Ls3BDSGh4PZPu4s/i6/T+mDM6sFG0YvfVo76/B/qcz+dzDF0oGqxTaQ3NTP7Zg9Fn0/ol5+t54bXqiAUVWPEA1nY2m2namf4R+47Xt/uf6X7Tdn6fuG8Xk/cf8Amf3L4zstng/1oaJ+aBftQnKeoynlsEzN1XljlbeR9P6JpnFTX6PeDFqd83miB6MRh/g+JYSEGs6+YMUea5/VZ1vqwALe92D0A6RY4PV9en1AOFQXI6Rk1ddmEXLwuXLly/GBm0iY39yVFBKvqAwRKBOGIW1epPyAgPwT/Hg2/wA4NsQNqnzhv+lB7wN70obvrEP98OT6p/JQ/wC5Z9jDBrh9RSW4LD8VAeYCvqlR+C8KlSpUr/15/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyW03vzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjDaujzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzgbLsRPzzzzzzzzzzzzzzzzzzzzzzzzzzzzyzntugRrzzzzzzzzzzzzzzzzzzzzzzzzzzzzy0L5YCB7zzzzzzzzzzzzzzzzzzzzzzzzzzziRP775IvjjDzzzzzzzzzzzzzzzzzzzzzzzx1F77750PrLKgNTfDz3fr5ktPzzzzzzzzzzyrT7776NXEctOpI3iyGvVYyCLLzzzzzzzzzwynL6Ne77777569G/wDv/HP3ztL8888888888fgaju+04++++++n+++++mZihc88888888886UX2+V2/b3++++++++++qG1Y88888888888jRX++Q36/W+++++++++iQ+k88888888888sdlaP7Ly/R+++++++++uIYi888888888888oaztcs6TSjlT2++++2+gYt0888888888888oiVEh8s/sc88pS+++LDybE8888888888888sk89JUw888888o++++/jFc88888888888888IEMM8h88sYkwsm+++fAC888888888888888cU30sc508cc88D++ixSS088888888888888ce/z8Jq888888v8Apzow9ldPPPPPPPPPPPPPPMBOk++dNPPOHV8T6QxaYPPPPPPPPPPPPPPPLHAfSrDwzwy8/wAOrsaSuUHzzzzzzzzzzzzzzzzxBO6sUH/uOedDNHbrBTzzzzzzzzzzzzzzzzzgNrQEmWzThJAsZv6UDzzzzzzzzzzzzzzzzzqkRXyRUDTxw8wgQoWDzzzzzzzzzzzzzzzzzyYL3nyXzzzznwqJTzzzzzzzzzzzzzzzzzzzyxYrK0Tzzzzz2Tczzzzzzzzzzzzzzzzzzzzzy+i7zzyzTwbJYzzzzzzzzzzzzzzzzzzzzzyiNJzzzx1TyL9TzzzzzzzzzzzzzzzzzzzzzzyFrTDTSFn3E/TzzzzzzzzzzzzzzzzzzzzzyguSiCRIlyha/wA88888888888888888888888ov8CBzxXmyc8888888888888888888888888MsMccc8s888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//xAAjEQEAAgEFAAICAwAAAAAAAAABABExECAhMEBBUVBxYHCR/9oACAEDAQE/EP5eFyiURK/AHBFYNR5PwHxMafEfwQol+/COpCX7sG0Yl+wzMNynEsnE4lNFpaWlMqVKhFIldpddpCHUU0WSyMWw5j2Mtb66lSpW0URz1jUS4lbBbqv3PhriFCtxvFyovacRb1B/xQRxpWnMRI9eYcRb7QuKoapeQi37wbEA8DEKH31iLvZbLoyoP1cRWG6/caUr6wtjwd5iOdhBrEUseOwKi33mI7a21trQfMXwGI58DMI+ENailxkSnaeI8zGwJQ4OseMolzGiIHxBMqvPUF65iV4RlXHRfSbT48Qwb0c7KlSpWlF9pY6XHnTCPiyi1KZcdALgmZw6uJsjxm8kuQ2ryOavVblgoMOi1oFwKi8Y3BtX5uNtuhzMS3yjcR0nMIqovnG+oYvzhcxHl6MHpMReegzHHpMQc9A9QamdokUSiWEW/Vei2i2Wy2X/AE5//8QAIhEBAAIBBAMBAQEBAAAAAAAAAQARIRAwMUAgQWFRUGBw/9oACAECAQE/EP8AXtIUWj/wJoEdcRRzMR/AdkZUwW1GBGnv2qLIaetlGIjT3jUO1r7ko/YlNPdMIvhZhlCznuGxHXiI2xlBMTEW9RghxBPCL4S35BLRAOYwbLcEPAeVRQxV0uCOGAcxHMOK/ms/eXe4IziEA5gggprb9/GvevTmBKgjtO2azECmN4bl71rbAHBACjcJQqXK1d+xUAEdd2y3jDHepLZ6TeFWmavOtu9KlxbzvChOToi2iVKlrf4pzeNbgBFeDoO4FLoijOboP1M17j4C2pVFQV0Fi4gYiNO2+HtaHF9GvDClFTqG0mTxDGgCmco6PphAZ0SJzs1PdAnBoAtilsgs6ScIUYeZS1a3Ll+FqqIOIgCx3nRWGGkdIZlOXewhWyhxiGWZyiJWi4QVbpLMcYljxvVJczpW05jB4wFx0hpuFFTHjXiAVFXLHVEANRXjqDUMQ8tlOMp5YAJwDrCnESxgDDYFRW0RXnr25gzIHmFtRwi32BUWU2OCc3ZeEqtsWNxV2XtSgz8pX9lf2V/YKfKfKI5S92hHEIW1L6T7T6Rf+N//xAAsEAEAAgECBAUEAwEBAQAAAAABABEhMUFRYXGBEJGhscEgQNHwMFDh8YBg/9oACAEBAAE/EP8AzRcv/wCCJx9roIXSb3l7suBvC77sYKnhf2MFsmLvP3IADrGsf78vJrX4OcaMbA4HF4sKoHhOggQap2RwOJwecosizlxHn/e1EQZio3Wh2PeUQFwdav8AkTcKFld2BuPQB8yI+7of5LxmMQJcBqdz2hJ/eUDFSL6AaPQlAiWYsHAaTDgGLrWXRExdaRUvUVrMiyNjih6Xn0lgf3bpHUXXwXzQLpxiYqooCVI+cJK1ZYQoDviDkAEfXQh1uPAQ0/unRhaY1FVPzesURuDHr1JjWpsNJ6IhGnQa3Q2XNSJbVATZIPUXJwcT8R2f3diuMBVp3qPKWZhOlBbGd1XzMRtQASCFFaMa57UdOTygsimTsMjLKjdPwfuIN/3RsZWOEQdXHzDjE2Noerj8ywFY6+6syG1akJLanRabbkwXFYhQ2mOQdTk5e0Gz+51JS7SOORn8eChXLM5GD3loNao8am5WpCS2tGUuGkdeT4C0gsJW2gf6nKDZ/cKhlJOGZzVe0CUC4Hv1feV79X5fQuqPXlAQSxyMIYRh/S8/AQEqx2eTxIepDV+ricoZP7dYZRLYx2V73BLF0lkb/ZeJy0K+ltSXpKqXmIwTABk2fmXTd6k2G48o1QbX53hh/bIflLtmOpALqtyv8Ig6uD3m056L6kQzbR4RSiLE1GXjB55eJMUvAo8RxdSGQKBuMrVrENfOn/FQTRu8A7yyX/XYEo5pqd1fMOkpJzmORn3qckB/goR8aL4jDW2CWmGCOPGXkwEKXA8on5yPzFtR6s6Ia4OjPQRXzNI36tbmg7wC/MqFoF4/BfzKwRdqnnpBCtoJPSD4XLJZLl/w8EACy9DViwo9wPyw1H6HKDl36sZglY3dwb+2VEcRzaOQ/LDKw0ueq/8AJW8T+Fndu3SBszher4dEaaodWJ6j2z/jYJovbBDIejKRPCI4QOE5xXYjhpV+qPpEKE2XHyPzFsDwL5uK2n2HxAfyn4mnL1HxNe/atJTURz/KA9Yz3Iiu4/cSFfo/JZogfoZJ7nST0/A/MLiuyNjxfxEYpakHhKQeEHiWtacibxgAIfjcoN/aqKNd/uv+EFEznYMdsfEv4Mvz/g5GsprhqOggOAFHCLtfwL3bltVO1yKq9xU+O0WEFaU1EMPvmvh4D8UxMAPOj0ZSAV2PdpCgJStEjwwmsp4ESsr4Uu0eWJ4RHCA4Eo28BguE00HrDN6O2/O4RJfRLHo+Eu6OB5hHtoE5JD7TBLBdheQCAywy7ER9RbZ0819VkC5Tf/Q4zQ05ywLUrmzVLvDKE1nq1FaB2uKOzoRb88/6sC/LAfkEFo7VQt86ModbsgiWhOI3LMf3LtMsNze42jxFoGxWIUC7UHlAsHmYBVnWmbY6l8T14fxhT0hPmEMzoz4mBnfrtH1W6C+Y93F/GB6egfEL9XX3mGe4BZjAWqbG81FOwbzdURgE9xirra93TfygsjqW9p1PeKz7RbT9QpSyjSQ92LQrtmK01W/oBQC12itLRwSrIcoXhHgay2KHF1it9cf5ErRcmGQqcTWXIH3I6myurxccUCmgZxE85xPMYLfywbhd4bwwfVEC7DqQfTz4axd5Y6I+KqAqhGSXRb8EHdTiARqIeXgCI6LryTP7M6RUkVri3CsoTGqGsSyxyYtsm/ceNJMbroQDC9ylGAc5a9Q3iqqtrv8AYJ4V6nCbTAnYP4hTRZog94D+aOW3kasAgCtRmo8ltRNiYo0OsXi3LiO7Ki5Q+vDm/wCV9paJrXDQRB1Lw+ASDUJp+Fiw3UrUmQOd+LpNyjqwuVBCqOhw6zLA+h9lQky4OksBqwfyqYtOIROxnrA5c5HFmX2GD3nRFzXvDrWMAtF9EUBoQ0fZukuGZsB0bDwfzAYDZ+OMWJWVC0NeTGI6w4wA0xDuo7mFVVbXfxU5NAtXkRi0zj6Wh5ylcfPwEWCPEfzGLZi8eZ+JfjaDK99u/wDHTwFItQGt+u/y0CGXFveXUgt+YMovOjgSmbZrAo3QeQfMGYTzlAQ0+0tGGjGEyo78bv4ayB6cXhE1zgGw2JnDLV4Ry26+KETCaq7QYy5T/Ic9/pEiFAsTpCYG/Gec/VfbuG3VeUAAoMBML0BZs2JRO8JQf5Hhf4mXnNDEDZKj7XRE5Fk5E3mgHBsQzXglY7jATdwOcREtdX6B9LMvGofK/DUwcFTqfSexpGiMfIZqd3n0P21VfGZquW30COpqDOXgbsrOUCCGkA2hT7Z0RVuXsNDzz2lQS8uuz8XyigKc2K+xjo+k2JcHph8keohFTSjzXDWNGdzSPU+oWajfZH2uKuBzYbV0E02Rl4t2UkfQ3gewSgMSg+4qGPfWn0GCGiX2vC67+vtKwOfb9QUs3kKs9kGLOuIliOycMbQjORQtx5viPRg2jGr5XKINUHJpVa9oIgmjmPpd8OJl9V8vtN8r0mmkYlzgFW24u8wRysMc1sSoMSv7hojLqz/PA95iICW6nXaMyWm14y1mho8Lmtw46TSD4jfgymGLFY8E3PWCQolYyLvygNLUHss18A9XQ7E5kCoi0kLkLRDDrTL+B0jekqNVdX7NmPvjIhg6xy2O8oMABQG0t4ChMuYz5wyogUfcLEoM66OQ/wBhxFAc5uhn3qciTHhgCt60gfdzJ1OwdY4PZro76HrEBewR5zWvsjJNtqcPBmhulGloGYNqmrmvgI0BUys3Wnc95QWhlyXBh4Z7xm0tfccvrGSqNqtq/aYW+djalUG7BVSuoioYlaJouxu95WSr7lUThX5xX8QYi7H6x/yVnAEa9wHLx5RaEmQsBR4W5YEyNfQliu7zfA2AKR0SXAnZtfE/VdI6qtenjeG832SluTQWl8YV60DB0DwZplyIPaA5pg3eRiZih5a+UbGkR4fzgXlmi0TdE4L6xgiJsrXlw7wyAAA2JSH3SxKP/wAK/mCiVn/iX8xtWKxmgAH5Dq6ecLlNYTKsAcqHsyjZ5rDKAeJpW4eJZGQFiO0RxfxrP6p20i6gvTw3o1mrAcXE2gQDTeL7cQNB72+o+JQGdTH931IjOVLbd22C61S1em55vSWHNryq+DLDD+Z/EuBdarPhZmhzqV4YD+AhBX5Y4d4AECoDYiGCqg3ZgE9YMMCCj7rSz9TweH9TkljaIHVh1UhqzsHkX3mOoHalq23ysd4OMNA0jxvjKK8WIOE4XnvBEEyPgtMg1gdRmUaKNngmtcGAbi4JV7EKTe6HyfhFYDds/p0ioF330uPSEA7QwOx9JrRoQHMYakyNMut06OIlrqug8yKTQbfwGPEtiwBkPRjFQrTN1FMJoHGVsrzxErjb4wH1ioMSr7vQy9cf6V8TREtbi9H4nrrQLR7wPwEDgFTN4gHD/Q+NFGMy6RaeNDqQ8WS5uAZX8SVDDTPQbkU5kbB2R3GOzofwIZJ0amkpOeZi1dpgiHClS7WxwgrMxy4d4JIFAGhKPvDGCcemX8zSmCdP0U/EJaqq75GBpAnaq3zaeieKS7AbEKDythp/OYAC054TxW5HtvM3r3Nyafw9ZWzqB9x8A7ql6f7KkFfeaZSWtzon+R4lpzUt65+GJEDzdYeqTaCfZQ2iVY4JWeUqE4Xw0Dje7yIVSnaMnVRnANnpcaNubDy2pMz1yHeGiBYjYn8YlMs1DmanjtnQjPF6+y5Whxev8HSciwIjpn4z4mmMeEbzP8hx96bI562+oZPaXBK0LGnb/LiS0FuCNnrGaHpV3OzZABEscRSutrdXymACAFB2jpEN2CqZR5a9Y0GqGaXLCTXojCkHLgX6/UagXdai69I/TmrmNj6Pi61L2AJTfDO0TB8zy8RYOM0RwkVg2Fu6z6GH10V0G3tGALXAEEPZXXfwWG6B2a+ZpPvdMtNJT4nmbJ+IBByJSR2hyOZaQsq7e6r2HPd+mlF6bS4czkylLpoI+eHpGXZ6ratU7r9QlgER0SMCcHWX1HhtzIMzFWg4m55RyGyo+7/qMkeTGrstV+gS8J96jmhBcOMErSnarceJma66X+D5TkgvrsGZwOkdCX6Bp6+GmVBaUeVnqR4M/estGa0Bh4vw+8uCMLstG/8AiU6Zfps8mPqAZWd1fHE+gXkiGwKxTel14Qpqd+HxoZjjKbgId5NQaCNI9z6AYjQbE4JFTu23eYsOxDwHyD0EEgrYbXGmfODi33SrppEbUQtbRxXXxBo5tOv+Ia7Ht9SAdN3gQACgKCOJVq2obHz38BiLqLylgILAR4/fWEoyNRxGXXUrb2GUFII6jGAqlo3bjDd9CzjjHBNmHvLbVbo2TxApOCh0EVcqcnPFZf7mNFHcEnrA7goWF6Ad4GJOPDnoGuCAPS+1B6J/IC/kJyAI7xr6SYWtCVvV6owZVbe7Y/Pi6SwZZjZ97/FRWfeiyWDOeC5W8INWE1GBaDSSptuxHo85lOYE4uZs84OCS2Hb4nMl+AIJZKR1MJHs+5/kT0MmhHSWtaCm2p5ZSh0x4AUfxuCAWQ4/oy12jKbr+gSKraXhyavCAzQzXgSrQNdeb9F0qO8LlrfXXaOBD9YOvaDf3thLBanOFj7PmXQ+5KRiljWT9bI8GrWxyYACqAsfc6meUfuS7yHU1O/hT4Uui0dIpsxFFHHQrrKDFQHI1t3W9Q/jGwni7aHy8iILedq22vd+hjCtylROXXcysdDmMD5eUpwBld1xfpq/BdGosRpGYsiTdNGKz7xLJYS4cFRZq8n6jlLC4NksaV2MupEVueMy7zR5I9Su34953eRL4P1DkuHsxAQR0Ru/5FPWXoAjR7BGvE+b6EXdGnI8FqR57R8VytoFYCjgRG3qn6KmlEQD6s7j0NY1nLdOvBuCyLaUz3D1PWOz71LlZwTG4gnBM6HQ4MGtcApPBbQCtRLuIoqd7tLkJdTy1jpQaiUx6iNjfOxAd0V/znpBDd5EvNfpDC+dmfoIDYX6lMG9PqbJ6xvYjMeK2WTl8Xu8tCUWr0KlcsetsyAXx0TAowEAc91QQ8DrFdDaICgHFZbXIUgVK0VZ9CylDdjr/E1dZK+0ezCgwdCId42BJns3BaWAdGGn3qWTYE36mSAaHHQYm43OCh237QYgQYRKSWeFeZyZ85iqMOxVa8eETFF6TXx3hMglco75HvmVVbqvdNI6o+5BMN1SFDVIjBPGvQi/FtRO7KLtB8MgbvMAj54IubA5MQoO60jtg7y7TCYcUUL8yq0WWAPJce0xGDfEqNjZh4GPNHY6ecNXMvLast70NiYx1VS1uUq7OPSpiZmvVfR7BMj75LgsuvEyOImEUoJQ7xCrtY8TZix4VAbCd3L8SpGgrw0OdGoTA3XMDsFcgSmrHHaG55k/6U5Hzj/rR2z85ogdCemu6jlt8CajIKthfx0sap1ZrTIq+Rr1rwcq3FONtXzqokXEN3C2JYzSe/I/MGpyDhEa2vDrUsliuie5XxDiXtcmDkn+TR/QIYDcCnEwXpnJlZpikm3xehvEZvKL4bQbouvDPy0TJekxSHwPTyzL62WNh7BfOLGm1WQ4/oxTc4r4iIolJs+JMm9Y5zidxMQBYvKH85z28LRa+yMTUiLBHSE1eYvVAZssG3LkkOigUAYXlfvZc2Xd2CjUNZVBTxk0ekbAjgz492iXM4Y8s/mCxl5uLQ5r8LF/QmApjPt2DoNHt4aYoUfC69Y5iDIlLhbrKPuWirrUecYDwHyN2tbxMEN0r0Cctgh7PAuqUlfc4PMlVQXqC5cHr1iSNiXWTkylnDom/heHisr4796iFM4KxHOBIWdh+JYEHZ8xNO9RXPOYR9Upi4VlnNKq43UU82lVvOMFYDaJYy5LOVIHJdmj08L5I/Wce8QSyFvUrfuKjqaG7EUsI4SZloQujj5miMJol9MPmLH9FgLH117tMoXJFscatD69epZyTZiZTOWWxXWNcKtt8C+bXbwDgUDYAta3Y0Gvar5Ugm34OfK00WcQA58XpKJBwFX5E8/eI9z3IDiO5zid+NlfaDyKNw9IcaYTSjCck+TbwQdYRhLPKhbWuu8B4kGiNJtDQJA0FrLKFhzpTXtX0WILFHFRG3PBzXwoFxe4vDSDVqHoxpLuG8R4qZg1XsNvtFhDT+hGGOYaC3Jh+GYJkOjSacPeKgXFRPMlZqV37bA47svBIAFpriD8S55J/jYz4WaflRA2w6CaOjX2c4/1WfqA4TdVkIgs87g+SktUlqw6Au55AnrE6ap2uh7vn4+TF1ZVwuKADG0OIwyiV3tda/2L9dagVSvXyHOEWBYm54ANLatpWN4fI4vOYpcLnNBrd4Ecdr7BrAIKAoPAIJYGWUJtu/EMGn9DcMxSEIhNtI+54ZnWJXU3utIOqwywvu7neDf0LGoPYjsytSne7N30fRIZaDM08bUocB4Qkw2zWra2PIECpyt7mvL6BOdyGTkmSXIPQpBzUwd4d9KZ6aYbUY6c4dA7NOSAcyMjG5D023j3M+krrHJiEzWxuIxBa0IFOuontEWkVpwbEqmaEg3PTEQkGQlf6lEFAwBKA/ojYywcTlcxiF0igUpOsujFeHAbOEsJECkOEHftAi+QzzPKJGtYFfdWAg10VDnYz2i6gwtbanZ8Nq13kre55QEgUQLGix5VcyR/SrzBDtL/AGbVMegDzIAAAGAPpviaQ7Wg8tXymRRq8bQTUIQ3eUFdy88TB1cDSVlhxME4sN4tFjKmnN8Ie7fybrBXw1fHnKtSCNIKP6MRARxCAqmXB2Yi5tBlhEAF1fd/MQtByFdSdYbnFiy4Bg7sSoALrQeAcubygnyIVVkg5ggoHA+sSCp9tllOA3cvbmCJs9yZc0dGDcz0xFCh4tWUD2JeWsXwLYx0HgBbNoN4WENi25HKVhiEQK/pTSXGkOiBYvQ8GIlcB1CWTnmeYgHo6h4kyAbykdOJjD4UoNmX0YrhXotnGeK7sKIvtphzB2u/L+BBEdGAY1Vo86MekHd68XhVsDQIuqhvwtmcXZD0msBxDPnrGOZLjt526mDHxSaciVGkpP6itz8BRqhwAhLVeur/ANjxEUpQXZ6ImNLRSPJglViqzV11mYtSyvVZbu90g8C69dIF8FBvxV3X+LZ0b++w85ZhaH10Pf0iolWkVM9yHmy5HdsecJidhKBZCNP6oGBTicJT6G5oJjGvvSNoYndD5g7F+zcZ+DD2Ho49IAAAHD+JHaJTwCIApyQcDyCVQrA6P1lAwzKtU0Dh5y2sTlwTaVkCv6phzjd14BuxUWms0fnwao4/QZgWxZ0G/j+BAW6TVUO51A/RgaB1sX0uIbtADnNIoYS4FrgINdk+7f1h1pBIA/rCsCUdiPiqE5PFzZTNbAYT3dpcANYsEYxgUbAy/NPrY9YhS852O3Py4xj82bVyq7h4qOYUvSh7sqCWqu3+1HLdL7YM+9SkIaP61UQUgu+jL8HeBUwJVhd1FFNtO7CUtT4nRb9GsCTADQuCu3Ix9ZBiEHFDB51GytqdU2sGXVAyuR4Yy/59CpuKB1gbatPmTAY5ug15ygIaf1rqFtsHnk/EEZ3I73HxBMW2GEIB7t9oFfwXqqydGRaOf6KEMNQAHA+nr+/zJugVNqxpP650onBpescak0Hcf9iUwVvAgO9MG/4GFrqJ5YFI1S9E0S/A2IWigOKwEoa6G1pytYjXxQvrNDG4FRfNfiHH9dqRTl4Oj/QRYjVN4/jxJV6AGlG/WFLxWY9cI+kWF3zF7kxwxtR2PgsLfLLw/wBy5oYd4RqI0QljSwwHnBpswwNsN43npQF8zRD/AF4yvcJGerDr38jqxeaOqNZjY52vVtPSoKP643Al2hQQKXDsNk8NE6+oY6iPvMFD5M1bslzPXr4Lp5U/RIjr2S5/10/6aEAE1Sq7awWCa2A9iXmg/bjF39jzjwjuiI94vzOTbBUruA02CuLaDAoogo/rhZLBnKjYycuksCGxz0GXwnKXz8TrnXOudUZ6/D1x54tUFeBB6sb6uhCoEoD3lQhp/X2Yl9xqT1CxiTgZ8GvrF8z5UfWK0p1D4K236g+ZrnUCe7MfiK0PRM3J2/1K3pQQ+p6h8Qeo+sh1frBqy/05wiNnqvmMZTiZec0JiQUf2IsPUEF2nKiXpL7kOSC4QyhlDkhySnCV4SvD0leECbQzYgm0Kf2aXEu0F2id5WU8AeErwgJSVlfEpKP/AF3/AP/Z",
    _0x4f89ca = "legit",
    _0x42a380 = [
      {
        id: "legit",
        name: "Legit",
        config: {
          format: "crackyio-config",
          schema: 0x1,
          gameVersion: "10.0.7",
          scriptVersion: "10.0.7.1",
          settings: {
            aimbotEnabled: !![],
            aimbotOnRightMouse: ![],
            aimbotWallCheck: !![],
            aimbotWallBangs: ![],
            aimbotTeamCheck: !![],
            aimbotBotCheck: ![],
            superSilentEnabled: ![],
            autoFireEnabled: !![],
            fovSize: 0x1a,
            fovUnit: "half-angle-degrees",
            aimOffset: 0x0,
            drawFovCircle: !![],
            espLines: ![],
            espSquare: !![],
            espBones: !![],
            espHealthBar: !![],
            healthBarWidth: 0x4,
            healthBarShadow: !![],
            healthBarUseTheme: !![],
            espNameTags: !![],
            espWeaponIcons: !![],
            espInfoBackground: !![],
            espTeamCheck: !![],
            espBotCheck: ![],
            wireframeEnabled: ![],
            worldModulationEnabled: ![],
            worldColorOverride: !![],
            worldColor: "#00d0ff",
            worldTintStrength: 0x14,
            customFogEnabled: !![],
            fogColor: "#c2d9ee",
            fogNear: 0x64,
            fogFar: 0x5dc,
            chamsEnabled: !![],
            chamsVisible: !![],
            chamsOccluded: ![],
            chamsVisibleColor: "#ffb7d5",
            chamsOccludedColor: "#a9dcff",
            chamsOpacity: 0x46,
            chamsUseTheme: !![],
            chamsFade: ![],
            chamsFadeSeconds: 0x3,
            weaponChamsEnabled: !![],
            weaponChamsUseTheme: !![],
            weaponChamsColor: "#ffb7d5",
            weaponChamsEndColor: "#a9dcff",
            weaponChamsFade: ![],
            weaponChamsOpacity: 0x55,
            glowEspEnabled: !![],
            glowUseTheme: !![],
            glowColor: "#4677ff",
            glowOpacity: 0x23,
            glowSize: 0x6,
            walkingTrailsEnabled: !![],
            walkingTrailsOthers: ![],
            walkingTrailSeconds: 0x2,
            walkingTrailWidth: 2.5,
            trailUseTheme: !![],
            trailColor: "#ffb7d5",
            trailEndColor: "#a9dcff",
            bulletTracersEnabled: !![],
            bulletTracersOthers: ![],
            bulletTracerSeconds: 0.8,
            bulletTracerWidth: 0x2,
            nameProtectEnabled: !![],
            nameProtectAlias: "crackyio\x20-\x20legit",
            unlockSkins: !![],
            bhopEnabled: !![],
            antiAimEnabled: ![],
            espColor: "#ffb7d5",
            boxColor: "#a9dcff",
            botColor: "#00ff80",
            autoNuke: !![],
            antikick: !![],
            autoReload: !![],
            instantReload: ![],
            legitAimbot: !![],
            flickSpeed: 0x8,
            adsTremorReduction: 0x2a,
            aimRandomness: 1.5,
            aimTremor: 0.9,
            thirdPersonEnabled: ![],
            alwaysTrail: !![],
            weaponZoom: 0x1,
            themeId: "cotton-candy",
            customGuiPrimary: "#ffb7d5",
            customGuiSecondary: "#a9dcff",
            customGuiSurface: "#171d2e",
            guiLayout: "dropdown",
            espUseTheme: !![],
            themeHudEnabled: !![],
            arrayListEnabled: ![],
            arrayListColor: "#4677ff",
            arrayListShowModes: !![],
            arrayListFontSize: 0xe,
            arrayListOpacity: 0x44,
            watermarkEnabled: !![],
            watermarkMode: "crackyio",
            tabGuiEnabled: ![],
            tabGuiColor: "#4677ff",
            espBoxStyle: "corners",
            localWeaponSkin: -0x1,
            localMeleeSkin: 0x972,
            localHatSkin: -0x1,
            localHeadSkin: -0x1,
            localFaceSkin: -0x1,
            localBodySkin: -0x1,
            localBackSkin: -0x1,
            localDyeSkin: -0x1,
            localWaistSkin: -0x1,
            localShoeSkin: -0x1,
            localPetSkin: -0x1,
            localWristSkin: -0x1,
          },
          hotkeys: {
            toggleMenu: "F1",
            aimbotEnabled: "KeyY",
            espSquare: "F3",
            bhopEnabled: "F4",
            autoFireEnabled: "KeyY",
            superSilentEnabled: "",
            thirdPersonEnabled: "KeyV",
            antiAimEnabled: "F7",
            wireframeEnabled: "",
            unlockSkins: "",
            aimbotTeamCheck: "",
            espTeamCheck: "",
            aimbotBotCheck: "",
            espBotCheck: "",
            aimbotWallCheck: "",
            aimbotWallBangs: "",
            espLines: "",
            espNameTags: "",
            espWeaponIcons: "",
          },
          panelPositions: {
            "dropdown:anonimbiri-tab-misc": {
              x: -173.03609692832583,
              y: 97.51866507498256,
            },
            "dropdown:anonimbiri-tab-visuals": {
              x: 419.91713311993544,
              y: 58.32041254984311,
            },
            "dropdown:anonimbiri-tab-aimbot": {
              x: -122.85872810176616,
              y: 61.638987890592084,
            },
            "dropdown:anonimbiri-tab-configs": {
              x: 224.7659160976828,
              y: 113.63193261414686,
            },
            "liquidbounce:cracky-liquid-configs": {
              x: -302.8673835125448,
              y: -513.5175738182415,
            },
          },
        },
      },
      {
        id: "rage",
        name: "Rage",
        config: {
          format: "crackyio-config",
          schema: 0x1,
          gameVersion: "10.0.7",
          scriptVersion: "10.0.7.1",
          settings: {
            aimbotEnabled: !![],
            aimbotOnRightMouse: ![],
            aimbotWallCheck: !![],
            aimbotWallBangs: !![],
            aimbotTeamCheck: !![],
            aimbotBotCheck: !![],
            superSilentEnabled: !![],
            autoFireEnabled: !![],
            fovSize: 0xb4,
            fovUnit: "half-angle-degrees",
            aimOffset: 0x0,
            drawFovCircle: !![],
            espLines: ![],
            espSquare: !![],
            espBones: !![],
            espHealthBar: !![],
            healthBarWidth: 0x4,
            healthBarShadow: !![],
            healthBarUseTheme: !![],
            espNameTags: !![],
            espWeaponIcons: !![],
            espInfoBackground: !![],
            espTeamCheck: !![],
            espBotCheck: ![],
            wireframeEnabled: ![],
            worldModulationEnabled: ![],
            worldColorOverride: !![],
            worldColor: "#00d0ff",
            worldTintStrength: 0x14,
            customFogEnabled: ![],
            fogColor: "#c2d9ee",
            fogNear: 0x64,
            fogFar: 0x5dc,
            chamsEnabled: !![],
            chamsVisible: !![],
            chamsOccluded: ![],
            chamsVisibleColor: "#ffb7d5",
            chamsOccludedColor: "#a9dcff",
            chamsOpacity: 0x46,
            chamsUseTheme: !![],
            chamsFade: ![],
            chamsFadeSeconds: 0x3,
            weaponChamsEnabled: !![],
            weaponChamsUseTheme: !![],
            weaponChamsColor: "#ffb7d5",
            weaponChamsEndColor: "#a9dcff",
            weaponChamsFade: ![],
            weaponChamsOpacity: 0x55,
            glowEspEnabled: ![],
            glowUseTheme: !![],
            glowColor: "#4677ff",
            glowOpacity: 0x23,
            glowSize: 0x6,
            walkingTrailsEnabled: !![],
            walkingTrailsOthers: ![],
            walkingTrailSeconds: 0x2,
            walkingTrailWidth: 2.5,
            trailUseTheme: !![],
            trailColor: "#ffb7d5",
            trailEndColor: "#a9dcff",
            bulletTracersEnabled: !![],
            bulletTracersOthers: ![],
            bulletTracerSeconds: 0.8,
            bulletTracerWidth: 0x2,
            nameProtectEnabled: !![],
            nameProtectAlias: "crackyio\x20-\x20rage",
            unlockSkins: !![],
            bhopEnabled: !![],
            antiAimEnabled: ![],
            espColor: "#ffb7d5",
            boxColor: "#a9dcff",
            botColor: "#00ff80",
            autoNuke: !![],
            antikick: !![],
            autoReload: !![],
            instantReload: !![],
            legitAimbot: !![],
            flickSpeed: 0x37,
            adsTremorReduction: 0x32,
            aimRandomness: 1.5,
            aimTremor: 0.1,
            thirdPersonEnabled: ![],
            alwaysTrail: !![],
            weaponZoom: 0x1,
            themeId: "liquidbounce",
            customGuiPrimary: "#ffb7d5",
            customGuiSecondary: "#a9dcff",
            customGuiSurface: "#171d2e",
            guiLayout: "liquidbounce",
            espUseTheme: !![],
            themeHudEnabled: !![],
            arrayListEnabled: !![],
            arrayListColor: "#4677ff",
            arrayListShowModes: !![],
            arrayListFontSize: 0xe,
            arrayListOpacity: 0x44,
            watermarkEnabled: !![],
            watermarkMode: "liquidbounce",
            tabGuiEnabled: !![],
            tabGuiColor: "#4677ff",
            espBoxStyle: "corners",
            localWeaponSkin: -0x1,
            localMeleeSkin: 0x972,
            localHatSkin: -0x1,
            localHeadSkin: -0x1,
            localFaceSkin: -0x1,
            localBodySkin: -0x1,
            localBackSkin: -0x1,
            localDyeSkin: -0x1,
            localWaistSkin: -0x1,
            localShoeSkin: -0x1,
            localPetSkin: -0x1,
            localWristSkin: -0x1,
          },
          hotkeys: {
            toggleMenu: "F1",
            aimbotEnabled: "KeyY",
            espSquare: "F3",
            bhopEnabled: "F4",
            autoFireEnabled: "KeyY",
            superSilentEnabled: "",
            thirdPersonEnabled: "KeyV",
            antiAimEnabled: "F7",
            wireframeEnabled: "",
            unlockSkins: "",
            aimbotTeamCheck: "",
            espTeamCheck: "",
            aimbotBotCheck: "",
            espBotCheck: "",
            aimbotWallCheck: "",
            aimbotWallBangs: "",
            espLines: "",
            espNameTags: "",
            espWeaponIcons: "",
          },
          panelPositions: {
            "dropdown:anonimbiri-tab-misc": {
              x: -173.03609692832583,
              y: 97.51866507498256,
            },
            "dropdown:anonimbiri-tab-visuals": {
              x: 419.91713311993544,
              y: 58.32041254984311,
            },
            "dropdown:anonimbiri-tab-aimbot": {
              x: 85.02657655773203,
              y: 83.14757736989016,
            },
            "dropdown:anonimbiri-tab-configs": {
              x: 224.7659160976828,
              y: 113.63193261414686,
            },
            "liquidbounce:cracky-liquid-configs": {
              x: -302.8673835125448,
              y: -513.5175738182415,
            },
          },
        },
      },
    ],
    _0x1b6bde = [
      ["localWeaponSkin", "Weapon\x20skin", 0x0, null],
      ["localMeleeSkin", "Melee", 0x3, "meleeIndex"],
      ["localHatSkin", "Hat", 0x1, "hatIndex"],
      ["localHeadSkin", "Head", 0xf, "headIndex"],
      ["localFaceSkin", "Face", 0x7, "faceIndex"],
      ["localBodySkin", "Body", 0x2, "bodyIndex"],
      ["localBackSkin", "Back", 0xe, "backIndex"],
      ["localDyeSkin", "Dye", 0x5, "dyeIndex"],
      ["localWaistSkin", "Waist", 0x6, "waistIndex"],
      ["localShoeSkin", "Shoes", 0x8, "shoeIndex"],
      ["localPetSkin", "Pet", 0x9, "petIndex"],
      ["localWristSkin", "Wrist", 0xb, "wristIndex"],
    ],
    _0x3f6a85 = [
      ["Aurora", 0x91, 0x10e],
      ["Ocean", 0xc3, 0xe1],
      ["Sunset", 0xf, 0x14a],
      ["Peach", 0x16, 0x159],
      ["Lavender", 0x109, 0x13b],
      ["Mint", 0x96, 0xbe],
      ["Neon", 0x131, 0xb4],
      ["Ember", 0x8, 0x2d],
      ["Forest", 0x78, 0xaa],
      ["Galaxy", 0xf0, 0x136],
      ["Rose", 0x159, 0x11d],
      ["Arctic", 0xb9, 0xdc],
      ["Sakura", 0x14f, 0xf],
      ["Lemon", 0x37, 0x69],
      ["Lagoon", 0xaa, 0xcd],
      ["Violet", 0x118, 0xe1],
      ["Coral", 0x5, 0x1e],
      ["Jade", 0x9b, 0x50],
      ["Cyber", 0xb9, 0x11d],
      ["Ruby", 0x15e, 0x19],
      ["Amber", 0x28, 0x41],
      ["Sapphire", 0xdc, 0xb4],
      ["Orchid", 0x122, 0x154],
      ["Dusk", 0xff, 0x14],
      ["Prism", 0x46, 0x118],
    ],
    _0x10675e = [
      ["Pastel", 0x48, 0x4e],
      ["Bloom", 0x52, 0x46],
      ["Electric", 0x5f, 0x40],
      ["Mist", 0x30, 0x50],
      ["Velvet", 0x3e, 0x41],
    ],
    _0x28450c = (_0x3785a5, _0x2deec6, _0x59a4cc) => {
      ((_0x2deec6 /= 0x64), (_0x59a4cc /= 0x64));
      const _0x51ad1f = _0x2deec6 * Math["min"](_0x59a4cc, 0x1 - _0x59a4cc),
        _0x49e011 = (_0x15888d) => {
          const _0x1bde45 = (_0x15888d + _0x3785a5 / 0x1e) % 0xc;
          return Math["round"](
            0xff *
              (_0x59a4cc -
                _0x51ad1f *
                  Math["max"](
                    -0x1,
                    Math["min"](_0x1bde45 - 0x3, 0x9 - _0x1bde45, 0x1),
                  )),
          )
            ["toString"](0x10)
            ["padStart"](0x2, "0");
        };
      return "#" + _0x49e011(0x0) + _0x49e011(0x8) + _0x49e011(0x4);
    },
    _0x3845c3 = [
      {
        id: "cotton-candy",
        name: "Cotton\x20Candy",
        primary: "#ffb7d5",
        secondary: "#a9dcff",
        surface: "#171d2e",
        midpoint: "#d8c7f5",
      },
    ];
  for (const [_0xc892ec, _0x314c42, _0x4b014f] of _0x3f6a85) {
    for (const [_0x68da83, _0x1adbaf, _0x4b9256] of _0x10675e) {
      const _0x1365b8 =
        (_0x314c42 +
          (((_0x4b014f - _0x314c42 + 0x21c) % 0x168) - 0xb4) / 0x2 +
          0x168) %
        0x168;
      _0x3845c3["push"]({
        id: (_0xc892ec + "-" + _0x68da83)["toLowerCase"](),
        name: _0xc892ec + "\x20" + _0x68da83,
        primary: _0x28450c(_0x314c42, _0x1adbaf, _0x4b9256),
        secondary: _0x28450c(_0x4b014f, _0x1adbaf, _0x4b9256),
        midpoint: _0x28450c(_0x1365b8, _0x1adbaf * 0.7, _0x4b9256),
        surface: _0x28450c(_0x314c42, 0x18, 0x9),
      });
    }
  }
  _0x3845c3["push"]({
    id: "liquidbounce",
    name: "LiquidBounce",
    primary: "#4677ff",
    secondary: "#4677ff",
    midpoint: "#4677ff",
    surface: "#101626",
  });
  const _0x5cbe53 = [
      ["classic", "Static\x20Classic"],
      ["classic-dynamic", "Classic\x20Dynamic"],
      ["dot", "Static\x20Dot"],
      ["circle", "Static\x20Circle"],
      ["circle-dynamic", "Dynamic\x20Circle"],
      ["square", "Static\x20Square"],
      ["square-dynamic", "Dynamic\x20Square"],
      ["quad", "Static\x20Quad"],
      ["quad-dynamic", "Dynamic\x20Quad"],
      ["quadrant", "Static\x20Quadrant"],
    ],
    _0x4cfe6c = [
      [
        "select",
        "crosshairStyle",
        "Style",
        "Static\x20shapes\x20or\x20read-only\x20native\x20spread\x20expansion.",
        _0x5cbe53,
      ],
      [
        "slider",
        "crosshairLength",
        "Arm\x20Length",
        "Pixels\x20at\x20the\x20reference\x20resolution.",
        0x0,
        0x40,
        0.5,
      ],
      [
        "slider",
        "crosshairThickness",
        "Thickness",
        "Bar/ring\x20thickness\x20in\x20pixels.",
        0.5,
        0xc,
        0.5,
      ],
      [
        "slider",
        "crosshairGap",
        "Center\x20Gap",
        "Distance\x20from\x20the\x20center\x20to\x20each\x20arm;\x20negative\x20values\x20overlap\x20the\x20center.",
        -0x14,
        0x40,
        0.5,
      ],
      [
        "toggle",
        "crosshairLinkAxes",
        "Link\x20Axis\x20Lengths",
        "Off\x20allows\x20a\x20separate\x20vertical\x20arm\x20length.",
      ],
      [
        "slider",
        "crosshairVerticalLength",
        "Vertical\x20Length",
        "Independent\x20vertical\x20arms.",
        0x0,
        0x40,
        0.5,
      ],
      ["toggle", "crosshairTop", "Top\x20Arm"],
      ["toggle", "crosshairBottom", "Bottom\x20Arm"],
      ["toggle", "crosshairLeft", "Left\x20Arm"],
      ["toggle", "crosshairRight", "Right\x20Arm"],
      [
        "slider",
        "crosshairRotation",
        "Rotation\x20(°)",
        "45°\x20turns\x20the\x20classic\x20cross\x20into\x20an\x20X.",
        0x0,
        0x168,
        0x1,
      ],
      [
        "slider",
        "crosshairScale",
        "Overall\x20Scale",
        "Scale\x20every\x20shape,\x20dot\x20and\x20outline\x20together.",
        0.25,
        0x3,
        0.05,
      ],
      [
        "toggle",
        "crosshairResolutionScale",
        "Resolution-independent\x20Size",
        "Use\x20a\x201080px-high\x20reference.\x20Off\x20uses\x20fixed\x20CSS\x20pixels;\x20browser\x20pixel\x20density\x20is\x20handled\x20separately.",
      ],
      [
        "slider",
        "crosshairOffsetX",
        "Horizontal\x20Offset",
        "Reference\x20pixels;\x20positive\x20moves\x20right.",
        -0xc8,
        0xc8,
        0x1,
      ],
      [
        "slider",
        "crosshairOffsetY",
        "Vertical\x20Offset",
        "Reference\x20pixels;\x20positive\x20moves\x20down.",
        -0xc8,
        0xc8,
        0x1,
      ],
      ["toggle", "crosshairUseTheme", "Use\x20Theme\x20Colors"],
      ["color", "crosshairColor", "Primary\x20Color"],
      ["toggle", "crosshairGradient", "Color\x20Gradient"],
      ["color", "crosshairEndColor", "Gradient\x20End\x20Color"],
      [
        "slider",
        "crosshairOpacity",
        "Opacity\x20%",
        "0\x20is\x20intentionally\x20invisible\x20but\x20still\x20replaces\x20the\x20native\x20crosshair.",
        0x0,
        0x64,
        0x1,
      ],
      ["toggle", "crosshairDot", "Center\x20Dot"],
      [
        "select",
        "crosshairDotShape",
        "Dot\x20Shape",
        "",
        [
          ["circle", "Circle"],
          ["square", "Square"],
        ],
      ],
      [
        "slider",
        "crosshairDotSize",
        "Dot\x20Size",
        "Dot\x20diameter/side\x20length\x20in\x20pixels.",
        0.5,
        0x10,
        0.5,
      ],
      ["toggle", "crosshairDotOwnColor", "Separate\x20Dot\x20Color"],
      ["color", "crosshairDotColor", "Dot\x20Color"],
      [
        "select",
        "crosshairOutline",
        "Outline",
        "Half\x20outlines\x20cover\x20only\x20the\x20top/left\x20edges.",
        [
          ["off", "Off"],
          ["full", "Full"],
          ["half", "Half\x20·\x20top/left"],
        ],
      ],
      [
        "slider",
        "crosshairOutlineWidth",
        "Outline\x20Width",
        "Pixels\x20around\x20the\x20shape.",
        0.5,
        0x6,
        0.5,
      ],
      ["color", "crosshairOutlineColor", "Outline\x20Color"],
      [
        "slider",
        "crosshairOutlineOpacity",
        "Outline\x20Opacity\x20%",
        "Multiplied\x20by\x20overall\x20opacity.",
        0x0,
        0x64,
        0x1,
      ],
      ["toggle", "crosshairShadow", "Drop\x20Shadow"],
      [
        "slider",
        "crosshairShadowBlur",
        "Shadow\x20Blur",
        "Pixels.",
        0x0,
        0x18,
        0x1,
      ],
      ["color", "crosshairShadowColor", "Shadow\x20Color"],
      [
        "slider",
        "crosshairSpreadScale",
        "Dynamic\x20Spread\x20Scale",
        "Scales\x20the\x20native\x20angular\x20spread\x20projected\x20into\x20screen\x20pixels.\x20This\x20is\x20a\x20spread\x20envelope,\x20not\x20a\x20prediction\x20of\x20the\x20next\x20bullet.",
        0x0,
        0x3,
        0.05,
      ],
      [
        "slider",
        "crosshairSpreadLimit",
        "Dynamic\x20Spread\x20Limit",
        "Maximum\x20extra\x20gap/radius\x20in\x20reference\x20pixels;\x200\x20keeps\x20it\x20static.",
        0x0,
        0x80,
        0x1,
      ],
      [
        "slider",
        "crosshairSmoothing",
        "Spread\x20Smoothing\x20(ms)",
        "0\x20follows\x20spread\x20immediately;\x20higher\x20values\x20ease\x20expansion/contraction.",
        0x0,
        0x1f4,
        0xa,
      ],
      [
        "toggle",
        "crosshairFollowRecoil",
        "Follow\x20Visual\x20Recoil",
        "Read-only\x20pitch-kick\x20indicator.\x20Does\x20not\x20compensate\x20recoil\x20or\x20predict\x20a\x20hit.",
      ],
      ["toggle", "crosshairShowMelee", "Show\x20With\x20Melee"],
      ["toggle", "crosshairHideReload", "Hide\x20While\x20Reloading"],
      ["toggle", "crosshairHideWithGui", "Hide\x20With\x20Click\x20GUI"],
      [
        "select",
        "crosshairScopedMode",
        "When\x20Scoped",
        "Draw\x20Crosshair\x20under\x20No\x20Scope\x20Overlay\x20overrides\x20Hidden.",
        [
          ["same", "Same\x20Crosshair"],
          ["dot", "Scope\x20Dot"],
          ["hidden", "Hidden"],
        ],
      ],
      [
        "slider",
        "crosshairScopeDotSize",
        "Scope\x20Dot\x20Size",
        "Independent\x20scoped\x20dot\x20diameter\x20in\x20pixels.",
        0.5,
        0x10,
        0.5,
      ],
      ["toggle", "crosshairScopeUseTheme", "Scope\x20Dot\x20Theme\x20Color"],
      ["color", "crosshairScopeColor", "Scope\x20Dot\x20Color"],
    ],
    _0x4aa775 = Object["fromEntries"](
      _0x4cfe6c["filter"]((_0x1c7ef2) => _0x1c7ef2[0x0] === "slider")["map"](
        ([, _0xdf3e5e, , , _0x4daca2, _0x1dacbb]) => [
          _0xdf3e5e,
          [_0x4daca2, _0x1dacbb],
        ],
      ),
    ),
    _0x26280a = Object["fromEntries"](
      _0x4cfe6c["filter"]((_0x34324) => _0x34324[0x0] === "select")["map"](
        ([, _0x6118f0, , , _0x1f2180]) => [
          _0x6118f0,
          _0x1f2180["map"]((_0x14bda8) => _0x14bda8[0x0]),
        ],
      ),
    ),
    _0x101c16 = [
      {
        name: "Aimbot",
        category: "Combat",
        setting: "aimbotEnabled",
        options: [
          "aimbotOnRightMouse",
          "aimbotWallCheck",
          "aimbotWallBangs",
          "aimbotTeamCheck",
          "aimbotBotCheck",
          "legitAimbot",
          "flickSpeed",
          "adsTremorReduction",
          "aimRandomness",
          "aimTremor",
          "fovSize",
        ],
      },
      {
        name: "Auto\x20Fire",
        category: "Combat",
        setting: "autoFireEnabled",
        options: ["autoFireSeedEnabled"],
      },
      {
        name: "Rapid\x20Fire",
        category: "Combat",
        setting: "rapidFireEnabled",
        options: ["rapidFireMultiplier"],
      },
      { name: "No\x20Recoil", category: "Combat", setting: "noRecoilEnabled" },
      {
        name: "MagicBullet",
        category: "Combat",
        setting: "magicBulletEnabled",
      },
      {
        name: "Super\x20Silent",
        category: "Combat",
        setting: "superSilentEnabled",
      },
      { name: "Anti-Aim", category: "Combat", setting: "antiAimEnabled" },
      { name: "Bunny\x20Hop", category: "Movement", setting: "bhopEnabled" },
      {
        name: "Speed",
        category: "Movement",
        setting: "speedEnabled",
        options: ["speedMultiplier"],
      },
      {
        name: "Third\x20Person",
        category: "Player",
        setting: "thirdPersonEnabled",
        options: ["weaponZoom"],
      },
      {
        name: "NameProtect",
        category: "Player",
        setting: "nameProtectEnabled",
        options: ["nameProtectAlias"],
      },
      {
        name: "World\x20Modulation",
        category: "World",
        setting: "worldModulationEnabled",
        options: ["worldColorOverride", "worldColor", "worldTintStrength"],
      },
      {
        name: "Custom\x20Fog",
        category: "World",
        setting: "customFogEnabled",
        options: ["fogColor", "fogNear", "fogFar"],
      },
      {
        name: "ESP",
        category: "Render",
        setting: "espSquare",
        options: [
          "espTeamCheck",
          "espBotCheck",
          "espUseTheme",
          "espColor",
          "boxColor",
          "botColor",
        ],
      },
      { name: "Bones", category: "Render", setting: "espBones" },
      {
        name: "Health\x20Bar",
        category: "Render",
        setting: "espHealthBar",
        options: ["healthBarWidth", "healthBarShadow", "healthBarUseTheme"],
      },
      { name: "Tracers", category: "Render", setting: "espLines" },
      {
        name: "Name\x20Tags",
        category: "Render",
        setting: "espNameTags",
        options: ["espInfoBackground"],
      },
      {
        name: "Weapon\x20Icons",
        category: "Render",
        setting: "espWeaponIcons",
      },
      {
        name: "Chams",
        category: "Render",
        setting: "chamsEnabled",
        options: [
          "chamsVisible",
          "chamsVisibleColor",
          "chamsOccluded",
          "chamsOccludedColor",
          "chamsOpacity",
          "chamsUseTheme",
          "chamsFade",
          "chamsFadeSeconds",
        ],
      },
      {
        name: "Weapon\x20Chams",
        category: "Render",
        setting: "weaponChamsEnabled",
        options: [
          "weaponChamsUseTheme",
          "weaponChamsColor",
          "weaponChamsEndColor",
          "weaponChamsFade",
          "weaponChamsOpacity",
        ],
      },
      {
        name: "Glow\x20ESP",
        category: "Render",
        setting: "glowEspEnabled",
        options: ["glowUseTheme", "glowColor", "glowOpacity", "glowSize"],
      },
      {
        name: "Trails",
        category: "Render",
        setting: "walkingTrailsEnabled",
        options: [
          "walkingTrailsOthers",
          "walkingTrailSeconds",
          "walkingTrailWidth",
          "trailUseTheme",
          "trailColor",
          "trailEndColor",
        ],
      },
      {
        name: "Bullet\x20Tracers",
        category: "Render",
        setting: "bulletTracersEnabled",
        options: [
          "bulletTracersOthers",
          "bulletTracerSeconds",
          "bulletTracerWidth",
        ],
      },
      { name: "FOV\x20Circle", category: "Render", setting: "drawFovCircle" },
      { name: "Wireframe", category: "Render", setting: "wireframeEnabled" },
      { name: "Weapon\x20Trails", category: "Render", setting: "alwaysTrail" },
      { name: "Theme\x20HUD", category: "Render", setting: "themeHudEnabled" },
      {
        name: "No\x20Scope\x20Overlay",
        category: "Render",
        setting: "noScopeOverlayEnabled",
        options: ["noScopeCrosshairEnabled"],
      },
      {
        name: "Customcrosshair",
        category: "Render",
        setting: "customCrosshairEnabled",
        options: _0x4cfe6c["map"]((_0x8a2e5c) => _0x8a2e5c[0x1]),
      },
      {
        name: "No\x20Zoom",
        category: "Render",
        setting: "noZoomEnabled",
        options: ["noZoomStrength"],
      },
      {
        name: "ArrayList",
        category: "Render",
        setting: "arrayListEnabled",
        options: [
          "arrayListColor",
          "arrayListShowModes",
          "arrayListFontSize",
          "arrayListOpacity",
        ],
        hud: ![],
      },
      {
        name: "Watermark",
        category: "Render",
        setting: "watermarkEnabled",
        options: ["watermarkMode"],
        hud: ![],
      },
      {
        name: "TabGUI",
        category: "Render",
        setting: "tabGuiEnabled",
        options: ["tabGuiColor"],
        hud: ![],
      },
      { name: "Anti\x20Kick", category: "Misc", setting: "antikick" },
      {
        name: "Killsay",
        category: "Misc",
        setting: "killsayEnabled",
        options: ["killsayMode", "killsayMessage", "killsayCooldown"],
      },
      { name: "Auto\x20Reload", category: "Misc", setting: "autoReload" },
      { name: "Instant\x20Reload", category: "Misc", setting: "instantReload" },
      { name: "Auto\x20Nuke", category: "Misc", setting: "autoNuke" },
      {
        name: "Unlock\x20All\x20·\x20local",
        category: "Misc",
        setting: "unlockSkins",
        options: _0x1b6bde["map"]((_0x1f9352) => _0x1f9352[0x0]),
      },
      {
        name: "Click\x20GUI",
        category: "Configs",
        options: ["customGuiPrimary", "customGuiSecondary", "customGuiSurface"],
        hud: ![],
      },
    ],
    _0x4298fa = {
      Combat:
        "<path\x20d=\x22m4\x204\x2016\x2016M4\x2020\x2020\x204M3\x2016l5\x205M16\x203l5\x205\x22/>",
      Movement:
        "<path\x20d=\x22m5\x2014\x205-4\x204\x203\x205-1M9\x2020l4-7M6\x206l6\x202\x203-4\x22/><circle\x20cx=\x2217\x22\x20cy=\x223\x22\x20r=\x221\x22/>",
      Player:
        "<circle\x20cx=\x2212\x22\x20cy=\x227\x22\x20r=\x224\x22/><path\x20d=\x22M4\x2022v-3a8\x208\x200\x200\x201\x2016\x200v3\x22/>",
      World:
        "<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x229\x22/><path\x20d=\x22M3\x2012h18M12\x203a18\x2018\x200\x200\x200\x200\x2018\x2018\x2018\x200\x200\x200\x200-18\x22/>",
      Render:
        "<path\x20d=\x22M2\x2012s4-7\x2010-7\x2010\x207\x2010\x207-4\x207-10\x207S2\x2012\x202\x2012Z\x22/><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x223\x22/>",
      Misc: "<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x229\x22/><path\x20d=\x22M10\x209a2\x202\x200\x201\x201\x203\x202l-1\x201v2M12\x2017v1\x22/>",
      Configs:
        "<path\x20d=\x22M4\x204h16v16H4zM8\x204v6h8V4M8\x2020v-6h8v6\x22/>",
    },
    _0x3caafe = Object["freeze"]([
      "{name}\x20clipped\x20btw",
      "@{name},\x20get\x20good\x20get\x20crackyio",
      "{name}\x20you\x20should\x20check\x20out\x20crackyio\x20on\x20yt",
      ...[
        "your\x20peek",
        "your\x20push",
        "that\x20swing",
        "that\x20rush",
        "that\x20challenge",
        "your\x20flank",
        "that\x20duel",
        "your\x20entry",
        "that\x20attempt",
        "your\x20rotation",
        "that\x20angle",
        "your\x20timing",
        "that\x20wide\x20peek",
        "your\x20comeback",
        "that\x20re-peek",
        "your\x20shortcut",
        "that\x20jump",
        "your\x20strafe",
        "that\x20surprise\x20push",
        "your\x20speedrun",
      ]["flatMap"]((_0x574a2d) =>
        [
          "became\x20a\x20clip.",
          "went\x20into\x20the\x20montage.",
          "needs\x20a\x20replay.",
          "just\x20met\x20crackyio.",
          "ended\x20at\x20spawn.",
          "donated\x20a\x20highlight.",
          "was\x20a\x20free\x20highlight.",
          "got\x20a\x20ticket\x20to\x20spawn.",
          "took\x20the\x20spawn\x20express.",
          "gave\x20the\x20editor\x20footage.",
        ]["map"]((_0x56fe17) => "{name},\x20" + _0x574a2d + "\x20" + _0x56fe17),
      ),
    ]);
  class _0x3f2060 {
    constructor() {
      (console["log"]("🌸\x20cracky.io:\x20Initializing..."),
        (this["pageWindow"] =
          typeof unsafeWindow !== "undefined" ? unsafeWindow : window),
        (this["GUI"] = {}),
        (this["game"] = null),
        (this["me"] = null),
        (this["renderer"] = null),
        (this["controls"] = null),
        (this["overlay"] = null),
        (this["ctx"] = null),
        (this["hookedPlayers"] = new WeakSet()),
        (this["failedHooks"] = new Set()),
        (this["hookErrors"] = new Map()),
        (this["hookStatus"] = "waiting\x20for\x20game"),
        (this["playerMaps"] = []),
        (this["scale"] = 0x1),
        (this["three"] = null),
        (this["vars"] = { pchObjc: "pchObjc", weaponIndex: "loadoutIndex" }),
        (this["exports"] = null),
        (this["weaponIconCache"] = {}),
        (this["notifyContainer"] = null),
        (this["legitTarget"] = null),
        (this["lastAimTarget"] = null),
        (this["lastTargetChangeTime"] = 0x0),
        (this["aimOffset"] = { x: 0x0, y: 0x0 }),
        (this["lastWireframeState"] = null),
        (this["PLAYER_HEIGHT"] = 0xb),
        (this["PLAYER_WIDTH"] = 0x4),
        (this["CROUCH_FACTOR"] = 0x3),
        (this["BOT_CROUCH_FACTOR"] = 0x2),
        (this["CAMERA_HEIGHT"] = 1.5),
        (this["tempVector"] = null),
        (this["cameraPos"] = null),
        (this["isProxy"] = Symbol("isProxy")),
        (this["rightMouseDown"] = ![]),
        (this["isBindingHotkey"] = ![]),
        (this["currentBindingSetting"] = null),
        (this["pressedKeys"] = new Set()),
        (this["espPreviewCanvas"] = null),
        (this["espPreviewCtx"] = null),
        (this["espCharImg"] = null),
        (this["espCharLoaded"] = ![]),
        (this["espWeaponImg"] = null),
        (this["espWeaponLoaded"] = ![]),
        (this["defaultSettings"] = {
          aimbotEnabled: !![],
          aimbotOnRightMouse: ![],
          aimbotWallCheck: !![],
          aimbotWallBangs: ![],
          aimbotTeamCheck: !![],
          aimbotBotCheck: !![],
          superSilentEnabled: ![],
          autoFireEnabled: ![],
          autoFireSeedEnabled: ![],
          rapidFireEnabled: ![],
          rapidFireMultiplier: 0x2,
          noRecoilEnabled: ![],
          noScopeOverlayEnabled: ![],
          noScopeCrosshairEnabled: ![],
          customCrosshairEnabled: ![],
          crosshairStyle: "quad-dynamic",
          crosshairLength: 0x8,
          crosshairVerticalLength: 0x8,
          crosshairThickness: 0x2,
          crosshairGap: 0x4,
          crosshairLinkAxes: !![],
          crosshairTop: !![],
          crosshairBottom: !![],
          crosshairLeft: !![],
          crosshairRight: !![],
          crosshairRotation: 0x0,
          crosshairScale: 0x1,
          crosshairResolutionScale: !![],
          crosshairOffsetX: 0x0,
          crosshairOffsetY: 0x0,
          crosshairUseTheme: ![],
          crosshairColor: "#00ff88",
          crosshairGradient: ![],
          crosshairEndColor: "#a9dcff",
          crosshairOpacity: 0x64,
          crosshairDot: ![],
          crosshairDotShape: "circle",
          crosshairDotSize: 0x3,
          crosshairDotOwnColor: ![],
          crosshairDotColor: "#ffffff",
          crosshairOutline: "full",
          crosshairOutlineWidth: 0x1,
          crosshairOutlineColor: "#000000",
          crosshairOutlineOpacity: 0x64,
          crosshairShadow: ![],
          crosshairShadowBlur: 0x6,
          crosshairShadowColor: "#000000",
          crosshairSpreadScale: 0x1,
          crosshairSpreadLimit: 0x40,
          crosshairSmoothing: 0x50,
          crosshairFollowRecoil: ![],
          crosshairShowMelee: !![],
          crosshairHideReload: ![],
          crosshairHideWithGui: !![],
          crosshairScopedMode: "same",
          crosshairScopeDotSize: 0x3,
          crosshairScopeUseTheme: ![],
          crosshairScopeColor: "#ff4545",
          noZoomEnabled: ![],
          noZoomStrength: 0.5,
          killsayEnabled: ![],
          killsayMode: "random",
          killsayMessage: "{name}\x20clipped\x20btw",
          killsayCooldown: 0x5,
          magicBulletEnabled: ![],
          fovSize: 0x5a,
          fovUnit: "half-angle-degrees",
          aimOffset: 0x0,
          drawFovCircle: !![],
          espLines: !![],
          espSquare: !![],
          espBones: ![],
          espHealthBar: !![],
          healthBarWidth: 0x4,
          healthBarShadow: !![],
          healthBarUseTheme: ![],
          espNameTags: !![],
          espWeaponIcons: !![],
          espInfoBackground: !![],
          espTeamCheck: !![],
          espBotCheck: !![],
          wireframeEnabled: ![],
          worldModulationEnabled: ![],
          worldColorOverride: !![],
          worldColor: "#b8c9df",
          worldTintStrength: 0x14,
          customFogEnabled: ![],
          fogColor: "#c2d9ee",
          fogNear: 0x64,
          fogFar: 0x5dc,
          chamsEnabled: ![],
          chamsVisible: !![],
          chamsOccluded: ![],
          chamsVisibleColor: "#ffb7d5",
          chamsOccludedColor: "#a9dcff",
          chamsOpacity: 0x46,
          chamsUseTheme: ![],
          chamsFade: ![],
          chamsFadeSeconds: 0x3,
          weaponChamsEnabled: ![],
          weaponChamsUseTheme: !![],
          weaponChamsColor: "#ffb7d5",
          weaponChamsEndColor: "#a9dcff",
          weaponChamsFade: ![],
          weaponChamsOpacity: 0x55,
          glowEspEnabled: ![],
          glowUseTheme: !![],
          glowColor: "#4677ff",
          glowOpacity: 0x23,
          glowSize: 0x6,
          walkingTrailsEnabled: ![],
          walkingTrailsOthers: ![],
          walkingTrailSeconds: 0x2,
          walkingTrailWidth: 2.5,
          trailUseTheme: !![],
          trailColor: "#ffb7d5",
          trailEndColor: "#a9dcff",
          bulletTracersEnabled: ![],
          bulletTracersOthers: ![],
          bulletTracerSeconds: 0.8,
          bulletTracerWidth: 0x2,
          nameProtectEnabled: ![],
          nameProtectAlias: "crackyio",
          unlockSkins: !![],
          bhopEnabled: ![],
          speedEnabled: ![],
          speedMultiplier: 1.5,
          antiAimEnabled: ![],
          espColor: "#ffb7d5",
          boxColor: "#a9dcff",
          botColor: "#00ff80",
          autoNuke: ![],
          antikick: !![],
          autoReload: !![],
          instantReload: ![],
          legitAimbot: !![],
          flickSpeed: 0x19,
          adsTremorReduction: 0x32,
          aimRandomness: 1.5,
          aimTremor: 0.2,
          thirdPersonEnabled: ![],
          alwaysTrail: ![],
          weaponZoom: 0x1,
          themeId: "cotton-candy",
          customGuiPrimary: "#ffb7d5",
          customGuiSecondary: "#a9dcff",
          customGuiSurface: "#171d2e",
          guiLayout: "classic",
          espUseTheme: !![],
          themeHudEnabled: ![],
          arrayListEnabled: ![],
          arrayListColor: "#4677ff",
          arrayListShowModes: !![],
          arrayListFontSize: 0xe,
          arrayListOpacity: 0x44,
          watermarkEnabled: !![],
          watermarkMode: "crackyio",
          tabGuiEnabled: ![],
          tabGuiColor: "#4677ff",
          espBoxStyle: "corners",
        }));
      for (const [_0x19b016] of _0x1b6bde)
        this["defaultSettings"][_0x19b016] = -0x1;
      ((this["defaultHotkeys"] = {
        toggleMenu: "F1",
        aimbotEnabled: "F2",
        espSquare: "F3",
        bhopEnabled: "F4",
        autoFireEnabled: "F5",
        superSilentEnabled: "F6",
        thirdPersonEnabled: "KeyV",
        speedEnabled: "",
        rapidFireEnabled: "",
        noRecoilEnabled: "",
        noScopeOverlayEnabled: "",
        customCrosshairEnabled: "",
        killsayEnabled: "",
        noZoomEnabled: "",
        antiAimEnabled: "F7",
        wireframeEnabled: "F8",
        unlockSkins: "F9",
        aimbotTeamCheck: "Numpad1",
        espTeamCheck: "Numpad2",
        aimbotBotCheck: "Numpad3",
        espBotCheck: "Numpad4",
        aimbotWallCheck: "Numpad5",
        aimbotWallBangs: "Numpad6",
        espLines: "Numpad7",
        espNameTags: "Numpad8",
        espWeaponIcons: "Numpad9",
      }),
        (this["settings"] = {}),
        (this["hotkeys"] = {}));
      try {
        (this["loadSettings"](),
          this["applyTheme"](),
          this["initializeLoader"](),
          this["initializeNotifierContainer"](),
          this["waitFor"](
            () =>
              document["body"] &&
              Array["isArray"](this["pageWindow"]["windows"]) &&
              this["pageWindow"]["windows"]["length"] > 0x0 &&
              typeof this["pageWindow"]["showWindow"] === "function",
          )
            ["then"]((_0x282fdb) => {
              _0x282fdb && (this["initGameGUI"](), this["updateNameProtect"]());
            })
            ["catch"]((_0x4016cd) =>
              console["warn"](
                "🌸\x20cracky.io:\x20Menu\x20could\x20not\x20be\x20initialized.",
                _0x4016cd,
              ),
            ),
          this["addEventListeners"](),
          this["preloadESPAssets"](),
          console["log"]("🌸\x20cracky.io:\x20Successfully\x20Initialized!"));
      } catch (_0x5824da) {
        console["error"](
          "🌸\x20cracky.io:\x20FATAL\x20ERROR\x20during\x20initialization.",
          _0x5824da,
        );
      }
    }
    ["toPageFunction"](_0x523a25) {
      return typeof exportFunction === "function"
        ? exportFunction(_0x523a25, this["pageWindow"] || window)
        : _0x523a25;
    }
    ["fromPage"](_0x5369a4) {
      return _0x5369a4 && _0x5369a4["wrappedJSObject"]
        ? _0x5369a4["wrappedJSObject"]
        : _0x5369a4;
    }
    ["pageAccessor"](_0xb90a50) {
      const _0x20d238 = this;
      return {
        ..._0xb90a50,
        ...(_0xb90a50["get"]
          ? {
              get: this["toPageFunction"](function () {
                return _0xb90a50["get"]["call"](_0x20d238["fromPage"](this));
              }),
            }
          : {}),
        ...(_0xb90a50["set"]
          ? {
              set: this["toPageFunction"](function (_0x951cd0) {
                return _0xb90a50["set"]["call"](
                  _0x20d238["fromPage"](this),
                  _0x20d238["fromPage"](_0x951cd0),
                );
              }),
            }
          : {}),
      };
    }
    ["loadSettings"]() {
      let _0x5304d7 = ![],
        _0x107070 = !![];
      const _0x4a2829 = (_0x4e9549, _0x29ed94) => {
        try {
          const _0x4bf55b =
            window["localStorage"]["getItem"](_0x4e9549) ??
            (_0x29ed94 ? window["localStorage"]["getItem"](_0x29ed94) : null);
          if (_0x4bf55b == null) return {};
          _0x5304d7 = !![];
          const _0x55184b = JSON["parse"](_0x4bf55b);
          return _0x55184b &&
            typeof _0x55184b === "object" &&
            !Array["isArray"](_0x55184b)
            ? _0x55184b
            : {};
        } catch (_0x59d5c4) {
          return (
            (_0x107070 = ![]),
            console["warn"](
              "🌸\x20cracky.io:\x20Could\x20not\x20read\x20" +
                _0x4e9549 +
                ";\x20retaining\x20other\x20saved\x20preferences.",
            ),
            {}
          );
        }
      };
      let _0x47ff79 = _0x4a2829("crackyio_settings", "aimbaeshiro_settings"),
        _0x4b2aaf = _0x4a2829("crackyio_hotkeys", "aimbaeshiro_hotkeys");
      this["panelPositions"] = _0x4a2829("crackyio_panel_positions_v1");
      if (!_0x5304d7 && _0x107070) {
        const _0x13bd2c = this["getBuiltinConfigs"]()["find"](
          (_0xe5bdbe) => _0xe5bdbe["id"] === _0x4f89ca,
        );
        ((_0x47ff79 = _0x13bd2c["config"]["settings"]),
          (_0x4b2aaf = _0x13bd2c["config"]["hotkeys"]),
          (this["panelPositions"] = _0x13bd2c["config"]["panelPositions"]),
          (this["activeConfigKey"] = "builtin:" + _0x13bd2c["id"]));
      }
      ((this["settings"] = { ...this["defaultSettings"], ..._0x47ff79 }),
        delete this["settings"]["flyEnabled"],
        delete this["settings"]["flySpeed"]);
      for (const _0x481f32 of [
        "speedEnabled",
        "rapidFireEnabled",
        "magicBulletEnabled",
        "noRecoilEnabled",
        "noScopeOverlayEnabled",
        "noZoomEnabled",
        "autoFireSeedEnabled",
      ])
        if (typeof this["settings"][_0x481f32] !== "boolean")
          this["settings"][_0x481f32] = ![];
      for (const [_0x1b972a, _0x1ae5b6] of [
        ["speedMultiplier", 0.1],
        ["rapidFireMultiplier", 0x1],
      ])
        this["settings"][_0x1b972a] = this["predictionMultiplier"](
          this["settings"][_0x1b972a],
          this["defaultSettings"][_0x1b972a],
          _0x1ae5b6,
          _0x1b972a === "rapidFireMultiplier" ? 0x14 : 0x5,
        );
      ((this["settings"]["noZoomStrength"] = Number["isFinite"](
        this["settings"]["noZoomStrength"],
      )
        ? Math["max"](0x0, Math["min"](0x5, this["settings"]["noZoomStrength"]))
        : 0.5),
        this["normalizeCrosshairSettings"](),
        (this["settings"]["killsayEnabled"] =
          this["settings"]["killsayEnabled"] === !![]),
        (this["settings"]["killsayMode"] =
          this["settings"]["killsayMode"] === "custom" ? "custom" : "random"),
        (this["settings"]["killsayCooldown"] = this["predictionMultiplier"](
          this["settings"]["killsayCooldown"],
          0x5,
          0x2,
          0x1e,
        )),
        (this["settings"]["killsayMessage"] =
          typeof this["settings"]["killsayMessage"] === "string"
            ? this["settings"]["killsayMessage"]
                ["replace"](/[\x00-\x1f\x7f]/g, "")
                ["slice"](0x0, 0x30)
            : this["defaultSettings"]["killsayMessage"]));
      if (
        _0x47ff79?.["fovSize"] === 0x0 &&
        _0x47ff79["fovUnit"] !== "half-angle-degrees"
      )
        this["settings"]["fovSize"] = 0xb4;
      ((this["settings"]["fovSize"] = this["getAimFov"]()),
        (this["settings"]["fovUnit"] = "half-angle-degrees"),
        (this["hotkeys"] = { ...this["defaultHotkeys"], ..._0x4b2aaf }),
        delete this["hotkeys"]["flyEnabled"],
        (this["panelPositions"] =
          this["panelPositions"] &&
          typeof this["panelPositions"] === "object" &&
          !Array["isArray"](this["panelPositions"])
            ? this["panelPositions"]
            : {}));
    }
    ["saveSettings"](_0x516c50, _0x38c76b) {
      if (_0x190fc1) return ![];
      try {
        return (
          window["localStorage"]["setItem"](
            _0x516c50,
            JSON["stringify"](_0x38c76b),
          ),
          !![]
        );
      } catch (_0x269f3b) {
        return (
          console["error"](
            "🌸\x20cracky.io:\x20Could\x20not\x20save\x20settings.",
            _0x269f3b,
          ),
          ![]
        );
      }
    }
    ["normalizeConfig"](_0xc518fe) {
      const _0x31a2de = (_0x3338c9) =>
        _0x3338c9 &&
        typeof _0x3338c9 === "object" &&
        !Array["isArray"](_0x3338c9);
      if (
        !_0x31a2de(_0xc518fe) ||
        _0xc518fe["format"] !== "crackyio-config" ||
        _0xc518fe["schema"] !== 0x1 ||
        !_0x31a2de(_0xc518fe["settings"])
      )
        throw new Error(
          "Choose\x20a\x20cracky.io\x20JSON\x20config\x20(schema\x201).",
        );
      const _0x3e6504 = {
        fovSize: [0x0, 0xb4],
        aimOffset: [-0xa, 0xa],
        flickSpeed: [0x0, 0x64],
        adsTremorReduction: [0x0, 0x64],
        aimRandomness: [0x0, 0x5],
        aimTremor: [0x0, 0x5],
        weaponZoom: [0.1, 0x5],
        noZoomStrength: [0x0, 0x5],
        speedMultiplier: [0.1, 0x5],
        rapidFireMultiplier: [0x1, 0x14],
        healthBarWidth: [0x1, 0x10],
        worldTintStrength: [0x0, 0x64],
        fogNear: [0x0, 0xbb8],
        fogFar: [0xa, 0x3a98],
        chamsOpacity: [0x0, 0x64],
        chamsFadeSeconds: [0.5, 0xc],
        weaponChamsOpacity: [0x0, 0x64],
        glowOpacity: [0x0, 0x64],
        glowSize: [0x1, 0xf],
        walkingTrailSeconds: [0.5, 0x8],
        walkingTrailWidth: [0x1, 0x6],
        bulletTracerSeconds: [0.1, 0x4],
        bulletTracerWidth: [0x1, 0x6],
        arrayListFontSize: [0xa, 0x16],
        arrayListOpacity: [0x0, 0x64],
      };
      (Object["assign"](_0x3e6504, _0x4aa775),
        (_0x3e6504["killsayCooldown"] = [0x2, 0x1e]));
      const _0x4737d9 = {
          themeId: [
            ..._0x3845c3["map"]((_0x5a08cf) => _0x5a08cf["id"]),
            "custom",
          ],
          guiLayout: ["classic", "dropdown", "liquidbounce"],
          espBoxStyle: ["corners", "full"],
          watermarkMode: ["crackyio", "liquidbounce"],
          fovUnit: ["half-angle-degrees"],
          ..._0x26280a,
        },
        _0x596971 = { ...this["defaultSettings"] };
      _0x4737d9["killsayMode"] = ["random", "custom"];
      for (const [_0x492ab1, _0x1606a8] of Object["entries"](
        this["defaultSettings"],
      )) {
        if (!Object["hasOwn"](_0xc518fe["settings"], _0x492ab1)) continue;
        let _0x251d32 = _0xc518fe["settings"][_0x492ab1];
        if (typeof _0x251d32 !== typeof _0x1606a8)
          throw new Error("Invalid\x20setting:\x20" + _0x492ab1);
        if (typeof _0x251d32 === "number") {
          if (!Number["isFinite"](_0x251d32))
            throw new Error("Invalid\x20number:\x20" + _0x492ab1);
          const [_0x8adec6, _0x407204] =
            _0x3e6504[_0x492ab1] ||
            (_0x492ab1["startsWith"]("local")
              ? [-0x1, 0x186a0]
              : [-0x2710, 0x2710]);
          _0x251d32 = Math["max"](_0x8adec6, Math["min"](_0x407204, _0x251d32));
          if (_0x492ab1["startsWith"]("local"))
            _0x251d32 = Math["floor"](_0x251d32);
        } else {
          if (typeof _0x251d32 === "string") {
            if (
              _0x4737d9[_0x492ab1] &&
              !_0x4737d9[_0x492ab1]["includes"](_0x251d32)
            )
              throw new Error("Invalid\x20choice:\x20" + _0x492ab1);
            if (/^#[\da-f]{6}$/i["test"](_0x1606a8)) {
              _0x251d32 = this["normalizeColor"](_0x251d32, null);
              if (!_0x251d32)
                throw new Error("Invalid\x20color:\x20" + _0x492ab1);
            } else {
              if (!_0x4737d9[_0x492ab1])
                _0x251d32 = _0x251d32["replace"](/[\x00-\x1f\x7f]/g, "")[
                  "slice"
                ](0x0, 0x30);
            }
          }
        }
        _0x596971[_0x492ab1] = _0x251d32;
      }
      const _0x14c6d1 =
        _0xc518fe["hotkeys"] == null
          ? { ...this["defaultHotkeys"] }
          : Object["fromEntries"](
              Object["keys"](this["defaultHotkeys"])["map"]((_0x297ff0) => [
                _0x297ff0,
                "",
              ]),
            );
      if (_0xc518fe["hotkeys"] != null && !_0x31a2de(_0xc518fe["hotkeys"]))
        throw new Error("Invalid\x20hotkeys.");
      for (const [_0x28b682, _0x4922d8] of Object["entries"](
        _0xc518fe["hotkeys"] || {},
      )) {
        if (
          _0x28b682 !== "toggleMenu" &&
          typeof this["defaultSettings"][_0x28b682] !== "boolean"
        )
          continue;
        if (
          typeof _0x4922d8 !== "string" ||
          _0x4922d8["length"] > 0x18 ||
          (_0x4922d8 &&
            !/^(?:Key[A-Z]|Digit\d|Numpad(?:\d|Add|Subtract|Multiply|Divide|Decimal|Enter)|F(?:[1-9]|1\d|2[0-4])|Shift(?:Left|Right)|Control(?:Left|Right)|Alt(?:Left|Right)|Insert|Delete|Home|End|PageUp|PageDown|Space|Tab|Arrow(?:Up|Down|Left|Right)|Backquote|Bracket(?:Left|Right)|Backslash|Semicolon|Quote|Comma|Period|Slash|Minus|Equal)$/[
              "test"
            ](_0x4922d8))
        )
          throw new Error("Invalid\x20keybind:\x20" + _0x28b682);
        _0x14c6d1[_0x28b682] = _0x4922d8;
      }
      const _0x43d9f4 = {};
      if (
        _0xc518fe["panelPositions"] != null &&
        !_0x31a2de(_0xc518fe["panelPositions"])
      )
        throw new Error("Invalid\x20panel\x20positions.");
      for (const [_0x314de5, _0x32d579] of Object["entries"](
        _0xc518fe["panelPositions"] || {},
      )) {
        if (
          !/^(?:dropdown|liquidbounce):(?:compact:)?(?:anonimbiri-tab-(?:aimbot|visuals|misc|configs)|cracky-liquid-(?:combat|movement|player|world|render|misc|configs))$/[
            "test"
          ](_0x314de5)
        )
          continue;
        if (
          !_0x31a2de(_0x32d579) ||
          !Number["isFinite"](_0x32d579["x"]) ||
          !Number["isFinite"](_0x32d579["y"])
        )
          throw new Error("Invalid\x20panel\x20offset.");
        _0x43d9f4[_0x314de5] = {
          x: Math["max"](-0x186a0, Math["min"](0x186a0, _0x32d579["x"])),
          y: Math["max"](-0x186a0, Math["min"](0x186a0, _0x32d579["y"])),
        };
      }
      return {
        format: "crackyio-config",
        schema: 0x1,
        gameVersion: _0x23ba9d,
        scriptVersion: _0x1be0cd,
        settings: _0x596971,
        hotkeys: _0x14c6d1,
        panelPositions: _0x43d9f4,
      };
    }
    ["exportConfig"]() {
      return this["normalizeConfig"]({
        format: "crackyio-config",
        schema: 0x1,
        settings: this["settings"],
        hotkeys: this["hotkeys"],
        panelPositions: this["panelPositions"] || {},
      });
    }
    ["getBuiltinConfigs"]() {
      return _0x42a380["map"]((_0x46031c) => ({
        id: _0x46031c["id"],
        name: _0x46031c["name"],
        config: this["normalizeConfig"](_0x46031c["config"]),
      }));
    }
    ["readConfigs"]() {
      try {
        const _0x5de7c8 = JSON["parse"](
          window["localStorage"]["getItem"]("crackyio_configs_v1") || "[]",
        );
        if (!Array["isArray"](_0x5de7c8)) return [];
        return _0x5de7c8["slice"](0x0, 0x32)["flatMap"]((_0x79f5b8) => {
          try {
            if (typeof _0x79f5b8?.["name"] !== "string") return [];
            return [
              {
                name: _0x79f5b8["name"]["slice"](0x0, 0x30),
                config: this["normalizeConfig"](_0x79f5b8["config"]),
              },
            ];
          } catch (_0x4262cd) {
            return [];
          }
        });
      } catch (_0x227d61) {
        return [];
      }
    }
    ["saveConfig"](_0x5892ac) {
      _0x5892ac = String(_0x5892ac || "")
        ["trim"]()
        ["replace"](/[\x00-\x1f\x7f]/g, "")
        ["slice"](0x0, 0x30);
      if (!_0x5892ac) throw new Error("Enter\x20a\x20config\x20name\x20first.");
      const _0x3ba4ee = this["readConfigs"](),
        _0x2b5979 = _0x3ba4ee["findIndex"](
          (_0x435d33) => _0x435d33["name"] === _0x5892ac,
        ),
        _0x2a004f = { name: _0x5892ac, config: this["exportConfig"]() };
      if (_0x2b5979 < 0x0) {
        if (_0x3ba4ee["length"] >= 0x32)
          throw new Error("50\x20configs\x20saved.\x20Remove\x20one\x20first.");
        _0x3ba4ee["push"](_0x2a004f);
      } else _0x3ba4ee[_0x2b5979] = _0x2a004f;
      if (!this["saveSettings"]("crackyio_configs_v1", _0x3ba4ee))
        throw new Error(
          "Config\x20could\x20not\x20be\x20saved.\x20Storage\x20is\x20unavailable\x20or\x20local\x20reset\x20is\x20active.",
        );
      return _0x5892ac;
    }
    ["applyConfig"](_0x56f5fa) {
      const _0x1113fd = this["normalizeConfig"](_0x56f5fa);
      if (_0x190fc1)
        throw new Error(
          "Reload\x20after\x20resetting\x20local\x20data\x20before\x20loading\x20a\x20config.",
        );
      (this["closeColorPicker"]?.(),
        this["panelDragCleanup"]?.(),
        this["restoreWorldModulation"](),
        this["restoreCustomFog"](),
        this["restoreChams"](),
        this["restoreMeshEffect"](this["weaponChamsMeshes"]),
        this["restoreMeshEffect"](this["glowMeshes"]),
        this["clearTrailEffects"](),
        this["restoreNativeOptions"](),
        this["restoreCameraZoom"](),
        this["pruneBatchSources"](!![]),
        this["restoreLocalCosmetics"]());
      for (const [_0x4b6d2b, _0x5b4a56] of this["wireframeMaterials"] || [])
        if (_0x4b6d2b["wireframe"] === !![]) _0x4b6d2b["wireframe"] = _0x5b4a56;
      (this["wireframeMaterials"]?.["clear"](),
        (this["lastWireframeState"] = null),
        (this["settings"] = _0x1113fd["settings"]),
        (this["hotkeys"] = _0x1113fd["hotkeys"]),
        (this["panelPositions"] = _0x1113fd["panelPositions"]),
        this["failedHooks"]?.["clear"](),
        this["hookErrors"]?.["clear"](),
        (this["lastAimTarget"] = this["legitTarget"] = null));
      const _0x19f05f = [
        ["crackyio_settings", this["settings"]],
        ["crackyio_hotkeys", this["hotkeys"]],
        ["crackyio_panel_positions_v1", this["panelPositions"]],
      ]
        ["map"](([_0x2c1b56, _0x373bd1]) =>
          this["saveSettings"](_0x2c1b56, _0x373bd1),
        )
        ["every"](Boolean);
      return (
        this["applyTheme"](),
        (this["nameProtectLastScan"] = null),
        this["updateNameProtect"](),
        this["showGUI"](),
        _0x19f05f
      );
    }
    ["bindConfigManager"](_0x11a33f) {
      const _0x1f8e3a = _0x11a33f["querySelector"]("#cracky-config-list"),
        _0x6587ca = _0x11a33f["querySelector"]("#cracky-config-name"),
        _0x15935b = _0x11a33f["querySelector"]("#cracky-config-status");
      if (!_0x1f8e3a || !_0x6587ca || !_0x15935b) return;
      if (this["configMessage"])
        _0x15935b["textContent"] = this["configMessage"];
      const _0x5aa286 = (_0x23bc5d) =>
          _0x23bc5d["startsWith"]("builtin:")
            ? this["getBuiltinConfigs"]()["find"](
                (_0x66d286) => _0x66d286["id"] === _0x23bc5d["slice"](0x8),
              )
            : _0x23bc5d["startsWith"]("saved:")
              ? this["readConfigs"]()["find"](
                  (_0x1c79f7) => _0x1c79f7["name"] === _0x23bc5d["slice"](0x6),
                )
              : null,
        _0x2e548f = () => {
          ((this["activeConfigKey"] = _0x1f8e3a["value"]),
            (this["activeConfigName"] = _0x1f8e3a["value"]["startsWith"](
              "saved:",
            )
              ? _0x5aa286(_0x1f8e3a["value"])?.["name"] || ""
              : ""),
            (_0x6587ca["value"] = this["activeConfigName"]),
            (_0x11a33f["querySelector"]("#cracky-config-load")["disabled"] =
              !_0x5aa286(_0x1f8e3a["value"])),
            (_0x11a33f["querySelector"]("#cracky-config-delete")["disabled"] =
              !_0x1f8e3a["value"]["startsWith"]("saved:")));
        },
        _0x12336c = (_0x2d200d) => {
          _0x1f8e3a["replaceChildren"]();
          const _0xc06bb0 = (_0x375050, _0x142f36, _0x38af90) => {
            if (!_0x142f36["length"]) return;
            const _0x3aa925 = document["createElement"]("optgroup");
            _0x3aa925["label"] = _0x375050;
            for (const _0xf8eed4 of _0x142f36) {
              const _0x78b663 = document["createElement"]("option");
              ((_0x78b663["value"] = _0x38af90
                ? "builtin:" + _0xf8eed4["id"]
                : "saved:" + _0xf8eed4["name"]),
                (_0x78b663["textContent"] =
                  _0xf8eed4["name"] +
                  (_0x38af90 && _0xf8eed4["id"] === _0x4f89ca
                    ? "\x20·\x20Default"
                    : "")),
                _0x3aa925["append"](_0x78b663));
            }
            _0x1f8e3a["append"](_0x3aa925);
          };
          (_0xc06bb0("Built-in\x20presets", this["getBuiltinConfigs"](), !![]),
            _0xc06bb0("Saved\x20configs", this["readConfigs"](), ![]));
          if (
            _0x2d200d &&
            Array["from"](_0x1f8e3a["options"])["some"](
              (_0x2b57ae) => _0x2b57ae["value"] === _0x2d200d,
            )
          )
            _0x1f8e3a["value"] = _0x2d200d;
          _0x2e548f();
        },
        _0x36124c = (_0xaafcb5) => {
          this["configMessage"] = _0xaafcb5;
          const _0x341953 = _0x11a33f["isConnected"]
            ? _0x15935b
            : document["querySelector"]("#cracky-config-status");
          if (_0x341953) _0x341953["textContent"] = _0xaafcb5;
        },
        _0x5a3624 = (_0x47286e) => {
          try {
            _0x36124c(_0x47286e());
          } catch (_0x4b0838) {
            _0x36124c(_0x4b0838["message"]);
          }
        };
      (_0x12336c(this["activeConfigKey"]),
        _0x1f8e3a["addEventListener"]("change", _0x2e548f),
        _0x11a33f["querySelector"]("#cracky-config-save")["addEventListener"](
          "click",
          () =>
            _0x5a3624(() => {
              const _0x1b9092 = this["saveConfig"](_0x6587ca["value"]);
              return (
                _0x12336c("saved:" + _0x1b9092),
                "Saved\x20“" +
                  _0x1b9092 +
                  "”.\x20Same\x20name\x20replaces\x20that\x20saved\x20config."
              );
            }),
        ),
        _0x11a33f["querySelector"]("#cracky-config-load")["addEventListener"](
          "click",
          () =>
            _0x5a3624(() => {
              const _0x2a7f02 = _0x5aa286(_0x1f8e3a["value"]);
              if (!_0x2a7f02) throw new Error("Config\x20not\x20found.");
              _0x2e548f();
              const _0x3a7af3 = _0x1f8e3a["value"]["startsWith"]("builtin:"),
                _0xaa8817 = this["applyConfig"](_0x2a7f02["config"]);
              return (
                "Loaded\x20" +
                (_0x3a7af3 ? "built-in\x20" : "") +
                "“" +
                _0x2a7f02["name"] +
                "”." +
                (_0x3a7af3
                  ? "\x20Save\x20with\x20a\x20new\x20name\x20to\x20keep\x20an\x20edited\x20copy."
                  : "") +
                (_0xaa8817
                  ? ""
                  : "\x20Storage\x20unavailable:\x20changes\x20are\x20session-only;\x20export\x20before\x20reloading.")
              );
            }),
        ),
        _0x11a33f["querySelector"]("#cracky-config-delete")["addEventListener"](
          "click",
          () =>
            _0x5a3624(() => {
              if (!_0x1f8e3a["value"]["startsWith"]("saved:"))
                throw new Error("Built-in\x20presets\x20are\x20read-only.");
              const _0x37164b = _0x1f8e3a["value"]["slice"](0x6);
              if (
                !this["saveSettings"](
                  "crackyio_configs_v1",
                  this["readConfigs"]()["filter"](
                    (_0x40e6be) => _0x40e6be["name"] !== _0x37164b,
                  ),
                )
              )
                throw new Error("Could\x20not\x20remove\x20config.");
              return (_0x12336c(), "Removed\x20“" + _0x37164b + "”.");
            }),
        ),
        _0x11a33f["querySelector"]("#cracky-config-export")["addEventListener"](
          "click",
          () =>
            _0x5a3624(() => {
              const _0x2346de = new Blob(
                  [
                    JSON["stringify"](this["exportConfig"](), null, 0x2) +
                      "\x0a",
                  ],
                  { type: "application/json" },
                ),
                _0x49466d = URL["createObjectURL"](_0x2346de),
                _0x4bd332 = document["createElement"]("a");
              return (
                (_0x4bd332["href"] = _0x49466d),
                (_0x4bd332["download"] =
                  (_0x6587ca["value"]
                    ["trim"]()
                    ["replace"](/[^\w.-]/g, "_")
                    ["slice"](0x0, 0x30) || "crackyio") + ".json"),
                _0x4bd332["click"](),
                setTimeout(() => URL["revokeObjectURL"](_0x49466d), 0x3e8),
                "Exported\x20current\x20settings,\x20keybinds\x20and\x20panel\x20positions."
              );
            }),
        ));
      const _0x1b28c9 = _0x11a33f["querySelector"]("#cracky-config-file");
      (_0x11a33f["querySelector"]("#cracky-config-import")["addEventListener"](
        "click",
        () => _0x1b28c9["click"](),
      ),
        _0x1b28c9["addEventListener"]("change", async () => {
          try {
            const _0xbc36d2 = _0x1b28c9["files"]?.[0x0];
            if (!_0xbc36d2) return;
            if (_0xbc36d2["size"] > 0x40000)
              throw new Error(
                "Config\x20must\x20be\x20smaller\x20than\x20256\x20KB.",
              );
            const _0x11a587 = JSON["parse"](await _0xbc36d2["text"]()),
              _0x96f7fa = this["applyConfig"](_0x11a587);
            ((this["activeConfigKey"] = ""),
              (this["activeConfigName"] = ""),
              _0x36124c(
                _0x96f7fa
                  ? "Imported\x20settings.\x20Save\x20with\x20a\x20name\x20to\x20keep\x20a\x20local\x20copy."
                  : "Imported\x20for\x20this\x20session\x20only.\x20Storage\x20unavailable:\x20export\x20before\x20reloading.",
              ));
          } catch (_0x76f196) {
            _0x36124c("Import\x20failed:\x20" + _0x76f196["message"]);
          } finally {
            _0x1b28c9["value"] = "";
          }
        }));
    }
    ["getTheme"]() {
      if (this["settings"]["themeId"] === "custom") {
        const _0x595393 = this["normalizeColor"](
            this["settings"]["customGuiPrimary"],
            "#ffb7d5",
          ),
          _0x3ef8fd = this["normalizeColor"](
            this["settings"]["customGuiSecondary"],
            "#a9dcff",
          ),
          _0x1c3adf = [0x1, 0x3, 0x5]
            ["map"]((_0x35a226) =>
              Math["round"](
                (parseInt(
                  _0x595393["slice"](_0x35a226, _0x35a226 + 0x2),
                  0x10,
                ) +
                  parseInt(
                    _0x3ef8fd["slice"](_0x35a226, _0x35a226 + 0x2),
                    0x10,
                  )) /
                  0x2,
              )
                ["toString"](0x10)
                ["padStart"](0x2, "0"),
            )
            ["join"]("");
        return {
          id: "custom",
          name: "Custom",
          primary: _0x595393,
          secondary: _0x3ef8fd,
          midpoint: "#" + _0x1c3adf,
          surface: this["normalizeColor"](
            this["settings"]["customGuiSurface"],
            "#171d2e",
          ),
        };
      }
      return (
        _0x3845c3["find"](
          (_0x279374) => _0x279374["id"] === this["settings"]["themeId"],
        ) || _0x3845c3[0x0]
      );
    }
    ["normalizeColor"](_0x2caee8, _0x5d1e97 = "#ffb7d5") {
      const _0x38d931 = String(_0x2caee8 || "")
        ["trim"]()
        ["replace"](/^#/, "");
      if (/^[\da-f]{6}$/i["test"](_0x38d931))
        return "#" + _0x38d931["toLowerCase"]();
      if (/^[\da-f]{3}$/i["test"](_0x38d931))
        return (
          "#" +
          [..._0x38d931]
            ["map"]((_0x536d47) => _0x536d47 + _0x536d47)
            ["join"]("")
            ["toLowerCase"]()
        );
      return _0x5d1e97;
    }
    ["applyTheme"]() {
      const _0x528e97 = document["documentElement"];
      if (!_0x528e97) {
        document["addEventListener"](
          "DOMContentLoaded",
          () => this["applyTheme"](),
          { once: !![] },
        );
        return;
      }
      const _0x11c26c = this["getTheme"]();
      for (const [_0x162203, _0x47bf98] of Object["entries"]({
        primary: _0x11c26c["primary"],
        secondary: _0x11c26c["secondary"],
        midpoint: _0x11c26c["midpoint"],
        surface: _0x11c26c["surface"],
      }))
        _0x528e97["style"]["setProperty"]("--cracky-" + _0x162203, _0x47bf98);
      (_0x528e97["style"]["setProperty"](
        "--cracky-panel-surface",
        this["settings"]["themeId"] === "custom"
          ? _0x11c26c["surface"]
          : "#111214ee",
      ),
        (_0x528e97["dataset"]["crackyLayout"] = ["dropdown", "liquidbounce"][
          "includes"
        ](this["settings"]["guiLayout"])
          ? this["settings"]["guiLayout"]
          : "classic"));
      const _0x4d34b9 = document["querySelector"](".anonimbiri-brand\x20small");
      if (_0x4d34b9)
        _0x4d34b9["textContent"] =
          _0x11c26c["name"] +
          "\x20·\x20" +
          _0x3845c3["length"] +
          "\x20palettes";
      (this["applyHudTheme"](),
        this["updateArrayList"](),
        this["updateClientHud"](),
        this["refreshConditionalControls"](),
        this["renderCrosshairPreview"]());
    }
    ["getEnabledModules"]() {
      const _0x4d40ca = (_0x4d6e9e) => {
        if (!this["settings"]["arrayListShowModes"]) return "";
        switch (_0x4d6e9e["setting"]) {
          case "aimbotEnabled":
            return this["settings"]["superSilentEnabled"]
              ? "Silent"
              : this["settings"]["legitAimbot"]
                ? "Legit"
                : "";
          case "espSquare":
            return this["settings"]["espBoxStyle"] === "full"
              ? "Box"
              : "Corners";
          case "chamsEnabled":
            return this["settings"]["chamsVisible"] &&
              this["settings"]["chamsOccluded"]
              ? "Both"
              : this["settings"]["chamsOccluded"]
                ? "Occluded"
                : "Visible";
          case "worldModulationEnabled":
            return this["settings"]["worldColorOverride"] === ![]
              ? "Native"
              : Math["round"](
                  Number(this["settings"]["worldTintStrength"]) || 0x0,
                ) + "%";
          case "speedEnabled":
            return (
              this["predictionMultiplier"](
                this["settings"]["speedMultiplier"],
                1.5,
                0.1,
              ) + "×"
            );
          case "rapidFireEnabled":
            return (
              this["predictionMultiplier"](
                this["settings"]["rapidFireMultiplier"],
                0x2,
                0x1,
                0x14,
              ) + "×"
            );
          case "noZoomEnabled":
            return this["settings"]["noZoomStrength"] + "×\x20ADS";
          case "customCrosshairEnabled":
            return (
              _0x5cbe53["find"](
                (_0x5111f5) =>
                  _0x5111f5[0x0] === this["settings"]["crosshairStyle"],
              )?.[0x1] || ""
            );
          case "autoFireEnabled":
            return this["settings"]["autoFireSeedEnabled"] ? "Seed" : "";
          default:
            return "";
        }
      };
      return _0x101c16["filter"](
        (_0x47ab33) =>
          _0x47ab33["setting"] &&
          _0x47ab33["hud"] !== ![] &&
          this["settings"][_0x47ab33["setting"]] === !![] &&
          !this["isUnavailableFeature"](_0x47ab33["setting"]),
      )["map"]((_0x2c5cf1) => ({
        setting: _0x2c5cf1["setting"],
        name: _0x2c5cf1["name"],
        mode: _0x4d40ca(_0x2c5cf1),
      }));
    }
    ["hideArrayList"]() {
      (this["arrayListElement"]?.["remove"](),
        (this["arrayListElement"] = null),
        (this["arrayListSignature"] = null));
    }
    ["updateArrayList"](_0x11f4f7 = ![]) {
      if (!this["settings"]["arrayListEnabled"]) {
        (clearTimeout(this["arrayListTimer"]),
          (this["arrayListTimer"] = null),
          this["hideArrayList"]());
        return;
      }
      if (!this["arrayListTimer"])
        this["arrayListTimer"] = setTimeout(() => {
          ((this["arrayListTimer"] = null), this["updateArrayList"]());
        }, 0xfa);
      if (!this["isGameplayAllowed"]() || !document["body"]) {
        this["hideArrayList"]();
        return;
      }
      const _0x17db50 = Date["now"]();
      if (
        !_0x11f4f7 &&
        this["arrayListLastPoll"] != null &&
        _0x17db50 - this["arrayListLastPoll"] < 0x64
      )
        return;
      this["arrayListLastPoll"] = _0x17db50;
      const _0x1806b6 = document["querySelector"](".anonimbiri-menu-container"),
        _0x39103e =
          _0x1806b6 &&
          _0x1806b6["getClientRects"]()["length"] > 0x0 &&
          (_0x1806b6["ownerDocument"]["defaultView"] || this["pageWindow"])[
            "getComputedStyle"
          ](_0x1806b6)["visibility"] !== "hidden";
      if (this["arrayListElement"]?.["isConnected"])
        this["arrayListElement"]["style"]["visibility"] = _0x39103e
          ? "hidden"
          : "visible";
      if (
        !_0x11f4f7 &&
        this["arrayListElement"]?.["isConnected"] &&
        _0x17db50 - (this["arrayListLastUpdate"] || 0x0) < 0xc8
      )
        return;
      this["arrayListLastUpdate"] = _0x17db50;
      const _0x5cc363 = this["getEnabledModules"](),
        _0x58290d = Math["max"](
          0xa,
          Math["min"](
            0x16,
            Number(this["settings"]["arrayListFontSize"]) || 0xe,
          ),
        ),
        _0x58fcaf =
          Math["max"](
            0x0,
            Math["min"](
              0x64,
              Number(this["settings"]["arrayListOpacity"]) || 0x0,
            ),
          ) / 0x64,
        _0x2425d9 = this["normalizeColor"](
          this["settings"]["arrayListColor"],
          "#4677ff",
        ),
        _0x42945d = JSON["stringify"]([
          _0x5cc363,
          _0x58290d,
          _0x58fcaf,
          _0x2425d9,
        ]);
      if (
        this["arrayListElement"]?.["isConnected"] &&
        _0x42945d === this["arrayListSignature"]
      )
        return;
      let _0x52b7a1 = this["arrayListElement"];
      !_0x52b7a1?.["isConnected"] &&
        ((_0x52b7a1 = document["createElement"]("div")),
        (_0x52b7a1["id"] = "cracky-array-list"),
        _0x52b7a1["setAttribute"]("aria-label", "Enabled\x20modules"),
        (_0x52b7a1["style"]["cssText"] =
          "position:fixed;right:18px;top:18px;z-index:9990;display:flex;flex-direction:column;align-items:flex-end;pointer-events:none;max-width:calc(100vw\x20-\x2036px);max-height:calc(100vh\x20-\x2036px);overflow:hidden;"),
        document["body"]["append"](_0x52b7a1),
        (this["arrayListElement"] = _0x52b7a1));
      (_0x52b7a1["replaceChildren"](),
        (_0x52b7a1["hidden"] = ![]),
        (_0x52b7a1["style"]["display"] = "flex"),
        (_0x52b7a1["style"]["visibility"] = _0x39103e ? "hidden" : "visible"));
      for (const _0x4be2f1 of _0x5cc363) {
        const _0x43f184 = document["createElement"]("div");
        ((_0x43f184["dataset"]["module"] = _0x4be2f1["setting"]),
          (_0x43f184["style"]["cssText"] =
            "box-sizing:border-box;width:max-content;max-width:100%;padding:5px\x208px;border-left:4px\x20solid\x20" +
            _0x2425d9 +
            ";border-radius:4px\x200\x200\x204px;background:rgba(0,0,0," +
            _0x58fcaf +
            ");color:#fff;font:500\x20" +
            _0x58290d +
            "px/1.25\x20Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none!important;letter-spacing:normal!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:0;"));
        const _0x109d99 = document["createElement"]("span");
        ((_0x109d99["textContent"] = _0x4be2f1["name"]),
          (_0x109d99["style"]["cssText"] =
            "font:inherit!important;color:#fff!important;text-shadow:none!important;letter-spacing:normal!important;"),
          _0x43f184["append"](_0x109d99));
        if (_0x4be2f1["mode"]) {
          const _0x1853de = document["createElement"]("span");
          ((_0x1853de["textContent"] = "\x20" + _0x4be2f1["mode"]),
            (_0x1853de["style"]["cssText"] =
              "font:inherit!important;color:#aaa!important;text-shadow:none!important;letter-spacing:normal!important;"),
            _0x43f184["append"](_0x1853de));
        }
        _0x52b7a1["append"](_0x43f184);
      }
      const _0x50c129 = [..._0x52b7a1["children"]]["map"](
        (_0x5b4808, _0x10ab2d) => ({
          row: _0x5b4808,
          index: _0x10ab2d,
          width: _0x5b4808["getBoundingClientRect"]()["width"],
        }),
      );
      _0x50c129["sort"](
        (_0xef115e, _0xd93f53) =>
          _0xd93f53["width"] - _0xef115e["width"] ||
          _0xef115e["index"] - _0xd93f53["index"],
      );
      for (const { row: _0x2ae6d1 } of _0x50c129)
        _0x52b7a1["append"](_0x2ae6d1);
      _0x52b7a1["hidden"] = _0x5cc363["length"] === 0x0;
      if (_0x52b7a1["hidden"]) _0x52b7a1["style"]["display"] = "none";
      else _0x52b7a1["style"]["display"] = "flex";
      this["arrayListSignature"] = _0x42945d;
    }
    ["isClickGuiVisible"]() {
      const _0x3c7c68 = document["querySelector"](".anonimbiri-menu-container");
      if (
        !_0x3c7c68 ||
        _0x3c7c68["hidden"] ||
        _0x3c7c68["style"]["display"] === "none" ||
        _0x3c7c68["style"]["visibility"] === "hidden"
      )
        return ![];
      return !!(
        _0x3c7c68["getClientRects"]()["length"] &&
        (_0x3c7c68["ownerDocument"]["defaultView"] || this["pageWindow"])[
          "getComputedStyle"
        ](_0x3c7c68)["visibility"] !== "hidden"
      );
    }
    ["hideClientHud"]() {
      (this["watermarkElement"]?.["remove"](),
        this["tabGuiElement"]?.["remove"](),
        (this["watermarkElement"] = null),
        (this["tabGuiElement"] = null),
        (this["watermarkSignature"] = null),
        (this["tabGuiSignature"] = null));
    }
    ["installClientHudStyle"]() {
      if (document["getElementById"]("cracky-client-hud-style")) return;
      const _0x739955 = document["createElement"]("style");
      ((_0x739955["id"] = "cracky-client-hud-style"),
        (_0x739955["textContent"] =
          "\x0a#cracky-watermark{position:fixed;top:12px;left:8px;z-index:9980;height:62px;display:flex;align-items:center;pointer-events:none;max-width:calc(100vw\x20-\x2016px);}\x0a#cracky-watermark\x20.cracky-wordmark{font:900\x2030px/1.1\x20Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;letter-spacing:-1px!important;text-shadow:0\x204px\x2018px\x20color-mix(in\x20srgb,var(--cracky-primary)\x2024%,transparent);background:linear-gradient(105deg,var(--cracky-primary),var(--cracky-secondary),#fff,var(--cracky-primary));background-size:250%\x20100%;background-clip:text;-webkit-background-clip:text;color:transparent!important;animation:cracky-wordmark-flow\x205s\x20linear\x20infinite;}\x0a#cracky-watermark\x20img{display:block;width:165px;height:62px;object-fit:contain;}\x0a#cracky-watermark[data-mode=crackyio]{gap:10px;}\x0a#cracky-watermark[data-mode=crackyio]\x20.cracky-logo{width:50px;height:55px;flex:0\x200\x2050px;object-fit:contain;background:#fff;border-radius:10px;box-shadow:0\x203px\x2012px\x20#0008;}\x0a#cracky-watermark[data-mode=liquidbounce]{filter:drop-shadow(0\x202px\x203px\x20#000e)\x20drop-shadow(0\x205px\x2012px\x20#000b);}\x0a#cracky-watermark\x20svg\x20text{font-family:Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none!important;}\x0a@keyframes\x20cracky-wordmark-flow{from{background-position:0%\x2050%}to{background-position:250%\x2050%}}\x0a#cracky-tab-gui{position:fixed;left:8px;z-index:9970;display:flex;gap:6px;max-width:calc(100vw\x20-\x2016px);pointer-events:auto;}\x0a#cracky-tab-gui,#cracky-tab-gui\x20*{box-sizing:border-box;font-family:Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none!important;letter-spacing:normal!important;}\x0a#cracky-tab-gui\x20.cracky-tab-categories{border-radius:5px;overflow:hidden;min-width:160px;}\x0a#cracky-tab-gui\x20.cracky-tab-categories,#cracky-tab-gui\x20.cracky-tab-modules{box-shadow:0\x202px\x204px\x20#000d,0\x206px\x2018px\x20#000b;}\x0a#cracky-tab-gui\x20button{display:flex;align-items:center;border:0;margin:0;width:100%;cursor:pointer;background:#0008;color:#fff;text-align:left;padding:0;font-weight:500;}\x0a#cracky-tab-gui\x20.cracky-tab-category-icon{display:grid;place-items:center;background:#000b;width:34px;min-width:34px;height:32px;}\x0a#cracky-tab-gui\x20svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}\x0a#cracky-tab-gui\x20.cracky-tab-category-name{padding:7px\x2012px;font-size:14px!important;line-height:18px;flex:1;}\x0a#cracky-tab-gui\x20.cracky-tab-selected\x20.cracky-tab-category-name{background:var(--cracky-tab-accent,#4677ff);}\x0a#cracky-tab-gui\x20.cracky-tab-selected\x20.cracky-tab-category-icon{color:var(--cracky-tab-accent,#4677ff);}\x0a#cracky-tab-gui\x20.cracky-tab-modules{border-radius:5px;overflow:auto;background:#0008;min-width:130px;max-height:192px;scrollbar-width:none;}\x0a#cracky-tab-gui\x20.cracky-tab-module{font-size:12px!important;line-height:18px;padding:6px\x2015px\x206px\x2010px;white-space:nowrap;min-height:30px;color:#d3d3d3;background:transparent;}\x0a#cracky-tab-gui\x20.cracky-tab-module[aria-pressed=true]{color:#fff;}\x0a#cracky-tab-gui\x20.cracky-tab-module.cracky-tab-selected{background:#0006;padding-left:15px;}\x0a#cracky-tab-gui\x20.cracky-tab-module:disabled{opacity:.4;cursor:not-allowed;}\x0a#cracky-tab-gui\x20button:focus-visible{outline:1px\x20solid\x20var(--cracky-tab-accent,#4677ff);outline-offset:-1px;}\x0a@media(prefers-reduced-motion:reduce){#cracky-watermark\x20.cracky-wordmark{animation:none!important;}}\x0a"),
        document["documentElement"]["append"](_0x739955));
    }
    ["tabGuiGroups"]() {
      return Object["keys"](_0x4298fa)
        ["sort"](
          (_0x1c65eb, _0x18236b) =>
            _0x18236b["length"] - _0x1c65eb["length"] ||
            _0x1c65eb["localeCompare"](_0x18236b),
        )
        ["map"]((_0x4f74e2) => ({
          category: _0x4f74e2,
          modules: _0x101c16["filter"](
            (_0x5a3c32) =>
              _0x5a3c32["category"] === _0x4f74e2 && _0x5a3c32["setting"],
          ),
        }))
        ["filter"]((_0x7e42be) => _0x7e42be["modules"]["length"]);
    }
    ["updateClientHud"](_0x335db7 = ![]) {
      if (
        !this["settings"]["watermarkEnabled"] &&
        !this["settings"]["tabGuiEnabled"]
      ) {
        (clearTimeout(this["clientHudTimer"]),
          (this["clientHudTimer"] = null),
          this["hideClientHud"]());
        return;
      }
      if (!this["clientHudTimer"])
        this["clientHudTimer"] = setTimeout(() => {
          ((this["clientHudTimer"] = null), this["updateClientHud"]());
        }, 0xfa);
      if (!this["isGameplayAllowed"]() || !document["body"]) {
        this["hideClientHud"]();
        return;
      }
      const _0xd3365a = Date["now"]();
      if (
        !_0x335db7 &&
        this["clientHudLastPoll"] != null &&
        _0xd3365a - this["clientHudLastPoll"] < 0x64
      )
        return;
      ((this["clientHudLastPoll"] = _0xd3365a),
        this["installClientHudStyle"]());
      if (this["settings"]["watermarkEnabled"]) {
        const _0x5334de =
          this["settings"]["watermarkMode"] === "liquidbounce"
            ? "liquidbounce"
            : "crackyio";
        !this["watermarkElement"]?.["isConnected"] &&
          ((this["watermarkElement"] = document["createElement"]("div")),
          (this["watermarkElement"]["id"] = "cracky-watermark"),
          document["body"]["append"](this["watermarkElement"]),
          (this["watermarkSignature"] = null));
        if (_0x5334de !== this["watermarkSignature"]) {
          ((this["watermarkElement"]["dataset"]["mode"] = _0x5334de),
            this["watermarkElement"]["replaceChildren"]());
          if (_0x5334de === "liquidbounce") {
            const _0x553dbd = document["createElement"]("img");
            ((_0x553dbd["alt"] = "LiquidBounce"),
              (_0x553dbd["draggable"] = ![]));
            let _0x1997cc =
              "https://raw.githubusercontent.com/CCBlueX/LiquidBounce/nextgen/src-theme/public/img/lb-logo.svg";
            try {
              if (typeof GM_getResourceURL === "function")
                _0x1997cc = GM_getResourceURL("liquidBounceLogo") || _0x1997cc;
            } catch (_0x5c7355) {}
            (_0x553dbd["addEventListener"](
              "error",
              () => {
                _0x553dbd["replaceWith"](
                  document["createTextNode"]("LiquidBounce"),
                );
              },
              { once: !![] },
            ),
              (_0x553dbd["src"] = _0x1997cc),
              this["watermarkElement"]["append"](_0x553dbd));
          } else
            this["watermarkElement"]["innerHTML"] =
              this["getLogoHtml"]() +
              "<span\x20class=\x22cracky-wordmark\x22>cracky.io</span>";
          this["watermarkSignature"] = _0x5334de;
        }
        this["watermarkElement"]["style"]["visibility"] = this[
          "isClickGuiVisible"
        ]()
          ? "hidden"
          : "visible";
      } else
        (this["watermarkElement"]?.["remove"](),
          (this["watermarkElement"] = null),
          (this["watermarkSignature"] = null));
      if (!this["settings"]["tabGuiEnabled"]) {
        (this["tabGuiElement"]?.["remove"](),
          (this["tabGuiElement"] = null),
          (this["tabGuiSignature"] = null));
        return;
      }
      const _0x3bc2b8 = this["tabGuiGroups"]();
      this["tabGuiCategory"] = Math["max"](
        0x0,
        Math["min"](_0x3bc2b8["length"] - 0x1, this["tabGuiCategory"] || 0x0),
      );
      const _0x5308ac = _0x3bc2b8[this["tabGuiCategory"]];
      this["tabGuiModule"] = Math["max"](
        0x0,
        Math["min"](
          _0x5308ac["modules"]["length"] - 0x1,
          this["tabGuiModule"] || 0x0,
        ),
      );
      const _0xb88e08 = JSON["stringify"]([
        this["tabGuiCategory"],
        this["tabGuiModule"],
        !!this["tabGuiExpanded"],
        _0x101c16["map"](
          (_0x1ff873) => !!this["settings"][_0x1ff873["setting"]],
        ),
      ]);
      let _0x448dee = this["tabGuiElement"];
      !_0x448dee?.["isConnected"] &&
        ((_0x448dee = document["createElement"]("div")),
        (_0x448dee["id"] = "cracky-tab-gui"),
        _0x448dee["setAttribute"]("aria-label", "TabGUI"),
        document["body"]["append"](_0x448dee),
        (this["tabGuiElement"] = _0x448dee),
        (this["tabGuiSignature"] = null));
      ((_0x448dee["style"]["top"] = this["settings"]["watermarkEnabled"]
        ? "86px"
        : "14px"),
        _0x448dee["style"]["setProperty"](
          "--cracky-tab-accent",
          this["normalizeColor"](this["settings"]["tabGuiColor"], "#4677ff"),
        ),
        (_0x448dee["style"]["visibility"] = this["isClickGuiVisible"]()
          ? "hidden"
          : "visible"));
      if (!_0x335db7 && _0xb88e08 === this["tabGuiSignature"]) return;
      _0x448dee["replaceChildren"]();
      const _0xe6dddb = document["createElement"]("div");
      ((_0xe6dddb["className"] = "cracky-tab-categories"),
        _0x448dee["append"](_0xe6dddb),
        _0x3bc2b8["forEach"](({ category: _0x2c37d7 }, _0x232f1c) => {
          const _0x561d6f = document["createElement"]("button");
          ((_0x561d6f["type"] = "button"),
            (_0x561d6f["className"] =
              "cracky-tab-category" +
              (_0x232f1c === this["tabGuiCategory"]
                ? "\x20cracky-tab-selected"
                : "")),
            _0x561d6f["setAttribute"](
              "aria-expanded",
              String(
                _0x232f1c === this["tabGuiCategory"] &&
                  !!this["tabGuiExpanded"],
              ),
            ),
            (_0x561d6f["innerHTML"] =
              "<span\x20class=\x22cracky-tab-category-icon\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20aria-hidden=\x22true\x22>" +
              _0x4298fa[_0x2c37d7] +
              "</svg></span><span\x20class=\x22cracky-tab-category-name\x22>" +
              _0x2c37d7 +
              "</span>"),
            _0x561d6f["addEventListener"]("click", () => {
              ((this["tabGuiCategory"] = _0x232f1c),
                (this["tabGuiModule"] = 0x0),
                (this["tabGuiExpanded"] = !![]),
                this["updateClientHud"](!![]));
            }),
            _0xe6dddb["append"](_0x561d6f));
        }));
      if (this["tabGuiExpanded"]) {
        const _0x171bce = document["createElement"]("div");
        ((_0x171bce["className"] = "cracky-tab-modules"),
          _0x448dee["append"](_0x171bce),
          _0x5308ac["modules"]["forEach"]((_0x10d80e, _0x33766d) => {
            const _0x244b14 = document["createElement"]("button");
            ((_0x244b14["type"] = "button"),
              (_0x244b14["textContent"] = _0x10d80e["name"]),
              (_0x244b14["className"] =
                "cracky-tab-module" +
                (_0x33766d === this["tabGuiModule"]
                  ? "\x20cracky-tab-selected"
                  : "")),
              (_0x244b14["dataset"]["setting"] = _0x10d80e["setting"]),
              (_0x244b14["disabled"] = this["isUnavailableFeature"](
                _0x10d80e["setting"],
              )),
              _0x244b14["setAttribute"](
                "aria-pressed",
                String(
                  !_0x244b14["disabled"] &&
                    !!this["settings"][_0x10d80e["setting"]],
                ),
              ),
              _0x244b14["addEventListener"]("click", () => {
                ((this["tabGuiModule"] = _0x33766d),
                  this["toggleMenuSetting"](
                    _0x10d80e["setting"],
                    document["querySelector"](".anonimbiri-menu-container"),
                  ));
              }),
              _0x171bce["append"](_0x244b14));
          }));
        const _0x4f70a3 = _0x171bce["children"][this["tabGuiModule"]];
        if (_0x4f70a3["offsetTop"] < _0x171bce["scrollTop"])
          _0x171bce["scrollTop"] = _0x4f70a3["offsetTop"];
        else {
          if (
            _0x4f70a3["offsetTop"] + _0x4f70a3["offsetHeight"] >
            _0x171bce["scrollTop"] + _0x171bce["clientHeight"]
          )
            _0x171bce["scrollTop"] =
              _0x4f70a3["offsetTop"] +
              _0x4f70a3["offsetHeight"] -
              _0x171bce["clientHeight"];
        }
      }
      this["tabGuiSignature"] = _0xb88e08;
    }
    ["handleTabGuiKey"](_0x8ff60f) {
      if (
        !this["settings"]["tabGuiEnabled"] ||
        !this["isGameplayAllowed"]() ||
        this["isClickGuiVisible"]() ||
        this["isBindingHotkey"] ||
        document["activeElement"]?.["closest"]?.(
          "input,textarea,select,[contenteditable]:not([contenteditable=false])",
        )
      )
        return ![];
      if (
        !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"][
          "includes"
        ](_0x8ff60f["code"])
      )
        return ![];
      (_0x8ff60f["preventDefault"](),
        _0x8ff60f["stopImmediatePropagation"]?.(),
        _0x8ff60f["stopPropagation"]());
      const _0x2a2229 = this["tabGuiGroups"](),
        _0x1d9d78 = this["tabGuiCategory"] || 0x0,
        _0x1480bf = _0x2a2229[_0x1d9d78]["modules"];
      if (_0x8ff60f["code"] === "ArrowLeft")
        ((this["tabGuiExpanded"] = ![]), (this["tabGuiModule"] = 0x0));
      else {
        if (_0x8ff60f["code"] === "ArrowRight") this["tabGuiExpanded"] = !![];
        else {
          if (_0x8ff60f["code"] === "Enter") {
            if (this["tabGuiExpanded"] && !_0x8ff60f["repeat"])
              this["toggleMenuSetting"](
                _0x1480bf[this["tabGuiModule"] || 0x0]["setting"],
                document["querySelector"](".anonimbiri-menu-container"),
              );
          } else {
            const _0x2c3555 = _0x8ff60f["code"] === "ArrowDown" ? 0x1 : -0x1;
            if (this["tabGuiExpanded"])
              this["tabGuiModule"] =
                ((this["tabGuiModule"] || 0x0) +
                  _0x2c3555 +
                  _0x1480bf["length"]) %
                _0x1480bf["length"];
            else
              ((this["tabGuiCategory"] =
                (_0x1d9d78 + _0x2c3555 + _0x2a2229["length"]) %
                _0x2a2229["length"]),
                (this["tabGuiModule"] = 0x0));
          }
        }
      }
      return (this["updateClientHud"](!![]), !![]);
    }
    ["applyHudTheme"](
      _0x2c8d4b = !!this["settings"]["themeHudEnabled"] &&
        this["isAccessAllowed"](),
    ) {
      const _0x375dbb = document["documentElement"];
      if (!_0x375dbb) return;
      _0x375dbb["dataset"]["crackyHud"] = _0x2c8d4b ? "on" : "off";
      if (!_0x2c8d4b || document["getElementById"]("cracky-hud-style")) return;
      const _0x560903 = document["createElement"]("style");
      ((_0x560903["id"] = "cracky-hud-style"),
        (_0x560903["textContent"] =
          "\x0ahtml[data-cracky-hud=on]{--cracky-hud-bg:color-mix(in\x20srgb,var(--cracky-surface)\x2094%,transparent);--cracky-hud-edge:color-mix(in\x20srgb,var(--cracky-secondary)\x2060%,transparent);}\x0ahtml[data-cracky-hud=on][data-cracky-layout=dropdown]{--cracky-hud-bg:var(--cracky-panel-surface,#111214ed);}\x0ahtml[data-cracky-hud=on]\x20:is(#bottomLeftPlayer,#ammoHolder,#weapHolder\x20.weapItem,#killStreakHolder\x20.killStreakItem){background-color:var(--cracky-hud-bg)!important;border:1px\x20solid\x20var(--cracky-hud-edge)!important;border-radius:10px!important;box-shadow:0\x206px\x2022px\x20#0005,0\x200\x2018px\x20color-mix(in\x20srgb,var(--cracky-primary)\x2022%,transparent),inset\x200\x200\x200\x201px\x20color-mix(in\x20srgb,var(--cracky-secondary)\x2010%,transparent)!important;backdrop-filter:blur(12px);}\x0ahtml[data-cracky-hud=on]\x20:is(#bottomLeftPlayer,#ammoHolder,#weapHolder,#killStreakHolder)\x20:not(.material-icons):not(.material-icons-outlined):not(.material-symbols-outlined):not(.material-symbols-rounded){font-family:\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none!important;letter-spacing:normal!important;}\x0ahtml[data-cracky-hud=on]\x20:is(#bottomLeftPlayerLeft,#bottomLeftPlayerRight,#bottomLeftTeamHolder,#bottomLeftTeamType,#bottomLeftTeamName,#bottomLeftHealthBar,#ammoHolder\x20.greyInner,#weapHolder\x20.weapItemInner){background-color:transparent!important;}\x0ahtml[data-cracky-hud=on]\x20#bottomLeftPlayerLeft{overflow:hidden;border-radius:7px!important;}\x0ahtml[data-cracky-hud=on]\x20#bottomLeftTeamType{font-size:12px!important;color:#b6bdcf!important;}\x0ahtml[data-cracky-hud=on]\x20#bottomLeftTeamName{font-size:14px!important;color:var(--cracky-secondary)!important;font-weight:600!important;}\x0ahtml[data-cracky-hud=on]\x20#bottomLeftHealth{font-size:26px!important;line-height:1.15!important;font-weight:700!important;color:#f5f6fa!important;}\x0ahtml[data-cracky-hud=on]\x20#bottomLeftHealthBar\x20.nHealthBarSeg{background-color:#ffffff12!important;border-radius:4px!important;overflow:hidden;}\x0ahtml[data-cracky-hud=on]\x20#bottomLeftHealthBar\x20.nHpBSeg{background:linear-gradient(115deg,var(--cracky-primary),var(--cracky-secondary))!important;border-radius:4px!important;box-shadow:0\x200\x208px\x20color-mix(in\x20srgb,var(--cracky-primary)\x2016%,transparent);}\x0ahtml[data-cracky-hud=on]\x20#ammoVal{font-size:28px!important;font-weight:700!important;color:var(--cracky-secondary)!important;}\x0ahtml[data-cracky-hud=on]\x20#ammoMax{font-size:16px!important;color:#adb6c8!important;}\x0ahtml[data-cracky-hud=on]\x20#weapHolder\x20.weapItemInner{border-radius:7px!important;}\x0ahtml[data-cracky-hud=on]\x20#weapHolder\x20:is(.weapKey,.weapSkin){background:var(--cracky-hud-bg)!important;border:1px\x20solid\x20#ffffff12!important;border-radius:4px!important;color:var(--cracky-secondary)!important;font-size:11px!important;line-height:1.4!important;}\x0ahtml[data-cracky-hud=on]\x20#weapHolder\x20.weapItem{color:#edf1fa!important;font-size:12px!important;}\x0ahtml[data-cracky-hud=on]\x20#killStreakHolder\x20.killStreakKey{color:var(--cracky-secondary)!important;}\x0a"),
        _0x375dbb["append"](_0x560903));
    }
    ["isAccessAllowed"]() {
      return (
        typeof CrackyAccess === "undefined" || CrackyAccess["isUnlocked"]()
      );
    }
    ["isRoundEnded"]() {
      if (
        this["game"]?.["gameClosed"] === !![] ||
        this["game"]?.["ui"]?.["hasEndScreen"] === !![]
      )
        return !![];
      const _0x1cbc8b = document["getElementById"]("uiBase");
      if (_0x1cbc8b?.["classList"]?.["contains"]("onEndScrn")) return !![];
      const _0xeb40a0 = document["getElementById"]("endInfo"),
        _0x21cc9f = document["getElementById"]("endUI");
      return (
        _0xeb40a0?.["style"]?.["display"] === "block" &&
        !!_0x21cc9f &&
        _0x21cc9f["style"]["display"] !== "none"
      );
    }
    ["isGameplayAllowed"]() {
      return (
        this["isAccessAllowed"]() &&
        !this["isRoundEnded"]() &&
        this["me"]?.["active"] !== ![] &&
        !(
          Number["isFinite"](this["me"]?.["health"]) &&
          this["me"]["health"] <= 0x0
        )
      );
    }
    ["setAccessLocked"]() {
      (this["applyHudTheme"](![]),
        this["hideArrayList"](),
        this["hideClientHud"](),
        this["closeColorPicker"]?.(),
        this["restoreWorldModulation"](),
        this["restoreCustomFog"](
          !!this["deferVisualDisposals"] && this["isAccessAllowed"](),
        ),
        this["restoreChams"](),
        this["restoreMeshEffect"](this["weaponChamsMeshes"]),
        this["restoreMeshEffect"](this["glowMeshes"]),
        this["clearTrailEffects"]());
      if (!this["isAccessAllowed"]()) this["restoreNameProtect"]();
      this["restoreNativeOptions"]();
      const _0x2daf6d = this["settings"]["wireframeEnabled"];
      this["settings"]["wireframeEnabled"] = ![];
      try {
        this["updateWireframe"]();
      } catch (_0x2dc5c1) {
        console["warn"](
          "cracky.io:\x20Could\x20not\x20restore\x20wireframe",
          _0x2dc5c1,
        );
      }
      ((this["settings"]["wireframeEnabled"] = _0x2daf6d),
        this["restoreCameraZoom"](),
        (this["legitTarget"] = null),
        (this["lastAimTarget"] = null),
        (this["aimOffset"] = { x: 0x0, y: 0x0 }));
    }
    ["suspendGameplay"]() {
      if (this["gameplaySuspended"]) return;
      this["deferVisualDisposals"] = !![];
      try {
        this["setAccessLocked"]();
      } finally {
        ((this["deferVisualDisposals"] = ![]),
          (this["gameplaySuspended"] = !![]));
      }
    }
    ["disposeOwned"](_0x82f4d6) {
      if (!_0x82f4d6?.["dispose"]) return;
      if (!this["deferVisualDisposals"]) {
        _0x82f4d6["dispose"]();
        return;
      }
      this["pendingOwnedDisposals"] ||= new Set();
      if (this["pendingOwnedDisposals"]["size"] >= 0x800) {
        _0x82f4d6["dispose"]();
        return;
      }
      this["pendingOwnedDisposals"]["add"](_0x82f4d6);
      if (!this["ownedDisposalTimer"])
        this["ownedDisposalTimer"] = setTimeout(
          () => this["flushOwnedDisposals"](),
          0x10,
        );
    }
    ["flushOwnedDisposals"]() {
      this["ownedDisposalTimer"] = null;
      let _0x1a5a24 = 0x8;
      for (const _0x32e6f2 of this["pendingOwnedDisposals"] || []) {
        this["pendingOwnedDisposals"]["delete"](_0x32e6f2);
        try {
          _0x32e6f2["dispose"]();
        } catch (_0xe1b21c) {}
        if (--_0x1a5a24 === 0x0) break;
      }
      if (this["pendingOwnedDisposals"]?.["size"])
        this["ownedDisposalTimer"] = setTimeout(
          () => this["flushOwnedDisposals"](),
          0x10,
        );
    }
    ["espPalette"](_0x2c3f20 = ![]) {
      const _0x523f44 = this["getTheme"]();
      return {
        primary: _0x2c3f20
          ? this["settings"]["botColor"]
          : this["settings"]["espUseTheme"] !== ![]
            ? _0x523f44["primary"]
            : this["settings"]["espColor"],
        secondary:
          this["settings"]["espUseTheme"] !== ![]
            ? _0x523f44["secondary"]
            : this["settings"]["boxColor"],
        surface: _0x523f44["surface"],
      };
    }
    ["drawESPBox"](
      _0x1e891d,
      _0x1db6bf,
      _0x5f3156,
      _0x3fced5,
      _0x15d280,
      _0x200f53,
    ) {
      const _0x307ede = _0x1e891d["createLinearGradient"](
        _0x1db6bf,
        _0x5f3156,
        _0x1db6bf + _0x3fced5,
        _0x5f3156 + _0x15d280,
      );
      (_0x307ede["addColorStop"](0x0, _0x200f53["primary"]),
        _0x307ede["addColorStop"](0x1, _0x200f53["secondary"]),
        (_0x1e891d["strokeStyle"] = _0x307ede),
        (_0x1e891d["shadowColor"] = _0x200f53["primary"]),
        (_0x1e891d["shadowBlur"] = 0x8),
        (_0x1e891d["lineWidth"] = 1.8));
      if (this["settings"]["espBoxStyle"] === "full")
        _0x1e891d["strokeRect"](_0x1db6bf, _0x5f3156, _0x3fced5, _0x15d280);
      else {
        const _0x1d8807 = Math["min"](_0x3fced5 * 0.26, _0x15d280 * 0.18, 0x16);
        _0x1e891d["beginPath"]();
        for (const [_0x30ca6a, _0x48a584, _0x5cea26, _0x191051] of [
          [_0x1db6bf, _0x5f3156, 0x1, 0x1],
          [_0x1db6bf + _0x3fced5, _0x5f3156, -0x1, 0x1],
          [_0x1db6bf, _0x5f3156 + _0x15d280, 0x1, -0x1],
          [_0x1db6bf + _0x3fced5, _0x5f3156 + _0x15d280, -0x1, -0x1],
        ]) {
          (_0x1e891d["moveTo"](_0x30ca6a + _0x5cea26 * _0x1d8807, _0x48a584),
            _0x1e891d["lineTo"](_0x30ca6a, _0x48a584),
            _0x1e891d["lineTo"](_0x30ca6a, _0x48a584 + _0x191051 * _0x1d8807));
        }
        _0x1e891d["stroke"]();
      }
      _0x1e891d["shadowBlur"] = 0x0;
    }
    ["drawESPHealthBar"](
      _0x5b722a,
      _0x49fa87,
      _0x5513b7,
      _0xcf4bd0,
      _0x2b2443,
      _0x45dede,
      _0x2983be,
    ) {
      if (
        this["settings"]["espHealthBar"] === ![] ||
        !Number["isFinite"](_0x2b2443) ||
        !Number["isFinite"](_0x45dede) ||
        !(_0x45dede > 0x0) ||
        !Number["isFinite"](_0xcf4bd0) ||
        _0xcf4bd0 <= 0x0
      )
        return;
      const _0x38d875 = Math["max"](
          0x0,
          Math["min"](0x1, _0x2b2443 / _0x45dede),
        ),
        _0x47d91e = Math["max"](
          0x1,
          Math["min"](0x10, Number(this["settings"]["healthBarWidth"]) || 0x4),
        ),
        _0x5e48ab = _0x49fa87 - 0x3 - _0x47d91e;
      _0x5b722a["save"]();
      try {
        ((_0x5b722a["shadowBlur"] = 0x0),
          (_0x5b722a["fillStyle"] = "rgba(0,0,0,0.5)"),
          _0x5b722a["fillRect"](_0x5e48ab, _0x5513b7, _0x47d91e, _0xcf4bd0));
        const _0x1cccec =
            _0x38d875 > 0.75
              ? "#43A047"
              : _0x38d875 > 0.4
                ? "#FDD835"
                : "#E53935",
          _0x2a047b = this["settings"]["healthBarUseTheme"]
            ? this["getTheme"]()
            : _0x2983be;
        if (this["settings"]["healthBarUseTheme"]) {
          const _0x2e4cd2 = _0x5b722a["createLinearGradient"](
            _0x5e48ab,
            _0x5513b7,
            _0x5e48ab,
            _0x5513b7 + _0xcf4bd0,
          );
          (_0x2e4cd2["addColorStop"](0x0, _0x2a047b["primary"]),
            _0x2e4cd2["addColorStop"](0x1, _0x2a047b["secondary"]),
            (_0x5b722a["fillStyle"] = _0x2e4cd2));
        } else _0x5b722a["fillStyle"] = _0x1cccec;
        ((_0x5b722a["shadowColor"] = this["settings"]["healthBarUseTheme"]
          ? _0x2a047b["primary"]
          : _0x1cccec),
          (_0x5b722a["shadowBlur"] =
            this["settings"]["healthBarShadow"] === ![] ? 0x0 : 0x6),
          _0x5b722a["fillRect"](
            _0x5e48ab,
            _0x5513b7 + _0xcf4bd0 * (0x1 - _0x38d875),
            _0x47d91e,
            _0xcf4bd0 * _0x38d875,
          ),
          (_0x5b722a["font"] = "bold\x2011px\x20Rajdhani,sans-serif"),
          (_0x5b722a["textAlign"] = "right"),
          (_0x5b722a["fillStyle"] = "#fff"),
          (_0x5b722a["shadowColor"] = "#000"),
          (_0x5b722a["shadowBlur"] =
            this["settings"]["healthBarShadow"] === ![] ? 0x0 : 0x4),
          _0x5b722a["fillText"](
            "♥\x20" + Math["round"](_0x2b2443),
            _0x5e48ab - 0x4,
            _0x5513b7 + 0xb,
          ));
      } finally {
        _0x5b722a["restore"]();
      }
    }
    ["preloadESPAssets"]() {
      ((this["espCharImg"] = new Image()),
        (this["espCharImg"]["crossOrigin"] = "anonymous"),
        (this["espCharImg"]["onload"] = () => {
          this["espCharLoaded"] = !![];
          if (this["espPreviewCtx"]) this["renderESPPreview"]();
        }),
        (this["espCharImg"]["src"] =
          "https://cdn.jsdelivr.net/gh/GameSketchers/AimbaeShiro@main/Assets/character-preview.png"),
        (this["espWeaponImg"] = new Image()),
        (this["espWeaponImg"]["crossOrigin"] = "anonymous"),
        (this["espWeaponImg"]["onload"] = () => {
          this["espWeaponLoaded"] = !![];
          if (this["espPreviewCtx"]) this["renderESPPreview"]();
        }),
        (this["espWeaponImg"]["src"] =
          "https://assets.krunker.io/textures/weapons/icon_1.png"));
    }
    ["renderESPPreview"]() {
      const _0x38dd66 = this["espPreviewCanvas"];
      if (!_0x38dd66) return;
      const _0x4c4aab = this["espPreviewCtx"];
      if (!_0x4c4aab) return;
      const _0x352e14 = _0x38dd66["width"],
        _0x263b86 = _0x38dd66["height"];
      _0x4c4aab["clearRect"](0x0, 0x0, _0x352e14, _0x263b86);
      const _0x24b3ec = _0x4c4aab["createLinearGradient"](
          0x0,
          0x0,
          _0x352e14,
          _0x263b86,
        ),
        _0x349494 = this["espPalette"]();
      (_0x24b3ec["addColorStop"](0x0, _0x349494["surface"]),
        _0x24b3ec["addColorStop"](0x1, "#0c1220"),
        (_0x4c4aab["fillStyle"] = _0x24b3ec),
        _0x4c4aab["fillRect"](0x0, 0x0, _0x352e14, _0x263b86),
        (_0x4c4aab["strokeStyle"] = "rgba(169,220,255,0.07)"),
        (_0x4c4aab["lineWidth"] = 0x1));
      for (let _0x12d4e4 = 0x0; _0x12d4e4 < _0x352e14; _0x12d4e4 += 0x19) {
        (_0x4c4aab["beginPath"](),
          _0x4c4aab["moveTo"](_0x12d4e4, 0x0),
          _0x4c4aab["lineTo"](_0x12d4e4, _0x263b86),
          _0x4c4aab["stroke"]());
      }
      for (let _0x1dea3d = 0x0; _0x1dea3d < _0x263b86; _0x1dea3d += 0x19) {
        (_0x4c4aab["beginPath"](),
          _0x4c4aab["moveTo"](0x0, _0x1dea3d),
          _0x4c4aab["lineTo"](_0x352e14, _0x1dea3d),
          _0x4c4aab["stroke"]());
      }
      const _0x39de28 = _0x352e14 / 0x2;
      let _0xbebba9 = 0x37,
        _0x217ce8 = 0x136,
        _0x54f140 = 0x6e;
      if (this["espCharLoaded"] && this["espCharImg"]) {
        const _0x58e264 =
          this["espCharImg"]["width"] / this["espCharImg"]["height"];
        _0x54f140 = _0x217ce8 * _0x58e264;
        _0x54f140 > _0x352e14 - 0x10 &&
          ((_0x54f140 = _0x352e14 - 0x10), (_0x217ce8 = _0x54f140 / _0x58e264));
        const _0x5d9c9e = _0x39de28 - _0x54f140 / 0x2;
        ((_0xbebba9 = (_0x263b86 - _0x217ce8) / 0x2 - 0xa),
          (_0x4c4aab["globalAlpha"] = 0.9),
          _0x4c4aab["drawImage"](
            this["espCharImg"],
            _0x5d9c9e,
            _0xbebba9,
            _0x54f140,
            _0x217ce8,
          ),
          (_0x4c4aab["globalAlpha"] = 0x1));
      } else
        ((_0x4c4aab["fillStyle"] = _0x349494["secondary"] + "35"),
          _0x4c4aab["fillRect"](_0x39de28 - 0x12, 0x55, 0x24, 0x24),
          _0x4c4aab["fillRect"](_0x39de28 - 0x1d, 0x7d, 0x3a, 0x68),
          _0x4c4aab["fillRect"](_0x39de28 - 0x2d, 0x87, 0xc, 0x56),
          _0x4c4aab["fillRect"](_0x39de28 + 0x21, 0x87, 0xc, 0x56),
          _0x4c4aab["fillRect"](_0x39de28 - 0x1b, 0xe9, 0x17, 0x66),
          _0x4c4aab["fillRect"](_0x39de28 + 0x4, 0xe9, 0x17, 0x66));
      const _0x4dc0f2 = 0xa,
        _0xe40aa7 = _0x39de28 - _0x54f140 / 0x2 - _0x4dc0f2,
        _0x2c8aab = _0xbebba9 - _0x4dc0f2,
        _0x3cc01e = _0x54f140 + _0x4dc0f2 * 0x2,
        _0xe5a4fe = _0x217ce8 + _0x4dc0f2 * 0x2;
      if (this["settings"]["espLines"]) {
        const _0x37f4d0 = (_0xd3d70f, _0x320bce) => {
            let _0x1595e2 = parseInt(_0xd3d70f["slice"](0x1, 0x3), 0x10),
              _0x2486ed = parseInt(_0xd3d70f["slice"](0x3, 0x5), 0x10),
              _0x1dabe8 = parseInt(_0xd3d70f["slice"](0x5, 0x7), 0x10);
            return (
              "rgba(" +
              _0x1595e2 +
              "," +
              _0x2486ed +
              "," +
              _0x1dabe8 +
              "," +
              _0x320bce +
              ")"
            );
          },
          _0xba92a8 = _0x4c4aab["createLinearGradient"](
            _0x352e14 / 0x2,
            _0x263b86,
            _0x39de28,
            _0x2c8aab + _0xe5a4fe,
          );
        (_0xba92a8["addColorStop"](0x0, _0x37f4d0(_0x349494["primary"], 0.1)),
          _0xba92a8["addColorStop"](
            0x1,
            _0x37f4d0(_0x349494["secondary"], 0.9),
          ),
          (_0x4c4aab["strokeStyle"] = _0xba92a8),
          (_0x4c4aab["lineWidth"] = 1.8),
          (_0x4c4aab["shadowColor"] = _0x349494["primary"]),
          (_0x4c4aab["shadowBlur"] = 0x8),
          _0x4c4aab["beginPath"](),
          _0x4c4aab["moveTo"](_0x352e14 / 0x2, _0x263b86),
          _0x4c4aab["lineTo"](_0x39de28, _0x2c8aab + _0xe5a4fe),
          _0x4c4aab["stroke"](),
          (_0x4c4aab["shadowBlur"] = 0x0));
      }
      this["settings"]["espSquare"] &&
        this["drawESPBox"](
          _0x4c4aab,
          _0xe40aa7,
          _0x2c8aab,
          _0x3cc01e,
          _0xe5a4fe,
          _0x349494,
        );
      this["drawESPHealthBar"](
        _0x4c4aab,
        _0xe40aa7,
        _0x2c8aab,
        _0xe5a4fe,
        0x48,
        0x64,
        _0x349494,
      );
      if (this["settings"]["espNameTags"]) {
        const _0x33295e = "Player_01",
          _0xfd4f2d = this["settings"]["espWeaponIcons"]
            ? "\x20•\x20AK-47"
            : "",
          _0x3bec7c = _0x33295e + _0xfd4f2d;
        ((_0x4c4aab["font"] = "bold\x2013px\x20Rajdhani,sans-serif"),
          (_0x4c4aab["textAlign"] = "left"));
        const _0x464908 = _0x4c4aab["measureText"](_0x3bec7c)["width"];
        let _0x45fb8d = 0x0,
          _0xebce62 = 0x12;
        this["settings"]["espWeaponIcons"] &&
          this["espWeaponLoaded"] &&
          this["espWeaponImg"] &&
          (_0x45fb8d =
            this["espWeaponImg"]["width"] *
            (_0xebce62 / this["espWeaponImg"]["height"]));
        const _0x1a7c0a =
            _0x464908 + (_0x45fb8d > 0x0 ? _0x45fb8d + 0x6 : 0x0) + 0x10,
          _0x23234a = 0x1a,
          _0x251c09 = _0x39de28 - _0x1a7c0a / 0x2,
          _0x2575b6 = _0x2c8aab - _0x23234a - 0x8;
        this["settings"]["espInfoBackground"] &&
          ((_0x4c4aab["fillStyle"] = _0x349494["surface"] + "dd"),
          (_0x4c4aab["strokeStyle"] = _0x349494["secondary"]),
          (_0x4c4aab["lineWidth"] = 0x1),
          (_0x4c4aab["shadowColor"] = _0x349494["primary"]),
          (_0x4c4aab["shadowBlur"] = 0x8),
          _0x4c4aab["beginPath"](),
          _0x4c4aab["roundRect"](
            _0x251c09,
            _0x2575b6,
            _0x1a7c0a,
            _0x23234a,
            0x4,
          ),
          _0x4c4aab["fill"](),
          _0x4c4aab["stroke"](),
          (_0x4c4aab["shadowBlur"] = 0x0));
        ((_0x4c4aab["fillStyle"] = "#fff"),
          (_0x4c4aab["textAlign"] = "left"),
          (_0x4c4aab["shadowColor"] = "rgba(169,220,255,0.5)"),
          (_0x4c4aab["shadowBlur"] = 0x4),
          _0x4c4aab["fillText"](_0x3bec7c, _0x251c09 + 0x8, _0x2575b6 + 0x12),
          (_0x4c4aab["shadowBlur"] = 0x0));
        if (_0x45fb8d > 0x0) {
          const _0x35eef1 = _0x251c09 + 0x8 + _0x464908 + 0x6,
            _0x235066 = _0x2575b6 + (_0x23234a - _0xebce62) / 0x2;
          _0x4c4aab["drawImage"](
            this["espWeaponImg"],
            _0x35eef1,
            _0x235066,
            _0x45fb8d,
            _0xebce62,
          );
        }
      }
      ((_0x4c4aab["font"] = "bold\x2012px\x20Rajdhani,sans-serif"),
        (_0x4c4aab["textAlign"] = "center"),
        (_0x4c4aab["fillStyle"] = "#fff"),
        (_0x4c4aab["shadowColor"] = "#000"),
        (_0x4c4aab["shadowBlur"] = 0x3),
        _0x4c4aab["fillText"]("[24m]", _0x39de28, _0x2c8aab + _0xe5a4fe + 0x12),
        (_0x4c4aab["shadowBlur"] = 0x0));
    }
    ["initializeNotifierContainer"]() {
      if (!document["documentElement"]) {
        document["addEventListener"](
          "DOMContentLoaded",
          () => this["initializeNotifierContainer"](),
          { once: !![] },
        );
        return;
      }
      let _0x29b500 = document["getElementById"]("anonimbiri-notify-wrap");
      (!_0x29b500 &&
        ((_0x29b500 = document["createElement"]("div")),
        (_0x29b500["id"] = "anonimbiri-notify-wrap"),
        document["documentElement"]["appendChild"](_0x29b500)),
        (this["notifyContainer"] = _0x29b500));
    }
    ["getLogoHtml"]() {
      return (
        "<img\x20class=\x22cracky-logo\x22\x20src=\x22" +
        _0x5c88cc +
        "\x22\x20alt=\x22cracky.io\x22\x20width=\x22550\x22\x20height=\x22600\x22\x20draggable=\x22false\x22\x20decoding=\x22async\x22>"
      );
    }
    ["notify"]({
      title: title = "Notification",
      message: message = "",
      actionText: _0x5515ab,
      onAction: _0x245436,
      timeout: timeout = 0x1770,
    } = {}) {
      if (!this["notifyContainer"]) {
        console["error"](
          "🌸\x20cracky.io:\x20Notifier\x20container\x20not\x20initialized.",
        );
        return;
      }
      const _0x309f4e = document["createElement"]("div");
      ((_0x309f4e["className"] = "anonimbiri-notify-card"),
        setTimeout(() => _0x309f4e["classList"]["add"]("visible"), 0xa));
      const _0x562174 = document["createElement"]("div");
      _0x562174["className"] = "anonimbiri-notify-content";
      const _0x3aec57 = document["createElement"]("div");
      ((_0x3aec57["className"] = "anonimbiri-notify-logo"),
        (_0x3aec57["innerHTML"] = this["getLogoHtml"]()));
      const _0x167560 = document["createElement"]("div");
      _0x167560["className"] = "anonimbiri-notify-texts";
      const _0x2c516c = document["createElement"]("label");
      ((_0x2c516c["className"] = "anonimbiri-notify-title"),
        (_0x2c516c["textContent"] = title));
      const _0x33294b = document["createElement"]("div");
      ((_0x33294b["className"] = "anonimbiri-notify-message"),
        (_0x33294b["textContent"] = message),
        _0x167560["append"](_0x2c516c, _0x33294b),
        _0x562174["append"](_0x3aec57, _0x167560));
      const _0xd44099 = document["createElement"]("div");
      _0xd44099["className"] = "anonimbiri-notify-controls";
      if (_0x5515ab && typeof _0x245436 === "function") {
        const _0x2c2678 = document["createElement"]("div");
        ((_0x2c2678["className"] = "anonimbiri-notify-action-btn"),
          (_0x2c2678["textContent"] = _0x5515ab),
          _0x2c2678["addEventListener"]("click", (_0x3ed632) => {
            (_0x3ed632["stopPropagation"](), _0x245436(), _0x435e24());
          }),
          _0xd44099["appendChild"](_0x2c2678));
      }
      (_0x309f4e["append"](_0x562174, _0xd44099),
        this["notifyContainer"]["appendChild"](_0x309f4e));
      let _0x390206;
      if (timeout > 0x0) _0x390206 = setTimeout(_0x435e24, timeout);
      function _0x435e24() {
        (clearTimeout(_0x390206),
          _0x309f4e["classList"]["remove"]("visible"),
          setTimeout(() => _0x309f4e["remove"](), 0x15e));
      }
      return { dismiss: _0x435e24 };
    }
    ["initializeLoader"]() {
      const _0x56a224 = this["pageWindow"] || window,
        _0x42418e = Date["now"]() + 0x1d4c0,
        _0x331ff8 = () => {
          if (this["hooksInitialized"]) return;
          if (_0x56a224["__THREE__"] && _0x56a224["windows"]?.["length"]) {
            try {
              this["initializeGameHooks"]();
            } catch (_0x280d14) {
              (this["setHookStatus"](
                "render\x20bridge\x20unavailable;\x20native\x20game\x20unchanged",
              ),
                console["warn"](
                  "🌸\x20cracky.io:\x20Could\x20not\x20attach\x20to\x20the\x20overlay.",
                  _0x280d14,
                ));
            }
            return;
          }
          if (Date["now"]() >= _0x42418e) {
            this["setHookStatus"](
              "native\x20startup\x20not\x20ready;\x20reload\x20after\x20the\x20site\x20finishes\x20loading",
            );
            return;
          }
          this["startupTimer"] = setTimeout(_0x331ff8, 0xfa);
        };
      _0x331ff8();
    }
    ["setHookStatus"](_0x38be26) {
      const _0x5ea485 = ["capture", "render", "input-install", "inputs"][
        "find"
      ]((_0x30ad37) => this["failedHooks"]?.["has"](_0x30ad37));
      if (_0x5ea485)
        _0x38be26 =
          _0x5ea485 + "\x20incompatible;\x20native\x20game\x20unchanged";
      if (this["hookStatus"] === _0x38be26) return;
      this["hookStatus"] = _0x38be26;
      const _0x5219d3 =
        typeof document !== "undefined" &&
        document["getElementById"]("cracky-hook-status");
      if (_0x5219d3) _0x5219d3["textContent"] = this["getHookStatusText"]();
    }
    ["getHookStatusText"]() {
      const _0x4629f7 = this["bridgeDiagnostics"],
        _0x487a1d = this["hookStats"];
      let _0x4d592e =
        "Game\x20hooks:\x20" + (this["hookStatus"] || "waiting\x20for\x20game");
      if (_0x4629f7) {
        _0x4d592e +=
          "\x20|\x20clears:\x20" +
          _0x4629f7["clears"] +
          ",\x20frames:\x20" +
          (_0x487a1d?.["frames"] || 0x0) +
          ",\x20inputs:\x20" +
          (_0x487a1d?.["inputs"] || 0x0);
        if (_0x4629f7["error"])
          _0x4d592e += "\x20|\x20bridge\x20error:\x20" + _0x4629f7["error"];
        else {
          if (_0x4629f7["clears"] && !_0x4629f7["callerVisible"])
            _0x4d592e += "\x20|\x20render\x20caller\x20unavailable";
        }
        if (
          this["ctx"] &&
          this["overlayBridge"] &&
          this["ctx"]["clearRect"] !== this["overlayBridge"] &&
          !this["hookStatus"]?.["includes"]("unsupported")
        )
          _0x4d592e += "\x20|\x20canvas\x20observer\x20replaced";
      }
      this["hookErrors"]?.["size"] &&
        (_0x4d592e +=
          "\x20|\x20disabled:\x20" +
          [...this["hookErrors"]]
            ["map"](([_0x2b8d74, _0x226979]) => _0x2b8d74 + ":\x20" + _0x226979)
            ["join"](";\x20"));
      if (this["aimStatus"])
        _0x4d592e += "\x20|\x20Aim:\x20" + this["aimStatus"];
      if (this["three"]?.["REVISION"])
        _0x4d592e += "\x20|\x20THREE:\x20r" + this["three"]["REVISION"];
      if (this["inputMethodName"])
        _0x4d592e +=
          "\x20|\x20Input:\x20" +
          this["inputMethodName"] +
          (_0x487a1d?.["packetLength"]
            ? "\x20(" + _0x487a1d["packetLength"] + "\x20slots)"
            : "");
      if (this["settings"]["espBones"])
        _0x4d592e +=
          "\x20|\x20Bones:\x20" +
          (this["bonesStatus"] || "waiting\x20for\x20models");
      if (this["settings"]["worldModulationEnabled"])
        _0x4d592e +=
          "\x20|\x20World:\x20" +
          (this["worldStatus"] || "waiting\x20for\x20map");
      if (this["settings"]["customFogEnabled"])
        _0x4d592e +=
          "\x20|\x20Fog:\x20" +
          (this["fogStatus"] || "waiting\x20for\x20scene");
      if (this["settings"]["chamsEnabled"])
        _0x4d592e +=
          "\x20|\x20Chams:\x20" +
          (this["chamsStatus"] || "waiting\x20for\x20models");
      if (this["settings"]["weaponChamsEnabled"])
        _0x4d592e +=
          "\x20|\x20Weapon\x20chams:\x20" +
          (this["weaponChamsStatus"] || "waiting\x20for\x20models");
      if (this["settings"]["glowEspEnabled"])
        _0x4d592e +=
          "\x20|\x20Glow:\x20" +
          (this["glowStatus"] || "waiting\x20for\x20models");
      if (
        this["settings"]["walkingTrailsEnabled"] ||
        this["settings"]["bulletTracersEnabled"]
      )
        _0x4d592e +=
          "\x20|\x20Trails:\x20" +
          (this["trailStatus"] || "waiting\x20for\x20samples");
      if (this["settings"]["nameProtectEnabled"])
        _0x4d592e +=
          "\x20|\x20NameProtect:\x20" +
          (this["nameProtectStatus"] || "waiting\x20for\x20logged-in\x20name");
      if (this["settings"]["instantReload"])
        _0x4d592e +=
          "\x20|\x20Reload:\x20" +
          (this["reloadStatus"] || "waiting\x20for\x20input") +
          "\x20(client\x20prediction\x20only)";
      if (this["settings"]["speedEnabled"])
        _0x4d592e +=
          "\x20|\x20Speed:\x20" +
          (this["speedStatus"] || "waiting\x20for\x20player");
      if (this["settings"]["rapidFireEnabled"])
        _0x4d592e +=
          "\x20|\x20Rapid\x20Fire:\x20" +
          (this["rapidFireStatus"] || "waiting\x20for\x20weapon");
      if (
        this["settings"]["speedEnabled"] ||
        this["settings"]["rapidFireEnabled"]
      )
        _0x4d592e +=
          "\x20(local\x20prediction;\x20server\x20acceptance\x20unverified)";
      if (this["settings"]["noRecoilEnabled"])
        _0x4d592e +=
          "\x20|\x20No\x20Recoil:\x20" +
          (this["noRecoilStatus"] || "waiting\x20for\x20player");
      if (this["settings"]["noScopeOverlayEnabled"])
        _0x4d592e +=
          "\x20|\x20Scope:\x20" +
          (this["scopeOverlayStatus"] || "waiting\x20for\x20scoped\x20weapon");
      if (
        this["settings"]["customCrosshairEnabled"] ||
        (this["settings"]["noScopeOverlayEnabled"] &&
          this["settings"]["noScopeCrosshairEnabled"])
      )
        _0x4d592e +=
          "\x20|\x20Crosshair:\x20" +
          (this["crosshairStatus"] || "waiting\x20for\x20player");
      if (this["settings"]["killsayEnabled"])
        _0x4d592e +=
          "\x20|\x20Killsay:\x20" +
          (this["killsayStatus"] || "waiting\x20for\x20player");
      if (this["settings"]["noZoomEnabled"])
        _0x4d592e +=
          "\x20|\x20No\x20Zoom:\x20" +
          (this["noZoomStatus"] || "waiting\x20for\x20ADS");
      if (
        this["settings"]["autoFireEnabled"] &&
        this["settings"]["autoFireSeedEnabled"]
      )
        _0x4d592e +=
          "\x20|\x20Seed:\x20" +
          (this["seedStatus"] ||
            "waiting\x20for\x20native\x20shot\x20validation");
      return _0x4d592e;
    }
    ["escapeHTML"](_0xc71cae) {
      return String(_0xc71cae)["replace"](
        /[&<>"']/g,
        (_0x1a2145) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\x22": "&quot;",
            "\x27": "&#39;",
          })[_0x1a2145],
      );
    }
    ["initializeGameHooks"]() {
      if (this["hooksInitialized"]) return;
      const _0x4e0eec = this["pageWindow"] || window,
        _0xf0d594 = _0x4e0eec["document"]["getElementById"]("game-overlay"),
        _0x1c049e = this["fromPage"](_0xf0d594?.["getContext"]("2d"));
      if (!_0x1c049e || typeof _0x1c049e["clearRect"] !== "function")
        throw new Error("Game\x20overlay\x20context\x20is\x20unavailable.");
      const _0x4903f4 = Object["getOwnPropertyDescriptor"](
          _0x1c049e,
          "clearRect",
        ),
        _0x56b2a8 = _0x1c049e["clearRect"],
        _0x35d085 = this["toPageFunction"]((_0x4636de) =>
          this["runHook"]("capture", () =>
            this["captureFrame"](this["fromPage"](_0x4636de)),
          ),
        ),
        _0x14536a = _0x4e0eec["Function"](
          "nativeClearRect",
          "observe",
          "var\x20state\x20=\x20{clears:\x200,\x20callerVisible:\x20false,\x20error:\x20null};" +
            "function\x20crackyClearRect()\x20{" +
            "var\x20result\x20=\x20Reflect.apply(nativeClearRect,\x20this,\x20arguments);" +
            "state.clears++;" +
            "try\x20{" +
            "var\x20render\x20=\x20crackyClearRect.caller;\x20state.callerVisible\x20=\x20!!render;" +
            "observe(render\x20&&\x20render.arguments);" +
            "}\x20catch\x20(error)\x20{\x20state.error\x20=\x20String(error\x20&&\x20error.message\x20||\x20error);\x20}" +
            "return\x20result;" +
            "}" +
            "crackyClearRect.diagnostics\x20=\x20state;\x20return\x20crackyClearRect;",
        ),
        _0x5820aa = _0x14536a(_0x56b2a8, _0x35d085);
      ((this["overlayBridge"] = _0x5820aa),
        (this["bridgeDiagnostics"] = this["fromPage"](
          _0x5820aa["diagnostics"],
        )),
        Object["defineProperty"](_0x1c049e, "clearRect", {
          value: _0x5820aa,
          writable: !![],
          configurable: !![],
          enumerable: ![],
        }),
        (this["detachOverlay"] = () => {
          if (_0x1c049e["clearRect"] !== _0x5820aa) return;
          if (_0x4903f4)
            Object["defineProperty"](_0x1c049e, "clearRect", _0x4903f4);
          else delete _0x1c049e["clearRect"];
        }),
        (this["ctx"] = _0x1c049e),
        (this["overlay"] = { canvas: _0xf0d594 }),
        (this["hooksInitialized"] = !![]),
        (this["hookStats"] = {
          frames: 0x0,
          inputs: 0x0,
          unmatchedClears: 0x0,
        }),
        this["setHookStatus"](
          "native\x20client\x20ready;\x20waiting\x20for\x20a\x20game\x20frame",
        ));
    }
    ["captureFrame"](_0x38aeef) {
      const _0x4c70e4 = this["fromPage"](_0x38aeef?.[0x1]),
        _0x3e0dc0 = this["fromPage"](_0x38aeef?.[0x2]),
        _0x293525 = this["fromPage"](_0x38aeef?.[0x3]);
      if (
        !Number["isFinite"](_0x38aeef?.[0x0]) ||
        !Array["isArray"](_0x4c70e4?.["players"]?.["list"]) ||
        !_0x293525?.["camera"] ||
        !_0x3e0dc0
      ) {
        ++this["hookStats"]["unmatchedClears"] >= 0x78 &&
          (this["detachOverlay"]?.(),
          this["restoreCustomCrosshair"](),
          this["setHookStatus"](
            "render\x20signature\x20unsupported;\x20native\x20game\x20unchanged",
          ));
        return;
      }
      ((this["scale"] = _0x38aeef[0x0]),
        (this["game"] = _0x4c70e4),
        (this["controls"] = _0x3e0dc0),
        (this["renderer"] = _0x293525));
      const _0x4741c7 = this["fromPage"](_0x38aeef[0x4]),
        _0x1e1463 = [];
      if (!_0x4741c7)
        for (const _0x27e89d of _0x4c70e4["players"]["list"]) {
          const _0x5db81a = this["fromPage"](_0x27e89d);
          if (_0x5db81a?.["isYou"] === !![] && !_0x5db81a["isBot"])
            _0x1e1463["push"](_0x5db81a);
        }
      ((this["me"] =
        _0x4741c7 || (_0x1e1463["length"] === 0x1 ? _0x1e1463[0x0] : null)),
        this["hookStats"]["frames"]++);
      if (!this["three"]) {
        const _0x269fee = this["fromPage"](
          _0x4c70e4["THREE"] || _0x293525["THREE"],
        );
        if (
          typeof _0x269fee?.["Vector3"] !== "function" ||
          typeof _0x269fee?.["Raycaster"] !== "function"
        ) {
          this["setHookStatus"](
            "render\x20connected;\x20THREE\x20API\x20unsupported",
          );
          return;
        }
        ((this["three"] = _0x269fee),
          (this["tempVector"] = new _0x269fee["Vector3"]()),
          (this["cameraPos"] = new _0x269fee["Vector3"]()),
          (this["rayC"] = new _0x269fee["Raycaster"]()),
          (this["vec2"] = new _0x269fee["Vector2"](0x0, 0x0)));
      }
      if (!this["me"]) {
        (this["suspendGameplay"](),
          this["setHookStatus"](
            "render\x20connected;\x20waiting\x20for\x20a\x20player",
          ));
        return;
      }
      if (this["framePending"]) return;
      ((this["framePending"] = !![]),
        queueMicrotask(() => {
          ((this["framePending"] = ![]),
            this["runHook"]("input-install", () => this["installInputHook"]()),
            this["runHook"]("render", () => this["onRenderFrame"]()));
        }));
    }
    ["findInputMethod"](_0x26a59) {
      if (!_0x26a59) return null;
      const _0x516e1f = new Map();
      for (
        let _0x35d580 = _0x26a59, _0x13d559 = 0x0;
        _0x35d580 && _0x13d559 < 0x3;
        _0x35d580 = Object["getPrototypeOf"](_0x35d580), _0x13d559++
      ) {
        for (const [_0x4b8190, _0x495d2e] of Object["entries"](
          Object["getOwnPropertyDescriptors"](_0x35d580),
        )) {
          if (
            !_0x516e1f["has"](_0x4b8190) &&
            typeof _0x495d2e["value"] === "function"
          )
            _0x516e1f["set"](_0x4b8190, _0x495d2e["value"]);
        }
      }
      const _0x48f3e1 = new Set(),
        _0x3ac2d8 = new Set();
      for (const [_0x2d70db, _0x35ef7e] of _0x516e1f) {
        const _0x5b0a7a = Function["prototype"]["toString"]["call"](_0x35ef7e);
        if (_0x5b0a7a["includes"]("moveLock")) {
          const _0x416717 = _0x5b0a7a["matchAll"](
            /this\[['"]([^'"]+)['"]\]\s*\(\s*this\[[^\]]+\]\[[^\]]+\],[^;{}]{0,800}?\[['"]moveLock['"]\]\s*\)/g,
          );
          for (const _0x424155 of _0x416717)
            if (_0x516e1f["has"](_0x424155[0x1]))
              _0x48f3e1["add"](_0x424155[0x1]);
        }
        const _0x50cfce = _0x5b0a7a["match"](
          /^[^(]*\(\s*([\p{ID_Start}$_][\p{ID_Continue}$\u200c\u200d]*)/u,
        )?.[0x1];
        if (!_0x50cfce) continue;
        const _0x1955dd = _0x50cfce["replace"](/[.*+?^${}()|[\]\\]/g, "\x5c$&"),
          _0xb06bfb = (_0x4c8666) =>
            _0x1955dd +
            "\x5cs*\x5c[\x5cs*(?:0[xX]" +
            _0x4c8666 +
            "|" +
            _0x4c8666 +
            ")\x5cs*\x5c]",
          _0x5dd887 = (_0x1b89ad) =>
            new RegExp(
              "parseFloat\x5cs*\x5c(\x5cs*" +
                _0xb06bfb(_0x1b89ad) +
                "\x5cs*(?:\x5c|\x5c|\x5cs*(?:0x0|0))?\x5cs*\x5c)\x5cs*(?:\x5c|\x5c|\x5cs*(?:0x0|0)\x5cs*\x5c))?\x5cs*\x5c/\x5cs*(?:0[xX]3[eE]8|1000)\x5cb",
            )["test"](_0x5b0a7a),
          _0x550cae = [0x0, 0x1, 0x4, 0x5, 0x6]["every"]((_0xc44326) =>
            new RegExp(_0xb06bfb(_0xc44326))["test"](_0x5b0a7a),
          );
        if (
          _0x5dd887(0x2) &&
          _0x5dd887(0x3) &&
          (_0x550cae || /(?:noclip|recon|inputSN)/["test"](_0x5b0a7a))
        )
          _0x3ac2d8["add"](_0x2d70db);
      }
      if (_0x48f3e1["size"] === 0x1) return [..._0x48f3e1][0x0];
      if (_0x48f3e1["size"] > 0x1) return null;
      if (_0x3ac2d8["size"] === 0x1) return [..._0x3ac2d8][0x0];
      if (_0x3ac2d8["size"] > 0x1) return null;
      return _0x516e1f["has"]("procInputs") ? "procInputs" : null;
    }
    ["installInputHook"]() {
      if (this["hookedPlayers"]["has"](this["me"])) return;
      if (
        this["inputDiscoveryAttempt"]?.["player"] === this["me"] &&
        Date["now"]() - this["inputDiscoveryAttempt"]["at"] < 0x7d0
      )
        return;
      this["inputDiscoveryAttempt"] = { player: this["me"], at: Date["now"]() };
      const _0x4dacd5 = this["findInputMethod"](this["me"]);
      if (!_0x4dacd5) {
        this["setHookStatus"](
          "render\x20connected;\x20input\x20method\x20unsupported",
        );
        return;
      }
      const _0x4d6fa1 = this["me"][_0x4dacd5],
        _0x1e153c = this;
      ((this["me"][_0x4dacd5] = this["toPageFunction"](function (..._0x4fdd24) {
        try {
          _0x1e153c["hookStats"]["inputs"]++;
          if (!_0x1e153c["failedHooks"]["has"]("inputs")) {
            _0x1e153c["setHookStatus"]("render\x20and\x20inputs\x20connected");
            const _0x26f3fd = _0x1e153c["fromPage"](_0x4fdd24[0x0]);
            _0x1e153c["hookStats"]["packetLength"] = Array["isArray"](_0x26f3fd)
              ? _0x26f3fd["length"]
              : null;
            const _0x42b613 = Array["isArray"](_0x26f3fd)
              ? Array["from"](_0x26f3fd)
              : null;
            if (
              _0x4fdd24[0x2] !== !![] &&
              _0x1e153c["isGameplayAllowed"]() &&
              _0x1e153c["fromPage"](this) === _0x1e153c["me"]
            )
              _0x1e153c["runHook"]("inputs", () =>
                _0x1e153c["onProcessInputs"](
                  _0x26f3fd,
                  _0x1e153c["fromPage"](this),
                ),
              );
            if (_0x42b613 && _0x1e153c["failedHooks"]["has"]("inputs")) {
              for (
                let _0xd7f09e = 0x0;
                _0xd7f09e < _0x42b613["length"];
                _0xd7f09e++
              ) {
                if (!Object["is"](_0x26f3fd[_0xd7f09e], _0x42b613[_0xd7f09e]))
                  _0x26f3fd[_0xd7f09e] = _0x42b613[_0xd7f09e];
              }
              if (_0x26f3fd["length"] !== _0x42b613["length"])
                _0x26f3fd["length"] = _0x42b613["length"];
            }
          }
        } catch (_0xd0d12d) {
          _0x1e153c["failedHooks"]["add"]("inputs");
          try {
            _0x1e153c["setHookStatus"](
              "inputs\x20incompatible;\x20native\x20game\x20unchanged",
            );
          } catch (_0x2b0a2c) {}
        }
        return Reflect["apply"](
          _0x4d6fa1,
          _0x1e153c["fromPage"](this),
          _0x4fdd24,
        );
      })),
        this["hookedPlayers"]["add"](this["me"]),
        (this["inputMethodName"] = _0x4dacd5),
        this["setHookStatus"](
          "render\x20connected;\x20waiting\x20for\x20input\x20packets",
        ));
    }
    ["runHook"](_0x30338c, _0xfa9e24) {
      if (this["failedHooks"]["has"](_0x30338c)) return;
      try {
        return _0xfa9e24();
      } catch (_0x48de3c) {
        (this["failedHooks"]["add"](_0x30338c),
          (this["hookErrors"] ||= new Map()),
          this["hookErrors"]["set"](
            _0x30338c,
            String(_0x48de3c?.["message"] || _0x48de3c)["slice"](0x0, 0x1f4),
          ));
        if (_0x30338c === "local-prediction")
          this["restorePredictionControls"]();
        if (_0x30338c === "no-recoil") this["restoreNoRecoil"]();
        if (_0x30338c === "scope-overlay") this["restoreScopeOverlay"]();
        if (_0x30338c === "custom-crosshair") this["restoreCustomCrosshair"]();
        if (_0x30338c === "killsay") this["restoreKillsay"]();
        if (_0x30338c === "no-zoom") this["restoreNoZoom"]();
        if (_0x30338c === "native-shots") this["restoreShotObservers"]();
        (this["setHookStatus"](
          _0x30338c + "\x20incompatible;\x20native\x20game\x20unchanged",
        ),
          console["warn"](
            "🌸\x20cracky.io:\x20Disabled\x20incompatible\x20" +
              _0x30338c +
              "\x20hook;\x20the\x20game\x20will\x20continue.",
            _0x48de3c,
          ));
      }
    }
    ["onRenderFrame"]() {
      (this["runHook"]("name-protect", () => this["updateNameProtect"]()),
        this["runHook"]("array-list", () => this["updateArrayList"]()),
        this["runHook"]("client-hud", () => this["updateClientHud"]()));
      if (!this["isGameplayAllowed"]()) {
        (this["suspendGameplay"](),
          (this["aimStatus"] = this["isRoundEnded"]()
            ? "paused\x20for\x20native\x20end\x20screen"
            : "waiting\x20for\x20active\x20player"));
        return;
      }
      if (this["gameplaySuspended"]) this["applyHudTheme"]();
      ((this["gameplaySuspended"] = ![]),
        this["runHook"]("custom-crosshair", () =>
          this["updateCustomCrosshair"](),
        ),
        this["runHook"]("killsay", () => this["updateKillsay"]()));
      if (
        this["settings"]["speedEnabled"] ||
        this["settings"]["rapidFireEnabled"] ||
        this["predictionOverrides"]?.["size"]
      )
        this["runHook"]("local-prediction", () =>
          this["updatePredictionControls"](),
        );
      if (
        this["settings"]["noRecoilEnabled"] ||
        this["nativeViewOverrides"]?.["has"]("recoil")
      )
        this["runHook"]("no-recoil", () => this["updateNoRecoil"]());
      if (
        this["settings"]["noScopeOverlayEnabled"] ||
        this["scopeOverlayActive"] ||
        this["nativeViewOverrides"]?.["has"]("scope")
      )
        this["runHook"]("scope-overlay", () => this["updateScopeOverlay"]());
      if (
        this["settings"]["bulletTracersEnabled"] ||
        (this["settings"]["autoFireEnabled"] &&
          this["settings"]["autoFireSeedEnabled"]) ||
        this["shotObserverState"]
      )
        this["runHook"]("native-shots", () => this["updateShotObservers"]());
      if (this["settings"]["noZoomEnabled"] || this["noZoomOverride"])
        this["runHook"]("no-zoom", () => this["updateNoZoom"]());
      if (
        !this["three"] ||
        !this["renderer"]?.["camera"] ||
        !this["me"] ||
        !this["game"]?.["players"]?.["list"] ||
        !this["controls"]
      )
        return;
      this["renderWorkCache"] = {
        characters: new Map(),
        points: new Set(),
        newMeshes: 0x4,
        newBatches: 0x2,
        newRigSlots: 0x2,
        rigVertices: 0x4b0,
      };
      try {
        (this["runHook"]("third-person", () => this["updateThirdPerson"]()),
          this["runHook"]("local-cosmetics", () =>
            this["updateLocalCosmetics"](),
          ),
          this["runHook"]("trails", () => this["updateTrails"]()),
          this["runHook"]("anti-idle", () => {
            if (
              this["settings"]["antikick"] &&
              this["me"]["active"] &&
              Number["isFinite"](this["controls"]["idleTimer"])
            )
              this["controls"]["idleTimer"] = 0x0;
          }),
          this["runHook"]("auto-nuke", () => this["updateAutoNuke"]()),
          this["runHook"]("camera", () => this["updateCameraZoom"]()),
          this["runHook"]("world-modulation", () =>
            this["updateWorldModulation"](),
          ),
          this["runHook"]("custom-fog", () => this["updateCustomFog"]()),
          this["runHook"]("chams", () => this["updateChams"]()),
          this["runHook"]("weapon-chams", () => this["updateWeaponChams"]()),
          this["runHook"]("glow-esp", () => this["updateGlowESP"]()),
          this["runHook"]("visual-trails", () => this["updateVisualTrails"]()),
          this["runHook"]("wireframe", () => this["updateWireframe"]()),
          this["runHook"]("fov", () => this["drawFov"]()),
          this["runHook"]("esp-players", () => {
            for (const _0x1f19c6 of this["game"]["players"]["list"]) {
              if (
                !_0x1f19c6 ||
                _0x1f19c6["isYou"] ||
                !_0x1f19c6["active"] ||
                !_0x1f19c6["objInstances"]
              )
                continue;
              this["drawCanvasESP"](_0x1f19c6, ![]);
            }
          }),
          this["runHook"]("esp-bots", () => {
            if (!this["settings"]["espBotCheck"]) return;
            for (const _0x1594cc of this["game"]["AI"]?.["ais"] || []) {
              if (
                !_0x1594cc?.["mesh"] ||
                !_0x1594cc["mesh"]["visible"] ||
                _0x1594cc["health"] <= 0x0
              )
                continue;
              this["drawCanvasESP"](_0x1594cc, !![]);
            }
          }),
          this["runHook"]("esp-bones", () => this["drawSkeletons"]()));
      } finally {
        this["renderWorkCache"] = null;
      }
    }
    ["updateThirdPerson"]() {
      const _0x1161a7 = this["fromPage"](this["game"]?.["config"]);
      if (
        this["thirdPersonOverride"] &&
        this["thirdPersonOverride"]["config"] !== _0x1161a7
      )
        this["restoreThirdPerson"]();
      const _0x459f2c =
        _0x1161a7 &&
        Object["getOwnPropertyDescriptor"](_0x1161a7, "thirdPerson");
      if (
        !_0x459f2c ||
        typeof _0x459f2c["value"] !== "boolean" ||
        !_0x459f2c["writable"]
      )
        return;
      if (this["settings"]["thirdPersonEnabled"]) {
        this["thirdPersonOverride"] ||= {
          config: _0x1161a7,
          original: _0x1161a7["thirdPerson"],
          player: null,
        };
        const _0x59fc31 =
          _0x1161a7["thirdPerson"] !== !![] ||
          this["thirdPersonOverride"]["player"] !== this["me"];
        ((_0x1161a7["thirdPerson"] = !![]),
          (this["thirdPersonOverride"]["player"] = this["me"]));
        if (_0x59fc31)
          this["thirdPersonOverride"]["modelRefresh"] = this[
            "requestModelRefresh"
          ](this["me"]);
      } else this["restoreThirdPerson"]();
    }
    ["requestModelRefresh"](_0xb63bdb) {
      const _0x1b338d = this["fromPage"](_0xb63bdb);
      if (!_0x1b338d || typeof _0x1b338d !== "object") return ![];
      if (
        _0x1b338d["active"] === ![] ||
        (Number["isFinite"](_0x1b338d["health"]) && _0x1b338d["health"] <= 0x0)
      )
        return ![];
      const _0x302545 = Object["getOwnPropertyDescriptor"](
        _0x1b338d,
        "needsRender",
      );
      if (!_0x302545) {
        if (!Object["isExtensible"](_0x1b338d)) return ![];
        Object["defineProperty"](_0x1b338d, "needsRender", {
          value: !![],
          writable: !![],
          configurable: !![],
          enumerable: !![],
        });
      } else {
        if (
          !_0x302545["writable"] ||
          (_0x302545["value"] !== undefined &&
            typeof _0x302545["value"] !== "boolean")
        )
          return ![];
        _0x1b338d["needsRender"] = !![];
      }
      return !![];
    }
    ["updateCameraZoom"]() {
      const _0x4944a0 = this["renderer"]?.["camera"];
      if (
        this["cameraZoomOverride"] &&
        this["cameraZoomOverride"]["camera"] !== _0x4944a0
      )
        this["restoreCameraZoom"]();
      if (this["settings"]["noZoomEnabled"]) {
        this["restoreCameraZoom"]();
        return;
      }
      const _0x47d13a = Number(this["settings"]["weaponZoom"]);
      if (
        !_0x4944a0 ||
        !Number["isFinite"](_0x47d13a) ||
        _0x47d13a <= 0x0 ||
        _0x47d13a === 0x1 ||
        !(this["me"]?.["aimVal"] < 0x1)
      ) {
        this["restoreCameraZoom"]();
        return;
      }
      this["cameraZoomOverride"] ||= {
        camera: _0x4944a0,
        original: _0x4944a0["zoom"],
        applied: _0x47d13a,
      };
      if (_0x4944a0["zoom"] !== this["cameraZoomOverride"]["applied"])
        this["cameraZoomOverride"]["original"] = _0x4944a0["zoom"];
      ((this["cameraZoomOverride"]["applied"] = _0x47d13a),
        _0x4944a0["zoom"] !== _0x47d13a &&
          ((_0x4944a0["zoom"] = _0x47d13a),
          _0x4944a0["updateProjectionMatrix"]?.()));
    }
    ["restoreCameraZoom"]() {
      const _0x37d8df = this["cameraZoomOverride"];
      if (!_0x37d8df) return;
      (_0x37d8df["camera"]["zoom"] === _0x37d8df["applied"] &&
        ((_0x37d8df["camera"]["zoom"] = _0x37d8df["original"]),
        _0x37d8df["camera"]["updateProjectionMatrix"]?.()),
        (this["cameraZoomOverride"] = null));
    }
    ["updateNoZoom"]() {
      const _0x5a78f0 = this["fromPage"](this["renderer"]);
      if (
        this["noZoomOverride"] &&
        (this["noZoomOverride"]["renderer"] !== _0x5a78f0 ||
          this["noZoomOverride"]["player"] !== this["me"])
      )
        this["restoreNoZoom"]();
      if (
        !this["settings"]["noZoomEnabled"] ||
        !this["me"] ||
        !this["isGameplayAllowed"]() ||
        !(this["me"]["aimVal"] < 0x1)
      ) {
        this["restoreNoZoom"]();
        return;
      }
      this["restoreCameraZoom"]();
      const _0xeb1eac = this["predictionField"](_0x5a78f0, "zoomVal", "number");
      let _0x4d6128;
      try {
        _0x4d6128 = Object["getOwnPropertyDescriptor"](_0x5a78f0, "zoom");
      } catch (_0x53d1c5) {}
      if (
        !_0xeb1eac ||
        _0xeb1eac["value"] < 0x1 ||
        typeof _0x4d6128?.["value"] !== "function" ||
        !(_0x4d6128["writable"] || _0x4d6128["configurable"])
      ) {
        (this["restoreNoZoom"](),
          (this["noZoomStatus"] =
            "native\x20ADS\x20zoom\x20API\x20unavailable"));
        return;
      }
      if (
        this["noZoomOverride"] &&
        _0x4d6128["value"] !== this["noZoomOverride"]["wrapper"]
      ) {
        (this["restoreNoZoom"](),
          (this["noZoomStatus"] =
            "native\x20ADS\x20zoom\x20API\x20replaced;\x20native\x20value\x20preserved"));
        return;
      }
      const _0x5d321d = Number["isFinite"](this["settings"]["noZoomStrength"])
        ? Math["max"](0x0, Math["min"](0x5, this["settings"]["noZoomStrength"]))
        : 0.5;
      let _0x47f8e1 = this["noZoomOverride"];
      if (!_0x47f8e1) {
        const _0x3477b9 = this;
        ((_0x47f8e1 = {
          renderer: _0x5a78f0,
          player: this["me"],
          zoom: _0x4d6128["value"],
          descriptor: _0x4d6128,
          original: _0xeb1eac["value"],
          applied: _0xeb1eac["value"],
          wrapper: null,
        }),
          (_0x47f8e1["wrapper"] = this["toPageFunction"](function (
            ..._0x26c396
          ) {
            let _0x1362ca = _0x26c396;
            try {
              if (
                _0x3477b9["noZoomOverride"] === _0x47f8e1 &&
                _0x3477b9["fromPage"](this) === _0x5a78f0
              ) {
                const _0x5f0d3c =
                  _0x3477b9["settings"]["noZoomEnabled"] &&
                  _0x3477b9["me"] === _0x47f8e1["player"] &&
                  _0x3477b9["isGameplayAllowed"]() &&
                  _0x3477b9["me"]["aimVal"] < 0x1;
                if (
                  Number["isFinite"](_0x26c396[0x0]) &&
                  _0x26c396[0x0] >= 0x1
                ) {
                  const _0x42f702 = Number["isFinite"](
                    _0x3477b9["settings"]["noZoomStrength"],
                  )
                    ? Math["max"](
                        0x0,
                        Math["min"](
                          0x5,
                          _0x3477b9["settings"]["noZoomStrength"],
                        ),
                      )
                    : 0.5;
                  ((_0x47f8e1["original"] = _0x26c396[0x0]),
                    (_0x47f8e1["applied"] = _0x5f0d3c
                      ? 0x1 + (_0x26c396[0x0] - 0x1) * _0x42f702
                      : _0x26c396[0x0]));
                  if (_0x47f8e1["applied"] !== _0x26c396[0x0])
                    _0x1362ca = [
                      _0x47f8e1["applied"],
                      ..._0x26c396["slice"](0x1),
                    ];
                }
              }
            } catch (_0x636165) {}
            return Reflect["apply"](
              _0x47f8e1["zoom"],
              _0x3477b9["fromPage"](this),
              _0x1362ca,
            );
          })),
          (this["noZoomOverride"] = _0x47f8e1),
          Object["defineProperty"](_0x5a78f0, "zoom", {
            ..._0x4d6128,
            value: _0x47f8e1["wrapper"],
          }));
      }
      ((_0x47f8e1["original"] =
        _0xeb1eac["value"] === _0x47f8e1["applied"]
          ? _0x47f8e1["original"]
          : _0xeb1eac["value"]),
        (_0x47f8e1["applied"] =
          0x1 + (_0x47f8e1["original"] - 0x1) * _0x5d321d));
      if (_0xeb1eac["value"] !== _0x47f8e1["applied"])
        Reflect["apply"](_0x47f8e1["zoom"], _0x5a78f0, [_0x47f8e1["applied"]]);
      this["noZoomStatus"] =
        _0x5d321d +
        "×\x20native\x20ADS\x20strength\x20(0×\x20=\x20normal\x20FOV)";
    }
    ["restoreNoZoom"]() {
      const _0xf4a816 = this["noZoomOverride"];
      this["noZoomOverride"] = null;
      if (!_0xf4a816) return;
      try {
        if (
          Object["getOwnPropertyDescriptor"](_0xf4a816["renderer"], "zoom")?.[
            "value"
          ] !== _0xf4a816["wrapper"]
        )
          return;
        Object["defineProperty"](
          _0xf4a816["renderer"],
          "zoom",
          _0xf4a816["descriptor"],
        );
        if (
          _0xf4a816["original"] !== _0xf4a816["applied"] &&
          this["predictionField"](_0xf4a816["renderer"], "zoomVal", "number")?.[
            "value"
          ] === _0xf4a816["applied"]
        )
          Reflect["apply"](_0xf4a816["zoom"], _0xf4a816["renderer"], [
            _0xf4a816["original"],
          ]);
      } catch (_0x4ff688) {}
      this["noZoomStatus"] = "native\x20ADS\x20zoom\x20restored";
    }
    ["restoreThirdPerson"]() {
      const _0x4a2810 = this["thirdPersonOverride"];
      if (!_0x4a2810) return;
      if (_0x4a2810["config"]["thirdPerson"] === !![])
        _0x4a2810["config"]["thirdPerson"] = _0x4a2810["original"];
      (this["requestModelRefresh"](_0x4a2810["player"]),
        (this["thirdPersonOverride"] = null));
    }
    ["trailSettings"]() {
      const _0x101774 = this["fromPage"](this["game"]?.["settings"]);
      return ["showTrails", "yourTrails"]["every"](
        (_0x2dbb39) =>
          typeof _0x101774?.["tmp"]?.[_0x2dbb39] === "boolean" &&
          typeof _0x101774?.["list"]?.[_0x2dbb39]?.["set"] === "function",
      )
        ? _0x101774
        : null;
    }
    ["updateTrails"]() {
      const _0x47eb40 = this["trailSettings"]();
      if (
        this["trailOverride"] &&
        this["trailOverride"]["settings"] !== _0x47eb40
      )
        this["restoreTrails"]();
      if (
        (!this["settings"]["alwaysTrail"] &&
          !this["settings"]["bulletTracersEnabled"] &&
          !(
            this["settings"]["autoFireEnabled"] &&
            this["settings"]["autoFireSeedEnabled"]
          )) ||
        !_0x47eb40
      ) {
        this["restoreTrails"]();
        return;
      }
      this["trailOverride"] ||= {
        settings: _0x47eb40,
        original: {
          showTrails: _0x47eb40["tmp"]["showTrails"],
          yourTrails: _0x47eb40["tmp"]["yourTrails"],
        },
      };
      for (const _0x264492 of ["showTrails", "yourTrails"]) {
        const _0x34128e =
          _0x264492 === "yourTrails" || this["settings"]["alwaysTrail"]
            ? !![]
            : this["trailOverride"]["original"][_0x264492];
        if (_0x47eb40["tmp"][_0x264492] !== _0x34128e)
          _0x47eb40["list"][_0x264492]["set"]["call"](
            _0x47eb40["list"][_0x264492],
            _0x34128e,
          );
      }
    }
    ["restoreTrails"]() {
      const _0x116898 = this["trailOverride"];
      if (!_0x116898) return;
      this["trailOverride"] = null;
      for (const _0x2bed4d of ["showTrails", "yourTrails"]) {
        if (_0x116898["settings"]["tmp"][_0x2bed4d] === !![])
          _0x116898["settings"]["list"][_0x2bed4d]["set"]["call"](
            _0x116898["settings"]["list"][_0x2bed4d],
            _0x116898["original"][_0x2bed4d],
          );
      }
    }
    ["restoreNativeOptions"]() {
      for (const _0x10e90b of [
        () => this["restorePredictionControls"](),
        () => this["restoreNoRecoil"](),
        () => this["restoreScopeOverlay"](),
        () => this["restoreCustomCrosshair"](),
        () => this["restoreKillsay"](),
        () => this["restoreNoZoom"](),
        () => this["restoreShotObservers"](),
        () => this["restoreThirdPerson"](),
        () => this["restoreTrails"](),
        () => this["restoreLocalCosmetics"](),
      ]) {
        try {
          _0x10e90b();
        } catch (_0x1deae3) {
          console["warn"](
            "cracky.io:\x20Could\x20not\x20restore\x20a\x20native\x20option",
            _0x1deae3,
          );
        }
      }
      this["lastNukeRequest"] = null;
    }
    ["restoreNativeViewBoolean"](_0x57b44f) {
      const _0x55c7d4 = this["nativeViewOverrides"]?.["get"](_0x57b44f);
      if (!_0x55c7d4) return;
      this["nativeViewOverrides"]["delete"](_0x57b44f);
      try {
        const _0x1df670 = this["predictionField"](
          _0x55c7d4["object"],
          _0x55c7d4["property"],
          "boolean",
        );
        if (_0x1df670 && _0x1df670["value"] === _0x55c7d4["applied"])
          _0x55c7d4["object"][_0x55c7d4["property"]] = _0x55c7d4["original"];
      } catch (_0x4b1ecd) {}
    }
    ["overrideNativeViewBoolean"](_0x38cc59, _0x460d86, _0x208a87, _0x35a48d) {
      let _0x365400 = this["nativeViewOverrides"]?.["get"](_0x38cc59);
      _0x365400 &&
        _0x365400["object"] !== _0x460d86 &&
        (this["restoreNativeViewBoolean"](_0x38cc59), (_0x365400 = null));
      const _0x58acae = this["predictionField"](
        _0x460d86,
        _0x208a87,
        "boolean",
      );
      if (!_0x58acae) return (this["restoreNativeViewBoolean"](_0x38cc59), ![]);
      try {
        const _0x32f936 =
          _0x365400 && _0x58acae["value"] === _0x365400["applied"]
            ? _0x365400["original"]
            : _0x58acae["value"];
        (!_0x365400 ||
          _0x365400["original"] !== _0x32f936 ||
          _0x365400["applied"] !== _0x35a48d) &&
          ((this["nativeViewOverrides"] ||= new Map()),
          this["nativeViewOverrides"]["set"](_0x38cc59, {
            object: _0x460d86,
            property: _0x208a87,
            original: _0x32f936,
            applied: _0x35a48d,
          }));
        if (_0x58acae["value"] !== _0x35a48d) _0x460d86[_0x208a87] = _0x35a48d;
        return !![];
      } catch (_0x1357de) {
        return (this["restoreNativeViewBoolean"](_0x38cc59), ![]);
      }
    }
    ["updateNoRecoil"]() {
      if (
        !this["settings"]["noRecoilEnabled"] ||
        !this["me"] ||
        !this["isGameplayAllowed"]()
      ) {
        this["restoreNoRecoil"]();
        return;
      }
      const _0x5567e8 = this["fromPage"](this["me"]);
      if (
        !this["overrideNativeViewBoolean"](
          "recoil",
          _0x5567e8,
          "noRecoil",
          !![],
        )
      ) {
        this["noRecoilStatus"] = "native\x20flag\x20unavailable;\x20unchanged";
        return;
      }
      for (const _0x449efb of ["recoilForce", "recoilAnim", "recoilAnimY"]) {
        const _0x38bee0 = this["predictionField"](
          _0x5567e8,
          _0x449efb,
          "number",
        );
        if (_0x38bee0 && _0x38bee0["value"] !== 0x0) _0x5567e8[_0x449efb] = 0x0;
      }
      this["noRecoilStatus"] =
        "native\x20local\x20recoil\x20suppressed;\x20server\x20acceptance\x20unverified";
    }
    ["restoreNoRecoil"]() {
      (this["restoreNativeViewBoolean"]("recoil"),
        (this["noRecoilStatus"] = "paused;\x20native\x20flag\x20restored"));
    }
    ["setScopeOverlayHidden"](_0x5f2a80) {
      const _0x3d286c = document["documentElement"];
      if (
        this["scopeOverlayActive"] === _0x5f2a80 &&
        this["scopeOverlayRoot"] === _0x3d286c
      )
        return;
      if (
        this["scopeOverlayRoot"] !== _0x3d286c &&
        this["scopeOverlayRoot"]?.["getAttribute"]("data-cracky-no-scope") ===
          "on"
      )
        this["scopeOverlayRoot"]["removeAttribute"]("data-cracky-no-scope");
      if (_0x5f2a80 && _0x3d286c) {
        if (!document["getElementById"]("cracky-scope-overlay-style")) {
          const _0x145250 = document["createElement"]("style");
          ((_0x145250["id"] = "cracky-scope-overlay-style"),
            (_0x145250["textContent"] =
              "html[data-cracky-no-scope=\x22on\x22]\x20#aimRecticle{display:none!important;}"),
            _0x3d286c["append"](_0x145250));
        }
        _0x3d286c["setAttribute"]("data-cracky-no-scope", "on");
      } else {
        if (_0x3d286c?.["getAttribute"]("data-cracky-no-scope") === "on")
          _0x3d286c["removeAttribute"]("data-cracky-no-scope");
      }
      ((this["scopeOverlayRoot"] = _0x3d286c),
        (this["scopeOverlayActive"] = !!(_0x5f2a80 && _0x3d286c)));
    }
    ["updateScopeOverlay"]() {
      if (
        !this["settings"]["noScopeOverlayEnabled"] ||
        !this["me"] ||
        !this["isGameplayAllowed"]()
      ) {
        this["restoreScopeOverlay"]();
        return;
      }
      const _0x31c966 = this["fromPage"](this["me"]),
        _0x46f0ea = this["predictionObject"](_0x31c966, "weapon"),
        _0x2c35c8 = this["predictionObject"](_0x46f0ea, "scope") === !![];
      if (!_0x2c35c8) {
        (this["restoreScopeOverlay"](),
          (this["scopeOverlayStatus"] = "waiting\x20for\x20scoped\x20weapon"));
        return;
      }
      const _0x3969eb = this["predictionObject"](
          this["fromPage"](this["renderer"]),
          "aimRecticle",
        ),
        _0x59b6a6 = this["overrideNativeViewBoolean"](
          "scope",
          _0x3969eb,
          "display",
          ![],
        );
      (this["setScopeOverlayHidden"](!![]),
        (this["scopeOverlayStatus"] = _0x59b6a6
          ? "canvas/HTML\x20hidden;\x20ADS\x20zoom\x20unchanged"
          : "HTML\x20hidden;\x20native\x20canvas\x20path\x20unavailable"));
    }
    ["restoreScopeOverlay"]() {
      (this["restoreNativeViewBoolean"]("scope"),
        this["setScopeOverlayHidden"](![]),
        (this["scopeOverlayStatus"] =
          "paused;\x20native\x20overlay\x20restored"));
    }
    ["normalizeCrosshairSettings"]() {
      for (const _0x44f1c1 of [
        "customCrosshairEnabled",
        "noScopeCrosshairEnabled",
        ..._0x4cfe6c["map"]((_0xc67238) => _0xc67238[0x1]),
      ]) {
        const _0x4e0b6f = this["defaultSettings"][_0x44f1c1],
          _0x5ec7c3 = this["settings"][_0x44f1c1];
        if (typeof _0x5ec7c3 !== typeof _0x4e0b6f)
          this["settings"][_0x44f1c1] = _0x4e0b6f;
        else {
          if (_0x4aa775[_0x44f1c1]) {
            const [_0x503bed, _0x5b79e4] = _0x4aa775[_0x44f1c1];
            this["settings"][_0x44f1c1] = Number["isFinite"](_0x5ec7c3)
              ? Math["max"](_0x503bed, Math["min"](_0x5b79e4, _0x5ec7c3))
              : _0x4e0b6f;
          } else {
            if (
              _0x26280a[_0x44f1c1] &&
              !_0x26280a[_0x44f1c1]["includes"](_0x5ec7c3)
            )
              this["settings"][_0x44f1c1] = _0x4e0b6f;
            else {
              if (typeof _0x4e0b6f === "string" && _0x4e0b6f["startsWith"]("#"))
                this["settings"][_0x44f1c1] = this["normalizeColor"](
                  _0x5ec7c3,
                  _0x4e0b6f,
                );
            }
          }
        }
      }
    }
    ["customCrosshairMode"]() {
      const _0x553c07 = this["settings"];
      if (
        !(
          _0x553c07["customCrosshairEnabled"] ||
          (_0x553c07["noScopeOverlayEnabled"] &&
            _0x553c07["noScopeCrosshairEnabled"])
        ) ||
        !this["me"] ||
        !this["isGameplayAllowed"]()
      )
        return null;
      if (
        this["pageWindow"]?.["spectating"] ||
        this["game"]?.["ui"]?.["active"] === ![]
      )
        return null;
      const _0x330105 = document["getElementById"]("uiBase");
      if (
        _0x330105?.["classList"]?.["contains"]("onMenu") ||
        _0x330105?.["classList"]?.["contains"]("onDeathScrn")
      )
        return null;
      if (_0x553c07["crosshairHideWithGui"] && this["isClickGuiVisible"]())
        return null;
      const _0x1ff64b = this["predictionObject"](
        this["fromPage"](this["me"]),
        "weapon",
      );
      if (!_0x1ff64b) return null;
      if (
        !_0x553c07["crosshairShowMelee"] &&
        (_0x1ff64b["melee"] || _0x1ff64b["canThrow"])
      )
        return null;
      const _0x7cd67c = this["me"]["reloads"]?.[this["me"]["loadoutIndex"]];
      if (
        _0x553c07["crosshairHideReload"] &&
        Number["isFinite"](_0x7cd67c) &&
        _0x7cd67c > 0x0
      )
        return null;
      const _0x12da3a =
          _0x1ff64b["scope"] === !![] &&
          Number["isFinite"](this["me"]["aimVal"]) &&
          this["me"]["aimVal"] < 0x1,
        _0x1c8c01 =
          _0x12da3a &&
          _0x553c07["noScopeOverlayEnabled"] &&
          _0x553c07["noScopeCrosshairEnabled"];
      if (
        (!_0x553c07["customCrosshairEnabled"] && !_0x1c8c01) ||
        (_0x12da3a &&
          _0x553c07["crosshairScopedMode"] === "hidden" &&
          !_0x1c8c01)
      )
        return null;
      return {
        scoped: _0x12da3a,
        dot: _0x12da3a && _0x553c07["crosshairScopedMode"] === "dot",
        scopeOnly: _0x1c8c01,
      };
    }
    ["hideNativeCrosshair"]() {
      const _0x53de88 = this["fromPage"](this["game"]?.["settings"]);
      this["nativeCrosshairSettings"] !== _0x53de88 &&
        (this["restoreNativeCrosshair"](),
        (this["nativeCrosshairSettings"] = _0x53de88));
      if (!_0x53de88) return ![];
      if (!this["nativeCrosshairController"]) {
        if (typeof this["pageWindow"]["Function"] !== "function") return ![];
        this["nativeCrosshairController"] = this["pageWindow"]["Function"](
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20records=new\x20Map(),busy=false,lastCheck=-Infinity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20fields=[\x27Always\x27,\x27Opacity\x27,\x27Len\x27,\x27Thick\x27,\x27Color\x27,\x27Shadow\x27,\x27ShadowThickess\x27,\x27Image\x27,\x27ImageW\x27,\x27ImageH\x27,\x27Gap\x27,\x27Dot\x27,\x27Style\x27];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20function\x20release(record)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(record.item.set!==record.original)return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20value=Object.getOwnPropertyDescriptor(record.settings.tmp,record.key);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(value&&Number.isFinite(Number(value.value)))Reflect.apply(record.original,record.item,[value.value]);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20function\x20suppress(record,value)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20list=record.settings.list,visibility=[],suffix=record.key===\x27crosshairShoM\x27?\x27M\x27:\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20for(var\x20field\x20of\x20fields)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20name=\x27crosshair\x27+field+suffix,descriptor=Object.getOwnPropertyDescriptor(list,name);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(!descriptor||!descriptor.value)continue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20entry=descriptor.value,hide=Object.getOwnPropertyDescriptor(entry,\x27hide\x27),node=document.getElementById(name+\x27_div\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility.push({entry:entry,hide:hide,node:node,display:node&&node.style.display});\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{Reflect.apply(record.original,record.item,[0]);}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finally\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Object.defineProperty(record.settings.tmp,record.key,value);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20for(var\x20state\x20of\x20visibility)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(state.hide)Object.defineProperty(state.entry,\x27hide\x27,state.hide);else\x20delete\x20state.entry.hide;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(state.node&&state.node.style.display!==state.display)state.node.style.display=state.display;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20record.preference=value.value;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20function(operation,settings)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(busy)return\x20records.has(\x27crosshairSho\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20busy=true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(operation===\x27restore\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20old=Array.from(records.values());records.clear();lastCheck=-Infinity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20for(var\x20record\x20of\x20old)try{release(record);}catch(_){}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20false;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20now=Date.now();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(now>=lastCheck&&now-lastCheck<250)return\x20records.has(\x27crosshairSho\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lastCheck=now;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20list=settings&&settings.list,tmp=settings&&settings.tmp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(!list||!tmp)return\x20false;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20for(var\x20key\x20of\x20[\x27crosshairSho\x27,\x27crosshairShoM\x27])\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20item=Object.getOwnPropertyDescriptor(list,key)?.value,record=records.get(key);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(record&&(record.item!==item||record.original!==item?.set))\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20records.delete(key);release(record);record=null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20value=Object.getOwnPropertyDescriptor(tmp,key);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(!value?.writable||!Number.isFinite(Number(value.value)))return\x20false;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(!record)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20setter=item&&Object.getOwnPropertyDescriptor(item,\x27set\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(typeof\x20setter?.value!==\x27function\x27||setter.value.length!==1||item.key!==key||item.type!==\x27select\x27||!Object.hasOwn(item.options||{},\x270\x27))continue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20record={settings:settings,item:item,key:key,original:setter.value};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20records.set(key,record);suppress(record,value);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if(record.preference!==value.value)suppress(record,value);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20records.has(\x27crosshairSho\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20finally\x20{busy=false;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        )();
      }
      return Reflect["apply"](this["nativeCrosshairController"], null, [
        "hide",
        _0x53de88,
      ]);
    }
    ["restoreNativeCrosshair"]() {
      try {
        if (this["nativeCrosshairController"])
          Reflect["apply"](this["nativeCrosshairController"], null, [
            "restore",
          ]);
      } catch (_0x5c3baa) {}
      ((this["nativeCrosshairSettings"] = null),
        this["restoreNativeViewBoolean"]("crosshair-dot"));
      const _0x4b4a2b = this["crosshairRoot"];
      if (_0x4b4a2b?.["getAttribute"]("data-cracky-crosshair") === "on")
        _0x4b4a2b["removeAttribute"]("data-cracky-crosshair");
      this["crosshairRoot"] = null;
    }
    ["restoreCustomCrosshair"]() {
      ((this["customCrosshairActive"] = ![]),
        this["restoreNativeCrosshair"](),
        this["disconnectCrosshairViewport"]());
      if (this["crosshairCanvas"]) this["crosshairCanvas"]["hidden"] = !![];
      ((this["crosshairMotion"] = null),
        (this["crosshairPaintKey"] = null),
        (this["crosshairAppearance"] = null),
        (this["crosshairStatus"] =
          "paused;\x20native\x20crosshair\x20restored"));
    }
    ["disconnectCrosshairViewport"]() {
      (this["crosshairResizeObserver"]?.["disconnect"](),
        (this["crosshairResizeObserver"] = null));
      const _0x47f77a = this["crosshairViewportView"],
        _0x3dd15b = this["crosshairViewportInvalidate"];
      (_0x3dd15b &&
        (_0x47f77a?.["removeEventListener"]?.("resize", _0x3dd15b),
        _0x47f77a?.["removeEventListener"]?.("scroll", _0x3dd15b, !![])),
        (this["crosshairViewportView"] = null),
        (this["crosshairViewportInvalidate"] = null),
        (this["crosshairViewportCanvas"] = null),
        (this["crosshairViewport"] = null));
    }
    ["watchCrosshairViewport"](_0x124a33) {
      if (this["crosshairViewportCanvas"] === _0x124a33) return;
      (this["disconnectCrosshairViewport"](),
        (this["crosshairViewportCanvas"] = _0x124a33),
        (this["crosshairViewportDirty"] = !![]));
      const _0x293d19 = () => {
          this["crosshairViewportDirty"] = !![];
        },
        _0x5d2b4c =
          _0x124a33["ownerDocument"]?.["defaultView"] || this["pageWindow"];
      ((this["crosshairViewportView"] = _0x5d2b4c),
        (this["crosshairViewportInvalidate"] = _0x293d19),
        _0x5d2b4c?.["addEventListener"]?.("resize", _0x293d19),
        _0x5d2b4c?.["addEventListener"]?.("scroll", _0x293d19, !![]),
        typeof ResizeObserver === "function" &&
          ((this["crosshairResizeObserver"] = new ResizeObserver(
            (_0x54d1ea) => {
              for (const _0x44b29c of _0x54d1ea)
                if (_0x44b29c["target"] === _0x124a33) {
                  const _0x38a184 = this["crosshairViewport"];
                  if (
                    !_0x38a184 ||
                    _0x38a184["width"] !== _0x44b29c["contentRect"]["width"] ||
                    _0x38a184["height"] !== _0x44b29c["contentRect"]["height"]
                  )
                    _0x293d19();
                }
            },
          )),
          this["crosshairResizeObserver"]["observe"](_0x124a33)));
    }
    ["crosshairSpreadPixels"](_0x156293, _0x20db0f) {
      const _0xf014bf = this["fromPage"](this["me"]),
        _0x5bd63f = this["predictionObject"](_0xf014bf, "weapon"),
        _0x33f0bf = _0xf014bf?.["spread"],
        _0x42b793 = _0xf014bf?.["spreadMlt"],
        _0x5a4951 = _0x5bd63f?.["innac"] ?? 0x0,
        _0x475201 = this["fromPage"](
          this["renderer"]?.["camera"]?.["projectionMatrix"]?.["elements"],
        );
      if (
        ![_0x33f0bf, _0x42b793, _0x5a4951, _0x475201?.[0x5]]["every"](
          Number["isFinite"],
        )
      )
        return 0x0;
      const _0x499c83 = _0x5bd63f?.["noSpread"]
        ? 0x0
        : Math["max"](
            0x0,
            Math["min"](0.5, (_0x33f0bf * _0x42b793 + _0x5a4951) * 0.00063),
          );
      return Math["min"](
        this["settings"]["crosshairSpreadLimit"],
        ((Math["tan"](_0x499c83) * Math["abs"](_0x475201[0x5]) * _0x156293) /
          0x2 /
          _0x20db0f) *
          this["settings"]["crosshairSpreadScale"],
      );
    }
    ["updateKillsay"]() {
      if (
        !this["settings"]["killsayEnabled"] ||
        !this["me"] ||
        !this["isGameplayAllowed"]() ||
        this["pageWindow"]["isReplay"] ||
        this["pageWindow"]["spectating"] ||
        this["game"]?.["isServer"]
      ) {
        this["restoreKillsay"]();
        return;
      }
      const _0xf3493c = this["fromPage"](this["game"]),
        _0x2f76f7 = this["predictionObject"](_0xf3493c, "players"),
        _0x5a8512 = this["fromPage"](this["me"]);
      let _0x513d0d = this["killsayObserver"];
      _0x513d0d &&
        (_0x513d0d["game"] !== _0xf3493c ||
          _0x513d0d["me"] !== _0x5a8512 ||
          _0x513d0d["players"] !== _0x2f76f7 ||
          _0x2f76f7?.["kill"] !== _0x513d0d["wrapper"]) &&
        (this["restoreKillsay"](), (_0x513d0d = null));
      if (_0x513d0d) return;
      if (this["killsayRetryAt"] > Date["now"]()) return;
      const _0x5b1e82 =
        _0x2f76f7 && Object["getOwnPropertyDescriptor"](_0x2f76f7, "kill");
      if (
        !_0x5b1e82?.["writable"] ||
        typeof _0x5b1e82["value"] !== "function" ||
        _0x5b1e82["value"]["length"] !== 0x5 ||
        typeof this["pageWindow"]["Function"] !== "function"
      ) {
        ((this["killsayRetryAt"] = Date["now"]() + 0x3e8),
          (this["killsayStatus"] =
            "native\x20kill\x20API\x20unavailable;\x20unchanged"));
        return;
      }
      _0x513d0d = {
        game: _0xf3493c,
        players: _0x2f76f7,
        me: _0x5a8512,
        descriptor: _0x5b1e82,
        original: _0x5b1e82["value"],
      };
      const _0x30a619 = this,
        _0x513758 = this["toPageFunction"]((_0x6c2dc8, _0x3a07d2, _0x578d52) =>
          _0x30a619["runHook"]("killsay", () =>
            _0x30a619["queueKillsay"](
              _0x513d0d,
              _0x30a619["fromPage"](_0x6c2dc8),
              _0x3a07d2,
              _0x578d52,
            ),
          ),
        ),
        _0x36d2b4 = this["pageWindow"]["Function"](
          "native",
          "observe",
          "return\x20function\x20crackyKillObserver(victim){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20confirmed=null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try{var\x20caller=crackyKillObserver.caller,args=caller&&caller.arguments;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(caller&&caller.length===6&&args&&args.length>=3&&args[0]===victim.sid&&Number.isFinite(args[1])&&Number.isFinite(args[2])&&victim.active===true)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20confirmed=[args[2],args[1]];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}catch(_){}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20result=Reflect.apply(native,this,arguments);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(confirmed&&victim.active===false){try{observe(victim,confirmed[0],confirmed[1]);}catch(_){}}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};",
        );
      ((_0x513d0d["wrapper"] = _0x36d2b4(_0x513d0d["original"], _0x513758)),
        Object["defineProperty"](_0x2f76f7, "kill", {
          ..._0x5b1e82,
          value: _0x513d0d["wrapper"],
        }),
        (this["killsayObserver"] = _0x513d0d),
        (this["killsayStatus"] =
          "listening\x20for\x20confirmed\x20local\x20kills"));
    }
    ["killsayText"](_0x5995bf) {
      const _0x5b2fbf =
        String(_0x5995bf?.["alias"] || _0x5995bf?.["name"] || "Player")
          ["replace"](/[\x00-\x1f\x7f\u202a-\u202e\u2066-\u2069<>]/g, "")
          ["replace"](/\s+/g, "\x20")
          ["trim"]()
          ["replace"](/^\/+/, "")
          ["slice"](0x0, 0x20)
          ["replace"](/[\ud800-\udbff]$/, "") || "Player";
      let _0x54c737;
      if (this["settings"]["killsayMode"] === "custom")
        _0x54c737 =
          this["settings"]["killsayMessage"] ||
          this["defaultSettings"]["killsayMessage"];
      else {
        if (!this["killsayDeck"]?.["length"]) {
          this["killsayDeck"] = _0x3caafe["map"](
            (_0x3b664f, _0x47c066) => _0x47c066,
          );
          for (
            let _0x21cf5c = this["killsayDeck"]["length"] - 0x1;
            _0x21cf5c > 0x0;
            _0x21cf5c--
          ) {
            const _0x53edca = Math["floor"](
              Math["random"]() * (_0x21cf5c + 0x1),
            );
            [this["killsayDeck"][_0x21cf5c], this["killsayDeck"][_0x53edca]] = [
              this["killsayDeck"][_0x53edca],
              this["killsayDeck"][_0x21cf5c],
            ];
          }
          const _0x4bcc6c = this["killsayDeck"]["length"] - 0x1;
          if (this["killsayDeck"][_0x4bcc6c] === this["killsayLastTemplate"])
            [this["killsayDeck"][0x0], this["killsayDeck"][_0x4bcc6c]] = [
              this["killsayDeck"][_0x4bcc6c],
              this["killsayDeck"][0x0],
            ];
        }
        ((this["killsayLastTemplate"] = this["killsayDeck"]["pop"]()),
          (_0x54c737 = _0x3caafe[this["killsayLastTemplate"]]));
      }
      if (!_0x54c737["includes"]("{name}"))
        _0x54c737 = "{name},\x20" + _0x54c737;
      let _0x304daf = _0x54c737["replaceAll"]("{name}", _0x5b2fbf)
        ["replace"](/[\x00-\x1f\x7f\u202a-\u202e\u2066-\u2069<>]/g, "")
        ["trim"]();
      if (_0x304daf["startsWith"]("/")) _0x304daf = ".\x20" + _0x304daf;
      return _0x304daf["slice"](0x0, 0x46)["replace"](/[\ud800-\udbff]$/, "");
    }
    ["queueKillsay"](_0x219a61, _0x5a8820, _0x246757, _0x1d19f0) {
      if (
        this["killsayObserver"] !== _0x219a61 ||
        !this["settings"]["killsayEnabled"] ||
        !this["isGameplayAllowed"]() ||
        _0x219a61["me"] !== this["fromPage"](this["me"]) ||
        _0x219a61["game"] !== this["fromPage"](this["game"]) ||
        this["pageWindow"]["isReplay"] ||
        this["pageWindow"]["spectating"] ||
        _0x246757 !== _0x219a61["me"]["sid"] ||
        _0x5a8820 === _0x219a61["me"] ||
        _0x5a8820?.["dummy"] ||
        _0x5a8820?.["isBot"]
      )
        return;
      this["killsaySeen"] ||= new WeakMap();
      if (this["killsaySeen"]["get"](_0x5a8820) === _0x1d19f0) return;
      (this["killsaySeen"]["set"](_0x5a8820, _0x1d19f0),
        (this["killsayQueue"] ||= []));
      if (this["killsayQueue"]["length"] >= 0x4) {
        this["killsayStatus"] = "queue\x20full;\x20extra\x20message\x20skipped";
        return;
      }
      (this["killsayQueue"]["push"]({
        text: this["killsayText"](_0x5a8820),
        expiresAt: Date["now"]() + 0x4e20,
      }),
        this["scheduleKillsay"]());
    }
    ["scheduleKillsay"]() {
      if (this["killsayTimer"] || !this["killsayQueue"]?.["length"]) return;
      const _0x629ea8 = Math["max"](
        0x96,
        (this["killsayLastAttempt"] || 0x0) +
          this["predictionMultiplier"](
            this["settings"]["killsayCooldown"],
            0x5,
            0x2,
            0x1e,
          ) *
            0x3e8 -
          Date["now"](),
      );
      ((this["killsayStatus"] =
        this["killsayQueue"]["length"] +
        "\x20message(s)\x20queued;\x20chat\x20cooldown"),
        (this["killsayTimer"] = setTimeout(() => {
          ((this["killsayTimer"] = null),
            this["runHook"]("killsay", () => {
              const _0x2d134e = this["killsayObserver"];
              if (
                !_0x2d134e ||
                !this["settings"]["killsayEnabled"] ||
                !this["isGameplayAllowed"]() ||
                _0x2d134e["game"] !== this["fromPage"](this["game"]) ||
                _0x2d134e["me"] !== this["fromPage"](this["me"]) ||
                this["pageWindow"]["isReplay"] ||
                this["pageWindow"]["spectating"]
              ) {
                this["restoreKillsay"]();
                return;
              }
              while (
                this["killsayQueue"]?.["length"] &&
                this["killsayQueue"][0x0]["expiresAt"] < Date["now"]()
              )
                this["killsayQueue"]["shift"]();
              const _0x41642e = this["killsayQueue"]?.["shift"]();
              (_0x41642e &&
                ((this["killsayLastAttempt"] = Date["now"]()),
                this["sendKillsay"](_0x41642e["text"])),
                this["scheduleKillsay"]());
            }));
        }, _0x629ea8)));
    }
    ["sendKillsay"](_0x3b93c3) {
      const _0x1e13d2 = document["getElementById"]("chatInput"),
        _0x14b233 = document["activeElement"],
        _0x312d82 = this["fromPage"](this["pageWindow"]["pressButton"]),
        _0x2e03f9 = this["controls"]?.["binds"]?.["chat"]?.["val"];
      if (
        !_0x1e13d2 ||
        _0x1e13d2["disabled"] ||
        _0x1e13d2["value"] ||
        _0x14b233?.["isContentEditable"] ||
        ["INPUT", "TEXTAREA", "SELECT"]["includes"](_0x14b233?.["tagName"]) ||
        this["isClickGuiVisible"]()
      )
        return (
          (this["killsayStatus"] = "message\x20skipped;\x20chat/GUI\x20busy"),
          ![]
        );
      if (
        typeof _0x312d82 !== "function" ||
        _0x312d82["length"] !== 0x3 ||
        !Number["isInteger"](_0x2e03f9) ||
        _0x2e03f9 < 0x1 ||
        _0x2e03f9 > 0xff
      )
        return (
          (this["killsayStatus"] =
            "native\x20chat\x20submit\x20API\x20unavailable"),
          ![]
        );
      const _0x28eb2a = _0x1e13d2["value"],
        _0x2bfa86 = [_0x1e13d2["selectionStart"], _0x1e13d2["selectionEnd"]];
      try {
        ((_0x1e13d2["value"] = _0x3b93c3),
          _0x1e13d2["focus"]({ preventScroll: !![] }));
        if (document["activeElement"] !== _0x1e13d2)
          return (
            (this["killsayStatus"] = "chat\x20focus\x20unavailable"),
            ![]
          );
        Reflect["apply"](_0x312d82, this["pageWindow"], [
          _0x2e03f9,
          null,
          "chat",
        ]);
        const _0x13d0ce = _0x1e13d2["value"] === "";
        return (
          (this["killsayStatus"] = _0x13d0ce
            ? "submitted\x20through\x20native\x20chat;\x20server\x20delivery\x20unverified"
            : "native\x20chat\x20did\x20not\x20submit;\x20message\x20skipped"),
          _0x13d0ce
        );
      } finally {
        if (_0x1e13d2["value"] === _0x3b93c3 || _0x1e13d2["value"] === "") {
          _0x1e13d2["value"] = _0x28eb2a;
          if (_0x2bfa86[0x0] != null)
            _0x1e13d2["setSelectionRange"]?.(..._0x2bfa86);
        }
        if (document["activeElement"] === _0x1e13d2) _0x1e13d2["blur"]();
        if (
          _0x14b233?.["isConnected"] &&
          typeof _0x14b233["focus"] === "function"
        )
          _0x14b233["focus"]({ preventScroll: !![] });
      }
    }
    ["restoreKillsay"]() {
      (clearTimeout(this["killsayTimer"]),
        (this["killsayTimer"] = null),
        (this["killsayQueue"] = []),
        (this["killsaySeen"] = null));
      const _0x59f841 = this["killsayObserver"];
      this["killsayObserver"] = null;
      try {
        if (_0x59f841 && _0x59f841["players"]["kill"] === _0x59f841["wrapper"])
          Object["defineProperty"](
            _0x59f841["players"],
            "kill",
            _0x59f841["descriptor"],
          );
      } catch (_0x3ea4f5) {}
      this["killsayStatus"] = "paused;\x20native\x20kill\x20API\x20restored";
    }
    ["crosshairGeometry"](_0xf719b5 = 0x0, _0x4925f7 = ![]) {
      const _0x250e00 = this["settings"],
        _0x4a2256 = _0x4925f7 ? "dot" : _0x250e00["crosshairStyle"],
        _0x2ed157 = _0x4a2256["endsWith"]("-dynamic"),
        _0x27ed7c =
          _0x250e00["crosshairGap"] +
          (_0x2ed157
            ? Math["max"](
                0x0,
                Math["min"](_0x250e00["crosshairSpreadLimit"], _0xf719b5),
              )
            : 0x0),
        _0x151852 = _0x250e00["crosshairThickness"],
        _0x1b8b78 = _0x250e00["crosshairLength"],
        _0x422200 = _0x250e00["crosshairLinkAxes"]
          ? _0x1b8b78
          : _0x250e00["crosshairVerticalLength"],
        _0x1903a2 = [],
        _0x4e476b = [],
        _0x10f098 = [];
      if (_0x4a2256["startsWith"]("classic")) {
        if (_0x250e00["crosshairLeft"])
          _0x1903a2["push"]([
            -_0x27ed7c - _0x1b8b78,
            -_0x151852 / 0x2,
            _0x1b8b78,
            _0x151852,
          ]);
        if (_0x250e00["crosshairRight"])
          _0x1903a2["push"]([
            _0x27ed7c,
            -_0x151852 / 0x2,
            _0x1b8b78,
            _0x151852,
          ]);
        if (_0x250e00["crosshairTop"])
          _0x1903a2["push"]([
            -_0x151852 / 0x2,
            -_0x27ed7c - _0x422200,
            _0x151852,
            _0x422200,
          ]);
        if (_0x250e00["crosshairBottom"])
          _0x1903a2["push"]([
            -_0x151852 / 0x2,
            _0x27ed7c,
            _0x151852,
            _0x422200,
          ]);
      } else {
        if (
          _0x4a2256["startsWith"]("circle") ||
          _0x4a2256["startsWith"]("square")
        )
          _0x4e476b["push"]({
            shape: _0x4a2256["startsWith"]("circle") ? "circle" : "square",
            radius: Math["max"](_0x151852 / 0x2, _0x27ed7c + _0x1b8b78),
            thickness: _0x151852,
          });
        else {
          if (_0x4a2256["startsWith"]("quad")) {
            const _0x4b103f = Math["max"](0x0, _0x27ed7c),
              _0x11a3c9 = [
                [-0x1, -0x1, _0x250e00["crosshairTop"]],
                [0x1, -0x1, _0x250e00["crosshairRight"]],
                [-0x1, 0x1, _0x250e00["crosshairLeft"]],
                [0x1, 0x1, _0x250e00["crosshairBottom"]],
              ];
            for (const [_0x4bffe1, _0x45adaa, _0xfea764] of _0x11a3c9)
              if (_0xfea764) {
                const _0x324dc5 =
                    _0x4bffe1 < 0x0 ? -_0x4b103f - _0x1b8b78 : _0x4b103f,
                  _0x2742b3 =
                    _0x45adaa < 0x0 ? -_0x4b103f - _0x422200 : _0x4b103f;
                if (_0x4a2256 === "quadrant")
                  _0x1903a2["push"](
                    [
                      _0x324dc5,
                      _0x45adaa < 0x0
                        ? _0x2742b3
                        : _0x2742b3 + _0x422200 - _0x151852,
                      _0x1b8b78,
                      _0x151852,
                    ],
                    [
                      _0x4bffe1 < 0x0
                        ? _0x324dc5
                        : _0x324dc5 + _0x1b8b78 - _0x151852,
                      _0x2742b3,
                      _0x151852,
                      _0x422200,
                    ],
                  );
                else
                  _0x1903a2["push"]([
                    _0x324dc5,
                    _0x2742b3,
                    _0x1b8b78,
                    _0x422200,
                  ]);
              }
          }
        }
      }
      if (_0x4a2256 === "dot" || _0x250e00["crosshairDot"])
        _0x10f098["push"]({
          shape: _0x250e00["crosshairDotShape"],
          size: _0x4925f7
            ? _0x250e00["crosshairScopeDotSize"]
            : _0x250e00["crosshairDotSize"],
        });
      return {
        rects: _0x1903a2["filter"](
          (_0x562ac3) => _0x562ac3[0x2] > 0x0 && _0x562ac3[0x3] > 0x0,
        ),
        rings: _0x4e476b,
        dots: _0x10f098,
      };
    }
    ["paintCustomCrosshair"](
      _0x9d8679,
      _0x3b0716,
      _0x55529e,
      _0x5d0c8b = 0x0,
      _0x50e289 = ![],
    ) {
      const _0x114570 = this["settings"],
        _0x5dfa7c = this["getTheme"](),
        _0x7cc9a8 = this["crosshairGeometry"](_0x5d0c8b, _0x50e289),
        _0x33b182 = _0x114570["crosshairUseTheme"]
          ? _0x5dfa7c["primary"]
          : _0x114570["crosshairColor"],
        _0x20261c = _0x114570["crosshairUseTheme"]
          ? _0x5dfa7c["secondary"]
          : _0x114570["crosshairEndColor"];
      _0x9d8679["save"]();
      try {
        (_0x9d8679["translate"](_0x3b0716, _0x55529e),
          _0x9d8679["rotate"](
            (_0x114570["crosshairRotation"] * Math["PI"]) / 0xb4,
          ));
        const _0x1c8632 = Math["max"](
          0x1,
          Math["abs"](_0x114570["crosshairGap"]) +
            _0x114570["crosshairLength"] +
            _0x114570["crosshairVerticalLength"] +
            _0x5d0c8b,
        );
        let _0x12e360 = _0x33b182;
        _0x114570["crosshairGradient"] &&
          ((_0x12e360 = _0x9d8679["createLinearGradient"](
            -_0x1c8632,
            -_0x1c8632,
            _0x1c8632,
            _0x1c8632,
          )),
          _0x12e360["addColorStop"](0x0, _0x33b182),
          _0x12e360["addColorStop"](0x1, _0x20261c));
        const _0x40b23a = _0x50e289
            ? _0x114570["crosshairScopeUseTheme"]
              ? _0x5dfa7c["primary"]
              : _0x114570["crosshairScopeColor"]
            : _0x114570["crosshairDotOwnColor"]
              ? _0x114570["crosshairDotColor"]
              : _0x12e360,
          _0x433c60 =
            _0x114570["crosshairOutline"] === "off"
              ? 0x0
              : _0x114570["crosshairOutlineWidth"],
          _0x2f241d = _0x114570["crosshairOutline"] === "half",
          _0x4e4ed8 = (
            _0x1c6fcd,
            _0x10d8c2,
            _0x26f5b7 = 0x0,
            _0x1f86cc = ![],
          ) => {
            (_0x9d8679["beginPath"](),
              _0x9d8679["arc"](
                0x0,
                0x0,
                _0x1c6fcd,
                _0x1f86cc ? Math["PI"] * 0.75 : 0x0,
                _0x1f86cc ? Math["PI"] * 1.75 : Math["PI"] * 0x2,
              ));
            if (_0x10d8c2) _0x9d8679["fill"]();
            else ((_0x9d8679["lineWidth"] = _0x26f5b7), _0x9d8679["stroke"]());
          };
        ((_0x9d8679["globalAlpha"] =
          ((_0x114570["crosshairOpacity"] / 0x64) *
            _0x114570["crosshairOutlineOpacity"]) /
          0x64),
          (_0x9d8679["fillStyle"] = _0x9d8679["strokeStyle"] =
            _0x114570["crosshairOutlineColor"]));
        if (_0x433c60 > 0x0) {
          for (const [_0x7e2b99, _0x40a3e6, _0x82e247, _0x59f220] of _0x7cc9a8[
            "rects"
          ]) {
            if (_0x2f241d)
              (_0x9d8679["fillRect"](
                _0x7e2b99 - _0x433c60,
                _0x40a3e6 - _0x433c60,
                _0x82e247 + _0x433c60,
                _0x433c60,
              ),
                _0x9d8679["fillRect"](
                  _0x7e2b99 - _0x433c60,
                  _0x40a3e6,
                  _0x433c60,
                  _0x59f220,
                ));
            else
              _0x9d8679["fillRect"](
                _0x7e2b99 - _0x433c60,
                _0x40a3e6 - _0x433c60,
                _0x82e247 + 0x2 * _0x433c60,
                _0x59f220 + 0x2 * _0x433c60,
              );
          }
          for (const {
            shape: _0x49f1e7,
            radius: _0x11b450,
            thickness: _0x3a3e7e,
          } of _0x7cc9a8["rings"]) {
            if (_0x49f1e7 === "circle")
              _0x4e4ed8(_0x11b450, ![], _0x3a3e7e + 0x2 * _0x433c60, _0x2f241d);
            else
              _0x2f241d
                ? ((_0x9d8679["lineWidth"] = _0x3a3e7e + 0x2 * _0x433c60),
                  _0x9d8679["beginPath"](),
                  _0x9d8679["moveTo"](-_0x11b450, _0x11b450),
                  _0x9d8679["lineTo"](-_0x11b450, -_0x11b450),
                  _0x9d8679["lineTo"](_0x11b450, -_0x11b450),
                  _0x9d8679["stroke"]())
                : ((_0x9d8679["lineWidth"] = _0x3a3e7e + 0x2 * _0x433c60),
                  _0x9d8679["strokeRect"](
                    -_0x11b450,
                    -_0x11b450,
                    0x2 * _0x11b450,
                    0x2 * _0x11b450,
                  ));
          }
          for (const { shape: _0x1fbca8, size: _0x59f59b } of _0x7cc9a8[
            "dots"
          ]) {
            if (_0x1fbca8 === "circle")
              _0x4e4ed8(
                _0x59f59b / 0x2 + (_0x2f241d ? _0x433c60 / 0x2 : _0x433c60),
                !_0x2f241d,
                _0x433c60,
                _0x2f241d,
              );
            else {
              if (_0x2f241d)
                (_0x9d8679["fillRect"](
                  -_0x59f59b / 0x2 - _0x433c60,
                  -_0x59f59b / 0x2 - _0x433c60,
                  _0x59f59b + _0x433c60,
                  _0x433c60,
                ),
                  _0x9d8679["fillRect"](
                    -_0x59f59b / 0x2 - _0x433c60,
                    -_0x59f59b / 0x2,
                    _0x433c60,
                    _0x59f59b,
                  ));
              else
                _0x9d8679["fillRect"](
                  -_0x59f59b / 0x2 - _0x433c60,
                  -_0x59f59b / 0x2 - _0x433c60,
                  _0x59f59b + 0x2 * _0x433c60,
                  _0x59f59b + 0x2 * _0x433c60,
                );
            }
          }
        }
        ((_0x9d8679["globalAlpha"] = _0x114570["crosshairOpacity"] / 0x64),
          (_0x9d8679["fillStyle"] = _0x9d8679["strokeStyle"] = _0x12e360),
          (_0x9d8679["shadowColor"] = _0x114570["crosshairShadow"]
            ? _0x114570["crosshairShadowColor"]
            : "transparent"),
          (_0x9d8679["shadowBlur"] = _0x114570["crosshairShadow"]
            ? _0x114570["crosshairShadowBlur"]
            : 0x0));
        for (const _0x1f8f92 of _0x7cc9a8["rects"])
          _0x9d8679["fillRect"](..._0x1f8f92);
        for (const {
          shape: _0xcf57c4,
          radius: _0x5b1c86,
          thickness: _0x58dbe6,
        } of _0x7cc9a8["rings"]) {
          if (_0xcf57c4 === "circle") _0x4e4ed8(_0x5b1c86, ![], _0x58dbe6);
          else
            ((_0x9d8679["lineWidth"] = _0x58dbe6),
              _0x9d8679["strokeRect"](
                -_0x5b1c86,
                -_0x5b1c86,
                0x2 * _0x5b1c86,
                0x2 * _0x5b1c86,
              ));
        }
        _0x9d8679["fillStyle"] = _0x40b23a;
        for (const { shape: _0x2b5588, size: _0x1ba69a } of _0x7cc9a8["dots"]) {
          if (_0x2b5588 === "circle") _0x4e4ed8(_0x1ba69a / 0x2, !![]);
          else
            _0x9d8679["fillRect"](
              -_0x1ba69a / 0x2,
              -_0x1ba69a / 0x2,
              _0x1ba69a,
              _0x1ba69a,
            );
        }
      } finally {
        _0x9d8679["restore"]();
      }
      return _0x7cc9a8;
    }
    ["prepareCustomCrosshair"]() {
      const _0x3fb557 = this["customCrosshairMode"]();
      if (!_0x3fb557) {
        if (this["customCrosshairActive"] || this["nativeCrosshairSettings"])
          this["restoreCustomCrosshair"]();
        return null;
      }
      const _0x5a8ae1 = this["overlay"]?.["canvas"];
      if (!_0x5a8ae1 || _0x5a8ae1["style"]?.["display"] === "none")
        return (this["restoreCustomCrosshair"](), null);
      const _0x14a1ac = Date["now"]();
      if (this["crosshairRetryAt"] > _0x14a1ac) return null;
      this["customCrosshairActive"] = !![];
      if (!this["hideNativeCrosshair"]())
        return (
          this["restoreCustomCrosshair"](),
          (this["crosshairRetryAt"] = _0x14a1ac + 0x3e8),
          (this["crosshairStatus"] =
            "native\x20crosshair\x20API\x20unavailable;\x20unchanged"),
          null
        );
      return (
        this["overrideNativeViewBoolean"](
          "crosshair-dot",
          this["predictionObject"](
            this["fromPage"](this["renderer"]),
            "aimDot",
          ),
          "display",
          ![],
        ),
        _0x3fb557
      );
    }
    ["updateCustomCrosshair"]() {
      if (this["crosshairUpdating"]) return;
      this["crosshairUpdating"] = !![];
      try {
        const _0x53797c = this["prepareCustomCrosshair"]();
        if (!_0x53797c) return;
        const _0x290ec9 = this["overlay"]["canvas"],
          _0x2c3e88 = Date["now"]();
        this["watchCrosshairViewport"](_0x290ec9);
        const _0x5ce339 = _0x290ec9["width"],
          _0x5deb43 = _0x290ec9["height"];
        if (
          !this["crosshairViewport"] ||
          this["crosshairViewportDirty"] ||
          this["crosshairViewport"]["backingWidth"] !== _0x5ce339 ||
          this["crosshairViewport"]["backingHeight"] !== _0x5deb43
        ) {
          const _0x9a0149 = _0x290ec9["getBoundingClientRect"]();
          ((this["crosshairViewport"] = {
            canvas: _0x290ec9,
            x: _0x9a0149["left"] + _0x9a0149["width"] / 0x2,
            y: _0x9a0149["top"] + _0x9a0149["height"] / 0x2,
            width: _0x9a0149["width"],
            height: _0x9a0149["height"],
            backingWidth: _0x5ce339,
            backingHeight: _0x5deb43,
          }),
            (this["crosshairViewportDirty"] = ![]));
        }
        const _0x2ada8c = this["crosshairViewport"];
        if (!(_0x2ada8c["height"] > 0x0)) {
          this["restoreCustomCrosshair"]();
          return;
        }
        if (!this["crosshairCanvas"]?.["isConnected"]) {
          const _0x5c44a5 = document["createElement"]("canvas");
          ((_0x5c44a5["id"] = "cracky-custom-crosshair"),
            _0x5c44a5["setAttribute"]("aria-hidden", "true"),
            (_0x5c44a5["style"]["cssText"] =
              "position:fixed;pointer-events:none;z-index:10;transform-origin:center;"),
            (_0x5c44a5["hidden"] = !![]),
            (document["body"] || document["documentElement"])["append"](
              _0x5c44a5,
            ),
            (this["crosshairCanvas"] = _0x5c44a5),
            (this["crosshairCtx"] = _0x5c44a5["getContext"]("2d")));
        }
        if (!this["crosshairCtx"]) {
          this["restoreCustomCrosshair"]();
          return;
        }
        const _0xc26fe3 = document["documentElement"];
        if (this["crosshairRoot"] !== _0xc26fe3) {
          if (!document["getElementById"]("cracky-crosshair-style")) {
            const _0x276d51 = document["createElement"]("style");
            ((_0x276d51["id"] = "cracky-crosshair-style"),
              (_0x276d51["textContent"] =
                "html[data-cracky-crosshair=\x22on\x22]\x20#aimDot{display:none!important;}#cracky-custom-crosshair[hidden]{display:none!important;}"),
              _0xc26fe3["append"](_0x276d51));
          }
          ((this["crosshairRoot"] = _0xc26fe3),
            _0xc26fe3["setAttribute"]("data-cracky-crosshair", "on"));
        }
        const _0x1ce386 = this["settings"],
          _0x3c5ab7 =
            _0x1ce386["crosshairScale"] *
            (_0x1ce386["crosshairResolutionScale"]
              ? Math["max"](0.25, Math["min"](0x4, _0x2ada8c["height"] / 0x438))
              : 0x1),
          _0x104803 =
            _0x1ce386["crosshairStyle"]["endsWith"]("-dynamic") &&
            !_0x53797c["dot"]
              ? this["crosshairSpreadPixels"](_0x2ada8c["height"], _0x3c5ab7)
              : 0x0,
          _0x2243ea = this["crosshairMotion"],
          _0x349532 =
            _0x1ce386["crosshairSmoothing"] > 0x0
              ? 0x1 -
                Math["exp"](
                  -Math["max"](
                    0x0,
                    Math["min"](
                      0x64,
                      _0x2c3e88 - (_0x2243ea?.["time"] ?? _0x2c3e88),
                    ),
                  ) / _0x1ce386["crosshairSmoothing"],
                )
              : 0x1,
          _0x10e476 = _0x2243ea
            ? _0x2243ea["spread"] +
              (_0x104803 - _0x2243ea["spread"]) * _0x349532
            : _0x104803;
        this["crosshairMotion"] = { time: _0x2c3e88, spread: _0x10e476 };
        const _0x43eeb2 = this["getTheme"](),
          _0x6b9cda = JSON["stringify"]([
            _0x53797c["dot"],
            _0x43eeb2["primary"],
            _0x43eeb2["secondary"],
            ..._0x4cfe6c["map"]((_0x53da9e) => _0x1ce386[_0x53da9e[0x1]]),
          ]),
          _0x4aeeaa = _0x6b9cda !== this["crosshairAppearance"],
          _0x5362d1 = JSON["stringify"]([
            _0x6b9cda,
            Math["round"](_0x10e476 * 0xa) / 0xa,
            _0x3c5ab7,
            this["pageWindow"]["devicePixelRatio"] || 0x1,
          ]),
          _0x42323a = this["crosshairCanvas"],
          _0x431253 = this["crosshairCtx"];
        if (
          _0x5362d1 !== this["crosshairPaintKey"] &&
          (_0x4aeeaa ||
            this["crosshairPaintKey"] == null ||
            _0x2c3e88 - this["crosshairPaintTime"] >= 0x3e8 / 0x1e ||
            _0x2c3e88 < this["crosshairPaintTime"])
        ) {
          const _0x1a8fac = this["crosshairGeometry"](
            _0x10e476,
            _0x53797c["dot"],
          );
          let _0x1f7616 = 0x0;
          for (const [_0x1e8c76, _0x5e94fe, _0x2bbc6d, _0x2310c3] of _0x1a8fac[
            "rects"
          ])
            _0x1f7616 = Math["max"](
              _0x1f7616,
              Math["hypot"](_0x1e8c76, _0x5e94fe),
              Math["hypot"](_0x1e8c76 + _0x2bbc6d, _0x5e94fe + _0x2310c3),
              Math["hypot"](_0x1e8c76 + _0x2bbc6d, _0x5e94fe),
              Math["hypot"](_0x1e8c76, _0x5e94fe + _0x2310c3),
            );
          for (const _0x215916 of _0x1a8fac["rings"])
            _0x1f7616 = Math["max"](
              _0x1f7616,
              (_0x215916["radius"] + _0x215916["thickness"] / 0x2) *
                (_0x215916["shape"] === "square" ? Math["SQRT2"] : 0x1),
            );
          for (const _0x2595d3 of _0x1a8fac["dots"])
            _0x1f7616 = Math["max"](
              _0x1f7616,
              (_0x2595d3["size"] * Math["SQRT2"]) / 0x2,
            );
          const _0x14bb20 =
              (_0x1ce386["crosshairOutline"] === "off"
                ? 0x0
                : _0x1ce386["crosshairOutlineWidth"]) +
              (_0x1ce386["crosshairShadow"]
                ? _0x1ce386["crosshairShadowBlur"] * 0x2
                : 0x0) +
              0x4,
            _0x452d33 = Math["max"](
              0x18,
              Math["ceil"]((0x2 * (_0x1f7616 + _0x14bb20)) / 0x10) * 0x10,
            ),
            _0x2fca80 = Math["min"](
              0x3,
              Math["max"](
                0x1,
                (this["pageWindow"]["devicePixelRatio"] || 0x1) * _0x3c5ab7,
              ),
            ),
            _0x1b6fde = Math["min"](0x800, Math["ceil"](_0x452d33 * _0x2fca80)),
            _0xc17a24 = _0x1b6fde / _0x452d33;
          ((_0x42323a["width"] !== _0x1b6fde ||
            _0x42323a["height"] !== _0x1b6fde) &&
            ((_0x42323a["width"] = _0x42323a["height"] = _0x1b6fde),
            (_0x42323a["style"]["width"] = _0x42323a["style"]["height"] =
              _0x452d33 + "px")),
            _0x431253["setTransform"](_0xc17a24, 0x0, 0x0, _0xc17a24, 0x0, 0x0),
            _0x431253["clearRect"](0x0, 0x0, _0x452d33, _0x452d33),
            this["paintCustomCrosshair"](
              _0x431253,
              _0x452d33 / 0x2,
              _0x452d33 / 0x2,
              _0x10e476,
              _0x53797c["dot"],
            ),
            (this["crosshairPaintKey"] = _0x5362d1),
            (this["crosshairAppearance"] = _0x6b9cda),
            (this["crosshairPaintTime"] = _0x2c3e88),
            (this["crosshairPaintCount"] =
              (this["crosshairPaintCount"] || 0x0) + 0x1));
        }
        const _0x232cb5 =
            _0x1ce386["crosshairFollowRecoil"] &&
            Number["isFinite"](this["me"]["recoilAnimY"])
              ? (Math["tan"](
                  Math["max"](
                    -0.5,
                    Math["min"](0.5, this["me"]["recoilAnimY"] * 0.3),
                  ),
                ) *
                  Math["abs"](
                    this["renderer"]?.["camera"]?.["projectionMatrix"]?.[
                      "elements"
                    ]?.[0x5] || 0x0,
                  ) *
                  _0x2ada8c["height"]) /
                0x2
              : 0x0,
          _0x528553 = {
            left:
              _0x2ada8c["x"] + _0x1ce386["crosshairOffsetX"] * _0x3c5ab7 + "px",
            top:
              _0x2ada8c["y"] +
              _0x1ce386["crosshairOffsetY"] * _0x3c5ab7 +
              _0x232cb5 +
              "px",
            transform: "translate(-50%,-50%)\x20scale(" + _0x3c5ab7 + ")",
          };
        for (const [_0x5aea33, _0x50157e] of Object["entries"](_0x528553))
          if (_0x42323a["style"][_0x5aea33] !== _0x50157e)
            _0x42323a["style"][_0x5aea33] = _0x50157e;
        if (_0x42323a["hidden"]) _0x42323a["hidden"] = ![];
        this["crosshairStatus"] = _0x53797c["scopeOnly"]
          ? "scope-only\x20crosshair\x20connected"
          : "connected\x20·\x20" + _0x1ce386["crosshairStyle"];
      } finally {
        this["crosshairUpdating"] = ![];
      }
    }
    ["renderCrosshairPreview"](
      _0x3ba763 = document["querySelector"]?.(".anonimbiri-menu-container"),
    ) {
      const _0x132ef5 = _0x3ba763?.["querySelector"](
        "#cracky-crosshair-preview",
      );
      if (!_0x132ef5) return;
      const _0x23b6d1 = _0x132ef5["getContext"]("2d");
      if (!_0x23b6d1) return;
      (_0x23b6d1["clearRect"](
        0x0,
        0x0,
        _0x132ef5["width"],
        _0x132ef5["height"],
      ),
        (_0x23b6d1["fillStyle"] = "#151c26"),
        _0x23b6d1["fillRect"](
          0x0,
          0x0,
          _0x132ef5["width"],
          _0x132ef5["height"],
        ));
      const _0x875784 =
          _0x3ba763["querySelector"]("#cracky-crosshair-preview-mode")?.[
            "value"
          ] === "scope",
        _0x585e56 = this["settings"],
        _0x33e89e =
          Math["abs"](_0x585e56["crosshairGap"]) +
          Math["max"](
            _0x585e56["crosshairLength"],
            _0x585e56["crosshairVerticalLength"],
            _0x585e56["crosshairDotSize"],
            _0x585e56["crosshairScopeDotSize"],
          ) +
          Math["min"](0xa, _0x585e56["crosshairSpreadLimit"]) +
          _0x585e56["crosshairThickness"] +
          _0x585e56["crosshairOutlineWidth"] +
          _0x585e56["crosshairShadowBlur"] +
          0x4,
        _0x32b09c = Math["min"](
          _0x585e56["crosshairScale"],
          (_0x132ef5["height"] - 0x10) / (0x2 * _0x33e89e),
        );
      (_0x23b6d1["save"](),
        _0x23b6d1["translate"](
          _0x132ef5["width"] / 0x2,
          _0x132ef5["height"] / 0x2,
        ),
        _0x23b6d1["scale"](_0x32b09c, _0x32b09c));
      if (
        !_0x875784 ||
        this["settings"]["crosshairScopedMode"] !== "hidden" ||
        (this["settings"]["noScopeOverlayEnabled"] &&
          this["settings"]["noScopeCrosshairEnabled"])
      )
        this["paintCustomCrosshair"](
          _0x23b6d1,
          0x0,
          0x0,
          Math["min"](0xa, this["settings"]["crosshairSpreadLimit"]),
          _0x875784 && this["settings"]["crosshairScopedMode"] === "dot",
        );
      _0x23b6d1["restore"]();
    }
    ["predictionMultiplier"](_0x1d4a26, _0x47e183, _0x182683, _0x4023df = 0x5) {
      return Number["isFinite"](_0x1d4a26)
        ? Math["max"](_0x182683, Math["min"](_0x4023df, _0x1d4a26))
        : _0x47e183;
    }
    ["predictionField"](_0x519d5f, _0x8a00e2, _0x1aa0c2) {
      try {
        const _0x4d953d =
          _0x519d5f && Object["getOwnPropertyDescriptor"](_0x519d5f, _0x8a00e2);
        return _0x4d953d?.["writable"] &&
          typeof _0x4d953d["value"] === _0x1aa0c2 &&
          (_0x1aa0c2 !== "number" || Number["isFinite"](_0x4d953d["value"]))
          ? _0x4d953d
          : null;
      } catch (_0x5e920b) {
        return null;
      }
    }
    ["predictionObject"](_0x185cc7, _0x5c23e5) {
      try {
        return (
          this["fromPage"](
            Object["getOwnPropertyDescriptor"](_0x185cc7, _0x5c23e5)?.["value"],
          ) || null
        );
      } catch (_0x576692) {
        return null;
      }
    }
    ["restorePredictionField"](_0x2943fd) {
      const _0x28eae2 = this["predictionOverrides"]?.["get"](_0x2943fd);
      if (!_0x28eae2) return;
      this["predictionOverrides"]["delete"](_0x2943fd);
      try {
        const _0x142a7b = this["predictionField"](
          _0x28eae2["object"],
          _0x28eae2["property"],
          typeof _0x28eae2["original"],
        );
        if (_0x142a7b && Object["is"](_0x142a7b["value"], _0x28eae2["applied"]))
          _0x28eae2["object"][_0x28eae2["property"]] = _0x28eae2["original"];
      } catch (_0x3631a3) {}
    }
    ["overridePredictionField"](
      _0x4910b,
      _0x209ee5,
      _0xf0359,
      _0x88c3cd,
      _0x50362c,
    ) {
      let _0x1f0be1 = this["predictionOverrides"]?.["get"](_0x4910b);
      (!_0x88c3cd || (_0x1f0be1 && _0x1f0be1["object"] !== _0x209ee5)) &&
        (this["restorePredictionField"](_0x4910b), (_0x1f0be1 = null));
      if (!_0x88c3cd) return ![];
      const _0x77af8e = this["predictionField"](
        _0x209ee5,
        _0xf0359,
        _0xf0359 === "noclip" ? "boolean" : "number",
      );
      if (!_0x77af8e) return (this["restorePredictionField"](_0x4910b), ![]);
      try {
        const _0x2978ea =
            _0x1f0be1 && Object["is"](_0x77af8e["value"], _0x1f0be1["applied"])
              ? _0x1f0be1["original"]
              : _0x77af8e["value"],
          _0x5715ab = _0x50362c(_0x2978ea);
        if (
          typeof _0x5715ab !== typeof _0x2978ea ||
          (typeof _0x5715ab === "number" && !Number["isFinite"](_0x5715ab))
        )
          return ![];
        if (
          _0x1f0be1 &&
          Object["is"](_0x1f0be1["original"], _0x2978ea) &&
          Object["is"](_0x1f0be1["applied"], _0x5715ab)
        )
          return !![];
        const _0x471bbb = {
          object: _0x209ee5,
          property: _0xf0359,
          original: _0x2978ea,
          applied: _0x5715ab,
        };
        ((this["predictionOverrides"] ||= new Map()),
          this["predictionOverrides"]["set"](_0x4910b, _0x471bbb));
        if (!Object["is"](_0x77af8e["value"], _0x5715ab))
          _0x209ee5[_0xf0359] = _0x5715ab;
        return !![];
      } catch (_0x339833) {
        return (this["restorePredictionField"](_0x4910b), ![]);
      }
    }
    ["restorePredictionControls"]() {
      for (const _0x31e595 of ["speed", "fire"])
        this["restorePredictionField"](_0x31e595);
      this["speedStatus"] = this["rapidFireStatus"] =
        "paused;\x20native\x20fields\x20restored";
    }
    ["updatePredictionControls"](_0xfab8d3) {
      if (!this["me"] || !this["game"] || !this["isGameplayAllowed"]()) {
        this["restorePredictionControls"]();
        return;
      }
      if (
        !this["settings"]["speedEnabled"] &&
        !this["settings"]["rapidFireEnabled"] &&
        !this["predictionOverrides"]?.["size"]
      )
        return;
      const _0x58ee2a = this["fromPage"](this["me"]),
        _0x6dc1f5 = this["settings"]["rapidFireEnabled"]
          ? this["predictionObject"](_0x58ee2a, "attributes")
          : null,
        _0x26c7ec = this["predictionField"](_0x58ee2a, "speedBoost", "number"),
        _0x5a691f = this["predictionMultiplier"](
          this["settings"]["speedMultiplier"],
          1.5,
          0.1,
        ),
        _0x1e2346 = this["predictionMultiplier"](
          this["settings"]["rapidFireMultiplier"],
          0x2,
          0x1,
          0x14,
        ),
        _0x1f72b3 = this["overridePredictionField"](
          "speed",
          _0x58ee2a,
          "speedBoost",
          !!_0x26c7ec &&
            _0x26c7ec["value"] >= 0x0 &&
            !!this["settings"]["speedEnabled"],
          (_0x41e56e) => Math["min"](0xa, (_0x41e56e || 0x1) * _0x5a691f),
        );
      this["speedStatus"] = !this["settings"]["speedEnabled"]
        ? "off"
        : _0x1f72b3
          ? _0x5a691f + "×\x20local\x20boost\x20(combined\x20cap\x2010×)"
          : "native\x20speed\x20field\x20unavailable";
      const _0x1950d5 = this["predictionField"](_0x6dc1f5, "fRate", "number"),
        _0x34088e = this["overridePredictionField"](
          "fire",
          _0x6dc1f5,
          "fRate",
          !!this["settings"]["rapidFireEnabled"] &&
            !!_0x58ee2a["weapon"] &&
            !_0x58ee2a["weapon"]["melee"] &&
            !!_0x1950d5 &&
            _0x1950d5["value"] > 0x0,
          (_0x48dd21) => Math["max"](0.0001, _0x48dd21 / _0x1e2346),
        );
      this["rapidFireStatus"] = !this["settings"]["rapidFireEnabled"]
        ? "off"
        : _0x58ee2a["weapon"]?.["melee"]
          ? "not\x20applied\x20to\x20melee"
          : _0x34088e
            ? _0x1e2346 +
              "×\x20local\x20cooldown\x20scale;\x20native\x20ammo/reload\x20retained"
            : "native\x20fire-rate\x20field\x20unavailable";
      if (
        !Array["isArray"](_0xfab8d3) ||
        _0xfab8d3["length"] < 0xf ||
        Object["isFrozen"](_0xfab8d3)
      )
        return;
      if (
        _0x34088e &&
        _0x58ee2a["weapon"]["nAuto"] &&
        _0x58ee2a["didShoot"] &&
        _0xfab8d3[0x5]
      )
        _0xfab8d3[0x5] = 0x0;
    }
    ["updateAutoNuke"]() {
      if (
        !this["settings"]["autoNuke"] ||
        !this["me"]?.["active"] ||
        typeof this["pageWindow"]["callInStreak"] !== "function"
      ) {
        this["lastNukeRequest"] = null;
        return;
      }
      const _0x4b049c = Object["values"](this["me"]["streaks"] || {})["find"](
        (_0xd526d4) =>
          _0xd526d4?.["cnt"] > 0x0 &&
          _0xd526d4["streak"]?.["name"] === "Nuke" &&
          Number["isInteger"](_0xd526d4["streak"]["slot"]),
      );
      if (!_0x4b049c) {
        this["lastNukeRequest"] = null;
        return;
      }
      if (
        this["lastNukeRequest"]?.["player"] === this["me"] &&
        this["lastNukeRequest"]["entry"] === _0x4b049c &&
        this["lastNukeRequest"]["count"] === _0x4b049c["cnt"]
      )
        return;
      ((this["lastNukeRequest"] = {
        player: this["me"],
        entry: _0x4b049c,
        count: _0x4b049c["cnt"],
      }),
        this["pageWindow"]["callInStreak"](_0x4b049c["streak"]["slot"]));
    }
    ["getModuleStatusText"]() {
      const _0x5b80ed =
          typeof this["game"]?.["config"]?.["thirdPerson"] === "boolean",
        _0x553587 = Number["isFinite"](this["controls"]?.["idleTimer"]),
        _0x30a2dc = !!this["trailSettings"](),
        _0x3534cd = typeof this["pageWindow"]["callInStreak"] === "function",
        _0x1a3348 = (_0x23b600) =>
          _0x23b600
            ? "native\x20API\x20found"
            : this["game"]
              ? "API\x20unavailable"
              : "waiting\x20for\x20game",
        _0x3bad4f = this["thirdPersonOverride"],
        _0x467348 = _0x3bad4f
          ? !_0x3bad4f["modelRefresh"]
            ? "camera\x20enabled;\x20model\x20refresh\x20unavailable"
            : _0x3bad4f["player"]?.["needsRender"]
              ? "enabled;\x20model\x20refresh\x20queued"
              : "enabled;\x20refresh\x20flag\x20consumed"
          : _0x1a3348(_0x5b80ed);
      return (
        "Third-person:\x20" +
        _0x467348 +
        "\x20·\x20Anti-idle:\x20" +
        _0x1a3348(_0x553587) +
        "\x20·\x20Trails:\x20" +
        _0x1a3348(_0x30a2dc) +
        "\x20·\x20Auto-nuke:\x20" +
        _0x1a3348(_0x3534cd) +
        "\x20(earned\x20only).\x20Local\x20cosmetics:\x20" +
        (this["cosmeticsStatus"] ||
          "select\x20items\x20under\x20Unlock\x20All;\x20account\x20inventory\x20unchanged") +
        "."
      );
    }
    ["cosmeticChoices"](_0x4162bf, _0x464bad = "") {
      const _0x4cd0ed = _0x1b6bde["find"](
          (_0x2f1573) => _0x2f1573[0x0] === _0x4162bf,
        )?.[0x2],
        _0x5ad9c0 = [[-0x1, "Native\x20/\x20equipped"]],
        _0x36fcc9 = this["game"]?.["store"]?.["skins"] || [];
      for (let _0x5b2eb0 = 0x0; _0x5b2eb0 < _0x36fcc9["length"]; _0x5b2eb0++) {
        const _0x2e36ad = _0x36fcc9[_0x5b2eb0];
        if (
          !_0x2e36ad ||
          (_0x2e36ad["type"] ?? 0x0) !== _0x4cd0ed ||
          _0x2e36ad["free"]
        )
          continue;
        if (
          _0x5b2eb0 !== this["settings"][_0x4162bf] &&
          (_0x5ad9c0["length"] >= 0x97 ||
            (_0x464bad &&
              !(String(_0x2e36ad["name"]) + "\x20" + _0x5b2eb0)
                ["toLowerCase"]()
                ["includes"](_0x464bad)))
        )
          continue;
        _0x5ad9c0["push"]([
          _0x5b2eb0,
          String(_0x2e36ad["name"] || "Item") + "\x20#" + _0x5b2eb0,
        ]);
      }
      return _0x5ad9c0;
    }
    ["restoreLocalCosmetics"]() {
      const _0x172d65 = this["localCosmeticsOverride"];
      if (!_0x172d65) return;
      let _0x12f999 = ![];
      _0x172d65["wrapper"] &&
        _0x172d65["player"]["getSkinForLoadout"] === _0x172d65["wrapper"] &&
        (Object["defineProperty"](
          _0x172d65["player"],
          "getSkinForLoadout",
          _0x172d65["method"],
        ),
        (_0x12f999 = !![]));
      for (const [_0x1699ae, _0x379412] of _0x172d65["fields"])
        _0x172d65["player"][_0x1699ae] === _0x379412["applied"] &&
          Object["getOwnPropertyDescriptor"](_0x172d65["player"], _0x1699ae)?.[
            "writable"
          ] &&
          ((_0x172d65["player"][_0x1699ae] = _0x379412["original"]),
          (_0x12f999 = !![]));
      if (_0x12f999) this["requestModelRefresh"](_0x172d65["player"]);
      this["localCosmeticsOverride"] = null;
    }
    ["updateLocalCosmetics"]() {
      if (!this["settings"]["unlockSkins"] || !this["isGameplayAllowed"]()) {
        (this["restoreLocalCosmetics"](), (this["cosmeticsStatus"] = "off"));
        return;
      }
      const _0x1983f9 = this["me"],
        _0x50c55a = this["game"]?.["store"]?.["skins"];
      if (
        !_0x1983f9 ||
        !Array["isArray"](_0x50c55a) ||
        !this["game"]?.["skinManager"]?.["getSkin"]
      ) {
        (this["restoreLocalCosmetics"](),
          (this["cosmeticsStatus"] = "native\x20catalog\x20not\x20available"));
        return;
      }
      if (this["localCosmeticsOverride"]?.["player"] !== _0x1983f9)
        this["restoreLocalCosmetics"]();
      const _0x453a7b = (this["localCosmeticsOverride"] ||= {
        player: _0x1983f9,
        fields: new Map(),
        primedSkins: new Map(),
      });
      let _0x47dfa7 = ![],
        _0x23fe7d = 0x0;
      const _0x3d96eb = (_0x3bd935, _0x49054b) => {
        _0x453a7b["primedSkins"]["get"](_0x3bd935) !== _0x49054b &&
          (this["game"]["skinManager"]["getSkin"](_0x3bd935),
          _0x453a7b["primedSkins"]["set"](_0x3bd935, _0x49054b));
      };
      for (const [_0xbafab7, , _0x20c2c7, _0x436241] of _0x1b6bde) {
        if (!_0x436241) continue;
        const _0x23bfc6 = this["settings"][_0xbafab7],
          _0x1f8b3a = _0x50c55a[_0x23bfc6],
          _0x3adfa7 =
            Number["isInteger"](_0x23bfc6) &&
            _0x23bfc6 >= 0x0 &&
            _0x1f8b3a &&
            (_0x1f8b3a["type"] ?? 0x0) === _0x20c2c7;
        let _0xb15cf0 = _0x453a7b["fields"]["get"](_0x436241);
        if (_0xb15cf0 && _0x1983f9[_0x436241] !== _0xb15cf0["applied"])
          _0xb15cf0["original"] = _0x1983f9[_0x436241];
        if (!_0x3adfa7) {
          if (_0xb15cf0) {
            if (_0x1983f9[_0x436241] === _0xb15cf0["applied"])
              _0x1983f9[_0x436241] = _0xb15cf0["original"];
            (_0x453a7b["fields"]["delete"](_0x436241), (_0x47dfa7 = !![]));
          }
          continue;
        }
        if (
          !Object["getOwnPropertyDescriptor"](_0x1983f9, _0x436241)?.[
            "writable"
          ]
        )
          continue;
        (_0x3d96eb(_0x23bfc6, _0x1f8b3a),
          !_0xb15cf0 &&
            ((_0xb15cf0 = {
              original: _0x1983f9[_0x436241],
              applied: _0x23bfc6,
            }),
            _0x453a7b["fields"]["set"](_0x436241, _0xb15cf0)),
          (_0xb15cf0["applied"] = _0x23bfc6),
          _0x1983f9[_0x436241] !== _0x23bfc6 &&
            ((_0x1983f9[_0x436241] = _0x23bfc6), (_0x47dfa7 = !![])),
          _0x23fe7d++);
      }
      const _0x590de5 = this["settings"]["localWeaponSkin"],
        _0x248d45 = _0x50c55a[_0x590de5];
      if (
        Number["isInteger"](_0x590de5) &&
        _0x590de5 >= 0x0 &&
        _0x248d45 &&
        (_0x248d45["type"] ?? 0x0) === 0x0 &&
        _0x248d45["weapon"] > 0x0
      ) {
        const _0x711899 = Object["getOwnPropertyDescriptor"](
          _0x1983f9,
          "getSkinForLoadout",
        );
        if (
          !_0x453a7b["wrapper"] &&
          _0x711899?.["writable"] &&
          typeof _0x711899["value"] === "function"
        ) {
          _0x453a7b["method"] = _0x711899;
          const _0x2f8bf9 = this;
          ((_0x453a7b["wrapper"] = this["toPageFunction"](function (_0x4b9be4) {
            const _0xacb9d0 =
              _0x2f8bf9["game"]?.["store"]?.["skins"][
                _0x2f8bf9["settings"]["localWeaponSkin"]
              ];
            return this === _0x1983f9 &&
              _0x2f8bf9["settings"]["unlockSkins"] &&
              _0xacb9d0?.["weapon"] - 0x1 === _0x1983f9["loadout"]?.[_0x4b9be4]
              ? _0x2f8bf9["settings"]["localWeaponSkin"]
              : _0x711899["value"]["call"](this, _0x4b9be4);
          })),
            (_0x1983f9["getSkinForLoadout"] = _0x453a7b["wrapper"]),
            (_0x47dfa7 = !![]));
        }
        (_0x3d96eb(_0x590de5, _0x248d45),
          _0x453a7b["selection"] !== _0x590de5 &&
            ((_0x453a7b["selection"] = _0x590de5), (_0x47dfa7 = !![])),
          _0x23fe7d++);
      } else {
        if (_0x453a7b["wrapper"]) {
          if (_0x1983f9["getSkinForLoadout"] === _0x453a7b["wrapper"])
            Object["defineProperty"](
              _0x1983f9,
              "getSkinForLoadout",
              _0x453a7b["method"],
            );
          ((_0x453a7b["wrapper"] = null), (_0x47dfa7 = !![]));
        }
      }
      if (_0x47dfa7) this["requestModelRefresh"](_0x1983f9);
      this["cosmeticsStatus"] =
        _0x23fe7d +
        "\x20local\x20selections\x20·\x20no\x20inventory\x20grants\x20or\x20account\x20changes";
    }
    ["updateInstantReload"](_0x5daaab) {
      if (!this["settings"]["instantReload"] || !this["isGameplayAllowed"]())
        return;
      const _0x2da8d8 = this["me"],
        _0x34db81 = _0x2da8d8?.["loadoutIndex"],
        _0x1f213d = _0x2da8d8?.["weapon"],
        _0x30d38e =
          this["game"]?.["mode"]?.["ammoLimit"] ?? _0x1f213d?.["ammo"],
        _0x355cfb = _0x5daaab?.[0x1];
      this["reloadStatus"] = "waiting\x20for\x20an\x20active\x20reload";
      if (
        !_0x1f213d ||
        _0x1f213d["melee"] ||
        _0x1f213d["noReload"] ||
        !Number["isInteger"](_0x1f213d["ammo"]) ||
        _0x1f213d["ammo"] <= 0x0 ||
        this["game"]?.["mode"]?.["noReloads"] ||
        !Number["isInteger"](_0x34db81) ||
        _0x34db81 < 0x0 ||
        !Array["isArray"](_0x2da8d8["ammos"]) ||
        !Number["isFinite"](_0x2da8d8["ammos"][_0x34db81]) ||
        !Number["isInteger"](_0x30d38e) ||
        _0x30d38e <= 0x0 ||
        !Number["isFinite"](_0x355cfb) ||
        _0x355cfb <= 0x0 ||
        !Number["isFinite"](_0x2da8d8["reloadTimer"]) ||
        _0x2da8d8["reloadTimer"] <= 0x0
      )
        return;
      if (
        this["game"]?.["mode"]?.["finiteAmmo"] &&
        (!Array["isArray"](_0x2da8d8["reserveAmmos"]) ||
          !Number["isFinite"](_0x2da8d8["reserveAmmos"][_0x34db81]) ||
          _0x2da8d8["reserveAmmos"][_0x34db81] < 0x0)
      ) {
        this["reloadStatus"] = "reserve\x20state\x20unsupported";
        return;
      }
      const _0x2f3056 = Object["getOwnPropertyDescriptor"](
          _0x2da8d8,
          "reloadTimer",
        ),
        _0x22ad64 = Object["getOwnPropertyDescriptor"](
          _0x2da8d8["reloads"] || {},
          String(_0x34db81),
        );
      if (
        !_0x2f3056?.["writable"] ||
        !_0x22ad64?.["writable"] ||
        !Number["isFinite"](_0x22ad64["value"])
      ) {
        this["reloadStatus"] =
          "reload\x20state\x20is\x20read-only\x20/\x20unsupported";
        return;
      }
      ((_0x2da8d8["reloadTimer"] = Math["min"](
        _0x2da8d8["reloadTimer"],
        _0x355cfb,
      )),
        (_0x2da8d8["reloads"][_0x34db81] = 0x0),
        (this["reloadStatus"] =
          "shortened\x20to\x20one\x20native\x20input\x20tick"));
    }
    ["modelPoint"](_0x3464a6, _0x25b899 = { x: 0x0, y: 0x0, z: 0x0 }) {
      !this["renderWorkCache"]?.["points"]["has"](_0x3464a6) &&
        (_0x3464a6?.["updateWorldMatrix"]?.(!![], ![]),
        this["renderWorkCache"]?.["points"]["add"](_0x3464a6));
      const _0x3a6e2a = _0x3464a6?.["matrixWorld"]?.["elements"];
      if (
        _0x3a6e2a?.["length"] !== 0x10 ||
        !Number["isFinite"](_0x25b899["x"] + _0x25b899["y"] + _0x25b899["z"])
      )
        return null;
      const _0x2cbf0f = {
        x:
          _0x3a6e2a[0x0] * _0x25b899["x"] +
          _0x3a6e2a[0x4] * _0x25b899["y"] +
          _0x3a6e2a[0x8] * _0x25b899["z"] +
          _0x3a6e2a[0xc],
        y:
          _0x3a6e2a[0x1] * _0x25b899["x"] +
          _0x3a6e2a[0x5] * _0x25b899["y"] +
          _0x3a6e2a[0x9] * _0x25b899["z"] +
          _0x3a6e2a[0xd],
        z:
          _0x3a6e2a[0x2] * _0x25b899["x"] +
          _0x3a6e2a[0x6] * _0x25b899["y"] +
          _0x3a6e2a[0xa] * _0x25b899["z"] +
          _0x3a6e2a[0xe],
      };
      return Number["isFinite"](
        _0x2cbf0f["x"] + _0x2cbf0f["y"] + _0x2cbf0f["z"],
      )
        ? _0x2cbf0f
        : null;
    }
    ["isModelVisible"](_0x589d80, _0x706d85) {
      let _0x4bd926 = 0x0;
      for (
        let _0x128f7a = _0x589d80;
        _0x128f7a && _0x4bd926++ < 0x40;
        _0x128f7a = _0x128f7a["parent"]
      ) {
        if (_0x128f7a["visible"] === ![]) return ![];
        if (_0x128f7a === _0x706d85) return !![];
      }
      return ![];
    }
    ["rigBounds"](_0xb1fc1f) {
      const _0x213040 = _0xb1fc1f?.["attributes"]?.["position"];
      if (
        !_0x213040?.["array"] ||
        _0x213040["itemSize"] !== 0x3 ||
        !Number["isInteger"](_0x213040["count"]) ||
        _0x213040["count"] < 0x8 ||
        _0x213040["count"] > 0x2ee0 ||
        _0x213040["isInterleavedBufferAttribute"]
      )
        return null;
      this["rigBoundsCache"] ||= new WeakMap();
      const _0x4f66c7 = this["rigBoundsCache"]["get"](_0xb1fc1f);
      if (
        _0x4f66c7?.["position"] === _0x213040 &&
        _0x4f66c7["version"] === _0x213040["version"]
      )
        return _0x4f66c7;
      const _0x5e6a63 = { x: Infinity, y: Infinity, z: Infinity },
        _0x3a7e02 = { x: -Infinity, y: -Infinity, z: -Infinity };
      for (let _0x701407 = 0x0; _0x701407 < _0x213040["count"]; _0x701407++) {
        const _0x31bc77 = _0x213040["array"][_0x701407 * 0x3],
          _0x3242f0 = _0x213040["array"][_0x701407 * 0x3 + 0x1],
          _0xf38ffd = _0x213040["array"][_0x701407 * 0x3 + 0x2];
        if (!Number["isFinite"](_0x31bc77 + _0x3242f0 + _0xf38ffd)) return null;
        ((_0x5e6a63["x"] = Math["min"](_0x5e6a63["x"], _0x31bc77)),
          (_0x5e6a63["y"] = Math["min"](_0x5e6a63["y"], _0x3242f0)),
          (_0x5e6a63["z"] = Math["min"](_0x5e6a63["z"], _0xf38ffd)),
          (_0x3a7e02["x"] = Math["max"](_0x3a7e02["x"], _0x31bc77)),
          (_0x3a7e02["y"] = Math["max"](_0x3a7e02["y"], _0x3242f0)),
          (_0x3a7e02["z"] = Math["max"](_0x3a7e02["z"], _0xf38ffd)));
      }
      const _0x186cc7 = {
        position: _0x213040,
        version: _0x213040["version"],
        min: _0x5e6a63,
        max: _0x3a7e02,
      };
      return (this["rigBoundsCache"]["set"](_0xb1fc1f, _0x186cc7), _0x186cc7);
    }
    ["rigGeometry"](_0x1082c4) {
      const _0x1ccee2 = _0x1082c4?.["attributes"]?.["position"],
        _0x3cf222 = _0x1082c4?.["attributes"]?.["normal"],
        _0x171af0 = _0x1082c4?.["index"];
      if (
        !_0x1ccee2?.["array"] ||
        _0x1ccee2["itemSize"] !== 0x3 ||
        !Number["isInteger"](_0x1ccee2["count"]) ||
        _0x1ccee2["count"] < 0x8 ||
        _0x1ccee2["count"] > 0x2ee0 ||
        _0x1ccee2["isInterleavedBufferAttribute"]
      )
        return null;
      this["rigGeometryCache"] ||= new WeakMap();
      const _0x251bbe = this["rigGeometryCache"]["get"](_0x1082c4);
      if (
        _0x251bbe?.["position"] === _0x1ccee2 &&
        _0x251bbe["version"] === _0x1ccee2["version"] &&
        _0x251bbe["normal"] === _0x3cf222 &&
        _0x251bbe["normalVersion"] === _0x3cf222?.["version"] &&
        _0x251bbe["index"] === _0x171af0 &&
        _0x251bbe["indexVersion"] === _0x171af0?.["version"]
      )
        return _0x251bbe;
      if (this["renderWorkCache"]) {
        if (_0x1ccee2["count"] > this["renderWorkCache"]["rigVertices"])
          return null;
        this["renderWorkCache"]["rigVertices"] -= _0x1ccee2["count"];
      }
      const _0x2a8d13 = { x: Infinity, y: Infinity, z: Infinity },
        _0x40e148 = { x: -Infinity, y: -Infinity, z: -Infinity },
        _0x90b041 = new Map(),
        _0x2b93e = [],
        _0x3626db =
          _0x3cf222?.["array"] &&
          _0x3cf222["itemSize"] === 0x3 &&
          _0x3cf222["count"] === _0x1ccee2["count"] &&
          !_0x3cf222["isInterleavedBufferAttribute"];
      for (let _0x186c70 = 0x0; _0x186c70 < _0x1ccee2["count"]; _0x186c70++) {
        const _0x203324 = {
          x: _0x1ccee2["array"][_0x186c70 * 0x3],
          y: _0x1ccee2["array"][_0x186c70 * 0x3 + 0x1],
          z: _0x1ccee2["array"][_0x186c70 * 0x3 + 0x2],
        };
        if (
          !Number["isFinite"](_0x203324["x"] + _0x203324["y"] + _0x203324["z"])
        )
          return null;
        for (const _0x18064c of ["x", "y", "z"]) {
          ((_0x2a8d13[_0x18064c] = Math["min"](
            _0x2a8d13[_0x18064c],
            _0x203324[_0x18064c],
          )),
            (_0x40e148[_0x18064c] = Math["max"](
              _0x40e148[_0x18064c],
              _0x203324[_0x18064c],
            )));
        }
        if (!_0x3626db) continue;
        const _0xe58cb0 = {
            x: _0x3cf222["array"][_0x186c70 * 0x3],
            y: _0x3cf222["array"][_0x186c70 * 0x3 + 0x1],
            z: _0x3cf222["array"][_0x186c70 * 0x3 + 0x2],
          },
          _0x368ab5 = Math["hypot"](
            _0xe58cb0["x"],
            _0xe58cb0["y"],
            _0xe58cb0["z"],
          );
        if (
          !Number["isFinite"](_0x368ab5) ||
          _0x368ab5 < 0.99 ||
          _0x368ab5 > 1.01
        )
          continue;
        ((_0xe58cb0["x"] /= _0x368ab5),
          (_0xe58cb0["y"] /= _0x368ab5),
          (_0xe58cb0["z"] /= _0x368ab5));
        const _0x5475be =
            _0xe58cb0["x"] * _0x203324["x"] +
            _0xe58cb0["y"] * _0x203324["y"] +
            _0xe58cb0["z"] * _0x203324["z"],
          _0x3d2274 = [
            _0xe58cb0["x"],
            _0xe58cb0["y"],
            _0xe58cb0["z"],
            _0x5475be,
          ]
            ["map"]((_0x5d4a11) => Math["round"](_0x5d4a11 * 0x3e8))
            ["join"](",");
        let _0x270992 = _0x90b041["get"](_0x3d2274);
        !_0x270992 &&
          ((_0x270992 = {
            normal: _0xe58cb0,
            points: [],
            welded: new Map(),
            parents: [],
          }),
          _0x90b041["set"](_0x3d2274, _0x270992));
        const _0x4e2d03 = [_0x203324["x"], _0x203324["y"], _0x203324["z"]]
          ["map"]((_0x47279a) => Math["round"](_0x47279a * 0x2710))
          ["join"](",");
        let _0x14fd57 = _0x270992["welded"]["get"](_0x4e2d03);
        (_0x14fd57 === undefined &&
          ((_0x14fd57 = _0x270992["points"]["length"]),
          _0x270992["welded"]["set"](_0x4e2d03, _0x14fd57),
          _0x270992["points"]["push"](_0x203324),
          _0x270992["parents"]["push"](_0x14fd57)),
          (_0x2b93e[_0x186c70] = { plane: _0x270992, id: _0x14fd57 }));
      }
      const _0xa756ee = (_0x1d08a4, _0x175df0) => {
          while (_0x1d08a4["parents"][_0x175df0] !== _0x175df0) {
            ((_0x1d08a4["parents"][_0x175df0] =
              _0x1d08a4["parents"][_0x1d08a4["parents"][_0x175df0]]),
              (_0x175df0 = _0x1d08a4["parents"][_0x175df0]));
          }
          return _0x175df0;
        },
        _0x4cc3f4 = _0x171af0 ? _0x171af0["count"] : _0x1ccee2["count"],
        _0xec8093 =
          !_0x171af0 ||
          (_0x171af0["array"] &&
            _0x171af0["itemSize"] === 0x1 &&
            !_0x171af0["isInterleavedBufferAttribute"]);
      if (
        _0xec8093 &&
        Number["isInteger"](_0x4cc3f4) &&
        _0x4cc3f4 <= 0x11940 &&
        _0x4cc3f4 % 0x3 === 0x0
      )
        for (let _0x43905f = 0x0; _0x43905f < _0x4cc3f4; _0x43905f += 0x3) {
          const _0x45a360 =
              _0x2b93e[_0x171af0 ? _0x171af0["array"][_0x43905f] : _0x43905f],
            _0x129e38 =
              _0x2b93e[
                _0x171af0
                  ? _0x171af0["array"][_0x43905f + 0x1]
                  : _0x43905f + 0x1
              ],
            _0xa5b19f =
              _0x2b93e[
                _0x171af0
                  ? _0x171af0["array"][_0x43905f + 0x2]
                  : _0x43905f + 0x2
              ];
          if (
            !_0x45a360 ||
            !_0x129e38 ||
            !_0xa5b19f ||
            _0x45a360["plane"] !== _0x129e38["plane"] ||
            _0x45a360["plane"] !== _0xa5b19f["plane"]
          )
            continue;
          const _0x48758b = _0xa756ee(_0x45a360["plane"], _0x45a360["id"]);
          ((_0x45a360["plane"]["parents"][
            _0xa756ee(_0x45a360["plane"], _0x129e38["id"])
          ] = _0x48758b),
            (_0x45a360["plane"]["parents"][
              _0xa756ee(_0x45a360["plane"], _0xa5b19f["id"])
            ] = _0x48758b));
        }
      const _0x4a586b = [];
      for (const _0x383d9f of _0x90b041["values"]()) {
        const _0x444693 = new Map();
        for (
          let _0x1730c5 = 0x0;
          _0x1730c5 < _0x383d9f["points"]["length"];
          _0x1730c5++
        ) {
          const _0x5db4b2 = _0xa756ee(_0x383d9f, _0x1730c5),
            _0x168039 = _0x444693["get"](_0x5db4b2) || [];
          (_0x168039["push"](_0x383d9f["points"][_0x1730c5]),
            _0x444693["set"](_0x5db4b2, _0x168039));
        }
        for (const _0x44b3b8 of _0x444693["values"]()) {
          if (_0x44b3b8["length"] < 0x4) continue;
          const _0x320f35 = { x: Infinity, y: Infinity, z: Infinity },
            _0x414611 = { x: -Infinity, y: -Infinity, z: -Infinity };
          for (const _0x5cc0ea of _0x44b3b8)
            for (const _0xa193b9 of ["x", "y", "z"]) {
              ((_0x320f35[_0xa193b9] = Math["min"](
                _0x320f35[_0xa193b9],
                _0x5cc0ea[_0xa193b9],
              )),
                (_0x414611[_0xa193b9] = Math["max"](
                  _0x414611[_0xa193b9],
                  _0x5cc0ea[_0xa193b9],
                )));
            }
          const _0x458e72 = {
              x: (_0x320f35["x"] + _0x414611["x"]) / 0x2,
              y: (_0x320f35["y"] + _0x414611["y"]) / 0x2,
              z: (_0x320f35["z"] + _0x414611["z"]) / 0x2,
            },
            _0x36fdc5 = _0x44b3b8["map"]((_0x27885) =>
              Math["hypot"](
                _0x27885["x"] - _0x458e72["x"],
                _0x27885["y"] - _0x458e72["y"],
                _0x27885["z"] - _0x458e72["z"],
              ),
            ),
            _0x365c99 = Math["max"](..._0x36fdc5);
          if (
            _0x365c99 >= 0.7 &&
            _0x365c99 <= 1.03 &&
            _0x36fdc5["filter"]((_0x2e0087) => _0x2e0087 > _0x365c99 * 0.95)[
              "length"
            ] >= 0x4
          )
            _0x4a586b["push"]({
              center: _0x458e72,
              normal: _0x383d9f["normal"],
            });
        }
      }
      const _0x34e28f = {
        position: _0x1ccee2,
        version: _0x1ccee2["version"],
        normal: _0x3cf222,
        normalVersion: _0x3cf222?.["version"],
        index: _0x171af0,
        indexVersion: _0x171af0?.["version"],
        min: _0x2a8d13,
        max: _0x40e148,
        faces: _0x4a586b,
      };
      return (this["rigGeometryCache"]["set"](_0x1082c4, _0x34e28f), _0x34e28f);
    }
    ["getRigGeometry"](_0x2d3640, _0x5bae82, _0x1adee8 = ![]) {
      if (_0x5bae82?.["geometry"]) return _0x5bae82["geometry"];
      const _0x1c7021 =
          this["renderWorkCache"]?.["rigSlots"]?.["get"](_0x2d3640),
        _0x1daf2a = this["fromPage"](_0x5bae82);
      if (_0x1c7021 && _0x1daf2a) {
        const _0x14e7ab = this["batchBoneIndices"]["get"](
          _0x1c7021["skeleton"],
        );
        let _0x387c21 = _0x14e7ab["get"](_0x1daf2a);
        if (_0x387c21 == null) {
          _0x387c21 = _0x1c7021["skeleton"]["bones"]["indexOf"](_0x1daf2a);
          if (_0x387c21 >= 0x0) _0x14e7ab["set"](_0x1daf2a, _0x387c21);
        }
        return _0x1c7021["parts"]["get"](_0x387c21) || null;
      }
      const _0x4725bd = this["fromPage"](_0x2d3640?.["batchRef"]),
        _0x3b4fe1 = this["fromPage"](_0x4725bd?.["batch"]),
        _0x3c2afc = this["fromPage"](_0x3b4fe1?.["mesh"]),
        _0x3aaf3b = _0x3c2afc?.["geometry"],
        _0x384171 = _0x4725bd?.["slot"],
        _0x1a006b = _0x3b4fe1?.["capacity"];
      if (
        !_0x5bae82 ||
        !_0x3c2afc?.["isSkinnedMesh"] ||
        !Number["isInteger"](_0x1a006b) ||
        _0x1a006b < 0x1 ||
        _0x1a006b > 0x80 ||
        !Number["isInteger"](_0x384171) ||
        _0x384171 < 0x0 ||
        _0x384171 >= _0x1a006b ||
        _0x3b4fe1["players"]?.[_0x384171] !== _0x2d3640
      )
        return null;
      const _0x2bdba6 = _0x3aaf3b?.["attributes"],
        _0x83f0f8 = _0x2bdba6?.["position"],
        _0x4c64d4 = _0x2bdba6?.["normal"],
        _0x54a0b0 = _0x2bdba6?.["skinIndex"],
        _0x33b1d2 = _0x2bdba6?.["skinWeight"],
        _0x3517b3 = _0x3aaf3b?.["index"],
        _0x31aa44 = _0x83f0f8?.["count"] / _0x1a006b,
        _0x3fabbe = _0x3517b3?.["count"] / _0x1a006b;
      if (
        !Number["isInteger"](_0x31aa44) ||
        _0x31aa44 < 0x8 ||
        _0x31aa44 > 0x2ee0 ||
        !Number["isInteger"](_0x3fabbe) ||
        _0x3fabbe > 0xbb80 ||
        !_0x83f0f8["array"] ||
        _0x83f0f8["itemSize"] !== 0x3 ||
        !_0x54a0b0?.["array"] ||
        !_0x33b1d2?.["array"] ||
        _0x54a0b0["itemSize"] !== 0x4 ||
        _0x33b1d2["itemSize"] !== 0x4 ||
        !_0x3517b3?.["array"] ||
        [_0x83f0f8, _0x4c64d4, _0x54a0b0, _0x33b1d2, _0x3517b3]["some"](
          (_0x1d7f30) => _0x1d7f30?.["isInterleavedBufferAttribute"],
        )
      )
        return null;
      const _0x3afb14 = _0x3c2afc["skeleton"],
        _0x17feca = _0x3afb14?.["bones"],
        _0x282df7 = this["fromPage"](_0x5bae82);
      this["batchBoneIndices"] ||= new WeakMap();
      let _0x305d09 = _0x3afb14 && this["batchBoneIndices"]["get"](_0x3afb14);
      _0x3afb14 &&
        !_0x305d09 &&
        ((_0x305d09 = new WeakMap()),
        this["batchBoneIndices"]["set"](_0x3afb14, _0x305d09));
      let _0x1275f7 = _0x305d09?.["get"](_0x282df7);
      if (_0x1275f7 == null || _0x17feca?.[_0x1275f7] !== _0x282df7) {
        _0x1275f7 = _0x17feca?.["indexOf"](_0x282df7);
        if (_0x1275f7 >= 0x0) _0x305d09["set"](_0x282df7, _0x1275f7);
      }
      if (!(_0x1275f7 >= 0x0)) return null;
      this["batchRigGeometry"] ||= new WeakMap();
      const _0x442723 = [
        _0x83f0f8["version"],
        _0x4c64d4?.["version"],
        _0x54a0b0["version"],
        _0x33b1d2["version"],
        _0x3517b3["version"],
      ]["join"]("/");
      let _0x31fba1 = this["batchRigGeometry"]["get"](_0x2d3640);
      const _0x3cd4b7 =
          _0x31fba1 &&
          _0x31fba1["geometry"] === _0x3aaf3b &&
          _0x31fba1["slot"] === _0x384171 &&
          _0x31fba1["skeleton"] === _0x3afb14,
        _0xb0a4e3 = [_0x83f0f8, _0x4c64d4, _0x54a0b0, _0x33b1d2, _0x3517b3];
      if (
        _0x3cd4b7 &&
        _0x31fba1["snapshot"] &&
        _0x31fba1["stamp"] !== _0x442723
      ) {
        let _0x1b4d49 = ![];
        for (
          let _0x1771eb = 0x0;
          _0x1771eb < _0xb0a4e3["length"];
          _0x1771eb++
        ) {
          const _0xce4723 = _0xb0a4e3[_0x1771eb],
            _0x52bfee = _0x31fba1["snapshot"][_0x1771eb];
          if (!_0xce4723 && !_0x52bfee) continue;
          if (
            !_0xce4723 ||
            !_0x52bfee ||
            _0xce4723["itemSize"] !== _0x52bfee["size"]
          ) {
            _0x1b4d49 = !![];
            break;
          }
          if (
            _0x52bfee["ref"] === _0xce4723 &&
            _0x52bfee["version"] === _0xce4723["version"]
          )
            continue;
          const _0x56af4c =
            _0x384171 *
            (_0x1771eb === 0x4 ? _0x3fabbe : _0x31aa44 * _0xce4723["itemSize"]);
          if (
            _0x52bfee["values"]["length"] !==
            (_0x1771eb === 0x4 ? _0x3fabbe : _0x31aa44 * _0xce4723["itemSize"])
          ) {
            _0x1b4d49 = !![];
            break;
          }
          for (
            let _0x1ddab5 = 0x0;
            _0x1ddab5 < _0x52bfee["values"]["length"];
            _0x1ddab5++
          )
            if (
              _0x52bfee["values"][_0x1ddab5] !==
              _0xce4723["array"][_0x56af4c + _0x1ddab5]
            ) {
              _0x1b4d49 = !![];
              break;
            }
          if (_0x1b4d49) break;
        }
        if (!_0x1b4d49) {
          for (
            let _0x29de24 = 0x0;
            _0x29de24 < _0xb0a4e3["length"];
            _0x29de24++
          )
            _0xb0a4e3[_0x29de24] &&
              ((_0x31fba1["snapshot"][_0x29de24]["ref"] = _0xb0a4e3[_0x29de24]),
              (_0x31fba1["snapshot"][_0x29de24]["version"] =
                _0xb0a4e3[_0x29de24]["version"]));
          Object["assign"](_0x31fba1, {
            position: _0x83f0f8,
            normal: _0x4c64d4,
            skin: _0x54a0b0,
            weight: _0x33b1d2,
            index: _0x3517b3,
            stamp: _0x442723,
          });
        }
      }
      if (
        !_0x31fba1 ||
        _0x31fba1["position"] !== _0x83f0f8 ||
        _0x31fba1["normal"] !== _0x4c64d4 ||
        _0x31fba1["skin"] !== _0x54a0b0 ||
        _0x31fba1["weight"] !== _0x33b1d2 ||
        _0x31fba1["index"] !== _0x3517b3 ||
        _0x31fba1["slot"] !== _0x384171 ||
        _0x31fba1["stamp"] !== _0x442723 ||
        _0x31fba1["skeleton"] !== _0x3afb14 ||
        _0x31fba1["geometry"] !== _0x3aaf3b
      ) {
        if (
          _0x1adee8 &&
          Number["isFinite"](this["renderWorkCache"]?.["newRigSlots"])
        ) {
          if (this["renderWorkCache"]["newRigSlots"] <= 0x0)
            return (
              (this["renderWorkCache"]["deferredRigs"] ||= new Set()),
              this["renderWorkCache"]["deferredRigs"]["add"](_0x2d3640),
              null
            );
          this["renderWorkCache"]["newRigSlots"]--;
        }
        const _0x453809 = _0x3cd4b7 ? _0x31fba1["parts"] : null,
          _0x4e4110 = _0xb0a4e3["map"]((_0x360438, _0x17a175) => {
            if (!_0x360438) return null;
            const _0x1bf1b5 =
                _0x17a175 === 0x4
                  ? _0x3fabbe
                  : _0x31aa44 * _0x360438["itemSize"],
              _0x2063ab = _0x384171 * _0x1bf1b5;
            return {
              ref: _0x360438,
              version: _0x360438["version"],
              size: _0x360438["itemSize"],
              values: _0x360438["array"]["slice"](
                _0x2063ab,
                _0x2063ab + _0x1bf1b5,
              ),
            };
          });
        ((_0x31fba1 = {
          geometry: _0x3aaf3b,
          position: _0x83f0f8,
          normal: _0x4c64d4,
          skin: _0x54a0b0,
          weight: _0x33b1d2,
          index: _0x3517b3,
          slot: _0x384171,
          stamp: _0x442723,
          skeleton: _0x3c2afc["skeleton"],
          parts: new Map(),
          snapshot: _0x4e4110,
        }),
          this["batchRigGeometry"]["set"](_0x2d3640, _0x31fba1));
        const _0x4dcc56 = _0x384171 * _0x31aa44,
          _0xe219e6 = new Map(),
          _0x8b426f =
            _0x4c64d4?.["array"] &&
            _0x4c64d4["itemSize"] === 0x3 &&
            _0x4c64d4["count"] === _0x83f0f8["count"],
          _0x23c131 = (_0x50426e) =>
            Number["isInteger"](_0x50426e) &&
            _0x50426e >= _0x4dcc56 &&
            _0x50426e < _0x4dcc56 + _0x31aa44 &&
            _0x33b1d2["array"][_0x50426e * 0x4] === 0x1 &&
            _0x33b1d2["array"][_0x50426e * 0x4 + 0x1] === 0x0 &&
            _0x33b1d2["array"][_0x50426e * 0x4 + 0x2] === 0x0 &&
            _0x33b1d2["array"][_0x50426e * 0x4 + 0x3] === 0x0;
        for (
          let _0x30901c = _0x384171 * _0x3fabbe;
          _0x30901c < (_0x384171 + 0x1) * _0x3fabbe;
          _0x30901c += 0x3
        ) {
          const _0x14633a = _0x3517b3["array"][_0x30901c],
            _0x4c1d9f = _0x3517b3["array"][_0x30901c + 0x1],
            _0x171918 = _0x3517b3["array"][_0x30901c + 0x2],
            _0x1ee2d2 = _0x54a0b0["array"][_0x14633a * 0x4];
          if (
            _0x14633a === _0x4c1d9f ||
            _0x4c1d9f === _0x171918 ||
            _0x171918 === _0x14633a ||
            !_0x23c131(_0x14633a) ||
            !_0x23c131(_0x4c1d9f) ||
            !_0x23c131(_0x171918) ||
            _0x54a0b0["array"][_0x4c1d9f * 0x4] !== _0x1ee2d2 ||
            _0x54a0b0["array"][_0x171918 * 0x4] !== _0x1ee2d2
          )
            continue;
          let _0x5056a2 = _0xe219e6["get"](_0x1ee2d2);
          !_0x5056a2 &&
            ((_0x5056a2 = {
              remap: new Map(),
              positions: [],
              normals: [],
              triangles: [],
            }),
            _0xe219e6["set"](_0x1ee2d2, _0x5056a2));
          for (const _0x120d36 of [_0x14633a, _0x4c1d9f, _0x171918]) {
            if (!_0x5056a2["remap"]["has"](_0x120d36)) {
              _0x5056a2["remap"]["set"](_0x120d36, _0x5056a2["remap"]["size"]);
              for (let _0x4e2169 = 0x0; _0x4e2169 < 0x3; _0x4e2169++) {
                _0x5056a2["positions"]["push"](
                  _0x83f0f8["array"][_0x120d36 * 0x3 + _0x4e2169],
                );
                if (_0x8b426f)
                  _0x5056a2["normals"]["push"](
                    _0x4c64d4["array"][_0x120d36 * 0x3 + _0x4e2169],
                  );
              }
            }
            _0x5056a2["triangles"]["push"](
              _0x5056a2["remap"]["get"](_0x120d36),
            );
          }
        }
        const _0xeb0382 = (_0x5b5fdc, _0x2b4904) => ({
            array: _0x5b5fdc,
            itemSize: _0x2b4904,
            count: _0x5b5fdc["length"] / _0x2b4904,
            version: 0x0,
          }),
          _0x99df1 = (_0x15b583, _0x5f26d1) => {
            if (!_0x15b583 || _0x15b583["length"] !== _0x5f26d1["length"])
              return ![];
            for (
              let _0x6cbc2c = 0x0;
              _0x6cbc2c < _0x5f26d1["length"];
              _0x6cbc2c++
            )
              if (_0x15b583[_0x6cbc2c] !== _0x5f26d1[_0x6cbc2c]) return ![];
            return !![];
          };
        for (const [_0x532364, _0x40e6a2] of _0xe219e6) {
          const _0x38a564 = _0x453809?.["get"](_0x532364),
            _0x1465c7 =
              _0x38a564 &&
              _0x99df1(
                _0x38a564["attributes"]["position"]["array"],
                _0x40e6a2["positions"],
              ) &&
              _0x99df1(_0x38a564["index"]["array"], _0x40e6a2["triangles"]) &&
              (!_0x8b426f
                ? !_0x38a564["attributes"]["normal"]
                : _0x99df1(
                    _0x38a564["attributes"]["normal"]?.["array"],
                    _0x40e6a2["normals"],
                  ));
          _0x31fba1["parts"]["set"](
            _0x532364,
            _0x1465c7
              ? _0x38a564
              : {
                  attributes: {
                    position: _0xeb0382(_0x40e6a2["positions"], 0x3),
                    ...(_0x8b426f
                      ? { normal: _0xeb0382(_0x40e6a2["normals"], 0x3) }
                      : {}),
                  },
                  index: _0xeb0382(_0x40e6a2["triangles"], 0x1),
                },
          );
        }
      }
      return (
        this["renderWorkCache"] &&
          ((this["renderWorkCache"]["rigSlots"] ||= new Map()),
          this["renderWorkCache"]["rigSlots"]["set"](_0x2d3640, _0x31fba1)),
        _0x31fba1["parts"]["get"](_0x1275f7) || null
      );
    }
    ["limbSegments"](
      _0x3c5beb,
      _0x20cfcb,
      _0x4d549e = 0x2,
      _0x270733 = _0x3c5beb?.["geometry"],
    ) {
      const _0x3460a5 = this["rigGeometry"](_0x270733);
      if (!_0x3460a5 || _0x3460a5["faces"]["length"] > 0x20) return [];
      this["limbCenterlines"] ||= new WeakMap();
      const _0x2f2396 = _0x3c5beb["scale"],
        _0x3da0be = [
          _0x2f2396?.["x"] ?? 0x1,
          _0x2f2396?.["y"] ?? 0x1,
          _0x2f2396?.["z"] ?? 0x1,
          _0x20cfcb,
          _0x4d549e,
        ]["join"]("/"),
        _0x54695f = this["limbCenterlines"]["get"](_0x3c5beb);
      if (_0x54695f?.["data"] === _0x3460a5 && _0x54695f["stamp"] === _0x3da0be)
        return _0x54695f["pairs"]
          [
            "map"
          ]((_0x30174c) => _0x30174c["map"]((_0x3d0ce1) => this["modelPoint"](_0x3c5beb, _0x3d0ce1)))
          ["filter"]((_0x8cdf92) => _0x8cdf92["every"](Boolean));
      const _0x2a0056 = [];
      for (
        let _0x2675f9 = 0x0;
        _0x2675f9 < _0x3460a5["faces"]["length"];
        _0x2675f9++
      )
        for (
          let _0x6ae44b = _0x2675f9 + 0x1;
          _0x6ae44b < _0x3460a5["faces"]["length"];
          _0x6ae44b++
        ) {
          const _0x28ee1b = _0x3460a5["faces"][_0x2675f9],
            _0x2e6d48 = _0x3460a5["faces"][_0x6ae44b],
            _0x3bc604 = _0x28ee1b["normal"],
            _0x5d9e4e = _0x2e6d48["center"]["x"] - _0x28ee1b["center"]["x"],
            _0x366829 = _0x2e6d48["center"]["y"] - _0x28ee1b["center"]["y"],
            _0x9cd370 = _0x2e6d48["center"]["z"] - _0x28ee1b["center"]["z"],
            _0x97dcb1 = Math["hypot"](_0x5d9e4e, _0x366829, _0x9cd370),
            _0x55ec83 = Math["hypot"](
              _0x5d9e4e * (_0x3c5beb["scale"]?.["x"] ?? 0x1),
              _0x366829 * (_0x3c5beb["scale"]?.["y"] ?? 0x1),
              _0x9cd370 * (_0x3c5beb["scale"]?.["z"] ?? 0x1),
            );
          if (
            Math["abs"](_0x55ec83 - _0x20cfcb) > 0.025 ||
            Math["abs"](
              _0x3bc604["x"] * _0x2e6d48["normal"]["x"] +
                _0x3bc604["y"] * _0x2e6d48["normal"]["y"] +
                _0x3bc604["z"] * _0x2e6d48["normal"]["z"] +
                0x1,
            ) > 0.002 ||
            Math["abs"](
              Math["abs"](
                (_0x5d9e4e * _0x3bc604["x"] +
                  _0x366829 * _0x3bc604["y"] +
                  _0x9cd370 * _0x3bc604["z"]) /
                  _0x97dcb1,
              ) - 0x1,
            ) > 0.002
          )
            continue;
          if (
            !_0x2a0056["some"](
              ([_0x21f658, _0x132637]) =>
                Math["hypot"](
                  _0x21f658["x"] - _0x28ee1b["center"]["x"],
                  _0x21f658["y"] - _0x28ee1b["center"]["y"],
                  _0x21f658["z"] - _0x28ee1b["center"]["z"],
                ) < 0.01 &&
                Math["hypot"](
                  _0x132637["x"] - _0x2e6d48["center"]["x"],
                  _0x132637["y"] - _0x2e6d48["center"]["y"],
                  _0x132637["z"] - _0x2e6d48["center"]["z"],
                ) < 0.01,
            )
          )
            _0x2a0056["push"]([_0x28ee1b["center"], _0x2e6d48["center"]]);
        }
      if (!_0x2a0056["length"] || _0x2a0056["length"] > _0x4d549e)
        return (
          this["limbCenterlines"]["set"](_0x3c5beb, {
            data: _0x3460a5,
            stamp: _0x3da0be,
            pairs: [],
          }),
          []
        );
      return (
        this["limbCenterlines"]["set"](_0x3c5beb, {
          data: _0x3460a5,
          stamp: _0x3da0be,
          pairs: _0x2a0056,
        }),
        _0x2a0056["map"]((_0x11a401) =>
          _0x11a401["map"]((_0x1bbcb3) =>
            this["modelPoint"](_0x3c5beb, _0x1bbcb3),
          ),
        )["filter"]((_0x41af3e) => _0x41af3e["every"](Boolean))
      );
    }
    ["getSkeletonSegments"](_0xf5298a, _0x80acf3 = ![]) {
      const _0x5f369a =
        _0xf5298a["objInstances"] || (_0x80acf3 && _0xf5298a["mesh"]);
      if (!_0x5f369a || _0x5f369a["visible"] === ![]) return [];
      const _0x59c25 = [],
        _0x535927 = (_0x5af672, _0x2cfea1) => {
          if (
            _0x5af672 &&
            _0x2cfea1 &&
            Math["hypot"](
              _0x5af672["x"] - _0x2cfea1["x"],
              _0x5af672["y"] - _0x2cfea1["y"],
              _0x5af672["z"] - _0x2cfea1["z"],
            ) > 0.001
          )
            _0x59c25["push"]([_0x5af672, _0x2cfea1]);
        },
        _0x915d48 =
          !_0x80acf3 &&
          _0xf5298a["lowerBody"] &&
          Array["isArray"](_0xf5298a["legMeshes"]) &&
          this["isModelVisible"](_0xf5298a["lowerBody"], _0x5f369a);
      if (_0x915d48) {
        let _0x1b8c4a;
        for (const _0x2f4d41 of _0xf5298a["lowerBody"]["children"] || [])
          if (
            _0x2f4d41["name"] === "body" &&
            this["isModelVisible"](_0x2f4d41, _0x5f369a)
          ) {
            _0x1b8c4a = _0x2f4d41;
            break;
          }
        const _0x54bca7 = this["rigBounds"](
          this["getRigGeometry"](_0xf5298a, _0x1b8c4a, !![]),
        );
        let _0x2a0941, _0x5702af;
        if (_0x54bca7) {
          const _0x3f1cf7 =
              (_0x54bca7["min"]["x"] + _0x54bca7["max"]["x"]) / 0x2,
            _0x508010 = (_0x54bca7["min"]["z"] + _0x54bca7["max"]["z"]) / 0x2;
          ((_0x2a0941 = this["modelPoint"](_0x1b8c4a, {
            x: _0x3f1cf7,
            y: _0x54bca7["min"]["y"],
            z: _0x508010,
          })),
            (_0x5702af = this["modelPoint"](_0x1b8c4a, {
              x: _0x3f1cf7,
              y: _0x54bca7["max"]["y"],
              z: _0x508010,
            })),
            _0x535927(_0x2a0941, _0x5702af));
        }
        const _0x30ffb5 = _0xf5298a["headObj"],
          _0x90dce9 =
            this["isModelVisible"](_0x30ffb5, _0x5f369a) &&
            this["rigBounds"](
              this["getRigGeometry"](_0xf5298a, _0x30ffb5, !![]),
            );
        if (_0x90dce9)
          _0x535927(
            _0x5702af,
            this["modelPoint"](_0x30ffb5, {
              x: (_0x90dce9["min"]["x"] + _0x90dce9["max"]["x"]) / 0x2,
              y: (_0x90dce9["min"]["y"] + _0x90dce9["max"]["y"]) / 0x2,
              z: (_0x90dce9["min"]["z"] + _0x90dce9["max"]["z"]) / 0x2,
            }),
          );
        for (
          let _0x4b6633 = 0x0;
          _0x4b6633 < Math["min"](_0xf5298a["legMeshes"]["length"], 0x4);
          _0x4b6633++
        ) {
          const _0x19fa45 = _0xf5298a["legMeshes"][_0x4b6633];
          if (!this["isModelVisible"](_0x19fa45, _0x5f369a)) continue;
          const _0x3a96c7 = this["limbSegments"](
            _0x19fa45,
            _0x4b6633 < 0x2 ? 4.2 : 2.1,
            0x2,
            this["getRigGeometry"](_0xf5298a, _0x19fa45, !![]),
          );
          for (const [_0x461dc1, _0x5e8d88] of _0x3a96c7)
            _0x535927(_0x461dc1, _0x5e8d88);
          if (_0x3a96c7["length"])
            _0x535927(_0x2a0941, this["modelPoint"](_0x19fa45));
        }
        const _0x568529 =
            _0xf5298a["weaponMeshes"]?.[_0xf5298a["loadoutIndex"]],
          _0x2b452e = new Set(
            (_0xf5298a["armMeshes"] || [])["slice"](0x0, 0x20),
          ),
          _0x165448 = _0xf5298a["mergedArmMeshes"]?.[_0xf5298a["loadoutIndex"]];
        if (_0x165448) _0x2b452e["add"](_0x165448);
        for (const _0x302940 of _0x2b452e) {
          if (
            !_0x568529 ||
            !this["isModelVisible"](_0x302940, _0x568529) ||
            !this["isModelVisible"](_0x568529, _0x5f369a)
          )
            continue;
          for (const [_0x4e4b5b, _0x402344] of this["limbSegments"](
            _0x302940,
            2.7,
            _0x302940 === _0x165448 ? 0x4 : 0x2,
            this["getRigGeometry"](_0xf5298a, _0x302940, !![]),
          ))
            _0x535927(_0x4e4b5b, _0x402344);
        }
        if (_0x59c25["length"]) return _0x59c25;
      }
      const _0x19aacc = new Set();
      for (const _0x13a988 of _0xf5298a["weaponMeshes"] || [])
        if (_0x13a988) _0x19aacc["add"](_0x13a988);
      for (const _0x2399c4 of [
        _0xf5298a["hatMesh"],
        _0xf5298a["backMesh"],
        _0xf5298a["waistMesh"],
        _0xf5298a["faceMesh"],
      ])
        if (_0x2399c4) _0x19aacc["add"](_0x2399c4);
      const _0x192cb9 = [_0x5f369a],
        _0x25c7b7 = new Set(),
        _0x493195 = new Set();
      while (_0x192cb9["length"] && _0x25c7b7["size"] < 0x400) {
        const _0x3026b7 = _0x192cb9["pop"]();
        if (
          !_0x3026b7 ||
          _0x25c7b7["has"](_0x3026b7) ||
          _0x19aacc["has"](_0x3026b7) ||
          _0x3026b7["visible"] === ![]
        )
          continue;
        _0x25c7b7["add"](_0x3026b7);
        if (
          _0x3026b7["isSkinnedMesh"] &&
          Array["isArray"](_0x3026b7["skeleton"]?.["bones"])
        ) {
          for (const _0x31745d of _0x3026b7["skeleton"]["bones"]["slice"](
            0x0,
            0x100,
          ))
            if (_0x31745d?.["isBone"]) _0x493195["add"](_0x31745d);
        }
        for (const _0x423f60 of (_0x3026b7["children"] || [])["slice"](
          0x0,
          0x100,
        ))
          _0x192cb9["push"](_0x423f60);
      }
      for (const _0x19969c of _0x493195)
        if (
          _0x19969c["parent"]?.["isBone"] &&
          _0x493195["has"](_0x19969c["parent"])
        )
          _0x535927(
            this["modelPoint"](_0x19969c["parent"]),
            this["modelPoint"](_0x19969c),
          );
      return _0x59c25["slice"](0x0, 0x100);
    }
    ["projectBoneSegment"](
      _0x162f2f,
      _0x4230be = this["renderer"]?.["camera"],
    ) {
      const _0x142f9b = _0x4230be?.["matrixWorldInverse"]?.["elements"],
        _0xb887ee = _0x4230be?.["projectionMatrix"]?.["elements"],
        _0x215add = this["overlay"]?.["canvas"];
      if (
        _0x142f9b?.["length"] !== 0x10 ||
        _0xb887ee?.["length"] !== 0x10 ||
        !_0x215add?.["width"] ||
        !_0x215add["height"]
      )
        return null;
      const _0x31b383 = (_0x8b7a35, _0x37f419) =>
          [0x0, 0x1, 0x2, 0x3]["map"](
            (_0x5df487) =>
              _0x8b7a35[_0x5df487] * _0x37f419[0x0] +
              _0x8b7a35[0x4 + _0x5df487] * _0x37f419[0x1] +
              _0x8b7a35[0x8 + _0x5df487] * _0x37f419[0x2] +
              _0x8b7a35[0xc + _0x5df487] * _0x37f419[0x3],
          ),
        _0x2d0f58 = _0x162f2f["map"]((_0xb455d0) =>
          _0x31b383(
            _0xb887ee,
            _0x31b383(_0x142f9b, [
              _0xb455d0["x"],
              _0xb455d0["y"],
              _0xb455d0["z"],
              0x1,
            ]),
          ),
        );
      if (!_0x2d0f58["flat"]()["every"](Number["isFinite"])) return null;
      let _0x3f1cd1 = 0x0,
        _0x2ad13d = 0x1;
      for (const [_0xacea83, _0x1837c6] of [
        [0x0, 0x1],
        [0x0, -0x1],
        [0x1, 0x1],
        [0x1, -0x1],
        [0x2, 0x1],
        [0x2, -0x1],
      ]) {
        const _0x25bc06 =
            _0x2d0f58[0x0][0x3] + _0x1837c6 * _0x2d0f58[0x0][_0xacea83],
          _0x468aac =
            _0x2d0f58[0x1][0x3] + _0x1837c6 * _0x2d0f58[0x1][_0xacea83];
        if (_0x25bc06 < 0x0 && _0x468aac < 0x0) return null;
        if (_0x25bc06 < 0x0 !== _0x468aac < 0x0) {
          const _0x3d60ac = _0x25bc06 / (_0x25bc06 - _0x468aac);
          if (_0x25bc06 < 0x0) _0x3f1cd1 = Math["max"](_0x3f1cd1, _0x3d60ac);
          else _0x2ad13d = Math["min"](_0x2ad13d, _0x3d60ac);
        }
      }
      if (_0x3f1cd1 > _0x2ad13d) return null;
      const _0x494cb9 = [_0x3f1cd1, _0x2ad13d]["map"]((_0x38f842) => {
        const _0x51e403 = _0x2d0f58[0x0]["map"](
          (_0x384d98, _0x391e99) =>
            _0x384d98 + (_0x2d0f58[0x1][_0x391e99] - _0x384d98) * _0x38f842,
        );
        return _0x51e403[0x3] > 1e-7
          ? {
              x:
                ((_0x51e403[0x0] / _0x51e403[0x3] + 0x1) * _0x215add["width"]) /
                0x2,
              y:
                ((0x1 - _0x51e403[0x1] / _0x51e403[0x3]) *
                  _0x215add["height"]) /
                0x2,
            }
          : null;
      });
      return _0x494cb9["every"](Boolean) ? _0x494cb9 : null;
    }
    ["drawSkeletons"]() {
      if (!this["settings"]["espBones"]) return;
      const _0x2ff69c = [];
      for (const _0xb86db3 of this["game"]["players"]["list"])
        _0x2ff69c["push"]([_0xb86db3, ![]]);
      if (this["settings"]["espBotCheck"]) {
        for (const _0x2d7824 of this["game"]["AI"]?.["ais"] || [])
          _0x2ff69c["push"]([_0x2d7824, !![]]);
      }
      let _0x258de6 = 0x0,
        _0x27df12 = 0x0,
        _0x505869 = 0x0,
        _0x5b8f41 = 0x0,
        _0x1ff489 = "";
      const _0x45a96d =
        (this["boneScanCursor"] || 0x0) % Math["max"](0x1, _0x2ff69c["length"]);
      this["boneScanCursor"] =
        (_0x45a96d + 0x2) % Math["max"](0x1, _0x2ff69c["length"]);
      for (let _0x40007f = 0x0; _0x40007f < _0x2ff69c["length"]; _0x40007f++) {
        const [_0x300203, _0x4583e5] =
          _0x2ff69c[(_0x45a96d + _0x40007f) % _0x2ff69c["length"]];
        if (
          !_0x300203 ||
          _0x300203["isYou"] ||
          (!_0x4583e5 && !_0x300203["active"]) ||
          _0x300203["health"] <= 0x0 ||
          (this["settings"]["espTeamCheck"] && this["isTeam"](_0x300203))
        )
          continue;
        try {
          const _0x482d79 = this["getSkeletonSegments"](_0x300203, _0x4583e5);
          if (!_0x482d79["length"]) {
            if (this["renderWorkCache"]?.["deferredRigs"]?.["has"](_0x300203))
              _0x5b8f41++;
            else _0x505869++;
            continue;
          }
          _0x258de6++;
          const _0x44827f = _0x482d79["map"]((_0x4f72fc) =>
            this["projectBoneSegment"](_0x4f72fc),
          )["filter"](Boolean);
          if (!_0x44827f["length"]) continue;
          const _0x22f89e = this["espPalette"](_0x4583e5),
            _0x202bbb = this["ctx"];
          _0x202bbb["save"]();
          try {
            ((_0x202bbb["lineWidth"] = 1.8),
              (_0x202bbb["lineCap"] = "round"),
              (_0x202bbb["shadowColor"] = _0x22f89e["primary"]),
              (_0x202bbb["shadowBlur"] = 0x4));
            let _0x10bdc4 = Infinity,
              _0x1ffaee = -Infinity,
              _0x47cba8 = Infinity,
              _0x794848 = -Infinity;
            for (const _0x542497 of _0x44827f)
              for (const _0x272259 of _0x542497) {
                ((_0x10bdc4 = Math["min"](_0x10bdc4, _0x272259["y"])),
                  (_0x1ffaee = Math["max"](_0x1ffaee, _0x272259["y"])),
                  (_0x47cba8 = Math["min"](_0x47cba8, _0x272259["x"])),
                  (_0x794848 = Math["max"](_0x794848, _0x272259["x"])));
              }
            const _0x5657eb = _0x202bbb["createLinearGradient"](
              (_0x47cba8 + _0x794848) / 0x2,
              _0x10bdc4,
              (_0x47cba8 + _0x794848) / 0x2,
              Math["max"](_0x10bdc4 + 0x1, _0x1ffaee),
            );
            (_0x5657eb["addColorStop"](0x0, _0x22f89e["primary"]),
              _0x5657eb["addColorStop"](0x1, _0x22f89e["secondary"]),
              (_0x202bbb["strokeStyle"] = _0x5657eb),
              _0x202bbb["beginPath"]());
            for (const [_0x1fa288, _0x20783f] of _0x44827f) {
              (_0x202bbb["moveTo"](_0x1fa288["x"], _0x1fa288["y"]),
                _0x202bbb["lineTo"](_0x20783f["x"], _0x20783f["y"]),
                _0x27df12++);
            }
            _0x202bbb["stroke"]();
          } finally {
            _0x202bbb["restore"]();
          }
        } catch (_0x274746) {
          (_0x505869++,
            (_0x1ff489 ||= String(_0x274746?.["message"] || _0x274746)["slice"](
              0x0,
              0xa0,
            )));
        }
      }
      this["bonesStatus"] =
        _0x258de6 +
        "\x20rigs\x20/\x20" +
        _0x27df12 +
        "\x20visible\x20segments" +
        (_0x5b8f41 ? "\x20/\x20" + _0x5b8f41 + "\x20warming" : "") +
        (_0x505869 ? "\x20/\x20" + _0x505869 + "\x20unsupported" : "") +
        (_0x1ff489 ? "\x20/\x20error:\x20" + _0x1ff489 : "");
    }
    ["getWorldMeshes"]() {
      if (this["renderWorkCache"]?.["worldMeshes"])
        return this["renderWorkCache"]["worldMeshes"];
      const _0x1aac08 = this["fromPage"](this["renderer"]?.["scene"]),
        _0x3bab2e = new Set(),
        _0x3e8d3f = new Set();
      for (const _0x343977 of this["game"]?.["players"]?.["list"] || [])
        if (_0x343977?.["objInstances"])
          _0x3e8d3f["add"](_0x343977["objInstances"]);
      if (this["me"]?.["objInstances"])
        _0x3e8d3f["add"](this["me"]["objInstances"]);
      for (const _0x57807b of this["game"]?.["AI"]?.["ais"] || [])
        if (_0x57807b?.["mesh"]) _0x3e8d3f["add"](_0x57807b["mesh"]);
      for (const _0x2daa7b of this["game"]?.["map"]?.["manager"]?.["objects"] ||
        [])
        if (_0x2daa7b?.["meshRef"]?.["isObject3D"])
          _0x3bab2e["add"](_0x2daa7b["meshRef"]);
      const _0x48c25d = _0x1aac08 ? [{ node: _0x1aac08, map: ![] }] : [],
        _0x2c353c = new Set(),
        _0x24632b = new Set();
      while (_0x48c25d["length"] && _0x2c353c["size"] < 0x4e20) {
        const { node: _0x176cde, map: _0x12bbe2 } = _0x48c25d["pop"]();
        if (
          !_0x176cde ||
          _0x2c353c["has"](_0x176cde) ||
          _0x3e8d3f["has"](_0x176cde) ||
          this["chamsOwned"]?.["has"](_0x176cde)
        )
          continue;
        _0x2c353c["add"](_0x176cde);
        const _0x1c1330 =
          _0x12bbe2 ||
          _0x3bab2e["has"](_0x176cde) ||
          (typeof _0x176cde["groupSrc"] === "string" &&
            _0x176cde["indx"] != null) ||
          (_0x176cde["name"] === "ShaderMesh" &&
            _0x176cde["geometry"]?.["attributes"]?.["iColor"]);
        if (
          _0x1c1330 &&
          _0x176cde["isMesh"] &&
          _0x176cde["geometry"] &&
          _0x176cde["material"]
        )
          _0x24632b["add"](_0x176cde);
        for (const _0x32c60e of _0x176cde["children"] || [])
          _0x48c25d["push"]({ node: _0x32c60e, map: _0x1c1330 });
      }
      if (this["renderWorkCache"])
        this["renderWorkCache"]["worldMeshes"] = _0x24632b;
      return _0x24632b;
    }
    ["restoreWorldModulation"]() {
      const _0x1598ed = !!(
        this["worldMaterials"]?.["size"] ||
        this["worldInstanceColors"]?.["size"]
      );
      for (const [_0x53b06f, _0x532aca] of this["worldInstanceColors"] || []) {
        if (_0x53b06f["attributes"]["iColor"] === _0x532aca["applied"])
          _0x53b06f["setAttribute"]("iColor", _0x532aca["original"]);
      }
      this["worldInstanceColors"]?.["clear"]();
      const _0x1ec172 = new Set();
      for (const [_0x3dae62, _0x329cd7] of this["worldMaterials"] || []) {
        this["detachFogOutput"](_0x3dae62);
        try {
          if (_0x3dae62["material"] === _0x329cd7["applied"])
            _0x3dae62["material"] = _0x329cd7["original"];
        } catch (_0x1f9fe0) {}
        for (const _0x1d7afe of _0x329cd7["clones"])
          _0x1ec172["add"](_0x1d7afe);
      }
      for (const _0x202187 of this["worldMaterialCopies"]?.["values"]() || [])
        _0x1ec172["add"](_0x202187["copy"]);
      for (const _0x1fde28 of _0x1ec172)
        try {
          _0x1fde28["dispose"]?.();
        } catch (_0x55c37e) {}
      (this["worldMaterials"]?.["clear"](),
        this["worldMaterialCopies"]?.["clear"](),
        (this["worldLastScan"] = null));
      if (_0x1598ed && this["customFogOverride"])
        this["customFogOverride"]["lastScan"] = null;
    }
    ["updateWorldModulation"]() {
      if (
        !this["settings"]["worldModulationEnabled"] ||
        this["settings"]["worldColorOverride"] === ![] ||
        !this["isGameplayAllowed"]()
      ) {
        (this["restoreWorldModulation"](),
          (this["worldStatus"] =
            this["settings"]["worldColorOverride"] === ![]
              ? "native\x20map\x20colors\x20·\x20override\x20off"
              : "off"));
        return;
      }
      const _0x3b6a9a = this["fromPage"](this["renderer"]?.["scene"]);
      if (!_0x3b6a9a?.["isObject3D"]) {
        (this["restoreWorldModulation"](),
          (this["worldStatus"] = "map\x20scene\x20unavailable"));
        return;
      }
      const _0x4abbba = this["normalizeColor"](
          this["settings"]["worldColor"],
          "#b8c9df",
        ),
        _0x4c7217 = Number["isFinite"](
          Number(this["settings"]["worldTintStrength"]),
        )
          ? Math["max"](
              0x0,
              Math["min"](0x64, Number(this["settings"]["worldTintStrength"])),
            ) / 0x64
          : 0.2,
        _0x468c08 = _0x4abbba + "/" + _0x4c7217,
        _0x33cfae = Date["now"]();
      this["worldScene"] !== _0x3b6a9a &&
        (this["restoreWorldModulation"](), (this["worldScene"] = _0x3b6a9a));
      if (
        this["worldLastScan"] != null &&
        _0x33cfae - this["worldLastScan"] < 0x1f4 &&
        this["worldSignature"] === _0x468c08
      )
        return;
      ((this["worldLastScan"] = _0x33cfae),
        (this["worldSignature"] = _0x468c08),
        (this["worldMaterials"] ||= new Map()),
        (this["worldMaterialCopies"] ||= new Map()),
        (this["worldInstanceColors"] ||= new Map()));
      let _0x410814;
      try {
        _0x410814 = this["getWorldMeshes"]();
      } catch (_0x34825a) {
        (this["restoreWorldModulation"](),
          (this["worldLastScan"] = _0x33cfae),
          (this["worldStatus"] =
            "native\x20map\x20retained:\x20" +
            String(_0x34825a?.["message"] || _0x34825a)["slice"](0x0, 0x78)));
        return;
      }
      for (const [_0x44807f, _0x4bf74b] of this["worldMaterials"])
        if (
          !_0x410814["has"](_0x44807f) ||
          this["worldBaseMaterial"](_0x44807f) !== _0x4bf74b["applied"] ||
          _0x4bf74b["pending"]
        ) {
          this["detachFogOutput"](_0x44807f);
          try {
            if (_0x44807f["material"] === _0x4bf74b["applied"])
              _0x44807f["material"] = _0x4bf74b["original"];
          } catch (_0x1e1117) {}
          this["worldMaterials"]["delete"](_0x44807f);
        }
      if (!this["three"]?.["Color"]) {
        this["worldStatus"] = "color\x20API\x20unavailable";
        return;
      }
      const _0x1b838a = new this["three"]["Color"](_0x4abbba),
        _0x1afdc4 = this["fromPage"](this["three"]["TSL"]),
        _0x4dbb25 = new Map();
      for (const _0x160c2f of _0x410814) {
        const _0x2fb3e6 =
          this["worldMaterials"]["get"](_0x160c2f)?.["original"] ||
          this["worldBaseMaterial"](_0x160c2f);
        for (const _0x3cb97c of Array["isArray"](_0x2fb3e6)
          ? _0x2fb3e6
          : [_0x2fb3e6])
          _0x4dbb25["set"](
            _0x3cb97c,
            (_0x4dbb25["get"](_0x3cb97c) ?? !![]) &&
              !!_0x160c2f["geometry"]?.["attributes"]?.["color"],
          );
      }
      const _0x5d8762 = new Set();
      for (const _0x38fc41 of _0x410814) {
        const _0x51bc70 = _0x38fc41["geometry"],
          _0x2ba4c8 = _0x51bc70?.["attributes"]?.["iColor"];
        if (
          !_0x2ba4c8?.["isInstancedBufferAttribute"] ||
          _0x2ba4c8["itemSize"] !== 0x3 ||
          !_0x2ba4c8["array"] ||
          _0x2ba4c8["count"] > 0x186a0
        )
          continue;
        _0x5d8762["add"](_0x51bc70);
        let _0x3065e4 = this["worldInstanceColors"]["get"](_0x51bc70);
        if (_0x3065e4 && _0x2ba4c8 !== _0x3065e4["applied"])
          this["worldInstanceColors"]["delete"](_0x51bc70);
        _0x3065e4 = this["worldInstanceColors"]["get"](_0x51bc70);
        !_0x3065e4 &&
          ((_0x3065e4 = { original: _0x2ba4c8, applied: _0x2ba4c8["clone"]() }),
          _0x51bc70["setAttribute"]("iColor", _0x3065e4["applied"]),
          this["worldInstanceColors"]["set"](_0x51bc70, _0x3065e4));
        for (
          let _0x2188ac = 0x0;
          _0x2188ac < _0x3065e4["original"]["count"];
          _0x2188ac++
        ) {
          _0x3065e4["applied"]["setXYZ"](
            _0x2188ac,
            _0x3065e4["original"]["getX"](_0x2188ac) * (0x1 - _0x4c7217) +
              _0x1b838a["r"] * _0x4c7217,
            _0x3065e4["original"]["getY"](_0x2188ac) * (0x1 - _0x4c7217) +
              _0x1b838a["g"] * _0x4c7217,
            _0x3065e4["original"]["getZ"](_0x2188ac) * (0x1 - _0x4c7217) +
              _0x1b838a["b"] * _0x4c7217,
          );
        }
        _0x3065e4["applied"]["needsUpdate"] = !![];
      }
      for (const [_0x2d2426, _0x43e7f2] of this["worldInstanceColors"])
        if (!_0x5d8762["has"](_0x2d2426)) {
          if (_0x2d2426["attributes"]["iColor"] === _0x43e7f2["applied"])
            _0x2d2426["setAttribute"]("iColor", _0x43e7f2["original"]);
          this["worldInstanceColors"]["delete"](_0x2d2426);
        }
      let _0x21f8a1 = 0x0,
        _0x3dca1b = 0x0,
        _0x28bfd6 = 0x0,
        _0xf33f80 = "";
      for (const _0x1bbcc8 of _0x410814) {
        if (_0x5d8762["has"](_0x1bbcc8["geometry"])) continue;
        try {
          let _0x56a96a = this["worldMaterials"]["get"](_0x1bbcc8);
          if (!_0x56a96a) {
            if (
              !Object["getOwnPropertyDescriptor"](_0x1bbcc8, "material")?.[
                "writable"
              ]
            )
              continue;
            this["detachFogOutput"](_0x1bbcc8);
            const _0x24158e = _0x1bbcc8["material"],
              _0x260ed1 = Array["isArray"](_0x24158e),
              _0x65a913 = _0x260ed1 ? _0x24158e : [_0x24158e],
              _0x4d3242 = _0x260ed1
                ? new (this["pageWindow"]["Array"] || Array)()
                : [],
              _0x32a5b6 = [],
              _0x1fec7e = [],
              _0x58314f = _0x28bfd6;
            for (const _0x5a1837 of _0x65a913) {
              const _0x2e2d8d = this["fromPage"](_0x5a1837);
              let _0x5825ee = _0x2e2d8d;
              if (
                _0x2e2d8d?.["color"]?.["isColor"] &&
                !_0x2e2d8d["isShaderMaterial"] &&
                typeof _0x2e2d8d["clone"] === "function"
              ) {
                let _0x4c5ad6 = this["worldMaterialCopies"]["get"](_0x2e2d8d);
                if (!_0x4c5ad6 && _0x21f8a1 >= 0x10) {
                  (_0x28bfd6++, _0x4d3242["push"](_0x2e2d8d));
                  continue;
                }
                if (!_0x4c5ad6) {
                  let _0x41b7b4;
                  try {
                    _0x41b7b4 = _0x2e2d8d["clone"]();
                    if (
                      !_0x41b7b4?.["isMaterial"] ||
                      _0x41b7b4 === _0x2e2d8d ||
                      _0x41b7b4["color"] === _0x2e2d8d["color"]
                    )
                      throw new Error("unsafe\x20native\x20material\x20clone");
                    for (const _0x48117b of [
                      "onBeforeCompile",
                      "onBeforeRender",
                      "customProgramCacheKey",
                    ])
                      if (typeof _0x2e2d8d[_0x48117b] === "function")
                        _0x41b7b4[_0x48117b] = _0x2e2d8d[_0x48117b];
                    if (this["wireframeMaterials"]?.["has"](_0x2e2d8d))
                      _0x41b7b4["wireframe"] =
                        this["wireframeMaterials"]["get"](_0x2e2d8d);
                    ((_0x4c5ad6 = { copy: _0x41b7b4 }),
                      this["worldMaterialCopies"]["set"](_0x2e2d8d, _0x4c5ad6),
                      _0x21f8a1++);
                  } catch (_0x5334d6) {
                    if (_0x41b7b4 && _0x41b7b4 !== _0x2e2d8d)
                      try {
                        _0x41b7b4["dispose"]?.();
                      } catch (_0xcc89b0) {}
                    (_0x3dca1b++,
                      (_0xf33f80 ||= String(
                        _0x5334d6?.["message"] || _0x5334d6,
                      )["slice"](0x0, 0x78)));
                  }
                }
                _0x4c5ad6 &&
                  ((_0x5825ee = _0x4c5ad6["copy"]),
                  _0x32a5b6["push"](_0x5825ee),
                  _0x1fec7e["push"]([_0x2e2d8d, _0x5825ee]));
              }
              _0x4d3242["push"](_0x5825ee);
            }
            if (!_0x32a5b6["length"]) continue;
            ((_0x56a96a = {
              original: _0x24158e,
              applied: _0x260ed1 ? _0x4d3242 : _0x4d3242[0x0],
              clones: _0x32a5b6,
              pairs: _0x1fec7e,
              pending: _0x28bfd6 !== _0x58314f,
            }),
              (_0x1bbcc8["material"] = _0x56a96a["applied"]),
              this["worldMaterials"]["set"](_0x1bbcc8, _0x56a96a));
            if (this["customFogOverride"])
              this["customFogOverride"]["lastScan"] = null;
          }
          for (const [_0x1ddbeb, _0x5638a8] of _0x56a96a["pairs"]) {
            _0x5638a8["color"]
              ["copy"](_0x1ddbeb["color"])
              ["lerp"](_0x1b838a, _0x4c7217);
            if (
              _0x1ddbeb["isNodeMaterial"] &&
              _0x1afdc4?.["vec4"] &&
              _0x1afdc4["mix"] &&
              _0x1afdc4["uniform"] &&
              _0x1afdc4["materialColor"]
            ) {
              const _0x918bed = this["worldMaterialCopies"]["get"](_0x1ddbeb),
                _0x1d821f = _0x1ddbeb["fragmentNode"]
                  ? "fragmentNode"
                  : _0x1ddbeb["outputNode"]
                    ? "outputNode"
                    : "colorNode",
                _0x2816d2 = _0x1ddbeb[_0x1d821f] || _0x1afdc4["materialColor"],
                _0x1cf075 =
                  _0x1d821f === "colorNode" &&
                  _0x1ddbeb["vertexColors"] &&
                  _0x4dbb25["get"](_0x1ddbeb) &&
                  typeof _0x1afdc4["vertexColor"] === "function";
              (_0x5638a8["color"]["copy"](_0x1ddbeb["color"]),
                (_0x918bed["tint"] ||= _0x1afdc4["uniform"](
                  new this["three"]["Color"](),
                )),
                (_0x918bed["strength"] ||= _0x1afdc4["uniform"](0x0)),
                _0x918bed["tint"]["value"]["copy"](_0x1b838a),
                (_0x918bed["strength"]["value"] = _0x4c7217));
              if (
                _0x918bed["base"] !== _0x2816d2 ||
                _0x918bed["field"] !== _0x1d821f ||
                _0x918bed["baked"] !== _0x1cf075
              ) {
                let _0x99aca0 = _0x1afdc4["vec4"](_0x2816d2);
                if (_0x1cf075)
                  _0x99aca0 = _0x99aca0["mul"](_0x1afdc4["vertexColor"]());
                _0x5638a8[_0x1d821f] = _0x1afdc4["vec4"](
                  _0x1afdc4["mix"](
                    _0x99aca0["rgb"],
                    _0x918bed["tint"],
                    _0x918bed["strength"],
                  ),
                  _0x99aca0["a"],
                );
                if (_0x1d821f === "colorNode")
                  _0x5638a8["vertexColors"] = _0x1cf075
                    ? ![]
                    : _0x1ddbeb["vertexColors"];
                ((_0x918bed["base"] = _0x2816d2),
                  (_0x918bed["field"] = _0x1d821f),
                  (_0x918bed["baked"] = _0x1cf075),
                  (_0x5638a8["needsUpdate"] = !![]));
              }
            } else
              _0x1ddbeb["isNodeMaterial"] &&
                typeof _0x1ddbeb["colorNode"]?.["mix"] === "function" &&
                _0x5638a8["userData"]["crackyTintSignature"] !== _0x468c08 &&
                (_0x5638a8["color"]["copy"](_0x1ddbeb["color"]),
                (_0x5638a8["colorNode"] = _0x1ddbeb["colorNode"]["mix"](
                  _0x1b838a,
                  _0x4c7217,
                )),
                (_0x5638a8["needsUpdate"] = !![]),
                (_0x5638a8["userData"]["crackyTintSignature"] = _0x468c08));
          }
        } catch (_0x5735be) {
          (_0x3dca1b++,
            (_0xf33f80 ||= String(_0x5735be?.["message"] || _0x5735be)["slice"](
              0x0,
              0x78,
            )));
        }
      }
      const _0x5e38dd = new Set();
      for (const _0x435a89 of this["worldMaterials"]["values"]())
        for (const [_0x4af985] of _0x435a89["pairs"])
          _0x5e38dd["add"](_0x4af985);
      for (const [_0x19af30, _0x1d1b46] of this["worldMaterialCopies"])
        if (!_0x5e38dd["has"](_0x19af30)) {
          try {
            this["disposeOwned"](_0x1d1b46["copy"]);
          } catch (_0x336652) {}
          this["worldMaterialCopies"]["delete"](_0x19af30);
        }
      this["worldStatus"] =
        this["worldMaterials"]["size"] +
        "\x20map\x20meshes\x20/\x20" +
        _0x5d8762["size"] +
        "\x20instance\x20batches\x20·\x20" +
        Math["round"](_0x4c7217 * 0x64) +
        "%\x20alpha" +
        (_0x28bfd6 ? "\x20·\x20more\x20materials\x20queued" : "") +
        (_0x3dca1b
          ? "\x20·\x20" + _0x3dca1b + "\x20skipped:\x20" + _0xf33f80
          : "");
    }
    ["restoreCustomFog"](_0x28b73a = ![]) {
      const _0x401edf = this["customFogOverride"];
      if (_0x401edf && _0x401edf["scene"]["fog"] === _0x401edf["applied"])
        _0x401edf["scene"]["fog"] = _0x401edf["original"];
      if (
        _0x401edf &&
        _0x401edf["scene"]["fogNode"] === (_0x401edf["node"] || null)
      )
        _0x401edf["scene"]["fogNode"] = _0x401edf["fogNode"] ?? null;
      for (const [_0x191368, _0x265fc4] of this["fogMaterials"] || [])
        _0x191368["fog"] === !![] &&
          ((_0x191368["fog"] = _0x265fc4), (_0x191368["needsUpdate"] = !![]));
      this["fogMaterials"]?.["clear"]();
      for (const _0x14b66b of this["fogOutputMaterials"]?.["keys"]() || [])
        this["detachFogOutput"](_0x14b66b);
      if (!_0x28b73a && this["suspendedFogCache"]) {
        for (const _0xfec0ae of this["suspendedFogCache"]["copies"]["values"]())
          try {
            this["disposeOwned"](_0xfec0ae["copy"]);
          } catch (_0x17e170) {}
        this["suspendedFogCache"] = null;
      }
      if (_0x28b73a && _0x401edf) {
        if (this["suspendedFogCache"]) {
          for (const _0x2d45a of this["suspendedFogCache"]["copies"][
            "values"
          ]())
            try {
              this["disposeOwned"](_0x2d45a["copy"]);
            } catch (_0x35a15f) {}
        }
        this["suspendedFogCache"] = {
          state: _0x401edf,
          copies: new Map(this["fogOutputCopies"] || []),
        };
      } else {
        for (const _0x296daa of this["fogOutputCopies"]?.["values"]() || [])
          try {
            this["disposeOwned"](_0x296daa["copy"]);
          } catch (_0x49bfef) {}
      }
      (this["fogOutputCopies"]?.["clear"](),
        (this["customFogOverride"] = null));
    }
    ["worldBaseMaterial"](_0x1d2cca) {
      const _0x50e9f7 = this["fogOutputMaterials"]?.["get"](_0x1d2cca);
      return _0x50e9f7 && _0x1d2cca["material"] === _0x50e9f7["applied"]
        ? _0x50e9f7["original"]
        : _0x1d2cca["material"];
    }
    ["detachFogOutput"](_0x5f10b6) {
      const _0x50c2b2 = this["fogOutputMaterials"]?.["get"](_0x5f10b6);
      if (!_0x50c2b2) return;
      if (_0x5f10b6["material"] === _0x50c2b2["applied"])
        _0x5f10b6["material"] = _0x50c2b2["original"];
      this["fogOutputMaterials"]["delete"](_0x5f10b6);
      if (this["customFogOverride"])
        this["customFogOverride"]["lastScan"] = null;
    }
    ["updateCustomFog"]() {
      if (
        !this["settings"]["customFogEnabled"] ||
        !this["isGameplayAllowed"]()
      ) {
        this["restoreCustomFog"]();
        return;
      }
      const _0x3ce4c5 = this["fromPage"](this["renderer"]?.["scene"]);
      if (
        !_0x3ce4c5?.["isScene"] ||
        !Object["getOwnPropertyDescriptor"](_0x3ce4c5, "fog")?.["writable"] ||
        typeof this["three"]?.["Fog"] !== "function"
      ) {
        (this["restoreCustomFog"](),
          (this["fogStatus"] = "native\x20fog\x20API\x20unavailable"));
        return;
      }
      if (
        (this["customFogOverride"] &&
          this["customFogOverride"]["scene"] !== _0x3ce4c5) ||
        (this["suspendedFogCache"] &&
          this["suspendedFogCache"]["state"]["scene"] !== _0x3ce4c5)
      )
        this["restoreCustomFog"]();
      let _0x899bde = this["customFogOverride"];
      !_0x899bde &&
        this["suspendedFogCache"] &&
        ((_0x899bde = this["suspendedFogCache"]["state"]),
        (_0x899bde["original"] = _0x3ce4c5["fog"]),
        (_0x899bde["fogNode"] = _0x3ce4c5["fogNode"]),
        (_0x899bde["lastScan"] = null),
        (this["fogOutputCopies"] = this["suspendedFogCache"]["copies"]),
        (this["suspendedFogCache"] = null),
        (this["customFogOverride"] = _0x899bde),
        (_0x3ce4c5["fog"] = _0x899bde["applied"]));
      if (!_0x899bde || _0x3ce4c5["fog"] !== _0x899bde["applied"]) {
        ((_0x899bde = {
          scene: _0x3ce4c5,
          original: _0x3ce4c5["fog"],
          fogNode: _0x3ce4c5["fogNode"],
          applied: new this["three"]["Fog"](0xffffff, 0x1, 0x5dc),
        }),
          (this["customFogOverride"] = _0x899bde),
          (_0x3ce4c5["fog"] = _0x899bde["applied"]));
        const _0x42eac7 = this["fromPage"](this["three"]["TSL"]);
        _0x42eac7?.["fog"] &&
          _0x42eac7["rangeFogFactor"] &&
          _0x42eac7["uniform"] &&
          ((_0x899bde["color"] = _0x42eac7["uniform"](
            new this["three"]["Color"](),
          )),
          (_0x899bde["near"] = _0x42eac7["uniform"](0x0)),
          (_0x899bde["far"] = _0x42eac7["uniform"](0x5dc)),
          (_0x899bde["factor"] = _0x42eac7["rangeFogFactor"](
            _0x899bde["near"],
            _0x899bde["far"],
          )),
          (_0x899bde["node"] = _0x42eac7["fog"](
            _0x899bde["color"],
            _0x899bde["factor"],
          )));
      } else
        _0x899bde["lastValues"] &&
          (_0x899bde["applied"]["near"] !== _0x899bde["lastValues"]["near"] ||
            _0x899bde["applied"]["far"] !== _0x899bde["lastValues"]["far"] ||
            _0x899bde["applied"]["color"]["getHex"]() !==
              _0x899bde["lastValues"]["color"]) &&
          ((_0x899bde["original"] = _0x899bde["applied"]["clone"]()),
          (_0x899bde["original"]["ogFar"] = _0x899bde["applied"]["ogFar"]));
      if (_0x3ce4c5["fogNode"] !== (_0x899bde["node"] || null)) {
        if (_0x3ce4c5["fogNode"] != null)
          _0x899bde["fogNode"] = _0x3ce4c5["fogNode"];
        _0x3ce4c5["fogNode"] = _0x899bde["node"] || null;
      }
      this["fogMaterials"] ||= new Map();
      const _0x5d5863 = Date["now"]();
      if (
        _0x899bde["lastScan"] == null ||
        _0x5d5863 - _0x899bde["lastScan"] >= 0x1f4
      ) {
        _0x899bde["lastScan"] = _0x5d5863;
        const _0xaa204d = this["getWorldMeshes"](),
          _0x210aaa = this["fromPage"](this["three"]["TSL"]);
        ((this["fogOutputMaterials"] ||= new Map()),
          (this["fogOutputCopies"] ||= new Map()));
        let _0x38d3c6 = 0x0,
          _0x534f89 = 0x0;
        for (const [_0x31cf6a, _0x1fd42c] of this["fogOutputMaterials"])
          if (
            !_0xaa204d["has"](_0x31cf6a) ||
            _0x31cf6a["material"] !== _0x1fd42c["applied"] ||
            _0x1fd42c["pairs"]["some"](
              ([_0x344631, _0x114320]) =>
                _0x114320["userData"]["crackyFogSourceVersion"] !==
                _0x344631["version"],
            )
          )
            this["detachFogOutput"](_0x31cf6a);
        for (const _0x19cd00 of _0xaa204d) {
          if (this["fogOutputMaterials"]["has"](_0x19cd00)) continue;
          const _0x5510e2 = _0x19cd00["material"],
            _0x102b2f = Array["isArray"](_0x5510e2),
            _0x1ac3a1 = new (this["pageWindow"]["Array"] || Array)(),
            _0x526136 = [];
          for (const _0x6177e2 of _0x102b2f ? _0x5510e2 : [_0x5510e2]) {
            if (
              _0x899bde["node"] &&
              _0x6177e2?.["isNodeMaterial"] &&
              _0x6177e2["outputNode"] &&
              _0x210aaa["vec4"] &&
              _0x210aaa["mix"]
            ) {
              let _0x5ebfe6 = this["fogOutputCopies"]["get"](_0x6177e2);
              _0x5ebfe6 &&
                (_0x5ebfe6["version"] !== _0x6177e2["version"] ||
                  _0x5ebfe6["state"] !== _0x899bde) &&
                (_0x5ebfe6["copy"]["dispose"](),
                this["fogOutputCopies"]["delete"](_0x6177e2),
                (_0x5ebfe6 = null));
              if (!_0x5ebfe6 && _0x38d3c6 < 0x10) {
                let _0x4fc40a;
                try {
                  _0x4fc40a = _0x6177e2["clone"]();
                  if (_0x4fc40a === _0x6177e2 || !_0x4fc40a?.["isMaterial"])
                    throw new Error("Unsafe\x20fog\x20material\x20clone");
                  for (const _0xa5b6c1 of [
                    "onBeforeCompile",
                    "onBeforeRender",
                    "customProgramCacheKey",
                  ])
                    if (typeof _0x6177e2[_0xa5b6c1] === "function")
                      _0x4fc40a[_0xa5b6c1] = _0x6177e2[_0xa5b6c1];
                  const _0x2d0be7 = _0x210aaa["vec4"](_0x6177e2["outputNode"]);
                  ((_0x4fc40a["outputNode"] = _0x210aaa["vec4"](
                    _0x210aaa["mix"](
                      _0x2d0be7["rgb"],
                      _0x899bde["color"],
                      _0x899bde["factor"],
                    ),
                    _0x2d0be7["a"],
                  )),
                    (_0x4fc40a["fog"] = ![]),
                    (_0x4fc40a["needsUpdate"] = !![]),
                    (_0x4fc40a["userData"]["crackyFogSourceVersion"] =
                      _0x6177e2["version"]),
                    (_0x5ebfe6 = {
                      copy: _0x4fc40a,
                      version: _0x6177e2["version"],
                      state: _0x899bde,
                    }),
                    this["fogOutputCopies"]["set"](_0x6177e2, _0x5ebfe6),
                    _0x38d3c6++);
                } catch (_0x2ba8fa) {
                  if (_0x4fc40a && _0x4fc40a !== _0x6177e2)
                    try {
                      _0x4fc40a["dispose"]();
                    } catch (_0x165b5d) {}
                  _0x534f89++;
                }
              }
              if (_0x5ebfe6) {
                (_0x1ac3a1["push"](_0x5ebfe6["copy"]),
                  _0x526136["push"]([_0x6177e2, _0x5ebfe6["copy"]]));
                continue;
              }
            }
            (_0x6177e2?.["isMaterial"] &&
              !_0x6177e2["isShaderMaterial"] &&
              _0x6177e2["fog"] === ![] &&
              !this["fogMaterials"]["has"](_0x6177e2) &&
              (this["fogMaterials"]["set"](_0x6177e2, ![]),
              (_0x6177e2["fog"] = !![]),
              (_0x6177e2["needsUpdate"] = !![])),
              _0x1ac3a1["push"](_0x6177e2));
          }
          if (_0x526136["length"]) {
            const _0xd7939c = _0x102b2f ? _0x1ac3a1 : _0x1ac3a1[0x0];
            ((_0x19cd00["material"] = _0xd7939c),
              this["fogOutputMaterials"]["set"](_0x19cd00, {
                original: _0x5510e2,
                applied: _0xd7939c,
                pairs: _0x526136,
              }));
          }
        }
        const _0x53480a = new Set();
        for (const _0x4ef805 of this["fogOutputMaterials"]["values"]())
          for (const [_0x53e4a4] of _0x4ef805["pairs"])
            _0x53480a["add"](_0x53e4a4);
        for (const [_0xf26361, _0x1b9b40] of this["fogOutputCopies"])
          !_0x53480a["has"](_0xf26361) &&
            (_0x1b9b40["copy"]["dispose"](),
            this["fogOutputCopies"]["delete"](_0xf26361));
        _0x899bde["skipped"] = _0x534f89;
      }
      const _0xb153f3 = Number["isFinite"](Number(this["settings"]["fogNear"]))
          ? Math["max"](
              0x0,
              Math["min"](0x3a97, Number(this["settings"]["fogNear"])),
            )
          : 0x64,
        _0x52fed1 = Number["isFinite"](Number(this["settings"]["fogFar"]))
          ? Math["max"](
              _0xb153f3 + 0x1,
              Math["min"](0x3a98, Number(this["settings"]["fogFar"])),
            )
          : Math["max"](_0xb153f3 + 0x1, 0x5dc);
      (_0x899bde["applied"]["color"]["set"](
        this["normalizeColor"](this["settings"]["fogColor"], "#c2d9ee"),
      ),
        (_0x899bde["applied"]["near"] = _0xb153f3),
        (_0x899bde["applied"]["far"] = _0x52fed1),
        (_0x899bde["applied"]["ogFar"] = _0x52fed1),
        _0x899bde["node"] &&
          (_0x899bde["color"]["value"]["copy"](_0x899bde["applied"]["color"]),
          (_0x899bde["near"]["value"] = _0xb153f3),
          (_0x899bde["far"]["value"] = _0x52fed1)),
        (_0x899bde["lastValues"] = {
          near: _0xb153f3,
          far: _0x52fed1,
          color: _0x899bde["applied"]["color"]["getHex"](),
        }),
        (this["fogStatus"] =
          _0xb153f3 +
          "–" +
          _0x52fed1 +
          "\x20units" +
          (_0x899bde["node"] ? "\x20·\x20native\x20distance\x20node" : "") +
          (_0x899bde["skipped"]
            ? "\x20·\x20" + _0x899bde["skipped"] + "\x20unsupported\x20graphs"
            : "")));
    }
    ["characterMeshes"](_0x54c793, _0x495672 = ![]) {
      const _0x46dc67 =
        this["renderWorkCache"]?.["characters"]["get"](_0x54c793);
      if (_0x46dc67) return _0x46dc67;
      this["registerCosmeticLayers"](_0x54c793);
      const _0xabe62d =
          _0x54c793["objInstances"] || (_0x495672 && _0x54c793["mesh"]),
        _0x997bcf = new Set();
      if (!_0xabe62d || _0xabe62d["visible"] === ![]) return _0x997bcf;
      if (
        !_0x495672 &&
        _0x54c793["lowerBody"] &&
        Array["isArray"](_0x54c793["legMeshes"])
      ) {
        for (const _0x4a2235 of _0x54c793["lowerBody"]["children"] || [])
          if (_0x4a2235["name"] === "body") _0x997bcf["add"](_0x4a2235);
        _0x997bcf["add"](_0x54c793["headObj"]);
        for (const _0x575a14 of _0x54c793["legMeshes"])
          _0x997bcf["add"](_0x575a14);
        for (const _0x51375a of _0x54c793["armMeshes"] || [])
          _0x997bcf["add"](_0x51375a);
        _0x997bcf["add"](
          _0x54c793["mergedArmMeshes"]?.[_0x54c793["loadoutIndex"]],
        );
      } else {
        const _0x5a5fd4 = new Set();
        for (const _0x272bc5 of _0x54c793["weaponMeshes"] || [])
          if (_0x272bc5) _0x5a5fd4["add"](_0x272bc5);
        for (const _0x3d97f8 of [
          _0x54c793["hatMesh"],
          _0x54c793["backMesh"],
          _0x54c793["waistMesh"],
          _0x54c793["faceMesh"],
        ])
          if (_0x3d97f8) _0x5a5fd4["add"](_0x3d97f8);
        const _0x29c009 = [_0xabe62d],
          _0x16b990 = new Set();
        while (_0x29c009["length"] && _0x16b990["size"] < 0x400) {
          const _0x5a3300 = _0x29c009["pop"]();
          if (
            !_0x5a3300 ||
            _0x16b990["has"](_0x5a3300) ||
            _0x5a5fd4["has"](_0x5a3300) ||
            this["chamsOwned"]?.["has"](_0x5a3300)
          )
            continue;
          _0x16b990["add"](_0x5a3300);
          if (_0x5a3300["isMesh"]) _0x997bcf["add"](_0x5a3300);
          for (const _0x16af78 of _0x5a3300["children"] || [])
            _0x29c009["push"](_0x16af78);
        }
      }
      (_0x997bcf["add"](_0x54c793["faceMesh"]),
        _0x997bcf["add"](_0x54c793["headMesh"]));
      const _0x46ee51 = this["collectEffectMeshes"](_0x997bcf, _0xabe62d),
        _0x9e012e = this["getBatchedCharacterSource"](_0x54c793);
      if (_0x9e012e) _0x46ee51["add"](_0x9e012e);
      if (this["renderWorkCache"])
        this["renderWorkCache"]["characters"]["set"](_0x54c793, _0x46ee51);
      return _0x46ee51;
    }
    ["getBatchedCharacterSource"](_0x5164e1) {
      const _0x4db632 = this["fromPage"](_0x5164e1["batchRef"]),
        _0x3bb91a = this["fromPage"](_0x4db632?.["batch"]),
        _0x135a87 = this["fromPage"](_0x3bb91a?.["mesh"]),
        _0x32c6b1 = _0x135a87?.["geometry"],
        _0x3c7512 = _0x4db632?.["slot"],
        _0x103376 = _0x3bb91a?.["capacity"];
      if (
        !_0x135a87?.["isSkinnedMesh"] ||
        !_0x32c6b1?.["index"] ||
        !_0x135a87["skeleton"] ||
        !Number["isInteger"](_0x3c7512) ||
        !Number["isInteger"](_0x103376) ||
        _0x103376 < 0x1 ||
        _0x103376 > 0x80 ||
        _0x3c7512 < 0x0 ||
        _0x3c7512 >= _0x103376 ||
        _0x3bb91a["players"]?.[_0x3c7512] !== _0x5164e1
      )
        return null;
      const _0x55890b =
          _0x32c6b1["attributes"]["position"]?.["count"] / _0x103376,
        _0x5c191f = _0x32c6b1["index"]["count"] / _0x103376;
      if (
        !Number["isInteger"](_0x55890b) ||
        !Number["isInteger"](_0x5c191f) ||
        _0x55890b > 0x2ee0 ||
        _0x5c191f > 0xbb80
      )
        return null;
      this["batchCharacterSources"] ||= new Map();
      let _0x14e190 = this["batchCharacterSources"]["get"](_0x5164e1);
      const _0x49512a =
          Object["values"](_0x32c6b1["attributes"])
            ["map"]((_0x5b4ded) => _0x5b4ded["version"])
            ["join"]("/") +
          "/" +
          _0x32c6b1["index"]["version"],
        _0x5de74f = _0x32c6b1["attributes"],
        _0x32d2f3 =
          _0x14e190 &&
          Object["keys"](_0x14e190["mesh"]["geometry"]["attributes"])[
            "length"
          ] === Object["keys"](_0x5de74f)["length"] &&
          Object["entries"](_0x5de74f)["every"](([_0x223809, _0x137d13]) => {
            const _0x347d6f =
              _0x14e190["mesh"]["geometry"]["attributes"][_0x223809];
            return (
              _0x347d6f &&
              _0x347d6f["count"] === _0x55890b &&
              _0x347d6f["itemSize"] === _0x137d13["itemSize"] &&
              _0x347d6f["normalized"] === _0x137d13["normalized"] &&
              !_0x137d13["isInterleavedBufferAttribute"]
            );
          });
      _0x14e190 &&
        (_0x14e190["source"] !== _0x135a87 ||
          _0x14e190["slot"] !== _0x3c7512 ||
          _0x14e190["geometry"] !== _0x32c6b1 ||
          !_0x32d2f3 ||
          _0x14e190["mesh"]["geometry"]["index"]["count"] !== _0x5c191f ||
          _0x14e190["skeleton"] !== _0x135a87["skeleton"]) &&
        (this["releaseBatchSource"](_0x14e190),
        this["batchCharacterSources"]["delete"](_0x5164e1),
        (_0x14e190 = null));
      if (!_0x14e190) {
        if (this["renderWorkCache"]) {
          if (this["renderWorkCache"]["newBatches"] <= 0x0) return null;
          this["renderWorkCache"]["newBatches"]--;
        }
        const _0x2bb4fe = new this["three"]["BufferGeometry"](),
          _0x97e799 = _0x3c7512 * _0x55890b;
        for (const [_0x4955c6, _0x130742] of Object["entries"](
          _0x32c6b1["attributes"],
        )) {
          if (!_0x130742["array"] || _0x130742["isInterleavedBufferAttribute"])
            return (_0x2bb4fe["dispose"](), null);
          const _0x4504ef = _0x130742["array"]["slice"](
            _0x97e799 * _0x130742["itemSize"],
            (_0x97e799 + _0x55890b) * _0x130742["itemSize"],
          );
          _0x2bb4fe["setAttribute"](
            _0x4955c6,
            new this["three"]["BufferAttribute"](
              _0x4504ef,
              _0x130742["itemSize"],
              _0x130742["normalized"],
            ),
          );
        }
        const _0x5bbc89 = new (this["pageWindow"]["Uint32Array"] ||
          Uint32Array)(_0x5c191f);
        for (let _0x18e301 = 0x0; _0x18e301 < _0x5c191f; _0x18e301++) {
          const _0x57d54f =
            _0x32c6b1["index"]["getX"](_0x3c7512 * _0x5c191f + _0x18e301) -
            _0x97e799;
          if (_0x57d54f < 0x0 || _0x57d54f >= _0x55890b)
            return (_0x2bb4fe["dispose"](), null);
          _0x5bbc89[_0x18e301] = _0x57d54f;
        }
        _0x2bb4fe["setIndex"](
          new this["three"]["BufferAttribute"](_0x5bbc89, 0x1),
        );
        const _0x2a9e6e = new this["three"]["MeshBasicMaterial"]();
        _0x2a9e6e["visible"] = ![];
        const _0x5c4a6b = new this["three"]["SkinnedMesh"](
          _0x2bb4fe,
          _0x2a9e6e,
        );
        (_0x5c4a6b["bind"](_0x135a87["skeleton"], _0x135a87["bindMatrix"]),
          (_0x5c4a6b["bindMode"] = _0x135a87["bindMode"]),
          (_0x5c4a6b["frustumCulled"] = ![]),
          (_0x5c4a6b["layers"]["mask"] = _0x135a87["layers"]["mask"]),
          (this["chamsOwned"] ||= new WeakSet()),
          this["chamsOwned"]["add"](_0x5c4a6b),
          _0x135a87["add"](_0x5c4a6b),
          (_0x14e190 = {
            mesh: _0x5c4a6b,
            source: _0x135a87,
            geometry: _0x32c6b1,
            skeleton: _0x135a87["skeleton"],
            slot: _0x3c7512,
            stamp: _0x49512a,
            attributeRefs: new Map(Object["entries"](_0x5de74f)),
            attributeVersions: new Map(
              Object["entries"](_0x5de74f)["map"](([_0x1d9849, _0x39b017]) => [
                _0x1d9849,
                _0x39b017["version"],
              ]),
            ),
            index: _0x32c6b1["index"],
            indexVersion: _0x32c6b1["index"]["version"],
          }),
          this["batchCharacterSources"]["set"](_0x5164e1, _0x14e190));
      } else {
        if (
          _0x14e190["stamp"] !== _0x49512a ||
          _0x14e190["index"] !== _0x32c6b1["index"] ||
          Object["entries"](_0x5de74f)["some"](
            ([_0x91d527, _0x2f2d94]) =>
              _0x14e190["attributeRefs"]["get"](_0x91d527) !== _0x2f2d94,
          )
        ) {
          const _0x2180a1 = _0x3c7512 * _0x55890b,
            _0x438ec9 = _0x14e190["mesh"]["geometry"];
          let _0x306955 = ![];
          for (const [_0x39a8e8, _0x4d7e67] of Object["entries"](_0x5de74f)) {
            if (
              _0x14e190["attributeRefs"]["get"](_0x39a8e8) === _0x4d7e67 &&
              _0x14e190["attributeVersions"]["get"](_0x39a8e8) ===
                _0x4d7e67["version"]
            )
              continue;
            const _0x17668e = _0x438ec9["attributes"][_0x39a8e8],
              _0x2a1ecd = _0x2180a1 * _0x4d7e67["itemSize"],
              _0x4158cc = (_0x2180a1 + _0x55890b) * _0x4d7e67["itemSize"];
            let _0x58b42a = ![];
            for (let _0x47ff95 = _0x2a1ecd; _0x47ff95 < _0x4158cc; _0x47ff95++)
              if (
                _0x17668e["array"][_0x47ff95 - _0x2a1ecd] !==
                _0x4d7e67["array"][_0x47ff95]
              ) {
                _0x58b42a = !![];
                break;
              }
            if (_0x58b42a) {
              (_0x17668e["array"]["set"](
                _0x4d7e67["array"]["subarray"](_0x2a1ecd, _0x4158cc),
              ),
                (_0x17668e["needsUpdate"] = !![]));
              if (
                _0x39a8e8 === "position" ||
                _0x39a8e8 === "skinIndex" ||
                _0x39a8e8 === "skinWeight"
              )
                _0x306955 = !![];
            }
          }
          let _0x37db3a = ![];
          if (
            _0x14e190["index"] !== _0x32c6b1["index"] ||
            _0x14e190["indexVersion"] !== _0x32c6b1["index"]["version"]
          )
            for (let _0x4f2ef9 = 0x0; _0x4f2ef9 < _0x5c191f; _0x4f2ef9++) {
              const _0x3c67c5 =
                _0x32c6b1["index"]["getX"](_0x3c7512 * _0x5c191f + _0x4f2ef9) -
                _0x2180a1;
              if (_0x3c67c5 < 0x0 || _0x3c67c5 >= _0x55890b)
                return (
                  this["releaseBatchSource"](_0x14e190),
                  this["batchCharacterSources"]["delete"](_0x5164e1),
                  null
                );
              _0x438ec9["index"]["array"][_0x4f2ef9] !== _0x3c67c5 &&
                ((_0x438ec9["index"]["array"][_0x4f2ef9] = _0x3c67c5),
                (_0x37db3a = !![]));
            }
          if (_0x37db3a) _0x438ec9["index"]["needsUpdate"] = !![];
          (_0x306955 || _0x37db3a) &&
            ((_0x438ec9["boundingBox"] = null),
            (_0x438ec9["boundingSphere"] = null),
            (_0x14e190["mesh"]["boundingBox"] = null),
            (_0x14e190["mesh"]["boundingSphere"] = null));
          _0x14e190["stamp"] = _0x49512a;
          for (const [_0x28bafe, _0x5f29c0] of Object["entries"](_0x5de74f)) {
            (_0x14e190["attributeRefs"]["set"](_0x28bafe, _0x5f29c0),
              _0x14e190["attributeVersions"]["set"](
                _0x28bafe,
                _0x5f29c0["version"],
              ));
          }
          ((_0x14e190["index"] = _0x32c6b1["index"]),
            (_0x14e190["indexVersion"] = _0x32c6b1["index"]["version"]));
        }
      }
      return (
        (_0x14e190["mesh"]["layers"]["mask"] = _0x135a87["layers"]["mask"]),
        _0x14e190["mesh"]
      );
    }
    ["releaseBatchSource"](_0x176ae8) {
      for (const _0x4d684d of ["chamsMeshes", "glowMeshes"]) {
        const _0x2fc14c = this[_0x4d684d]?.["get"](_0x176ae8["mesh"]);
        _0x2fc14c &&
          (this["releaseCham"](_0x2fc14c),
          this[_0x4d684d]["delete"](_0x176ae8["mesh"]));
      }
      (_0x176ae8["mesh"]["parent"]?.["remove"](_0x176ae8["mesh"]),
        this["disposeOwned"](_0x176ae8["mesh"]["geometry"]),
        this["disposeOwned"](_0x176ae8["mesh"]["material"]));
    }
    ["pruneBatchSources"](_0x2b2393 = ![]) {
      for (const [_0x3a2bf2, _0x12bd0c] of this["batchCharacterSources"] || [])
        (_0x2b2393 ||
          !(
            this["settings"]["chamsEnabled"] ||
            this["settings"]["glowEspEnabled"]
          ) ||
          _0x3a2bf2["active"] === ![] ||
          !(_0x3a2bf2["health"] > 0x0) ||
          !this["isModelVisible"](
            _0x3a2bf2["objInstances"],
            _0x3a2bf2["objInstances"],
          ) ||
          !this["game"]?.["players"]?.["list"]?.["includes"](_0x3a2bf2) ||
          _0x3a2bf2["batchRef"]?.["batch"]?.["mesh"] !== _0x12bd0c["source"] ||
          _0x3a2bf2["batchRef"]?.["slot"] !== _0x12bd0c["slot"]) &&
          (this["releaseBatchSource"](_0x12bd0c),
          this["batchCharacterSources"]["delete"](_0x3a2bf2));
    }
    ["collectEffectMeshes"](
      _0x1ba831,
      _0x3717a6 = null,
      _0x4833bf = new Set(),
    ) {
      const _0x5380a8 = [..._0x1ba831],
        _0x522023 = new Set(),
        _0x5ace40 = new Set();
      while (_0x5380a8["length"] && _0x522023["size"] < 0x800) {
        const _0x2bebc0 = _0x5380a8["pop"]();
        if (
          !_0x2bebc0 ||
          _0x522023["has"](_0x2bebc0) ||
          _0x4833bf["has"](_0x2bebc0) ||
          this["chamsOwned"]?.["has"](_0x2bebc0)
        )
          continue;
        _0x522023["add"](_0x2bebc0);
        if (!this["isModelVisible"](_0x2bebc0, _0x3717a6 || _0x2bebc0))
          continue;
        if (_0x2bebc0["isMesh"] && _0x2bebc0["geometry"])
          _0x5ace40["add"](_0x2bebc0);
        for (const _0x3b9de5 of _0x2bebc0["children"] || [])
          _0x5380a8["push"](_0x3b9de5);
      }
      return _0x5ace40;
    }
    ["registerCosmeticLayers"](_0x12873d) {
      this["effectLayerMasks"] ||= new WeakMap();
      for (const _0x5d19f3 of _0x12873d?.["cosmeticItems"] || [])
        if (_0x5d19f3?.["mesh"] && _0x5d19f3["batch"]?.["mesh"]?.["layers"])
          this["effectLayerMasks"]["set"](
            _0x5d19f3["mesh"],
            _0x5d19f3["batch"]["mesh"]["layers"]["mask"],
          );
    }
    ["effectLayerMask"](_0x42153c) {
      return _0x42153c["layers"]["mask"] >>> 0x0 === 0x80000000 &&
        this["effectLayerMasks"]?.["has"](_0x42153c)
        ? this["effectLayerMasks"]["get"](_0x42153c)
        : _0x42153c["layers"]["mask"];
    }
    ["effectColor"](
      _0x5e0127,
      _0x49c7bb,
      _0x50a85a = ![],
      _0x1458ab = 0x3,
      _0x390e82 = Date["now"](),
    ) {
      const _0x5f2029 = new this["three"]["Color"](
        this["normalizeColor"](_0x5e0127, "#4677ff"),
      );
      if (_0x50a85a) {
        const _0x273b11 =
            Math["max"](0.5, Math["min"](0xc, Number(_0x1458ab) || 0x3)) *
            0x3e8,
          _0x2345ce =
            (0x1 -
              Math["cos"](
                ((_0x390e82 % _0x273b11) / _0x273b11) * Math["PI"] * 0x2,
              )) /
            0x2;
        _0x5f2029["lerp"](
          new this["three"]["Color"](
            this["normalizeColor"](_0x49c7bb, _0x5e0127),
          ),
          _0x2345ce,
        );
      }
      return _0x5f2029;
    }
    ["restoreMeshEffect"](_0x1019a0) {
      for (const _0x3aaa11 of _0x1019a0?.["values"]() || [])
        this["releaseCham"](_0x3aaa11);
      _0x1019a0?.["clear"]();
    }
    ["createEffectMesh"](_0x34ab1c, _0x479d80) {
      const _0x27b2f3 = _0x34ab1c["isSkinnedMesh"]
        ? new this["three"]["SkinnedMesh"](_0x34ab1c["geometry"], _0x479d80)
        : new this["three"]["Mesh"](_0x34ab1c["geometry"], _0x479d80);
      return (
        _0x34ab1c["isSkinnedMesh"] &&
          (_0x27b2f3["bind"](_0x34ab1c["skeleton"], _0x34ab1c["bindMatrix"]),
          (_0x27b2f3["bindMode"] = _0x34ab1c["bindMode"])),
        (_0x27b2f3["morphTargetInfluences"] =
          _0x34ab1c["morphTargetInfluences"]),
        (_0x27b2f3["morphTargetDictionary"] =
          _0x34ab1c["morphTargetDictionary"]),
        (_0x27b2f3["layers"]["mask"] = this["effectLayerMask"](_0x34ab1c)),
        (_0x27b2f3["frustumCulled"] = _0x34ab1c["frustumCulled"]),
        (_0x27b2f3["isModel"] = !![]),
        (_0x27b2f3["matrixAutoUpdate"] = ![]),
        (this["effectNoRaycast"] ||= this["toPageFunction"](function () {})),
        (_0x27b2f3["raycast"] = this["effectNoRaycast"]),
        (this["chamsOwned"] ||= new WeakSet()),
        this["chamsOwned"]["add"](_0x27b2f3),
        _0x34ab1c["add"](_0x27b2f3),
        _0x27b2f3
      );
    }
    ["createPooledEffectMesh"](_0x40d8fe, _0x15f7dd, _0x412154, _0x33322d) {
      this["effectMaterialPool"] ||= new Map();
      const _0x1be37c = _0x15f7dd + ":" + _0x412154;
      let _0x39cb7b = this["effectMaterialPool"]["get"](_0x1be37c);
      if (!_0x39cb7b) {
        const _0x2d0482 = new this["three"]["MeshBasicMaterial"]();
        ((_0x2d0482["depthWrite"] = ![]),
          (_0x2d0482["depthTest"] = !![]),
          (_0x2d0482["fog"] = ![]),
          (_0x2d0482["toneMapped"] = ![]),
          (_0x2d0482["transparent"] = !![]),
          _0x33322d?.(_0x2d0482),
          (_0x39cb7b = { key: _0x1be37c, material: _0x2d0482, refs: 0x0 }),
          this["effectMaterialPool"]["set"](_0x1be37c, _0x39cb7b));
      }
      let _0x1ccef4;
      try {
        _0x1ccef4 = this["createEffectMesh"](_0x40d8fe, _0x39cb7b["material"]);
      } catch (_0x1c5cd3) {
        !_0x39cb7b["refs"] &&
          (this["effectMaterialPool"]["delete"](_0x1be37c),
          this["disposeOwned"](_0x39cb7b["material"]));
        throw _0x1c5cd3;
      }
      return (
        (this["effectMeshMaterials"] ||= new WeakMap()),
        _0x39cb7b["refs"]++,
        this["effectMeshMaterials"]["set"](_0x1ccef4, _0x39cb7b),
        _0x1ccef4
      );
    }
    ["releaseCham"](_0x37b836) {
      if (_0x37b836["released"]) return;
      _0x37b836["released"] = !![];
      for (const _0x125cda of _0x37b836["meshes"]) {
        (_0x125cda["parent"]?.["remove"](_0x125cda),
          this["disposeOwned"](this["ownedGlowGeometries"]?.["get"](_0x125cda)),
          this["ownedGlowGeometries"]?.["delete"](_0x125cda),
          this["glowMeshInputs"]?.["delete"](_0x125cda));
        const _0x4b4e11 = this["effectMeshMaterials"]?.["get"](_0x125cda);
        if (_0x4b4e11) {
          this["effectMeshMaterials"]["delete"](_0x125cda);
          if (--_0x4b4e11["refs"] === 0x0) {
            if (
              this["effectMaterialPool"]?.["get"](_0x4b4e11["key"]) ===
              _0x4b4e11
            )
              this["effectMaterialPool"]["delete"](_0x4b4e11["key"]);
            this["disposeOwned"](_0x4b4e11["material"]);
          }
        } else this["disposeOwned"](_0x125cda["material"]);
      }
    }
    ["restoreChams"]() {
      for (const _0x4309c1 of this["chamsMeshes"]?.["values"]() || [])
        this["releaseCham"](_0x4309c1);
      (this["chamsMeshes"]?.["clear"](),
        this["pruneBatchSources"](!this["isGameplayAllowed"]()));
    }
    ["updateChams"]() {
      if (
        !this["settings"]["chamsEnabled"] ||
        !this["isGameplayAllowed"]() ||
        (!this["settings"]["chamsVisible"] &&
          !this["settings"]["chamsOccluded"])
      ) {
        this["restoreChams"]();
        return;
      }
      if (
        !this["three"]?.["MeshBasicMaterial"] ||
        !this["three"]?.["Mesh"] ||
        this["three"]["GreaterDepth"] == null ||
        this["three"]["LessEqualDepth"] == null
      ) {
        (this["restoreChams"](),
          (this["chamsStatus"] = "material\x20API\x20unavailable"));
        return;
      }
      ((this["chamsMeshes"] ||= new Map()),
        (this["chamsOwned"] ||= new WeakSet()));
      const _0x34c0a1 = new Set();
      let _0x3b3bed = 0x0;
      const _0x108ff3 = (_0x541405, _0x42b74e) => {
        if (
          !_0x541405 ||
          _0x541405["active"] === ![] ||
          !(_0x541405["health"] > 0x0)
        )
          return;
        const _0x4c1c93 = _0x541405 === this["me"] || _0x541405["isYou"];
        if (
          _0x4c1c93 &&
          !(
            this["settings"]["thirdPersonEnabled"] ||
            this["game"]?.["config"]?.["thirdPerson"]
          )
        ) {
          const _0x4856be = this["firstPersonHandMeshes"](_0x541405);
          if (_0x4856be["size"]) _0x3b3bed++;
          for (const _0x365926 of _0x4856be) _0x34c0a1["add"](_0x365926);
          return;
        }
        if (
          !_0x4c1c93 &&
          this["settings"]["espTeamCheck"] &&
          this["isTeam"](_0x541405)
        )
          return;
        const _0x1578f4 = this["characterMeshes"](_0x541405, _0x42b74e);
        if (_0x1578f4["size"]) _0x3b3bed++;
        for (const _0x2a3d3a of _0x1578f4) _0x34c0a1["add"](_0x2a3d3a);
      };
      for (const _0x5be561 of this["game"]?.["players"]?.["list"] || [])
        _0x108ff3(_0x5be561, ![]);
      if (
        this["me"] &&
        !this["game"]?.["players"]?.["list"]?.["includes"](this["me"])
      )
        _0x108ff3(this["me"], ![]);
      if (this["settings"]["espBotCheck"]) {
        for (const _0x17c20d of this["game"]?.["AI"]?.["ais"] || [])
          _0x108ff3(_0x17c20d, !![]);
      }
      for (const [_0x5ce1c8, _0x291055] of this["chamsMeshes"])
        (!_0x34c0a1["has"](_0x5ce1c8) ||
          _0x291055["geometry"] !== _0x5ce1c8["geometry"] ||
          _0x291055["skeleton"] !== _0x5ce1c8["skeleton"]) &&
          (this["releaseCham"](_0x291055),
          this["chamsMeshes"]["delete"](_0x5ce1c8));
      const _0x7fd8e7 = Number["isFinite"](
          Number(this["settings"]["chamsOpacity"]),
        )
          ? Math["max"](
              0x0,
              Math["min"](0x64, Number(this["settings"]["chamsOpacity"])),
            ) / 0x64
          : 0.7,
        _0xc40a7 = this["settings"]["chamsUseTheme"]
          ? this["getTheme"]()
          : {
              primary: this["settings"]["chamsVisibleColor"],
              secondary: this["settings"]["chamsOccludedColor"],
            },
        _0x2c3246 = [
          this["effectColor"](
            _0xc40a7["primary"],
            _0xc40a7["secondary"],
            this["settings"]["chamsFade"],
            this["settings"]["chamsFadeSeconds"],
          ),
          this["effectColor"](
            _0xc40a7["secondary"],
            _0xc40a7["primary"],
            this["settings"]["chamsFade"],
            this["settings"]["chamsFadeSeconds"],
          ),
        ];
      for (const _0xe37a09 of _0x34c0a1) {
        let _0x5573ad = this["chamsMeshes"]["get"](_0xe37a09);
        if (!_0x5573ad) {
          if (this["chamsMeshes"]["size"] >= 0x800) break;
          if (this["renderWorkCache"]) {
            if (this["renderWorkCache"]["newMeshes"] < 0x2) continue;
            this["renderWorkCache"]["newMeshes"] -= 0x2;
          }
          const _0x4b3c31 = [];
          try {
            for (let _0x1f9458 = 0x0; _0x1f9458 < 0x2; _0x1f9458++) {
              const _0x2b30f5 = this["createPooledEffectMesh"](
                _0xe37a09,
                "chamsMeshes",
                _0x1f9458,
                (_0x4b8cbb) => {
                  ((_0x4b8cbb["depthFunc"] = _0x1f9458
                    ? this["three"]["GreaterDepth"]
                    : this["three"]["LessEqualDepth"]),
                    (_0x4b8cbb["polygonOffset"] = !![]),
                    (_0x4b8cbb["polygonOffsetFactor"] = -0x1),
                    (_0x4b8cbb["polygonOffsetUnits"] = -0x1));
                },
              );
              (_0x4b3c31["push"](_0x2b30f5),
                (_0x2b30f5["renderOrder"] = 0x2710 + _0x1f9458),
                (_0x2b30f5["layers"]["mask"] =
                  this["effectLayerMask"](_0xe37a09)),
                (_0x2b30f5["frustumCulled"] = _0xe37a09["frustumCulled"]));
            }
          } catch (_0x1ad72d) {
            this["releaseCham"]({ meshes: _0x4b3c31 });
            throw _0x1ad72d;
          }
          ((_0x5573ad = {
            geometry: _0xe37a09["geometry"],
            skeleton: _0xe37a09["skeleton"],
            meshes: _0x4b3c31,
          }),
            this["chamsMeshes"]["set"](_0xe37a09, _0x5573ad));
        }
        for (let _0x574df7 = 0x0; _0x574df7 < 0x2; _0x574df7++) {
          const _0x24fd1e = _0x5573ad["meshes"][_0x574df7];
          ((_0x24fd1e["visible"] =
            !!this["settings"][_0x574df7 ? "chamsOccluded" : "chamsVisible"]),
            _0x24fd1e["material"]["color"]["copy"](_0x2c3246[_0x574df7]),
            (_0x24fd1e["material"]["opacity"] = _0x7fd8e7),
            (_0x24fd1e["material"]["transparent"] = !![]),
            (_0x24fd1e["morphTargetInfluences"] =
              _0xe37a09["morphTargetInfluences"]),
            (_0x24fd1e["layers"]["mask"] = this["effectLayerMask"](_0xe37a09)));
        }
      }
      ((this["chamsStatus"] =
        _0x3b3bed +
        "\x20rigs\x20/\x20" +
        this["chamsMeshes"]["size"] +
        "\x20meshes"),
        this["pruneBatchSources"]());
    }
    ["weaponEffectMeshes"]() {
      const _0x5d3d7d = new Set(),
        _0x277be2 = (_0x1765e5) => {
          if (
            !_0x1765e5 ||
            _0x1765e5["active"] === ![] ||
            _0x1765e5["health"] <= 0x0
          )
            return;
          this["registerCosmeticLayers"](_0x1765e5);
          const _0x4472ac = new Set([
            ...(_0x1765e5["armMeshes"] || []),
            ...(_0x1765e5["mergedArmMeshes"] || []),
            ...(_0x1765e5["wristMeshes"] || []),
          ]);
          for (const _0x311c8c of this["collectEffectMeshes"](
            _0x1765e5["weaponMeshes"] || [],
            null,
            _0x4472ac,
          ))
            _0x5d3d7d["add"](_0x311c8c);
        };
      for (const _0x23f9ac of this["game"]?.["players"]?.["list"] || [])
        _0x277be2(_0x23f9ac);
      if (
        this["me"] &&
        !this["game"]?.["players"]?.["list"]?.["includes"](this["me"])
      )
        _0x277be2(this["me"]);
      for (const _0x147129 of this["game"]?.["map"]?.["manager"]?.["pickups"] ||
        [])
        if (_0x147129?.["active"] !== ![]) {
          for (const _0x3c8f95 of this["collectEffectMeshes"]([
            _0x147129["meshRef"] || _0x147129["mesh"],
          ]))
            _0x5d3d7d["add"](_0x3c8f95);
        }
      return _0x5d3d7d;
    }
    ["firstPersonHandMeshes"](_0x163513) {
      if (this["renderer"]?.["showHands"] === ![]) return new Set();
      this["registerCosmeticLayers"](_0x163513);
      const _0x262f57 = new Set(_0x163513["armMeshes"] || []);
      (_0x262f57["add"](
        _0x163513["mergedArmMeshes"]?.[_0x163513["loadoutIndex"]],
      ),
        _0x262f57["add"](_0x163513["handsAnchor"]));
      for (const _0x63842b of _0x163513["wristMeshes"] || [])
        _0x262f57["add"](_0x63842b);
      (_0x262f57["delete"](undefined), _0x262f57["delete"](null));
      if (!_0x262f57["size"]) return new Set();
      const _0x3bdeac = this["collectEffectMeshes"](
        _0x262f57,
        _0x163513["objInstances"],
      );
      for (const _0x328c45 of _0x3bdeac)
        if (_0x328c45["material"] === this["renderer"]?.["invisMat"])
          _0x3bdeac["delete"](_0x328c45);
      return _0x3bdeac;
    }
    ["updateOwnedMeshEffect"](_0x2e0965, _0x5c0e63, _0x4cbc48, _0x7fe7d9) {
      const _0xd1550f = (this[_0x2e0965] ||= new Map());
      let _0x16bdea = 0x0;
      this["effectFailures"] ||= new Map();
      let _0x347c63 = this["effectFailures"]["get"](_0x2e0965);
      !_0x347c63 &&
        ((_0x347c63 = new WeakMap()),
        this["effectFailures"]["set"](_0x2e0965, _0x347c63));
      const _0x58ea26 = Date["now"]();
      for (const [_0x5a385c, _0x15ff26] of _0xd1550f)
        (!_0x5c0e63["has"](_0x5a385c) ||
          _0x15ff26["geometry"] !== _0x5a385c["geometry"] ||
          _0x15ff26["skeleton"] !== _0x5a385c["skeleton"]) &&
          (this["releaseCham"](_0x15ff26), _0xd1550f["delete"](_0x5a385c));
      for (const _0x41764f of _0x5c0e63) {
        const _0x25c752 = _0x347c63["get"](_0x41764f);
        if (
          _0x25c752?.["geometry"] === _0x41764f["geometry"] &&
          _0x25c752["skeleton"] === _0x41764f["skeleton"] &&
          _0x58ea26 - _0x25c752["at"] < 0x3e8
        ) {
          _0x16bdea++;
          continue;
        }
        try {
          let _0x31c4ae = _0xd1550f["get"](_0x41764f);
          if (!_0x31c4ae) {
            if (_0xd1550f["size"] >= 0x400) break;
            if (this["renderWorkCache"]) {
              if (this["renderWorkCache"]["newMeshes"] < _0x4cbc48) continue;
              this["renderWorkCache"]["newMeshes"] -= _0x4cbc48;
            }
            const _0x5933b7 = [];
            try {
              for (let _0x45efb8 = 0x0; _0x45efb8 < _0x4cbc48; _0x45efb8++) {
                _0x5933b7["push"](
                  this["createPooledEffectMesh"](
                    _0x41764f,
                    _0x2e0965,
                    _0x45efb8,
                  ),
                );
              }
            } catch (_0x476656) {
              this["releaseCham"]({ meshes: _0x5933b7 });
              throw _0x476656;
            }
            ((_0x31c4ae = {
              geometry: _0x41764f["geometry"],
              skeleton: _0x41764f["skeleton"],
              meshes: _0x5933b7,
            }),
              _0xd1550f["set"](_0x41764f, _0x31c4ae));
          }
          for (let _0x8cd5d9 = 0x0; _0x8cd5d9 < _0x4cbc48; _0x8cd5d9++) {
            const _0x2d7c54 = _0x31c4ae["meshes"][_0x8cd5d9];
            ((_0x2d7c54["layers"]["mask"] = this["effectLayerMask"](_0x41764f)),
              (_0x2d7c54["morphTargetInfluences"] =
                _0x41764f["morphTargetInfluences"]),
              _0x7fe7d9(_0x2d7c54, _0x8cd5d9, _0x41764f));
          }
          _0x347c63["delete"](_0x41764f);
        } catch (_0x5ee211) {
          const _0x336fdf = _0xd1550f["get"](_0x41764f);
          (_0x336fdf &&
            (this["releaseCham"](_0x336fdf), _0xd1550f["delete"](_0x41764f)),
            _0x347c63["set"](_0x41764f, {
              geometry: _0x41764f["geometry"],
              skeleton: _0x41764f["skeleton"],
              at: _0x58ea26,
            }),
            _0x16bdea++);
        }
      }
      return (
        _0xd1550f["size"] +
        "\x20meshes" +
        (_0x16bdea ? "\x20/\x20" + _0x16bdea + "\x20unsupported" : "")
      );
    }
    ["updateWeaponChams"]() {
      if (
        !this["settings"]["weaponChamsEnabled"] ||
        !this["isGameplayAllowed"]()
      ) {
        this["restoreMeshEffect"](this["weaponChamsMeshes"]);
        return;
      }
      if (!this["three"]?.["MeshBasicMaterial"] || !this["three"]?.["Mesh"]) {
        (this["restoreMeshEffect"](this["weaponChamsMeshes"]),
          (this["weaponChamsStatus"] = "material\x20API\x20unavailable"));
        return;
      }
      const _0x1821f9 = this["settings"]["weaponChamsUseTheme"]
          ? this["getTheme"]()
          : {
              primary: this["settings"]["weaponChamsColor"],
              secondary: this["settings"]["weaponChamsEndColor"],
            },
        _0x46bb9d = this["effectColor"](
          _0x1821f9["primary"],
          _0x1821f9["secondary"],
          this["settings"]["weaponChamsFade"],
          this["settings"]["chamsFadeSeconds"],
        );
      this["weaponChamsStatus"] = this["updateOwnedMeshEffect"](
        "weaponChamsMeshes",
        this["weaponEffectMeshes"](),
        0x1,
        (_0x5458e8) => {
          ((_0x5458e8["renderOrder"] = 0x2712),
            _0x5458e8["material"]["color"]["copy"](_0x46bb9d),
            (_0x5458e8["material"]["opacity"] =
              Math["max"](
                0x0,
                Math["min"](
                  0x64,
                  Number(this["settings"]["weaponChamsOpacity"]) || 0x0,
                ),
              ) / 0x64),
            (_0x5458e8["material"]["depthFunc"] =
              this["three"]["LessEqualDepth"]),
            (_0x5458e8["material"]["polygonOffset"] = !![]),
            (_0x5458e8["material"]["polygonOffsetFactor"] = -0x1),
            (_0x5458e8["material"]["polygonOffsetUnits"] = -0x1));
        },
      );
    }
    ["updateGlowESP"]() {
      if (!this["settings"]["glowEspEnabled"] || !this["isGameplayAllowed"]()) {
        this["restoreMeshEffect"](this["glowMeshes"]);
        return;
      }
      if (
        !this["three"]?.["MeshBasicMaterial"] ||
        this["three"]["BackSide"] == null ||
        this["three"]["AdditiveBlending"] == null
      ) {
        (this["restoreMeshEffect"](this["glowMeshes"]),
          (this["glowStatus"] = "material\x20API\x20unavailable"));
        return;
      }
      const _0x1f1095 = new Set(),
        _0x2ad92f = (_0x7fc919, _0x270134) => {
          if (
            !_0x7fc919 ||
            _0x7fc919 === this["me"] ||
            _0x7fc919["isYou"] ||
            _0x7fc919["active"] === ![] ||
            !(_0x7fc919["health"] > 0x0) ||
            (this["settings"]["espTeamCheck"] && this["isTeam"](_0x7fc919))
          )
            return;
          for (const _0x56cb88 of this["characterMeshes"](_0x7fc919, _0x270134))
            _0x1f1095["add"](_0x56cb88);
        };
      for (const _0x3532b5 of this["game"]?.["players"]?.["list"] || [])
        _0x2ad92f(_0x3532b5, ![]);
      if (this["settings"]["espBotCheck"]) {
        for (const _0x4590aa of this["game"]?.["AI"]?.["ais"] || [])
          _0x2ad92f(_0x4590aa, !![]);
      }
      const _0x4f12bc = this["getTheme"](),
        _0x4d95e9 = this["effectColor"](
          this["settings"]["glowUseTheme"]
            ? _0x4f12bc["primary"]
            : this["settings"]["glowColor"],
          _0x4f12bc["secondary"],
          this["settings"]["glowUseTheme"],
          0x3,
        ),
        _0xdea34b =
          Math["max"](
            0x1,
            Math["min"](0xf, Number(this["settings"]["glowSize"]) || 0x6),
          ) / 0x64,
        _0x457a6d =
          Math["max"](
            0x0,
            Math["min"](0x64, Number(this["settings"]["glowOpacity"]) || 0x0),
          ) / 0x64,
        _0x31b478 = new Set();
      for (const _0x4d8b58 of _0x1f1095) {
        if (_0x31b478["size"] >= 0x40) break;
        _0x31b478["add"](_0x4d8b58);
      }
      this["glowStatus"] = this["updateOwnedMeshEffect"](
        "glowMeshes",
        _0x31b478,
        0x2,
        (_0x58c938, _0x3d4cc3, _0x4ddaa3) => {
          const _0x104bf1 = _0x58c938["material"],
            _0x29a1ee = _0x4ddaa3["geometry"],
            _0x33d23e = _0x29a1ee["attributes"]?.["position"],
            _0x110fef = _0x29a1ee["attributes"]?.["normal"];
          if (
            !_0x33d23e ||
            !_0x110fef ||
            _0x33d23e["itemSize"] !== 0x3 ||
            _0x110fef["itemSize"] !== 0x3 ||
            _0x33d23e["isInterleavedBufferAttribute"] ||
            _0x110fef["isInterleavedBufferAttribute"] ||
            _0x33d23e["count"] !== _0x110fef["count"] ||
            _0x33d23e["count"] > 0x2000 ||
            _0x4ddaa3["isInstancedMesh"] ||
            _0x4ddaa3["isBatchedMesh"]
          )
            throw new Error("Unsupported\x20glow\x20geometry");
          const _0xfb6f3e = this["rigBounds"](_0x29a1ee);
          if (!_0xfb6f3e) throw new Error("Invalid\x20glow\x20bounds");
          const _0x4426fe = Math["max"](
              _0xfb6f3e["max"]["x"] - _0xfb6f3e["min"]["x"],
              _0xfb6f3e["max"]["y"] - _0xfb6f3e["min"]["y"],
              _0xfb6f3e["max"]["z"] - _0xfb6f3e["min"]["z"],
            ),
            _0x3547ed = Math["max"](
              0.001,
              Math["min"](
                0x2,
                (_0x4426fe * _0xdea34b * (_0x3d4cc3 + 0x1)) / 0x2,
              ),
            );
          ((this["ownedGlowGeometries"] ||= new WeakMap()),
            (this["glowMeshInputs"] ||= new WeakMap()));
          if (!this["ownedGlowGeometries"]["has"](_0x58c938)) {
            const _0x27b9f0 = _0x29a1ee["clone"]();
            (this["ownedGlowGeometries"]["set"](_0x58c938, _0x27b9f0),
              (_0x58c938["geometry"] = _0x27b9f0),
              this["glowMeshInputs"]["set"](_0x58c938, {
                attributes: new Map(
                  Object["entries"](_0x29a1ee["attributes"])["map"](
                    ([_0x57a706, _0x1eee67]) => [
                      _0x57a706,
                      { ref: _0x1eee67, version: _0x1eee67["version"] },
                    ],
                  ),
                ),
                index: _0x29a1ee["index"],
                indexVersion: _0x29a1ee["index"]?.["version"],
              }));
          }
          const _0x27f852 = this["glowMeshInputs"]["get"](_0x58c938),
            _0x133031 = (_0x5962d4) =>
              _0x27f852["attributes"]["get"](_0x5962d4)?.["ref"] !==
                _0x29a1ee["attributes"][_0x5962d4] ||
              _0x27f852["attributes"]["get"](_0x5962d4)?.["version"] !==
                _0x29a1ee["attributes"][_0x5962d4]?.["version"],
            _0x150af3 =
              _0x27f852["width"] !== _0x3547ed ||
              _0x133031("position") ||
              _0x133031("normal");
          for (const [_0x599afe, _0x13692a] of Object["entries"](
            _0x29a1ee["attributes"],
          )) {
            if (_0x599afe !== "position" && _0x133031(_0x599afe)) {
              const _0x4753c4 = _0x58c938["geometry"]["attributes"][_0x599afe];
              if (
                !_0x4753c4 ||
                _0x4753c4["count"] !== _0x13692a["count"] ||
                _0x4753c4["itemSize"] !== _0x13692a["itemSize"] ||
                _0x13692a["isInterleavedBufferAttribute"]
              )
                throw new Error("Changed\x20glow\x20layout");
              (_0x4753c4["array"]["set"](_0x13692a["array"]),
                (_0x4753c4["needsUpdate"] = !![]));
            }
          }
          if (
            _0x29a1ee["index"] &&
            (_0x27f852["index"] !== _0x29a1ee["index"] ||
              _0x27f852["indexVersion"] !== _0x29a1ee["index"]["version"])
          ) {
            if (
              _0x58c938["geometry"]["index"]?.["count"] !==
              _0x29a1ee["index"]["count"]
            )
              throw new Error("Changed\x20glow\x20topology");
            (_0x58c938["geometry"]["index"]["array"]["set"](
              _0x29a1ee["index"]["array"],
            ),
              (_0x58c938["geometry"]["index"]["needsUpdate"] = !![]));
          }
          if (_0x150af3) {
            const _0x23bc1e = _0x58c938["geometry"]["attributes"]["position"];
            if (
              _0x23bc1e["count"] !== _0x33d23e["count"] ||
              _0x23bc1e["itemSize"] !== _0x33d23e["itemSize"]
            )
              throw new Error("Changed\x20glow\x20layout");
            for (
              let _0x4472ae = 0x0;
              _0x4472ae < _0x33d23e["count"];
              _0x4472ae++
            ) {
              const _0x29d18d =
                  _0x33d23e["getX"](_0x4472ae) +
                  _0x110fef["getX"](_0x4472ae) * _0x3547ed,
                _0x4849a4 =
                  _0x33d23e["getY"](_0x4472ae) +
                  _0x110fef["getY"](_0x4472ae) * _0x3547ed,
                _0x43be93 =
                  _0x33d23e["getZ"](_0x4472ae) +
                  _0x110fef["getZ"](_0x4472ae) * _0x3547ed;
              if (!Number["isFinite"](_0x29d18d + _0x4849a4 + _0x43be93))
                throw new Error("Invalid\x20glow\x20vertex");
              _0x23bc1e["setXYZ"](_0x4472ae, _0x29d18d, _0x4849a4, _0x43be93);
            }
            _0x23bc1e["needsUpdate"] = !![];
            const _0xbaa8ee = (_0x58c938["geometry"]["boundingBox"] ||=
                new this["three"]["Box3"]()),
              _0x119c13 =
                _0x3547ed +
                Math["max"](
                  0.00001,
                  Math["abs"](_0xfb6f3e["min"]["x"]) * 0.000001,
                  Math["abs"](_0xfb6f3e["min"]["y"]) * 0.000001,
                  Math["abs"](_0xfb6f3e["min"]["z"]) * 0.000001,
                  Math["abs"](_0xfb6f3e["max"]["x"]) * 0.000001,
                  Math["abs"](_0xfb6f3e["max"]["y"]) * 0.000001,
                  Math["abs"](_0xfb6f3e["max"]["z"]) * 0.000001,
                );
            (_0xbaa8ee["min"]["set"](
              _0xfb6f3e["min"]["x"] - _0x119c13,
              _0xfb6f3e["min"]["y"] - _0x119c13,
              _0xfb6f3e["min"]["z"] - _0x119c13,
            ),
              _0xbaa8ee["max"]["set"](
                _0xfb6f3e["max"]["x"] + _0x119c13,
                _0xfb6f3e["max"]["y"] + _0x119c13,
                _0xfb6f3e["max"]["z"] + _0x119c13,
              ),
              _0xbaa8ee["getBoundingSphere"](
                (_0x58c938["geometry"]["boundingSphere"] ||= new this["three"][
                  "Sphere"
                ]()),
              ));
          }
          for (const [_0xf687ad, _0x117162] of Object["entries"](
            _0x29a1ee["attributes"],
          )) {
            let _0x2de172 = _0x27f852["attributes"]["get"](_0xf687ad);
            (!_0x2de172 &&
              ((_0x2de172 = {}),
              _0x27f852["attributes"]["set"](_0xf687ad, _0x2de172)),
              (_0x2de172["ref"] = _0x117162),
              (_0x2de172["version"] = _0x117162["version"]));
          }
          ((_0x27f852["index"] = _0x29a1ee["index"]),
            (_0x27f852["indexVersion"] = _0x29a1ee["index"]?.["version"]),
            (_0x27f852["width"] = _0x3547ed),
            (_0x58c938["renderOrder"] = 0x270d + _0x3d4cc3),
            (_0x104bf1["side"] = this["three"]["BackSide"]),
            (_0x104bf1["blending"] = this["three"]["AdditiveBlending"]),
            _0x104bf1["color"]["copy"](_0x4d95e9),
            (_0x104bf1["opacity"] = (_0x457a6d * (0x2 - _0x3d4cc3)) / 0x4));
        },
      );
    }
    ["clearTrailEffects"]() {
      (this["walkingTracks"]?.["clear"](),
        (this["bulletSegments"] = []),
        (this["visualTrailScene"] = null));
    }
    ["recordWalkingTrail"](_0x15bb37, _0x1dcd1d, _0x47a67d) {
      const _0x77bad = _0x15bb37["objInstances"] || _0x15bb37["mesh"],
        _0xb58b1f = (_0x77bad && this["modelPoint"](_0x77bad)) || _0x15bb37;
      if (
        ![_0xb58b1f?.["x"], _0xb58b1f?.["y"], _0xb58b1f?.["z"]]["every"](
          Number["isFinite"],
        )
      )
        return;
      this["walkingTracks"] ||= new Map();
      let _0x33456e = this["walkingTracks"]["get"](_0x15bb37);
      if (!_0x33456e) {
        if (this["walkingTracks"]["size"] >= 0x40) return;
        ((_0x33456e = []), this["walkingTracks"]["set"](_0x15bb37, _0x33456e));
      }
      while (
        _0x33456e["length"] &&
        _0x1dcd1d - _0x33456e[0x0]["at"] > _0x47a67d
      )
        _0x33456e["shift"]();
      const _0xe26503 = _0x33456e[_0x33456e["length"] - 0x1],
        _0xf6cbea = _0xe26503
          ? (_0xb58b1f["x"] - _0xe26503["x"]) ** 0x2 +
            (_0xb58b1f["y"] + 0.08 - _0xe26503["y"]) ** 0x2 +
            (_0xb58b1f["z"] - _0xe26503["z"]) ** 0x2
          : 0x0;
      if (_0xe26503 && (_0x1dcd1d < _0xe26503["at"] || _0xf6cbea > 0x40 ** 0x2))
        _0x33456e["length"] = 0x0;
      if (
        !_0x33456e["length"] ||
        (_0x1dcd1d - _0xe26503["at"] >= 0x3c && _0xf6cbea > 0.15 ** 0x2)
      )
        _0x33456e["push"]({
          x: _0xb58b1f["x"],
          y: _0xb58b1f["y"] + 0.08,
          z: _0xb58b1f["z"],
          at: _0x1dcd1d,
        });
      if (_0x33456e["length"] > 0x80)
        _0x33456e["splice"](0x0, _0x33456e["length"] - 0x80);
    }
    ["restoreShotObservers"]() {
      const _0x27783a = this["shotObserverState"];
      ((this["shotObserverState"] = null), (this["nativeShotContext"] = null));
      for (const _0x4e6869 of _0x27783a?.["records"] || [])
        try {
          if (
            Object["getOwnPropertyDescriptor"](
              _0x4e6869["object"],
              _0x4e6869["key"],
            )?.["value"] === _0x4e6869["wrapper"]
          )
            Object["defineProperty"](
              _0x4e6869["object"],
              _0x4e6869["key"],
              _0x4e6869["descriptor"],
            );
        } catch (_0x350e32) {}
      this["seedVerifiedWeapons"] = null;
    }
    ["updateShotObservers"]() {
      const _0x573699 =
          this["settings"]["bulletTracersEnabled"] ||
          (this["settings"]["autoFireEnabled"] &&
            this["settings"]["autoFireSeedEnabled"]),
        _0x5c1e23 = this["fromPage"](this["game"]?.["players"]),
        _0x141393 = this["fromPage"](this["game"]?.["map"]?.["manager"]),
        _0x33ed92 = this["fromPage"](this["game"]?.["particles"]),
        _0x1cb161 = this["shotObserverState"];
      if (
        _0x1cb161 &&
        (_0x1cb161["players"] !== _0x5c1e23 ||
          _0x1cb161["manager"] !== _0x141393 ||
          _0x1cb161["particles"] !== _0x33ed92)
      )
        this["restoreShotObservers"]();
      if (!_0x573699 || !this["me"] || !this["isGameplayAllowed"]()) {
        this["restoreShotObservers"]();
        return;
      }
      if (this["shotObserverState"]) return;
      const _0x40d21d = Date["now"]();
      if (
        this["shotObserverRetry"]?.["players"] === _0x5c1e23 &&
        this["shotObserverRetry"]["manager"] === _0x141393 &&
        _0x40d21d - this["shotObserverRetry"]["at"] < 0x3e8
      )
        return;
      this["shotObserverRetry"] = {
        players: _0x5c1e23,
        manager: _0x141393,
        at: _0x40d21d,
      };
      const _0x1457ed = [
        [_0x5c1e23, "shoot", 0x7, "shoot"],
        [_0x141393, "rayCandidates", 0x6, "ray"],
      ];
      if (typeof this["predictionObject"](_0x33ed92, "effect") === "function")
        _0x1457ed["push"]([_0x33ed92, "effect", 0x7, "impact"]);
      const _0x5624b5 = _0x1457ed["map"](
        ([_0x1b8904, _0x1fca96, _0xec131b]) => {
          try {
            const _0x2338ce = Object["getOwnPropertyDescriptor"](
              _0x1b8904,
              _0x1fca96,
            );
            return _0x2338ce &&
              typeof _0x2338ce["value"] === "function" &&
              _0x2338ce["value"]["length"] === _0xec131b &&
              (_0x2338ce["writable"] || _0x2338ce["configurable"])
              ? _0x2338ce
              : null;
          } catch (_0x4671dc) {
            return null;
          }
        },
      );
      if (_0x5624b5["some"]((_0x40cad0) => !_0x40cad0)) {
        this["bulletTracerStatus"] =
          "native\x20shot\x20observer\x20unavailable:\x20" +
          _0x1457ed["filter"]((_0x12f6d1, _0x36b955) => !_0x5624b5[_0x36b955])
            ["map"]((_0x5b454a) => _0x5b454a[0x1])
            ["join"](",\x20");
        return;
      }
      const _0x28faec = this,
        _0x23aca7 = {
          players: _0x5c1e23,
          manager: _0x141393,
          particles: _0x33ed92,
          records: [],
        };
      this["shotObserverState"] = _0x23aca7;
      try {
        (_0x1457ed["forEach"](
          ([_0xbda40d, _0x2326ac, , _0x3c63d4], _0x15e7d7) => {
            const _0xcacd45 = _0x5624b5[_0x15e7d7],
              _0x2e1385 = _0xcacd45["value"],
              _0x3be3ce = this["toPageFunction"](function (..._0x227851) {
                if (_0x3c63d4 === "shoot") {
                  const _0x380684 = _0x28faec["nativeShotContext"];
                  let _0x3658b4 = null;
                  try {
                    const _0x14e0fb = _0x28faec["fromPage"](_0x227851[0x0]);
                    if (
                      _0x28faec["isGameplayAllowed"]() &&
                      _0x14e0fb?.["weapon"] &&
                      !_0x14e0fb["recon"] &&
                      !_0x14e0fb["weapon"]["melee"] &&
                      !_0x14e0fb["weapon"]["noDmg"] &&
                      (_0x14e0fb === _0x28faec["me"] ||
                        (_0x28faec["settings"]["bulletTracersOthers"] &&
                          _0x14e0fb["active"] &&
                          _0x14e0fb["health"] > 0x0 &&
                          !(
                            _0x28faec["settings"]["espTeamCheck"] &&
                            _0x28faec["isTeam"](_0x14e0fb)
                          )))
                    )
                      _0x3658b4 = {
                        player: _0x14e0fb,
                        weapon: _0x14e0fb["weapon"],
                        args: _0x227851,
                        snapshot: _0x28faec["nativeShotSnapshot"](_0x14e0fb),
                        rays: 0x0,
                        latest: null,
                      };
                  } catch (_0x53078f) {}
                  _0x28faec["nativeShotContext"] = _0x3658b4;
                  const _0x3352b7 = [];
                  try {
                    if (_0x3658b4) {
                      for (const _0x2b292b of _0x23aca7["records"])
                        if (_0x2b292b["key"] !== "shoot")
                          try {
                            const _0x5a061c = Object[
                              "getOwnPropertyDescriptor"
                            ](_0x2b292b["object"], _0x2b292b["key"]);
                            _0x5a061c?.["value"] ===
                              _0x2b292b["descriptor"]["value"] &&
                              (Object["defineProperty"](
                                _0x2b292b["object"],
                                _0x2b292b["key"],
                                { ..._0x5a061c, value: _0x2b292b["wrapper"] },
                              ),
                              _0x3352b7["push"](_0x2b292b));
                          } catch (_0xe5d36b) {}
                    }
                    return Reflect["apply"](
                      _0x2e1385,
                      _0x28faec["fromPage"](this),
                      _0x227851,
                    );
                  } finally {
                    for (const _0x513c5b of _0x3352b7)
                      try {
                        if (
                          Object["getOwnPropertyDescriptor"](
                            _0x513c5b["object"],
                            _0x513c5b["key"],
                          )?.["value"] === _0x513c5b["wrapper"]
                        )
                          Object["defineProperty"](
                            _0x513c5b["object"],
                            _0x513c5b["key"],
                            _0x513c5b["descriptor"],
                          );
                      } catch (_0x116b80) {}
                    _0x28faec["nativeShotContext"] = _0x380684;
                  }
                }
                const _0x576675 = Reflect["apply"](
                  _0x2e1385,
                  _0x28faec["fromPage"](this),
                  _0x227851,
                );
                try {
                  if (_0x28faec["nativeShotContext"]) {
                    if (_0x3c63d4 === "ray")
                      _0x28faec["observeNativeShotRay"](_0x227851);
                    else _0x28faec["observeNativeShotImpact"](_0x227851);
                  }
                } catch (_0x329630) {
                  ((_0x28faec["bulletTracerStatus"] =
                    "incompatible\x20shot\x20data;\x20native\x20game\x20unchanged"),
                    _0x28faec["failedHooks"]["add"]("native-shots"),
                    (_0x28faec["hookErrors"] ||= new Map()),
                    _0x28faec["hookErrors"]["set"](
                      "native-shots",
                      String(_0x329630?.["message"] || _0x329630)["slice"](
                        0x0,
                        0x1f4,
                      ),
                    ),
                    _0x28faec["restoreShotObservers"]());
                }
                return _0x576675;
              });
            _0x23aca7["records"]["push"]({
              object: _0xbda40d,
              key: _0x2326ac,
              descriptor: _0xcacd45,
              wrapper: _0x3be3ce,
            });
            if (_0x3c63d4 === "shoot")
              Object["defineProperty"](_0xbda40d, _0x2326ac, {
                ..._0xcacd45,
                value: _0x3be3ce,
              });
          },
        ),
          (this["shotObserverRetry"] = null),
          (this["seedVerifiedWeapons"] = new WeakSet()),
          (this["seedRejectedWeapons"] = new WeakSet()),
          (this["bulletTracerStatus"] =
            "observing\x20native\x20spread\x20rays\x20during\x20shots\x20only"),
          this["updateTrails"]());
      } catch (_0xf96dd1) {
        this["restoreShotObservers"]();
        throw _0xf96dd1;
      }
    }
    ["nativeShotSnapshot"](_0x1e3567) {
      const _0x311e23 = _0x1e3567["weapon"],
        _0x3e5b99 = _0x1e3567["ammos"]?.[_0x1e3567["loadoutIndex"]];
      return {
        ammo: _0x3e5b99,
        spread: _0x1e3567["spread"],
        spreadMlt: _0x1e3567["spreadMlt"],
        innac: _0x311e23["innac"] || 0x0,
        noSpread: !!_0x311e23["noSpread"],
        recoil: _0x1e3567["noRecoil"]
          ? 0x0
          : 0.3 * (Number(_0x1e3567["recoilAnimY"]) || 0x0),
        yaw: _0x1e3567["xDire"],
        pitch: _0x1e3567["yDire"],
        unlimited: !!_0x1e3567["unlimitedAmmo"],
        config: _0x1e3567["config"],
      };
    }
    ["observeNativeShotRay"](_0x264815) {
      const _0x5d6d53 = this["nativeShotContext"];
      if (
        !_0x5d6d53 ||
        _0x5d6d53["rays"] >= 0x20 ||
        _0x264815["length"] < 0x6 ||
        !_0x264815["slice"](0x0, 0x6)["every"](Number["isFinite"])
      )
        return;
      const [_0x16fd5d, _0x2cc255, _0x154275, _0x416960, _0x11f17b, _0x283205] =
          _0x264815,
        _0x1672bd = Math["hypot"](_0x416960, _0x11f17b, _0x283205);
      if (!(_0x1672bd > 0x0 && _0x1672bd <= 0x186a0)) return;
      const _0x345728 =
        Number(_0x5d6d53["weapon"]["range"]) *
        Number(_0x5d6d53["player"]["rangeMlt"] || 0x1);
      if (
        _0x5d6d53["weapon"]["physPow"] ||
        _0x5d6d53["weapon"]["projectile"] ||
        !Number["isFinite"](_0x345728) ||
        Math["abs"](_0x1672bd - _0x345728) >
          Math["max"](0.001, _0x345728 * 1e-8)
      )
        return;
      const _0x334667 = { x: _0x16fd5d, y: _0x2cc255, z: _0x154275 },
        _0x1ba29d = {
          x: _0x416960 / _0x1672bd,
          y: _0x11f17b / _0x1672bd,
          z: _0x283205 / _0x1672bd,
        };
      let _0x266e69 = null;
      try {
        const _0x462ca3 =
          _0x5d6d53["player"]["weaponMeshes"]?.[
            _0x5d6d53["player"]["loadoutIndex"]
          ]?.["muzzles"]?.[0x0];
        if (_0x462ca3) _0x266e69 = this["modelPoint"](_0x462ca3);
      } catch (_0x23a009) {}
      const _0x13a7c5 = {
        a: _0x334667,
        b: {
          x: _0x16fd5d + _0x416960,
          y: _0x2cc255 + _0x11f17b,
          z: _0x154275 + _0x283205,
        },
        muzzle: _0x266e69,
        direction: _0x1ba29d,
        range: _0x1672bd,
        at: Date["now"](),
        player: _0x5d6d53["player"],
        native: !![],
        endpoint: "range",
      };
      ((_0x5d6d53["latest"] = _0x13a7c5), _0x5d6d53["rays"]++);
      if (this["settings"]["bulletTracersEnabled"]) {
        this["visualTrailScene"] !== this["renderer"]?.["scene"] &&
          (this["clearTrailEffects"](),
          (this["visualTrailScene"] = this["renderer"]?.["scene"]));
        ((this["bulletSegments"] ||= []),
          this["bulletSegments"]["push"](_0x13a7c5));
        if (this["bulletSegments"]["length"] > 0x80)
          this["bulletSegments"]["splice"](
            0x0,
            this["bulletSegments"]["length"] - 0x80,
          );
      }
      if (
        _0x5d6d53["player"] === this["me"] &&
        _0x5d6d53["rays"] === 0x1 &&
        !_0x5d6d53["weapon"]["cSpread"] &&
        (_0x5d6d53["weapon"]["shots"] ?? 0x1) === 0x1 &&
        !_0x5d6d53["args"][0x5]
      ) {
        const _0x5743fd = _0x5d6d53["snapshot"],
          _0x3daf4e = this["seedSpreadOffsets"](_0x5743fd, _0x5d6d53["weapon"]),
          _0x25c395 = _0x5743fd["config"];
        if (
          _0x3daf4e &&
          (!_0x25c395 ||
            (!_0x25c395["shtToCam"] &&
              (_0x25c395["shtDrg"] == null || _0x25c395["shtDrg"] === 0x1) &&
              !_0x25c395["shotX"] &&
              !_0x25c395["shotY"]))
        ) {
          const _0x10fb40 = _0x5743fd["yaw"] + _0x3daf4e["yaw"],
            _0x1d63bd =
              _0x5743fd["pitch"] + _0x5743fd["recoil"] + _0x3daf4e["pitch"],
            _0x5ed928 = Math["hypot"](
              _0x1ba29d["x"] + Math["sin"](_0x10fb40) * Math["cos"](_0x1d63bd),
              _0x1ba29d["y"] - Math["sin"](_0x1d63bd),
              _0x1ba29d["z"] + Math["cos"](_0x10fb40) * Math["cos"](_0x1d63bd),
            );
          _0x5ed928 < 1e-7
            ? (this["seedVerifiedWeapons"]?.["add"](_0x5d6d53["weapon"]),
              this["seedRejectedWeapons"]?.["delete"](_0x5d6d53["weapon"]),
              (this["seedStatus"] = "native\x20spread\x20model\x20validated"))
            : (this["seedVerifiedWeapons"]?.["delete"](_0x5d6d53["weapon"]),
              this["seedRejectedWeapons"]?.["add"](_0x5d6d53["weapon"]),
              (this["seedStatus"] =
                "native\x20spread\x20mismatch;\x20using\x20ordinary\x20ADS\x20auto\x20fire"));
        }
      }
      this["bulletTracerStatus"] =
        "exact\x20native\x20ray;\x20range\x20endpoint\x20until\x20native\x20impact\x20is\x20observed";
    }
    ["observeNativeShotImpact"](_0x5e0ec8) {
      const _0x4061ab = this["nativeShotContext"]?.["latest"];
      if (
        !_0x4061ab ||
        !_0x5e0ec8["slice"](0x0, 0x3)["every"](Number["isFinite"])
      )
        return;
      const [_0x420719, _0x427fbf, _0x38ec7d] = _0x5e0ec8,
        _0x36a0ec = {
          x: _0x420719 - _0x4061ab["a"]["x"],
          y: _0x427fbf - _0x4061ab["a"]["y"],
          z: _0x38ec7d - _0x4061ab["a"]["z"],
        },
        _0x574326 = _0x4061ab["direction"],
        _0x2bd313 =
          _0x36a0ec["x"] * _0x574326["x"] +
          _0x36a0ec["y"] * _0x574326["y"] +
          _0x36a0ec["z"] * _0x574326["z"];
      if (
        _0x2bd313 < 0x0 ||
        _0x2bd313 > _0x4061ab["range"] + 0.001 ||
        Math["hypot"](
          _0x36a0ec["x"] - _0x574326["x"] * _0x2bd313,
          _0x36a0ec["y"] - _0x574326["y"] * _0x2bd313,
          _0x36a0ec["z"] - _0x574326["z"] * _0x2bd313,
        ) > 0.0001
      )
        return;
      ((_0x4061ab["b"] = { x: _0x420719, y: _0x427fbf, z: _0x38ec7d }),
        (_0x4061ab["endpoint"] = "native-impact"));
    }
    ["nativeSeedUnit"](_0x1386c5) {
      if (!Number["isSafeInteger"](_0x1386c5) || _0x1386c5 < 0x0) return null;
      if (!this["seedSpreadTable"]) {
        const _0x477f9e = [],
          _0x4a1e4e = "KRUNKER",
          _0x328b1d = Array["from"](
            { length: 0x100 },
            (_0x530eff, _0x4eef9e) => _0x4eef9e,
          );
        let _0x1383ba = 0x0,
          _0xfd300f = 0x0,
          _0x165c3b = 0x0;
        for (let _0x55ab3e = 0x0; _0x55ab3e < _0x4a1e4e["length"]; _0x55ab3e++)
          _0x477f9e[_0x55ab3e & 0xff] =
            0xff &
            ((_0x1383ba ^= 0x13 * (_0x477f9e[_0x55ab3e & 0xff] ?? 0x0)) +
              _0x4a1e4e["charCodeAt"](_0x55ab3e));
        for (
          let _0x378c50 = 0x0, _0x34449a = 0x0;
          _0x378c50 < 0x100;
          _0x378c50++
        ) {
          const _0x5f4779 = _0x328b1d[_0x378c50];
          ((_0x34449a =
            (_0x34449a +
              _0x477f9e[_0x378c50 % _0x477f9e["length"]] +
              _0x5f4779) &
            0xff),
            (_0x328b1d[_0x378c50] = _0x328b1d[_0x34449a]),
            (_0x328b1d[_0x34449a] = _0x5f4779));
        }
        const _0x5cfb2b = (_0x36b455) => {
          let _0x46e8dc = 0x0;
          while (_0x36b455--) {
            const _0x290553 = _0x328b1d[(_0xfd300f = (_0xfd300f + 0x1) & 0xff)];
            ((_0x328b1d[_0x165c3b] = _0x290553),
              (_0x165c3b = (_0x165c3b + _0x290553) & 0xff),
              (_0x328b1d[_0xfd300f] = _0x328b1d[_0x165c3b]),
              (_0x46e8dc =
                _0x46e8dc * 0x100 +
                _0x328b1d[(_0x328b1d[_0xfd300f] + _0x290553) & 0xff]));
          }
          return _0x46e8dc;
        };
        (_0x5cfb2b(0x100),
          (this["seedSpreadTable"] = Array["from"]({ length: 0x3e8 }, () => {
            let _0x359e2c = _0x5cfb2b(0x6),
              _0x2c8fe5 = 0x1000000000000,
              _0x28343e = 0x0;
            while (_0x359e2c < 0x10000000000000) {
              ((_0x359e2c = 0x100 * (_0x359e2c + _0x28343e)),
                (_0x2c8fe5 *= 0x100),
                (_0x28343e = _0x5cfb2b(0x1)));
            }
            while (_0x359e2c >= 0x20000000000000) {
              ((_0x359e2c /= 0x2), (_0x2c8fe5 /= 0x2), (_0x28343e >>>= 0x1));
            }
            return (_0x359e2c + _0x28343e) / _0x2c8fe5;
          })));
      }
      return this["seedSpreadTable"][_0x1386c5 % 0x3e8];
    }
    ["seedSpreadOffsets"](_0x5cf675, _0x52a585) {
      if (
        !_0x5cf675 ||
        _0x52a585["melee"] ||
        _0x52a585["projectile"] ||
        _0x52a585["cSpread"] ||
        _0x52a585["physPow"] ||
        _0x52a585["noDmg"] ||
        _0x52a585["chrgTime"] ||
        _0x52a585["fullChrgSht"] ||
        (_0x52a585["shots"] ?? 0x1) !== 0x1 ||
        !Number["isInteger"](_0x5cf675["ammo"]) ||
        _0x5cf675["ammo"] <= 0x0 ||
        ![_0x5cf675["spread"], _0x5cf675["spreadMlt"], _0x5cf675["innac"]][
          "every"
        ](Number["isFinite"])
      )
        return null;
      const _0x327831 = Math["max"](
          0x0,
          _0x5cf675["ammo"] - (_0x5cf675["unlimited"] ? 0x0 : 0x1),
        ),
        _0x3bdb11 =
          (_0x5cf675["spread"] * _0x5cf675["spreadMlt"] + _0x5cf675["innac"]) *
          0.00063;
      if (!(_0x3bdb11 >= 0x0 && _0x3bdb11 <= Math["PI"] / 0x2)) return null;
      return {
        yaw: (0x2 * this["nativeSeedUnit"](_0x327831) - 0x1) * _0x3bdb11,
        pitch:
          (0x2 * this["nativeSeedUnit"](_0x327831 + 0x1) - 0x1) * _0x3bdb11,
      };
    }
    ["predictHipfireOffsets"](_0x5a6030) {
      const _0x1480a3 = this["me"],
        _0x90e5aa = _0x1480a3?.["weapon"];
      this["seedWaitingForUnscope"] = ![];
      const _0x54c790 = (_0x498e7c) => {
        return (
          (this["seedStatus"] =
            _0x498e7c +
            ";\x20ordinary\x20ADS\x20auto\x20fire\x20remains\x20active"),
          null
        );
      };
      if (!_0x90e5aa || this["seedRejectedWeapons"]?.["has"](_0x90e5aa))
        return _0x54c790("native\x20spread\x20model\x20unavailable/mismatched");
      const _0x690d0f = this["nativeShotSnapshot"](_0x1480a3),
        _0x2444cb = _0x1480a3["config"];
      if (
        _0x2444cb &&
        (_0x2444cb["shtToCam"] ||
          (_0x2444cb["shtDrg"] != null && _0x2444cb["shtDrg"] !== 0x1) ||
          _0x2444cb["shotX"] ||
          _0x2444cb["shotY"])
      )
        return _0x54c790("custom\x20shot\x20directions\x20unsupported");
      const _0x2627cd = Number(this["game"]?.["config"]?.["deltaMlt"]) || 0x1,
        _0x40f9ac = Number(_0x1480a3["deltaDiv"]) || 0x1;
      let _0x44f1f9 =
        Math["max"](_0x2627cd, Math["min"](Number(_0x5a6030[0x1]), 0x21)) /
        _0x40f9ac;
      if (!_0x44f1f9 || _0x44f1f9 < _0x2627cd) _0x44f1f9 = _0x2627cd;
      if (
        !Number["isFinite"](_0x44f1f9) ||
        _0x44f1f9 <= 0x0 ||
        _0x44f1f9 > 0x64 ||
        _0x5a6030[0xa] ||
        _0x5a6030[0xb]
      )
        return _0x54c790("native\x20tick/weapon\x20transition\x20unsupported");
      let _0x405e6e = 0x0,
        _0x32b6ec = 0x0;
      if (!_0x1480a3["noRecoil"]) {
        if (
          ![
            _0x1480a3["recoilForce"],
            _0x1480a3["recoilAnim"],
            _0x1480a3["recoilAnimY"],
            _0x1480a3["crouchVal"],
          ]["every"](Number["isFinite"])
        )
          return _0x54c790("native\x20recoil\x20fields\x20unavailable");
        if (
          Math["abs"](_0x1480a3["recoilForce"]) +
            Math["abs"](_0x1480a3["recoilAnim"]) +
            Math["abs"](_0x1480a3["recoilAnimY"]) >
          1e-10
        ) {
          const _0x33c394 = _0x90e5aa["recover"],
            _0x3ec481 = _0x90e5aa["recoverY"] || _0x33c394;
          if (
            ![_0x33c394, _0x3ec481]["every"](
              (_0x414161) =>
                Number["isFinite"](_0x414161) &&
                _0x414161 >= 0x0 &&
                _0x414161 <= 0x1,
            )
          )
            return _0x54c790(
              "native\x20recovery\x20coefficients\x20unavailable",
            );
          ((_0x32b6ec =
            (_0x1480a3["recoilAnim"] + _0x1480a3["recoilForce"] * _0x44f1f9) *
            Math["pow"](_0x33c394, _0x44f1f9)),
            (_0x405e6e =
              0.3 *
              (_0x1480a3["recoilAnimY"] +
                _0x1480a3["recoilForce"] *
                  (_0x90e5aa["recoilY"] || 0x1) *
                  (0x1 - 0.3 * _0x1480a3["crouchVal"]) *
                  _0x44f1f9) *
              Math["pow"](_0x3ec481, _0x44f1f9)));
        }
      }
      if (!_0x90e5aa["noSpread"]) {
        const _0xede72 = _0x1480a3["velocity"];
        if (
          !_0xede72 ||
          ![
            _0xede72["x"],
            _0xede72["y"],
            _0xede72["z"],
            _0x1480a3["spreadPlus"],
            _0x1480a3["crouchVal"],
            _0x90e5aa["spread"],
          ]["every"](Number["isFinite"]) ||
          Math["hypot"](_0xede72["x"], _0xede72["y"], _0xede72["z"]) >
            0.00001 ||
          (_0x1480a3["crouchVal"] !== 0x0 && _0x1480a3["crouchVal"] !== 0x1) ||
          (_0x5a6030[0x4] != null && _0x5a6030[0x4] !== -0x1) ||
          _0x5a6030[0x7] ||
          !!_0x5a6030[0x9] !== !!_0x1480a3["crouchVal"]
        )
          return _0x54c790("movement/crouch\x20prediction\x20not\x20stable");
        _0x690d0f["spread"] = Math["max"](
          _0x90e5aa["minSpread"] || 0x0,
          _0x90e5aa["spread"] * (0x1 - 0.55 * _0x1480a3["crouchVal"]) +
            0xf0 * _0x32b6ec +
            _0x1480a3["spreadPlus"] * Math["pow"](0.985, _0x44f1f9),
        );
      } else _0x690d0f["spread"] = 0x0;
      const _0x334823 = this["seedSpreadOffsets"](_0x690d0f, _0x90e5aa);
      if (!_0x334823)
        return _0x54c790(
          "unsupported\x20weapon\x20or\x20ammo/spread\x20fields",
        );
      if (_0x1480a3["aimVal"] !== 0x1)
        return (
          (this["seedWaitingForUnscope"] = !![]),
          (this["seedStatus"] = "unscoping\x20for\x20seed\x20hipfire"),
          null
        );
      return (
        (this["seedStatus"] = this["seedVerifiedWeapons"]?.["has"](_0x90e5aa)
          ? "observed\x20spread\x20verified;\x20compensating\x20next\x20native\x20tick"
          : "using\x20checked\x20native\x20spread\x20model;\x20first\x20shot\x20will\x20verify\x20it"),
        { ..._0x334823, recoil: _0x405e6e }
      );
    }
    ["segmentBoxHit"](_0x89ea65, _0x5b9d88, _0x269374, _0x238ba7) {
      let _0x4e206b = 0x0,
        _0x492a57 = _0x269374;
      for (const [_0x3a6229, _0x2641dc] of [
        ["x", "width"],
        ["y", "height"],
        ["z", "length"],
      ]) {
        if (
          !Number["isFinite"](_0x238ba7[_0x3a6229]) ||
          !Number["isFinite"](_0x238ba7[_0x2641dc]) ||
          _0x238ba7[_0x2641dc] < 0x0
        )
          return null;
        const _0x2f3012 = _0x238ba7[_0x3a6229] - _0x238ba7[_0x2641dc],
          _0x38a225 = _0x238ba7[_0x3a6229] + _0x238ba7[_0x2641dc],
          _0x14b123 = _0x5b9d88[_0x3a6229];
        if (Math["abs"](_0x14b123) < 1e-10) {
          if (
            _0x89ea65[_0x3a6229] < _0x2f3012 ||
            _0x89ea65[_0x3a6229] > _0x38a225
          )
            return null;
          continue;
        }
        const _0x473057 = (_0x2f3012 - _0x89ea65[_0x3a6229]) / _0x14b123,
          _0x8f138f = (_0x38a225 - _0x89ea65[_0x3a6229]) / _0x14b123;
        ((_0x4e206b = Math["max"](
          _0x4e206b,
          Math["min"](_0x473057, _0x8f138f),
        )),
          (_0x492a57 = Math["min"](
            _0x492a57,
            Math["max"](_0x473057, _0x8f138f),
          )));
        if (_0x4e206b > _0x492a57) return null;
      }
      return _0x4e206b;
    }
    ["drawFadedTrail"](
      _0x2a56ae,
      _0x2561bc,
      _0x453611,
      _0x5347f1,
      _0x1dbe29,
      _0x148abd = null,
    ) {
      if (!this["ctx"] || !(_0x453611 > 0x0)) return;
      const _0x1db1c2 = this["projectBoneSegment"]([_0x2a56ae, _0x2561bc]);
      if (!_0x1db1c2) return;
      const [_0x5bd9f8, _0x9682e4] = _0x1db1c2,
        _0x1491f3 = _0x148abd || _0x5bd9f8,
        _0x5db43e = this["ctx"];
      _0x5db43e["save"]();
      try {
        const _0x53aa74 = _0x5db43e["createLinearGradient"](
          _0x1491f3["x"],
          _0x1491f3["y"],
          _0x9682e4["x"],
          _0x9682e4["y"],
        );
        (_0x53aa74["addColorStop"](0x0, _0x1dbe29["primary"]),
          _0x53aa74["addColorStop"](0x1, _0x1dbe29["secondary"]),
          (_0x5db43e["globalAlpha"] = Math["min"](0x1, _0x453611)),
          (_0x5db43e["strokeStyle"] = _0x53aa74),
          (_0x5db43e["shadowColor"] = _0x1dbe29["secondary"]),
          (_0x5db43e["shadowBlur"] = 0xa),
          (_0x5db43e["lineWidth"] = _0x5347f1),
          (_0x5db43e["lineCap"] = "round"),
          _0x5db43e["beginPath"](),
          Math["hypot"](
            _0x1491f3["x"] - _0x9682e4["x"],
            _0x1491f3["y"] - _0x9682e4["y"],
          ) < 0.5 && typeof _0x5db43e["arc"] === "function"
            ? ((_0x5db43e["fillStyle"] = _0x1dbe29["secondary"]),
              _0x5db43e["arc"](
                _0x9682e4["x"],
                _0x9682e4["y"],
                Math["max"](1.5, _0x5347f1),
                0x0,
                Math["PI"] * 0x2,
              ),
              _0x5db43e["fill"]())
            : (_0x5db43e["moveTo"](_0x1491f3["x"], _0x1491f3["y"]),
              _0x5db43e["lineTo"](_0x9682e4["x"], _0x9682e4["y"]),
              _0x5db43e["stroke"]()));
      } finally {
        _0x5db43e["restore"]();
      }
    }
    ["updateVisualTrails"]() {
      if (
        (!this["settings"]["walkingTrailsEnabled"] &&
          !this["settings"]["bulletTracersEnabled"]) ||
        !this["isGameplayAllowed"]()
      ) {
        this["clearTrailEffects"]();
        return;
      }
      this["visualTrailScene"] !== this["renderer"]?.["scene"] &&
        (this["clearTrailEffects"](),
        (this["visualTrailScene"] = this["renderer"]?.["scene"]));
      const _0x2c85a9 = Date["now"](),
        _0x2232c3 = this["espPalette"](),
        _0x357768 =
          this["settings"]["trailUseTheme"] === ![]
            ? {
                primary: this["normalizeColor"](
                  this["settings"]["trailColor"],
                  "#ffb7d5",
                ),
                secondary: this["normalizeColor"](
                  this["settings"]["trailEndColor"],
                  "#a9dcff",
                ),
              }
            : this["getTheme"](),
        _0x2c3b70 = new Set([this["me"]]);
      if (
        this["settings"]["walkingTrailsOthers"] ||
        this["settings"]["bulletTracersOthers"]
      ) {
        for (const _0x56f0eb of this["game"]?.["players"]?.["list"] || [])
          if (
            _0x56f0eb &&
            !_0x56f0eb["isYou"] &&
            _0x56f0eb["active"] &&
            _0x56f0eb["health"] > 0x0 &&
            !(this["settings"]["espTeamCheck"] && this["isTeam"](_0x56f0eb)) &&
            _0x2c3b70["size"] < 0x40
          )
            _0x2c3b70["add"](_0x56f0eb);
      }
      const _0x57770a =
        Math["max"](
          0.5,
          Math["min"](
            0x8,
            Number(this["settings"]["walkingTrailSeconds"]) || 0x2,
          ),
        ) * 0x3e8;
      if (this["settings"]["walkingTrailsEnabled"]) {
        let _0x2abeda = 0x80;
        for (const _0x403a34 of _0x2c3b70)
          if (
            _0x403a34 &&
            (_0x403a34 === this["me"] ||
              this["settings"]["walkingTrailsOthers"])
          )
            this["recordWalkingTrail"](_0x403a34, _0x2c85a9, _0x57770a);
        for (const [_0x17140a, _0x3fb9f1] of this["walkingTracks"] || []) {
          if (
            !_0x2c3b70["has"](_0x17140a) ||
            _0x17140a["active"] === ![] ||
            _0x17140a["health"] <= 0x0 ||
            (_0x17140a !== this["me"] &&
              !this["settings"]["walkingTrailsOthers"])
          ) {
            this["walkingTracks"]["delete"](_0x17140a);
            continue;
          }
          while (
            _0x3fb9f1["length"] &&
            _0x2c85a9 - _0x3fb9f1[0x0]["at"] > _0x57770a
          )
            _0x3fb9f1["shift"]();
          const _0x32a796 = Math["max"](
              0x1,
              Math["floor"](
                0x80 / Math["max"](0x1, this["walkingTracks"]["size"]),
              ),
            ),
            _0x4b5aa6 = Math["max"](
              0x1,
              Math["ceil"]((_0x3fb9f1["length"] - 0x1) / _0x32a796),
            );
          for (
            let _0x39bb04 = 0x1;
            _0x39bb04 < _0x3fb9f1["length"] && _0x2abeda > 0x0;
            _0x39bb04 += _0x4b5aa6
          ) {
            const _0xb730f9 = Math["min"](
              _0x3fb9f1["length"] - 0x1,
              _0x39bb04 + _0x4b5aa6 - 0x1,
            );
            (this["drawFadedTrail"](
              _0x3fb9f1[_0x39bb04 - 0x1],
              _0x3fb9f1[_0xb730f9],
              0x1 - (_0x2c85a9 - _0x3fb9f1[_0x39bb04 - 0x1]["at"]) / _0x57770a,
              Math["max"](
                0x1,
                Math["min"](
                  0x6,
                  Number(this["settings"]["walkingTrailWidth"]) || 2.5,
                ),
              ),
              _0x357768,
            ),
              _0x2abeda--);
          }
        }
      } else this["walkingTracks"]?.["clear"]();
      if (this["settings"]["bulletTracersEnabled"]) {
        const _0x49de88 =
          Math["max"](
            0.1,
            Math["min"](
              0x4,
              Number(this["settings"]["bulletTracerSeconds"]) || 0.8,
            ),
          ) * 0x3e8;
        this["bulletSegments"] = (this["bulletSegments"] || [])["filter"](
          (_0x1ad8d3) =>
            _0x2c85a9 >= _0x1ad8d3["at"] &&
            _0x2c85a9 - _0x1ad8d3["at"] < _0x49de88 &&
            (_0x1ad8d3["player"] === this["me"] ||
              this["settings"]["bulletTracersOthers"]),
        );
        for (const _0x18627e of this["bulletSegments"]["slice"](-0x40)) {
          const _0x6d5add =
              _0x18627e["player"] === this["me"] &&
              !this["settings"]["thirdPersonEnabled"] &&
              !this["game"]?.["config"]?.["thirdPerson"]
                ? this["renderer"]?.["fpsCamera"] ||
                  this["renderer"]?.["camera"]
                : this["renderer"]?.["camera"],
            _0x475636 =
              _0x18627e["muzzle"] &&
              this["projectBoneSegment"](
                [_0x18627e["muzzle"], _0x18627e["muzzle"]],
                _0x6d5add,
              )?.[0x0];
          this["drawFadedTrail"](
            _0x18627e["a"],
            _0x18627e["b"],
            0x1 - (_0x2c85a9 - _0x18627e["at"]) / _0x49de88,
            Math["max"](
              0x1,
              Math["min"](
                0x6,
                Number(this["settings"]["bulletTracerWidth"]) || 0x2,
              ),
            ),
            _0x2232c3,
            _0x475636,
          );
        }
      } else this["bulletSegments"] = [];
      this["trailStatus"] =
        (this["walkingTracks"]?.["size"] || 0x0) +
        "\x20walking\x20tracks\x20/\x20" +
        (this["bulletSegments"]?.["length"] || 0x0) +
        "\x20native\x20ray\x20tracers;\x20" +
        (this["bulletTracerStatus"] || "waiting\x20for\x20observed\x20shot");
    }
    ["restoreNameProtect"]() {
      (this["nameProtectObserver"]?.["disconnect"](),
        clearTimeout(this["nameProtectTimer"]),
        (this["nameProtectTimer"] = null),
        (this["nameProtectObservedBody"] = null));
      for (const [_0xaa8025, _0x7c39a3] of this["nameProtectText"] || [])
        if (_0xaa8025["nodeValue"] === _0x7c39a3["applied"])
          _0xaa8025["nodeValue"] = _0x7c39a3["original"];
      (this["nameProtectText"]?.["clear"](),
        (this["nameProtectIdentity"] = null),
        (this["nameProtectLastScan"] = null),
        (this["nameProtectPattern"] = null),
        this["nameProtectPending"]?.["clear"](),
        (this["nameProtectWork"] = null));
    }
    ["queueNameProtect"](_0x14c86d) {
      if (
        !_0x14c86d?.["isConnected"] ||
        (_0x14c86d["nodeType"] !== 0x1 && _0x14c86d["nodeType"] !== 0x3)
      )
        return;
      const _0x4b4769 =
        _0x14c86d["nodeType"] === 0x1 ? _0x14c86d : _0x14c86d["parentElement"];
      if (
        _0x4b4769?.["closest"](
          "script,style,input,textarea,[contenteditable=true],.anonimbiri-menu-container,.anonimbiri-hotkey-modal,#cracky-access,#cracky-color-popover,#anonimbiri-notify-wrap,#cracky-array-list,#cracky-watermark,#cracky-tab-gui",
        )
      )
        return;
      this["nameProtectPending"] ||= new Set();
      if (this["nameProtectPending"]["size"] < 0x100)
        this["nameProtectPending"]["add"](_0x14c86d);
      else
        (this["nameProtectPending"]["clear"](),
          this["nameProtectPending"]["add"](document["body"]));
    }
    ["scheduleNameProtect"]() {
      if (this["nameProtectTimer"]) return;
      this["nameProtectTimer"] = setTimeout(() => {
        ((this["nameProtectTimer"] = null), this["updateNameProtect"]());
      }, 0x32);
    }
    ["updateNameProtect"]() {
      if (
        !this["settings"]["nameProtectEnabled"] ||
        !this["isAccessAllowed"]()
      ) {
        this["restoreNameProtect"]();
        return;
      }
      const _0x298a8a = Date["now"](),
        _0x55b949 = document["body"];
      if (!_0x55b949?.["isConnected"]) return;
      this["nameProtectText"] ||= new Map();
      const _0x179813 =
        String(this["settings"]["nameProtectAlias"] || "crackyio")
          ["trim"]()
          ["slice"](0x0, 0x30) || "crackyio";
      if (
        this["nameProtectLastScan"] == null ||
        this["nameProtectAlias"] !== _0x179813 ||
        this["nameProtectObservedBody"] !== _0x55b949 ||
        _0x298a8a - this["nameProtectLastScan"] >= 0x3e8
      ) {
        const _0x486aaf = new Set();
        let _0x315d32 = ![];
        for (const _0xf52e31 of document["querySelectorAll"](
          ".menuClassPlayerName",
        )) {
          const _0x34dce0 = document["createTreeWalker"](_0xf52e31, 0x4);
          let _0x4368da = "",
            _0x1f6f1e;
          while ((_0x1f6f1e = _0x34dce0["nextNode"]())) {
            const _0x133057 = this["nameProtectText"]["get"](_0x1f6f1e);
            _0x4368da +=
              _0x133057 && _0x1f6f1e["nodeValue"] === _0x133057["applied"]
                ? _0x133057["original"]
                : _0x1f6f1e["nodeValue"];
          }
          const _0x3e03cb = _0x4368da["trim"]();
          if (/^Guest(?:_\d+)?$/i["test"](_0x3e03cb)) _0x315d32 = !![];
          else {
            if (_0x3e03cb) _0x486aaf["add"](_0x3e03cb);
          }
        }
        if (
          (!_0x315d32 || _0x486aaf["size"]) &&
          typeof this["me"]?.["account"]?.["name"] === "string"
        )
          _0x486aaf["add"](this["me"]["account"]["name"]);
        const _0x1df735 =
          JSON["stringify"]([..._0x486aaf]["sort"]()) + "/" + _0x179813;
        if (
          this["nameProtectIdentity"] !== _0x1df735 ||
          this["nameProtectObservedBody"] !== _0x55b949
        ) {
          (this["restoreNameProtect"](),
            (this["nameProtectIdentity"] = _0x1df735),
            (this["nameProtectAlias"] = _0x179813));
          if (_0x486aaf["size"]) {
            this["nameProtectPattern"] = new RegExp(
              "(^|[^A-Za-z0-9_])(" +
                [..._0x486aaf]
                  ["filter"](Boolean)
                  ["map"]((_0x1f94b8) =>
                    _0x1f94b8["replace"](/[.*+?^$\{\}()|[\]\\]/g, "\x5c$&"),
                  )
                  ["join"]("|") +
                ")(?=$|[^A-Za-z0-9_])",
              "g",
            );
            for (const _0x344f85 of document["querySelectorAll"](
              ".menuClassPlayerName",
            ))
              this["queueNameProtect"](_0x344f85);
            this["queueNameProtect"](_0x55b949);
          }
        }
        this["nameProtectLastScan"] = _0x298a8a;
      }
      !this["nameProtectObserver"] &&
        typeof MutationObserver === "function" &&
        (this["nameProtectObserver"] = new MutationObserver((_0x32fd5e) => {
          let _0x1f5644 = ![];
          for (const _0x3d3491 of _0x32fd5e) {
            const _0x14439c = _0x3d3491["target"],
              _0x8ac483 =
                _0x14439c["nodeType"] === 0x1
                  ? _0x14439c
                  : _0x14439c["parentElement"];
            if (
              _0x8ac483?.["closest"](
                "script,style,input,textarea,[contenteditable=true],.anonimbiri-menu-container,.anonimbiri-hotkey-modal,#cracky-access,#cracky-color-popover,#anonimbiri-notify-wrap,#cracky-array-list,#cracky-watermark,#cracky-tab-gui",
              )
            )
              continue;
            const _0xa08752 = this["nameProtectText"]["get"](_0x14439c);
            if (
              _0x3d3491["type"] === "characterData" &&
              _0xa08752 &&
              _0x14439c["nodeValue"] === _0xa08752["applied"]
            )
              continue;
            _0x8ac483?.["closest"](".menuClassPlayerName") &&
              ((this["nameProtectLastScan"] = null), (_0x1f5644 = !![]));
            if (_0x3d3491["type"] === "characterData") {
              const _0x2bb803 = this["nameProtectPattern"];
              let _0x5d7d36 = !!_0xa08752;
              (_0x2bb803 &&
                ((_0x2bb803["lastIndex"] = 0x0),
                (_0x5d7d36 ||= _0x2bb803["test"](_0x14439c["nodeValue"] || "")),
                (_0x2bb803["lastIndex"] = 0x0)),
                _0x5d7d36 &&
                  (this["queueNameProtect"](_0x14439c), (_0x1f5644 = !![])));
            } else {
              for (const _0x5448c2 of _0x3d3491["addedNodes"] || []) {
                if (
                  _0x5448c2["nodeType"] === 0x1 &&
                  (_0x5448c2["matches"]?.(".menuClassPlayerName") ||
                    _0x5448c2["querySelector"]?.(".menuClassPlayerName"))
                )
                  this["nameProtectLastScan"] = null;
                this["queueNameProtect"](_0x5448c2);
              }
              if (
                _0x3d3491["addedNodes"]?.["length"] ||
                _0x3d3491["removedNodes"]?.["length"]
              )
                _0x1f5644 = !![];
            }
          }
          if (_0x1f5644) this["scheduleNameProtect"]();
        }));
      this["nameProtectObservedBody"] !== _0x55b949 &&
        (this["nameProtectObserver"]?.["observe"](_0x55b949, {
          subtree: !![],
          childList: !![],
          characterData: !![],
        }),
        (this["nameProtectObservedBody"] = _0x55b949));
      if (!this["nameProtectPattern"]) {
        this["nameProtectStatus"] = "waiting\x20for\x20logged-in\x20name";
        return;
      }
      for (const [_0x1121da, _0x48e281] of this["nameProtectText"])
        if (
          !_0x1121da["isConnected"] ||
          _0x1121da["nodeValue"] !== _0x48e281["applied"]
        ) {
          if (
            !_0x1121da["isConnected"] &&
            _0x1121da["nodeValue"] === _0x48e281["applied"]
          )
            _0x1121da["nodeValue"] = _0x48e281["original"];
          this["nameProtectText"]["delete"](_0x1121da);
        }
      let _0x13eaf8 = 0x1f4;
      while (_0x13eaf8 > 0x0) {
        let _0x3ab168 = this["nameProtectWork"];
        if (!_0x3ab168) {
          const _0xf03185 = this["nameProtectPending"]?.["values"]()["next"]()[
            "value"
          ];
          if (!_0xf03185) break;
          this["nameProtectPending"]["delete"](_0xf03185);
          if (!_0xf03185["isConnected"]) continue;
          _0x3ab168 = this["nameProtectWork"] = {
            root: _0xf03185,
            walker:
              _0xf03185["nodeType"] === 0x3
                ? null
                : document["createTreeWalker"](_0xf03185, 0x4),
            text: _0xf03185["nodeType"] === 0x3 ? _0xf03185 : null,
          };
        }
        const _0x41f2de =
          _0x3ab168["text"] || _0x3ab168["walker"]?.["nextNode"]();
        _0x3ab168["text"] = null;
        if (!_0x41f2de || !_0x3ab168["root"]["isConnected"]) {
          this["nameProtectWork"] = null;
          continue;
        }
        _0x13eaf8--;
        if (
          _0x41f2de["parentElement"]?.["closest"](
            "script,style,input,textarea,[contenteditable=true],.anonimbiri-menu-container,.anonimbiri-hotkey-modal,#cracky-access,#cracky-color-popover,#anonimbiri-notify-wrap,#cracky-array-list,#cracky-watermark,#cracky-tab-gui",
          )
        )
          continue;
        const _0x421760 = this["nameProtectText"]["get"](_0x41f2de),
          _0x216edd =
            _0x421760 && _0x41f2de["nodeValue"] === _0x421760["applied"]
              ? _0x421760["original"]
              : _0x41f2de["nodeValue"],
          _0x403d03 = _0x216edd["replace"](
            this["nameProtectPattern"],
            (_0x5a2fdc, _0x5aac45) => _0x5aac45 + _0x179813,
          );
        if (_0x403d03 !== _0x216edd) {
          this["nameProtectText"]["set"](_0x41f2de, {
            original: _0x216edd,
            applied: _0x403d03,
          });
          if (_0x41f2de["nodeValue"] !== _0x403d03)
            _0x41f2de["nodeValue"] = _0x403d03;
        }
      }
      this["nameProtectStatus"] =
        this["nameProtectText"]["size"] + "\x20local\x20labels\x20masked";
      if (this["nameProtectWork"] || this["nameProtectPending"]?.["size"])
        this["scheduleNameProtect"]();
    }
    ["updateWireframe"]() {
      const _0x4ddfb1 = !!this["settings"]["wireframeEnabled"];
      if (!_0x4ddfb1) {
        for (const [_0x20e3f6, _0x9fd5cc] of this["wireframeMaterials"] || [])
          if (_0x20e3f6["wireframe"] === !![])
            _0x20e3f6["wireframe"] = _0x9fd5cc;
        (this["wireframeMaterials"]?.["clear"](),
          (this["lastWireframeState"] = ![]));
        return;
      }
      const _0x282186 = this["fromPage"](this["renderer"]["scene"]);
      if (typeof _0x282186?.["traverse"] !== "function")
        throw new Error("Scene\x20traversal\x20API\x20unavailable");
      this["wireframeMaterials"] ||= new Map();
      const _0x24acd3 = new Set(),
        _0x5c038b = this["toPageFunction"]((_0x18c506) => {
          const _0x30d8d1 = this["fromPage"](_0x18c506);
          if (
            !_0x30d8d1?.["material"] ||
            _0x30d8d1["type"] !== "Mesh" ||
            !_0x30d8d1["name"] ||
            !_0x30d8d1["isObject3D"] ||
            _0x30d8d1["isModel"] ||
            !_0x30d8d1["isMesh"]
          )
            return;
          const _0x1e168f = Array["isArray"](_0x30d8d1["material"])
            ? _0x30d8d1["material"]
            : [_0x30d8d1["material"]];
          for (const _0x11db93 of _0x1e168f) {
            if (!_0x11db93) continue;
            _0x24acd3["add"](_0x11db93);
            if (_0x4ddfb1) {
              if (!this["wireframeMaterials"]["has"](_0x11db93))
                this["wireframeMaterials"]["set"](
                  _0x11db93,
                  _0x11db93["wireframe"],
                );
              _0x11db93["wireframe"] = !![];
            } else
              this["wireframeMaterials"]["has"](_0x11db93) &&
                ((_0x11db93["wireframe"] =
                  this["wireframeMaterials"]["get"](_0x11db93)),
                this["wireframeMaterials"]["delete"](_0x11db93));
          }
        });
      _0x282186["traverse"](_0x5c038b);
      for (const [_0x1808f4, _0x379398] of this["wireframeMaterials"])
        if (!_0x24acd3["has"](_0x1808f4)) {
          if (_0x1808f4["wireframe"] === !![])
            _0x1808f4["wireframe"] = _0x379398;
          this["wireframeMaterials"]["delete"](_0x1808f4);
        }
      ((this["lastWireframeState"] = _0x4ddfb1),
        (this["lastWireframeScene"] = _0x282186));
    }
    ["getAimFov"]() {
      const _0x2083c5 = Number(this["settings"]["fovSize"]);
      return Number["isFinite"](_0x2083c5)
        ? Math["max"](0x0, Math["min"](0xb4, _0x2083c5))
        : 0x5a;
    }
    ["clampNativeHeadPoint"](_0x277861, _0x477daa, _0x247eaf = null) {
      if (
        !_0x477daa ||
        !_0x277861["objInstances"] ||
        (!Number["isFinite"](_0x277861["height"]) &&
          !Number["isFinite"](_0x247eaf))
      )
        return _0x477daa;
      const _0x4cf616 = this["settings"]["superSilentEnabled"]
        ? _0x277861
        : this["modelPoint"](_0x277861["objInstances"]);
      if (!_0x4cf616 || !Number["isFinite"](_0x4cf616["y"])) return _0x477daa;
      const _0x4a600d = Math["max"](
          0x0,
          Math["min"](
            0x1,
            Number(_0x277861["crouchVal"] ?? _0x277861["cV"]) || 0x0,
          ),
        ),
        _0x55cc76 = Math["min"](
          _0x277861["height"],
          (this["PLAYER_HEIGHT"] || 0xb) -
            (this["CROUCH_FACTOR"] || 0x3) * _0x4a600d,
        ),
        _0x5a08da = Math["max"](
          0.1,
          Math["min"](0x5, Number(_0x277861["headMlt"]) || 0x1),
        ),
        _0x28152d = Number["isFinite"](_0x247eaf)
          ? _0x247eaf
          : _0x4cf616["y"] + _0x55cc76 - 0x1 + (_0x5a08da - 0x1),
        _0x29b899 = _0x5a08da;
      return (
        (_0x477daa["y"] = Math["max"](
          _0x28152d - 0.35 * _0x29b899,
          Math["min"](_0x28152d + 0.15 * _0x29b899, _0x477daa["y"]),
        )),
        _0x477daa
      );
    }
    ["getAimAngles"](_0xb3572c) {
      if (
        !this["settings"]["superSilentEnabled"] ||
        (_0xb3572c["mesh"] && !_0xb3572c["objInstances"])
      ) {
        let _0x3c24ef =
          _0xb3572c["headObj"] ||
          (_0xb3572c["mesh"] && !_0xb3572c["objInstances"]
            ? _0xb3572c["mesh"]
            : null);
        const _0x5c12e3 = this["fromPage"](_0xb3572c["complexHitboxes"]),
          _0x4cd78d = _0x5c12e3?.["children"]?.[0x0]?.["children"]?.[0x0];
        if (
          _0x4cd78d?.["hitType"] === "headshot" ||
          _0x4cd78d?.["name"] === "headHitbox"
        ) {
          const _0x50e5b3 = this["rigBounds"](_0x4cd78d["geometry"]),
            _0x49623c = this["modelPoint"](_0x5c12e3),
            _0x3f6787 = this["modelPoint"](_0xb3572c["objInstances"]),
            _0x155580 =
              _0x50e5b3 &&
              this["modelPoint"](_0x4cd78d, {
                x: (_0x50e5b3["min"]["x"] + _0x50e5b3["max"]["x"]) / 0x2,
                y: (_0x50e5b3["min"]["y"] + _0x50e5b3["max"]["y"]) / 0x2,
                z: (_0x50e5b3["min"]["z"] + _0x50e5b3["max"]["z"]) / 0x2,
              });
          if (_0x155580 && _0x49623c && _0x3f6787) {
            ((_0x155580["x"] += _0x3f6787["x"] - _0x49623c["x"]),
              (_0x155580["y"] += _0x3f6787["y"] - _0x49623c["y"]),
              (_0x155580["z"] += _0x3f6787["z"] - _0x49623c["z"]));
            const _0x4547cb = _0x155580["y"];
            ((_0x155580["y"] += Number(this["settings"]["aimOffset"]) || 0x0),
              this["clampNativeHeadPoint"](_0xb3572c, _0x155580, _0x4547cb));
            const _0x1621fd = Number["isFinite"](this["me"]["height"])
              ? this["me"]["height"]
              : this["PLAYER_HEIGHT"] || 0xb;
            return {
              yaw: this["getDirection"](
                this["me"]["z"],
                this["me"]["x"],
                _0x155580["z"],
                _0x155580["x"],
              ),
              pitch: this["getXDirection"](
                this["me"]["x"],
                this["me"]["y"] + _0x1621fd - (this["CAMERA_HEIGHT"] || 1.5),
                this["me"]["z"],
                _0x155580["x"],
                _0x155580["y"],
                _0x155580["z"],
              ),
              point: _0x155580,
            };
          }
        }
        if (_0x3c24ef && !this["getRigGeometry"](_0xb3572c, _0x3c24ef)) {
          const _0xa407e4 = this["collectEffectMeshes"](
            [_0x3c24ef],
            _0xb3572c["objInstances"] || _0x3c24ef,
          );
          _0x3c24ef = [..._0xa407e4]["sort"]((_0x3a37f7, _0xa80356) => {
            const _0x4ee78c = (_0x349095) => {
              const _0xfa9f8d = this["rigBounds"](_0x349095["geometry"]);
              return _0xfa9f8d
                ? (_0xfa9f8d["max"]["x"] - _0xfa9f8d["min"]["x"]) *
                    (_0xfa9f8d["max"]["y"] - _0xfa9f8d["min"]["y"]) *
                    (_0xfa9f8d["max"]["z"] - _0xfa9f8d["min"]["z"])
                : 0x0;
            };
            return _0x4ee78c(_0xa80356) - _0x4ee78c(_0x3a37f7);
          })[0x0];
        }
        const _0x4641d1 = this["rigBounds"](
            this["getRigGeometry"](_0xb3572c, _0x3c24ef),
          ),
          _0x1f49ae = this["renderer"]?.["camera"];
        if (_0x4641d1) {
          const _0x34279c = this["modelPoint"](_0x3c24ef, {
              x: (_0x4641d1["min"]["x"] + _0x4641d1["max"]["x"]) / 0x2,
              y: (_0x4641d1["min"]["y"] + _0x4641d1["max"]["y"]) / 0x2,
              z: (_0x4641d1["min"]["z"] + _0x4641d1["max"]["z"]) / 0x2,
            }),
            _0x4c9173 = Number["isFinite"](this["me"]["height"])
              ? this["me"]["height"]
              : this["PLAYER_HEIGHT"],
            _0x4ab1d2 = {
              x: this["me"]["x"],
              y: this["me"]["y"] + _0x4c9173 - this["CAMERA_HEIGHT"],
              z: this["me"]["z"],
            },
            _0x402c8d = [_0x4ab1d2["x"], _0x4ab1d2["y"], _0x4ab1d2["z"]][
              "every"
            ](Number["isFinite"])
              ? _0x4ab1d2
              : this["modelPoint"](_0x1f49ae);
          if (_0x34279c && _0x402c8d) {
            ((_0x34279c["y"] += Number(this["settings"]["aimOffset"]) || 0x0),
              this["clampNativeHeadPoint"](_0xb3572c, _0x34279c));
            const _0x3db0a9 = this["getDirection"](
                _0x402c8d["z"],
                _0x402c8d["x"],
                _0x34279c["z"],
                _0x34279c["x"],
              ),
              _0x3ecc3e = this["getXDirection"](
                _0x402c8d["x"],
                _0x402c8d["y"],
                _0x402c8d["z"],
                _0x34279c["x"],
                _0x34279c["y"],
                _0x34279c["z"],
              );
            return { yaw: _0x3db0a9, pitch: _0x3ecc3e, point: _0x34279c };
          }
        }
      }
      const _0xbe0dbd = !!_0xb3572c["mesh"] && !_0xb3572c["objInstances"],
        _0x187c02 = Number["isFinite"](this["me"]["height"])
          ? this["me"]["height"]
          : this["PLAYER_HEIGHT"] || 0xb,
        _0x99a825 =
          this["me"]["y"] + _0x187c02 - (this["CAMERA_HEIGHT"] || 1.5),
        _0x20f873 = Math["max"](
          0x0,
          Math["min"](
            0x1,
            Number(_0xb3572c["crouchVal"] ?? _0xb3572c["cV"]) || 0x0,
          ),
        ),
        _0x2b5a12 = Number["isFinite"](_0xb3572c["height"])
          ? Math["min"](
              _0xb3572c["height"],
              (this["PLAYER_HEIGHT"] || 0xb) -
                (this["CROUCH_FACTOR"] || 0x3) * _0x20f873,
            )
          : (this["PLAYER_HEIGHT"] || 0xb) -
            (this["CROUCH_FACTOR"] || 0x3) * _0x20f873;
      let _0x68e1a5 = _0xbe0dbd
        ? _0xb3572c["y"] -
          (_0xb3572c["dat"]?.["mSize"] || _0xb3572c["height"] || 0x8) / 0x2
        : _0xb3572c["y"] +
          _0x2b5a12 -
          (Number["isFinite"](_0xb3572c["height"])
            ? 0x1
            : this["CAMERA_HEIGHT"] || 1.5) +
          (Number(this["settings"]["aimOffset"]) || 0x0);
      if (!_0xbe0dbd)
        _0x68e1a5 = this["clampNativeHeadPoint"](_0xb3572c, {
          x: _0xb3572c["x"],
          y: _0x68e1a5,
          z: _0xb3572c["z"],
        })["y"];
      return {
        yaw: this["getDirection"](
          this["me"]["z"],
          this["me"]["x"],
          _0xb3572c["z"],
          _0xb3572c["x"],
        ),
        pitch: this["getXDirection"](
          this["me"]["x"],
          _0x99a825,
          this["me"]["z"],
          _0xb3572c["x"],
          _0x68e1a5,
          _0xb3572c["z"],
        ),
        point: { x: _0xb3572c["x"], y: _0x68e1a5, z: _0xb3572c["z"] },
      };
    }
    ["getAimJitterLimit"](_0x294ee7) {
      let _0x46ec4a = 0.25;
      const _0x41a8f1 = _0x294ee7["headObj"],
        _0x2b43ab = this["rigBounds"](
          this["getRigGeometry"](_0x294ee7, _0x41a8f1),
        ),
        _0x595798 = _0x41a8f1?.["matrixWorld"]?.["elements"];
      if (_0x2b43ab && _0x595798?.["length"] === 0x10) {
        const _0x47428f =
            ((_0x2b43ab["max"]["x"] - _0x2b43ab["min"]["x"]) / 0x2) *
            Math["hypot"](_0x595798[0x0], _0x595798[0x1], _0x595798[0x2]),
          _0x3cc524 =
            ((_0x2b43ab["max"]["y"] - _0x2b43ab["min"]["y"]) / 0x2) *
            Math["hypot"](_0x595798[0x4], _0x595798[0x5], _0x595798[0x6]);
        if (_0x47428f > 0x0 && _0x3cc524 > 0x0)
          _0x46ec4a = Math["min"](
            _0x46ec4a,
            0.35 * Math["min"](_0x47428f, _0x3cc524),
          );
      }
      const _0x537505 = Math["sqrt"](
        this["getDistanceSq"](this["me"], _0x294ee7),
      );
      return Number["isFinite"](_0x537505)
        ? Math["atan2"](_0x46ec4a, Math["max"](0x1, _0x537505))
        : 0x0;
    }
    ["aimRayHitsTarget"](_0x428cc5, _0x40bacb, _0x20c6ee = null) {
      const _0x2b7c66 = _0x428cc5["objInstances"] || _0x428cc5["mesh"];
      if (
        !_0x2b7c66 ||
        !this["rayC"] ||
        typeof this["rayC"]["intersectObject"] !== "function"
      )
        return ![];
      {
        const _0x524d70 =
            _0x40bacb[0x2] / 0x3e8 + (_0x20c6ee?.["pitch"] || 0x0),
          _0x2bdf38 = _0x40bacb[0x3] / 0x3e8 + (_0x20c6ee?.["yaw"] || 0x0),
          _0x4c946b = Number["isFinite"](this["me"]["height"])
            ? this["me"]["height"]
            : this["PLAYER_HEIGHT"],
          _0x2ea016 = this["me"]["y"] + _0x4c946b - this["CAMERA_HEIGHT"];
        if (
          !Number["isFinite"](
            this["me"]["x"] +
              _0x2ea016 +
              this["me"]["z"] +
              _0x524d70 +
              _0x2bdf38,
          ) ||
          typeof this["rayC"]["set"] !== "function"
        )
          return ![];
        ((this["aimRayOrigin"] ||= new this["three"]["Vector3"]()),
          (this["aimRayDirection"] ||= new this["three"]["Vector3"]()),
          this["aimRayOrigin"]["set"](
            this["me"]["x"],
            _0x2ea016,
            this["me"]["z"],
          ));
        const _0xe739b9 =
          _0x524d70 +
          (_0x20c6ee?.["recoil"] ??
            (this["me"]["noRecoil"] || this["me"]["weapon"]?.["melee"]
              ? 0x0
              : 0.3 * (Number(this["me"]["recoilAnimY"]) || 0x0)));
        (this["aimRayDirection"]["set"](
          -Math["sin"](_0x2bdf38) * Math["cos"](_0xe739b9),
          Math["sin"](_0xe739b9),
          -Math["cos"](_0x2bdf38) * Math["cos"](_0xe739b9),
        ),
          this["rayC"]["set"](this["aimRayOrigin"], this["aimRayDirection"]));
      }
      const _0x349084 = this["fromPage"](_0x428cc5["complexHitboxes"]);
      if (_0x349084?.["isObject3D"])
        return (
          _0x349084["updateWorldMatrix"]?.(!![], !![]),
          this["rayC"]["intersectObject"](_0x349084, !![])["length"] > 0x0
        );
      _0x2b7c66["updateWorldMatrix"]?.(!![], !![]);
      if (this["rayC"]["intersectObject"](_0x2b7c66, !![])["length"] > 0x0)
        return !![];
      if (
        !_0x428cc5["batchRef"] ||
        !this["three"]?.["Ray"] ||
        !this["three"]?.["Matrix4"]
      )
        return ![];
      const _0x547913 = [
        _0x428cc5["headObj"],
        ...(_0x428cc5["lowerBody"]?.["children"] || []),
        ...(_0x428cc5["legMeshes"] || []),
        ...(_0x428cc5["armMeshes"] || []),
        _0x428cc5["mergedArmMeshes"]?.[_0x428cc5["loadoutIndex"]],
      ];
      ((this["aimPartRay"] ||= new this["three"]["Ray"]()),
        (this["aimPartMatrix"] ||= new this["three"]["Matrix4"]()),
        (this["aimPartA"] ||= new this["three"]["Vector3"]()),
        (this["aimPartB"] ||= new this["three"]["Vector3"]()),
        (this["aimPartC"] ||= new this["three"]["Vector3"]()),
        (this["aimPartHit"] ||= new this["three"]["Vector3"]()));
      for (const _0x403adb of new Set(_0x547913)) {
        if (!this["isModelVisible"](_0x403adb, _0x2b7c66)) continue;
        const _0x4f8ad1 = this["getRigGeometry"](_0x428cc5, _0x403adb),
          _0x251c76 = _0x4f8ad1?.["attributes"]?.["position"],
          _0x397160 = _0x4f8ad1?.["index"];
        if (!_0x251c76?.["array"] || !_0x397160?.["array"]) continue;
        _0x403adb["updateWorldMatrix"]?.(!![], ![]);
        if (
          !_0x403adb["matrixWorld"] ||
          Math["abs"](_0x403adb["matrixWorld"]["determinant"]()) < 1e-12
        )
          continue;
        (this["aimPartMatrix"]["copy"](_0x403adb["matrixWorld"])["invert"](),
          this["aimPartRay"]
            ["copy"](this["rayC"]["ray"])
            ["applyMatrix4"](this["aimPartMatrix"]));
        const _0x409a26 = (_0x345a61, _0x17ebe9) =>
          _0x345a61["set"](
            _0x251c76["array"][_0x17ebe9 * 0x3],
            _0x251c76["array"][_0x17ebe9 * 0x3 + 0x1],
            _0x251c76["array"][_0x17ebe9 * 0x3 + 0x2],
          );
        for (
          let _0x5e4711 = 0x0;
          _0x5e4711 < _0x397160["count"];
          _0x5e4711 += 0x3
        )
          if (
            this["aimPartRay"]["intersectTriangle"](
              _0x409a26(this["aimPartA"], _0x397160["array"][_0x5e4711]),
              _0x409a26(this["aimPartB"], _0x397160["array"][_0x5e4711 + 0x1]),
              _0x409a26(this["aimPartC"], _0x397160["array"][_0x5e4711 + 0x2]),
              ![],
              this["aimPartHit"],
            )
          )
            return !![];
      }
      return ![];
    }
    ["isWithinAimFov"](_0x5e57a0, _0x2a0a32) {
      const _0x309bad = this["getAimAngles"](_0x5e57a0);
      if (!Number["isFinite"](_0x309bad["yaw"] + _0x309bad["pitch"]))
        return ![];
      const _0x478025 = this["getAimFov"]();
      if (_0x478025 === 0xb4) return !![];
      const _0x316227 = this["controls"]["object"]?.["rotation"]?.["y"],
        _0x196aec =
          this["controls"][this["vars"]["pchObjc"]]?.["rotation"]?.["x"],
        _0x390408 = Number["isFinite"](_0x316227)
          ? _0x316227
          : Number(_0x2a0a32?.[0x3] || 0x0) / 0x3e8,
        _0x1713c6 = Number["isFinite"](_0x196aec)
          ? _0x196aec
          : Number(_0x2a0a32?.[0x2] || 0x0) / 0x3e8,
        _0x1435ec =
          Math["cos"](_0x1713c6) *
            Math["cos"](_0x309bad["pitch"]) *
            Math["cos"](_0x309bad["yaw"] - _0x390408) +
          Math["sin"](_0x1713c6) * Math["sin"](_0x309bad["pitch"]);
      return (
        Number["isFinite"](_0x1435ec) &&
        _0x1435ec >= Math["cos"]((_0x478025 * Math["PI"]) / 0xb4) - 1e-12
      );
    }
    ["getFovCircleRadius"]() {
      const _0x549363 = this["getAimFov"]();
      if (_0x549363 <= 0x0 || _0x549363 >= 0x5a) return null;
      const _0x383b6f =
          this["renderer"]?.["camera"] || this["renderer"]?.["fpsCamera"],
        _0x15d6e2 = this["overlay"]?.["canvas"]?.["height"],
        _0x579d30 = _0x383b6f?.["projectionMatrix"]?.["elements"]?.[0x5],
        _0x519c1a =
          Number["isFinite"](_0x579d30) && _0x579d30 > 0x0
            ? (_0x15d6e2 * _0x579d30) / 0x2
            : (_0x15d6e2 * (_0x383b6f?.["zoom"] || 0x1)) /
              (0x2 *
                Math["tan"](
                  ((_0x383b6f?.["fov"] || 0x5a) * Math["PI"]) / 0x168,
                )),
        _0x4b7852 = _0x519c1a * Math["tan"]((_0x549363 * Math["PI"]) / 0xb4);
      return Number["isFinite"](_0x4b7852) && _0x4b7852 > 0x0
        ? _0x4b7852
        : null;
    }
    ["drawFov"]() {
      const _0x4ac7f5 = this["getAimFov"]();
      if (!(_0x4ac7f5 > 0x0 && this["settings"]["drawFovCircle"])) return;
      const _0x21f019 = this["getFovCircleRadius"]();
      if (
        _0x21f019 === null ||
        _0x21f019 >
          Math["hypot"](
            this["overlay"]["canvas"]["width"] / 0x2,
            this["overlay"]["canvas"]["height"] / 0x2,
          )
      )
        return;
      const _0x45cd5a = this["ctx"];
      _0x45cd5a["save"]();
      try {
        const _0x4d4bf2 = this["overlay"]["canvas"]["width"] / 0x2,
          _0x11aaa0 = this["overlay"]["canvas"]["height"] / 0x2,
          _0x17e8a2 = this["getTheme"]();
        (_0x45cd5a["beginPath"](),
          _0x45cd5a["arc"](
            _0x4d4bf2,
            _0x11aaa0,
            _0x21f019,
            0x0,
            0x2 * Math["PI"],
            ![],
          ));
        const _0x230a9a = _0x45cd5a["createLinearGradient"](
          _0x4d4bf2 - _0x21f019,
          _0x11aaa0,
          _0x4d4bf2 + _0x21f019,
          _0x11aaa0,
        );
        (_0x230a9a["addColorStop"](0x0, _0x17e8a2["primary"]),
          _0x230a9a["addColorStop"](0x1, _0x17e8a2["secondary"]),
          (_0x45cd5a["lineWidth"] = 0x2),
          (_0x45cd5a["strokeStyle"] = _0x230a9a),
          (_0x45cd5a["shadowColor"] = _0x17e8a2["midpoint"]),
          (_0x45cd5a["shadowBlur"] = 0xa),
          _0x45cd5a["stroke"]());
      } finally {
        _0x45cd5a["restore"]();
      }
    }
    ["onProcessInputs"](_0x2ecf70, _0x4a310d) {
      if (!this["isGameplayAllowed"]()) return;
      if (
        this["settings"]["speedEnabled"] ||
        this["settings"]["rapidFireEnabled"] ||
        this["predictionOverrides"]?.["size"]
      )
        this["runHook"]("local-prediction", () =>
          this["updatePredictionControls"](_0x2ecf70),
        );
      if (
        this["settings"]["noRecoilEnabled"] ||
        this["nativeViewOverrides"]?.["has"]("recoil")
      )
        this["runHook"]("no-recoil", () => this["updateNoRecoil"]());
      if (
        this["settings"]["noScopeOverlayEnabled"] ||
        this["scopeOverlayActive"] ||
        this["nativeViewOverrides"]?.["has"]("scope")
      )
        this["runHook"]("scope-overlay", () => this["updateScopeOverlay"]());
      if (
        this["settings"]["bulletTracersEnabled"] ||
        (this["settings"]["autoFireEnabled"] &&
          this["settings"]["autoFireSeedEnabled"])
      )
        this["runHook"]("native-shots", () => this["updateShotObservers"]());
      const _0x1dd191 =
        !Array["isArray"](_0x2ecf70) || _0x2ecf70["length"] < 0xc
          ? "packet\x20layout\x20unavailable"
          : Object["isFrozen"](_0x2ecf70)
            ? "packet\x20is\x20read-only"
            : !this["me"]?.["weapon"]
              ? "waiting\x20for\x20weapon"
              : !this["controls"]?.[this["vars"]["pchObjc"]]?.["rotation"]
                ? "pitch\x20control\x20unavailable"
                : null;
      this["aimStatus"] = _0x1dd191 || "searching\x20for\x20targets";
      if (_0x1dd191) return;
      const _0x34e35 = {
        frame: 0x0,
        delta: 0x1,
        xdir: 0x2,
        ydir: 0x3,
        moveDir: 0x4,
        shoot: 0x5,
        scope: 0x6,
        jump: 0x7,
        reload: 0x8,
        crouch: 0x9,
        weaponScroll: 0xa,
        weaponSwap: 0xb,
        moveLock: 0xc,
      };
      (this["runHook"]("bhop", () => {
        this["settings"]["bhopEnabled"] &&
          this["pressedKeys"]["has"]("Space") &&
          this["controls"]["keys"] &&
          this["controls"]["binds"]?.["jump"] &&
          this["controls"]["binds"]?.["crouch"] &&
          this["controls"]["didPressed"] &&
          ((this["controls"]["keys"][
            this["controls"]["binds"]["jump"]["val"]
          ] ^= 0x1),
          this["controls"]["keys"][this["controls"]["binds"]["jump"]["val"]] &&
            (this["controls"]["didPressed"][
              this["controls"]["binds"]["jump"]["val"]
            ] = 0x1),
          (this["me"]["velocity"]?.["y"] ?? this["me"]["yVel"] ?? 0x0) <
            -0.03 &&
            this["me"]["canSlide"] &&
            (setTimeout(() => {
              this["controls"]["keys"][
                this["controls"]["binds"]["crouch"]["val"]
              ] = 0x0;
            }, this["me"]["slideTimer"] || 0x145),
            (this["controls"]["keys"][
              this["controls"]["binds"]["crouch"]["val"]
            ] = 0x1),
            (this["controls"]["didPressed"][
              this["controls"]["binds"]["crouch"]["val"]
            ] = 0x1)));
      }),
        this["runHook"]("reload", () => {
          this["settings"]["autoReload"] &&
            this["me"]["ammos"]?.[this["me"][this["vars"]["weaponIndex"]]] ===
              0x0 &&
            !(this["me"]["reloadTimer"] > 0x0) &&
            !this["me"]["weapon"]["noReload"] &&
            (_0x2ecf70[_0x34e35["reload"]] = 0x1);
        }),
        this["runHook"]("instant-reload", () =>
          this["updateInstantReload"](_0x2ecf70),
        ));
      let _0x273f39 = null,
        _0x28a53e = null;
      if (
        this["settings"]["aimbotEnabled"] &&
        (!this["settings"]["aimbotOnRightMouse"] || this["rightMouseDown"])
      ) {
        const _0x2c8602 =
            this["controls"]["object"]?.["rotation"]?.["y"] ??
            _0x2ecf70[0x3] / 0x3e8,
          _0x38e867 =
            this["controls"][this["vars"]["pchObjc"]]["rotation"]["x"],
          _0x28c1de = Math["sin"](_0x38e867),
          _0x106c50 = Math["cos"](_0x38e867),
          _0x5331d5 =
            Math["cos"]((this["getAimFov"]() * Math["PI"]) / 0xb4) - 1e-12;
        let _0x17a97e = Infinity,
          _0x4642bf = Infinity,
          _0x1080dd = null;
        const _0x1c518c = (_0x303b5b, _0x1e3e40 = ![]) => {
          if (
            !_0x303b5b ||
            _0x303b5b === this["me"] ||
            _0x303b5b["isYou"] ||
            (!_0x303b5b["active"] && !_0x1e3e40) ||
            !(_0x303b5b["health"] > 0x0) ||
            (_0x1e3e40 &&
              (!_0x303b5b["mesh"] || !_0x303b5b["mesh"]["visible"])) ||
            (!_0x1e3e40 &&
              this["settings"]["aimbotTeamCheck"] &&
              this["isTeam"](_0x303b5b))
          )
            return;
          const _0xcedcc2 = this["getAimAngles"](_0x303b5b);
          if (!Number["isFinite"](_0xcedcc2["yaw"] + _0xcedcc2["pitch"]))
            return;
          const _0x2a5f42 =
            _0x106c50 *
              Math["cos"](_0xcedcc2["pitch"]) *
              Math["cos"](_0xcedcc2["yaw"] - _0x2c8602) +
            _0x28c1de * Math["sin"](_0xcedcc2["pitch"]);
          if (
            !Number["isFinite"](_0x2a5f42) ||
            _0x2a5f42 < _0x5331d5 ||
            (this["settings"]["aimbotWallCheck"] &&
              !this["getCanSee"](_0x303b5b, 0x0, _0xcedcc2["point"]))
          )
            return;
          const _0x28f6a4 = this["getDistanceSq"](this["me"], _0x303b5b),
            _0x335481 =
              Math["acos"](Math["max"](-0x1, Math["min"](0x1, _0x2a5f42))) +
              Math["min"](
                0x2710,
                Number["isFinite"](_0x28f6a4) ? _0x28f6a4 : 0x2710,
              ) *
                1e-8;
          (_0x335481 < _0x17a97e &&
            ((_0x17a97e = _0x335481),
            (_0x273f39 = _0x303b5b),
            (_0x28a53e = _0xcedcc2)),
            _0x303b5b === this["lastAimTarget"] &&
              ((_0x4642bf = _0x335481), (_0x1080dd = _0xcedcc2)));
        };
        for (const _0x5be304 of this["game"]["players"]["list"])
          _0x1c518c(_0x5be304);
        if (this["settings"]["aimbotBotCheck"]) {
          for (const _0x1ffec5 of this["game"]["AI"]?.["ais"] || [])
            _0x1c518c(_0x1ffec5, !![]);
        }
        (_0x273f39 &&
          _0x1080dd &&
          _0x4642bf <= _0x17a97e * 1.2 + 0.03 &&
          ((_0x273f39 = this["lastAimTarget"]), (_0x28a53e = _0x1080dd)),
          (this["lastAimTarget"] = _0x273f39),
          (this["aimStatus"] = _0x273f39
            ? "target\x20acquired"
            : "no\x20target\x20passes\x20team\x20/\x20wall\x20/\x20FOV\x20checks"));
      } else
        this["aimStatus"] = this["settings"]["aimbotEnabled"]
          ? "waiting\x20for\x20right\x20mouse"
          : "disabled";
      if (
        _0x273f39 &&
        !(this["me"]["reloadTimer"] > 0x0) &&
        this["game"]["gameState"] !== 0x4 &&
        this["game"]["gameState"] !== 0x5
      ) {
        const _0x15b752 = this["me"]["weapon"]["melee"],
          _0x504d4b =
            Math["max"](
              0x1,
              (Number(this["me"]["weapon"]["range"]) || 0xf) *
                (Number(this["me"]["rangeMlt"]) || 0x1),
            ) + 2.6,
          _0x49d466 =
            !!this["me"]["weapon"]["canThrow"] &&
            this["me"]["canThrow"] !== ![],
          _0x2bc9ea = 65.2,
          _0x41abb7 = Math["sqrt"](
            this["getDistanceSq"](this["me"], _0x273f39),
          );
        if (_0x15b752 && _0x41abb7 > (_0x49d466 ? _0x2bc9ea : _0x504d4b))
          this["aimStatus"] = "melee\x20target\x20out\x20of\x20range";
        else {
          const _0x11dd83 = !!_0x273f39["mesh"] && !_0x273f39["objInstances"],
            _0x1503c4 = _0x28a53e,
            _0x1c045c =
              !_0x15b752 &&
              this["settings"]["autoFireEnabled"] &&
              this["settings"]["autoFireSeedEnabled"],
            _0x27c5ef = _0x1c045c
              ? this["predictHipfireOffsets"](_0x2ecf70)
              : null,
            _0x2e8f66 =
              _0x1c045c && (!!_0x27c5ef || this["seedWaitingForUnscope"]),
            _0x33fd2e = _0x1503c4["yaw"] - (_0x27c5ef?.["yaw"] || 0x0),
            _0x1100d7 =
              _0x1503c4["pitch"] -
              (_0x27c5ef?.["pitch"] || 0x0) -
              (_0x27c5ef?.["recoil"] ??
                (this["me"]["noRecoil"] || _0x15b752
                  ? 0x0
                  : 0.3 * (Number(this["me"]["recoilAnimY"]) || 0x0)));
          if (!Number["isFinite"](_0x1100d7 + _0x33fd2e)) {
            this["aimStatus"] = "target\x20position\x20unavailable";
            return;
          }
          const _0x17a5a6 = Math["max"](
            -Math["PI"] / 0x2,
            Math["min"](Math["PI"] / 0x2, _0x1100d7),
          );
          if (
            this["settings"]["legitAimbot"] &&
            !this["settings"]["superSilentEnabled"]
          ) {
            const _0x156b45 = (_0x181c85, _0x25ac7b) =>
                Number["isFinite"](Number(_0x181c85))
                  ? Math["max"](0x0, Math["min"](_0x25ac7b, Number(_0x181c85)))
                  : 0x0,
              _0x44fb34 =
                this["me"]["aimVal"] < 0x1
                  ? 0x1 -
                    _0x156b45(this["settings"]["adsTremorReduction"], 0x64) /
                      0x64
                  : 0x1,
              _0x3162be =
                _0x156b45(this["settings"]["aimRandomness"], 0x5) * _0x44fb34,
              _0x42e34b = this["getAimJitterLimit"](_0x273f39);
            this["legitTarget"] !== _0x273f39 &&
              ((this["legitTarget"] = _0x273f39),
              (this["lastTargetChangeTime"] = Date["now"]()),
              (this["aimOffset"]["x"] = (Math["random"]() - 0.5) * _0x3162be),
              (this["aimOffset"]["y"] = (Math["random"]() - 0.5) * _0x3162be));
            ((this["aimOffset"]["x"] +=
              (Math["random"]() - 0.5) * _0x3162be * 0.1),
              (this["aimOffset"]["y"] +=
                (Math["random"]() - 0.5) * _0x3162be * 0.1),
              (this["aimOffset"]["x"] = Math["max"](
                -_0x3162be,
                Math["min"](_0x3162be, this["aimOffset"]["x"]),
              )),
              (this["aimOffset"]["y"] = Math["max"](
                -_0x3162be,
                Math["min"](_0x3162be, this["aimOffset"]["y"]),
              )));
            const _0x2a42b5 = this["controls"]["object"]?.["rotation"]?.["y"],
              _0x5b375e =
                this["controls"][this["vars"]["pchObjc"]]["rotation"]["x"],
              _0x18d7ef = Number["isFinite"](_0x2a42b5)
                ? _0x2a42b5
                : _0x2ecf70[_0x34e35["ydir"]] / 0x3e8,
              _0x3f02b7 = Number["isFinite"](_0x5b375e)
                ? _0x5b375e
                : _0x2ecf70[_0x34e35["xdir"]] / 0x3e8,
              _0x20e257 =
                _0x156b45(this["settings"]["aimTremor"], 0x5) *
                _0x44fb34 *
                0.01,
              _0x53b84a =
                this["aimOffset"]["y"] * 0.01 +
                (Math["random"]() - 0.5) * _0x20e257,
              _0x4256f8 =
                this["aimOffset"]["x"] * 0.01 +
                (Math["random"]() - 0.5) * _0x20e257,
              _0xe33ff6 = Math["max"](
                -Math["PI"] / 0x2,
                Math["min"](
                  Math["PI"] / 0x2,
                  _0x17a5a6 +
                    Math["max"](-_0x42e34b, Math["min"](_0x42e34b, _0x53b84a)),
                ),
              ),
              _0x57e5c3 =
                _0x33fd2e +
                Math["max"](-_0x42e34b, Math["min"](_0x42e34b, _0x4256f8)),
              _0x53b781 =
                _0x156b45(this["settings"]["flickSpeed"], 0x64) * 0.01,
              _0x556833 = Number(_0x2ecf70[0x1]),
              _0x410c57 =
                0x1 -
                Math["pow"](
                  0x1 - _0x53b781,
                  Number["isFinite"](_0x556833) && _0x556833 > 0x0
                    ? Math["min"](0x64, _0x556833) / (0x3e8 / 0x3c)
                    : 0x1,
                ),
              _0x1ad9b8 = Math["atan2"](
                Math["sin"](_0x57e5c3 - _0x18d7ef),
                Math["cos"](_0x57e5c3 - _0x18d7ef),
              );
            let _0x53c747 = _0x18d7ef + _0x1ad9b8 * _0x410c57;
            const _0xfd9a95 = _0xe33ff6 - _0x3f02b7;
            let _0x2be861 = _0x3f02b7 + _0xfd9a95 * _0x410c57;
            if (!this["settings"]["superSilentEnabled"])
              this["lookDir"](_0x2be861, _0x53c747);
            ((_0x2ecf70[_0x34e35["xdir"]] = _0x2be861 * 0x3e8),
              (_0x2ecf70[_0x34e35["ydir"]] = _0x53c747 * 0x3e8));
          } else {
            if (!this["settings"]["superSilentEnabled"])
              this["lookDir"](_0x17a5a6, _0x33fd2e);
            ((_0x2ecf70[_0x34e35["xdir"]] = _0x17a5a6 * 0x3e8),
              (_0x2ecf70[_0x34e35["ydir"]] = _0x33fd2e * 0x3e8));
          }
          ((this["aimStatus"] =
            "aim\x20applied" +
            (this["settings"]["superSilentEnabled"] ? "\x20(silent)" : "")),
            this["runHook"]("auto-fire", () => {
              if (this["settings"]["autoFireEnabled"]) {
                if (_0x2e8f66) _0x2ecf70[_0x34e35["scope"]] = 0x0;
                const _0x4dd699 =
                  !(this["me"]["reloadTimer"] > 0x0) &&
                  !(this["me"]["swapTime"] > 0x0) &&
                  !(
                    this["me"]["reloads"]?.[
                      this["me"][this["vars"]["weaponIndex"]]
                    ] > 0x0
                  );
                if (
                  !_0x4dd699 ||
                  (this["me"]["didShoot"] &&
                    (this["me"]["weapon"]["nAuto"] || _0x15b752))
                ) {
                  _0x2ecf70[_0x34e35["shoot"]] = 0x0;
                  return;
                }
                if (
                  _0x15b752 &&
                  (this["me"]["disableMelee"] ||
                    this["me"]["config"]?.["canMelee"] === ![])
                )
                  return;
                const _0x52e264 = this["aimRayHitsTarget"](
                  _0x273f39,
                  _0x2ecf70,
                  _0x27c5ef,
                );
                if (_0x15b752) {
                  if (
                    this["me"]["disableMelee"] ||
                    this["me"]["config"]?.["canMelee"] === ![]
                  )
                    return;
                  if (_0x41abb7 <= _0x504d4b && _0x52e264) {
                    _0x2ecf70[_0x34e35["scope"]] = 0x0;
                    if (!_0x49d466 || this["me"]["aimVal"] !== 0x0)
                      _0x2ecf70[_0x34e35["shoot"]] = 0x1;
                  } else {
                    if (_0x41abb7 <= _0x2bc9ea && _0x49d466) {
                      _0x2ecf70[_0x34e35["scope"]] = 0x1;
                      if (this["me"]["aimVal"] === 0x0 && _0x52e264)
                        _0x2ecf70[_0x34e35["shoot"]] = 0x1;
                    }
                  }
                } else {
                  if (
                    this["me"]["disableShooting"] ||
                    this["me"]["config"]?.["canShoot"] === ![] ||
                    this["me"]["ammos"]?.[
                      this["me"][this["vars"]["weaponIndex"]]
                    ] === 0x0
                  )
                    return;
                  if (_0x2e8f66) {
                    _0x2ecf70[_0x34e35["scope"]] = 0x0;
                    if (_0x27c5ef && _0x52e264)
                      _0x2ecf70[_0x34e35["shoot"]] = 0x1;
                    return;
                  }
                  if (!this["me"]["weapon"]["noAim"])
                    _0x2ecf70[_0x34e35["scope"]] = 0x1;
                  (this["me"]["weapon"]["noAim"] ||
                    this["me"]["aimVal"] === 0x0) &&
                    _0x52e264 &&
                    (_0x2ecf70[_0x34e35["shoot"]] = 0x1);
                }
              }
            }));
        }
      } else {
        if (
          !_0x273f39 &&
          this["game"]["gameState"] !== 0x4 &&
          this["game"]["gameState"] !== 0x5
        )
          ((this["legitTarget"] = null),
            (this["lastAimTarget"] = null),
            this["settings"]["antiAimEnabled"] &&
              !this["me"]["didShoot"] &&
              this["me"]["aimVal"] !== 0x0 &&
              (_0x2ecf70[_0x34e35["xdir"]] = -Math["PI"] * 0x1f4));
        else
          this["me"]["weapon"]["nAuto"] &&
            this["me"]["didShoot"] &&
            ((_0x2ecf70[_0x34e35["shoot"]] = 0x0),
            (_0x2ecf70[_0x34e35["scope"]] = 0x0),
            (this["me"]["inspecting"] = ![]),
            (this["me"]["inspectX"] = 0x0));
      }
    }
    ["showGUI"]() {
      this["closeColorPicker"]?.();
      if (
        !this["GUI"]["windowIndex"] ||
        typeof this["pageWindow"]["showWindow"] !== "function"
      )
        return;
      if (this["guiHiddenMenu"]?.["isConnected"])
        this["guiHiddenMenu"]["style"]["removeProperty"]("display");
      ((this["guiHiddenMenu"] = null),
        (this["GUI"]["windowObj"]["width"] = ["dropdown", "liquidbounce"][
          "includes"
        ](this["settings"]["guiLayout"])
          ? 0x668
          : 0x352),
        (document["pointerLockElement"] || document["mozPointerLockElement"]) &&
          (document["exitPointerLock"] || document["mozExitPointerLock"])?.[
            "call"
          ](document),
        this["pageWindow"]["showWindow"](this["GUI"]["windowIndex"], !![]));
    }
    ["closeGUI"]() {
      if (!this["isClickGuiVisible"]()) return;
      (this["closeColorPicker"]?.(), this["panelDragCleanup"]?.());
      const _0x456870 = document["querySelector"](".anonimbiri-menu-container");
      if (_0x456870?.["contains"](document["activeElement"]))
        document["activeElement"]["blur"]?.();
      if (typeof this["game"]?.["ui"]?.["toggleWindow"] === "function")
        this["game"]["ui"]["toggleWindow"](![]);
      else {
        if (typeof this["pageWindow"]["showWindow"] === "function")
          this["pageWindow"]["showWindow"](0x0);
      }
      (_0x456870?.["isConnected"] &&
        (_0x456870["style"]["setProperty"]("display", "none", "important"),
        (this["guiHiddenMenu"] = _0x456870)),
        this["updateClientHud"](!![]),
        this["updateArrayList"](!![]));
    }
    ["handleMenuKey"](_0x2a44a7) {
      if (this["isBindingHotkey"]) return ![];
      const _0xb5c60f = this["isClickGuiVisible"](),
        _0x456826 = [
          "ShiftRight",
          "Insert",
          this["hotkeys"]?.["toggleMenu"] || "F1",
        ]["includes"](_0x2a44a7["code"]);
      if (!_0x456826 && !(_0x2a44a7["code"] === "Escape" && _0xb5c60f))
        return ![];
      if (
        !_0xb5c60f &&
        document["activeElement"]?.["closest"]?.(
          "input,textarea,select,[contenteditable]:not([contenteditable=false])",
        )
      )
        return ![];
      (_0x2a44a7["preventDefault"](),
        _0x2a44a7["stopImmediatePropagation"]?.(),
        _0x2a44a7["stopPropagation"]());
      if (!_0x2a44a7["repeat"]) {
        if (
          _0x456826 &&
          !document["activeElement"]?.["closest"]?.(
            "input,textarea,select,[contenteditable]:not([contenteditable=false])",
          )
        )
          this["toggleBoundModules"](_0x2a44a7["code"]);
        if (_0xb5c60f) this["closeGUI"]();
        else this["showGUI"]();
      }
      return !![];
    }
    ["initGameGUI"]() {
      this["initializeNotifierContainer"]();
      const _0x2f6c63 = document["createElement"]("link");
      ((_0x2f6c63["href"] =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Rajdhani:wght@400;500;600;700&display=swap"),
        (_0x2f6c63["rel"] = "stylesheet"),
        document["head"]["appendChild"](_0x2f6c63));
      const _0x360139 =
          "\x0a.anonimbiri-menu-container,.anonimbiri-hotkey-modal,#shiro-menu-button,#anonimbiri-notify-wrap{--ab-pink:#ffb7d5;--ab-blue:#a9dcff;--ab-lilac:#d8c7f5;--ab-text:#f4f2ff;--ab-muted:#b0bad2;--ab-candy:linear-gradient(110deg,var(--ab-pink),var(--ab-lilac)\x2048%,var(--ab-blue));}\x0a\x0a.anonimbiri-menu-container{font-family:\x27Rajdhani\x27,\x27Segoe\x20UI\x27,sans-serif!important;background:linear-gradient(120deg,rgba(38,27,49,.98),rgba(22,38,55,.98))!important;border:1px\x20solid\x20rgba(169,220,255,0.15)!important;border-radius:12px!important;box-shadow:0\x2020px\x2060px\x20rgba(0,0,0,0.6),0\x200\x2030px\x20rgba(169,220,255,0.08),inset\x200\x201px\x200\x20rgba(255,255,255,0.05)!important;padding:0!important;overflow:hidden!important;animation:abSlide\x20.5s\x20ease-out;display:flex!important;flex-direction:column!important;}\x0a@keyframes\x20abSlide{from{opacity:0;transform:translate(-50%,calc(-50%\x20-\x2020px))\x20scale(.95)}to{opacity:1;transform:translate(-50%,-50%)\x20scale(1)}}\x0a\x0a.anonimbiri-menu-header{width:100%;height:clamp(150px,26vh,260px);min-height:150px;position:relative;overflow:hidden;border-radius:12px\x2012px\x200\x200;flex-shrink:0;}\x0a.anonimbiri-menu-header::before{content:\x27\x27;position:absolute;inset:0;background-image:radial-gradient(circle\x20at\x2014%\x2078%,rgba(255,183,213,.9),transparent\x2045%),radial-gradient(circle\x20at\x2082%\x2028%,rgba(169,220,255,.95),transparent\x2048%),linear-gradient(110deg,#f5c0de,#d8c7f5\x2048%,#a9dcff);background-size:140%\x20140%,140%\x20140%,180%\x20180%;background-position:0%\x2050%,100%\x2050%,0%\x2050%;animation:abCottonFade\x2014s\x20ease-in-out\x20infinite\x20alternate;z-index:1;}\x0a.anonimbiri-menu-header::after{content:\x27\x27;position:absolute;bottom:0;left:0;right:0;height:50px;background:linear-gradient(to\x20top,rgba(27,31,47,.98),transparent);z-index:2;}\x0a.anonimbiri-brand{position:absolute;z-index:4;top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;color:#27334f;font-size:clamp(40px,7vw,76px);font-weight:700;letter-spacing:.02em;text-shadow:0\x202px\x2016px\x20rgba(255,255,255,.72);pointer-events:none;}\x0a.anonimbiri-brand\x20small{display:block;text-align:center;font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:#34435e;}\x0a.anonimbiri-hook-status{padding:5px\x2012px;color:var(--ab-text);font-size:12px;letter-spacing:.04em;background:linear-gradient(90deg,rgba(255,183,213,.16),rgba(169,220,255,.16));border-bottom:1px\x20solid\x20rgba(169,220,255,.18);flex-shrink:0;}\x0a.anonimbiri-petal{position:absolute;width:8px;height:8px;background:radial-gradient(ellipse,var(--ab-pink),var(--ab-blue));border-radius:50%\x200\x2050%\x200;opacity:0;z-index:3;pointer-events:none;animation:abFall\x20linear\x20infinite;}\x0a@keyframes\x20abFall{0%{opacity:0;transform:translate(0,-20px)\x20rotate(0)\x20scale(.5)}10%{opacity:.5}90%{opacity:.2}100%{opacity:0;transform:translate(80px,220px)\x20rotate(720deg)\x20scale(.1)}}\x0a\x0a.anonimbiri-tab-container{display:flex;background:rgba(15,23,38,.86);border-bottom:1px\x20solid\x20rgba(169,220,255,0.1);padding:0\x206px;flex-shrink:0;}\x0a.anonimbiri-tab{flex:1;padding:14px\x208px;font-size:14px;font-weight:700;letter-spacing:1.2px;color:var(--ab-muted);cursor:pointer;transition:all\x20.3s\x20ease;border-bottom:2px\x20solid\x20transparent;background:transparent;font-family:\x27Rajdhani\x27,sans-serif;text-align:center;position:relative;overflow:hidden;}\x0a.anonimbiri-tab::before{content:\x27\x27;position:absolute;inset:auto\x2012px\x200;height:2px;background:var(--ab-candy);opacity:0;transition:opacity\x20.3s\x20ease;}\x0a.anonimbiri-tab.active::before{opacity:1}\x0a.anonimbiri-tab:hover{color:var(--ab-muted);background:rgba(169,220,255,0.05);}\x0a.anonimbiri-tab.active{color:var(--ab-pink);border-bottom-color:transparent;background:linear-gradient(110deg,rgba(255,183,213,.08),rgba(169,220,255,.08));}\x0a\x0a.anonimbiri-content-wrap{display:flex;flex:1;min-height:0;overflow:hidden;}\x0a.anonimbiri-tab-content{flex:1;padding:16px\x2020px;overflow-y:auto;min-height:0;}\x0a.anonimbiri-tab-content::-webkit-scrollbar{width:5px}\x0a.anonimbiri-tab-content::-webkit-scrollbar-track{background:transparent}\x0a.anonimbiri-tab-content::-webkit-scrollbar-thumb{background:var(--ab-blue);border-radius:3px}\x0a\x0a.anonimbiri-esp-panel{width:220px;background:rgba(15,23,38,.86);border-left:1px\x20solid\x20rgba(169,220,255,0.1);display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;}\x0a.anonimbiri-esp-title{text-align:center;font-size:11px;font-weight:700;letter-spacing:1.5px;color:var(--ab-blue);text-transform:uppercase;padding:12px;border-bottom:1px\x20solid\x20rgba(169,220,255,0.1);flex-shrink:0;}\x0a.anonimbiri-esp-wrap{flex:1;display:flex;align-items:center;justify-content:center;padding:8px;overflow:hidden;}\x0a#anonimbiri-espCanvas{border-radius:8px;border:1px\x20solid\x20rgba(169,220,255,0.1);max-width:100%;max-height:100%;}\x0a\x0a.anonimbiri-tab-pane{display:none}\x0a.anonimbiri-tab-pane.active{display:block;animation:abFade\x20.3s\x20ease;}\x0a@keyframes\x20abFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\x0a\x0a.anonimbiri-section{font-size:12px;font-weight:700;letter-spacing:1.5px;color:var(--ab-blue);text-transform:uppercase;margin:18px\x200\x2010px\x204px;opacity:1;}\x0a.anonimbiri-section:first-child{margin-top:0}\x0a\x0a.anonimbiri-menu-item{display:flex;justify-content:space-between;align-items:center;padding:12px\x2016px;margin:6px\x200;background:linear-gradient(110deg,rgba(255,183,213,.07),rgba(169,220,255,.07));border:1px\x20solid\x20transparent;border-radius:8px;transition:all\x20.3s\x20ease;cursor:pointer;position:relative;overflow:visible;}\x0a.anonimbiri-menu-item::before{display:none}\x0a.anonimbiri-menu-item:hover{background:linear-gradient(110deg,rgba(255,183,213,.14),rgba(169,220,255,.14));border-color:rgba(169,220,255,0.25);}\x0a.anonimbiri-menu-item.active{background:linear-gradient(110deg,rgba(255,183,213,.14),rgba(169,220,255,.14));border-color:rgba(169,220,255,0.25);}\x0a.anonimbiri-menu-item-content{display:flex;align-items:center;gap:14px;}\x0a.anonimbiri-menu-item-icon{width:24px;height:24px;stroke:var(--ab-pink);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;transition:all\x20.3s\x20ease;}\x0a.anonimbiri-menu-item:hover\x20.anonimbiri-menu-item-icon{stroke:var(--ab-blue);}\x0a.anonimbiri-menu-item\x20label{color:var(--ab-text);font-weight:600;font-size:16px;letter-spacing:0.5px;cursor:pointer;font-family:\x27Rajdhani\x27,sans-serif;white-space:nowrap;transition:color\x20.3s\x20ease;}\x0a.anonimbiri-controls{display:flex;align-items:center;gap:10px;}\x0a\x0a.anonimbiri-menu-item[data-tip]:hover::after{content:attr(data-tip);position:absolute;bottom:calc(100%\x20+\x206px);left:50%;transform:translateX(-50%);background:rgba(20,28,44,.98);color:var(--ab-muted);padding:8px\x2012px;border-radius:8px;font-size:12px;max-width:280px;z-index:100;border:1px\x20solid\x20rgba(169,220,255,0.25);box-shadow:0\x204px\x2016px\x20rgba(0,0,0,.5);pointer-events:none;animation:abTipIn\x20.2s\x20ease;line-height:1.4;white-space:normal;font-weight:500;}\x0a@keyframes\x20abTipIn{from{opacity:0;transform:translateX(-50%)\x20translateY(4px)}to{opacity:1;transform:translateX(-50%)\x20translateY(0)}}\x0a\x0a.anonimbiri-toggle-switch{position:relative;width:48px;height:26px;background:#36425b;border-radius:13px;pointer-events:none;transition:all\x20.3s\x20ease;border:none;}\x0a.anonimbiri-toggle-switch::before{content:\x27\x27;position:absolute;top:3px;left:3px;width:20px;height:20px;background:#bbb;border-radius:50%;transition:all\x20.3s\x20cubic-bezier(.68,-.55,.265,1.55);box-shadow:0\x201px\x203px\x20rgba(0,0,0,.3);}\x0a.anonimbiri-toggle-switch.active{background:var(--ab-candy);box-shadow:0\x200\x2012px\x20rgba(169,220,255,0.25);}\x0a.anonimbiri-toggle-switch.active::before{left:25px;background:#fff;}\x0a\x0a.anonimbiri-hk-btn{padding:4px\x2010px;background:rgba(17,25,40,.88);border:1px\x20solid\x20rgba(169,220,255,0.1);border-radius:4px;color:var(--ab-muted);font-size:11px;cursor:pointer;transition:all\x20.3s\x20ease;white-space:nowrap;min-width:34px;text-align:center;font-family:\x27Rajdhani\x27,sans-serif;pointer-events:auto;font-weight:600;}\x0a.anonimbiri-hk-btn:hover{border-color:var(--ab-blue);color:var(--ab-pink);}\x0a.anonimbiri-hk-btn.bound{background:rgba(169,220,255,0.1);border-color:rgba(169,220,255,0.3);color:var(--ab-pink);}\x0a\x0a.anonimbiri-color-preview{width:34px;height:26px;border:2px\x20solid\x20rgba(255,255,255,.15);border-radius:4px;pointer-events:auto;transition:all\x20.3s\x20ease;}\x0a.anonimbiri-menu-item:hover\x20.anonimbiri-color-preview{box-shadow:0\x200\x208px\x20rgba(169,220,255,0.25);border-color:rgba(255,255,255,.25);}\x0a\x0a.anonimbiri-slider-container{display:flex;align-items:center;gap:10px;min-width:190px;}\x0a.anonimbiri-slider{appearance:none;-webkit-appearance:none;width:140px;height:6px;background:#36425b;border:none;border-radius:3px;outline:none;}\x0a.anonimbiri-slider::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;border:none;box-shadow:0\x201px\x204px\x20rgba(0,0,0,.3);cursor:grab;}\x0a.anonimbiri-slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:none;cursor:grab;}\x0a.anonimbiri-slider::-moz-range-track{height:6px;background:#36425b;border:none;border-radius:3px;}\x0a.anonimbiri-slider-value{color:var(--ab-text);font-weight:600;font-size:14px;width:55px;text-align:center;background:rgba(17,25,40,.88);border:1px\x20solid\x20rgba(169,220,255,0.1);border-radius:4px;padding:4px\x206px;-moz-appearance:textfield;font-family:\x27Rajdhani\x27,sans-serif;outline:none;}\x0a.anonimbiri-slider-value:focus{border-color:var(--ab-blue);}\x0a\x0a.anonimbiri-menu-container\x20hr{border:none;border-top:1px\x20solid\x20rgba(169,220,255,0.1);margin:12px\x200;}\x0a\x0a.anonimbiri-hotkey-modal{position:fixed;inset:0;background:rgba(0,0,0,.7);display:none;align-items:center;justify-content:center;z-index:2000;backdrop-filter:blur(4px);}\x0a.anonimbiri-hotkey-modal.active{display:flex}\x0a.anonimbiri-hotkey-content{background:linear-gradient(120deg,rgba(38,27,49,.98),rgba(22,38,55,.98));border:1px\x20solid\x20rgba(169,220,255,0.25);padding:30px\x2045px;border-radius:12px;box-shadow:0\x2020px\x2060px\x20rgba(0,0,0,.5);text-align:center;animation:abMIn\x20.3s\x20ease;}\x0a@keyframes\x20abMIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}\x0a.anonimbiri-hotkey-content\x20h2{color:var(--ab-pink);font-size:20px;font-weight:600;margin-bottom:10px;letter-spacing:2px;font-family:\x27Rajdhani\x27,sans-serif;}\x0a.anonimbiri-hotkey-content\x20p{color:var(--ab-muted);font-size:13px;margin-bottom:12px;font-family:\x27Rajdhani\x27,sans-serif;}\x0a.anonimbiri-hotkey-content\x20p\x20span{color:var(--ab-pink);font-weight:700;}\x0a\x0a#shiro-menu-button\x20{\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20padding:\x200\x2012px\x200\x206px;\x0a\x20\x20\x20\x20height:\x2045px;\x0a\x20\x20\x20\x20margin-right:\x2015px;\x0a\x20\x20\x20\x20background-color:\x20rgba(29,32,48,.95);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(169,220,255,.3);\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20transition:\x20all\x20.3s\x20ease;\x0a\x20\x20\x20\x20border-radius:\x208px;\x0a}\x0a#shiro-menu-button:hover\x20{\x0a\x20\x20\x20\x20border-color:\x20var(--ab-blue);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x2015px\x20rgba(169,220,255,0.25);\x0a\x20\x20\x20\x20background:\x20linear-gradient(110deg,rgba(255,183,213,.14),rgba(169,220,255,.14));\x0a}\x0a.shiro-icon\x20{\x0a\x20\x20\x20\x20width:\x2032px;\x0a\x20\x20\x20\x20height:\x2032px;\x0a\x20\x20\x20\x20background:var(--ab-candy);\x0a\x20\x20\x20\x20border-radius:\x209px;\x0a\x20\x20\x20\x20display:grid;\x0a\x20\x20\x20\x20place-items:center;\x0a\x20\x20\x20\x20color:#26344f;\x0a\x20\x20\x20\x20font-size:22px;\x0a\x20\x20\x20\x20font-weight:700;\x0a}\x0a.shiro-icon{flex:0\x200\x2032px;background:#fff;overflow:hidden;}\x0a.cracky-logo{display:block;object-fit:contain;background:#fff;}\x0a.shiro-icon\x20.cracky-logo{width:32px;height:32px;}\x0a.shiro-label\x20{\x0a\x20\x20\x20\x20color:\x20var(--ab-pink);\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20font-family:\x20\x27Rajdhani\x27,\x20sans-serif;\x0a\x20\x20\x20\x20letter-spacing:\x200.5px;\x0a\x20\x20\x20\x20white-space:\x20nowrap;\x0a}\x0a\x0a#anonimbiri-notify-wrap{position:fixed;top:16px;right:16px;z-index:20000;display:flex;flex-direction:column;gap:10px}\x0a.anonimbiri-notify-card{font-family:\x27Rajdhani\x27,sans-serif;display:flex;justify-content:space-between;align-items:center;padding:12px\x2016px;background:linear-gradient(120deg,rgba(38,27,49,.96),rgba(22,38,55,.96));border:1px\x20solid\x20rgba(169,220,255,.25);border-radius:12px;backdrop-filter:blur(6px);width:min(92vw,360px);cursor:default;transform:translateX(calc(100%\x20+\x2020px));opacity:0;transition:transform\x20.35s\x20ease,opacity\x20.35s\x20ease;}\x0a.anonimbiri-notify-card.visible{transform:translateX(0);opacity:1;box-shadow:0\x2010px\x2025px\x20rgba(169,220,255,.15);}\x0a.anonimbiri-notify-content{display:flex;align-items:center;gap:12px;min-width:0}\x0a.anonimbiri-notify-logo{width:40px;height:40px;flex:0\x200\x2040px;background:var(--ab-candy);border-radius:8px;display:grid;place-items:center;color:#26344f;font-size:26px;font-weight:700;}\x0a.anonimbiri-notify-logo{background:#fff;overflow:hidden;}\x0a.anonimbiri-notify-logo\x20.cracky-logo{width:40px;height:40px;}\x0a.anonimbiri-notify-texts{display:flex;flex-direction:column;gap:3px;min-width:0}\x0a.anonimbiri-notify-title{color:var(--ab-text);font-weight:700;letter-spacing:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;}\x0a.anonimbiri-notify-message{color:var(--ab-muted);font-size:11px;line-height:1.4;white-space:normal;word-break:break-word;}\x0a.anonimbiri-notify-controls{display:flex;align-items:center;gap:8px;padding-left:5px}\x0a.anonimbiri-notify-action-btn{background:rgba(169,220,255,.1);color:var(--ab-pink);padding:5px\x2012px;border-radius:4px;font-size:12px;font-weight:700;border:1px\x20solid\x20rgba(169,220,255,.3);min-width:40px;text-align:center;cursor:pointer;transition:all\x20.3s\x20ease;font-family:\x27Rajdhani\x27,sans-serif;}\x0a.anonimbiri-notify-action-btn:hover{background:var(--ab-blue);color:#fff;}\x0a\x0a@keyframes\x20abCottonFade{from{background-position:0%\x2050%,100%\x2050%,0%\x2050%}to{background-position:75%\x2050%,25%\x2050%,100%\x2050%}}\x0a.anonimbiri-petal:nth-child(even){background:radial-gradient(ellipse,var(--ab-blue),var(--ab-lilac));}\x0a.anonimbiri-menu-item:nth-child(even)\x20.anonimbiri-menu-item-icon{stroke:var(--ab-blue);}\x0a.anonimbiri-hk-btn.bound{color:var(--ab-blue);}\x0a.anonimbiri-slider,.anonimbiri-slider::-moz-range-track{background:var(--ab-candy);}\x0a.shiro-label{background:var(--ab-candy);background-clip:text;-webkit-background-clip:text;color:transparent;}\x0a.anonimbiri-notify-action-btn:hover{background:var(--ab-candy);color:#202a3e;}\x0a@media(max-width:720px){.anonimbiri-esp-panel{display:none}.anonimbiri-tab-content{padding:12px}.anonimbiri-menu-item{padding:10px}.anonimbiri-menu-item-content{gap:8px}.anonimbiri-menu-item\x20label{font-size:14px;white-space:normal}.anonimbiri-slider-container{min-width:0}.anonimbiri-slider{width:90px}}\x0a@media(prefers-reduced-motion:reduce){.anonimbiri-menu-header::before,.anonimbiri-petal,.anonimbiri-menu-container,.anonimbiri-tab-pane.active,.anonimbiri-hotkey-content{animation:none!important}.anonimbiri-notify-card,.anonimbiri-toggle-switch,.anonimbiri-toggle-switch::before{transition:none!important}}\x0a",
        _0x2b2d2d = document["createElement"]("style");
      ((_0x2b2d2d["textContent"] =
        _0x360139 +
        "\x0a.anonimbiri-menu-container,.anonimbiri-hotkey-modal,#shiro-menu-button,#anonimbiri-notify-wrap{--ab-pink:var(--cracky-primary,#ffb7d5);--ab-blue:var(--cracky-secondary,#a9dcff);--ab-lilac:var(--cracky-midpoint,#d8c7f5);--ab-candy:linear-gradient(115deg,var(--ab-pink),var(--ab-lilac),var(--ab-blue));}\x0a.anonimbiri-menu-container{background:var(--cracky-surface,#171d2e)!important;border-color:color-mix(in\x20srgb,var(--ab-blue)\x2028%,transparent)!important;border-radius:18px!important;max-width:calc(100vw\x20-\x2024px)!important;max-height:calc(100vh\x20-\x2032px)!important;animation:none!important;}\x0a.anonimbiri-menu-header{height:120px;min-height:120px;border-radius:17px\x2017px\x200\x200;}\x0a.anonimbiri-menu-header::before{background-image:radial-gradient(ellipse\x20at\x2020%\x2080%,var(--ab-pink),transparent\x2065%),radial-gradient(ellipse\x20at\x2080%\x2020%,var(--ab-blue),transparent\x2065%),var(--ab-candy);}\x0a.anonimbiri-menu-header::after{height:40px;background:linear-gradient(to\x20top,var(--cracky-surface),transparent);}\x0a.anonimbiri-brand{font-size:46px;letter-spacing:-.04em;color:#151d30;}\x0a.anonimbiri-brand\x20small{font-size:11px;letter-spacing:.12em;color:#192238;}\x0a.anonimbiri-brand{display:flex;align-items:center;gap:14px;}\x0a.anonimbiri-brand\x20.cracky-logo{width:64px;height:70px;flex:0\x200\x2064px;border-radius:12px;box-shadow:0\x204px\x2016px\x20#0003;}\x0a@media(max-width:540px){.anonimbiri-brand{gap:10px;}.anonimbiri-brand\x20.cracky-logo{width:46px;height:50px;flex-basis:46px;border-radius:9px;}}\x0a.anonimbiri-hook-status{background:color-mix(in\x20srgb,var(--ab-blue)\x208%,transparent);border-color:color-mix(in\x20srgb,var(--ab-blue)\x2014%,transparent);font-size:11px;line-height:1.4;overflow-wrap:anywhere;letter-spacing:0;}\x0a.cracky-appearance{display:grid;grid-template-columns:minmax(140px,1fr)\x20minmax(140px,1fr);gap:12px;padding:12px\x2018px;border-bottom:1px\x20solid\x20#ffffff14;flex-shrink:0;}\x0a.cracky-appearance\x20label{display:flex;flex-direction:column;gap:5px;color:var(--ab-muted);font:600\x2011px\x20\x27Segoe\x20UI\x27,sans-serif;letter-spacing:.06em;text-transform:uppercase;}\x0a.cracky-select{appearance:auto;min-width:0;width:100%;padding:8px\x2010px;border:1px\x20solid\x20color-mix(in\x20srgb,var(--ab-blue)\x2025%,transparent);border-radius:8px;background:var(--cracky-surface);color:var(--ab-text);font:500\x2013px\x20\x27Segoe\x20UI\x27,sans-serif;cursor:pointer;}\x0a.cracky-select:focus-visible,.anonimbiri-tab:focus-visible,summary:focus-visible{outline:2px\x20solid\x20var(--ab-blue);outline-offset:2px;}\x0a.anonimbiri-tab-container,.anonimbiri-esp-panel{background:#00000020;border-color:#ffffff12;}\x0a.anonimbiri-tab{border:0;border-radius:0;}\x0a.anonimbiri-tab.active{background:color-mix(in\x20srgb,var(--ab-pink)\x209%,transparent);}\x0a.anonimbiri-menu-item{background:linear-gradient(115deg,color-mix(in\x20srgb,var(--ab-pink)\x205%,transparent),color-mix(in\x20srgb,var(--ab-blue)\x205%,transparent));border-radius:10px;padding:10px\x2012px;}\x0a.anonimbiri-menu-item.active,.anonimbiri-menu-item:hover{background:linear-gradient(115deg,color-mix(in\x20srgb,var(--ab-pink)\x2012%,transparent),color-mix(in\x20srgb,var(--ab-blue)\x2012%,transparent));border-color:color-mix(in\x20srgb,var(--ab-blue)\x2023%,transparent);}\x0a.anonimbiri-menu-item[aria-disabled=true]{opacity:.5;cursor:default;}\x0a.anonimbiri-menu-item\x20label{font-size:14px;white-space:normal;}\x0a.anonimbiri-controls{font-size:11px;flex-shrink:0;max-width:55%;}\x0a.anonimbiri-menu-item-content{gap:10px;min-width:0;}\x0a.anonimbiri-menu-container\x20*,.anonimbiri-hotkey-modal\x20*{font-family:\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none;box-sizing:border-box;}\x0a.cracky-diagnostics{margin:0\x2016px\x2012px;border-top:1px\x20solid\x20#ffffff12;color:var(--ab-muted);flex-shrink:0;font-size:11px;}\x0a.anonimbiri-menu-container\x20[hidden]{display:none!important;}\x0a.cracky-config-manager{display:grid;gap:10px;padding:12px\x200;text-align:left;}\x0a.cracky-config-manager\x20h3{font:600\x2014px/1.4\x20Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;margin:0;color:var(--cracky-secondary);}\x0a.cracky-config-manager\x20label{display:grid;gap:5px;font-size:11px!important;color:var(--ab-muted);}\x0a.cracky-config-manager\x20.cracky-select{width:100%;min-width:0;}\x0a.cracky-cosmetic-search{display:grid;gap:6px;margin:8px\x200;}\x0a.cracky-cosmetic-search\x20small{font-size:10px!important;color:var(--ab-muted);line-height:1.5;}\x0a.cracky-setting-select{max-width:160px;text-overflow:ellipsis;}\x0a.cracky-config-actions{display:flex;gap:6px;flex-wrap:wrap;}\x0a.cracky-config-actions\x20button.cracky-select{flex:1;width:auto;cursor:pointer;}\x0a.cracky-config-actions\x20button:disabled{opacity:.4;cursor:not-allowed;}\x0a#cracky-config-status{font:400\x2011px/1.6\x20Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;margin:0;color:var(--ab-muted);overflow-wrap:anywhere;}\x0a#cracky-theme-search{min-width:0;width:100%;margin:0\x200\x206px;font-size:12px!important;}\x0a#cracky-theme-count{display:block;font-size:10px!important;color:var(--ab-muted);margin-top:4px;}\x0a.cracky-diagnostics>summary{padding:10px\x200;cursor:pointer;font-size:11px!important;}\x0a.cracky-diagnostics\x20.anonimbiri-hook-status{background:none;border:0;padding:4px\x200;font-size:11px!important;}\x0a.anonimbiri-tab-pane>summary{display:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-container{width:1240px!important;max-width:calc(100vw\x20-\x2040px)!important;height:calc(100vh\x20-\x20120px)!important;background:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:visible!important;animation:none;pointer-events:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-header,html[data-cracky-layout=dropdown]\x20.anonimbiri-tab-container,html[data-cracky-layout=dropdown]\x20.anonimbiri-esp-panel{display:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-content-wrap{overflow:visible;display:block;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-content{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;padding:0;overflow:visible;align-items:start;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane{display:block!important;animation:none;border:1px\x20solid\x20#ffffff10;border-radius:10px;margin:0;padding:0\x2016px\x2012px;background:var(--cracky-panel-surface,#111214ee);backdrop-filter:blur(14px);box-shadow:0\x2012px\x2040px\x20#0004;max-height:calc(100vh\x20-\x20140px);overflow-y:auto;overflow-x:hidden;pointer-events:auto;scrollbar-width:thin;scrollbar-color:#ffffff24\x20transparent;}\x0ahtml[data-cracky-layout=dropdown]\x20#anonimbiri-tab-aimbot{order:0;margin-top:0;}\x0ahtml[data-cracky-layout=dropdown]\x20#anonimbiri-tab-visuals{order:1;margin-top:0;}\x0ahtml[data-cracky-layout=dropdown]\x20#anonimbiri-tab-misc{order:2;margin-top:0;}\x0ahtml[data-cracky-layout=dropdown]\x20#anonimbiri-tab-configs{order:3;margin-top:0;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane:not([open]){padding-bottom:0;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane>summary{display:block;position:sticky;top:0;z-index:2;cursor:grab;touch-action:none;user-select:none;margin:0\x20-16px\x2010px;padding:13px\x2016px;text-align:center;color:#f1f1f3;font-size:11px!important;font-weight:800;letter-spacing:.18em;background:#0c0d0f;border-bottom:1px\x20solid\x20#ffffff08;list-style:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane>summary.cracky-panel-dragging{cursor:grabbing;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane>summary::before{content:\x27\x27;position:absolute;bottom:0;left:25%;right:25%;height:1px;background:var(--ab-candy);opacity:.4;}\x0a.cracky-drag-handle{position:absolute;right:13px;top:8px;cursor:grab;touch-action:none;font-size:19px!important;line-height:22px;letter-spacing:0;color:#afb1b8;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-item{background:transparent;border:0;border-radius:0;padding:9px\x200;margin:0;min-height:37px;gap:8px;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-item:hover{background:#ffffff04;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-item-icon{display:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-item\x20label{font-size:12px!important;font-weight:500;letter-spacing:0;color:#c7c8cc;line-height:1.4;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-item[data-tip]:hover::after{display:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-section{font-size:10px!important;color:#73767f;letter-spacing:.1em;margin:14px\x200\x204px;text-transform:uppercase;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-controls{gap:8px;max-width:56%;font-size:9px!important;color:#858894;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-toggle-switch{width:15px;height:15px;min-width:15px;border:2px\x20solid\x20#5e6065;border-radius:4px;background:none;box-shadow:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-toggle-switch::before{display:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-toggle-switch.active{background:var(--ab-candy);border-color:transparent;box-shadow:0\x200\x208px\x20color-mix(in\x20srgb,var(--ab-pink)\x2018%,transparent);}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-hk-btn{padding:3px\x206px;min-width:28px;font-size:9px!important;border:1px\x20solid\x20#ffffff0b;background:#ffffff06;color:#9699a3;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-slider-container{min-width:0;gap:6px;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-slider{width:70px;height:3px;background:#303135;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-slider::-webkit-slider-thumb{width:11px;height:11px;background:var(--ab-blue);}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-slider::-moz-range-thumb{width:11px;height:11px;background:var(--ab-blue);}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-slider-value{width:35px!important;padding:3px;font-size:10px!important;background:#ffffff05;border:1px\x20solid\x20#ffffff08;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-color-preview{width:25px;height:15px;border:1px\x20solid\x20#ffffff20;border-radius:4px;}\x0ahtml[data-cracky-layout=dropdown]\x20.cracky-select{font-size:11px!important;padding:6px;background:#202124;border:1px\x20solid\x20#ffffff10;border-radius:5px;}\x0ahtml[data-cracky-layout=dropdown]\x20.cracky-appearance{grid-template-columns:1fr;padding:4px\x200\x2012px;gap:10px;}\x0ahtml[data-cracky-layout=dropdown]\x20.cracky-appearance\x20label{font-size:10px!important;color:#92959e;letter-spacing:0;text-transform:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.cracky-diagnostics{margin:12px\x200\x200;}\x0ahtml[data-cracky-layout=dropdown]\x20.cracky-diagnostics\x20.anonimbiri-hook-status{font-size:10px!important;color:#9499a6;}\x0a@media(max-width:760px){html[data-cracky-layout=dropdown]\x20.anonimbiri-menu-container{height:calc(100vh\x20-\x2040px)!important;overflow-y:auto!important;pointer-events:auto;}html[data-cracky-layout=dropdown]\x20.anonimbiri-tab-content{display:flex;flex-direction:column;gap:14px;}html[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane{width:100%;max-height:none;}html[data-cracky-layout=dropdown]\x20#anonimbiri-tab-visuals,html[data-cracky-layout=dropdown]\x20#anonimbiri-tab-misc{margin-top:0;}html[data-cracky-layout=dropdown]\x20#anonimbiri-tab-misc{order:-1;}}\x0a.anonimbiri-hotkey-content,.anonimbiri-notify-card{background:var(--cracky-surface)!important;border-color:var(--ab-blue);}\x0a#shiro-menu-button{background:var(--cracky-surface);border-color:color-mix(in\x20srgb,var(--ab-blue)\x2028%,transparent);}\x0a.anonimbiri-menu-container,.anonimbiri-hotkey-content,.anonimbiri-notify-card,#shiro-menu-button,#cracky-color-popover{border:1px\x20solid\x20color-mix(in\x20srgb,var(--cracky-secondary)\x2060%,transparent)!important;box-shadow:0\x2012px\x2036px\x20#0006,-5px\x200\x2024px\x20color-mix(in\x20srgb,var(--cracky-primary)\x2018%,transparent),5px\x200\x2024px\x20color-mix(in\x20srgb,var(--cracky-secondary)\x2018%,transparent)!important;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane{border-color:color-mix(in\x20srgb,var(--cracky-secondary)\x2060%,transparent)!important;box-shadow:0\x2012px\x2036px\x20#0006,-5px\x200\x2024px\x20color-mix(in\x20srgb,var(--cracky-primary)\x2018%,transparent),5px\x200\x2024px\x20color-mix(in\x20srgb,var(--cracky-secondary)\x2018%,transparent)!important;}\x0a.anonimbiri-color-preview{cursor:pointer;flex-shrink:0;padding:0;min-width:28px;}\x0a.cracky-text-input{width:130px;max-width:100%;padding:7px\x209px;border:1px\x20solid\x20color-mix(in\x20srgb,var(--cracky-secondary)\x2035%,transparent);border-radius:6px;background:#0003;color:var(--cracky-secondary);font:12px\x20\x27Segoe\x20UI\x27,Arial,sans-serif!important;}\x0a#cracky-color-popover{position:fixed;z-index:2147483646;width:260px;padding:14px;background:var(--cracky-surface,#171d2e);border-radius:12px;max-height:calc(100vh\x20-\x2024px);overflow:auto;color:#f4f2ff;pointer-events:auto;}\x0a#cracky-color-popover,#cracky-color-popover\x20*{box-sizing:border-box;font-family:\x27Segoe\x20UI\x27,Arial,sans-serif!important;text-shadow:none!important;letter-spacing:normal!important;}\x0a#cracky-color-popover\x20.cracky-picker-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:13px!important;font-weight:600;}\x0a#cracky-color-popover\x20button{border:1px\x20solid\x20#ffffff25;border-radius:6px;background:#ffffff08;color:#e9ebf6;cursor:pointer;padding:5px\x209px;font-size:12px!important;}\x0a#cracky-color-popover\x20.cracky-picker-sv{position:relative;width:100%;height:140px;border-radius:7px;background:linear-gradient(to\x20top,#000,transparent),linear-gradient(to\x20right,#fff,transparent),var(--picker-hue);cursor:crosshair;touch-action:none;overflow:hidden;}\x0a#cracky-color-popover\x20.cracky-picker-cursor{position:absolute;width:12px;height:12px;border:2px\x20solid\x20white;border-radius:50%;box-shadow:0\x200\x200\x201px\x20#0008;transform:translate(-50%,-50%);pointer-events:none;}\x0a#cracky-color-popover\x20.cracky-picker-hue{display:block;appearance:none;width:100%;height:12px;border:0;border-radius:6px;background:linear-gradient(to\x20right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);margin:14px\x200;cursor:pointer;}\x0a#cracky-color-popover\x20.cracky-picker-hue::-webkit-slider-thumb{appearance:none;width:7px;height:18px;border:2px\x20solid\x20white;border-radius:3px;background:transparent;box-shadow:0\x200\x200\x201px\x20#0008;}\x0a#cracky-color-popover\x20.cracky-picker-hue::-moz-range-thumb{width:5px;height:16px;border:2px\x20solid\x20white;border-radius:3px;background:transparent;}\x0a#cracky-color-popover\x20.cracky-picker-hue::-moz-range-track{background:none;}\x0a#cracky-color-popover\x20.cracky-picker-hex-row{display:flex;align-items:center;gap:8px;font-size:11px!important;}\x0a#cracky-color-popover\x20.cracky-picker-hex{min-width:0;width:100%;border:1px\x20solid\x20#ffffff25;border-radius:6px;background:#0003;color:white;padding:7px;font-size:12px!important;}\x0a#cracky-color-popover\x20[aria-invalid=true]{border-color:#ff7d93!important;}\x0a#cracky-color-popover\x20.cracky-picker-swatches{display:flex;gap:7px;margin:12px\x200;}\x0a#cracky-color-popover\x20.cracky-picker-swatches\x20button{width:25px;height:22px;padding:0;background:var(--swatch);}\x0a#cracky-color-popover\x20:focus-visible,.anonimbiri-color-preview:focus-visible,.cracky-text-input:focus-visible{outline:2px\x20solid\x20var(--cracky-secondary);outline-offset:2px;}\x0a@media(max-width:540px){.cracky-appearance{gap:8px;padding:10px}.anonimbiri-menu-header{height:90px;min-height:90px}.anonimbiri-brand{font-size:36px}.anonimbiri-tab-content{padding:10px}.anonimbiri-menu-item{padding:10px\x207px}.anonimbiri-controls{gap:6px}.anonimbiri-menu-item-icon{width:18px;height:18px}.anonimbiri-menu-item\x20label{font-size:12px}.anonimbiri-slider{width:65px}.anonimbiri-slider-value{width:38px!important}.anonimbiri-menu-item[data-tip]:hover::after{display:none}}\x0a"),
        (_0x2b2d2d["textContent"] +=
          "\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container{--lb-accent:#4b70ff;--ab-blue:#4b70ff;--ab-pink:#4b70ff;--ab-candy:linear-gradient(90deg,#4163ef,#567cff);width:1400px!important;max-width:calc(100vw\x20-\x2032px)!important;height:calc(100vh\x20-\x2044px)!important;max-height:calc(100vh\x20-\x2032px)!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:visible!important;pointer-events:none;isolation:isolate;gap:28px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container::before{content:\x27\x27;position:fixed;inset:-100vmax;z-index:-1;background:#0007;backdrop-filter:blur(6px);pointer-events:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-content-wrap{display:block;flex:none;overflow:visible;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;align-items:start;padding:0;overflow:visible;}\x0a.cracky-liquid-toolbar{display:flex;align-items:center;align-self:center;flex-shrink:0;width:min(580px,100%);min-height:44px;border-radius:28px;background:#000d;pointer-events:auto;overflow:hidden;}\x0a.cracky-liquid-toolbar\x20.cracky-logo{width:30px;height:33px;flex:0\x200\x2030px;margin-left:10px;border-radius:6px;}\x0a#cracky-liquid-search{flex:1;min-width:0;border:0;outline:none;padding:14px\x2022px;background:none;color:#f1f1f1;font-size:14px!important;line-height:20px;letter-spacing:normal;border-radius:28px;}\x0a#cracky-liquid-search::placeholder{color:#8a8a8a;}\x0a#cracky-liquid-config{border:0;background:none;color:#ccc;font-size:19px!important;padding:10px\x2018px;cursor:pointer;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane{display:block!important;padding:0;margin:0;border:0;border-radius:5px;background:#000d;box-shadow:0\x203px\x2010px\x20#0005;overflow:visible;animation:none;pointer-events:auto;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary{display:flex;align-items:center;gap:10px;height:37px;padding:0\x2012px;background:#000c;border-radius:5px\x205px\x200\x200;border-bottom:2px\x20solid\x20var(--lb-accent);cursor:grab;touch-action:none;user-select:none;list-style:none;text-align:left;color:#f2f2f2;font-size:13px!important;font-weight:500;letter-spacing:normal;position:relative;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary::-webkit-details-marker{display:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary::after{content:\x27+\x27;margin-left:auto;font-size:20px;line-height:1;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane[open]>summary::after{content:\x27−\x27;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary.cracky-panel-dragging{cursor:grabbing;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary\x20svg{width:15px;height:15px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}\x0a.cracky-liquid-body{max-height:calc(100vh\x20-\x20165px);overflow:auto;scrollbar-width:thin;scrollbar-color:#4b70ff\x20transparent;border-radius:0\x200\x205px\x205px;padding:2px\x200;}\x0a.cracky-liquid-row{display:flex;align-items:stretch;min-height:32px;}\x0a.cracky-liquid-row\x20button{padding:7px\x2010px;border:0;background:none;color:#d9d9d9;font-size:12px!important;line-height:18px;cursor:pointer;border-radius:0;text-align:center;letter-spacing:normal;}\x0a.cracky-liquid-toggle{flex:1;min-width:0;}\x0a.cracky-liquid-row\x20.cracky-liquid-toggle[aria-pressed=true]{background:#4b70ff24;color:#8caaFF;border-left:2px\x20solid\x20#4b70ff;padding-left:8px;}\x0a.cracky-liquid-row\x20button:hover{background:#ffffff0e;color:white;}\x0a.cracky-liquid-row\x20button:disabled{color:#666;cursor:not-allowed;}\x0a.cracky-liquid-row\x20.cracky-liquid-expand{flex:0\x200\x2027px;padding:5px;color:#888;font-size:23px!important;}\x0a.cracky-liquid-expand[aria-expanded=true]{color:#4b70ff!important;transform:rotate(90deg);}\x0a.cracky-liquid-options{padding:5px\x209px\x208px;background:#0008;border-left:2px\x20solid\x20#4b70ff;border-bottom:1px\x20solid\x20#4b70ff45;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item{padding:7px\x200;margin:0;border:0;border-radius:0;gap:5px;background:none!important;min-height:30px;transition:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item[data-tip]:hover::after{display:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item-content{gap:0;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item-icon{display:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item\x20label{font-size:10px!important;line-height:1.4;letter-spacing:normal;color:#c7c7c7;font-weight:400;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-controls{gap:4px;max-width:56%;font-size:9px!important;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-toggle-switch{width:12px;height:12px;min-width:12px;border:1px\x20solid\x20#777;border-radius:2px;background:transparent;box-shadow:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-toggle-switch::before{display:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-toggle-switch.active{background:#4b70ff;border-color:#4b70ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-hk-btn{font-size:9px!important;padding:2px\x204px;min-width:20px;border:1px\x20solid\x20#4b70ff55;background:#10131d;color:#b6c5ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider-container{min-width:0;gap:4px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider{width:52px;height:3px;background:#4b70ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider::-webkit-slider-thumb{width:8px;height:8px;background:#8da5ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider::-moz-range-thumb{width:8px;height:8px;background:#8da5ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider-value{width:31px!important;padding:3px;font-size:9px!important;background:#ffffff07;border:0;border-radius:2px;color:#bbb;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-color-preview{width:23px;min-width:23px;height:13px;border-radius:2px;border:1px\x20solid\x20#8885;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-select{font-size:10px!important;max-width:100%;padding:5px\x204px;background:#14171e;border:1px\x20solid\x20#4b70ff66;border-radius:2px;color:#dce3ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-appearance{grid-template-columns:1fr;gap:8px;padding:3px\x200\x2010px;border-bottom:1px\x20solid\x20#ffffff15;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-appearance\x20label{font-size:10px!important;letter-spacing:normal;text-transform:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-text-input{width:90px;padding:4px;font-size:10px!important;color:#dce3ff;border-color:#4b70ff66;border-radius:2px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-diagnostics{margin:10px\x200\x200;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-diagnostics\x20.anonimbiri-hook-status{font-size:10px!important;color:#aaa;}\x0ahtml[data-cracky-layout=liquidbounce]\x20:is(.cracky-liquid-row\x20button,#cracky-liquid-config,#cracky-liquid-search,.cracky-select,summary):focus-visible{outline:1px\x20solid\x20#4b70ff;outline-offset:-2px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20#cracky-color-popover{background:#0b0d12;border-color:#4b70ff!important;box-shadow:0\x2012px\x2036px\x20#0008!important;border-radius:5px;}\x0a.cracky-liquid-empty{align-self:center;padding:16px\x2028px;background:#000d;color:#aaa;font-size:13px!important;border-radius:5px;pointer-events:auto;}\x0ahtml[data-cracky-layout=liquidbounce]\x20:is(.anonimbiri-tab-pane,.cracky-liquid-module,.cracky-liquid-options,.cracky-liquid-empty)[hidden]{display:none!important;}\x0a@media(max-width:1050px){html[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container{overflow-y:auto!important;pointer-events:auto;}html[data-cracky-layout=liquidbounce]\x20.cracky-liquid-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}html[data-cracky-layout=liquidbounce]\x20.cracky-liquid-body{max-height:320px;}}\x0a@media(max-width:540px){html[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container{gap:16px;}html[data-cracky-layout=liquidbounce]\x20.cracky-liquid-grid{grid-template-columns:1fr;}html[data-cracky-layout=liquidbounce]\x20.cracky-liquid-body{max-height:380px;}}\x0a"),
        (_0x2b2d2d["textContent"] +=
          "\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container{--lb-accent:#4677ff;--ab-blue:#4677ff;--ab-pink:#4677ff;width:1640px!important;gap:32px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container\x20*{font-family:Inter,\x27Segoe\x20UI\x27,Arial,sans-serif!important;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-grid{grid-template-columns:repeat(6,250px);gap:20px;width:1600px;transform:scale(var(--cracky-liquid-scale,1));transform-origin:top\x20left;align-items:start;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane{width:250px;background:#000c;border-radius:5px;overflow:hidden;box-shadow:0\x200\x2010px\x20#0008;user-select:none;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary{height:40px;padding:10px\x2015px;gap:12px;font-size:14px!important;font-weight:500;background:#000e;border-bottom:2px\x20solid\x20#4677ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane>summary::after{font-size:22px;font-weight:500;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-body{background:#0003;max-height:545px;padding:0;scrollbar-width:thin;scrollbar-color:#4677ff\x20transparent;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-body::-webkit-scrollbar{width:2px;height:2px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-body::-webkit-scrollbar-thumb{background:#4677ff;border-radius:2px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-row{height:38px;min-height:38px;position:relative;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-row\x20.cracky-liquid-toggle{width:100%;padding:10px\x2040px;text-align:center;font-size:12px!important;line-height:18px;font-weight:500;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-row\x20.cracky-liquid-toggle[aria-pressed=true]{color:#4677ff;border:0;background:transparent;padding-left:40px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-row\x20button:disabled{color:#6b6b6b!important;background:none;cursor:not-allowed;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-row\x20.cracky-liquid-expand{position:absolute;inset:0\x200\x200\x20auto;width:40px;flex:none;padding:0;font-size:20px!important;background:none;color:#aaa;opacity:.5;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-expand[aria-expanded=true]{color:#fff!important;opacity:1;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-options{border-left:4px\x20solid\x20#4677ff;border-bottom:0;padding:0\x2011px\x200\x207px;background:#0005;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item{padding:8px\x200;min-height:34px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-item\x20label{font-size:12px!important;font-weight:500;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-controls{gap:5px;max-width:54%;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-toggle-switch.active{background:#4677ff;border-color:#4677ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider{width:75px;background:#4677ff;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.anonimbiri-slider-value{width:33px!important;font-size:11px!important;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-select{font-size:12px!important;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-toolbar{width:min(600px,100%);min-height:50px;box-shadow:0\x200\x2010px\x20#0008;border-radius:30px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20#cracky-liquid-search{padding:15px\x2025px;font-size:16px!important;}\x0ahtml[data-cracky-layout=liquidbounce]\x20#cracky-color-popover{border-color:#4677ff!important;}\x0a#cracky-reset-panels{grid-column:1/-1;font-size:11px!important;cursor:pointer;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-container>#cracky-reset-panels{position:absolute;right:0;top:-38px;z-index:10001;width:145px;pointer-events:auto;background:#111214;border-radius:5px;}\x0ahtml[data-cracky-layout=liquidbounce]\x20.cracky-liquid-toolbar{position:relative;z-index:10001;overflow:hidden;}\x0ahtml[data-cracky-layout=liquidbounce]\x20#cracky-reset-panels{width:42px;min-width:42px;flex-shrink:0;align-self:stretch;font-size:22px!important;padding:5px;border:0;border-radius:0;background:none;color:#ccc;}\x0a@media(max-width:760px){html[data-cracky-layout=dropdown]\x20.anonimbiri-menu-container>#cracky-reset-panels{position:sticky;top:0;align-self:flex-end;flex-shrink:0;}}\x0a@media(max-width:760px){html[data-cracky-layout=liquidbounce]\x20.cracky-liquid-grid{display:flex;flex-direction:column;width:100%;gap:16px;transform:none;}html[data-cracky-layout=liquidbounce]\x20.anonimbiri-tab-pane{width:100%;max-width:100%;}html[data-cracky-layout=liquidbounce]\x20.cracky-liquid-toolbar{min-height:44px;}html[data-cracky-layout=liquidbounce]\x20.anonimbiri-menu-container{gap:20px;}}\x0a/*\x20Krux\x20and\x20Liquidbounce\x20share\x20the\x20same\x20layout\x20canvas,\x20column\x20pitch\x20and\x0a\x20\x20\x20viewport\x20scale.\x20Existing\x20user\x20drag\x20offsets\x20remain\x20separate\x20per\x20layout.\x20*/\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-menu-container{width:1640px!important;max-width:calc(100vw\x20-\x2032px)!important;height:calc(100vh\x20-\x2044px)!important;max-height:calc(100vh\x20-\x2032px)!important;gap:32px;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-content-wrap{flex:none;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-content{grid-template-columns:repeat(6,250px);gap:20px;width:1600px;transform:scale(var(--cracky-liquid-scale,1));transform-origin:top\x20left;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane{width:250px;}\x0ahtml[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane>summary{height:40px;box-sizing:border-box;}\x0a.cracky-krux-toolbar{min-height:50px;flex-shrink:0;align-self:center;width:min(600px,100%);display:flex;justify-content:flex-end;align-items:center;pointer-events:auto;}\x0ahtml[data-cracky-layout=dropdown]\x20.cracky-krux-toolbar>#cracky-reset-panels{position:static;width:auto;pointer-events:auto;}\x0a@media(max-width:760px){html[data-cracky-layout=dropdown]\x20.anonimbiri-menu-container{gap:20px;}html[data-cracky-layout=dropdown]\x20.anonimbiri-tab-content{display:flex;flex-direction:column;width:100%;gap:16px;transform:none;}html[data-cracky-layout=dropdown]\x20.anonimbiri-tab-pane{width:100%;max-width:100%;}html[data-cracky-layout=dropdown]\x20#anonimbiri-tab-misc{order:2;}.cracky-krux-toolbar{min-height:44px;}}\x0a"),
        document["head"]["appendChild"](_0x2b2d2d));
      const _0x1db2a6 =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-hotkey-modal\x22\x20id=\x22anonimbiri-hotkeyModal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-hotkey-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>🌸\x20Press\x20a\x20Key</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Assign\x20hotkey\x20to\x20<span\x20id=\x22anonimbiri-hotkeyFeatureName\x22>...</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>ESC\x20to\x20cancel\x20·\x20DEL\x20to\x20unbind</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
        _0x582dda = document["createElement"]("div");
      ((_0x582dda["innerHTML"] = _0x1db2a6),
        document["body"]["appendChild"](_0x582dda),
        (this["hotkeyModal"] = document["getElementById"](
          "anonimbiri-hotkeyModal",
        )),
        (this["GUI"]["windowIndex"] =
          this["pageWindow"]["windows"]["length"] + 0x1));
      const _0x16413b = {
        closed: ![],
        header: "🌸\x20cracky.io\x20🌸",
        html: "",
        extraCls: "anonimbiri-menu-container",
        hideScroll: !![],
        height: "calc(100%\x20-\x20120px)",
        width: 0x352,
      };
      ((this["GUI"]["windowObj"] =
        typeof cloneInto === "function"
          ? cloneInto(_0x16413b, this["pageWindow"])
          : _0x16413b),
        (this["GUI"]["windowObj"]["gen"] = this["toPageFunction"](() =>
          this["getGuiHtml"](),
        )),
        this["pageWindow"]["windows"]["push"](this["GUI"]["windowObj"]),
        this["waitFor"](() => document["querySelector"](".headerBarRight"))[
          "then"
        ]((_0x5684cb) => {
          if (_0x5684cb && !document["getElementById"]("shiro-menu-button")) {
            const _0x57c20e = document["createElement"]("div");
            ((_0x57c20e["id"] = "shiro-menu-button"),
              (_0x57c20e["innerHTML"] =
                "<div\x20class=\x22shiro-icon\x22>" +
                this["getLogoHtml"]() +
                "</div><span\x20class=\x22shiro-label\x22>cracky.io</span>"),
              _0x57c20e["addEventListener"]("click", () => this["showGUI"]()),
              _0x57c20e["addEventListener"]("mouseenter", () => {
                if (this["pageWindow"]["SOUND"])
                  this["pageWindow"]["SOUND"]["play"]("hover_0", 0.1);
              }),
              _0x5684cb["prepend"](_0x57c20e));
          }
        }));
    }
    ["getGuiHtml"]() {
      const _0xf94837 = {
          aimbot:
            "<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x227\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x222\x22\x20fill=\x22currentColor\x22/><path\x20d=\x22M12\x202v4M12\x2018v4M2\x2012h4M18\x2012h4\x22\x20stroke-width=\x222\x22/>",
          rightMouse:
            "<rect\x20x=\x227\x22\x20y=\x223\x22\x20width=\x2210\x22\x20height=\x2218\x22\x20rx=\x223\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M12\x203v6\x22\x20stroke-width=\x222\x22/>",
          wall: "<path\x20d=\x22M4\x206a2\x202\x200\x200\x201\x202\x20-2h12a2\x202\x200\x200\x201\x202\x202v12a2\x202\x200\x200\x201\x20-2\x202h-12a2\x202\x200\x200\x201\x20-2\x20-2l0\x20-12\x22/><path\x20d=\x22M4\x208h16\x22/><path\x20d=\x22M20\x2012h-16\x22/><path\x20d=\x22M4\x2016h16\x22/><path\x20d=\x22M9\x204v4\x22/><path\x20d=\x22M14\x208v4\x22/><path\x20d=\x22M8\x2012v4\x22/><path\x20d=\x22M16\x2012v4\x22/><path\x20d=\x22M11\x2016v4\x22/>",
          wallOff:
            "<path\x20d=\x22M8\x204h10a2\x202\x200\x200\x201\x202\x202v10m-.589\x203.417c-.361\x20.36\x20-.86\x20.583\x20-1.411\x20.583h-12a2\x202\x200\x200\x201\x20-2\x20-2v-12c0\x20-.55\x20.222\x20-1.047\x20.58\x20-1.409\x22/><path\x20d=\x22M4\x208h4m4\x200h8\x22/><path\x20d=\x22M20\x2012h-4m-4\x200h-8\x22/><path\x20d=\x22M4\x2016h12\x22/><path\x20d=\x22M9\x204v1\x22/><path\x20d=\x22M14\x208v2\x22/><path\x20d=\x22M8\x2012v4\x22/><path\x20d=\x22M11\x2016v4\x22/><path\x20d=\x22M3\x203l18\x2018\x22/>",
          teamCheck:
            "<path\x20d=\x22M12\x202l8\x203.5v7c0\x205.5-3.5\x209.3-8\x2010.5-4.5-1.2-8-5-8-10.5v-7z\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M8\x2012l3\x203\x205-6\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22/>",
          autoFire:
            "<path\x20d=\x22M13\x202l-2\x207h4l-3\x2011\x207-11h-4l2-7z\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/>",
          superSilent:
            "<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x223\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M3\x2012h6M15\x2012h6\x22\x20stroke-width=\x222\x22\x20stroke-dasharray=\x223\x202\x22/>",
          line: "<path\x20d=\x22M4\x2018a2\x202\x200\x201\x200\x204\x200a2\x202\x200\x201\x200\x20-4\x200\x22/><path\x20d=\x22M16\x206a2\x202\x200\x201\x200\x204\x200a2\x202\x200\x201\x200\x20-4\x200\x22/><path\x20d=\x22M7.5\x2016.5l9\x20-9\x22/>",
          espSquare:
            "<path\x20d=\x22M3\x208V3h5M21\x208V3h-5M3\x2016v5h5M21\x2016v5h-5\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/>",
          nameTags:
            "<rect\x20x=\x223\x22\x20y=\x227\x22\x20width=\x2218\x22\x20height=\x2210\x22\x20rx=\x222\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><circle\x20cx=\x227\x22\x20cy=\x2212\x22\x20r=\x221.5\x22\x20fill=\x22currentColor\x22/><line\x20x1=\x2211\x22\x20y1=\x2210\x22\x20x2=\x2218\x22\x20y2=\x2210\x22\x20stroke-width=\x221.5\x22/><line\x20x1=\x2211\x22\x20y1=\x2214\x22\x20x2=\x2216\x22\x20y2=\x2214\x22\x20stroke-width=\x221.5\x22/>",
          weaponIcons:
            "<path\x20d=\x22M7\x204l1.5\x203v11a1\x201\x200\x20001\x201h3a1\x201\x200\x20001-1V7l1.5-3z\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M16\x208v8l2\x202\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/>",
          espInfoBg:
            "<rect\x20x=\x223\x22\x20y=\x226\x22\x20width=\x2218\x22\x20height=\x2212\x22\x20rx=\x222\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><rect\x20x=\x225\x22\x20y=\x228\x22\x20width=\x2214\x22\x20height=\x228\x22\x20rx=\x221\x22\x20opacity=\x22.3\x22\x20fill=\x22currentColor\x22/>",
          palette:
            "<path\x20d=\x22M12\x2021a9\x209\x200\x200\x201\x200\x20-18c4.97\x200\x209\x203.582\x209\x208c0\x201.06\x20-.474\x202.078\x20-1.318\x202.828c-.844\x20.75\x20-1.989\x201.172\x20-3.182\x201.172h-2.5a2\x202\x200\x200\x200\x20-1\x203.75a1.3\x201.3\x200\x200\x201\x20-1\x202.25\x22/><path\x20d=\x22M7.5\x2010.5a1\x201\x200\x201\x200\x202\x200a1\x201\x200\x201\x200\x20-2\x200\x22/><path\x20d=\x22M11.5\x207.5a1\x201\x200\x201\x200\x202\x200a1\x201\x200\x201\x200\x20-2\x200\x22/><path\x20d=\x22M15.5\x2010.5a1\x201\x200\x201\x200\x202\x200a1\x201\x200\x201\x200\x20-2\x200\x22/>",
          wireframe:
            "<path\x20d=\x22M12\x202l9\x205v10l-9\x205-9-5V7z\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M12\x202v20M21\x207l-18\x2010M3\x207l18\x2010\x22\x20stroke-width=\x221\x22\x20opacity=\x22.5\x22/>",
          unlockSkins:
            "<rect\x20x=\x225\x22\x20y=\x2211\x22\x20width=\x2214\x22\x20height=\x2210\x22\x20rx=\x222\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M8\x2011V7a4\x204\x200\x20018\x200v4\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><circle\x20cx=\x2212\x22\x20cy=\x2216\x22\x20r=\x221\x22\x20fill=\x22currentColor\x22/>",
          bounce:
            "<path\x20d=\x22M4\x2015.5c3\x20-1\x205.5\x20-.5\x208\x204.5c.5\x20-3\x201.5\x20-5.5\x203\x20-8\x22/><path\x20d=\x22M18\x209a2\x202\x200\x201\x201\x200\x20-4a2\x202\x200\x200\x201\x200\x204\x22/>",
          antiAim:
            "<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x228\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M12\x208v4l3\x203\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/>",
          rocket:
            "<path\x20d=\x22M4\x2013a8\x208\x200\x200\x201\x207\x207a6\x206\x200\x200\x200\x203\x20-5a9\x209\x200\x200\x200\x206\x20-8a3\x203\x200\x200\x200\x20-3\x20-3a9\x209\x200\x200\x200\x20-8\x206a6\x206\x200\x200\x200\x20-5\x203\x22/><path\x20d=\x22M7\x2014a6\x206\x200\x200\x200\x20-3\x206a6\x206\x200\x200\x200\x206\x20-3\x22/><path\x20d=\x22M14\x209a1\x201\x200\x201\x200\x202\x200a1\x201\x200\x201\x200\x20-2\x200\x22/>",
          antiKick:
            "<path\x20d=\x22M12\x202l8\x203.5v7c0\x205.5-3.5\x209.3-8\x2010.5-4.5-1.2-8-5-8-10.5v-7z\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M8\x208l8\x208M16\x208l-8\x208\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/>",
          autoReload:
            "<path\x20d=\x22M21\x2012a9\x209\x200\x2001-9\x209\x209\x209\x200\x2001-9-9\x209\x209\x200\x20019-9c2.5\x200\x204.7\x201\x206.3\x202.7\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M21\x204v5h-5\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22/>",
          fov: "<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x229\x22\x20stroke-width=\x222\x22\x20fill=\x22none\x22/><path\x20d=\x22M12\x2012l6-4M12\x2012l6\x204\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x222\x22\x20fill=\x22currentColor\x22/>",
          robot:
            "<path\x20d=\x22M6\x206a2\x202\x200\x200\x201\x202\x20-2h8a2\x202\x200\x200\x201\x202\x202v4a2\x202\x200\x200\x201\x20-2\x202h-8a2\x202\x200\x200\x201\x20-2\x20-2l0\x20-4\x22/><path\x20d=\x22M12\x202v2\x22/><path\x20d=\x22M9\x2012v9\x22/><path\x20d=\x22M15\x2012v9\x22/><path\x20d=\x22M5\x2016l4\x20-2\x22/><path\x20d=\x22M15\x2014l4\x202\x22/><path\x20d=\x22M9\x2018h6\x22/><path\x20d=\x22M10\x208v.01\x22/><path\x20d=\x22M14\x208v.01\x22/>",
        },
        _0x730e32 = {
          aimbotEnabled: "Master\x20aimbot\x20toggle.",
          aimbotOnRightMouse:
            "Only\x20activate\x20when\x20right\x20mouse\x20held.",
          aimbotWallCheck: "No\x20target\x20through\x20walls.",
          aimbotWallBangs: "Shoot\x20through\x20penetrable\x20walls.",
          aimbotTeamCheck: "No\x20target\x20teammates.",
          aimbotBotCheck: "Target\x20AI/bots.",
          autoFireEnabled: "Auto\x20fires\x20when\x20target\x20acquired.",
          superSilentEnabled:
            "Uses\x20the\x20full\x20shot\x20angle\x20without\x20moving\x20the\x20camera.\x20Normal\x20view\x20smoothing\x20is\x20not\x20applied.",
          fovSize:
            "Aim\x20cone\x20half-angle\x20in\x20degrees:\x200\x20=\x20exact\x20forward\x20direction;\x2090\x20=\x20front\x20hemisphere;\x20180\x20=\x20all\x20directions.\x20Team\x20and\x20wall\x20checks\x20still\x20apply.",
          drawFovCircle:
            "Draw\x20the\x20aim\x20cone\x20ring\x20when\x20its\x20boundary\x20fits\x20on\x20screen.\x20Wide\x20cones\x20are\x20hidden;\x20no\x20FOV\x20text\x20is\x20displayed.",
          espTeamCheck: "No\x20ESP\x20for\x20teammates.",
          espBotCheck: "ESP\x20for\x20AI/bots.",
          espLines: "Line\x20from\x20bottom\x20to\x20enemies.",
          espSquare: "Box\x20around\x20enemies.",
          espNameTags: "Name,\x20health,\x20weapon\x20info.",
          espWeaponIcons: "Weapon\x20icon\x20in\x20info.",
          espInfoBackground: "Background\x20for\x20info\x20panel.",
          espColor: "ESP\x20line\x20color.",
          boxColor: "Box\x20&\x20info\x20color.",
          botColor: "Bot\x20ESP\x20color.",
          wireframeEnabled: "Wireframe\x20rendering.",
          unlockSkins: "Client-side\x20skin\x20unlocker.",
          bhopEnabled: "Hold\x20space\x20auto-jump.",
          antiAimEnabled: "Makes\x20you\x20harder\x20to\x20hit.",
          autoNuke: "Auto\x20nuke\x20when\x20available.",
          antikick: "Prevents\x20inactivity\x20kick.",
          autoReload: "Auto\x20reload\x20when\x20empty.",
          thirdPersonEnabled: "Play\x20in\x203rd\x20person\x20view.",
          alwaysTrail: "Always\x20show\x20bullet\x20trails.",
          weaponZoom: "Adjust\x20ADS\x20zoom\x20level\x20(1\x20=\x20default).",
        };
      setTimeout(() => {
        (this["bindMenuEvents"](),
          (this["espPreviewCanvas"] = document["getElementById"](
            "anonimbiri-espCanvas",
          )),
          this["espPreviewCanvas"] &&
            ((this["espPreviewCtx"] =
              this["espPreviewCanvas"]["getContext"]("2d")),
            this["renderESPPreview"]()));
      }, 0x64);
      let _0x5635fc = "";
      for (let _0x57a237 = 0x0; _0x57a237 < 0xf; _0x57a237++)
        _0x5635fc +=
          "<div\x20class=\x22anonimbiri-petal\x22\x20style=\x22left:" +
          Math["random"]() * 0x64 +
          "%;top:" +
          Math["random"]() * 0x28 +
          "%;width:" +
          (0x5 + Math["random"]() * 0x7) +
          "px;height:" +
          (0x5 + Math["random"]() * 0x7) +
          "px;animation-delay:" +
          Math["random"]() * 0x8 +
          "s;animation-duration:" +
          (0x3 + Math["random"]() * 0x5) +
          "s\x22></div>";
      const _0x31d291 =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-menu-header\x22>" +
          _0x5635fc +
          "<div\x20class=\x22anonimbiri-brand\x22>" +
          this["getLogoHtml"]() +
          "<div>cracky.io<small>" +
          this["escapeHTML"](this["getTheme"]()["name"]) +
          "\x20·\x20" +
          _0x3845c3["length"] +
          "\x20palettes</small></div></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-appearance\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color\x20theme<input\x20id=\x22cracky-theme-search\x22\x20class=\x22cracky-select\x22\x20type=\x22search\x22\x20placeholder=\x22Search\x20themes…\x22\x20aria-label=\x22Search\x20themes\x22\x20autocomplete=\x22off\x22><select\x20id=\x22cracky-theme\x22\x20class=\x22cracky-select\x22>" +
          _0x3845c3["map"](
            (_0x4e8a75) =>
              "<option\x20value=\x22" +
              _0x4e8a75["id"] +
              "\x22\x20" +
              (_0x4e8a75["id"] === this["settings"]["themeId"]
                ? "selected"
                : "") +
              ">" +
              _0x4e8a75["name"] +
              "</option>",
          )["join"]("") +
          "<option\x20value=\x22custom\x22\x20" +
          (this["settings"]["themeId"] === "custom" ? "selected" : "") +
          ">Custom\x20·\x20color\x20pickers</option></select><small\x20id=\x22cracky-theme-count\x22\x20aria-live=\x22polite\x22>" +
          (_0x3845c3["length"] + 0x1) +
          "\x20themes</small></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>GUI\x20style<select\x20id=\x22cracky-layout\x22\x20class=\x22cracky-select\x22><option\x20value=\x22classic\x22\x20" +
          (!["dropdown", "liquidbounce"]["includes"](
            this["settings"]["guiLayout"],
          )
            ? "selected"
            : "") +
          ">Classic\x20·\x20tabbed</option><option\x20value=\x22dropdown\x22\x20" +
          (this["settings"]["guiLayout"] === "dropdown" ? "selected" : "") +
          ">Krux</option><option\x20value=\x22liquidbounce\x22\x20" +
          (this["settings"]["guiLayout"] === "liquidbounce" ? "selected" : "") +
          ">Liquidbounce</option></select></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (["dropdown", "liquidbounce"]["includes"](
            this["settings"]["guiLayout"],
          )
            ? "<button\x20type=\x22button\x22\x20id=\x22cracky-reset-panels\x22\x20class=\x22cracky-select\x22>Reset\x20panel\x20positions</button>"
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-tab-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22anonimbiri-tab\x20active\x22\x20data-tab=\x22aimbot\x22>⊕\x20AIMBOT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22anonimbiri-tab\x22\x20data-tab=\x22visuals\x22>◎\x20VISUALS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22anonimbiri-tab\x22\x20data-tab=\x22misc\x22>✦\x20OTHER</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22anonimbiri-tab\x22\x20data-tab=\x22configs\x22>▣\x20CONFIGS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-content-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<details\x20class=\x22anonimbiri-tab-pane\x20active\x22\x20id=\x22anonimbiri-tab-aimbot\x22\x20open><summary>AIMBOT</summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>General</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "aimbotEnabled",
            "Aimbot\x20Enabled",
            _0xf94837["aimbot"],
            _0x730e32["aimbotEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "aimbotOnRightMouse",
            "Right\x20Mouse\x20Trigger",
            _0xf94837["rightMouse"],
            _0x730e32["aimbotOnRightMouse"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "autoFireEnabled",
            "Auto\x20Fire",
            _0xf94837["autoFire"],
            _0x730e32["autoFireEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "autoFireSeedEnabled",
            "Seed\x20Hipfire",
            _0xf94837["autoFire"],
            "Compensate\x20checked\x20ammo-indexed\x20spread\x20and\x20next-tick\x20recoil\x20while\x20stationary.\x20No\x20manual\x20bootstrap\x20shot.\x20Moving/unsupported\x20states\x20or\x20an\x20observed\x20mismatch\x20fall\x20back\x20to\x20ordinary\x20ADS\x20auto\x20fire.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "superSilentEnabled",
            "Super\x20Silent\x20Aim",
            _0xf94837["superSilent"],
            _0x730e32["superSilentEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "noRecoilEnabled",
            "No\x20Recoil",
            _0xf94837["aimbot"],
            "Suppress\x20the\x20native\x20local\x20recoil\x20flag\x20and\x20kick\x20accumulators.\x20Keeps\x20ADS\x20and\x20base\x20weapon\x20spread\x20unchanged;\x20online\x20server\x20acceptance\x20is\x20unverified.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Checks</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "aimbotWallCheck",
            "Wall\x20Check",
            _0xf94837["wall"],
            _0x730e32["aimbotWallCheck"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "aimbotWallBangs",
            "WallBangs",
            _0xf94837["wallOff"],
            _0x730e32["aimbotWallBangs"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "aimbotTeamCheck",
            "Team\x20Check",
            _0xf94837["teamCheck"],
            _0x730e32["aimbotTeamCheck"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "aimbotBotCheck",
            "Bot\x20Aim",
            _0xf94837["robot"],
            _0x730e32["aimbotBotCheck"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Legit\x20Aim</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "legitAimbot",
            "Legit\x20AI\x20Aim",
            _0xf94837["teamCheck"],
            "Simulates\x20human-like\x20aiming.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "flickSpeed",
            "Flick\x20Speed",
            _0xf94837["autoFire"],
            "Flick\x20speed\x20control.",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "adsTremorReduction",
            "ADS\x20Stability\x20%",
            _0xf94837["aimbot"],
            "Reduces\x20tremor\x20when\x20ADS.",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "aimRandomness",
            "Aim\x20Wandering",
            _0xf94837["line"],
            "Simulates\x20imperfect\x20aim.",
            0x0,
            0x5,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "aimTremor",
            "Aim\x20Tremor",
            _0xf94837["wireframe"],
            "Hand\x20tremor\x20simulation.",
            0x0,
            0x5,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Targeting</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "fovSize",
            "Aim\x20FOV\x20(°)",
            _0xf94837["fov"],
            _0x730e32["fovSize"],
            0x0,
            0xb4,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<details\x20class=\x22anonimbiri-tab-pane\x22\x20id=\x22anonimbiri-tab-visuals\x22\x20" +
          (this["settings"]["guiLayout"] !== "dropdown" ? "open" : "") +
          "><summary>VISUALS</summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Visuals</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "thirdPersonEnabled",
            "Third\x20Person",
            _0xf94837["robot"],
            _0x730e32["thirdPersonEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "alwaysTrail",
            "Weapon\x20Trails",
            _0xf94837["line"],
            _0x730e32["alwaysTrail"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "weaponZoom",
            "Weapon\x20Zoom",
            _0xf94837["fov"],
            _0x730e32["weaponZoom"],
            0.1,
            0x5,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "themeHudEnabled",
            "Theme\x20Game\x20HUD",
            _0xf94837["palette"],
            "Theme\x20health,\x20ammo,\x20weapons\x20and\x20streak\x20cards\x20with\x20this\x20palette\x20and\x20GUI\x20style.\x20Off\x20restores\x20native\x20styling;\x20values\x20and\x20fill\x20widths\x20stay\x20unchanged.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "noScopeOverlayEnabled",
            "No\x20Scope\x20Overlay",
            _0xf94837["aimbot"],
            "Hide\x20the\x20sniper/scope\x20image\x20and\x20dark\x20borders,\x20including\x20custom\x20scopes.\x20ADS\x20zoom\x20and\x20the\x20native\x20aim\x20dot\x20stay\x20unchanged.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "noScopeCrosshairEnabled",
            "Draw\x20Crosshair",
            _0xf94837["fov"],
            "Draw\x20the\x20configured\x20custom\x20crosshair\x20while\x20actively\x20scoping\x20with\x20No\x20Scope\x20Overlay,\x20even\x20if\x20Customcrosshair\x20is\x20off\x20or\x20scoped\x20visibility\x20is\x20Hidden.\x20Configure\x20its\x20look\x20below.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "noZoomEnabled",
            "No\x20Zoom",
            _0xf94837["fov"],
            "Scale\x20native\x20ADS\x20magnification\x20for\x20the\x20world\x20and\x20weapon\x20cameras.\x200×\x20keeps\x20normal\x20FOV,\x201×\x20retains\x20native\x20scoping.\x20Takes\x20priority\x20over\x20Weapon\x20Zoom.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "noZoomStrength",
            "ADS\x20Zoom\x20Strength",
            _0xf94837["fov"],
            "0–5×\x20native\x20ADS\x20strength.\x20Default\x200.5×\x20halves\x20added\x20magnification;\x200×\x20removes\x20it\x20without\x20disabling\x20ADS.",
            0x0,
            0x5,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22anonimbiri-section\x22>Customcrosshair</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "customCrosshairEnabled",
            "Customcrosshair",
            _0xf94837["fov"],
            "Replace\x20the\x20native\x20crosshair\x20and\x20ADS\x20aim\x20dot\x20with\x20a\x20configurable\x20pixel\x20crosshair.\x20Visual\x20only;\x20native\x20settings\x20are\x20restored\x20on\x20disable,\x20death\x20or\x20end\x20screen.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-crosshair-preview\x22\x20style=\x22margin:8px\x200;border:1px\x20solid\x20var(--cracky-primary);border-radius:8px;overflow:hidden;background:#151c26\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22display:flex;align-items:center;justify-content:space-between;padding:8px\x2012px;font-size:12px\x22>Live\x20style\x20preview<select\x20id=\x22cracky-crosshair-preview-mode\x22\x20class=\x22cracky-select\x22\x20aria-label=\x22Crosshair\x20preview\x20mode\x22><option\x20value=\x22hipfire\x22>Hipfire</option><option\x20value=\x22scope\x22>Scoped</option></select></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22cracky-crosshair-preview\x22\x20width=\x22320\x22\x20height=\x22140\x22\x20style=\x22display:block;width:100%;height:140px;object-fit:contain\x22\x20aria-label=\x22Custom\x20crosshair\x20preview\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20style=\x22display:block;padding:7px\x2012px;color:var(--ab-muted);font-size:11px\x22>Preview\x20uses\x20a\x20sample\x20spread.\x20Save,\x20load\x20or\x20share\x20all\x20crosshair\x20settings\x20in\x20Configs.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x4cfe6c["map"](
            ([_0x4b0f14, _0x4ce385, _0x534e5c, _0xdf919 = "", ..._0x5ca1c9]) =>
              this["createMenuItemHTML"](
                _0x4b0f14,
                _0x4ce385,
                _0x534e5c,
                _0xf94837["fov"],
                _0xdf919,
                ..._0x5ca1c9,
              ),
          )["join"]("") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>ArrayList</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "arrayListEnabled",
            "ArrayList",
            _0xf94837["nameTags"],
            "Top-right\x20list\x20of\x20enabled\x20modules,\x20sorted\x20by\x20displayed\x20width.\x20Off\x20by\x20default;\x20unavailable\x20features\x20and\x20sub-options\x20are\x20not\x20listed.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "arrayListColor",
            "ArrayList\x20Accent",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "arrayListShowModes",
            "Show\x20Module\x20Modes",
            _0xf94837["nameTags"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "arrayListFontSize",
            "ArrayList\x20Text\x20Size",
            _0xf94837["nameTags"],
            "HUD\x20font\x20size\x20in\x20pixels.",
            0xa,
            0x16,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "arrayListOpacity",
            "ArrayList\x20Background\x20%",
            _0xf94837["palette"],
            "Opacity\x20of\x20each\x20black\x20row.",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Client\x20HUD</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "watermarkEnabled",
            "Watermark",
            _0xf94837["nameTags"],
            "Top-left\x20client\x20branding.\x20Crackyio\x20animates\x20with\x20your\x20palette;\x20LiquidBounce\x20uses\x20its\x20NextGen-style\x20wordmark.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "select",
            "watermarkMode",
            "Watermark\x20Mode",
            _0xf94837["palette"],
            "",
            [
              ["crackyio", "Crackyio"],
              ["liquidbounce", "LiquidBounce\x20·\x20NextGen"],
            ],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "tabGuiEnabled",
            "TabGUI",
            _0xf94837["nameTags"],
            "Compact\x20category/module\x20navigator\x20below\x20the\x20watermark.\x20Arrow\x20keys\x20navigate,\x20Right\x20opens,\x20Left\x20closes\x20and\x20Enter\x20toggles.\x20Chat,\x20editable\x20fields,\x20key\x20binding\x20and\x20the\x20click\x20GUI\x20are\x20excluded.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "tabGuiColor",
            "TabGUI\x20Accent",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "drawFovCircle",
            "Draw\x20Aim\x20FOV",
            _0xf94837["fov"],
            _0x730e32["drawFovCircle"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "wireframeEnabled",
            "Wireframe",
            _0xf94837["wireframe"],
            _0x730e32["wireframeEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "unlockSkins",
            "Unlock\x20All\x20Skins",
            _0xf94837["unlockSkins"],
            _0x730e32["unlockSkins"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-cosmetic-search\x22><input\x20id=\x22cracky-cosmetic-search\x22\x20class=\x22cracky-select\x22\x20type=\x22search\x22\x20placeholder=\x22Search\x20local\x20cosmetics\x20by\x20name\x20/\x20ID…\x22\x20aria-label=\x22Search\x20local\x20cosmetics\x22><small>Local\x20model\x20preview\x20only.\x20First\x20150\x20matches\x20per\x20type;\x20search\x20to\x20find\x20others.\x20No\x20inventory\x20ownership,\x20trades\x20or\x20server\x20unlocks.</small></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x1b6bde["map"](([_0x5040ba, _0x40d654]) =>
            this["createMenuItemHTML"](
              "select",
              _0x5040ba,
              _0x40d654,
              _0xf94837["unlockSkins"],
              "Local\x20cosmetic\x20override;\x20Native\x20restores\x20your\x20equipped\x20item.",
              this["cosmeticChoices"](_0x5040ba),
            ),
          )["join"]("") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>World</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "worldModulationEnabled",
            "World\x20Modulation",
            _0xf94837["palette"],
            "Gently\x20blend\x20map\x20surfaces\x20toward\x20the\x20selected\x20color.\x20Character\x20and\x20weapon\x20materials\x20are\x20left\x20alone;\x20off\x20restores\x20native\x20map\x20materials.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "worldColorOverride",
            "Override\x20Map\x20Color",
            _0xf94837["palette"],
            "Boolean\x20map-color\x20override.\x20Off\x20keeps\x20native\x20map\x20colors/materials\x20even\x20when\x20World\x20Modulation\x20is\x20enabled.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "worldColor",
            "Map\x20Tint\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "worldTintStrength",
            "Map\x20Color\x20Alpha\x20%",
            _0xf94837["palette"],
            "Blend\x20amount:\x200\x20keeps\x20the\x20native\x20map,\x20100\x20uses\x20the\x20chosen\x20color.\x20Intermediate\x20values\x20retain\x20texture\x20and\x20surface\x20detail;\x20this\x20does\x20not\x20make\x20walls\x20transparent.",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "customFogEnabled",
            "Custom\x20Fog",
            _0xf94837["palette"],
            "Override\x20world\x20fog\x20only,\x20not\x20the\x20hands/weapon\x20camera.\x20Off\x20restores\x20the\x20latest\x20native\x20fog.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "fogColor",
            "Fog\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "fogNear",
            "Fog\x20Start",
            _0xf94837["fov"],
            "World\x20units\x20before\x20fog\x20begins.",
            0x0,
            0xbb8,
            0xa,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "fogFar",
            "Fog\x20End",
            _0xf94837["fov"],
            "World\x20units\x20at\x20full\x20fog.\x20Runtime\x20always\x20keeps\x20end\x20greater\x20than\x20start.",
            0xa,
            0x3a98,
            0xa,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>ESP</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espSquare",
            "ESP\x20Box",
            _0xf94837["espSquare"],
            _0x730e32["espSquare"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espBones",
            "Bones\x20/\x20Skeleton",
            _0xf94837["robot"],
            "Actual\x20model\x20joints\x20and\x20limb\x20geometry,\x20with\x20live\x20pose\x20transforms.\x20Unsupported\x20rigs\x20are\x20skipped,\x20not\x20drawn\x20as\x20an\x20estimated\x20stick\x20figure.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espHealthBar",
            "Health\x20Bar",
            _0xf94837["espInfoBg"],
            "Vertical\x20health\x20bar\x20beside\x20ESP;\x20shared\x20live/preview\x20rendering.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "healthBarWidth",
            "Health\x20Bar\x20Width",
            _0xf94837["espInfoBg"],
            "Bar\x20width\x20in\x20pixels.",
            0x1,
            0x10,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "healthBarShadow",
            "Health\x20Bar\x20Drop\x20Shadow",
            _0xf94837["espInfoBg"],
            "Toggle\x20health-bar\x20glow\x20and\x20label\x20shadow\x20without\x20changing\x20other\x20ESP\x20elements.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "healthBarUseTheme",
            "Health\x20Bar\x20Theme\x20Color",
            _0xf94837["palette"],
            "Use\x20the\x20GUI\x20palette\x20fade\x20instead\x20of\x20green/yellow/red\x20health\x20colors.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espLines",
            "ESP\x20Lines",
            _0xf94837["line"],
            _0x730e32["espLines"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espNameTags",
            "Name\x20Tags",
            _0xf94837["nameTags"],
            _0x730e32["espNameTags"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espWeaponIcons",
            "Weapon\x20Icons",
            _0xf94837["weaponIcons"],
            _0x730e32["espWeaponIcons"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espInfoBackground",
            "Info\x20Background",
            _0xf94837["espInfoBg"],
            _0x730e32["espInfoBackground"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Chams</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "chamsEnabled",
            "Character\x20Chams",
            _0xf94837["robot"],
            "Color\x20actual\x20character\x20geometry,\x20including\x20your\x20native\x20third-person\x20body.\x20Uses\x20ESP\x20team/bot\x20filters;\x20no\x20first-person\x20weapon\x20recoloring.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "chamsVisible",
            "Visible\x20Chams",
            _0xf94837["espSquare"],
            "Only\x20fragments\x20in\x20front\x20of\x20the\x20scene\x20depth\x20are\x20colored.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "chamsVisibleColor",
            "Visible\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "chamsOccluded",
            "Occluded\x20/\x20Through\x20Walls",
            _0xf94837["wallOff"],
            "Only\x20fragments\x20behind\x20scene\x20depth\x20are\x20colored,\x20with\x20a\x20separate\x20color.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "chamsOccludedColor",
            "Occluded\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "chamsOpacity",
            "Chams\x20Opacity\x20%",
            _0xf94837["palette"],
            "Opacity\x20of\x20both\x20depth\x20passes.",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "chamsUseTheme",
            "Chams\x20Theme\x20Color",
            _0xf94837["palette"],
            "Use\x20the\x20palette\x20colors\x20instead\x20of\x20the\x20saved\x20visible/occluded\x20colors.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "chamsFade",
            "Chams\x20Color\x20Fade",
            _0xf94837["palette"],
            "Smoothly\x20fade\x20between\x20both\x20colors;\x20visibility\x20depth\x20checks\x20stay\x20independent.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "chamsFadeSeconds",
            "Chams\x20Fade\x20Seconds",
            _0xf94837["palette"],
            "Duration\x20of\x20a\x20full\x20color-fade\x20cycle,\x20shared\x20with\x20weapon\x20chams.",
            0.5,
            0xc,
            0.5,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Weapon\x20Chams</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "weaponChamsEnabled",
            "Weapon\x20Chams",
            _0xf94837["weaponIcons"],
            "Color\x20actual\x20held\x20weapon\x20models,\x20visible\x20world\x20weapons\x20and\x20native\x20pickup\x20meshes.\x20Arms\x20are\x20excluded.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "weaponChamsUseTheme",
            "Weapon\x20Chams\x20Theme\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "weaponChamsColor",
            "Weapon\x20Chams\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "weaponChamsEndColor",
            "Weapon\x20Fade\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "weaponChamsFade",
            "Weapon\x20Chams\x20Fade",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "weaponChamsOpacity",
            "Weapon\x20Chams\x20Opacity\x20%",
            _0xf94837["palette"],
            "",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Glow\x20ESP</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "glowEspEnabled",
            "Glow\x20ESP",
            _0xf94837["robot"],
            "Soft\x20additive\x20silhouette\x20shells\x20on\x20actual\x20opponent\x20geometry;\x20depth-tested,\x20not\x20through\x20walls.\x20Uses\x20ESP\x20team/bot\x20filters.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "glowUseTheme",
            "Glow\x20Theme\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "glowColor",
            "Glow\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "glowOpacity",
            "Glow\x20Strength\x20%",
            _0xf94837["palette"],
            "",
            0x0,
            0x64,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "glowSize",
            "Glow\x20Size\x20%",
            _0xf94837["palette"],
            "",
            0x1,
            0xf,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Trails</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "walkingTrailsEnabled",
            "Trails",
            _0xf94837["line"],
            "Ground-level\x20movement\x20trail\x20with\x20fade\x20and\x20glow.\x20Old\x20points\x20expire;\x20respawn\x20jumps\x20break\x20the\x20line.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "walkingTrailsOthers",
            "Other\x20Player\x20Trails",
            _0xf94837["teamCheck"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "walkingTrailSeconds",
            "Trail\x20Lifetime",
            _0xf94837["line"],
            "Seconds\x20before\x20old\x20trail\x20points\x20disappear.",
            0.5,
            0x8,
            0.5,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "walkingTrailWidth",
            "Trail\x20Width",
            _0xf94837["line"],
            "",
            0x1,
            0x6,
            0.5,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "trailUseTheme",
            "Trail\x20Theme\x20Colors",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "trailColor",
            "Trail\x20Start\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "trailEndColor",
            "Trail\x20End\x20Color",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Bullet\x20Tracers</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "bulletTracersEnabled",
            "Bullet\x20Tracers",
            _0xf94837["line"],
            "Observe\x20the\x20actual\x20native\x20hitscan\x20ray\x20after\x20spread\x20and\x20recoil,\x20not\x20the\x20crosshair.\x20Uses\x20native\x20impact\x20coordinates\x20when\x20observed,\x20otherwise\x20the\x20native\x20range\x20endpoint.\x20Server\x20hit\x20results\x20and\x20curved\x20projectiles\x20are\x20not\x20exposed.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "bulletTracersOthers",
            "Other\x20Player\x20Bullet\x20Tracers",
            _0xf94837["teamCheck"],
            "Only\x20for\x20remote\x20shots\x20routed\x20through\x20the\x20observed\x20native\x20shooting\x20API.\x20No\x20ammo-change\x20guesses\x20or\x20fabricated\x20lines.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "bulletTracerSeconds",
            "Bullet\x20Tracer\x20Lifetime",
            _0xf94837["line"],
            "",
            0.1,
            0x4,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "bulletTracerWidth",
            "Bullet\x20Tracer\x20Width",
            _0xf94837["line"],
            "",
            0x1,
            0x6,
            0.5,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Filters</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espTeamCheck",
            "Team\x20Check",
            _0xf94837["teamCheck"],
            _0x730e32["espTeamCheck"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espBotCheck",
            "Bot\x20ESP",
            _0xf94837["robot"],
            _0x730e32["espBotCheck"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Colors</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "espUseTheme",
            "Use\x20Theme\x20Fade",
            _0xf94837["palette"],
            "Match\x20ESP\x20and\x20FOV\x20to\x20the\x20selected\x20palette.\x20Switch\x20off\x20for\x20custom\x20colors.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-menu-item\x22><label\x20for=\x22cracky-box-style\x22>Box\x20Style</label><select\x20id=\x22cracky-box-style\x22\x20class=\x22cracky-select\x22\x20style=\x22width:150px\x22><option\x20value=\x22corners\x22\x20" +
          (this["settings"]["espBoxStyle"] !== "full" ? "selected" : "") +
          ">Gradient\x20corners</option><option\x20value=\x22full\x22\x20" +
          (this["settings"]["espBoxStyle"] === "full" ? "selected" : "") +
          ">Gradient\x20box</option></select></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "espColor",
            "ESP\x20Color",
            _0xf94837["palette"],
            _0x730e32["espColor"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "boxColor",
            "Box\x20Color",
            _0xf94837["palette"],
            _0x730e32["boxColor"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "botColor",
            "Bot\x20Color",
            _0xf94837["palette"],
            _0x730e32["botColor"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<details\x20class=\x22anonimbiri-tab-pane\x22\x20id=\x22anonimbiri-tab-misc\x22\x20open><summary>OTHER</summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Privacy</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "nameProtectEnabled",
            "NameProtect",
            _0xf94837["nameTags"],
            "Mask\x20your\x20logged-in\x20name\x20locally\x20in\x20displayed\x20labels.\x20Account,\x20packets,\x20login\x20fields\x20and\x20other\x20players’\x20views\x20are\x20unchanged.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "text",
            "nameProtectAlias",
            "Protected\x20Name",
            _0xf94837["nameTags"],
            "Local\x20alias;\x20default\x20crackyio.\x20This\x20is\x20not\x20an\x20account\x20rename.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Movement</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "bhopEnabled",
            "Bunny\x20Hop",
            _0xf94837["bounce"],
            _0x730e32["bhopEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "speedEnabled",
            "Speed",
            _0xf94837["bounce"],
            "Scale\x20the\x20native\x20local\x20speed\x20boost\x20without\x20changing\x20input\x20timestamps\x20or\x20position\x20packets.\x20The\x20server\x20can\x20correct\x20movement.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "speedMultiplier",
            "Speed\x20Multiplier",
            _0xf94837["bounce"],
            "Local\x20speed\x20multiplier.\x201×\x20retains\x20the\x20native\x20boost.",
            0.1,
            0x5,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Combat</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "rapidFireEnabled",
            "Rapid\x20Fire",
            _0xf94837["autoReload"],
            "Scale\x20the\x20native\x20local\x20firing\x20cooldown.\x20Keeps\x20native\x20ammunition\x20and\x20reloads;\x20does\x20not\x20prove\x20the\x20server\x20will\x20accept\x20additional\x20shots.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "rapidFireMultiplier",
            "Fire-rate\x20Multiplier",
            _0xf94837["autoReload"],
            "1×\x20native\x20rate;\x20up\x20to\x2020×\x20local\x20cooldown\x20scale.\x20Native\x20input\x20cadence\x20and\x20server\x20checks\x20still\x20limit\x20real\x20firing.\x20Hold\x20the\x20trigger;\x20this\x20does\x20not\x20enable\x20Auto\x20Fire.",
            0x1,
            0x14,
            0.1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "magicBulletEnabled",
            "MagicBullet",
            _0xf94837["autoReload"],
            "Unavailable:\x20no\x20verified\x20client-controlled\x20teleport-and-hit\x20path.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "antiAimEnabled",
            "Anti-Aim",
            _0xf94837["antiAim"],
            _0x730e32["antiAimEnabled"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "autoNuke",
            "Auto\x20Nuke",
            _0xf94837["rocket"],
            _0x730e32["autoNuke"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "antikick",
            "Anti\x20Kick",
            _0xf94837["antiKick"],
            _0x730e32["antikick"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Chat</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "killsayEnabled",
            "Killsay",
            _0xf94837["nameTags"],
            "Send\x20target-name\x20gaming\x20banter\x20after\x20a\x20confirmed\x20local\x20kill.\x20Off\x20by\x20default.\x20Uses\x20native\x20chat\x20and\x20a\x20cooldown;\x20skips\x20busy\x20chat,\x20bots,\x20replays\x20and\x20stale\x20queued\x20messages.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "select",
            "killsayMode",
            "Message\x20Mode",
            _0xf94837["nameTags"],
            "Random\x20rotates\x20203\x20templates\x20without\x20repeats\x20until\x20the\x20pool\x20is\x20exhausted.",
            [
              ["random", "Random\x20·\x20203\x20messages"],
              ["custom", "Custom\x20message"],
            ],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "text",
            "killsayMessage",
            "Custom\x20Message",
            _0xf94837["nameTags"],
            "Use\x20{name}\x20for\x20the\x20target.\x20If\x20omitted,\x20their\x20name\x20is\x20prefixed.\x20Native\x2070-character\x20chat\x20limit\x20applies.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "slider",
            "killsayCooldown",
            "Chat\x20Cooldown\x20(s)",
            _0xf94837["nameTags"],
            "Bounded\x20queue,\x20no\x20more\x20than\x20one\x20message\x20per\x20cooldown.\x20Chat/server\x20restrictions\x20still\x20apply.",
            0x2,
            0x1e,
            0x1,
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "autoReload",
            "Auto\x20Reload",
            _0xf94837["autoReload"],
            _0x730e32["autoReload"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "toggle",
            "instantReload",
            "Instant\x20Reload",
            _0xf94837["autoReload"],
            "Shorten\x20an\x20active\x20local\x20reload\x20to\x20one\x20input\x20tick.\x20Uses\x20native\x20ammo/reserve/UI\x20completion;\x20the\x20server\x20may\x20reject\x20or\x20correct\x20it.\x20Independent\x20of\x20Auto\x20Reload,\x20off\x20by\x20default.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<details\x20class=\x22anonimbiri-tab-pane\x22\x20id=\x22anonimbiri-tab-configs\x22\x20open><summary>CONFIGS</summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-section\x22>Custom\x20GUI\x20Colors</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "customGuiPrimary",
            "Primary\x20Accent",
            _0xf94837["palette"],
            "Select\x20the\x20Custom\x20palette\x20to\x20edit\x20GUI\x20colors.",
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "customGuiSecondary",
            "Secondary\x20Accent",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          this["createMenuItemHTML"](
            "color",
            "customGuiSurface",
            "Panel\x20Background",
            _0xf94837["palette"],
          ) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-config-manager\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Settings\x20configs</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Config\x20name<input\x20id=\x22cracky-config-name\x22\x20class=\x22cracky-select\x22\x20maxlength=\x2248\x22\x20placeholder=\x22My\x20config\x22\x20aria-label=\x22Config\x20name\x22></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Choose\x20config<select\x20id=\x22cracky-config-list\x22\x20class=\x22cracky-select\x22\x20aria-label=\x22Choose\x20config\x22></select></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-config-actions\x22><button\x20id=\x22cracky-config-save\x22\x20type=\x22button\x22\x20class=\x22cracky-select\x22>Save</button><button\x20id=\x22cracky-config-load\x22\x20type=\x22button\x22\x20class=\x22cracky-select\x22>Load</button><button\x20id=\x22cracky-config-delete\x22\x20type=\x22button\x22\x20class=\x22cracky-select\x22>Remove</button></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-config-actions\x22><button\x20id=\x22cracky-config-export\x22\x20type=\x22button\x22\x20class=\x22cracky-select\x22>Export\x20JSON</button><button\x20id=\x22cracky-config-import\x22\x20type=\x22button\x22\x20class=\x22cracky-select\x22>Import\x20JSON</button></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22cracky-config-file\x22\x20type=\x22file\x22\x20accept=\x22.json,application/json\x22\x20hidden>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22cracky-config-status\x22\x20role=\x22status\x22>Legit\x20is\x20the\x20new-install\x20default.\x20Built-ins\x20are\x20read-only;\x20Save\x20with\x20a\x20name\x20to\x20keep\x20an\x20edited\x20copy.\x20Import/load\x20replaces\x20settings,\x20keybinds\x20and\x20panel\x20positions;\x20save\x20first\x20to\x20keep\x20them.\x20No\x20account\x20or\x20task/key\x20data.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-esp-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-esp-title\x22>ESP\x20Preview</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-esp-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22anonimbiri-espCanvas\x22\x20width=\x22200\x22\x20height=\x22450\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<details\x20class=\x22cracky-diagnostics\x22><summary>Diagnostics</summary>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cracky-hook-status\x22\x20class=\x22anonimbiri-hook-status\x22>" +
          this["escapeHTML"](this["getHookStatusText"]()) +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cracky-module-status\x22\x20class=\x22anonimbiri-hook-status\x22>" +
          this["escapeHTML"](this["getModuleStatusText"]()) +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</details>",
        _0xa8f06e = document["createElement"]("template");
      _0xa8f06e["innerHTML"] = _0x31d291;
      const _0x5f1297 = _0xa8f06e["content"]["querySelectorAll"](
          ".anonimbiri-tab-pane",
        ),
        _0x1121a9 = _0x5f1297[0x3],
        _0x3c646b = _0x5f1297[0x2];
      _0x1121a9["querySelector"]("summary")["after"](
        _0xa8f06e["content"]["querySelector"](".cracky-appearance"),
      );
      const _0x1261b9 = document["createElement"]("div");
      ((_0x1261b9["className"] = "anonimbiri-menu-item"),
        (_0x1261b9["innerHTML"] =
          "<label>Menu\x20key</label><button\x20class=\x22anonimbiri-hk-btn\x22\x20data-hk=\x22toggleMenu\x22>" +
          this["escapeHTML"](this["hotkeys"]["toggleMenu"] || "None") +
          "</button>"),
        _0x3c646b["append"](
          _0x1261b9,
          _0xa8f06e["content"]["querySelector"](".cracky-diagnostics"),
        ));
      if (this["settings"]["guiLayout"] === "liquidbounce")
        return this["getLiquidbounceHtml"](_0xa8f06e["innerHTML"]);
      if (this["settings"]["guiLayout"] !== "dropdown") {
        if (
          ["aimbot", "visuals", "misc", "configs"]["includes"](
            this["activeMenuTab"],
          )
        ) {
          for (const _0x51ad24 of _0xa8f06e["content"]["querySelectorAll"](
            ".anonimbiri-tab",
          ))
            _0x51ad24["classList"]["toggle"](
              "active",
              _0x51ad24["dataset"]["tab"] === this["activeMenuTab"],
            );
          for (const _0x53e4fb of _0x5f1297)
            _0x53e4fb["classList"]["toggle"](
              "active",
              _0x53e4fb["id"] === "anonimbiri-tab-" + this["activeMenuTab"],
            );
        }
        return _0xa8f06e["innerHTML"];
      }
      _0x5f1297["forEach"]((_0x3c4333, _0x1efb02) => {
        _0x3c4333["open"] = !![];
        const _0xcb77bd = _0x3c4333["querySelector"]("summary");
        ((_0xcb77bd["title"] =
          "Drag\x20to\x20move\x20·\x20Click\x20to\x20collapse"),
          (_0xcb77bd["innerHTML"] =
            ["AIM", "VISUALS", "OTHER", "CONFIGS"][_0x1efb02] +
            "<span\x20class=\x22cracky-drag-handle\x22\x20aria-label=\x22Move\x20panel\x22\x20title=\x22Drag\x20header\x20to\x20move\x22>✥</span>"));
      });
      const _0x1be80a = document["createElement"]("div");
      return (
        (_0x1be80a["className"] = "cracky-krux-toolbar"),
        _0x1be80a["append"](
          _0xa8f06e["content"]["querySelector"]("#cracky-reset-panels"),
        ),
        _0xa8f06e["content"]["prepend"](_0x1be80a),
        _0xa8f06e["innerHTML"]
      );
    }
    ["getLiquidbounceHtml"](_0x10893b) {
      const _0xc85c46 = document["createElement"]("template");
      _0xc85c46["innerHTML"] = _0x10893b;
      const _0x46382d = _0xc85c46["content"],
        _0x289e1d = new Map(
          [
            ..._0x46382d["querySelectorAll"](
              ".anonimbiri-menu-item[data-setting]",
            ),
          ]["map"]((_0x5da0dc) => [_0x5da0dc["dataset"]["setting"], _0x5da0dc]),
        ),
        _0x83f026 = document["createElement"]("div");
      _0x83f026["innerHTML"] =
        "<div\x20class=\x22cracky-liquid-toolbar\x22>" +
        this["getLogoHtml"]() +
        "<input\x20id=\x22cracky-liquid-search\x22\x20type=\x22search\x22\x20placeholder=\x22Search\x22\x20aria-label=\x22Search\x20modules\x20and\x20settings\x22\x20autocomplete=\x22off\x22\x20spellcheck=\x22false\x22><button\x20type=\x22button\x22\x20id=\x22cracky-liquid-config\x22\x20aria-label=\x22Open\x20GUI\x20settings\x22\x20title=\x22GUI\x20settings\x22>⚙</button></div><div\x20class=\x22anonimbiri-content-wrap\x22><div\x20class=\x22anonimbiri-tab-content\x20cracky-liquid-grid\x22></div></div><div\x20class=\x22cracky-liquid-empty\x22\x20hidden>No\x20matching\x20modules</div>";
      const _0x1df8db = _0x83f026["querySelector"](".cracky-liquid-grid"),
        _0x47cc13 = _0x46382d["querySelector"]("#cracky-reset-panels");
      ((_0x47cc13["textContent"] = "↺"),
        (_0x47cc13["title"] = "Reset\x20panel\x20positions"),
        _0x47cc13["setAttribute"]("aria-label", "Reset\x20panel\x20positions"),
        _0x83f026["querySelector"](".cracky-liquid-toolbar")["append"](
          _0x47cc13,
        ));
      const _0x1cc038 = _0x4298fa;
      for (const _0xc13856 of Object["keys"](_0x1cc038)) {
        const _0x108cbc = document["createElement"]("details");
        ((_0x108cbc["className"] = "anonimbiri-tab-pane"),
          (_0x108cbc["id"] = "cracky-liquid-" + _0xc13856["toLowerCase"]()),
          (_0x108cbc["open"] = !![]),
          (_0x108cbc["innerHTML"] =
            "<summary\x20title=\x22Drag\x20to\x20move\x20·\x20Click\x20to\x20collapse\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20aria-hidden=\x22true\x22>" +
            _0x1cc038[_0xc13856] +
            "</svg><span>" +
            (_0xc13856 === "Misc" ? "Other" : _0xc13856) +
            "</span></summary><div\x20class=\x22cracky-liquid-body\x22></div>"));
        const _0x5d196e = _0x108cbc["querySelector"](".cracky-liquid-body");
        for (const _0x4b2dd5 of _0x101c16["filter"](
          (_0x5f303c) => _0x5f303c["category"] === _0xc13856,
        )) {
          const _0x11fd57 = document["createElement"]("div");
          ((_0x11fd57["className"] = "cracky-liquid-module"),
            (_0x11fd57["dataset"]["module"] =
              _0x4b2dd5["setting"] || "clickGUI"));
          const _0x595d49 =
            "cracky-liquid-options-" + _0x11fd57["dataset"]["module"];
          _0x11fd57["innerHTML"] =
            "<div\x20class=\x22cracky-liquid-row\x22><button\x20type=\x22button\x22\x20class=\x22cracky-liquid-toggle\x22\x20" +
            (_0x4b2dd5["setting"]
              ? "data-module-setting=\x22" +
                _0x4b2dd5["setting"] +
                "\x22\x20aria-pressed=\x22" +
                !!this["settings"][_0x4b2dd5["setting"]] +
                "\x22"
              : "data-open-config") +
            "\x20" +
            (this["isUnavailableFeature"](_0x4b2dd5["setting"])
              ? "disabled\x20title=\x22Unavailable\x20in\x20this\x20build\x22"
              : "") +
            ">" +
            _0x4b2dd5["name"] +
            "</button><button\x20type=\x22button\x22\x20class=\x22cracky-liquid-expand\x22\x20aria-label=\x22Settings\x20for\x20" +
            _0x4b2dd5["name"] +
            "\x22\x20aria-expanded=\x22false\x22\x20aria-controls=\x22" +
            _0x595d49 +
            "\x22>›</button></div><div\x20id=\x22" +
            _0x595d49 +
            "\x22\x20class=\x22cracky-liquid-options\x22\x20hidden></div>";
          const _0x3e4e7b = _0x11fd57["querySelector"](
            ".cracky-liquid-options",
          );
          for (const _0x24b78e of [
            _0x4b2dd5["setting"],
            ...(_0x4b2dd5["options"] || []),
          ]) {
            const _0x244ae0 = _0x289e1d["get"](_0x24b78e);
            _0x244ae0 &&
              (_0x3e4e7b["append"](_0x244ae0), _0x289e1d["delete"](_0x24b78e));
          }
          if (_0x4b2dd5["setting"] === "espSquare")
            _0x3e4e7b["append"](
              _0x46382d["querySelector"]("#cracky-box-style")["closest"](
                ".anonimbiri-menu-item",
              ),
            );
          if (_0x4b2dd5["setting"] === "customCrosshairEnabled")
            _0x3e4e7b["prepend"](
              _0x46382d["querySelector"](".cracky-crosshair-preview"),
            );
          if (_0x4b2dd5["setting"] === "unlockSkins")
            _0x3e4e7b["prepend"](
              _0x46382d["querySelector"](".cracky-cosmetic-search"),
            );
          if (!_0x4b2dd5["setting"]) {
            (_0x3e4e7b["prepend"](
              _0x46382d["querySelector"](".cracky-appearance"),
            ),
              _0x3e4e7b["append"](
                _0x46382d["querySelector"](".cracky-config-manager"),
              ));
            for (const _0x408033 of _0x289e1d["values"]())
              _0x3e4e7b["append"](_0x408033);
          }
          _0x5d196e["append"](_0x11fd57);
        }
        if (_0xc13856 === "Misc")
          _0x5d196e["append"](
            _0x46382d["querySelector"]("[data-hk=toggleMenu]")["closest"](
              ".anonimbiri-menu-item",
            ),
            _0x46382d["querySelector"](".cracky-diagnostics"),
          );
        _0x1df8db["append"](_0x108cbc);
      }
      return _0x83f026["innerHTML"];
    }
    ["syncModuleButtons"](
      _0x282a10 = document["querySelector"](".anonimbiri-menu-container"),
    ) {
      if (!_0x282a10) return;
      for (const _0xdf5d97 of _0x282a10["querySelectorAll"](
        "[data-module-setting]",
      ))
        _0xdf5d97["setAttribute"](
          "aria-pressed",
          String(
            !this["isUnavailableFeature"](
              _0xdf5d97["dataset"]["moduleSetting"],
            ) && !!this["settings"][_0xdf5d97["dataset"]["moduleSetting"]],
          ),
        );
    }
    ["toggleMenuSetting"](_0x5c65d7, _0x414fde) {
      if (
        this["isUnavailableFeature"](_0x5c65d7) ||
        typeof this["settings"][_0x5c65d7] !== "boolean"
      )
        return;
      ((this["settings"][_0x5c65d7] = !this["settings"][_0x5c65d7]),
        this["saveSettings"]("crackyio_settings", this["settings"]));
      for (const _0x2596db of _0x414fde?.["querySelectorAll"](
        "\x20.anonimbiri-menu-item[data-setting=\x22" + _0x5c65d7 + "\x22]",
      ) || []) {
        (_0x2596db["classList"]["toggle"](
          "active",
          this["settings"][_0x5c65d7],
        ),
          _0x2596db["querySelector"](".anonimbiri-toggle-switch")?.[
            "classList"
          ]["toggle"]("active", this["settings"][_0x5c65d7]));
      }
      if (_0x5c65d7 === "themeHudEnabled") this["applyHudTheme"]();
      _0x5c65d7 === "nameProtectEnabled" &&
        ((this["nameProtectLastScan"] = null), this["updateNameProtect"]());
      if (_0x5c65d7 === "thirdPersonEnabled")
        this["runHook"]("third-person", () =>
          this["isGameplayAllowed"]()
            ? this["updateThirdPerson"]()
            : this["restoreThirdPerson"](),
        );
      _0x5c65d7 === "killsayEnabled" &&
        ((this["killsayRetryAt"] = 0x0),
        this["failedHooks"]?.["delete"]("killsay"),
        this["hookErrors"]?.["delete"]("killsay"),
        this["runHook"]("killsay", () => this["updateKillsay"]()));
      ["speedEnabled", "rapidFireEnabled"]["includes"](_0x5c65d7) &&
        (this["failedHooks"]?.["delete"]("local-prediction"),
        this["hookErrors"]?.["delete"]("local-prediction"),
        this["runHook"]("local-prediction", () =>
          this["updatePredictionControls"](),
        ));
      for (const [_0x35b500, _0x4d4318, _0x449df8] of [
        ["noRecoilEnabled", "no-recoil", "updateNoRecoil"],
        ["noScopeOverlayEnabled", "scope-overlay", "updateScopeOverlay"],
      ])
        _0x5c65d7 === _0x35b500 &&
          (this["failedHooks"]?.["delete"](_0x4d4318),
          this["hookErrors"]?.["delete"](_0x4d4318),
          this["runHook"](_0x4d4318, () => this[_0x449df8]()));
      _0x5c65d7 === "noZoomEnabled" &&
        (this["failedHooks"]?.["delete"]("no-zoom"),
        this["hookErrors"]?.["delete"]("no-zoom"),
        this["runHook"]("no-zoom", () => this["updateNoZoom"]()));
      (_0x5c65d7 === "customCrosshairEnabled" ||
        _0x5c65d7 === "noScopeOverlayEnabled" ||
        _0x5c65d7 === "noScopeCrosshairEnabled" ||
        _0x5c65d7["startsWith"]("crosshair")) &&
        ((this["crosshairRetryAt"] = 0x0),
        this["failedHooks"]?.["delete"]("custom-crosshair"),
        this["hookErrors"]?.["delete"]("custom-crosshair"),
        this["runHook"]("custom-crosshair", () =>
          this["updateCustomCrosshair"](),
        ),
        this["renderCrosshairPreview"](_0x414fde));
      ["bulletTracersEnabled", "autoFireEnabled", "autoFireSeedEnabled"][
        "includes"
      ](_0x5c65d7) &&
        (this["failedHooks"]?.["delete"]("native-shots"),
        this["hookErrors"]?.["delete"]("native-shots"),
        this["runHook"]("native-shots", () => this["updateShotObservers"]()),
        this["runHook"]("trails", () =>
          this["isGameplayAllowed"]()
            ? this["updateTrails"]()
            : this["restoreTrails"](),
        ));
      (_0x5c65d7 === "worldModulationEnabled" ||
        _0x5c65d7 === "worldColorOverride") &&
        (this["failedHooks"]?.["delete"]("world-modulation"),
        this["hookErrors"]?.["delete"]("world-modulation"),
        (this["worldLastScan"] = null),
        this["runHook"]("world-modulation", () =>
          this["updateWorldModulation"](),
        ));
      for (const [_0x1d1cee, _0x41e63e] of [
        ["chams", "chams"],
        ["weaponChams", "weapon-chams"],
        ["glow", "glow-esp"],
        ["customFog", "custom-fog"],
      ])
        _0x5c65d7["startsWith"](_0x1d1cee) &&
          (this["failedHooks"]?.["delete"](_0x41e63e),
          this["hookErrors"]?.["delete"](_0x41e63e));
      if (_0x5c65d7 === "customFogEnabled")
        this["runHook"]("custom-fog", () => this["updateCustomFog"]());
      if (_0x5c65d7["startsWith"]("chams"))
        this["runHook"]("chams", () => this["updateChams"]());
      if (_0x5c65d7["startsWith"]("weaponChams"))
        this["runHook"]("weapon-chams", () => this["updateWeaponChams"]());
      if (_0x5c65d7["startsWith"]("glow"))
        this["runHook"]("glow-esp", () => this["updateGlowESP"]());
      if (
        _0x5c65d7 === "walkingTrailsEnabled" &&
        !this["settings"]["walkingTrailsEnabled"]
      )
        this["walkingTracks"]?.["clear"]();
      if (
        _0x5c65d7 === "bulletTracersEnabled" &&
        !this["settings"]["bulletTracersEnabled"]
      )
        this["bulletSegments"] = [];
      (this["syncModuleButtons"](_0x414fde),
        this["refreshConditionalControls"](_0x414fde),
        this["updateArrayList"](!![]),
        this["updateClientHud"](!![]));
      if (this["espPreviewCtx"]) this["renderESPPreview"]();
    }
    ["bindLiquidbounceMenu"](_0x4b4b91) {
      const _0x3981c0 = _0x4b4b91["querySelector"]("#cracky-liquid-search");
      if (!_0x3981c0) return;
      const _0x449bd9 = [
          ..._0x4b4b91["querySelectorAll"](".cracky-liquid-module"),
        ],
        _0x103ed2 = [..._0x4b4b91["querySelectorAll"](".anonimbiri-tab-pane")];
      let _0x5d79d8 = null,
        _0x32d941 = null;
      const _0x6ff6ad = (
        _0x54d849,
        _0x2670f3 = _0x54d849["querySelector"](".cracky-liquid-options")[
          "hidden"
        ],
      ) => {
        ((_0x54d849["querySelector"](".cracky-liquid-options")["hidden"] =
          !_0x2670f3),
          _0x54d849["querySelector"](".cracky-liquid-expand")["setAttribute"](
            "aria-expanded",
            String(_0x2670f3),
          ));
        if (!_0x2670f3) this["closeColorPicker"]?.();
      };
      (_0x4b4b91["querySelector"](".cracky-liquid-grid")["addEventListener"](
        "click",
        (_0x1b197e) => {
          const _0x32f55a = _0x1b197e["target"]["closest"](
            "[data-module-setting]",
          );
          if (_0x32f55a) {
            this["toggleMenuSetting"](
              _0x32f55a["dataset"]["moduleSetting"],
              _0x4b4b91,
            );
            return;
          }
          const _0x456b12 = _0x1b197e["target"]["closest"](
            ".cracky-liquid-expand,[data-open-config]",
          );
          if (_0x456b12)
            _0x6ff6ad(_0x456b12["closest"](".cracky-liquid-module"));
        },
      ),
        _0x4b4b91["querySelector"]("#cracky-liquid-config")["addEventListener"](
          "click",
          () => {
            ((_0x3981c0["value"] = ""),
              _0x3981c0["dispatchEvent"](new Event("input")));
            const _0x220aa6 = _0x449bd9["find"](
                (_0xc12c9b) => _0xc12c9b["dataset"]["module"] === "clickGUI",
              ),
              _0x1af80b = _0x220aa6["closest"]("details");
            ((_0x1af80b["open"] = !![]),
              _0x6ff6ad(_0x220aa6, !![]),
              _0x220aa6["scrollIntoView"]({ block: "nearest" }),
              _0x220aa6["querySelector"]("#cracky-layout")["focus"]());
          },
        ),
        _0x3981c0["addEventListener"]("input", () => {
          const _0xae0280 = _0x3981c0["value"]["trim"]()["toLowerCase"]();
          _0xae0280 &&
            !_0x5d79d8 &&
            ((_0x5d79d8 = _0x103ed2["map"]((_0x2544b2) => _0x2544b2["open"])),
            (_0x32d941 = _0x449bd9["map"](
              (_0x41f246) =>
                !_0x41f246["querySelector"](".cracky-liquid-options")["hidden"],
            )),
            this["closeColorPicker"]?.());
          let _0x14cdc5 = 0x0;
          (_0x449bd9["forEach"]((_0x181c91, _0x2def9f) => {
            const _0xc02d61 = _0x181c91["querySelector"](
                ".cracky-liquid-toggle",
              )["textContent"]["toLowerCase"](),
              _0x56b3b1 =
                !_0xae0280 ||
                _0x181c91["textContent"]
                  ["toLowerCase"]()
                  ["includes"](_0xae0280);
            _0x181c91["hidden"] = !_0x56b3b1;
            if (_0x56b3b1) _0x14cdc5++;
            if (_0xae0280)
              _0x6ff6ad(
                _0x181c91,
                _0x56b3b1 && !_0xc02d61["includes"](_0xae0280),
              );
            else {
              if (_0x32d941) _0x6ff6ad(_0x181c91, _0x32d941[_0x2def9f]);
            }
          }),
            _0x103ed2["forEach"]((_0x2b20a7, _0x5a636a) => {
              _0x2b20a7["hidden"] =
                _0xae0280 &&
                ![..._0x2b20a7["querySelectorAll"](".cracky-liquid-module")][
                  "some"
                ]((_0x14e385) => !_0x14e385["hidden"]);
              if (_0xae0280) _0x2b20a7["open"] = !![];
              else {
                if (_0x5d79d8) _0x2b20a7["open"] = _0x5d79d8[_0x5a636a];
              }
            }),
            (_0x4b4b91["querySelector"](".cracky-liquid-empty")["hidden"] =
              _0x14cdc5 !== 0x0),
            !_0xae0280 && ((_0x5d79d8 = null), (_0x32d941 = null)));
        }),
        _0x3981c0["addEventListener"]("keydown", (_0xb8a807) => {
          _0xb8a807["key"] === "Escape" &&
            (_0xb8a807["preventDefault"](),
            _0xb8a807["stopPropagation"](),
            (_0x3981c0["value"] = ""),
            _0x3981c0["dispatchEvent"](new Event("input")));
        }),
        this["syncModuleButtons"](_0x4b4b91));
    }
    ["isUnavailableFeature"](_0x564631) {
      return _0x564631 === "magicBulletEnabled";
    }
    ["isSettingRelevant"](_0x28a4b4) {
      const _0x548273 = this["settings"];
      if (["killsayMode", "killsayCooldown"]["includes"](_0x28a4b4))
        return _0x548273["killsayEnabled"] === !![];
      if (_0x28a4b4 === "killsayMessage")
        return (
          _0x548273["killsayEnabled"] === !![] &&
          _0x548273["killsayMode"] === "custom"
        );
      if (_0x28a4b4["startsWith"]("crosshair")) {
        if (
          !(
            _0x548273["customCrosshairEnabled"] ||
            (_0x548273["noScopeOverlayEnabled"] &&
              _0x548273["noScopeCrosshairEnabled"])
          )
        )
          return ![];
        const _0xee9e41 =
            _0x548273["crosshairStyle"]["startsWith"]("classic") ||
            _0x548273["crosshairStyle"]["startsWith"]("quad"),
          _0x9282a9 = _0x548273["crosshairStyle"]["endsWith"]("-dynamic"),
          _0x16b1c1 =
            _0x548273["crosshairDot"] || _0x548273["crosshairStyle"] === "dot",
          _0x35e518 = _0x548273["crosshairScopedMode"] === "dot";
        if (
          [
            "crosshairTop",
            "crosshairBottom",
            "crosshairLeft",
            "crosshairRight",
            "crosshairLinkAxes",
          ]["includes"](_0x28a4b4)
        )
          return _0xee9e41;
        if (_0x28a4b4 === "crosshairVerticalLength")
          return _0xee9e41 && !_0x548273["crosshairLinkAxes"];
        if (
          _0x28a4b4 === "crosshairLength" ||
          _0x28a4b4 === "crosshairGap" ||
          _0x28a4b4 === "crosshairThickness"
        )
          return _0x548273["crosshairStyle"] !== "dot";
        if (
          [
            "crosshairSpreadScale",
            "crosshairSpreadLimit",
            "crosshairSmoothing",
          ]["includes"](_0x28a4b4)
        )
          return _0x9282a9;
        if (_0x28a4b4 === "crosshairDot")
          return _0x548273["crosshairStyle"] !== "dot";
        if (_0x28a4b4 === "crosshairDotShape") return _0x16b1c1 || _0x35e518;
        if (["crosshairDotSize", "crosshairDotOwnColor"]["includes"](_0x28a4b4))
          return _0x16b1c1;
        if (_0x28a4b4 === "crosshairDotColor")
          return _0x16b1c1 && _0x548273["crosshairDotOwnColor"];
        if (_0x28a4b4 === "crosshairColor")
          return !_0x548273["crosshairUseTheme"];
        if (_0x28a4b4 === "crosshairEndColor")
          return (
            !_0x548273["crosshairUseTheme"] && _0x548273["crosshairGradient"]
          );
        if (
          [
            "crosshairOutlineWidth",
            "crosshairOutlineColor",
            "crosshairOutlineOpacity",
          ]["includes"](_0x28a4b4)
        )
          return _0x548273["crosshairOutline"] !== "off";
        if (
          ["crosshairShadowBlur", "crosshairShadowColor"]["includes"](_0x28a4b4)
        )
          return _0x548273["crosshairShadow"];
        if (
          ["crosshairScopeDotSize", "crosshairScopeUseTheme"]["includes"](
            _0x28a4b4,
          )
        )
          return _0x35e518;
        if (_0x28a4b4 === "crosshairScopeColor")
          return _0x35e518 && !_0x548273["crosshairScopeUseTheme"];
        return !![];
      }
      if (_0x28a4b4["startsWith"]("customGui"))
        return (
          _0x548273["themeId"] === "custom" &&
          _0x548273["guiLayout"] !== "liquidbounce"
        );
      if (_0x28a4b4 === "weaponZoom") return !_0x548273["noZoomEnabled"];
      if (_0x28a4b4 === "fovSize")
        return !!(_0x548273["aimbotEnabled"] || _0x548273["drawFovCircle"]);
      if (["espTeamCheck", "espBotCheck", "espUseTheme"]["includes"](_0x28a4b4))
        return [
          "espSquare",
          "espBones",
          "espHealthBar",
          "espLines",
          "espNameTags",
          "espWeaponIcons",
          "chamsEnabled",
          "glowEspEnabled",
          "walkingTrailsEnabled",
          "bulletTracersEnabled",
          ...(_0x28a4b4 === "espUseTheme" ? ["drawFovCircle"] : []),
        ]["some"]((_0x2529ce) => _0x548273[_0x2529ce]);
      if (_0x28a4b4 === "worldColor" || _0x28a4b4 === "worldTintStrength")
        return (
          !!_0x548273["worldModulationEnabled"] &&
          _0x548273["worldColorOverride"] !== ![]
        );
      if (_0x28a4b4 === "chamsVisibleColor")
        return (
          !!_0x548273["chamsEnabled"] &&
          !!_0x548273["chamsVisible"] &&
          !_0x548273["chamsUseTheme"]
        );
      if (_0x28a4b4 === "chamsOccludedColor")
        return (
          !!_0x548273["chamsEnabled"] &&
          !!_0x548273["chamsOccluded"] &&
          !_0x548273["chamsUseTheme"]
        );
      if (_0x28a4b4 === "chamsFadeSeconds")
        return !!(
          (_0x548273["chamsEnabled"] && _0x548273["chamsFade"]) ||
          (_0x548273["weaponChamsEnabled"] && _0x548273["weaponChamsFade"])
        );
      if (_0x28a4b4 === "weaponChamsColor")
        return (
          !!_0x548273["weaponChamsEnabled"] && !_0x548273["weaponChamsUseTheme"]
        );
      if (_0x28a4b4 === "weaponChamsEndColor")
        return (
          !!_0x548273["weaponChamsEnabled"] &&
          !_0x548273["weaponChamsUseTheme"] &&
          !!_0x548273["weaponChamsFade"]
        );
      if (_0x28a4b4 === "glowColor")
        return !!_0x548273["glowEspEnabled"] && !_0x548273["glowUseTheme"];
      if (_0x28a4b4 === "trailColor" || _0x28a4b4 === "trailEndColor")
        return (
          !!_0x548273["walkingTrailsEnabled"] && !_0x548273["trailUseTheme"]
        );
      if (["espColor", "boxColor", "botColor"]["includes"](_0x28a4b4))
        return (
          !_0x548273["espUseTheme"] &&
          (_0x28a4b4 !== "botColor" || !!_0x548273["espBotCheck"])
        );
      if (
        ["flickSpeed", "adsTremorReduction", "aimRandomness", "aimTremor"][
          "includes"
        ](_0x28a4b4)
      )
        return (
          !!_0x548273["aimbotEnabled"] &&
          !!_0x548273["legitAimbot"] &&
          !_0x548273["superSilentEnabled"]
        );
      if (_0x28a4b4 === "aimbotWallBangs")
        return !!_0x548273["aimbotEnabled"] && !!_0x548273["aimbotWallCheck"];
      const _0x21dba1 = _0x101c16["find"](
        (_0x13723e) =>
          _0x13723e["setting"] && _0x13723e["options"]?.["includes"](_0x28a4b4),
      );
      return !_0x21dba1 || !!_0x548273[_0x21dba1["setting"]];
    }
    ["refreshConditionalControls"](
      _0x282bee = document["querySelector"](".anonimbiri-menu-container"),
    ) {
      if (!_0x282bee) return;
      for (const _0x49bae3 of _0x282bee["querySelectorAll"](
        ".anonimbiri-menu-item[data-setting]",
      ))
        _0x49bae3["hidden"] = !this["isSettingRelevant"](
          _0x49bae3["dataset"]["setting"],
        );
      for (const _0x5343d3 of _0x282bee["querySelectorAll"](
        ".anonimbiri-section",
      )) {
        const _0x1b49ee = [];
        let _0x577ded = _0x5343d3["nextElementSibling"];
        while (
          _0x577ded &&
          !_0x577ded["classList"]["contains"]("anonimbiri-section")
        ) {
          if (_0x577ded["matches"](".anonimbiri-menu-item"))
            _0x1b49ee["push"](_0x577ded);
          _0x577ded = _0x577ded["nextElementSibling"];
        }
        _0x5343d3["hidden"] =
          _0x1b49ee["length"] > 0x0 &&
          _0x1b49ee["every"]((_0x3d2b5f) => _0x3d2b5f["hidden"]);
      }
      const _0x3af87d = _0x282bee["querySelector"](
        "[data-color-setting][aria-expanded=true]",
      );
      if (_0x3af87d?.["closest"]("[hidden]")) this["closeColorPicker"]?.();
      const _0x3a0827 = _0x282bee["querySelector"](".cracky-cosmetic-search");
      if (_0x3a0827) _0x3a0827["hidden"] = !this["settings"]["unlockSkins"];
      const _0x3cbe90 = _0x282bee["querySelector"]("#cracky-box-style")?.[
        "closest"
      ](".anonimbiri-menu-item");
      if (_0x3cbe90) _0x3cbe90["hidden"] = !this["settings"]["espSquare"];
      const _0x3006c2 = _0x282bee["querySelector"](".cracky-crosshair-preview");
      if (_0x3006c2)
        _0x3006c2["hidden"] = !(
          this["settings"]["customCrosshairEnabled"] ||
          (this["settings"]["noScopeOverlayEnabled"] &&
            this["settings"]["noScopeCrosshairEnabled"])
        );
    }
    ["bindThemeSearch"](_0x11e807) {
      const _0x1ce103 = _0x11e807["querySelector"]("#cracky-theme-search"),
        _0xcfcd0 = _0x11e807["querySelector"]("#cracky-theme"),
        _0x5b5ccb = _0x11e807["querySelector"]("#cracky-theme-count");
      if (!_0x1ce103 || !_0xcfcd0 || !_0x5b5ccb) return;
      const _0x332e6f = [..._0xcfcd0["options"]]["map"]((_0x4c5095) => ({
        value: _0x4c5095["value"],
        text: _0x4c5095["textContent"],
      }));
      (_0x1ce103["addEventListener"]("input", () => {
        const _0x58e639 = _0x1ce103["value"]["trim"]()["toLowerCase"](),
          _0xefbb47 = _0x332e6f["filter"]((_0x3f7f93) =>
            _0x3f7f93["text"]["toLowerCase"]()["includes"](_0x58e639),
          ),
          _0x40e009 =
            _0x332e6f["find"](
              (_0x5bf4ce) => _0x5bf4ce["value"] === this["settings"]["themeId"],
            ) || _0x332e6f[0x0];
        _0xcfcd0["replaceChildren"]();
        for (const _0x1408a6 of _0xefbb47["some"](
          (_0x56a14e) => _0x56a14e["value"] === _0x40e009["value"],
        )
          ? _0xefbb47
          : [_0x40e009, ..._0xefbb47]) {
          const _0x2a716f = document["createElement"]("option");
          ((_0x2a716f["value"] = _0x1408a6["value"]),
            (_0x2a716f["textContent"] =
              _0x1408a6["text"] +
              (_0x58e639 &&
              _0x1408a6["value"] === _0x40e009["value"] &&
              !_0xefbb47["includes"](_0x1408a6)
                ? "\x20·\x20current"
                : "")),
            _0xcfcd0["append"](_0x2a716f));
        }
        ((_0xcfcd0["value"] = _0x40e009["value"]),
          (_0x5b5ccb["textContent"] = _0xefbb47["length"]
            ? _0xefbb47["length"] + "\x20matching\x20themes"
            : "No\x20matching\x20themes\x20·\x20current\x20selection\x20kept"));
      }),
        _0x1ce103["addEventListener"]("keydown", (_0x3a7454) => {
          (_0x3a7454["stopPropagation"](),
            _0x3a7454["key"] === "Escape" &&
              _0x1ce103["value"] &&
              (_0x3a7454["preventDefault"](),
              (_0x1ce103["value"] = ""),
              _0x1ce103["dispatchEvent"](new Event("input"))));
        }));
    }
    ["createMenuItemHTML"](
      _0x521978,
      _0x54fd7f,
      _0x2e256e,
      _0x348dde,
      _0x50d3bc = "",
      _0x20047e,
      _0x16124a,
      _0x442b71,
    ) {
      if (this["isUnavailableFeature"](_0x54fd7f))
        return (
          "<div\x20class=\x22anonimbiri-menu-item\x22\x20data-setting=\x22" +
          _0x54fd7f +
          "\x22\x20aria-disabled=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-menu-item-content\x22><label>" +
          _0x2e256e +
          "</label></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-controls\x22\x20title=\x22" +
          this["escapeHTML"](_0x50d3bc || "Unsupported\x20native\x20path") +
          "\x22>" +
          (_0x54fd7f === "magicBulletEnabled"
            ? "No\x20verified\x20hit\x20path"
            : "Unavailable\x20in\x20this\x20build") +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>"
        );
      let _0x35689f = "";
      const _0x5186d4 =
          "<svg\x20class=\x22anonimbiri-menu-item-icon\x22\x20viewBox=\x220\x200\x2024\x2024\x22>" +
          _0x348dde +
          "</svg>",
        _0xbce891 = _0x50d3bc ? "\x20data-tip=\x22" + _0x50d3bc + "\x22" : "",
        _0x53bc40 = this["defaultHotkeys"]["hasOwnProperty"](_0x54fd7f);
      switch (_0x521978) {
        case "toggle":
          if (_0x53bc40) {
            const _0x17ea24 = this["hotkeys"][_0x54fd7f]
                ? this["hotkeys"][_0x54fd7f]["replace"]("Key", "")
                    ["replace"]("Digit", "")
                    ["replace"]("Numpad", "Num")
                : "-",
              _0x41d892 = this["hotkeys"][_0x54fd7f] ? "\x20bound" : "";
            _0x35689f =
              "<button\x20class=\x22anonimbiri-hk-btn" +
              _0x41d892 +
              "\x22\x20data-hk=\x22" +
              _0x54fd7f +
              "\x22>" +
              _0x17ea24 +
              "</button>";
          }
          _0x35689f +=
            "<div\x20class=\x22anonimbiri-toggle-switch\x20" +
            (this["settings"][_0x54fd7f] ? "active" : "") +
            "\x22></div>";
          break;
        case "color":
          const _0xcf4a55 = this["normalizeColor"](
            this["settings"][_0x54fd7f],
            this["defaultSettings"][_0x54fd7f],
          );
          _0x35689f =
            "<button\x20type=\x22button\x22\x20class=\x22anonimbiri-color-preview\x22\x20data-color-setting=\x22" +
            _0x54fd7f +
            "\x22\x20aria-label=\x22Choose\x20" +
            this["escapeHTML"](_0x2e256e) +
            "\x22\x20aria-haspopup=\x22dialog\x22\x20aria-expanded=\x22false\x22\x20style=\x22background-color:" +
            _0xcf4a55 +
            "\x22></button>";
          break;
        case "text":
          _0x35689f =
            "<input\x20type=\x22text\x22\x20class=\x22cracky-text-input\x22\x20data-setting=\x22" +
            _0x54fd7f +
            "\x22\x20aria-label=\x22" +
            _0x2e256e +
            "\x22\x20maxlength=\x2248\x22\x20value=\x22" +
            this["escapeHTML"](
              this["settings"][_0x54fd7f] ??
                this["defaultSettings"][_0x54fd7f] ??
                "",
            ) +
            "\x22>";
          break;
        case "select":
          _0x35689f =
            "<select\x20class=\x22cracky-select\x20cracky-setting-select\x22\x20data-setting=\x22" +
            _0x54fd7f +
            "\x22\x20aria-label=\x22" +
            _0x2e256e +
            "\x22>" +
            _0x20047e["map"](
              ([_0x459f94, _0x3fc97c]) =>
                "<option\x20value=\x22" +
                _0x459f94 +
                "\x22\x20" +
                (this["settings"][_0x54fd7f] === _0x459f94 ? "selected" : "") +
                ">" +
                this["escapeHTML"](_0x3fc97c) +
                "</option>",
            )["join"]("") +
            "</select>";
          break;
        case "slider":
          const _0x28556d =
              this["settings"] &&
              typeof this["settings"][_0x54fd7f] !== "undefined"
                ? this["settings"][_0x54fd7f]
                : 0x0,
            _0x390105 = this["formatSliderValue"](_0x54fd7f, _0x28556d);
          _0x35689f =
            "<div\x20class=\x22anonimbiri-slider-container\x22\x20data-setting=\x22" +
            _0x54fd7f +
            "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20class=\x22anonimbiri-slider\x22\x20data-setting=\x22" +
            _0x54fd7f +
            "\x22\x20min=\x22" +
            _0x20047e +
            "\x22\x20max=\x22" +
            _0x16124a +
            "\x22\x20step=\x22" +
            _0x442b71 +
            "\x22\x20value=\x22" +
            _0x28556d +
            "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22anonimbiri-slider-value\x22\x20data-setting=\x22" +
            _0x54fd7f +
            "\x22\x20value=\x22" +
            _0x390105 +
            "\x22\x20aria-label=\x22" +
            _0x2e256e +
            "\x22\x20min=\x22" +
            _0x20047e +
            "\x22\x20max=\x22" +
            _0x16124a +
            "\x22\x20step=\x22" +
            _0x442b71 +
            "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>";
          break;
      }
      return (
        "<div\x20class=\x22anonimbiri-menu-item\x20" +
        (this["settings"][_0x54fd7f] ? "active" : "") +
        "\x22\x20data-setting=\x22" +
        _0x54fd7f +
        "\x22" +
        _0xbce891 +
        ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-menu-item-content\x22>" +
        _0x5186d4 +
        "<label>" +
        _0x2e256e +
        "</label></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22anonimbiri-controls\x22>" +
        _0x35689f +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>"
      );
    }
    ["colorToHsv"](_0x1e3d02) {
      const _0x522dec = this["normalizeColor"](_0x1e3d02),
        [_0x31639b, _0x38e754, _0x5e5769] = [0x1, 0x3, 0x5]["map"](
          (_0x40e38d) =>
            parseInt(_0x522dec["slice"](_0x40e38d, _0x40e38d + 0x2), 0x10) /
            0xff,
        ),
        _0x5ed114 = Math["max"](_0x31639b, _0x38e754, _0x5e5769),
        _0x3f22da = Math["min"](_0x31639b, _0x38e754, _0x5e5769),
        _0x2ce0ae = _0x5ed114 - _0x3f22da;
      let _0xe8d4d7 = !_0x2ce0ae
        ? 0x0
        : _0x5ed114 === _0x31639b
          ? ((_0x38e754 - _0x5e5769) / _0x2ce0ae) % 0x6
          : _0x5ed114 === _0x38e754
            ? (_0x5e5769 - _0x31639b) / _0x2ce0ae + 0x2
            : (_0x31639b - _0x38e754) / _0x2ce0ae + 0x4;
      return {
        h: (_0xe8d4d7 * 0x3c + 0x168) % 0x168,
        s: _0x5ed114 ? _0x2ce0ae / _0x5ed114 : 0x0,
        v: _0x5ed114,
      };
    }
    ["hsvToColor"]({ h: _0x4ab551, s: _0x41313e, v: _0xb91774 }) {
      ((_0x4ab551 = ((_0x4ab551 % 0x168) + 0x168) % 0x168),
        (_0x41313e = Math["max"](0x0, Math["min"](0x1, _0x41313e))),
        (_0xb91774 = Math["max"](0x0, Math["min"](0x1, _0xb91774))));
      const _0x3bcdb7 = _0xb91774 * _0x41313e,
        _0x2cccd3 =
          _0x3bcdb7 * (0x1 - Math["abs"](((_0x4ab551 / 0x3c) % 0x2) - 0x1)),
        _0x3383be = _0xb91774 - _0x3bcdb7,
        _0x1698d3 =
          _0x4ab551 < 0x3c
            ? [_0x3bcdb7, _0x2cccd3, 0x0]
            : _0x4ab551 < 0x78
              ? [_0x2cccd3, _0x3bcdb7, 0x0]
              : _0x4ab551 < 0xb4
                ? [0x0, _0x3bcdb7, _0x2cccd3]
                : _0x4ab551 < 0xf0
                  ? [0x0, _0x2cccd3, _0x3bcdb7]
                  : _0x4ab551 < 0x12c
                    ? [_0x2cccd3, 0x0, _0x3bcdb7]
                    : [_0x3bcdb7, 0x0, _0x2cccd3];
      return (
        "#" +
        _0x1698d3["map"]((_0x18a34f) =>
          Math["round"]((_0x18a34f + _0x3383be) * 0xff)
            ["toString"](0x10)
            ["padStart"](0x2, "0"),
        )["join"]("")
      );
    }
    ["setPickerColor"](_0x2a695d, _0x857103) {
      const _0x8f81dd = this["normalizeColor"](_0x857103, null);
      if (!_0x8f81dd) return;
      this["settings"][_0x2a695d] = _0x8f81dd;
      if (_0x2a695d === "arrayListColor") this["updateArrayList"](!![]);
      if (_0x2a695d === "tabGuiColor") this["updateClientHud"](!![]);
      if (_0x2a695d["startsWith"]("customGui")) {
        this["settings"]["themeId"] = "custom";
        const _0x4ba48b = document["getElementById"]("cracky-theme");
        if (_0x4ba48b) _0x4ba48b["value"] = "custom";
        this["applyTheme"]();
      }
      this["saveSettings"]("crackyio_settings", this["settings"]);
      for (const _0x26105a of document["querySelectorAll"](
        "[data-color-setting=\x22" + _0x2a695d + "\x22]",
      ))
        _0x26105a["style"]["backgroundColor"] = _0x8f81dd;
      if (this["espPreviewCtx"]) this["renderESPPreview"]();
      if (_0x2a695d["startsWith"]("crosshair"))
        this["crosshairSettingsChanged"]();
    }
    ["openColorPicker"](_0x585d1a, _0x51be30) {
      this["closeColorPicker"]?.();
      const _0x41d9dd = _0x51be30["ownerDocument"],
        _0x2ebaa9 = _0x41d9dd["defaultView"] || this["pageWindow"],
        _0x513c79 =
          _0x51be30["getAttribute"]("aria-label")?.["replace"](
            /^Choose /,
            "",
          ) || "Color",
        _0x2269c4 = _0x41d9dd["createElement"]("div");
      ((_0x2269c4["id"] = "cracky-color-popover"),
        _0x2269c4["setAttribute"]("role", "dialog"),
        _0x2269c4["setAttribute"](
          "aria-label",
          _0x513c79 + "\x20color\x20picker",
        ));
      const _0xc77802 = [
        ...new Set([
          this["getTheme"]()["primary"],
          this["getTheme"]()["secondary"],
          "#ffffff",
          "#171d2e",
          "#ff667f",
          "#6acbff",
        ]),
      ];
      ((_0x2269c4["innerHTML"] =
        "<div\x20class=\x22cracky-picker-title\x22><span>" +
        this["escapeHTML"](_0x513c79) +
        "</span><button\x20type=\x22button\x22\x20data-picker-close\x20aria-label=\x22Close\x20color\x20picker\x22>×</button></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-picker-sv\x22\x20tabindex=\x220\x22\x20role=\x22slider\x22\x20aria-label=\x22Saturation\x20and\x20brightness\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22><span\x20class=\x22cracky-picker-cursor\x22></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22cracky-picker-hue\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x22359\x22\x20step=\x221\x22\x20aria-label=\x22Hue\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22cracky-picker-hex-row\x22>HEX<input\x20class=\x22cracky-picker-hex\x22\x20type=\x22text\x22\x20maxlength=\x227\x22\x20aria-label=\x22Hex\x20color\x22\x20spellcheck=\x22false\x22></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cracky-picker-swatches\x22>" +
        _0xc77802["map"](
          (_0x24c656) =>
            "<button\x20type=\x22button\x22\x20data-preset=\x22" +
            _0x24c656 +
            "\x22\x20aria-label=\x22Use\x20" +
            _0x24c656 +
            "\x22\x20style=\x22--swatch:" +
            _0x24c656 +
            "\x22></button>",
        )["join"]("") +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20data-picker-reset>Reset\x20color</button>"),
        _0x41d9dd["body"]["append"](_0x2269c4),
        _0x51be30["setAttribute"]("aria-expanded", "true"));
      const _0x1b33b0 = _0x2269c4["querySelector"](".cracky-picker-sv"),
        _0x1ad1e7 = _0x2269c4["querySelector"](".cracky-picker-cursor"),
        _0xd0dc99 = _0x2269c4["querySelector"](".cracky-picker-hue"),
        _0x1353a5 = _0x2269c4["querySelector"](".cracky-picker-hex");
      let _0x5a95ea = this["colorToHsv"](this["settings"][_0x585d1a]),
        _0x2b1e52 = null;
      const _0x135723 = (_0x182d63) => {
          const _0x24fe92 = this["hsvToColor"](_0x5a95ea);
          (_0x1b33b0["style"]["setProperty"](
            "--picker-hue",
            "hsl(" + _0x5a95ea["h"] + ",100%,50%)",
          ),
            (_0x1ad1e7["style"]["left"] = _0x5a95ea["s"] * 0x64 + "%"),
            (_0x1ad1e7["style"]["top"] = (0x1 - _0x5a95ea["v"]) * 0x64 + "%"),
            _0x1b33b0["setAttribute"](
              "aria-valuenow",
              String(Math["round"](_0x5a95ea["s"] * 0x64)),
            ),
            _0x1b33b0["setAttribute"](
              "aria-valuetext",
              Math["round"](_0x5a95ea["s"] * 0x64) +
                "%\x20saturation,\x20" +
                Math["round"](_0x5a95ea["v"] * 0x64) +
                "%\x20brightness",
            ),
            (_0xd0dc99["value"] = String(_0x5a95ea["h"])),
            (_0x1353a5["value"] = _0x24fe92),
            _0x1353a5["removeAttribute"]("aria-invalid"));
          if (_0x182d63) this["setPickerColor"](_0x585d1a, _0x24fe92);
        },
        _0x54273d = () => {
          if (!_0x51be30["isConnected"]) {
            this["closeColorPicker"]?.();
            return;
          }
          const _0x1d559a = Math["min"](0x104, _0x2ebaa9["innerWidth"] - 0x18);
          _0x2269c4["style"]["width"] = _0x1d559a + "px";
          const _0x726eee = _0x51be30["getBoundingClientRect"](),
            _0x493c20 = _0x2269c4["getBoundingClientRect"]()["height"];
          _0x2269c4["style"]["left"] =
            Math["max"](
              0xc,
              Math["min"](
                _0x2ebaa9["innerWidth"] - _0x1d559a - 0xc,
                _0x726eee["right"] - _0x1d559a,
              ),
            ) + "px";
          const _0x2511c3 = _0x726eee["bottom"] + 0x8,
            _0x5d3356 =
              _0x2511c3 + _0x493c20 <= _0x2ebaa9["innerHeight"] - 0xc
                ? _0x2511c3
                : _0x726eee["top"] - _0x493c20 - 0x8;
          _0x2269c4["style"]["top"] =
            Math["max"](
              0xc,
              Math["min"](
                _0x2ebaa9["innerHeight"] - _0x493c20 - 0xc,
                _0x5d3356,
              ),
            ) + "px";
        },
        _0x2f5967 = (_0xc0ffac) => {
          ((_0x5a95ea = this["colorToHsv"](_0xc0ffac)), _0x135723(!![]));
        },
        _0x2740d3 = (_0x480470) => {
          if (_0x480470["pointerId"] !== _0x2b1e52) return;
          const _0x26f502 = _0x1b33b0["getBoundingClientRect"]();
          ((_0x5a95ea["s"] = Math["max"](
            0x0,
            Math["min"](
              0x1,
              (_0x480470["clientX"] - _0x26f502["left"]) / _0x26f502["width"],
            ),
          )),
            (_0x5a95ea["v"] = Math["max"](
              0x0,
              Math["min"](
                0x1,
                0x1 -
                  (_0x480470["clientY"] - _0x26f502["top"]) /
                    _0x26f502["height"],
              ),
            )),
            _0x135723(!![]));
        },
        _0x26d573 = (_0xae353a) => {
          if (!_0xae353a || _0xae353a["pointerId"] === _0x2b1e52)
            _0x2b1e52 = null;
        };
      (_0x1b33b0["addEventListener"]("pointerdown", (_0x4137ed) => {
        if (_0x4137ed["button"] !== 0x0 || _0x4137ed["isPrimary"] === ![])
          return;
        (_0x4137ed["preventDefault"](),
          (_0x2b1e52 = _0x4137ed["pointerId"]),
          _0x1b33b0["focus"](),
          _0x2740d3(_0x4137ed));
        try {
          _0x1b33b0["setPointerCapture"]?.(_0x4137ed["pointerId"]);
        } catch (_0x4a7656) {}
      }),
        _0x1b33b0["addEventListener"]("keydown", (_0x58f7f0) => {
          const _0x542d28 = _0x58f7f0["shiftKey"] ? 0.1 : 0.01;
          if (_0x58f7f0["key"] === "ArrowLeft") _0x5a95ea["s"] -= _0x542d28;
          else {
            if (_0x58f7f0["key"] === "ArrowRight") _0x5a95ea["s"] += _0x542d28;
            else {
              if (_0x58f7f0["key"] === "ArrowUp") _0x5a95ea["v"] += _0x542d28;
              else {
                if (_0x58f7f0["key"] === "ArrowDown")
                  _0x5a95ea["v"] -= _0x542d28;
                else return;
              }
            }
          }
          (_0x58f7f0["preventDefault"](),
            (_0x5a95ea["s"] = Math["max"](
              0x0,
              Math["min"](0x1, _0x5a95ea["s"]),
            )),
            (_0x5a95ea["v"] = Math["max"](
              0x0,
              Math["min"](0x1, _0x5a95ea["v"]),
            )),
            _0x135723(!![]));
        }),
        _0xd0dc99["addEventListener"]("input", () => {
          ((_0x5a95ea["h"] = Number(_0xd0dc99["value"])), _0x135723(!![]));
        }));
      const _0x46a2be = () => {
        const _0x55434a = this["normalizeColor"](_0x1353a5["value"], null);
        if (!_0x55434a) {
          _0x1353a5["setAttribute"]("aria-invalid", "true");
          return;
        }
        _0x2f5967(_0x55434a);
      };
      (_0x1353a5["addEventListener"]("change", _0x46a2be),
        _0x1353a5["addEventListener"]("keydown", (_0x37c6ce) => {
          _0x37c6ce["key"] === "Enter" &&
            (_0x37c6ce["preventDefault"](), _0x46a2be());
        }));
      for (const _0x5f1e0f of _0x2269c4["querySelectorAll"]("[data-preset]"))
        _0x5f1e0f["addEventListener"]("click", () =>
          _0x2f5967(_0x5f1e0f["dataset"]["preset"]),
        );
      (_0x2269c4["querySelector"]("[data-picker-reset]")["addEventListener"](
        "click",
        () => _0x2f5967(this["defaultSettings"][_0x585d1a] || "#ffb7d5"),
      ),
        _0x2269c4["querySelector"]("[data-picker-close]")["addEventListener"](
          "click",
          () => {
            (this["closeColorPicker"]?.(), _0x51be30["focus"]());
          },
        ),
        _0x2269c4["addEventListener"]("keydown", (_0x12b143) =>
          _0x12b143["stopPropagation"](),
        ));
      const _0x399c2d = (_0x1fb7e8) => {
          if (
            !_0x2269c4["contains"](_0x1fb7e8["target"]) &&
            !_0x51be30["contains"](_0x1fb7e8["target"])
          )
            this["closeColorPicker"]?.();
        },
        _0x13a979 = (_0x36ae5a) => {
          _0x36ae5a["key"] === "Escape" &&
            (_0x36ae5a["preventDefault"](),
            _0x36ae5a["stopPropagation"](),
            this["closeColorPicker"]?.(),
            _0x51be30["focus"]());
        };
      (_0x41d9dd["addEventListener"]("pointermove", _0x2740d3, !![]),
        _0x41d9dd["addEventListener"]("pointerup", _0x26d573, !![]),
        _0x41d9dd["addEventListener"]("pointercancel", _0x26d573, !![]),
        _0x41d9dd["addEventListener"]("pointerdown", _0x399c2d, !![]),
        _0x41d9dd["addEventListener"]("keydown", _0x13a979, !![]),
        _0x2ebaa9["addEventListener"]("resize", _0x54273d),
        _0x41d9dd["addEventListener"]("scroll", _0x54273d, !![]),
        _0x2ebaa9["addEventListener"]("blur", _0x26d573),
        (this["closeColorPicker"] = () => {
          ((_0x2b1e52 = null),
            _0x2269c4["remove"](),
            _0x51be30["setAttribute"]("aria-expanded", "false"),
            _0x41d9dd["removeEventListener"]("pointermove", _0x2740d3, !![]),
            _0x41d9dd["removeEventListener"]("pointerup", _0x26d573, !![]),
            _0x41d9dd["removeEventListener"]("pointercancel", _0x26d573, !![]),
            _0x41d9dd["removeEventListener"]("pointerdown", _0x399c2d, !![]),
            _0x41d9dd["removeEventListener"]("keydown", _0x13a979, !![]),
            _0x2ebaa9["removeEventListener"]("resize", _0x54273d),
            _0x41d9dd["removeEventListener"]("scroll", _0x54273d, !![]),
            _0x2ebaa9["removeEventListener"]("blur", _0x26d573),
            (this["closeColorPicker"] = null));
        }),
        _0x135723(![]),
        _0x54273d(),
        _0x1b33b0["focus"]());
    }
    ["bindMenuEvents"]() {
      const _0x4f67dd = document["querySelector"](".anonimbiri-menu-container");
      if (!_0x4f67dd) return;
      (this["applyTheme"](),
        this["bindConfigManager"](_0x4f67dd),
        this["bindThemeSearch"](_0x4f67dd),
        this["refreshConditionalControls"](_0x4f67dd),
        this["renderCrosshairPreview"](_0x4f67dd),
        _0x4f67dd["querySelector"]("#cracky-crosshair-preview-mode")?.[
          "addEventListener"
        ]("change", () => this["renderCrosshairPreview"](_0x4f67dd)),
        _0x4f67dd["querySelector"]("#cracky-reset-panels")?.[
          "addEventListener"
        ]("click", () => {
          this["panelPositions"] ||= {};
          for (const _0x20cc6a of Object["keys"](this["panelPositions"]))
            if (_0x20cc6a["startsWith"](this["settings"]["guiLayout"] + ":"))
              delete this["panelPositions"][_0x20cc6a];
          (this["saveSettings"](
            "crackyio_panel_positions_v1",
            this["panelPositions"],
          ),
            this["showGUI"]());
        }));
      for (const [_0x2d724f, _0x107dfa] of [
        ["cracky-theme", "themeId"],
        ["cracky-layout", "guiLayout"],
        ["cracky-box-style", "espBoxStyle"],
      ]) {
        _0x4f67dd["querySelector"]("#" + _0x2d724f)?.["addEventListener"](
          "change",
          (_0x47af7e) => {
            ((this["settings"][_0x107dfa] = _0x47af7e["target"]["value"]),
              this["saveSettings"]("crackyio_settings", this["settings"]),
              this["applyTheme"]());
            if (_0x107dfa === "guiLayout") this["showGUI"]();
            else {
              if (this["espPreviewCtx"]) this["renderESPPreview"]();
            }
          },
        );
      }
      clearTimeout(this["menuDiagnosticsTimer"]);
      const _0x505ce9 = () => {
        if (!_0x4f67dd["isConnected"]) {
          if (this["panelDraggingMenu"] === _0x4f67dd)
            this["panelDragCleanup"]?.();
          this["closeColorPicker"]?.();
          return;
        }
        const _0x531ab0 = _0x4f67dd["querySelector"]("#cracky-hook-status");
        if (_0x531ab0) _0x531ab0["textContent"] = this["getHookStatusText"]();
        const _0x25b9cd = _0x4f67dd["querySelector"]("#cracky-module-status");
        if (_0x25b9cd) _0x25b9cd["textContent"] = this["getModuleStatusText"]();
        this["menuDiagnosticsTimer"] = setTimeout(_0x505ce9, 0x3e8);
      };
      (_0x505ce9(),
        this["bindPanelDragging"](_0x4f67dd),
        this["bindLiquidbounceMenu"](_0x4f67dd),
        _0x4f67dd["querySelector"](".anonimbiri-tab-container")?.[
          "addEventListener"
        ]("click", (_0xe044bd) => {
          if (_0xe044bd["target"]["classList"]["contains"]("anonimbiri-tab")) {
            if (this["pageWindow"]["SOUND"])
              this["pageWindow"]["SOUND"]["play"]("select_0", 0.1);
            const _0x2fd082 = _0xe044bd["target"]["dataset"]["tab"];
            ((this["activeMenuTab"] = _0x2fd082),
              _0x4f67dd["querySelectorAll"](".anonimbiri-tab")["forEach"](
                (_0xea7c17) => _0xea7c17["classList"]["remove"]("active"),
              ),
              _0x4f67dd["querySelectorAll"](".anonimbiri-tab-pane")["forEach"](
                (_0x1daab3) => _0x1daab3["classList"]["remove"]("active"),
              ),
              _0xe044bd["target"]["classList"]["add"]("active"),
              _0x4f67dd["querySelector"]("#anonimbiri-tab-" + _0x2fd082)[
                "classList"
              ]["add"]("active"));
          }
        }),
        _0x4f67dd["querySelector"](".anonimbiri-tab-content")[
          "addEventListener"
        ]("click", (_0x4a2684) => {
          const _0x2f94ac =
            _0x4a2684["target"]["closest"](".anonimbiri-hk-btn");
          if (_0x2f94ac) {
            _0x4a2684["stopPropagation"]();
            if (_0x2f94ac["dataset"]["hk"])
              this["showHotkeyModal"](_0x2f94ac["dataset"]["hk"]);
            return;
          }
          const _0x462613 = _0x4a2684["target"]["closest"](
            ".anonimbiri-menu-item",
          );
          if (!_0x462613) return;
          const _0x234761 = _0x462613["dataset"]["setting"];
          if (
            !_0x234761 ||
            this["isUnavailableFeature"](_0x234761) ||
            _0x462613["querySelector"](
              ".anonimbiri-slider-container,.cracky-text-input,.cracky-setting-select",
            )
          )
            return;
          if (this["pageWindow"]["SOUND"])
            this["pageWindow"]["SOUND"]["play"]("select_0", 0.1);
          if (_0x462613["querySelector"](".anonimbiri-toggle-switch"))
            this["toggleMenuSetting"](_0x234761, _0x4f67dd);
          else
            _0x462613["querySelector"]("[data-color-setting]") &&
              this["openColorPicker"](
                _0x234761,
                _0x462613["querySelector"]("[data-color-setting]"),
              );
        }));
      for (const _0x3308ec of _0x4f67dd["querySelectorAll"](
        ".cracky-text-input",
      ))
        _0x3308ec["addEventListener"]("input", () => {
          ((this["settings"][_0x3308ec["dataset"]["setting"]] = _0x3308ec[
            "value"
          ]["slice"](0x0, 0x30)),
            this["saveSettings"]("crackyio_settings", this["settings"]),
            _0x3308ec["dataset"]["setting"] === "nameProtectAlias" &&
              ((this["nameProtectLastScan"] = null),
              this["updateNameProtect"]()));
        });
      for (const _0x58810a of _0x4f67dd["querySelectorAll"](
        ".cracky-setting-select",
      ))
        _0x58810a["addEventListener"]("change", () => {
          ((this["settings"][_0x58810a["dataset"]["setting"]] =
            typeof this["defaultSettings"][_0x58810a["dataset"]["setting"]] ===
            "number"
              ? Number(_0x58810a["value"])
              : _0x58810a["value"]),
            this["saveSettings"]("crackyio_settings", this["settings"]),
            this["updateClientHud"](!![]),
            this["refreshConditionalControls"](_0x4f67dd));
          if (_0x58810a["dataset"]["setting"]["startsWith"]("crosshair"))
            this["crosshairSettingsChanged"](_0x4f67dd);
        });
      (_0x4f67dd["querySelector"]("#cracky-cosmetic-search")?.[
        "addEventListener"
      ]("input", (_0x6ced50) => {
        const _0x19ff86 = _0x6ced50["target"]["value"]
          ["trim"]()
          ["toLowerCase"]();
        for (const [_0x53cb8a] of _0x1b6bde) {
          const _0x91598a = _0x4f67dd["querySelector"](
            "select[data-setting=\x22" + _0x53cb8a + "\x22]",
          );
          if (!_0x91598a) continue;
          _0x91598a["replaceChildren"]();
          for (const [_0x547662, _0x309bc8] of this["cosmeticChoices"](
            _0x53cb8a,
            _0x19ff86,
          )) {
            const _0x5bb727 = document["createElement"]("option");
            ((_0x5bb727["value"] = _0x547662),
              (_0x5bb727["textContent"] = _0x309bc8),
              _0x91598a["append"](_0x5bb727));
          }
          _0x91598a["value"] = this["settings"][_0x53cb8a];
        }
      }),
        _0x4f67dd["querySelectorAll"](".anonimbiri-slider")["forEach"](
          (_0x2808ee) => {
            const _0x4928e9 = _0x2808ee["dataset"]["setting"],
              _0x1bf3e8 = _0x4f67dd["querySelector"](
                ".anonimbiri-slider-value[data-setting=\x22" +
                  _0x4928e9 +
                  "\x22]",
              );
            (_0x2808ee["addEventListener"]("input", () => {
              const _0x2b433b = _0x2808ee["value"];
              this["settings"][_0x4928e9] = Number(_0x2b433b);
              if (_0x1bf3e8)
                _0x1bf3e8["value"] = this["formatSliderValue"](
                  _0x4928e9,
                  _0x2b433b,
                );
              if (_0x4928e9["startsWith"]("arrayList"))
                this["updateArrayList"](!![]);
              if (_0x4928e9["startsWith"]("healthBar") && this["espPreviewCtx"])
                this["renderESPPreview"]();
              if (_0x4928e9 === "noZoomStrength")
                this["runHook"]("no-zoom", () => this["updateNoZoom"]());
              if (_0x4928e9["startsWith"]("crosshair"))
                this["crosshairSettingsChanged"](_0x4f67dd);
            }),
              _0x2808ee["addEventListener"]("change", () =>
                this["saveSettings"]("crackyio_settings", this["settings"]),
              ));
          },
        ),
        _0x4f67dd["querySelectorAll"](".anonimbiri-slider-value")["forEach"](
          (_0x8f6de5) => {
            const _0x5b09c1 = _0x8f6de5["dataset"]["setting"],
              _0x4b33f8 = _0x4f67dd["querySelector"](
                ".anonimbiri-slider[data-setting=\x22" + _0x5b09c1 + "\x22]",
              );
            (_0x8f6de5["addEventListener"]("focus", () => {
              ((_0x8f6de5["value"] = this["settings"][_0x5b09c1]),
                (_0x8f6de5["type"] = "number"));
            }),
              _0x8f6de5["addEventListener"]("blur", () => {
                ((_0x8f6de5["type"] = "text"),
                  (_0x8f6de5["value"] = this["formatSliderValue"](
                    _0x5b09c1,
                    this["settings"][_0x5b09c1],
                  )));
              }),
              _0x8f6de5["addEventListener"]("input", () => {
                let _0x78d21f = Number(_0x8f6de5["value"]);
                if (!Number["isFinite"](_0x78d21f) || _0x8f6de5["value"] === "")
                  return;
                const _0x16f255 = Number(_0x4b33f8["min"]),
                  _0x5eb1b6 = Number(_0x4b33f8["max"]);
                if (_0x78d21f > _0x5eb1b6) _0x78d21f = _0x5eb1b6;
                if (_0x78d21f < _0x16f255) _0x78d21f = _0x16f255;
                ((_0x8f6de5["value"] = _0x78d21f),
                  (this["settings"][_0x5b09c1] = _0x78d21f));
                if (_0x4b33f8) _0x4b33f8["value"] = _0x78d21f;
                if (_0x5b09c1["startsWith"]("arrayList"))
                  this["updateArrayList"](!![]);
                if (
                  _0x5b09c1["startsWith"]("healthBar") &&
                  this["espPreviewCtx"]
                )
                  this["renderESPPreview"]();
                if (_0x5b09c1 === "noZoomStrength")
                  this["runHook"]("no-zoom", () => this["updateNoZoom"]());
                if (_0x5b09c1["startsWith"]("crosshair"))
                  this["crosshairSettingsChanged"](_0x4f67dd);
              }),
              _0x8f6de5["addEventListener"]("change", () =>
                this["saveSettings"]("crackyio_settings", this["settings"]),
              ));
          },
        ),
        _0x4f67dd["querySelectorAll"](
          ".anonimbiri-menu-item,\x20.anonimbiri-tab",
        )["forEach"]((_0x2329bd) => {
          _0x2329bd["addEventListener"]("mouseenter", () => {
            if (this["pageWindow"]["SOUND"])
              this["pageWindow"]["SOUND"]["play"]("hover_0", 0.1);
          });
        }));
    }
    ["formatSliderValue"](_0x29b124, _0x1a8120) {
      return _0x29b124["startsWith"]("crosshair") ||
        ["fovSize", "fogNear", "fogFar", "noZoomStrength"]["includes"](
          _0x29b124,
        )
        ? String(_0x1a8120)
        : Number(_0x1a8120) <= 0x0
          ? "Off"
          : String(_0x1a8120);
    }
    ["crosshairSettingsChanged"](
      _0x5b5edd = document["querySelector"](".anonimbiri-menu-container"),
    ) {
      ((this["crosshairMotion"] = null),
        (this["crosshairRetryAt"] = 0x0),
        this["renderCrosshairPreview"](_0x5b5edd),
        this["runHook"]("custom-crosshair", () =>
          this["updateCustomCrosshair"](),
        ));
    }
    ["bindPanelDragging"](_0x15b291) {
      (this["panelDragCleanup"]?.(), (this["panelDraggingMenu"] = _0x15b291));
      if (
        !["dropdown", "liquidbounce"]["includes"](this["settings"]["guiLayout"])
      ) {
        this["panelDragCleanup"] = null;
        return;
      }
      const _0x3e8ed8 = _0x15b291["ownerDocument"],
        _0x1b1e68 = _0x3e8ed8["defaultView"] || this["pageWindow"],
        _0x10130d = [],
        _0x148d94 = [],
        _0x3afce3 = [],
        _0x1ade95 = this["settings"]["guiLayout"],
        _0x14bfcd = () =>
          (_0x3e8ed8["documentElement"]["clientWidth"] ||
            _0x1b1e68["innerWidth"]) <= 0x2f8,
        _0x2e4811 = (_0x37c348) =>
          _0x1ade95 + ":" + (_0x14bfcd() ? "compact:" : "") + _0x37c348["id"],
        _0x2354a6 = () => {
          const _0xa4e94 =
            _0x3e8ed8["documentElement"]["clientWidth"] ||
            _0x1b1e68["innerWidth"];
          _0x15b291["style"]["setProperty"](
            "--cracky-liquid-scale",
            _0xa4e94 > 0x2f8
              ? String(Math["min"](0x1, _0x15b291["clientWidth"] / 0x640))
              : "1",
          );
        };
      _0x2354a6();
      let _0x35b819 = null,
        _0x5ee83e = null,
        _0x43a00c = null,
        _0x9b8cb = 0x5;
      const _0xaa29f0 = (_0x310e93) => {
          if (
            !_0x35b819 ||
            (_0x310e93?.["pointerId"] !== undefined &&
              _0x310e93["pointerId"] !== _0x35b819["id"])
          )
            return;
          const _0x36e3a2 = _0x35b819;
          ((_0x35b819 = null),
            _0x3e8ed8["removeEventListener"]("pointermove", _0x525762, !![]),
            _0x3e8ed8["removeEventListener"]("pointerup", _0xaa29f0, !![]),
            _0x3e8ed8["removeEventListener"]("pointercancel", _0xaa29f0, !![]),
            _0x1b1e68["removeEventListener"]("blur", _0xaa29f0),
            _0x36e3a2["header"]["classList"]["remove"](
              "cracky-panel-dragging",
            ));
          _0x36e3a2["moved"] &&
            _0x310e93?.["type"] === "pointerup" &&
            ((this["panelPositions"] ||= {}),
            (this["panelPositions"][_0x2e4811(_0x36e3a2["state"]["panel"])] = {
              ..._0x36e3a2["state"]["offset"],
              z: Number(_0x36e3a2["state"]["panel"]["style"]["zIndex"]),
            }),
            this["saveSettings"](
              "crackyio_panel_positions_v1",
              this["panelPositions"],
            ));
          _0x36e3a2["moved"] &&
            _0x310e93?.["type"] === "pointerup" &&
            _0x310e93["target"]?.["nodeType"] &&
            _0x36e3a2["header"]["contains"](_0x310e93["target"]) &&
            ((_0x5ee83e = _0x36e3a2["header"]),
            clearTimeout(_0x43a00c),
            (_0x43a00c = setTimeout(() => {
              _0x5ee83e = null;
            }, 0x190)));
          try {
            _0x36e3a2["header"]["releasePointerCapture"]?.(_0x36e3a2["id"]);
          } catch (_0x1998a9) {}
        },
        _0x525762 = (_0x40cd77) => {
          if (!_0x35b819 || _0x40cd77["pointerId"] !== _0x35b819["id"]) return;
          if (
            !_0x15b291["isConnected"] ||
            !["dropdown", "liquidbounce"]["includes"](
              this["settings"]["guiLayout"],
            )
          ) {
            _0xaa29f0();
            return;
          }
          const _0x92c8cb = _0x40cd77["clientX"] - _0x35b819["x"],
            _0x31174b = _0x40cd77["clientY"] - _0x35b819["y"];
          if (!_0x35b819["moved"] && Math["hypot"](_0x92c8cb, _0x31174b) < 0x4)
            return;
          ((_0x35b819["moved"] = !![]),
            (_0x35b819["state"]["offset"] = {
              x: _0x35b819["origin"]["x"] + _0x92c8cb / _0x35b819["scaleX"],
              y: _0x35b819["origin"]["y"] + _0x31174b / _0x35b819["scaleY"],
            }));
          const _0x2694f7 = _0x35b819["state"]["panel"],
            _0x35521d = _0x35b819["state"]["offset"];
          (_0x2694f7["style"]["setProperty"](
            "transform",
            "translate(" + _0x35521d["x"] + "px," + _0x35521d["y"] + "px)",
            "important",
          ),
            _0x40cd77["preventDefault"](),
            _0x40cd77["stopImmediatePropagation"]?.(),
            _0x40cd77["stopPropagation"]());
        };
      for (const _0x427ba7 of _0x15b291["querySelectorAll"](
        ".anonimbiri-tab-pane\x20>\x20summary",
      )) {
        const _0x92a5c6 = {
          panel: _0x427ba7["parentElement"],
          offset: { x: 0x0, y: 0x0 },
        };
        _0x10130d["push"](_0x92a5c6);
        const _0x118d6b = (_0x2dea67) => {
            if (
              !_0x2dea67["target"]?.["nodeType"] ||
              !_0x427ba7["contains"](_0x2dea67["target"])
            )
              return;
            if (
              !["dropdown", "liquidbounce"]["includes"](
                this["settings"]["guiLayout"],
              ) ||
              _0x2dea67["button"] !== 0x0 ||
              _0x2dea67["isPrimary"] === ![] ||
              _0x35b819
            )
              return;
            (_0x2dea67["preventDefault"](),
              _0x2dea67["stopImmediatePropagation"]?.(),
              _0x2dea67["stopPropagation"](),
              (_0x35b819 = {
                state: _0x92a5c6,
                header: _0x427ba7,
                id: _0x2dea67["pointerId"],
                x: _0x2dea67["clientX"],
                y: _0x2dea67["clientY"],
                rect: _0x92a5c6["panel"]["getBoundingClientRect"](),
                headerRect: _0x427ba7["getBoundingClientRect"](),
                origin: { ..._0x92a5c6["offset"] },
                moved: ![],
              }));
            const _0x552c38 = parseFloat(
                _0x1b1e68["getComputedStyle"](_0x92a5c6["panel"])["width"],
              ),
              _0x38345a = parseFloat(
                _0x1b1e68["getComputedStyle"](_0x427ba7)["height"],
              );
            ((_0x35b819["scaleX"] =
              _0x552c38 > 0x0 && _0x35b819["rect"]["width"] > 0x0
                ? _0x35b819["rect"]["width"] / _0x552c38
                : 0x1),
              (_0x35b819["scaleY"] =
                _0x38345a > 0x0 && _0x35b819["headerRect"]["height"] > 0x0
                  ? _0x35b819["headerRect"]["height"] / _0x38345a
                  : 0x1),
              _0x427ba7["classList"]["add"]("cracky-panel-dragging"),
              _0x92a5c6["panel"]["style"]["setProperty"](
                "transition",
                "none",
                "important",
              ),
              _0x92a5c6["panel"]["style"]["setProperty"](
                "animation",
                "none",
                "important",
              ),
              (_0x92a5c6["panel"]["style"]["position"] = "relative"),
              (_0x92a5c6["panel"]["style"]["zIndex"] = String(++_0x9b8cb)),
              _0x3e8ed8["addEventListener"]("pointermove", _0x525762, !![]),
              _0x3e8ed8["addEventListener"]("pointerup", _0xaa29f0, !![]),
              _0x3e8ed8["addEventListener"]("pointercancel", _0xaa29f0, !![]),
              _0x1b1e68["addEventListener"]("blur", _0xaa29f0));
            try {
              _0x427ba7["setPointerCapture"]?.(_0x2dea67["pointerId"]);
            } catch (_0x8d8a7e) {}
          },
          _0x47df3e = (_0x23f611) => {
            ((_0x5ee83e === _0x427ba7 && _0x23f611["detail"] > 0x0) ||
              _0x23f611["target"]["closest"](".cracky-drag-handle")) &&
              (_0x23f611["preventDefault"](),
              _0x23f611["stopPropagation"](),
              (_0x5ee83e = null));
          };
        (_0x3e8ed8["addEventListener"]("pointerdown", _0x118d6b, !![]),
          _0x3afce3["push"](_0x118d6b),
          _0x427ba7["addEventListener"]("click", _0x47df3e),
          _0x148d94["push"](() => {
            (_0x3e8ed8["removeEventListener"]("pointerdown", _0x118d6b, !![]),
              _0x427ba7["removeEventListener"]("click", _0x47df3e));
          }));
      }
      const _0x533c17 = () => {
          _0x2354a6();
          const _0x4a33e2 =
              _0x3e8ed8["documentElement"]["clientWidth"] ||
              _0x1b1e68["innerWidth"],
            _0x1aa767 =
              _0x3e8ed8["documentElement"]["clientHeight"] ||
              _0x1b1e68["innerHeight"];
          for (const _0x41608 of _0x10130d) {
            for (const _0x37446e of ["transform", "max-height", "z-index"])
              _0x41608["panel"]["style"]["removeProperty"](_0x37446e);
            const _0x5ad495 = _0x41608["panel"]["querySelector"](
              ".cracky-liquid-body",
            );
            _0x5ad495?.["style"]["removeProperty"]("max-height");
            const _0x21b278 =
                this["panelPositions"]?.[_0x2e4811(_0x41608["panel"])],
              _0x1a5a2f = _0x41608["panel"]["querySelector"](
                ":scope\x20>\x20summary",
              ),
              _0x55b4db = _0x41608["panel"]["getBoundingClientRect"](),
              _0x2ac1e2 = _0x1a5a2f["getBoundingClientRect"]();
            if (_0x41608["panel"]["hidden"]) {
              _0x41608["offset"] = { x: 0x0, y: 0x0 };
              continue;
            }
            const _0x45c32c =
                _0x55b4db["width"] /
                  (parseFloat(
                    _0x1b1e68["getComputedStyle"](_0x41608["panel"])["width"],
                  ) || _0x55b4db["width"]) || 0x1,
              _0x2810ac =
                _0x2ac1e2["height"] /
                  (parseFloat(
                    _0x1b1e68["getComputedStyle"](_0x1a5a2f)["height"],
                  ) || _0x2ac1e2["height"]) || 0x1,
              _0x16f777 = Number["isFinite"](_0x21b278?.["x"])
                ? _0x21b278["x"] * _0x45c32c
                : 0x0,
              _0x5cdc32 = Number["isFinite"](_0x21b278?.["y"])
                ? _0x21b278["y"] * _0x2810ac
                : 0x0,
              _0x3357d2 = _0x16f777,
              _0x5b2a1b = _0x5cdc32;
            _0x41608["offset"] = {
              x: _0x3357d2 / _0x45c32c,
              y: _0x5b2a1b / _0x2810ac,
            };
            if (_0x3357d2 || _0x5b2a1b)
              _0x41608["panel"]["style"]["setProperty"](
                "transform",
                "translate(" +
                  _0x41608["offset"]["x"] +
                  "px," +
                  _0x41608["offset"]["y"] +
                  "px)",
                "important",
              );
            if (Number["isFinite"](_0x21b278?.["z"])) {
              const _0x363caa = Math["max"](
                0x1,
                Math["min"](0x2710, _0x21b278["z"]),
              );
              ((_0x41608["panel"]["style"]["zIndex"] = String(_0x363caa)),
                (_0x9b8cb = Math["max"](_0x9b8cb, _0x363caa)));
            }
            !_0x14bfcd() &&
              (_0x41608["panel"]["style"]["setProperty"](
                "max-height",
                Math["max"](
                  _0x2ac1e2["height"],
                  _0x1aa767 - 0x8 - (_0x55b4db["top"] + _0x5b2a1b),
                ) /
                  _0x2810ac +
                  "px",
                "important",
              ),
              _0x5ad495?.["style"]["setProperty"](
                "max-height",
                Math["max"](
                  0x0,
                  Math["min"](
                    0x221,
                    (_0x1aa767 - 0x8 - _0x2ac1e2["bottom"] - _0x5b2a1b) /
                      _0x2810ac,
                  ),
                ) + "px",
              ));
          }
        },
        _0xf9d0cd = () => {
          if (!_0x15b291["isConnected"]) {
            _0x310aba();
            return;
          }
          (_0xaa29f0(), (_0x5ee83e = null), _0x533c17());
        },
        _0x310aba = () => {
          (_0xaa29f0(),
            clearTimeout(_0x43a00c),
            _0x148d94["forEach"]((_0x578090) => _0x578090()),
            _0x1b1e68["removeEventListener"]("resize", _0xf9d0cd));
          if (this["panelDraggingMenu"] === _0x15b291)
            this["panelDraggingMenu"] = null;
          if (this["panelPointerRouter"] === _0x1d0a0e)
            this["panelPointerRouter"] = null;
        },
        _0x1d0a0e = (_0x329897) => {
          if (_0x329897["type"] === "pointerdown")
            for (const _0x1a7c70 of _0x3afce3) {
              _0x1a7c70(_0x329897);
              if (_0x35b819) break;
            }
          else {
            if (_0x329897["type"] === "pointermove") _0x525762(_0x329897);
            else
              _0x35b819 &&
                (_0x329897["stopImmediatePropagation"]?.(),
                _0x329897["stopPropagation"](),
                _0xaa29f0(_0x329897));
          }
        };
      ((this["panelPointerRouter"] = _0x1d0a0e),
        _0x1b1e68["addEventListener"]("resize", _0xf9d0cd),
        _0x533c17(),
        (this["panelDragCleanup"] = _0x310aba));
    }
    ["addEventListeners"]() {
      (window["addEventListener"]("pointerdown", (_0xed8b9a) => {
        if (_0xed8b9a["button"] === 0x2) this["rightMouseDown"] = !![];
      }),
        window["addEventListener"]("pointerup", (_0x52c1ec) => {
          if (_0x52c1ec["button"] === 0x2) this["rightMouseDown"] = ![];
        }),
        window["addEventListener"](
          "keydown",
          (_0x55a60e) => {
            this["pressedKeys"]["add"](_0x55a60e["code"]);
            if (
              document["activeElement"]?.["closest"]?.(
                "input,textarea,select,[contenteditable]:not([contenteditable=false])",
              )
            )
              return;
            if (this["isBindingHotkey"]) {
              (_0x55a60e["preventDefault"](), _0x55a60e["stopPropagation"]());
              if (_0x55a60e["code"] === "Escape") {
                this["hideHotkeyModal"]();
                return;
              }
              if (
                _0x55a60e["code"] === "Delete" ||
                _0x55a60e["code"] === "Backspace"
              ) {
                (delete this["hotkeys"][this["currentBindingSetting"]],
                  this["saveSettings"]("crackyio_hotkeys", this["hotkeys"]));
                const _0x10b709 = document["querySelector"](
                  ".anonimbiri-menu-container",
                );
                if (_0x10b709) {
                  const _0x2c7ee7 = _0x10b709["querySelector"](
                    ".anonimbiri-hk-btn[data-hk=\x22" +
                      this["currentBindingSetting"] +
                      "\x22]",
                  );
                  _0x2c7ee7 &&
                    ((_0x2c7ee7["textContent"] = "-"),
                    _0x2c7ee7["classList"]["remove"]("bound"));
                }
                this["hideHotkeyModal"]();
                return;
              }
              ((this["hotkeys"][this["currentBindingSetting"]] =
                _0x55a60e["code"]),
                this["saveSettings"]("crackyio_hotkeys", this["hotkeys"]));
              const _0x527f20 = document["querySelector"](
                ".anonimbiri-menu-container",
              );
              if (_0x527f20) {
                const _0x44e6aa = _0x527f20["querySelector"](
                  ".anonimbiri-hk-btn[data-hk=\x22" +
                    this["currentBindingSetting"] +
                    "\x22]",
                );
                _0x44e6aa &&
                  ((_0x44e6aa["textContent"] = _0x55a60e["code"]
                    ["replace"]("Key", "")
                    ["replace"]("Digit", "")
                    ["replace"]("Numpad", "Num")),
                  _0x44e6aa["classList"]["add"]("bound"));
              }
              this["hideHotkeyModal"]();
              return;
            }
            if (
              this["handleMenuKey"](_0x55a60e) ||
              this["handleTabGuiKey"](_0x55a60e)
            )
              return;
            const _0x47a357 = Object["keys"](this["hotkeys"])["filter"](
              (_0x5dc020) => this["hotkeys"][_0x5dc020] === _0x55a60e["code"],
            );
            if (_0x47a357["length"]) {
              (_0x55a60e["preventDefault"](),
                _0x55a60e["stopImmediatePropagation"]?.(),
                _0x55a60e["stopPropagation"]());
              if (_0x55a60e["repeat"]) return;
              this["toggleBoundModules"](_0x55a60e["code"]);
            }
          },
          !![],
        ),
        window["addEventListener"]("keyup", (_0x4ca16e) => {
          this["pressedKeys"]["delete"](_0x4ca16e["code"]);
        }));
    }
    ["toggleBoundModules"](_0x52dd76) {
      const _0x29b3fc = Object["keys"](this["hotkeys"] || {})["filter"](
        (_0xea2ac2) =>
          _0xea2ac2 !== "toggleMenu" &&
          this["hotkeys"][_0xea2ac2] === _0x52dd76,
      );
      if (!_0x29b3fc["length"]) return;
      const _0x156834 = document["querySelector"](".anonimbiri-menu-container");
      for (const _0x51db80 of _0x29b3fc) {
        if (this["isUnavailableFeature"](_0x51db80))
          this["notify"]({
            title: "Unavailable",
            message:
              "This\x20legacy\x20hook\x20is\x20not\x20compatible\x20with\x20the\x20current\x20client.\x20Your\x20saved\x20preference\x20was\x20not\x20changed.",
          });
        else
          typeof this["settings"][_0x51db80] === "boolean" &&
            (this["toggleMenuSetting"](_0x51db80, _0x156834),
            this["notify"]({
              title: "Toggled",
              message:
                _0x51db80["replace"](/([A-Z])/g, "\x20$1")["replace"](
                  /^./,
                  (_0x2baa15) => _0x2baa15["toUpperCase"](),
                ) +
                ":\x20" +
                (this["settings"][_0x51db80] ? "ON" : "OFF"),
            }));
      }
    }
    ["showHotkeyModal"](_0x2be6ac) {
      if (!this["hotkeyModal"]) return;
      ((this["isBindingHotkey"] = !![]),
        (this["currentBindingSetting"] = _0x2be6ac));
      const _0x37defd = document["getElementById"](
        "anonimbiri-hotkeyFeatureName",
      );
      if (_0x37defd)
        _0x37defd["textContent"] = _0x2be6ac["replace"](/([A-Z])/g, "\x20$1")[
          "replace"
        ](/^./, (_0x33708a) => _0x33708a["toUpperCase"]());
      this["hotkeyModal"]["classList"]["add"]("active");
    }
    ["hideHotkeyModal"]() {
      if (!this["hotkeyModal"]) return;
      ((this["isBindingHotkey"] = ![]),
        (this["currentBindingSetting"] = null),
        this["hotkeyModal"]["classList"]["remove"]("active"));
    }
    ["isDefined"](_0x17228a) {
      return _0x17228a !== undefined && _0x17228a !== null;
    }
    ["isTeam"](_0x4d50e1) {
      return this["me"] && this["me"]["team"]
        ? this["me"]["team"] === _0x4d50e1["team"]
        : ![];
    }
    ["getDistanceSq"](_0x5bce88, _0x170548) {
      return (
        (_0x170548["x"] - _0x5bce88["x"]) ** 0x2 +
        (_0x170548["y"] - _0x5bce88["y"]) ** 0x2 +
        (_0x170548["z"] - _0x5bce88["z"]) ** 0x2
      );
    }
    ["getDirection"](_0x538f1, _0x4c429a, _0x51363d, _0x1e136d) {
      return Math["atan2"](_0x4c429a - _0x1e136d, _0x538f1 - _0x51363d);
    }
    ["getXDirection"](
      _0x4722c0,
      _0x15ab03,
      _0x3453cc,
      _0x27d73c,
      _0x437cdb,
      _0x456e12,
    ) {
      const _0x385657 = _0x437cdb - _0x15ab03,
        _0x7c691c = Math["sqrt"](
          (_0x27d73c - _0x4722c0) ** 0x2 +
            (_0x437cdb - _0x15ab03) ** 0x2 +
            (_0x456e12 - _0x3453cc) ** 0x2,
        );
      return Math["asin"](_0x385657 / _0x7c691c);
    }
    ["containsPoint"](_0x119a70) {
      let _0x583a40 = this["renderer"]["frustum"]["planes"];
      for (let _0x5d74c8 = 0x0; _0x5d74c8 < 0x6; _0x5d74c8++) {
        if (_0x583a40[_0x5d74c8]["distanceToPoint"](_0x119a70) < 0x0)
          return ![];
      }
      return !![];
    }
    ["lineInRect"](
      _0x113cc5,
      _0xc5de6f,
      _0x446757,
      _0x1a1fd8,
      _0x2990be,
      _0x1e96c4,
      _0x417b43,
      _0x426129,
      _0x3d8fdc,
      _0x23ca20,
      _0x2b528f,
      _0x334d44,
    ) {
      let _0x2d1e91 = -Infinity,
        _0x4b55c9 = Infinity;
      for (const [_0x5ea3cf, _0x9a57da, _0x3c609b, _0x262426] of [
        [_0x113cc5, _0x1a1fd8, _0x417b43, _0x23ca20],
        [_0xc5de6f, _0x2990be, _0x426129, _0x2b528f],
        [_0x446757, _0x1e96c4, _0x3d8fdc, _0x334d44],
      ]) {
        if (
          ![_0x5ea3cf, _0x3c609b, _0x262426]["every"](Number["isFinite"]) ||
          Number["isNaN"](_0x9a57da) ||
          _0x3c609b > _0x262426
        )
          return ![];
        if (!Number["isFinite"](_0x9a57da)) {
          if (_0x5ea3cf < _0x3c609b || _0x5ea3cf > _0x262426) return ![];
          continue;
        }
        const _0x952a52 = (_0x3c609b - _0x5ea3cf) * _0x9a57da,
          _0x348be9 = (_0x262426 - _0x5ea3cf) * _0x9a57da;
        ((_0x2d1e91 = Math["max"](
          _0x2d1e91,
          Math["min"](_0x952a52, _0x348be9),
        )),
          (_0x4b55c9 = Math["min"](
            _0x4b55c9,
            Math["max"](_0x952a52, _0x348be9),
          )));
        if (_0x2d1e91 > _0x4b55c9) return ![];
      }
      return _0x4b55c9 < 0x0 ? ![] : Math["max"](0x0, _0x2d1e91);
    }
    ["getCanSee"](_0x5e6ca1, _0x40f9dc = 0x0, _0xc6042b = null) {
      const _0x2c1282 = this["me"],
        _0x4b704e = this["fromPage"](this["game"]?.["map"]?.["manager"]),
        _0x54e313 = this["fromPage"](this["game"]?.["entities"]);
      if (!_0x2c1282 || !_0x4b704e) return ![];
      _0xc6042b ||= this["getAimAngles"](_0x5e6ca1)["point"];
      const _0x3eedf8 =
        _0x2c1282["y"] +
        (Number["isFinite"](_0x2c1282["height"])
          ? _0x2c1282["height"]
          : this["PLAYER_HEIGHT"] || 0xb) -
        (this["CAMERA_HEIGHT"] || 1.5);
      if (
        ![
          _0x2c1282["x"],
          _0x3eedf8,
          _0x2c1282["z"],
          _0xc6042b?.["x"],
          _0xc6042b?.["y"],
          _0xc6042b?.["z"],
        ]["every"](Number["isFinite"])
      )
        return ![];
      const _0x2176d0 = _0xc6042b["x"] - _0x2c1282["x"],
        _0x544304 = _0xc6042b["y"] - _0x3eedf8,
        _0x50eec5 = _0xc6042b["z"] - _0x2c1282["z"],
        _0x4a3b17 = 0x1 / _0x2176d0,
        _0x5b66b1 = 0x1 / _0x544304,
        _0x48b4c9 = 0x1 / _0x50eec5;
      if (Math["hypot"](_0x2176d0, _0x544304, _0x50eec5) < 1e-8) return !![];
      _0x40f9dc = Number["isFinite"](_0x40f9dc)
        ? Math["max"](0x0, _0x40f9dc)
        : 0x0;
      let _0x448e89 = 0x0;
      try {
        const _0x5918b1 = this["predictionObject"](_0x4b704e, "rayCandidates");
        if (
          _0x5918b1 != null &&
          (typeof _0x5918b1 !== "function" || _0x5918b1["length"] !== 0x6)
        )
          return ![];
        if (
          _0x5918b1 == null &&
          (!Array["isArray"](_0x4b704e["objects"]) ||
            (_0x4b704e["rayMeshes"] != null &&
              !Array["isArray"](_0x4b704e["rayMeshes"])))
        )
          return ![];
        const _0x3cfa1d =
          typeof _0x5918b1 === "function" && _0x5918b1["length"] === 0x6
            ? this["fromPage"](
                _0x5918b1["call"](
                  _0x4b704e,
                  _0x2c1282["x"],
                  _0x3eedf8,
                  _0x2c1282["z"],
                  _0x2176d0,
                  _0x544304,
                  _0x50eec5,
                ),
              )
            : [
                ...(_0x4b704e["objects"] || []),
                ...(_0x4b704e["rayMeshes"] || []),
              ];
        if (!Array["isArray"](_0x3cfa1d) || _0x3cfa1d["length"] > 0xc350)
          return ![];
        const _0x333b21 = new Set();
        for (const _0x2f595d of _0x3cfa1d) {
          const _0x8f3df5 = this["fromPage"](_0x2f595d);
          if (
            !_0x8f3df5 ||
            _0x333b21["has"](_0x8f3df5) ||
            !_0x8f3df5["active"] ||
            _0x8f3df5["noShoot"]
          )
            continue;
          _0x333b21["add"](_0x8f3df5);
          if (
            typeof _0x54e313?.["shotPassesThrough"] === "function" &&
            _0x54e313["shotPassesThrough"](_0x2c1282, _0x8f3df5)
          )
            continue;
          let _0x435e14;
          if (_0x8f3df5["entityEid"] != null) {
            if (
              typeof _0x54e313?.["rayVsPart"] !== "function" ||
              _0x54e313["rayVsPart"]["length"] !== 0x8
            )
              return ![];
            ((this["wallRayBoxTest"] ||= this["toPageFunction"](
              (..._0x527e42) => this["lineInRect"](..._0x527e42),
            )),
              (_0x435e14 = _0x54e313["rayVsPart"](
                _0x8f3df5,
                _0x2c1282["x"],
                _0x2c1282["z"],
                _0x3eedf8,
                _0x4a3b17,
                _0x48b4c9,
                _0x5b66b1,
                this["wallRayBoxTest"],
              )));
            if (_0x435e14 === 0x0) continue;
          } else {
            if (_0x8f3df5["rayDst"] != null) {
              if (
                typeof _0x8f3df5["rayDst"] !== "function" ||
                _0x8f3df5["rayDst"]["length"] !== 0x6
              )
                return ![];
              _0x435e14 = _0x8f3df5["rayDst"](
                _0x2c1282["x"],
                _0x2c1282["z"],
                _0x3eedf8,
                _0x4a3b17,
                _0x48b4c9,
                _0x5b66b1,
              );
              if (_0x435e14 === 0x0) continue;
            } else {
              if (
                ![
                  _0x8f3df5["x"],
                  _0x8f3df5["y"],
                  _0x8f3df5["z"],
                  _0x8f3df5["width"],
                  _0x8f3df5["height"],
                  _0x8f3df5["length"],
                ]["every"](Number["isFinite"])
              )
                return ![];
              _0x435e14 = this["lineInRect"](
                _0x2c1282["x"],
                _0x2c1282["z"],
                _0x3eedf8,
                _0x4a3b17,
                _0x48b4c9,
                _0x5b66b1,
                _0x8f3df5["x"] -
                  Math["max"](0x0, _0x8f3df5["width"] - _0x40f9dc),
                _0x8f3df5["z"] -
                  Math["max"](0x0, _0x8f3df5["length"] - _0x40f9dc),
                _0x8f3df5["y"] -
                  Math["max"](0x0, _0x8f3df5["height"] - _0x40f9dc),
                _0x8f3df5["x"] +
                  Math["max"](0x0, _0x8f3df5["width"] - _0x40f9dc),
                _0x8f3df5["z"] +
                  Math["max"](0x0, _0x8f3df5["length"] - _0x40f9dc),
                _0x8f3df5["y"] +
                  Math["max"](0x0, _0x8f3df5["height"] - _0x40f9dc),
              );
            }
          }
          if (_0x435e14 === ![] || _0x435e14 == null) continue;
          if (!Number["isFinite"](_0x435e14)) return ![];
          if (_0x435e14 < 0x0 || _0x435e14 >= 0x1) continue;
          if (
            !this["settings"]["aimbotWallBangs"] ||
            !_0x8f3df5["penetrable"] ||
            !_0x2c1282["weapon"]?.["pierce"] ||
            ++_0x448e89 > 0x1
          )
            return ![];
        }
        return !![];
      } catch (_0x4b7df2) {
        return ![];
      }
    }
    async ["waitFor"](_0x144cf3, _0x48b658 = 0x7530) {
      const _0x48c8ac = Date["now"]() + _0x48b658;
      do {
        const _0x461ad3 = _0x144cf3();
        if (_0x461ad3) return _0x461ad3;
        await new Promise((_0x44ec52) => setTimeout(_0x44ec52, 0x64));
      } while (Date["now"]() < _0x48c8ac);
      return ![];
    }
    ["lookDir"](_0x1eebe2, _0x5d7ca6) {
      if (
        !Number["isFinite"](_0x1eebe2 + _0x5d7ca6) ||
        !this["controls"]["object"]?.["rotation"]
      )
        return;
      ((this["controls"]["object"]["rotation"]["y"] = _0x5d7ca6),
        (this["controls"][this["vars"]["pchObjc"]]["rotation"]["x"] = Math[
          "max"
        ](-Math["PI"] / 0x2, Math["min"](Math["PI"] / 0x2, _0x1eebe2))),
        (this["controls"]["yDr"] =
          this["controls"][this["vars"]["pchObjc"]]["rotation"]["x"] %
          (Math["PI"] * 0x2)),
        (this["controls"]["xDr"] =
          this["controls"]["object"]["rotation"]["y"] % (Math["PI"] * 0x2)),
        this["renderer"]["camera"]["updateProjectionMatrix"]?.(),
        this["renderer"]["updateFrustum"]?.());
    }
    ["resetLookAt"]() {
      if (
        !Number["isFinite"](this["controls"]["xDr"] + this["controls"]["yDr"])
      )
        return;
      ((this["controls"]["object"]["rotation"]["y"] = this["controls"]["xDr"]),
        (this["controls"][this["vars"]["pchObjc"]]["rotation"]["x"] = Math[
          "max"
        ](
          -Math["PI"] / 0x2,
          Math["min"](Math["PI"] / 0x2, this["controls"]["yDr"]),
        )),
        this["renderer"]["camera"]["updateProjectionMatrix"](),
        this["renderer"]["updateFrustum"]());
    }
    ["world2Screen"](_0x1c136d) {
      if (!this["renderer"]?.["camera"] || !this["overlay"]?.["canvas"])
        return null;
      (this["tempVector"]["set"](
        _0x1c136d["x"],
        _0x1c136d["y"],
        _0x1c136d["z"],
      ),
        this["tempVector"]["project"](this["renderer"]["camera"]));
      if (this["tempVector"]["z"] > 0x1) return null;
      return {
        x:
          ((this["tempVector"]["x"] + 0x1) / 0x2) *
          this["overlay"]["canvas"]["width"],
        y:
          ((-this["tempVector"]["y"] + 0x1) / 0x2) *
          this["overlay"]["canvas"]["height"],
      };
    }
    ["drawCanvasESP"](_0x587ed2, _0x411685) {
      if (this["settings"]["espTeamCheck"] && this["isTeam"](_0x587ed2)) return;
      const _0x37453d = {
          x: _0x587ed2["x"],
          y: _0x587ed2["y"],
          z: _0x587ed2["z"],
        },
        _0x49c554 = _0x411685
          ? _0x587ed2["dat"]?.["mSize"] || _0x587ed2["height"] || 0x8
          : (_0x587ed2["height"] || this["PLAYER_HEIGHT"]) -
            (_0x587ed2["crouchVal"] ?? _0x587ed2["cV"] ?? 0x0) *
              this["CROUCH_FACTOR"],
        _0x5dd799 = _0x411685
          ? (_0x49c554 * 0.4) / 0x2
          : this["PLAYER_WIDTH"] / 0x2,
        _0x4b1829 = [
          {
            x: _0x37453d["x"] - _0x5dd799,
            y: _0x37453d["y"],
            z: _0x37453d["z"] - _0x5dd799,
          },
          {
            x: _0x37453d["x"] + _0x5dd799,
            y: _0x37453d["y"],
            z: _0x37453d["z"] - _0x5dd799,
          },
          {
            x: _0x37453d["x"] - _0x5dd799,
            y: _0x37453d["y"],
            z: _0x37453d["z"] + _0x5dd799,
          },
          {
            x: _0x37453d["x"] + _0x5dd799,
            y: _0x37453d["y"],
            z: _0x37453d["z"] + _0x5dd799,
          },
          {
            x: _0x37453d["x"] - _0x5dd799,
            y: _0x37453d["y"] + _0x49c554,
            z: _0x37453d["z"] - _0x5dd799,
          },
          {
            x: _0x37453d["x"] + _0x5dd799,
            y: _0x37453d["y"] + _0x49c554,
            z: _0x37453d["z"] - _0x5dd799,
          },
          {
            x: _0x37453d["x"] - _0x5dd799,
            y: _0x37453d["y"] + _0x49c554,
            z: _0x37453d["z"] + _0x5dd799,
          },
          {
            x: _0x37453d["x"] + _0x5dd799,
            y: _0x37453d["y"] + _0x49c554,
            z: _0x37453d["z"] + _0x5dd799,
          },
        ];
      let _0x2ed89a = Infinity,
        _0x4a2f40 = Infinity,
        _0x176695 = -Infinity,
        _0x4300d9 = -Infinity,
        _0x1a7b1e = ![];
      for (let _0x3f707e = 0x0; _0x3f707e < _0x4b1829["length"]; _0x3f707e++) {
        const _0x50fe79 = this["world2Screen"](_0x4b1829[_0x3f707e]);
        _0x50fe79 &&
          ((_0x1a7b1e = !![]),
          (_0x2ed89a = Math["min"](_0x2ed89a, _0x50fe79["x"])),
          (_0x176695 = Math["max"](_0x176695, _0x50fe79["x"])),
          (_0x4a2f40 = Math["min"](_0x4a2f40, _0x50fe79["y"])),
          (_0x4300d9 = Math["max"](_0x4300d9, _0x50fe79["y"])));
      }
      if (
        !_0x1a7b1e ||
        !isFinite(_0x2ed89a + _0x176695 + _0x4a2f40 + _0x4300d9)
      )
        return;
      const _0xe2b6d4 = _0x176695 - _0x2ed89a,
        _0x3294f8 = _0x4300d9 - _0x4a2f40,
        _0x59b8e9 = this["espPalette"](_0x411685);
      this["ctx"]["save"]();
      try {
        if (this["settings"]["espLines"]) {
          const _0xa93d30 = this["overlay"]["canvas"]["width"] / 0x2,
            _0x26507a = this["overlay"]["canvas"]["height"],
            _0x524f8d = _0x2ed89a + _0xe2b6d4 / 0x2,
            _0x4233b1 = _0x4300d9,
            _0x4d0f30 = _0x59b8e9["primary"],
            _0x150ef1 = (_0x179b75, _0x482497) => {
              let _0x3e7dd4 = 0x0,
                _0x555ff6 = 0x0,
                _0x33de7b = 0x0;
              return (
                _0x179b75["length"] == 0x7 &&
                  ((_0x3e7dd4 = parseInt(_0x179b75["slice"](0x1, 0x3), 0x10)),
                  (_0x555ff6 = parseInt(_0x179b75["slice"](0x3, 0x5), 0x10)),
                  (_0x33de7b = parseInt(_0x179b75["slice"](0x5, 0x7), 0x10))),
                "rgba(" +
                  _0x3e7dd4 +
                  "," +
                  _0x555ff6 +
                  "," +
                  _0x33de7b +
                  "," +
                  _0x482497 +
                  ")"
              );
            },
            _0x2eee62 = this["ctx"]["createLinearGradient"](
              _0xa93d30,
              _0x26507a,
              _0x524f8d,
              _0x4233b1,
            );
          (_0x2eee62["addColorStop"](0x0, _0x150ef1(_0x4d0f30, 0.1)),
            _0x2eee62["addColorStop"](
              0x1,
              _0x150ef1(_0x59b8e9["secondary"], 0.9),
            ),
            (this["ctx"]["lineWidth"] = 2.5),
            (this["ctx"]["strokeStyle"] = _0x2eee62),
            (this["ctx"]["shadowColor"] = _0x4d0f30),
            (this["ctx"]["shadowBlur"] = 0xf),
            this["ctx"]["beginPath"](),
            this["ctx"]["moveTo"](_0xa93d30, _0x26507a),
            this["ctx"]["lineTo"](_0x524f8d, _0x4233b1),
            this["ctx"]["stroke"]());
        }
        this["settings"]["espSquare"] &&
          this["drawESPBox"](
            this["ctx"],
            _0x2ed89a,
            _0x4a2f40,
            _0xe2b6d4,
            _0x3294f8,
            _0x59b8e9,
          );
        this["drawESPHealthBar"](
          this["ctx"],
          _0x2ed89a,
          _0x4a2f40,
          _0x3294f8,
          _0x587ed2["health"],
          _0x587ed2["maxHealth"],
          _0x59b8e9,
        );
        if (this["settings"]["espNameTags"]) {
          ((this["ctx"]["font"] = "bold\x2011px\x20Rajdhani,\x20sans-serif"),
            (this["ctx"]["textAlign"] = "left"));
          const _0x28a3b4 = 0x4,
            _0x2d2919 = 0x10,
            _0x2eba33 = 0x4;
          let _0x18f2d7 = 0x0;
          const _0x4fe807 = _0x587ed2["weapon"] && _0x587ed2["weapon"]["name"];
          let _0x285980 = null;
          if (
            _0x4fe807 &&
            this["settings"]["espWeaponIcons"] &&
            _0x587ed2["weapon"]["icon"]
          ) {
            if (!this["weaponIconCache"]) this["weaponIconCache"] = {};
            const _0x4eb83a =
              (_0x587ed2["weapon"]["melee"] ? "melee_" : "weapons_") +
              _0x587ed2["weapon"]["icon"];
            (!this["weaponIconCache"][_0x4eb83a] &&
              ((this["weaponIconCache"][_0x4eb83a] = new Image()),
              (this["weaponIconCache"][_0x4eb83a]["src"] =
                "https://assets.krunker.io/textures/" +
                (_0x587ed2["weapon"]["melee"] ? "melee" : "weapons") +
                "/" +
                _0x587ed2["weapon"]["icon"] +
                ".png")),
              (_0x285980 = this["weaponIconCache"][_0x4eb83a]),
              _0x285980["complete"] &&
                _0x285980["naturalWidth"] > 0x0 &&
                (_0x18f2d7 =
                  _0x285980["width"] * (_0x2d2919 / _0x285980["height"])));
          }
          const _0x2edcfa = _0x411685
              ? "[AI]\x20" + (_0x587ed2["name"] || "Bot")
              : _0x587ed2["level"]
                ? "[LVL\x20" +
                  _0x587ed2["level"] +
                  "]\x20" +
                  (_0x587ed2["name"] || "Player")
                : "" + (_0x587ed2["name"] || "Player"),
            _0x3637fc = _0x4fe807
              ? "\x20•\x20" + _0x587ed2["weapon"]["name"]
              : "",
            _0x318ee8 = _0x2edcfa + _0x3637fc,
            _0x345c20 = this["ctx"]["measureText"](_0x318ee8)["width"],
            _0x3f1394 =
              _0x345c20 +
              (_0x18f2d7 > 0x0 ? _0x18f2d7 + _0x28a3b4 : 0x0) +
              _0x28a3b4 * 0x2,
            _0x2f0475 = 0x14,
            _0x37d984 = _0x2ed89a + _0xe2b6d4 / 0x2 - _0x3f1394 / 0x2,
            _0x4d1b5c = _0x4a2f40 - _0x2f0475 - 0x5;
          this["settings"]["espInfoBackground"] &&
            ((this["ctx"]["fillStyle"] = _0x59b8e9["surface"] + "cc"),
            (this["ctx"]["strokeStyle"] = _0x59b8e9["secondary"]),
            (this["ctx"]["lineWidth"] = 0x1),
            (this["ctx"]["shadowColor"] = _0x59b8e9["primary"]),
            (this["ctx"]["shadowBlur"] = 0x6),
            this["ctx"]["beginPath"](),
            this["ctx"]["moveTo"](_0x37d984 + _0x2eba33, _0x4d1b5c),
            this["ctx"]["lineTo"](_0x37d984 + _0x3f1394 - _0x2eba33, _0x4d1b5c),
            this["ctx"]["arcTo"](
              _0x37d984 + _0x3f1394,
              _0x4d1b5c,
              _0x37d984 + _0x3f1394,
              _0x4d1b5c + _0x2eba33,
              _0x2eba33,
            ),
            this["ctx"]["lineTo"](
              _0x37d984 + _0x3f1394,
              _0x4d1b5c + _0x2f0475 - _0x2eba33,
            ),
            this["ctx"]["arcTo"](
              _0x37d984 + _0x3f1394,
              _0x4d1b5c + _0x2f0475,
              _0x37d984 + _0x3f1394 - _0x2eba33,
              _0x4d1b5c + _0x2f0475,
              _0x2eba33,
            ),
            this["ctx"]["lineTo"](_0x37d984 + _0x2eba33, _0x4d1b5c + _0x2f0475),
            this["ctx"]["arcTo"](
              _0x37d984,
              _0x4d1b5c + _0x2f0475,
              _0x37d984,
              _0x4d1b5c + _0x2f0475 - _0x2eba33,
              _0x2eba33,
            ),
            this["ctx"]["lineTo"](_0x37d984, _0x4d1b5c + _0x2eba33),
            this["ctx"]["arcTo"](
              _0x37d984,
              _0x4d1b5c,
              _0x37d984 + _0x2eba33,
              _0x4d1b5c,
              _0x2eba33,
            ),
            this["ctx"]["closePath"](),
            this["ctx"]["fill"](),
            this["ctx"]["stroke"]());
          this["ctx"]["fillStyle"] = "#FFFFFF";
          this["settings"]["espInfoBackground"]
            ? ((this["ctx"]["shadowColor"] = "#a9dcff80"),
              (this["ctx"]["shadowBlur"] = 0x4))
            : ((this["ctx"]["shadowColor"] = "#000000"),
              (this["ctx"]["shadowBlur"] = 0x5));
          this["ctx"]["fillText"](
            _0x318ee8,
            _0x37d984 + _0x28a3b4,
            _0x4d1b5c + _0x2f0475 / 0x2 + 0x4,
          );
          _0x285980 &&
            _0x285980["complete"] &&
            _0x18f2d7 > 0x0 &&
            this["ctx"]["drawImage"](
              _0x285980,
              _0x37d984 + _0x28a3b4 + _0x345c20 + _0x28a3b4,
              _0x4d1b5c + (_0x2f0475 - _0x2d2919) / 0x2,
              _0x18f2d7,
              _0x2d2919,
            );
          this["ctx"]["shadowBlur"] = 0x0;
          const _0x2317ab = Math["round"](
            Math["sqrt"](
              (this["me"]["x"] - _0x587ed2["x"]) ** 0x2 +
                (this["me"]["y"] - _0x587ed2["y"]) ** 0x2 +
                (this["me"]["z"] - _0x587ed2["z"]) ** 0x2,
            ) / 0xa,
          );
          ((this["ctx"]["textAlign"] = "center"),
            (this["ctx"]["fillStyle"] = "#FFFFFF"),
            (this["ctx"]["shadowColor"] = "#000000"),
            (this["ctx"]["shadowBlur"] = 0x4),
            this["ctx"]["fillText"](
              "[" + _0x2317ab + "m]",
              _0x2ed89a + _0xe2b6d4 / 0x2,
              _0x4300d9 + 0xe,
            ));
        }
      } finally {
        this["ctx"]["restore"]();
      }
    }
  }
  const _0x2097a9 = () => {
    return (
      (window[_0x343c53] = new _0x3f2060()),
      (_0x41c950 = window[_0x343c53]),
      window[_0x343c53]
    );
  };
  if (typeof CrackyAccess !== "undefined")
    CrackyAccess["boot"](_0x2097a9, _0x5c88cc);
  else _0x2097a9();
})(
  "shiro_" + Math["random"]()["toString"](0x24)["substring"](0x2, 0xa),
  CanvasRenderingContext2D["prototype"],
);
console.log("✅ [CRACKY] Script terminou de carregar!");
setTimeout(() => {
    console.log("🔍 [CRACKY] Verificando se o menu subiu...");
    if (document.getElementById('cracky-access')) {
        console.log("❌ [CRACKY] O modal de auth AINDA está aqui!");
    } else {
        console.log("🎯 [CRACKY] Modal de auth não encontrado. Menu deve estar ativo.");
    }
}, 3000);
