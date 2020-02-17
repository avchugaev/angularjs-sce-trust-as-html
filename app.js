import angular from "angular";

angular.module("editorApp", [])
.controller("mainCtrl", function ($scope, $sce) {
  $scope.data = $sce.trustAsHtml(`
  <h1>trustAsHtml Example</h1>
  <p>You should see a "Secure code" message in the console log.</p>
  <p>You should not see a "Danger!!!" message in the console log because of AngularJS SCE protection which prevents JavaScript execution from embedded HTML.</p>
  <script>
    console.warn('Danger!!!')
  </script>
  `);
  console.log('Secure code')
});