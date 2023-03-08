const openai = require('../config/openai');

module.exports.imagegen = async (req, res) => {
    try {

        const response = await openai.createImage({
            prompt: req.body.gentext,
            n: 2,
            size: "256x256",
        });

        // return res.status(200).json({
        //     success: true,
        //     ImageURL: image_url
        // });
        return res.render('Home', {
            imageData: response.data.data
        });

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }

          return res.status(400).json({
            error: true,
            message: "Sorry Image Can't Be Generated"
        });          
    }
}