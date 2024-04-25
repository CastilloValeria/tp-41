const DB = require('../../database/models')

const op = DB.Sequelize.Op;


module.exports = {

    create: (req, res) => {
        console.log(req.body)
        DB.Movie.
            create(req.body)
            .then(movie => {
                return res.status(200).json(
                    {
                        data: movie,
                        status: 200,
                        create: "La pelicula fue guardada"
                    }
                )
            })
    },

    update: function (req, res) {
        let movieId = req.params.id;
        console.log("este es el id de la peli update", movieId)
        DB.Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: { id: movieId }
            })
            .then((movie) => {
                return res.json(movie)
            })
            .catch(error => res.send(error))
    },

    delete: function (req,res) {
        let movieId = req.params.id;
        Movies
        .findByPk(movieId)
        .then(Movie => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) 
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }
}