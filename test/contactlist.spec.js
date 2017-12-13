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
    describe('POST /contacts',()=>{
      it('Post id:12 successfully 201',(done)=>{
        request(router).post('/contacts')
        .send([
              {id:12,name:'Donlawat',email:'58160391@go.buu.ac.th',phone: '063-792-4546',url:'https://www.facebook.com/got.deelert' ,notes:'I Need Grade A' },
             
             ])
        .expect(201)
        .then((res)=>{
          let contact = res.body
          let contacts = contact[0]
         expect(contact).toBeDefined()
         expect(contacts.id).toBe(12)
         expect(contacts.name).toBe('Donlawat')
         expect(contacts.email).toBe('58160391@go.buu.ac.th')
         expect(contacts.phone).toBe('063-792-4546')
         expect(contacts.url).toBe('https://www.facebook.com/got.deelert')
         expect(contacts.notes).toBe('I Need Grade A')
          done()
       })
     })
    })