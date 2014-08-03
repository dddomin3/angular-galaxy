gxMainApp.directive('myDatepicker', function () {
    return {
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    showOn:"both",
                    changeYear:true,
                    changeMonth:true,
                    dateFormat:'yy-mm-dd',
                    maxDate: new Date(),
                    yearRange: '1920:2012',
                    onSelect:function (dateText, inst) {
                    ngModelCtrl.$setViewValue(dateText);
                    scope.$apply();
                    }
                });
            });
        }
    }
});