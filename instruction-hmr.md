# Enable Hot Module Replacement (HMR) in Nx Angular Module Federation App

This guide explains how to enable and serve a Module Federation Angular app in an Nx Monorepo using **Hot Module Replacement (HMR)**.

## Prerequisites

- Nx workspace setup
- Angular 18 or later
- Module Federation enabled (`@nx/angular:module-federation-dev-server`)
- App name: `datumhostapp`

---

## 1. Configure HMR in `project.json`

Locate `apps/datumhostapp/project.json` and ensure the `serve` target uses the correct executor:

```json
"targets": {
  "serve": {
    "executor": "@nx/angular:module-federation-dev-server",
    "options": {
      "port": 4200,
      "hmr": true,
      "publicHost": "http://localhost:4200"
    },
    "configurations": {
      "production": {
        "hmr": false
      }
    }
  }
}
```

> 🔹 `hmr: true` enables Hot Module Replacement.  
> 🔹 `publicHost` is required for remote apps to recognize the host.

---

## 2. Optional: Custom `webpack.config.js`

If you're using a custom Webpack config (optional):

```js
// webpack.config.js
module.exports = {
  devServer: {
    hot: true,
  },
};
```

---

## 3. Serve the Application with HMR

Run the following command:

```bash
nx serve datumhostapp --hmr
```

> Alternatively, `--hmr` can be omitted if set in `project.json`.

---

## 4. Verify HMR is Working

Check the console output:

```
NOTICE: Hot Module Replacement (HMR) is enabled for the dev server.
```

Then, edit a component and verify the changes reflect **without full browser reload**.

---

## 5. Troubleshooting

- Ensure you're **not** using `--standalone` apps.
- Ensure `@nx/webpack` is installed and compatible:

```bash
npm ls @nx/webpack
```

- Make sure no browser caching or console errors are blocking updates.

---

## References

- [Nx Module Federation Docs](https://nx.dev/recipes/module-federation)
- [Webpack HMR Guide](https://webpack.js.org/guides/hot-module-replacement/)