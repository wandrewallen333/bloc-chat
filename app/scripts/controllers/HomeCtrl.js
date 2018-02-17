(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');

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



      this.sendMessage = function() {
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        this.newMessage.username = $cookies.get('blocChatCurrentUser');
        document.getElementById("textfield").value = "";
        Message.send(this.newMessage);
      };




    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
