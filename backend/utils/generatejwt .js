import jwt from 'jsonwebtoken'
export const generateJWT = async(UserId,res)=>{
    try {
         const Token  = jwt.sign({UserId},process.env.JWT_SECRET,{expiresIn:'15d'});
         res.status(201).cookie("jwt-Nest",Token,{
            maxAge:15 * 24 * 60 * 60 * 1000, // 15 days in MS
            httpOnly:true,
            sameSite:"strict"
        })
        return Token;
    } catch (error) {
        console.log("generateJWT Error :- ",error.message);
    }
}