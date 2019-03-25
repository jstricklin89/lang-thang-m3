var request = require('request')

describe('get homepage',()=>{
    it('should return 200 ok', (done) => {
        request.get('http://4e384f4e.ngrok.io',(err,res)=>{ 
        expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

describe('get all database records',()=>{
    it('should return 200 ok', (done) => {
        request.get('http://4e384f4e.ngrok.io/translations',(err,res)=>{ 
        expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

describe('create a database entry',()=>{
    it('should return a success message', (done) => {
        request.post('http://4e384f4e.ngrok.io/translations/test',(err,res)=>{ 
        expect(res.statusCode).toEqual(200)
            done()
        })
    })
})



