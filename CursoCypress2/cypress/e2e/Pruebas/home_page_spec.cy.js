// describe('Cuentas', function(){

//   var a =1+1;
//   var b =2;

//   var f = 'v'
  
//   it('Vamos a ver que se sume bien', function(){
//       expect(a==b).to.equal(true)
     
//   })

//   it('Otro Caso', () =>{
//     expect('v').to.equal(f)
//   })

// })

// describe('Formas de encontrar elementos',() =>{

//       it('Buscar elementos en el buscador',()=>{
//           cy.visit('http://automationpractice.com/index.php')
//           cy.get('#search_query_top').type('Por id') //elemento por id
//           cy.get('.search_query.form-control.ac_input').type('Por class') //elemento por class
//           cy.get('[name=search_query]').type('Por name') //elemento por name
//           cy.get('[autocomplete=off]').clear()
//           cy.get('[autocomplete=off]').type('funciona')
          
//       })
// })


describe('Escribir en busquedas varios String',()=>{
    it('Vamos a escribir y limpiar',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[autocomplete=off]',{timeout: 1}).type('1') //se puede incluir parametros en este caso log: false es para que no muestre el mensaje de salida
        .clear({log: true})
        .type('2',{log: true})
        .clear()

        //buscando un elemento dentro de otro elemento
        cy.get('[placeholder=Search]',{withinSubject : document.getElementById('#search_query_top')}).type('anderson')
        cy.get('.login').click()
        cy.get('#email_create').type('calkin1440040@gmail.com')
        cy.get('#SubmitCreate > span').click()

        //Selecionar varias cantidades del elemento a selecionar
        //cy.get('#days').eq(1).should('contain','1') //no fuciona con select solo con lista de valores en especial ul/li

        //con el within puedo espesificar varioas steps a un solo elemento
        cy.get('.required.form-group').within(()=>{
            cy.get('#customer_firstname').type('Anderson medina')
            .clear()
            .type('calkin medina')
            .clear()
        })
    })
})
