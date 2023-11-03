const fs = require('fs').promises;
const path = require('path');
let userPath = path.join(__dirname+'/../data/user.json')

const getAllUser = async (req, res)=>{
    try {
        const user = await fs.readFile(userPath,{'encoding':'utf-8'})
        res.json(JSON.parse(user))
    } catch (error) {
        res.send(error)
    }
}
module.exports = {getAllUser};
