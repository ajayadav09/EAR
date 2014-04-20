/* -------------------------------------------------- translating the section-1 search pane---------------------------------------------- */
function expand(){
var search= document.getElementById('searchpane');
                   search.style.cssText='cursor: pointer; -webkit-transform: translateX(22%)  skewX(-20deg); transition-duration:700ms; ' ;
     search.style.cssText='cursor: pointer; -moz-transform: translateX(22%)  skewX(-20deg); transition-duration:700ms; ' ;
                   document.getElementById('sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(22%) skewX(-20deg); transition-duration:700ms; ;box-shadow:inset 9px 4px 3px -4px rgba(50, 50, 50, 0.77);';
                   document.getElementById('cbp-mc-form').style.cssText='visibility:visible;';
                   document.getElementById('cbp-mc-formsell').style.cssText='visibility:hidden;';
  


        var mq52 = window.matchMedia( "(max-width: 52.375em)" );
	    var mq32 = window.matchMedia( "(max-width: 32em)" );
	          
             if (mq52.matches) {
	               document.getElementById('searchpane').style.cssText='cursor: pointer; left:-110% ; -webkit-transform: translateX(20%)  skewX(-20deg); transition-duration:700ms; ';
	               document.getElementById('sellpane').style.cssText='cursor: pointer; right:-145% ; -webkit-transform: translateX(20%) skewX(-20deg); transition-duration:700ms; '
                   document.getElementById('cbp-mc-form').style.cssText='visibility:visible;';
                   document.getElementById('cbp-mc-formsell').style.cssText='visibility:hidden;';
                }

               else if (mq32.matches){
	               document.getElementById('searchpane').style.cssText='cursor: pointer; -webkit-transform: translateX(10%)  skewX(-20deg); transition-duration:700ms; ';
	               document.getElementById('sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(10%) skewX(-20deg); transition-duration:700ms; '; 
                   document.getElementById('cbp-mc-form').style.cssText='visibility:visible;';
                   document.getElementById('cbp-mc-formsell').style.cssText='visibility:hidden;';
	           }
}

function showpart(){
                 
                  document.getElementById('regbutton').href="#cbp-mc-formreg";  
                  document.getElementById('cbp-mc-form').style.cssText='visibility:hidden';
                  document.getElementById('cbp-mc-formreg').style.cssText='visibility:visible';
        }


function showmodal(){

                  document.getElementById('myModal').style.cssText='display:none'; 
                  document.getElementById('myModalsell').style.cssText='display:none'; 
                  document.getElementById('myModalreg').style.cssText='visibility:visible;'; 

}




/* translating the section-1 sell pane */
function expandsell(){
         var search= document.getElementById('searchpane');
                search.style.cssText='cursor: pointer; -webkit-transform: translateX(-20%)  skewX(-20deg); transition-duration:700ms; ';
                document.getElementById('sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(-15%) skewX(-20deg); transition-duration:700ms; ';
                document.getElementById('cbp-mc-formsell').style.cssText='visibility:visible;';

        var mq52 = window.matchMedia( "(max-width: 52.375em)" );
	    var mq32 = window.matchMedia( "(max-width: 32em)" );
	       if (mq52.matches) {
	            document.getElementById('searchpane').style.cssText='cursor: pointer; left:-110%; -webkit-transform: translateX(-40%)  skewX(-20deg); transition-duration:700ms; ';
	            document.getElementById('sellpane').style.cssText='cursor: pointer; right:-145%; -webkit-transform: translateX(-40%) skewX(-20deg); transition-duration:700ms; ';
                document.getElementById('cbp-mc-formsell').style.cssText='visibility:visible;';
                }

           else if (mq32.matches){
	            document.getElementById('searchpane').style.cssText='cursor: pointer; -webkit-transform: translateX(-60%)  skewX(-20deg); transition-duration:700ms; ';
	            document.getElementById('sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(-60%) skewX(-20deg); transition-duration:700ms; ';
                document.getElementById('cbp-mc-formsell').style.cssText='visibility:visible;';
    
	}
}

/* the section-1 equal split */
function equalsplit(){
              var search= document.getElementById('searchpane');
                search.style.cssText='cursor: pointer;left:-90%;  width:180%; -webkit-transform:skewX(-20deg); transition-duration:700ms; ';
                document.getElementById('sellpane').style.cssText='cursor: pointer; right:-125%; width:180%;-webkit-transform:  skewX(-20deg); transition-duration:700ms;';
                document.getElementById('cbp-mc-form').style.cssText='visibility:hidden;';
                document.getElementById('cbp-mc-formsell').style.cssText='visibility:hidden;';
        var mq32 = window.matchMedia( "(max-width: 32em)" );
	      if (mq32.matches) {
	            search.style.cssText='cursor: pointer;left:-120%;  width:180%; -webkit-transform:skewX(-20deg); transition-duration:700ms; ';
                document.getElementById('sellpane').style.cssText='cursor: pointer; right:-123%; width:180%;-webkit-transform:  skewX(-20deg); transition-duration:700ms;';
                document.getElementById('cbp-mc-form').style.cssText='visibility:hidden;';  
                document.getElementById('cbp-mc-formsell').style.cssText='visibility:hidden;';
}
}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++translating the  section-2 search pane +++++++++++++++++++++++++++++++++++++++++++++ */
function sect2expand(){
       var search= document.getElementById('sect2searchpane');
               search.style.cssText='cursor: pointer; -webkit-transform: translateX(31%)  skewX(-20deg); transition-duration:700ms; ';
               document.getElementById('sect2sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(0%) skewX(-20deg); transition-duration:700ms; '
               document.getElementById('cbp-mc-form').style.cssText='visibility:visible;';

       var mq52 = window.matchMedia( "(max-width: 52.375em)" );
	   var mq32 = window.matchMedia( "(max-width: 32em)" );
	     if (mq52.matches) {
 	           document.getElementById('sect2searchpane').style.cssText='cursor: pointer; left:-110% ; -webkit-transform: translateX(20%)  skewX(-20deg); transition-duration:700ms; ';
	           document.getElementById('sectsellpane').style.cssText='cursor: pointer; right:-145% ; -webkit-transform: translateX(20%) skewX(-20deg); transition-duration:700ms; '
               document.getElementById('cbp-mc-form').style.cssText='visibility:visible;';
              }

        else if (mq32.matches){
	          document.getElementById('sect2searchpane').style.cssText='cursor: pointer; -webkit-transform: translateX(10%)  skewX(-20deg); transition-duration:700ms; ';
	          document.getElementById('sect2sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(10%) skewX(-20deg); transition-duration:700ms; '; 
              document.getElementById('cbp-mc-form').style.cssText='visibility:visible;';
	         }
        }

/* translating the  section-2 sell pane */
function sect2expandsell(){
       var search= document.getElementById('sect2searchpane');
             search.style.cssText='cursor: pointer; -webkit-transform: translateX(0%)  skewX(-20deg); transition-duration:700ms; ';
             document.getElementById('sect2sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(-30.7%) skewX(-20deg); transition-duration:700ms; '

      var mq52 = window.matchMedia( "(max-width: 52.375em)" );
	  var mq32 = window.matchMedia( "(max-width: 32em)" );
	       if (mq52.matches) {
        	 document.getElementById('sect2searchpane').style.cssText='cursor: pointer; left:-110%; -webkit-transform: translateX(-40%)  skewX(-20deg); transition-duration:700ms; ';
	         document.getElementById('sect2sellpane').style.cssText='cursor: pointer; right:-145%; -webkit-transform: translateX(-40%) skewX(-20deg); transition-duration:700ms; '
             }

     else if (mq32.matches){
	         document.getElementById('sect2searchpane').style.cssText='cursor: pointer; -webkit-transform: translateX(-60%)  skewX(-20deg); transition-duration:700ms; ';
	         document.getElementById('sect2sellpane').style.cssText='cursor: pointer; -webkit-transform: translateX(-60%) skewX(-20deg); transition-duration:700ms; ';
	      }
       }


/* the section-2 equal split */
function sect2split(){
     var search= document.getElementById('sect2searchpane');
            search.style.cssText='cursor: pointer;left:-170%;  width:180%; -webkit-transform:skewX(-20deg); transition-duration:700ms; ';
            document.getElementById('sect2sellpane').style.cssText='cursor: pointer; right:-165%; width:180%;-webkit-transform:  skewX(-20deg); transition-duration:700ms;';
            var mq32 = window.matchMedia( "(max-width: 32em)" );
	if (mq32.matches) {
	        search.style.cssText='cursor: pointer;left:-120%;  width:180%; -webkit-transform:skewX(-20deg); transition-duration:700ms; ';
            document.getElementById('sect2sellpane').style.cssText='cursor: pointer; right:-105%; width:180%;-webkit-transform:  skewX(-20deg); transition-duration:700ms;';
       }
     } 



















