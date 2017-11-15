(function() {
  function ModalCtrl(Room, $uibModalInstance) {

    this.cancel = function() {
      $uibModalInstance.close();
      
    };

    this.submit = function() {
      //console.log("submit");
      Room.add(this.newRoom.name);
      //console.log(this.newRoom);
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
