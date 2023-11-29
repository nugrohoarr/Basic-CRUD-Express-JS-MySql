const dbPool = require('../config/database.js');

const getAllUser =  () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (username, password, email, address)
                        VALUES ('${body.username}', '${body.password}', '${body.email}', '${body.address}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE users 
                        SET username='${body.username}', password='${body.password}', email='${body.email}', address='${body.address}'
                        WHERE id='${idUser}'`;
        
    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id='${idUser}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
}