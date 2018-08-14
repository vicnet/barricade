define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage("Barricade-Tests");
($core.packageDescriptors||$core.packages)["Barricade-Tests"].innerEval = function (expr) { return eval(expr); };
($core.packageDescriptors||$core.packages)["Barricade-Tests"].transport = {"type":"amd","amdNamespace":"barricade"};

$core.addClass("BarricadeTest", $globals.TestCase, [], "Barricade-Tests");

});
