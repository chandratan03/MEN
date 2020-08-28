
var Contact = require('../model/contact');


exports.index = (req,res)=>{
    Contact.get( (err,contact)=>{
        if(err){
            res.json({
                status: "error",
                message: "err"
            });
        }else{
            res.json({
                status: "index",
                message: "Got contacts",
                data: contact
            })
        }
    })

}

// using post man
// make sure using x-www-form-urlencoded

exports.add = function(req, res){
    const contact = new Contact({
        name :req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    contact.save((err)=>{
        if(err)
            res.json(err);
        else
            res.json({
                message:"new contact added",
                data: contact
            })
    })
}
exports.update = (req, res)=>{
    Contact.findById(req.params.contact_id, (err, contact)=>{
        if(err)
            res.send(err);
        else{
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.password = req.body.password;

            contact.save((err)=>{
                if(err)
                    res.json(err);
                else
                    res.json({
                        message:"contact updated",
                        data: contact
                    })
            })
        }
    })
}

exports.delete = (req, res)=>{
    Contact.deleteOne({
        _id: req.params.contact_id
    }, (err,contact)=>{
        if(err){
            res.send(err)
        
        }
        else{
            res.json({
                status: "success",
                message: "Contact deleted Success"
            })
        }
    })
}