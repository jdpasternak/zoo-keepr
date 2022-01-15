const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers");
const fs = require("fs");
const { zookeepers } = require("../data/zookeepers.json");

jest.mock("fs");

describe("filterByQuery", () => {
  it("should return zookeeper with bear as favorite animal", () => {
    const startingZookeepers = [
      {
        id: "14",
        name: "Joe",
        age: 34,
        favoriteAnimal: "bear",
      },
      {
        id: "15",
        name: "Carol",
        age: 56,
        favoriteAnimal: "chimpanzee",
      },
    ];

    const filteredResults = filterByQuery(
      { favoriteAnimal: "bear" },
      startingZookeepers
    );
    expect(filteredResults.length).toBe(1);
  });
});

describe("findById", () => {
  it("should return zookeeper with id 14", () => {
    const startingZookeepers = [
      {
        id: "14",
        name: "Joe",
        age: 34,
        favoriteAnimal: "bear",
      },
      {
        id: "15",
        name: "Carol",
        age: 56,
        favoriteAnimal: "chimpanzee",
      },
    ];

    const result = findById("14", startingZookeepers);

    expect(result.name).toBe("Joe");
  });
});

describe("createNewZookeeper", () => {
  it("should create a new zookeeper", () => {
    const zookeeper = createNewZookeeper(
      {
        id: "24",
        name: "Ellen",
        age: 23,
        favoriteAnimal: "Mackaw",
      },
      zookeepers
    );

    expect(zookeeper.name).toBe("Ellen");
    expect(zookeeper.id).toBe("24");
    expect(zookeeper.age).toEqual(23);
    expect(zookeeper.favoriteAnimal).toBe("Mackaw");
  });
});

describe("validateZookeeper", () => {
  it("should validate a zookeeper's favorite animal", () => {
    const zookeeper = {
      id: "24",
      name: "Ellen",
      age: 23,
      favoriteAnimal: "Mackaw",
    };

    const invalidZookeeper = {
      id: "24",
      name: "Ellen",
      age: 23,
    };

    const result1 = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});
