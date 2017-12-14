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
              {id:13,name:'yanika',email:'58160381@go.buu.ac.th',phone: '086-840-0609',url:'https://www.facebook.com/yanika.boonprasert' ,notes:'YanikaHAHA'}
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


        
       let contact2 = contact[1]
       expect(contact2.id).toBe(13)
       expect(contact2.name).toBe('yanika')
       expect(contact2.email).toBe('58160381@go.buu.ac.th')
       expect(contact2.phone).toBe('086-840-0609')
       expect(contact2.url).toBe('https://www.facebook.com/yanika.boonprasert')
       expect(contact2.notes).toBe('YanikaHAHA')
       


          done()
       })
     })
    })

    describe('PUT /contacts',()=>{
      it('put id12 replace it id4 get Success',(done)=>{
        request(router).put('/contacts/1')
        .send({id:12,name:"Donlawat",email:'58160391@go.buu.ac.th',phone: '063-792-4546',url:'https://www.facebook.com/got.deelert' ,notes:'I Need Grade A' })
        .expect(200)
        .then((res)=>{
          request(router).get('/contacts/1')
          .then((res)=>{
            let contact = res.body
            expect(contact).toBeDefined()
            expect(contact.id).toBe(12)
            expect(contact.name).toBe("Donlawat")
            expect(contact.email).toBe('58160391@go.buu.ac.th')
            expect(contact.phone).toBe('063-792-4546')
            expect(contact.url).toBe('https://www.facebook.com/got.deelert')
            expect(contact.notes).toBe('I Need Grade A')
          })
          done()
        })
      })
    })
    

    describe('DELETE /contacts',()=>{
      it('Delete id:4 must show Success',(done)=>{
      request(router).delete('/contacts/4')
      .expect(204)
      .then((res)=>{
      request(router).get('/contacts/4')
      .then((res)=>{
        let contact = res.body
        expect(contact).toBeDefined()
        expect(contact.id).not.toBe(4)
      })
        done()
      })
    })
  })