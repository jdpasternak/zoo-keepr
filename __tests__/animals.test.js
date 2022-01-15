const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../lib/animals");
const { animals } = require("../data/animals.json");

jest.mock("fs");

describe("createNewAnimal", () => {
  it("should create an animal object", () => {
    const animal = createNewAnimal({ name: "Rusty", id: "123ff3e" }, animals);

    expect(animal.name).toBe("Rusty");
    expect(animal.id).toBe("123ff3e");
  });
});

describe("filterByQuery", () => {
  it("should return animals that are gorillas", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];

    const updatedAnimals = filterByQuery(
      {
        species: "gorilla",
      },
      startingAnimals
    );

    expect(updatedAnimals.length).toEqual(1);
  });
});

describe("findById", () => {
  it("should return the animal with id 3", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];

    const result = findById("3", startingAnimals);

    expect(result.name).toBe("Erica");
  });
});

describe("validateAnimal", () => {
  it("should validate an aniaml object's personality traits", () => {
    const animal = {
      id: "4",
      name: "Rusty",
      species: "orangutan",
      diet: "omnivore",
      personalityTraits: ["calm", "playful"],
    };

    const invalidAnimal = {
      id: "3",
      name: "Rusty",
      species: "orangutan",
      diet: "omnivore",
    };

    const result1 = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});
