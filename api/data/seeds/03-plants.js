exports.seed = function(knex, Promise) {
    return knex('plants').insert([

        { nickname: 'Alexis' , species: 'Amur Honeysuckle', h2oFrequency: 3, user_id: 3 },
        { nickname: 'David' , species: 'Cypress Spruge', h2oFrequency: 6, user_id: 2 },
        { nickname: 'Stevie', species: 'Aloe', h2oFrequency: 4, user_id: 1 },
        { nickname: 'Theodore', species: 'Aloe', h2oFrequency: 4, user_id: 1 },
        { nickname: 'Mutt', species: 'Aloe', h2oFrequency: 4, user_id: 1 },
        { nickname: 'Twyla', species: 'Aloe', h2oFrequency: 4, user_id: 1 }
        
    ])
}
