define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("UnsereGelderTools");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-unseregeldertools"};

$core.addClass("UnsereGelderTools", $globals.Object, [], "UnsereGelderTools");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| body citiesButton heliosButton |\x0a\x09citiesButton := (Silk BUTTON: 'get Cities') on: #click bind: [ self getCities ].\x0a\x09heliosButton := (Silk BUTTON: 'Helios') on: #click bind: [ self openHelios ].\x0a\x09body := Silk new.\x0a\x09body reset.\x0a\x09body << citiesButton.\x0a\x09body << heliosButton.\x0a\x09body UL: {'id' -> 'CityList'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:bind:", "BUTTON:", "getCities", "openHelios", "new", "reset", "<<", "UL:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var body,citiesButton,heliosButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Silk)._BUTTON_("get Cities");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["BUTTON:"]=1;
//>>excludeEnd("ctx");
citiesButton=$recv($1)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._getCities();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
heliosButton=$recv($recv($globals.Silk)._BUTTON_("Helios"))._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._openHelios();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
body=$recv($globals.Silk)._new();
$recv(body)._reset();
$recv(body).__lt_lt(citiesButton);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$recv(body).__lt_lt(heliosButton);
$recv(body)._UL_(["id".__minus_gt("CityList")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{body:body,citiesButton:citiesButton,heliosButton:heliosButton})});
//>>excludeEnd("ctx");
}; }),
$globals.UnsereGelderTools);

$core.addMethod(
$core.method({
selector: "getCities",
protocol: "backend",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getCities\x0a\x09\x22UnsereGelderTools new getCities\x22\x0a\x09\x0a\x09(Platform fetch: 'http://localhost:63036/cityNames') then: [:response | \x0a\x09\x09response json then: [:json | \x0a\x09\x09\x09self showCities: json]]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "fetch:", "json", "showCities:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Platform)._fetch_("http://localhost:63036/cityNames"))._then_((function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(response)._json())._then_((function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._showCities_(json);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({json:json},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({response:response},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["then:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCities",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UnsereGelderTools);

$core.addMethod(
$core.method({
selector: "openHelios",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openHelios\x0a\x09<inlineJS: 'require(''amber/helpers'').popupHelios()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["require('amber/helpers').popupHelios()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
require('amber/helpers').popupHelios();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openHelios",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UnsereGelderTools);

$core.addMethod(
$core.method({
selector: "showCities:",
protocol: "backend",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someCities"],
source: "showCities: someCities\x0a\x09| list |\x0a\x09list := '#CityList' asSilk.\x0a\x09someCities do: [:cityname |\x0a\x09\x09list LI: cityname]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSilk", "do:", "LI:"]
}, function ($methodClass){ return function (someCities){
var self=this,$self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
list="#CityList"._asSilk();
$recv(someCities)._do_((function(cityname){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(list)._LI_(cityname);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cityname:cityname},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCities:",{someCities:someCities,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.UnsereGelderTools);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["augmentPage", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UnsereGelderTools.a$cls);

});
