require.config({
    packages: [{ name: 'gremlins', location: './tests/src' }]
    /*
    // alternative: use the packaged version
    paths: {
        gremlins:  '../../gremlins.min'
    }
    */
});

require(['gremlins'], function(gremlins) {
  gremlins           // Yo, Gremlins
    .createHorde()   // Create me a default horde
    .unleash();      // Then immediately release them

// https://codepen.io/aliciasedlock/pen/wowrmG
});
