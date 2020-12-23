// Client Script
function onLoad() {
  var ga = new GlideAjax('testInclude');
  ga.addParam('sysparm_name','functionName');
  ga.addParam('sysparm_passIN','Devin'); 
  ga.getXMLAnswer(callBackFunction); 
  
  function callBackFunction(response) { 
    alert(response);
    }
  }


// Server-Side Callable Script (Script Include)
var testInclude = Class.create();
testInclude.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	functionName: function() {
		var param1 = this.getParameter('sysparm_passIN'); // Name of parameter, always starts with sysparam_		
		return 'Hello ' + param1;
	}, // Dont forget comma after function defination
	
    type: 'testInclude'
});