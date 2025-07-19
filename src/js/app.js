export function getHealthStatus(character) {
    let isInvalidCharacter = (
        !character ||
        typeof character !== 'object' ||
        typeof character.health !== 'number' ||
        typeof character.name !== 'string'
    );

    if (isInvalidCharacter) {
        return 'Invalid input';
    }

    if (character.health > 50) {
        return 'healthy';
    } else if (character.health >= 15 && character.health <= 50) {
        return 'wounded';
    }

    return 'critical';
}
