const db = require("../../database/models");


const apiGenresControllers = {
    list: async (req, res) => {
        try {
            const genre = await db.Genres.findAll(id)
            
            return res.status(200).send(genre.name);
        } catch (error) {
            console.log("----->Errorenlista:", error);
            res.status(400).send(error.message)
        }
    },
    detail: async (req, res) => {
        try {
            const genre = await db.Genres.findByPk(id)
            return res.status(200).send(genre.name,genre.ranking);

        } catch (error) {
            console.log("----->Error:", error);
            res.status(400).send(error.message)
        }
    }

}
module.exports=apiGenresControllers