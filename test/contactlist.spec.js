const request = require('supertest');
const router = require('../server');


describe('GET /contacts',()=>{
  it('successfuly',(done)=>{
    request(router).get('/contacts')
    .expect(200)
    .then((res)=>{
      let contacts = res.body
      let contact = contacts[0]
      expect(contacts instanceof Array).toBeTruthy()
      expect(contact.id).toBeDefined()
      expect(contact.name).toBeDefined() 
      expect(contact.email).toBeDefined()
      expect(contact.phone).toBeDefined()
      expect(contact.url).toBeDefined()
      expect(contact.notes).toBeDefined()
      done()
    })
  })
  })

  describe('GET /contacts',()=>{
    it('Get id:1 successfuly return status 200 ',(done)=>{
      request(router).get('/contacts/5')
      .expect(200)
      .then((res)=>{
        let contact = res.body
        expect(contact.id).toBe(5)
        expect(contact.name).toBe('Jora Mormont')
        expect(contact.email).toBe('khaleesifan100@gmail.com')
        expect(contact.phone).toBe('123-456-7890')
        expect(contact.url).toBe('www.google.com')
        expect(contact.notes).toBe('Lost in the friend-zone.')
        done()
      })
    })
    })