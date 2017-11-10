(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;
      this.currentRoom = null;

      this.setRoom = function(room) {
        //this.currentRoom = room;
        console.log("room");
      };

      this.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/modal.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        })
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
