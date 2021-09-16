const jwt = require('jsonwebtoken')

const getTokenFrom = request => {

    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

const checkToken = (request) => {

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.TOKEN);

    if (!token || !decodedToken.id) {

        return {
            status: false,
            data: response.status(401).json({ error: 'token missing or invalid' })
        };
    }

    return {
        status: true,
        data: decodedToken.user
    };
}

module.exports = {
    checkToken
}
