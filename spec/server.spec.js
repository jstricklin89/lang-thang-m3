var request = require('request')

describe('get homepage',()=>{
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000',(err,res)=>{ 
        expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

describe('get all database records',()=>{
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/translations',(err,res)=>{ 
        expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

describe('create a database entry',()=>{
    it('should return a success message', (done) => {
        request.post('http://localhost:3000/translations/test',(err,res)=>{ 
        expect(res.statusCode).toEqual(200)
            done()
        })
    })
})



