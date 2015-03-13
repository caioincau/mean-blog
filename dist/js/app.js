angular.module("myblog",["ngRoute","ngResource","ngSanitize"]).config(["$routeProvider","$httpProvider",function(e,l){l.interceptors.push(function(e,l){return{response:function(e){return e},responseError:function(o){return 401===o.status&&l.url("/login"),e.reject(o)}}});var o=function(e,l,o,r,t){var n=e.defer();return o.get("/loggedin").success(function(e){"0"!==e?n.resolve():(t.message="You need to log in.",n.reject(),r.url("/"))}),n.promise};e.when("/blog",{templateUrl:"partials/blog.html",controller:"HomeController"}),e.when("/post",{templateUrl:"partials/formPost.html",resolve:{loggedin:o},controller:"HomeController"}),e.when("/",{templateUrl:"partials/about.html",controller:"HomeController"}),e.when("/about",{templateUrl:"partials/about.html",controller:"HomeController"}),e.when("/work",{templateUrl:"partials/work.html",controller:"HomeController"}),e.when("/skills",{templateUrl:"partials/skills.html",controller:"HomeController"}),e.when("/contato",{templateUrl:"partials/contato.html",controller:"HomeController"}),e.when("/login",{templateUrl:"partials/login.html",controller:"HomeController"})}]);
$(".fa-bars").on("click",function(a){$("nav a").slideToggle(),a.preventDefault()});