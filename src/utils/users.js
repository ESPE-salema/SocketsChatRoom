const users = [];

const addUser = ({ id, username, room }) => {
   // Limpiar los datos
   username = username.trim().toLowerCase();
   room = room.trim().toLowerCase();

   // Validar los datos
   if (!username || !room) {
      return {
         error: 'El nombre de usuario y la sala son requeridos!!',
      };
   }

   // Comprobar usuario existente
   const existingUser = users.find(user => {
      return user.room === room && user.username === username;
   });

   // Validar nombre de usuario
   if (existingUser) {
      return {
         error: 'El nombre de usuario está en uso!!',
      };
   }

   // Almacenar usuario
   const user = { id, username, room };
   users.push(user);
   return { user };
};

const removeUser = id => {
   const index = users.findIndex(user => user.id === id);

   if (index !== -1) {
      return users.splice(index, 1)[0];
   }
};

const getUser = id => {
   return users.find(user => user.id === id);
};

const getUsersInRoom = room => {
   room = room.trim().toLowerCase();
   return users.filter(user => user.room === room);
};

module.exports = {
   addUser,
   removeUser,
   getUser,
   getUsersInRoom,
};
