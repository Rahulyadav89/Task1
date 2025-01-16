const{user} = require('../models/RBAC.model');

const userRes = async(res , req) =>{

try{const newuser = new user(req.body);
 await newuser.save();
res.status(200).send(newuser);
}
catch(error){
    res.status(500).send("error during creating");

}

}

//login

const login = async(req , res) => {
const{username , password} = req.body;
try{
const user = await user.findOne({username});

if(!user){
    return res.ststus(404).send("user not found");
}

const isMatch = await bcrypt.compare(password , user.password);

if(!isMatch){
    return res.status(401).send("Invalid credetial");
}

const token = jwt.sign({id:user.userID}, xyz , {
    expiresIn : 120
});

res.status(200).send(token);



}
catch(error){
    console.log(error);
    res.status(500).send('server error');
}

}


//login for admin

const adminlogin = async(req,res) => {
    const{username , password} = req.body;

    const user = user.findOne(username);
if(iuser){
    return res.status(404).send("user not find");
}

const isMatch = bcrypt.compare(password , user.password);

if(isMatch){
    res.status(404).send("password not match");
}


const token = jwt.sign(user.userId , xyz , {
    expireIn : 120
});

return res.status(404).send(token);

}
