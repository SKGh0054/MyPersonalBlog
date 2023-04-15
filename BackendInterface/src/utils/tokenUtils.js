const jwt = require('jsonwebtoken');
const { secretKey, expiresIn } = require("../config/tokenConfig.js")

function verifyToken(uid, scoped) {
    // 根据相关配置生成token
    const token = jwt.sign(
        {
            uid,
            scoped
        },
        secretKey,
        {
            expiresIn
        }
    )
    return token

}

module.exports = {
    verifyToken
}