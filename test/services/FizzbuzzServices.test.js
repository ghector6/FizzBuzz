const Reader = require("../../lib/utils/Reader");
const FizzbuzzService = require("./../../lib/services/FIzzbuzzServices");

describe("Tests for FizzBuzz services", () => {
    test("Test if explorer 3 prints FIZZ", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorers[2]);
        expect(explorerFizz.trick).toBe("FIZZ");
    });

    test("Test 2 to see if it prints Buzz for", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerBuzz = FizzbuzzService.applyValidationInExplorer(explorers[4]);
        expect(explorerBuzz.trick).toBe("BUZZ");
    
    });

    test("Test 3 to see if it prints FIZZBUZZ!!", () => {
        const explorer = Reader.readJsonFile("./explorers.json");
        const explorerfizzBuzz = FizzbuzzService.applyValidationInExplorer(explorer[14]);
        expect(explorerfizzBuzz.trick).toMatch("FIZZBUZZ!!");
    });

    test("Test 4 to see if it prints score as trick", () => {
        const explorer = Reader.readJsonFile("./explorers.json");
        const explorerNormal = FizzbuzzService.applyValidationInExplorer(explorer[0]);
        expect(explorerNormal.trick).toBe(1);
    });

    test("to see if the assigned number by user prints FIZZBUZZ!!", () => {
        const number = FizzbuzzService.applyValidationInNumber(15);
        expect(number).toBe("FIZZBUZZ!!");
    });

    test("to see if the number assignes by user print FIZZ", () => {
        const number = FizzbuzzService.applyValidationInNumber(9);
        expect(number).toBe("FIZZ");
    });

    test("to see if the number assigned by user prints BUZZ", () => {
        const number = FizzbuzzService.applyValidationInNumber(10);
        expect(number).toBe("BUZZ");
    });
});