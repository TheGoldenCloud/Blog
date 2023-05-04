let islogin = (req,res,next) => {
    if(req.user == null){
        return res.send("You need to login");
    }
    next();

}

export default islogin;