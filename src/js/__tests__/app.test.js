import { getHealthStatus } from '../app';

describe('getHealthStatus', () => {
    test('should return "healthy" if health > 50', () => {
        const character = {
            name: 'Маг',
            health: 90
        };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "wounded" if 15 <= health <= 50', () => {
        const character = {
            name: 'Воин',
            health: 50
        };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "wounded" if health = 15', () => {
        const character = {
            name: 'Лучник',
            health: 15
        };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "critical" if health < 15', () => {
        const character = {
            name: 'Ниндзя',
            health: 10
        };
        expect(getHealthStatus(character)).toBe('critical');
    });

    test('should handle edge case health=51', () => {
        const character = {
            name: 'Ниндзя',
            health: 51
        };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should handle edge case health=14', () => {
        const character = {
            name: 'Ниндзя',
            health: 14
        };
        expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "critical" if health = 0', () => {
        const character = {
            name: 'Ниндзя',
            health: 0
        };
        expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "Invalid input" if input is not object', () => {
        expect(getHealthStatus(123)).toBe('Invalid input');
        expect(getHealthStatus("abc")).toBe('Invalid input');
        expect(getHealthStatus(null)).toBe('Invalid input');
        expect(getHealthStatus(undefined)).toBe('Invalid input');
        expect(getHealthStatus([])).toBe('Invalid input');
    });

    test('should return "Invalid input" if object has not health property', () => {
        const character = {
            name: 'Маг'
        };       
        expect(getHealthStatus({character})).toBe('Invalid input');
    });

    test('should return "Invalid input" if object has not name property', () => {
        const character = {
            health: 10
        };    
        expect(getHealthStatus(character)).toBe('Invalid input');
    });

    test('should return "Invalid input" if object has not number health property', () => {
        const character = {
            name: 'Маг',
            health: "abc"
        };    
        expect(getHealthStatus(character)).toBe('Invalid input');
    });

    test('should return "Invalid input" if object has not string name property', () => {
        const character = {
            name: 123,
            health: 10
        };
        expect(getHealthStatus(character)).toBe('Invalid input');
    });
});
