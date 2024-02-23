import { expect } from "chai";
import { isOddOrEven } from "./isOddOrEven.js";

describe("isOddOrEven tests", () => {

    it("should return undefined when pass non string value as input", () => {
        //Arrange
        const inputValueNumber =15;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        const inputValueFloat = 10.10;

        //Act
        const resultNumber = isOddOrEven(inputValueNumber);
        const resultUndefined = isOddOrEven(inputValueUndefined);
        const resultNull = isOddOrEven(inputValueNull);
        const resultFloat = isOddOrEven(inputValueFloat);


        //Assert
        expect(resultNumber).to.be.undefined;
        //expect(resultNumber).to.be.equal(undefined); /the same as above row:  expect(resultNumber).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultFloat).to.be.undefined;
        

    })

    it("should return even when the input string length is even", () => {
        //Arrange
        const evenStringLength = "1234"

        //Act
        const resultEvenLength = isOddOrEven(evenStringLength);
        //Assert
        expect(resultEvenLength).to.be.equal("even");

    })

    it("should return odd when the input string length is odd", () => {
        //Arrange
        const oddStringLength = "123"

        //Act
        const resultOddLength = isOddOrEven(oddStringLength);
        //Assert
        expect(resultOddLength).to.be.equal("odd");

    })

    it("should return even when the input string length is zero", () => {
        //Arrange
        const stringZeroLength = "";

        //Act
        const resultZeroLength = isOddOrEven(stringZeroLength);
        //Assert
        expect(resultZeroLength).to.be.equal("even");

    })

    
})