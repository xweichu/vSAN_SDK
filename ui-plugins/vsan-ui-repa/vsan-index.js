/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * This file contains functions that are executed before having Angular context in the main index.html file.
 * For example loading theme and accessibility styles, attaching to SDK theme change event, etc.
 */
(function () {
   var THEME_CHANGE_EVENT_NAME = "theme-changed";

   function loadTheme(theme, isInitialLoad) {
      if (!isInitialLoad) {
         var event = new Event(THEME_CHANGE_EVENT_NAME);
         document.dispatchEvent(event);
      }
      var supportedThemeNames = ["light", "dark"];
      var themeName = (theme && (supportedThemeNames.indexOf(theme.name) !== -1))
            ? theme.name
            : supportedThemeNames[0];
      var clrThemeUrl = "clr-" + themeName + ".css";
      var vsanThemeUrl = "vsan-ui-" + themeName + ".css";
      var clrAccessibilityThemeUrl = "clr-accessibility-" + themeName + ".css";

      createCssLink("clr-theme-css-link", clrThemeUrl);
      createCssLink("vsan-ui-theme-css-link", vsanThemeUrl);
      createCssLink("clr-accessibility-css-link", clrAccessibilityThemeUrl);
   }

   function createCssLink(cssLinkId, cssLinkUrl) {
      var cssLinkElement = document.getElementById(cssLinkId);
      if (!cssLinkElement) {
         cssLinkElement = document.createElement("link");
         cssLinkElement.setAttribute("rel", "stylesheet");
         cssLinkElement.setAttribute("type", "text/css");
         cssLinkElement.setAttribute("id", cssLinkId);
         cssLinkElement.setAttribute("href", cssLinkUrl);

         document.write(cssLinkElement.outerHTML);
      } else if (cssLinkElement.getAttribute("href") !== cssLinkUrl) {
         cssLinkElement.setAttribute("href", cssLinkUrl);
      }
   }

   // Attach to SDK's theme themeChanged event in order to get the theme name and do the following:
   // 1) Load the theme specific .css file.

   // Note: You can attach a handler to this event only once, so the code is used in two files:
   // 1) index.html (app.view.template) - the theme specific .css file is loaded before other resources,
   // in order to avoid flickering.
   // 2) highcharts-theme.service.ts - the handler from the index.html file is overridden and
   // a logic for applying Highcharts theme specific properties is added.
   var localSdk = window.frameElement.htmlClientSdk;
   var themeLoader = loadTheme.bind(this);
   if (localSdk) {
      // Running in LOCAL mode
      if (localSdk.app.getTheme && localSdk.event.onThemeChanged) {
         // The latest SDK is available and different themese are supported
         localSdk.event.onThemeChanged(themeLoader);
         loadTheme(localSdk.app.getTheme(), true);
      } else {
         // No SDK support. Fall-back to light theme.
         loadTheme({name: "light"}, true);
      }
   } else {
      // Running in REMOTE mode. Attach callback to executed after the SDK is initialized.
      var remoteSdk = window.htmlClientSdk;
      remoteSdk.initialize(() => {
         remoteSdk.event.onThemeChanged(themeLoader);
         loadTheme({name: remoteSdk.app.getTheme()}, true);
      });
   }
})();

// Set lang attribute for the HTML element
(function () {
   var sdk = window.frameElement.htmlClientSdk;
   if (!sdk) {
      return;
   }
   var lang = sdk.app.getClientLocale();
   if (lang) {
      document.documentElement.setAttribute("lang", lang);
   }
})();

// Remove loading indicator after the vsan-app routes to the target component.
(function () {
   // keep value synced with vsan-app.component.ts
   var ROUTING_INITIATION_EVENT_NAME = "vsan-app-routing-initiated";
   // keep value synced with the ID of the loading element
   var loadingIndicatorId = "index-loading";
   document.addEventListener(ROUTING_INITIATION_EVENT_NAME, function (e) {
      var loadingIndicator = document.getElementById(loadingIndicatorId);
      if (loadingIndicator) {
         document.body.removeChild(loadingIndicator);
      }
      // remove event listener once executed.
      e.target.removeEventListener(e.type, arguments.callee);
   });
})();
