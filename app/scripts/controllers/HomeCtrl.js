(function() {
    function HomeCtrl(Room, $uibModal, Message) {
      this.rooms = Room.all;
      this.currentRoom = null;

      this.setRoom = function(room) {
        this.currentRoom = room;
        this.messages = Message.getByRoomId(this.currentRoom.$id); 
        //console.log(room.$value);
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
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
