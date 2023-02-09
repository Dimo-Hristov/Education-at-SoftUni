let { Repository } = require("./solution.js");
let { expect } = require('chai')

describe("Solution testing", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    //Initialize the repository
    let repository = new Repository(properties);
    // Add two entities
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    describe('checking the props', function () {
        it("Should add entities in repository and return the corrent id", function () {
            const id1 = repository.add(entity);
            const id2 = repository.add(entity);

            expect(id1).to.equal(0);
            expect(id2).to.equal(1)
        });

        it('should retrieve entities by id', () => {
            repository.add(entity);
            repository.add(entity);

            const retrievedEntity = repository.getId(0);
            const retrievedEntity2 = repository.getId(1);

            expect(retrievedEntity).to.deep.equal(entity);
            expect(retrievedEntity2).to.deep.equal(entity)
        })

        it('Should update entities in the repository', () => {
            repository.add(entity);

            const updatedEntity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.update(0, updatedEntity);

            const retrievedEntity = repository.getId(0);

            expect(retrievedEntity).to.deep.equal(updatedEntity)

        })

        describe('check the errors that should be thrown with wrong entity added', () => {
            it('should throw error then adding entity with wrong name', () => {
                const wrongEntityName = {
                    name: null,
                    age: 22,
                    birthday: new Date(1998, 0, 7)

                }

                expect(() => repository.add(wrongEntityName).to.throw
                    (Error, /Property name is not of correct type/))

                it('should throw error then adding entity with wrong age', () => {

                    const wrongEntityAge = {
                        name: 'Maria',
                        age: {},
                        birthday: new Date(1998, 0, 7)

                    }
                    expect(() => repository.add(wrongEntityAge).to.throw
                        (Error, /Property age is not of correct type/))
                })

                it('should throw error then adding entity with wrong birthday', () => {
                    const wrongEntityDate = {
                        name: 'Maria',
                        age: 22,
                        birthday: 1991

                    }

                    expect(() => repository.add(wrongEntityDate).to.throw
                        (Error, /Property birthday is not of correct type/))
                })
            })


        })

        describe('Check if deletes entities from repository', () => {
            it('Should delete the this entity and remain the second', () => {
                repository.add(entity);
                repository.add(entity);

                repository.del(0);

                expect(repository.count).to.equal(6)
            })
        })

        it('Should throw an error then try to delete entity with invalid id', () => {
            expect(() => repository.del(165).to.throw(Error, /Entity with id: 165 does not exist/))
        })


    });
    // TODO: …
});
