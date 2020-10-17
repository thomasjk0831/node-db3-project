const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findSteps,
}

function find(){
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({id}).first()
}

function add(scheme) {
    return db("schemes")
        .insert(scheme, "id")
        .then(ids => {
            const id = ids[0];

            // all queries return an array,
            // even if it only has one element
            // .first() will extract the first element
            // from the array and return it
            // return db("users").where({ id }).first();

            return findById(id);
        });
}

function update(changes, id){
    return db("schemes").where({ id }).update(changes)
}

function remove(id) {
    return db("schemes").where({ id }).del()
}

// select steps.id, schemes.scheme_name, steps.step_number, steps.instructions
// from schemes
// join steps on schemes.id = steps.scheme_id
// where schemes.id = 2
function findSteps(id) {
    return db("schemes")
    .join ("steps", "schemes.id", "=", "steps.scheme_id")
    .select ("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where ("schemes.id", "=", id)
}
