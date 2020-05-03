import { defaultWordList } from "../service/word-service.js"

export function listWordController(angularModule){
    angularModule
    .controller('ListWordController', function($scope){
        closeNav();
        $scope.wordList = defaultWordList;
    })
}