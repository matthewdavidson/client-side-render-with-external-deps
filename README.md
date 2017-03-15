# client-side-render-with-external-deps

Reproducing an issue with OC whereby external dependencies error out during client side rendering.

1. Install and start the processes
```sh
npm install
npm start
npm run testharness
```

2. Navigate to http://localhost:3000/client-side-render-with-external-deps/1.0.0/~preview

3. Observe the following error in browser console:
```
Error rendering component: http://localhost:3000/client-side-render-with-external-deps/1.0.0?__oc_Retry=0, error: TypeError: Cannot read property 'render' of undefined
```

4. Navigate to http://localhost:8080/

5. Observe that the client side scripts work as expected.
