const vm = new Vue({

    el: '#app',
  
    data: {
      welcomeMessage: 'Welcome to your first vue app',
      goodFruits: [
        {name: 'apple', flavour: 'tasty!'},
        {name: 'mango', flavour: 'fantastic!'},
        {name: 'apricot', flavour: 'gnammy!'}
      ],

      targetURL: 'https://vuejs.org/v2/guide/',

      vuemessage : "Yay! you can haz vue",

      anchorOff : true,

      hazVue : true

    },
  
    methods: {
      logFruits(e) { console.log(e.currentTarget); },
    }

  
  });

  const vm2 = new Vue({
    el: '#footer',

    data : {
        footermessage : "this is a footer"
    }


  })