/* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * Loads and initializes the ESP library.
 * For more info https://confluence.eng.vmware.com/pages/viewpage.action?spaceKey=EcosystemServicesPlatform&title=Integration+Guide
 */
(function () {
   /**
    * Returns the ESP configuration objects. It consist of 2 properties:
    *   1. endpoint - the ESP server endpoint from where the library should be downloaded
    *   2. id - the ID associated with the vSAN service in the feedback portal
    */
   const getConfig = () => {
      const ESP_MODE_KEY = "esp-mode";
      const ESP_MODE_STAGING = "staging";
      const ESP_MODE_PRODUCTION = "production";
      const ESP_MODE_DISABLED = "disabled";

      const STAGING_ID = "esp-stg-312-yywss";
      const STAGING = {
         endpoint: "https://feedback.esp-staging.vmware-aws.com/assets/ipf/esp.js?clientId=" + STAGING_ID,
         id: STAGING_ID,
      };
      const PROD_ID = "esp-prod-126-lkmzw";
      const PRODUCTION = {
         endpoint: "https://feedback.esp.vmware.com/assets/ipf/esp.js?clientId=" + PROD_ID,
         id: PROD_ID,
      }

      // This is the killswitch default value.
      //  * Before enablement the DEFAULT config is set to NULL. Thus the ESP library won't be loaded at all.
      //  * After enablement it should be changed to PRODUCTION.
      const DEFAULT = PRODUCTION;

      if (!localStorage || !localStorage.getItem) {
         // At dev/test env we use latest browser that support localStorage API. If it is missing we assume
         // that this is a client's env so fallback to production configuration
         console.warn("No localStorage object found. Falling back to PRODUCTION configuration.");
         return DEFAULT;
      }

      const espMode = localStorage.getItem(ESP_MODE_KEY);
      switch (espMode) {
         case ESP_MODE_DISABLED:
            console.debug("ESP is disabled.");
            return null;
         case ESP_MODE_STAGING:
            console.debug("ESP is configured to use STAGING server.");
            return STAGING;
         case ESP_MODE_PRODUCTION:
            console.debug("ESP is configured to use PRODUCTION server.");
            return PRODUCTION;
         default:
            console.debug("ESP is configured to use ", DEFAULT, " server.");
            return DEFAULT;
      }
   };

   const config = getConfig();
   if (!config) {
      // The ESP configuration is missing or the service is disabled.
      // In this case don't load anything and return early.
      console.warn("No ESP configuration found. Skipping ESP initialization.");
      return;
   }

   // !!! DO NOT MODIFY !!!
   // This script is taken from the ESP integration page.
   // If any changes/updates/fixes are needed, it will be entirely replaced with its newer version.
   // FROM HERE
   (function (a, b, c, d, e, f) {
      window[d] = window[d] || {};
      window[d]._q = window[d]._q || [];
      ['identify', 'page', 'track', 'metadata', 'locale', 'theme'].forEach(function (t) {
         window[d][t] = function () {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            window[d]._q.push(e);
         }
      });
      window[d]._url = c;
      window[d].init = window[d].init || function (p, q, r) {
         window[d]._clientId = p;
         window[d]._clientName = q;
         window[d]._configs = r || {};
         e = a.createElement(b);
         e.async = 1;
         e.src = c + '?client_id=' + p + '&esp_object=' + d;
         f = a.getElementsByTagName(b)[0];
         f.parentNode.insertBefore(e, f);
      };
   })(document, 'script', config.endpoint, 'esp');
   // TO HERE

   const options = {
      pass_to_parent: true,  // pass form rendering to parent application
      use_parent_user: true, // use identification from the ESP library in the parent application
   };

   esp.init(config.id, "vSAN", options);
})();
