var pronoun = ['the','our', 'for'];
var adj = ['great', 'big', 'litle'];
var noun = ['jogger','racoon', 'dog'];
var dot = ['.com', '.cl', '.ve']
function mostrar(par1, par2, par3){

    for( let i=0; i<pronoun.length; i++){
        for( let j=0; j<adj.length; j++){
            for( let h=0; h<noun.length; h++){
                for (let f=0; f<dot.length; f++){
                    console.log(pronoun[i].concat(adj[j]).concat(noun[h]).concat(dot[f]))
                }
            }
        }
    }
   // var weburl = pronoun[i].concat(adj[j]).concat(noun[h]).concat(dot[f]);
    //console.log(weburl);
}
mostrar()