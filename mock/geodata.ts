import { kawasaki, yokohama } from './data'
export default {
    'GET /api/geodata': (req: any, res: any) => {
        const { id } = req.params
        if (id === 'yokohama') {
            res.status(200)
            res.send(yokohama)
            return
        }
        if (id === 'kawasaki') {
            res.status(200)
            res.send(kawasaki)
        }
    },
}
