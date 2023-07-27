/* eslint-disable no-undef */
// src/serviceWorker.js
export function registerServiceWorker() {

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("ServiceWorker registered:", registration);
          })
          .catch((error) => {
            console.error("ServiceWorker registration failed:", error);
          });
      });
    }

      
    if (process.env.NODE_ENV === "production") {
        window.addEventListener("load", () => {
          const swUrl = "/service-worker.js";
          navigator.serviceWorker
            .register(swUrl)
            .then((registration) => {
              console.log("ServiceWorker registered:", registration);
            })
            .catch((error) => {
              console.error("ServiceWorker registration failed:", error);
            });
        });
      }


      if (process.env.NODE_ENV === "production") {
        // Cache all static assets on installation
        self.addEventListener("install", (event) => {
          event.waitUntil(
            caches.open("portfolio-assets-v1").then((cache) => {
              return cache.addAll([
                // Add the paths to your static assets here
                "/",
                "/index.html",
                "/public/vite.svg",
                // Add more static assets paths as needed
              ]);
            })
          );
        });
    
        // Serve static assets from cache when available
        self.addEventListener("fetch", (event) => {
          event.respondWith(
            caches.match(event.request).then((response) => {
              return response || fetch(event.request);
            })
          );
        });
      }
  }


  
 
 
 
 

  