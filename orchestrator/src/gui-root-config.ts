import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@gui/mmdz",
  app: () =>
  System.import("@gui/mmdz"),
  activeWhen: ["mmdz"],
});

start({
  urlRerouteOnly: true,
});
