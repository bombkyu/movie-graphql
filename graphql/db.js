export const People = [
    {
        id: 0,
        name: "nico",
        age: 18,
        gender: "male"
    },
    {
        id: 1,
        name: "Kang",
        age: 25,
        gender: "male"
    },
    {
        id: 2,
        name: "Lynn",
        age: 28,
        gender: "female"
    },
    {
        id: 3,
        name: "BK",
        age: 28,
        gender: "male"
    }
]

export const getById = (id) => {
    const fillteredPeople = People.filter(person => id === person.id);
    return fillteredPeople[0];
}