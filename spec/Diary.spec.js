import Diary from "../src/Diary.js";

describe("Diary", () => {
  let diary;
  const defaultPin = 1234;

  beforeEach(() => {
    diary = new Diary(defaultPin);
  });
  afterEach(() => {
    diary = undefined;
  });

  describe("Unlocking diary", () => {
    it("should be unlocked with correct password", () => {
      // Act
      diary.unlock(defaultPin);

      // Assert
      expect(diary.isLocked()).toBeFalse();
    });

    it("should not be unlocked with incorrect password", () => {
      // Act
      diary.unlock(4321);

      // Assert
      expect(diary.isLocked()).toBeTrue();
    });

    it("should not be unlocked with undefined password", () => {
      // Act
      diary.unlock();

      // Assert
      expect(diary.isLocked()).toBeTrue();
    });

    it("should not be locked by entering pin again", () => {
      // Act
      diary.unlock(defaultPin);
      diary.unlock(defaultPin);

      // Assert
      expect(diary.isLocked()).toBeFalse();
    });
  });

  describe("Locking diary: ", () => {
    it("should be locked by default", () => {
      // Assert
      expect(diary.isLocked()).toBeTrue();
    });

    it("Diary should be able to be locked", () => {
      // Act
      diary.unlock(defaultPin);
      diary.lock();

      // Assert
      expect(diary.isLocked()).toBeTrue();
    });
  });

  describe("Making entries: ", () => {
    it("Should not add new entry if diary is locked", () => {
      // Act
      diary.addEntry("This won't go in");

      // Assert
      expect(diary.entries.length).toBeLessThan(1);
    });
    it("Should increase entry count when entry is added to unlocked diary", () => {
      // Act
      diary.unlock;
      diary.addEntry("First entry!");

      // Assert
      expect(diary.entries.length).toBe(1);
    });
  });

  describe("Viewing entries: ", () => {
    it("Should display no diary entries with empty diary", () => {
      // Act
      // Assert
      expect(diary.getEntries().length).toBe(0);
    });
  });
});
