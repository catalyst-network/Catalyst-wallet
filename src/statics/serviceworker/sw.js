/* eslint-disable */
function getScope() {
  return self.registration.scope;
}

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  try {
    const url = new URL(event.request.url);
    if (url.pathname.includes("redirect") && url.href.includes(getScope())) {
      event.respondWith(
        new Response(
          new Blob(
            [
              `
<html>
  <head>
    <style>
      * {
        box-sizing: border-box;
      }
      html,
      body {
        background: #fcfcfc;
        height: 100%;
        padding: 0;
        margin: 0;
      }
      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      h1.title {
        font-size: 14px;
        color: #0f1222;
        font-family: "Roboto", sans-serif !important;
        margin: 0;
        text-align: center;
      }
      .spinner .beat {
        background-color: #0364ff;
        height: 12px;
        width: 12px;
        margin: 24px 2px 10px;
        border-radius: 100%;
        -webkit-animation: beatStretchDelay 0.7s infinite linear;
        animation: beatStretchDelay 0.7s infinite linear;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
      }
      .spinner .beat-odd {
        animation-delay: 0s;
      }
      .spinner .beat-even {
        animation-delay: 0.35s;
      }
      @-webkit-keyframes beatStretchDelay {
        50% {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          -webkit-opacity: 0.2;
          opacity: 0.2;
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          -webkit-opacity: 1;
          opacity: 1;
        }
      }
      @keyframes beatStretchDelay {
        50% {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          -webkit-opacity: 0.2;
          opacity: 0.2;
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          -webkit-opacity: 1;
          opacity: 1;
        }
      }
      @media (min-width: 768px) {
        h1.title {
          font-size: 14px;
        }
        p.info {
          font-size: 28px;
        }
        .spinner .beat {
          height: 12px;
          width: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div id="message" class="container">
      <div class="spinner content">
        <div class="beat beat-odd"></div>
        <div class="beat beat-even"></div>
        <div class="beat beat-odd"></div>
      </div>
      <h1 class="title content">Loading</h1>
    </div>
    <script
      src="https://scripts.toruswallet.io/broadcastChannel_3_0_3.js"
      integrity="sha384-0K6Rk9RWgqHNox5iV2NGWKP7OVZOzcuH0kNkH8BoSQv1LmRfhu6DWp5oyQ90hKv9"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.auth0.com/js/auth0-spa-js/1.8/auth0-spa-js.production.js"></script>
    <script>
      function storageAvailable(type) {
        var storage;
        try {
          storage = window[type];
          var x = "__storage_test__";
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return (
            e &&
            // everything except Firefox
            (e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === "QuotaExceededError" ||
              // Firefox
              e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
          );
        }
      }
      var isLocalStorageAvailable = storageAvailable("localStorage");
      var isSessionStorageAvailable = storageAvailable("sessionStorage");
      // set theme
      let theme = "dark";
      if (isLocalStorageAvailable) {
        var torusTheme = localStorage.getItem("torus-theme");
        if (torusTheme) {
          theme = torusTheme.split("-")[0];
        }
      }
      if (theme === "dark") {
        document.querySelector("h1.title").style.color = "#d3d3d4";
        document.querySelector("body").style.backgroundColor = "#24252A";
      }
      var bc;
      var broadcastChannelOptions = {
        // type: 'localstorage', // (optional) enforce a type, oneOf['native', 'idb', 'localstorage', 'node'
        webWorkerSupport: false, // (optional) set this to false if you know that your channel will never be used in a WebWorker (increase performance)
      };
      var instanceParams = {};
      var preopenInstanceId = new URL(window.location.href).searchParams.get("preopenInstanceId");
      var auth0Params = new URL(window.location.href).searchParams.get("auth0Params");
      var auth0Login = new URL(window.location.href).searchParams.get("auth0Login");
      var auth0ParamsObj;
      var auth0LoginObj;
      if (isLocalStorageAvailable) {
        if (!auth0Params) {
          auth0Params = window.localStorage.getItem("auth0Params");
        }
        if (auth0Params) {
          auth0ParamsObj = JSON.parse(window.atob(auth0Params));
          window.localStorage.setItem("auth0Params", auth0Params);
        }
      }
      if (isSessionStorageAvailable) {
        if (!auth0Login) {
          auth0Login = window.sessionStorage.getItem("auth0Login");
        }
        if (auth0Login) {
          auth0LoginObj = JSON.parse(window.atob(auth0Login));
          window.sessionStorage.setItem("auth0Login", auth0Login);
        }
      }
      // trying to get a new auth0 login
      if (auth0ParamsObj && auth0LoginObj) {
        new Promise(function (resolve, reject) {
          // wait for page load
          // can't we use document.onload event?
          var readyInterval = setInterval(function () {
            if (document.readyState === "complete") {
              clearInterval(readyInterval);
              resolve();
            }
          }, 100);
          setTimeout(function () {
            reject("timed out waiting for document to load");
          }, 5000);
        })
          .then(function () {
            // create auth0 client
            return new window.Auth0Client(auth0ParamsObj);
          })
          .then(function (auth0Client) {
            // check if already authenticated
            window.auth0 = auth0Client;
            return auth0Client.isAuthenticated();
          })
          .then(function (isAuthenticated) {
            if (isAuthenticated) {
              // if already authenticated but trying to get a login, then logout and refresh page
              alert("logging out"); //TODO: Do we need the alert.?
              window.auth0.logout({
                returnTo: auth0ParamsObj.redirect_uri,
              });
            } else {
              // not authenticated yet and trying to get a login
              if (!auth0LoginObj.appState) {
                auth0LoginObj.appState = {};
              }
              if (isSessionStorageAvailable) window.sessionStorage.removeItem("auth0Login");
              return window.auth0.loginWithRedirect(auth0LoginObj);
            }
          });
      } else if (!preopenInstanceId) {
        document.getElementById("message").style.visibility = "visible";
        // in general oauth redirect
        try {
          var url = new URL(location.href);
          var hash = url.hash.substr(1);
          var hashParams = hash.split("&").reduce(function (result, item) {
            var parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
          }, {});
          var queryParams = {};
          for (var key of url.searchParams.keys()) {
            queryParams[key] = url.searchParams.get(key);
          }
          var auth0ShouldParseResult = false;
          var error = "";
          try {
            if (Object.keys(hashParams).length > 0 && hashParams.state) {
              instanceParams = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(hashParams.state)))) || {};
              if (hashParams.error) error = hashParams.error;
            } else if (Object.keys(queryParams).length > 0 && queryParams.state) {
              instanceParams = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(queryParams.state)))) || {};
              if (queryParams.error) error = queryParams.error;
            }
          } catch (e) {
            // might be an auth0 redirect, which has a non-JSON state
            var query = window.location.search;
            auth0ShouldParseResult = query.includes("code=") && query.includes("state=");
          }
          if (auth0ShouldParseResult) {
            // auth0 redirect
            new Promise(function (resolve, reject) {
              // wait for page load
              var readyInterval = setInterval(function () {
                if (document.readyState === "complete") {
                  clearInterval(readyInterval);
                  resolve();
                }
              }, 100);
              setTimeout(function () {
                reject("timed out waiting for document to load");
              }, 5000);
            })
              .then(function () {
                // create auth0 client
                return new window.Auth0Client(auth0ParamsObj);
              })
              .then(function (auth0Client) {
                window.auth0 = auth0Client;
                return window.auth0.handleRedirectCallback();
              })
              .then(function (result) {
                instanceParams = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(result.appState))));
                return window.auth0.getIdTokenClaims();
              })
              .then(function (claim) {
                if (!claim || !claim.__raw) {
                  throw new Error("invalid idtoken claim");
                }
                hashParams.id_token = claim.__raw;
                if (instanceParams.redirectToOpener) {
                  window.opener.postMessage(
                    {
                      channel: "redirect_channel_" + instanceParams.instanceId,
                      data: {
                        instanceParams: instanceParams,
                        hashParams: hashParams,
                        queryParams: queryParams,
                      },
                      error: error,
                    },
                    "*"
                  );
                  return Promise.resolve();
                } else {
                  bc = new broadcastChannelLib.BroadcastChannel("redirect_channel_" + instanceParams.instanceId, broadcastChannelOptions);
                  return bc.postMessage({
                    data: {
                      instanceParams,
                      queryParams: {},
                      hashParams: hashParams,
                    },
                    error: "",
                  });
                }
              })
              .then(function () {
                bc && bc.close();
                console.log("posted", {
                  queryParams,
                  instanceParams,
                  hashParams,
                });
                setTimeout(function () {
                  window.close();
                }, 1000);
              })
              .catch(function (e) {
                console.error("could not handle auth0 redirect", e);
              });
          } else if (instanceParams.redirectToOpener) {
            // communicate to window.opener
            window.opener.postMessage(
              {
                channel: "redirect_channel_" + instanceParams.instanceId,
                data: {
                  instanceParams: instanceParams,
                  hashParams: hashParams,
                  queryParams: queryParams,
                },
                error: error,
              },
              "*"
            );
          } else {
            // communicate via broadcast channel
            bc = new broadcastChannelLib.BroadcastChannel("redirect_channel_" + instanceParams.instanceId, broadcastChannelOptions);
            bc.postMessage({
              data: {
                instanceParams: instanceParams,
                hashParams: hashParams,
                queryParams: queryParams,
              },
              error: error,
            }).then(function () {
              bc.close();
              console.log("posted", {
                queryParams,
                instanceParams,
                hashParams,
              });
              setTimeout(function () {
                window.close();
              }, 30000);
            });
          }
        } catch (err) {
          console.error(err, "service worker error in redirect");
          bc && bc.close();
          // TODO PUT BACK
          // window.close()
        }
      } else {
        // in preopen, awaiting redirect
        try {
          bc = new broadcastChannelLib.BroadcastChannel("preopen_channel_" + preopenInstanceId, broadcastChannelOptions);
          bc.onmessage = function (ev) {
            var { preopenInstanceId: oldId, payload, message } = ev.data;
            if (oldId === preopenInstanceId && payload && payload.url) {
              window.location.href = payload.url;
            } else if (oldId === preopenInstanceId && message === "setup_complete") {
              bc.postMessage({
                data: {
                  preopenInstanceId: preopenInstanceId,
                  message: "popup_loaded",
                },
              });
            }
            if (ev.error && ev.error !== "") {
              console.error(ev.error);
              bc.close();
            }
          };
        } catch (err) {
          console.error(err, "service worker error in preopen");
          bc && bc.close();
          window.close();
        }
      }
    </script>
  </body>
</html>
                        
${""}
  `,
            ],
            { type: "text/html" }
          )
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
});