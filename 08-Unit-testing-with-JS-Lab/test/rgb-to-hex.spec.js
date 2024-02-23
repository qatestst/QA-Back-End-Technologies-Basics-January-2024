import { expect } from "chai";
import { rgbToHexColor } from "../03. RGB to Hex/rgb-to-hex.js";
import { it } from "mocha";

describe("Tests for RGB to HEX function.", ()=>{

        it("Test with negative numbers. Should return \"undefined\"", ()=>{
            //Arrange
            const red = -100;
            const green = -20;
            const blue = -30;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal(undefined);

        });

        it("Test with strings input. Should return \"undefined\"", ()=>{
            //Arrange
            const red = -"hello";
            const green = "hi";
            const blue = "go";
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal(undefined);

        });

        it("Test with numbers bigger than 255. Should return \"undefined\"", ()=>{
            //Arrange
            const red = 400;
            const green = 340;
            const blue = 10000;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal(undefined);

        });

        it("Test with null/undefined/object/array input. Should return \"undefined\"", ()=>{
            //Arrange
            //Act
            const nullResult = rgbToHexColor(null, null, null);
            const undefinedResult = rgbToHexColor(undefined, undefined, undefined);
            const objResult = rgbToHexColor({},{},{});
            const arrResult = rgbToHexColor([],[],[]);
            const emptyInputResult = rgbToHexColor();
            
            //Assert
            expect(nullResult).to.be.equal(undefined);
            expect(undefinedResult).to.be.equal(undefined);
            expect(objResult).to.be.equal(undefined);
            expect(arrResult).to.be.equal(undefined);
            expect(emptyInputResult).to.be.equal(undefined);

        });
        
        it("Test with positive numbers in range 0-255. Should return HEX color", ()=>{
            //Arrange
            const red = 100;
            const green = 20;
            const blue = 30;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal("#64141E");

        });

        it("Test with 0. Should return HEX color", ()=>{
            //Arrange
            const red = 0;
            const green = 0;
            const blue = 0;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal("#000000");

        });

        it("Test with 255. Should return HEX color", ()=>{
            //Arrange
            const red = 255;
            const green = 255;
            const blue = 255;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal("#FFFFFF");

        });

        it("Test - only red value is invalid. Should return \"undefined\"", ()=>{
            //Arrange
            const red = 400;
            const green = 0;
            const blue = 0;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal(undefined);

        });

        it("Test - only green value is invalid. Should return \"undefined\"", ()=>{
            //Arrange
            const red = 0;
            const green = 400;
            const blue = 0;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal(undefined);

        });

        it("Test - only blue value is invalid. Should return \"undefined\"", ()=>{
            //Arrange
            const red = 0;
            const green = 0;
            const blue = 400;
            //Act
            const result = rgbToHexColor(red, green, blue)
            //Assert
            expect(result).to.be.equal(undefined);

        });



})