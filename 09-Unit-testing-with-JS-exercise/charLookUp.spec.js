import { lookupChar } from "./charLookUp.js";
import { expect } from "chai";

describe("Testing function lookupChar - return index of a Char in a String", ()=>{

    it("Should return undefined when first parameter is from incorrect and second is correct", ()=>{
        //Arrange
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;
        //Act

        const resultUndefined = lookupChar(incorrectFirstParam, correctSecondParam);

        //Assert
        expect(resultUndefined).to.be.undefined;

    })

    it("Should return undefined when first parameter is from correct and second is incorrect", ()=>{
        //Arrange
        const correctFirstParam = "some string here";
        const incorrectSecondParam = 10.10;
        //Act

        const resultUndefined = lookupChar(correctFirstParam, incorrectSecondParam);

        //Assert
        expect(resultUndefined).to.be.undefined;

    })

    it("Should return undefined when first  parameter is incorrect and second is incorrect", ()=>{
        //Arrange
        const incorrectFirstParam = 123;
        const incorrectSecondParam = 10.10;
        //Act

        const resultUndefined = lookupChar(incorrectFirstParam, incorrectSecondParam);

        //Assert
        expect(resultUndefined).to.be.undefined;

    })

    it("Should return Incorrect index when first parameter is correct and second is bigger number than string length ", ()=>{
        //Arrange
        const correctFirstParam = "some string here";
        const incorrectSecondParam = 255;
        //Act

        const resultIncorectIndex = lookupChar(correctFirstParam, incorrectSecondParam);

        //Assert
        expect(resultIncorectIndex).to.be.equal("Incorrect index");

    })

    it("Should return Incorrect index when first parameter is correct and second is smaller number than zero string index ", ()=>{
        //Arrange
        const correctFirstParam = "some string here";
        const incorrectSecondParam = -255;
        //Act

        const resultIncorectIndex = lookupChar(correctFirstParam, incorrectSecondParam);

        //Assert
        expect(resultIncorectIndex).to.be.equal("Incorrect index");

    })

    it("Should return correct Char when correct first and second parameters are correct", ()=>{
        //Arrange
        const correctFirstParam = "some string here";
        const correctSecondParam = 0;
        //Act

        const resultZerotIndex = lookupChar(correctFirstParam, correctSecondParam);

        //Assert
        expect(resultZerotIndex).to.be.equal("s");

    })

    it("Should return correct Char when correct first and second parameters are correct", ()=>{
        //Arrange
        const correctFirstParam = "some string here";
        const correctSecondParam = 15;
        //Act

        const resultZerotIndex = lookupChar(correctFirstParam, correctSecondParam);

        //Assert
        expect(resultZerotIndex).to.be.equal("e");

    })




})

