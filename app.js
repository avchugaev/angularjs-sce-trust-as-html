import angular from "angular";

angular.module("editorApp", [])
.controller("mainCtrl", function ($scope, $sce) {
  $scope.data = $sce.trustAsHtml(`
  <h1>trustAsHtml Example</h1>
  <p>If you see a "Danger!!!" message in console log, it means insecure JS code was executed.</p>
  <script>
    console.warn('Danger!!!')
  </script>
  `);
  console.log('Secure code')
});