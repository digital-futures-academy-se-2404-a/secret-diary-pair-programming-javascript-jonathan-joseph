import Diary from "../src/Diary.js";

describe('Diary', () => { 

    it('should be locked by default', () => {
        // Arrange
        const diary = new Diary();

        // Assert
        expect(diary.isLocked()).toBeTrue();
    });
  
    it('should be unlocked with correct password', () => {
        // Arrange
        const diary = new Diary(1234);

        // Act
        diary.unlock(1234);

        // Assert
        expect(diary.isLocked()).toBeFalse();
    });
  
    it('should not be unlocked with incorrect password', () => {
        // Arrange
        const diary = new Diary(1234);

        // Act
        diary.unlock(4321);

        // Assert
        expect(diary.isLocked()).toBeTrue();
    });

    it('should not be unlocked with undefined password', () => {
        // Arrange
        const diary = new Diary(1234);

        // Act
        diary.unlock();

        // Assert
        expect(diary.isLocked()).toBeTrue();
    });
  
    it('should not be locked by entering pin again', () => {
        // Arrange
        const diary = new Diary(1234);

        // Act
        diary.unlock(1234);
        diary.unlock(1234);

        // Assert
        expect(diary.isLocked()).toBeFalse();
    });

});