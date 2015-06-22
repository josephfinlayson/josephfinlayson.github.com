(function(module) {
try {
  module = angular.module('x');
} catch (e) {
  module = angular.module('x', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('achievements.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('x');
} catch (e) {
  module = angular.module('x', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('contact.html',
    '<section class="h100 contact"><div class="section__container"><h1 class="section-title">Contact me</h1><div class="contact__list-container"><ul class="contact__list"><li><a target="_blank" href="mailto:joseph.finlayson@gmail.com">Gmail</a></li><li><a target="_blank" href="https://google.com/+josephfinlayson">Google +</a></li><li><a target="_blank" href="https://twitter.com/j4lf">Twitter</a></li><li><a target="_blank" href="https://www.facebook.com/joseph.finlayson">Facebook</a></li></ul></div></div><div class="watermark"><i class="fa fa-comments-o"></i></div></section>');
}]);
})();

(function(module) {
try {
  module = angular.module('x');
} catch (e) {
  module = angular.module('x', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('dd-fake-typer.html',
    '<div><div class="options" style="display: none" ng-transclude=""></div><div class="text">{{ddFakeTyperController.prefix}}{{ddFakeTyperController.typedTest}}{{ddFakeTyperController.suffix}}{{ddFakeTyperController.cursor}}</div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('x');
} catch (e) {
  module = angular.module('x', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('me.html',
    '<section class="h100 me"><div class="me__list-container h100"><ul class="f-col me__list"><li><h1>Joseph Finlayson<dd-fake-typer prefix="\'- \'" order="\'random\'"><dd-fake-typer-option>Developer</dd-fake-typer-option><dd-fake-typer-option>Debugger</dd-fake-typer-option><dd-fake-typer-option>Hacker</dd-fake-typer-option><dd-fake-typer-option>Tester</dd-fake-typer-option></dd-fake-typer></h1></li><li class="f-1 "><i class="fa fa-map-marker"></i><div>London, England</div></li><li class="f-1 "><i class="fa fa-suitcase"></i><div>JavaScript Developer</div></li></ul></div></section>');
}]);
})();

(function(module) {
try {
  module = angular.module('x');
} catch (e) {
  module = angular.module('x', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('rocket.html',
    '<section class="h100 rocket"><div class="section__container"><h1 class="section-title">Work</h1><div class="rocket__content"><ul class="rocket__list"><li><a target="_blank" href="https://github.com/josephfinlayson"><div>Github</div></a></li><li><a target="_blank" href="https://gist.github.com/josephfinlayson"><div>Gists</div></a></li><li><a target="_blank" href="uk.linkedin.com/pub/joseph-finlayson/53/7a3/484/"><div>LinkedIn</div></a></li></ul></div></div><div class="watermark"><i class="fa fa-rocket"></i></div><div class="rocket__nav-back"></div></section>');
}]);
})();
