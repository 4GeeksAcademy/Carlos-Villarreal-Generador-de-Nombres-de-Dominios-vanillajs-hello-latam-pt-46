window.onload = function() {
    //write your code here
      // arrays with the words
      let pronoun = ['the', 'our', 'his'];
      let adj = ['great', 'big', 'amazing' ];
      let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];
      
      // generating the domains
      for(let i = 0; i < pronoun.length; i++) {
        for(let j = 0; j < adj.length; j++) {
          for(let k = 0; k < noun.length; k++) {
            console.log(pronoun[i] + adj[j] + noun[k]+'.com');
            console.log(pronoun[i] + adj[j] + noun[k] + ".net");
            console.log(pronoun[i] + adj[j] + noun[k] + ".us");
            console.log(pronoun[i] + adj[j] + noun[k] + ".io");
          };
        };
      };
  }