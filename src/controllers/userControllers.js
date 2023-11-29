const UserModel = require('../models/userModel.js');

const getAllUser = async (req, res) => {
    try {
        const [data]  = await UserModel.getAllUser();

        res.status(200).json({
            message: 'GET all user success',
            data: data 
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if (!body.username || !body.password || !body.email || !body.address) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null
        })
    }

    try {
        await UserModel.createNewUser(body);
        res.status(200).json({
            message: 'CREATE new user success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
    
}

const updateUser = async (req,res) => {
    const {idUser} = req.params;
    const {body} = req;

    try {
        await UserModel.updateUser(body,idUser);
        res.status(201).json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const deleteUser = async (req,res) => {
    const {idUser} = req.params;
    try {
        await UserModel.deleteUser(idUser);
        res.status(201).json({
            message: 'DELETE user success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}