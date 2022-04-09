exports.seed = function(knex) {
    return knex('users').insert([

        { username: 'Moira', password: '$2a$08$.ffU.RMO4PYMs7a8QkqfR./yUS4GpKO9VO0SBQHD9MMA4cnC5FeWO', phoneNumber: '5551234567' },
        { username: 'Johnny', password: '$2a$08$ji.U47BI.b/gkUJ0hhr71ein7qmOvumgz2f8Djt.9EiZMuLN3QUEe', phoneNumber: '5557654321' },
        { username: 'Roland', password: '$2a$08$dCZMyZyqkNP0/R48RUORve3cpsdaY2BWR.kNBjj2qNtZOoyJFj.ZG', phoneNumber: '8001234567' }
        
    ])
}
