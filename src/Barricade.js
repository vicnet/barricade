define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage("Barricade");
($core.packageDescriptors||$core.packages)["Barricade"].innerEval = function (expr) { return eval(expr); };
($core.packageDescriptors||$core.packages)["Barricade"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
($core.packageDescriptors||$core.packages)["Barricade"].transport = {"type":"amd","amdNamespace":"barricade"};

$core.addClass("BZAction", $globals.Object, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.BZAction);



$core.addClass("BZActionDice", $globals.BZAction, ["dices", "success"], "Barricade");
$core.addMethod(
$core.method({
selector: "dice",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (6)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dice",{},$globals.BZActionDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dice\x0a\x09\x22tirage d'un dé\x22\x0a\x09^ (6 atRandom)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atRandom"]
}),
$globals.BZActionDice);

$core.addMethod(
$core.method({
selector: "dices:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
$self["@dices"]=nb;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "dices: nb\x0a\x09dices := nb",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BZActionDice);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@dices"]=(0);
$self["@success"]=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09dices := 0.\x0a\x09success := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BZActionDice);

$core.addMethod(
$core.method({
selector: "success",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._success_with_($self["@success"],$self["@dices"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"success",{},$globals.BZActionDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "success\x0a\x09\x22succes si dé >= sucess pour le nombe de dés\x22\x0a\x09^ self success: success with: dices",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["success:with:"]
}),
$globals.BZActionDice);

$core.addMethod(
$core.method({
selector: "success:",
protocol: "as yet unclassified",
fn: function (on){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._dice()).__gt_eq(on);
if($core.assert($1)){
return (1);
} else {
return (0);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"success:",{on:on},$globals.BZActionDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["on"],
source: "success: on\x0a\x09\x22succes si >= on, retourne 0 ou 1\x22\x0a\x09^ ((self dice) >= on) ifTrue: [1] ifFalse: [0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", ">=", "dice"]
}),
$globals.BZActionDice);

$core.addMethod(
$core.method({
selector: "success:with:",
protocol: "as yet unclassified",
fn: function (on,nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((1)._to_(nb))._inject_into_((0),(function(sum,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(sum).__plus($self._success_(on));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sum:sum,each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"success:with:",{on:on,nb:nb},$globals.BZActionDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["on", "nb"],
source: "success: on with: nb\x0a\x09\x22tirage du nbre de nb dés, sucess si >= on\x22\x0a\x09^ (1 to: nb) inject: 0 into: [ :sum :each |\x0a\x09\x09sum + (self success: on)\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "to:", "+", "success:"]
}),
$globals.BZActionDice);



$core.addClass("BZActionBuild", $globals.BZActionDice, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._build_($self._success());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZActionBuild)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board build: (self success)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["build:", "success"]
}),
$globals.BZActionBuild);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.BZActionBuild.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@success"]=(3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BZActionBuild)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09success := 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.BZActionBuild);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("⛉");
$recv($self["@dices"])._printOn_(stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZActionBuild)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '⛉'.\x0a\x09dices printOn: stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "printOn:"]
}),
$globals.BZActionBuild);



$core.addClass("BZActionKill", $globals.BZActionDice, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._kill_($self._success());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZActionKill)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board kill: (self success)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["kill:", "success"]
}),
$globals.BZActionKill);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.BZActionKill.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@success"]=(3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BZActionKill)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09success := 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.BZActionKill);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("🧟");
$recv($self["@dices"])._printOn_(stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZActionKill)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '🧟'.\x0a\x09dices printOn: stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "printOn:"]
}),
$globals.BZActionKill);



$core.addClass("BZActionRepair", $globals.BZActionDice, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._repair_($self._success());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZActionRepair)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board repair: (self success)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["repair:", "success"]
}),
$globals.BZActionRepair);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.BZActionRepair.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@success"]=(5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BZActionRepair)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09success := 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.BZActionRepair);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("🚗");
$recv($self["@dices"])._printOn_(stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZActionRepair)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '🚗'.\x0a\x09dices printOn: stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "printOn:"]
}),
$globals.BZActionRepair);



$core.addClass("BZActions", $globals.BZAction, ["actions"], "Barricade");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BZActions.comment="Dés affectés comme actions";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:class:",
protocol: "as yet unclassified",
fn: function (nb,class_){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@actions"])._add_($recv($recv(class_)._new())._dices_(nb));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:class:",{nb:nb,class_:class_},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb", "class"],
source: "add: nb class: class\x0a\x09\x22Nb dés affectés à une action\x22\x0a\x09actions add: (class new dices: nb)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "dices:", "new"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@actions"])._do_((function(action){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(action)._applyOn_(board);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({action:action},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09actions do: [ :action |\x0a\x09\x09action applyOn: board ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "applyOn:"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "build:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_class_(nb,$globals.BZActionBuild);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"build:",{nb:nb},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "build: nb\x0a\x09\x22Nb dés affectés à la réparation de la barricade\x22\x0a\x09self add: nb class: BZActionBuild",
referencedClasses: ["BZActionBuild"],
//>>excludeEnd("ide");
messageSends: ["add:class:"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@actions"]=$recv($globals.Array)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Aucune action affectée au début\x22\x0a\x09actions := Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "kill:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_class_(nb,$globals.BZActionKill);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"kill:",{nb:nb},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "kill: nb\x0a\x09\x22Nb dés affectés au nettoyage\x22\x0a\x09self add: nb class: BZActionKill",
referencedClasses: ["BZActionKill"],
//>>excludeEnd("ide");
messageSends: ["add:class:"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "kill:build:repair:",
protocol: "as yet unclassified",
fn: function (nbkill,nbbuild,nbrepair){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._kill_(nbkill);
$self._build_(nbbuild);
$self._repair_(nbrepair);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"kill:build:repair:",{nbkill:nbkill,nbbuild:nbbuild,nbrepair:nbrepair},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nbkill", "nbbuild", "nbrepair"],
source: "kill: nbkill build: nbbuild repair: nbrepair\x0a\x09\x22affectation d'actions\x22\x0a\x09self kill: nbkill;\x0a\x09\x09 build: nbbuild;\x0a\x09\x09 repair: nbrepair",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["kill:", "build:", "repair:"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@actions"])._do_((function(action){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(action)._printOn_(stream);
return $recv(stream)._write_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({action:action},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09actions do: [ :action |\x0a\x09\x09action printOn: stream.\x0a\x09\x09stream write: ' ' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "printOn:", "write:"]
}),
$globals.BZActions);

$core.addMethod(
$core.method({
selector: "repair:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_class_(nb,$globals.BZActionRepair);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"repair:",{nb:nb},$globals.BZActions)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "repair: nb\x0a\x09\x22Nb dés affectés à la réparation dela voiture\x22\x0a\x09self add: nb class: BZActionRepair",
referencedClasses: ["BZActionRepair"],
//>>excludeEnd("ide");
messageSends: ["add:class:"]
}),
$globals.BZActions);



$core.addClass("BZAward", $globals.BZAction, [], "Barricade");


$core.addClass("BZAwardKillAll", $globals.BZAward, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._killAll();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZAwardKillAll)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board killAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["killAll"]
}),
$globals.BZAwardKillAll);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("🧟☠");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZAwardKillAll)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '🧟☠'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:"]
}),
$globals.BZAwardKillAll);



$core.addClass("BZAwardNoArrival", $globals.BZAward, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._noArrival();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZAwardNoArrival)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board noArrival",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noArrival"]
}),
$globals.BZAwardNoArrival);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("🧟✘");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZAwardNoArrival)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '🧟✘'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:"]
}),
$globals.BZAwardNoArrival);



$core.addClass("BZAwardRebuild", $globals.BZAward, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._build_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZAwardRebuild)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board build: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["build:"]
}),
$globals.BZAwardRebuild);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("⛉3");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZAwardRebuild)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '⛉3'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:"]
}),
$globals.BZAwardRebuild);



$core.addClass("BZAwardRepair", $globals.BZAward, [], "Barricade");
$core.addMethod(
$core.method({
selector: "applyOn:",
protocol: "as yet unclassified",
fn: function (board){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(board)._repair_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyOn:",{board:board},$globals.BZAwardRepair)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["board"],
source: "applyOn: board\x0a\x09^ board repair: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["repair:"]
}),
$globals.BZAwardRepair);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("🚗1");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZAwardRepair)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '🚗1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:"]
}),
$globals.BZAwardRepair);



$core.addClass("BZBoard", $globals.Object, ["zombies", "killed", "barricade", "garage", "noArrival", "award"], "Barricade");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BZBoard.comment="Plateau de jeu;\x0a- zombies: nb de zombie vivant courant\x0a- killed: nb de zombies tués\x0a- barricade: point de vie de la barricade\x0a- garage: etat de la voiture";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "apply:",
protocol: "as yet unclassified",
fn: function (actions){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@award"]=false;
$recv(actions)._applyOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:",{actions:actions},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actions"],
source: "apply: actions\x0a\x09\x22Applique les actions\x22\x0a\x09award := false.\x0a\x09actions applyOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["applyOn:"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "arrival",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@zombies"]=$recv($self["@zombies"]).__plus($self._newZombies());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrival",{},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arrival\x0a\x09\x22Ajoute des zombies\x22\x0a\x09zombies := zombies + self newZombies",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "newZombies"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "attack",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@barricade"]=$recv($self["@barricade"]).__minus($self["@zombies"]);
return $recv($self._lost())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attack",{},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "attack\x0a\x09\x22Les zombies attaquent la barricade.\x0a\x09 Retourne faux si perdu, vrai sinon\x22\x0a\x09barricade := barricade-zombies.\x0a\x09^ self lost not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "not", "lost"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "award",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return $self["@award"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "award\x0a\x09^ award",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "build:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($self["@barricade"]).__plus(nb);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt((10));
if($core.assert($1)){
$self["@barricade"]=(10);
} else {
$self["@barricade"]=$recv($self["@barricade"]).__plus(nb);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"build:",{nb:nb},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "build: nb\x0a\x09\x22Reconstruit la barricade\x22\x0a\x09barricade := (barricade+nb>10)\x0a\x09\x09ifFalse: [ barricade+nb ]\x0a\x09\x09ifTrue:  [ 10 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", ">", "+"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@zombies"]=(0);
$self["@killed"]=(0);
$self["@barricade"]=(10);
$self["@garage"]=(0);
$self["@noArrival"]=false;
$self["@award"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Etat initial du jeu\x22\x0a\x09zombies := 0.\x0a\x09killed := 0.\x0a\x09barricade := 10.\x0a\x09garage := 0.\x0a\x09noArrival := false.\x0a\x09award := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "kill:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
var nbreal;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
nbreal=nb;
$1=$recv($self["@zombies"]).__lt(nb);
if($core.assert($1)){
nbreal=$self["@zombies"];
nbreal;
}
$self["@zombies"]=$recv($self["@zombies"]).__minus(nbreal);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$self["@killed"]=$recv($self["@killed"]).__plus(nbreal);
$2=$recv($self["@killed"]).__gt_eq((10));
if($core.assert($2)){
$self["@killed"]=$recv($self["@killed"]).__minus((10));
$self["@award"]=true;
return true;
}
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"kill:",{nb:nb,nbreal:nbreal},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "kill: nb\x0a\x09\x22Tue des zombies, au max de ce qui existent\x0a\x09 Retourne vrai si 10 zombies tués, Faux sinon\x22\x0a\x09| nbreal |\x0a\x09nbreal := nb.\x0a\x09(zombies < nb)\x0a\x09\x09ifTrue: [ nbreal := zombies ].\x0a\x09zombies := zombies - nbreal.\x0a\x09killed := killed + nbreal.\x0a\x09\x22test si dépassement de 10 zombies tués\x22\x0a\x09(killed >= 10)\x0a\x09\x09ifTrue: [ killed := killed-10. award := true. ^ true ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "-", "+", ">="]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "killAll",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._kill_($self["@zombies"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"killAll",{},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "killAll\x0a\x09\x22Tue tous les zombies.\x0a\x09 Retourne vrai si 10 zombies tués, Faux sinon\x22\x0a\x09 ^ self kill: zombies",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["kill:"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "lost",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@barricade"]).__lt_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lost",{},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lost\x0a\x09^ barricade<=0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<="]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "newZombies",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$self["@noArrival"];
if($core.assert($1)){
$self["@noArrival"]=false;
return (0);
}
$2=$recv($self["@garage"]).__lt_eq((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
return (1);
}
$3=$recv($self["@garage"]).__lt_eq((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=2;
//>>excludeEnd("ctx");
if($core.assert($3)){
return (2);
}
$4=$recv($self["@garage"]).__lt_eq((80));
if($core.assert($4)){
return (3);
}
return (4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newZombies",{},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newZombies\x0a\x09\x22Nbre de zombie en fonction du garage et des récompenses\x22\x0a\x09noArrival ifTrue: [ noArrival := false. ^ 0 ].\x0a\x09garage <= 30 ifTrue: [ ^ 1 ].\x0a\x09garage <= 60 ifTrue: [ ^ 2 ].\x0a\x09garage <= 80 ifTrue: [ ^ 3 ].\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<="]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "noArrival",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
$self["@noArrival"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noArrival\x0a\x09\x22pas de zombie au prochain tour\x22\x0a\x09noArrival := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
fn: function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._write_("🧟");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv($self["@zombies"])._printOn_(stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_(" ☠");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv($self["@killed"])._printOn_(stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._write_(" ⛉");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv($self["@barricade"])._printOn_(stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._write_(" 🚗");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=4;
//>>excludeEnd("ctx");
$recv($self["@garage"])._printOn_(stream);
$recv(stream)._write_("%");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream write: '🧟'.\x0a\x09zombies printOn: stream.\x0a\x09stream write: ' ☠'.\x0a\x09killed printOn: stream.\x0a\x09stream write: ' ⛉'.\x0a\x09barricade  printOn: stream.\x0a\x09stream write: ' 🚗'.\x0a\x09garage   printOn: stream.\x0a\x09stream write: '%'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "printOn:"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "repair:",
protocol: "as yet unclassified",
fn: function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=$self["@garage"];
$4=$recv(nb).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt((100));
if($core.assert($1)){
(100);
return true;
} else {
$self["@garage"]=$recv($self["@garage"]).__plus($recv(nb).__star((10)));
}
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"repair:",{nb:nb},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "repair: nb\x0a\x09\x22Reconstruit la voiture.\x0a\x09 nb est le nombre de points gagnés.\x0a\x09 Retourne vrai si gagné, faux sinon\x22\x0a\x09garage := (garage+(nb*10)>100)\x0a\x09\x09ifFalse: [ garage+(nb*10) ]\x0a\x09\x09ifTrue:  [ 100. ^ true ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", ">", "+", "*"]
}),
$globals.BZBoard);

$core.addMethod(
$core.method({
selector: "win",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@garage"]).__gt_eq((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"win",{},$globals.BZBoard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "win\x0a\x09^ garage>=100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [">="]
}),
$globals.BZBoard);



$core.addClass("BZGame", $globals.Object, ["board"], "Barricade");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BZGame.comment="Jeu avec application des différentes phases";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "actions",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
var actions,max,dices;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
max=(4);
actions=$recv($globals.BZActions)._new();
$2=$recv(max).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
dices=$recv($1).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv(actions)._kill_(dices);
max=$recv(max).__minus(dices);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
dices=$recv($recv($recv(max).__plus((1)))._atRandom()).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$recv(actions)._build_(dices);
max=$recv(max).__minus(dices);
dices=max;
$recv(actions)._repair_(dices);
return actions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actions",{actions:actions,max:max,dices:dices},$globals.BZGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actions\x0a\x09\x22^ BZActions new kill: 2; repair: 2\x22\x0a\x09| actions max dices |\x0a\x09max := 4.\x0a\x09actions := BZActions new.\x0a\x0a\x09dices := ((max+1) atRandom) - 1.\x0a\x09actions kill: dices.\x0a\x09max := max - dices.\x0a\x0a\x09dices := ((max+1) atRandom) - 1.\x0a\x09actions build: dices.\x0a\x09max := max - dices.\x0a\x0a\x09dices := max.\x0a\x09actions repair: dices.\x0a\x09\x0a\x09^ actions",
referencedClasses: ["BZActions"],
//>>excludeEnd("ide");
messageSends: ["new", "-", "atRandom", "+", "kill:", "build:", "repair:"]
}),
$globals.BZGame);

$core.addMethod(
$core.method({
selector: "awards",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$globals.BZAwardKillAll,$globals.BZAwardNoArrival,$globals.BZAwardRebuild,$globals.BZAwardRepair])._atRandom())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"awards",{},$globals.BZGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "awards\x0a\x09\x22^ BZAwardRepair new\x22\x0a\x09^ {BZAwardKillAll. BZAwardNoArrival. BZAwardRebuild. BZAwardRepair} atRandom new",
referencedClasses: ["BZAwardKillAll", "BZAwardNoArrival", "BZAwardRebuild", "BZAwardRepair"],
//>>excludeEnd("ide");
messageSends: ["new", "atRandom"]
}),
$globals.BZGame);

$core.addMethod(
$core.method({
selector: "end",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($self["@board"])._lost();
if($core.assert($1)){
return true;
}
$2=$recv($self["@board"])._win();
if($core.assert($2)){
return true;
}
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"end",{},$globals.BZGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x09board lost ifTrue: [ ^ true ].\x0a\x09board win ifTrue: [ ^ true ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "lost", "win"]
}),
$globals.BZGame);

$core.addMethod(
$core.method({
selector: "evaluate",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($self["@board"])._lost();
if($core.assert($1)){
return (-100);
}
$2=$recv($self["@board"])._win();
if($core.assert($2)){
return (100);
}
return (0);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate",{},$globals.BZGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "evaluate\x0a\x09board lost ifTrue: [ ^ -100].\x0a\x09board win ifTrue: [ ^ 100].\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "lost", "win"]
}),
$globals.BZGame);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@board"]=$recv($globals.BZBoard)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BZGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09board := BZBoard new",
referencedClasses: ["BZBoard"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.BZGame);

$core.addMethod(
$core.method({
selector: "play",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
var actions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv($self["@board"])._arrival();
actions=$self._actions();
$recv($self["@board"])._apply_(actions);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["apply:"]=1;
//>>excludeEnd("ctx");
$recv($self["@board"])._attack();
$recv($globals.Transcript)._show_(actions);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(" => ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=2;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_($self["@board"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=3;
//>>excludeEnd("ctx");
$1=$recv($globals.Transcript)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$2=$self._end();
if($core.assert($2)){
return $self["@board"];
}
$3=$recv($self["@board"])._award();
if($core.assert($3)){
actions=$self._awards();
$recv($self["@board"])._apply_(actions);
$recv($globals.Transcript)._show_("☘ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=4;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(actions);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=5;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(" => ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=6;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_($self["@board"]);
$recv($globals.Transcript)._cr();
}
return $self["@board"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"play",{actions:actions},$globals.BZGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "play\x0a\x09| actions |\x0a\x09board arrival.\x0a\x09actions := self actions.\x0a\x09board apply: actions.\x0a\x09board attack.\x0a\x09Transcript show: actions; show: ' => '; show: board; cr.\x0a\x09self end ifTrue: [ ^ board ].\x0a\x09board award ifTrue: [\x0a\x09\x09actions := self awards.\x0a\x09\x09board apply: actions.\x0a\x09\x09Transcript show: '☘ '; show: actions; show: ' => '; show: board; cr ].\x0a\x09^ board",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["arrival", "actions", "apply:", "attack", "show:", "cr", "ifTrue:", "end", "award", "awards"]
}),
$globals.BZGame);



$core.addClass("Barricade", $globals.Object, [], "Barricade");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Barricade);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Barricade.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.Barricade.a$cls);

});
