
const signout = (req: Express.Request, res: any): void => {
    req.session = null
    res.send({})
}

export default signout