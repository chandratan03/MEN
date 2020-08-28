let router = require('express').Router();
let contactController = require('./controller/contactController');

router.get('/', (req, res)=>{
    res.json({
        status: "test",
        message: "welcome to get",
    });
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.add);

router.route("/contacts/:contact_id")
    .put(contactController.update)
    .delete(contactController.delete)
    



module.exports = router;



