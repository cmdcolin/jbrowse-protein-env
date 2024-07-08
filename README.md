# jbrowse-protein-env

An integrated environment that uses @jbrowse/react-app component with the
protein3d and msaview plugins loaded

## Issues

Not working to develop protein3d or msaview as yarn link'd package. Gives error

```
Uncaught Error: Could not resolve "@emotion/styled" imported by "@mui/styled-engine". Is it installed?
    optional-peer-dep:__vite-optional-peer-dep: chunk-MCKTPVPX.js:85
    __require2 chunk-LK32TJAX.js:18
    node_modules chunk-MCKTPVPX.js:2120
    __init chunk-LK32TJAX.js:15
    node_modules chunk-MCKTPVPX.js:8313
    __init chunk-LK32TJAX.js:15
    node_modules chunk-MCKTPVPX.js:8444
    __init chunk-LK32TJAX.js:15
    node_modules chunk-MCKTPVPX.js:12163
    __init chunk-LK32TJAX.js:15
    node_modules chunk-2MLADLTO.js:56960
    __init chunk-LK32TJAX.js:15
    <anonymous> index.js:5
```

Possibly due to bad peer dep issues
