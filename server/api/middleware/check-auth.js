const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
  try{
    const JWT_KEY = 'api.yaddasht.secret';
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_KEY);
    req.userData = decoded;
  }catch(error){
    return res.status(401).json({
      message: 'توکن همخوانی ندارد'
    })
  }
}
