const {auth} = require('express-oauth2-jwt-bearer')

const checkuser = (req,res,next)=>{
  const jwtCheck = auth({
    audience: 'https://api.chatbuddy.com',
    issuerBaseURL: 'https://dev-dcmv0zppvfsfhgpb.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  jwtCheck(req, res, (err) => {
        if (err) {
          console.error('JWT validation failed:', err.message);
          return res.status(401).json({ error: 'Unauthorized access' });
        }
        next(); // Proceed to the next middleware or route
      });
}

module.exports = checkuser;