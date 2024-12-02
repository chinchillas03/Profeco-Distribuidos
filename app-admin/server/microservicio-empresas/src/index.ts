import server from './server'
import color from 'colors'

const port = process.env.PORT || 4007

server.listen(port, ()=> {

    console.log(color.cyan.bold(`REST API funcionando en el puerto ${port}`))

})