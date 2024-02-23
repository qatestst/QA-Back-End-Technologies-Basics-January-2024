import { lookupChar } from "./charLookUp.js";
import { expect } from "chai";
import { assert } from "chai";

// Generated by CodiumAI

describe('lookupChar', () => {

    // Returns the character at the specified index of the given string.
    it('should return the character at the specified index when the arguments are valid', () => {
        // Arrange
        const string = "Hello";
        const index = 2;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, "l");
    });

    // Returns undefined if the first argument is not a string or the second argument is not an integer.
    it('should return undefined when the first argument is not a string', () => {
        // Arrange
        const string = 123;
        const index = 2;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, undefined);
    });

    // Returns undefined if the first argument is not a string or the second argument is not an integer.
    it('should return undefined when the second argument is not an integer', () => {
        // Arrange
        const string = "Hello";
        const index = 2.5;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, undefined);
    });

    // Returns "Incorrect index" if the index is negative or greater than or equal to the length of the string.
    it('should return "Incorrect index" when the index is negative', () => {
        // Arrange
        const string = "Hello";
        const index = -1;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, "Incorrect index");
    });

    // Returns "Incorrect index" if the index is negative or greater than or equal to the length of the string.
    it('should return "Incorrect index" when the index is greater than or equal to the length of the string', () => {
        // Arrange
        const string = "Hello";
        const index = 5;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, "Incorrect index");
    });

    // Returns "Incorrect index" if the given string is empty and the index is not 0.
    it('should return "Incorrect index" when the given string is empty and the index is not 0', () => {
        // Arrange
        const string = "";
        const index = 1;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, "Incorrect index");
    });

    // Returns undefined if the first argument is null.
    it('should return undefined when the first argument is null', () => {
        // Arrange
        const string = null;
        const index = 2;
    
        // Act
        const result = lookupChar(string, index);
    
        // Assert
        assert.equal(result, undefined);
    });

    // Returns undefined if the second argument is null.
    it('should return undefined when the second argument is null', () => {
      // Arrange
      const string = "Hello";
      const index = null;

      // Act
      const result = lookupChar(string, index);

      // Assert
      assert.equal(result, undefined);
    });

    // Returns undefined if the first argument is undefined.
    it('should return undefined when the first argument is undefined', () => {
      // Arrange
      const string = undefined;
      const index = 2;

      // Act
      const result = lookupChar(string, index);

      // Assert
      assert.equal(result, undefined);
    });

    // Returns undefined if the second argument is undefined.
    it('should return undefined when the second argument is undefined', () => {
      // Arrange
      const string = "Hello";
      const index = undefined;

      // Act
      const result = lookupChar(string, index);

      // Assert
      assert.equal(result, undefined);
    });

    // Returns undefined if the first argument is a number.
    it('should return undefined when the first argument is a number', () => {
      // Arrange
      const string = 123;
      const index = 2;

      // Act
      const result = lookupChar(string, index);

      // Assert
      assert.equal(result, undefined);
    });

    // Returns undefined if the second argument is a string.
    it('should return undefined when the second argument is a string', () => {
      // Arrange
      const string = "Hello";
      const index = "2";

      // Act
      const result = lookupChar(string, index);

      // Assert
      assert.equal(result, undefined);
    });

    // Returns undefined if the second argument is a floating point number.
    it('should return undefined when the second argument is a floating point number', () => {
      // Arrange
      const string = "Hello";
      const index = 2.5;

      // Act
      const result = lookupChar(string, index);

      // Assert
      assert.equal(result, undefined);
    });

    // Returns the last character of the string if the index is equal to the length of the string minus 1.
    it('should return the last character of the string when the index is equal to the length of the string minus 1', () => {
        // Arrange
        const string = "Hello";
        const index = string.length - 1;

        // Act
        const result = lookupChar(string, index);

        // Assert
        assert.equal(result, "o");
    });

    // Returns the first character of the string if the index is 0.
    it('should return the first character of the string when the index is 0', () => {
        // Arrange
        const string = "Hello";
        const index = 0;

        // Act
        const result = lookupChar(string, index);

        // Assert
        assert.equal(result, "H");
    });

    // Returns undefined if the second argument is a negative integer.
    it('should return undefined when the second argument is a negative integer', () => {
        // Arrange
        const string = "Hello";
        const index = -1;

        // Act
        const result = lookupChar(string, index);

        // Assert
        assert.equal(result, "Incorrect index");
    });
});