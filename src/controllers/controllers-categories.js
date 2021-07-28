const slugify = require('slugify')
const movies = require('../categories/categories')
exports.addmovies = (req, res) => {
    movies.findOne({ name: req.body.name })
        .exec((error, movie) => {
            if (movie) {
                return res.status(400).json({
                    message: "movie all ready registered"
                })
            }
            const {
                name,
                url,
                image,
                categorie,
                type,
                saison,
                episode,
                dateSortie
            } = req.body
            const _movie = new movies({
                name,
                url,
                image,
                categorie,
                type,
                saison,
                episode,
                dateSortie
            });
            _movie.save((error, movie) => {
                if (error) return res.status(400).json({ error });
                if (movie) {
                    return res.status(201).json({
                        movie
                    });
                }
            });
        })
}
exports.getmovies = (req, res) => {
    movies.find(({})).exec((error, movie) => {
        if (error) return res.status(400).json({ error });
        if (movie) {
            const { _id, name, url, image, categorie, type, saison, episode } = movie;
            return res.status(200).json({
                message: "success",
                movie
            });
        }
    });
}

exports.updatemovie = (req, res) => {


    const movie = movies.findOneAndUpdate({ name: req.params.name })
        .exec((error, movie) => {
            if (error) return res.status(200).json({
                Error: true
            })
            if (!movie) {
                res.status(400).json({
                    message: "movie not found"
                })
            }
            console.log(movie.name)
            movie.name = req.body.name
            res.status(200).json({
                message: "success",
                data: movie
            })

        })


}

exports.deletemovie = (req, res) => {
    const name = req.body.name
    const movie = movies.findOneAndDelete({ name: req.body.name })
        .exec((error, movie) => {
            if (error) return res.status(400).json({
                message: Error
            })
            if (!movie) {
                res.status(400).json({
                    message: "movie not found"
                })
            }
            res.status(200).json({
                message: "MOVIE IS DELETED",

            })
        })
}