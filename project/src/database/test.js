const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {

    //inserir dados  na tableLayout
    await saveOrphanage(db, { 
        lat:  "-27.222633", 
        lng : "-49.6155874",
        name:"Lar de Todos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encuentre em situação de risco e/ou vulnerabilidade social. ",
        whatsapp:"49857493769",
        images :[
            "https://images.unsplash.com/photo-1595295403848-3f1d04c4e95e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600752384899-7d3dcbb2428c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas das 18h até 8h ",
        open_on_weekends:"0"

    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="2"')

    //deletar dado da tabelas
    //console.log(db.run("DELETE FROM orphanages WHERE id ='4'"))
})