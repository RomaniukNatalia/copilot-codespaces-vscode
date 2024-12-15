function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'Vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}