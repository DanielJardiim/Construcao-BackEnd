const { UsersModel } = require('../infrastructure/database');

const UsersRepository = {
    async create(data) {
        try {
            const model = new UsersModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nomeMusica,
            };
            const options = { new: true };
            const filter = {nome: data.nomeMusica };
            const result = await UsersModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await UsersModel.deleteOne({ nome: data.nomeMusica }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await UsersModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

module.exports = UsersRepository;