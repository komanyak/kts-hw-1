function removeAnagrams(words: any): string[] {
    if (!Array.isArray(words)) {
        throw new Error("INVALID_ARGUMENT");
    }
    
    if (!words.every(word => typeof word === "string")) {
        throw new Error("INVALID_ELEMENT_IN_ARRAY");
    }
    
    let uniqueWords: string[] = []; // Добавлен явный тип
    let seenAnagrams: Record<string, string> = {}; // Явный тип для объекта
    
    for (const word of words) {
        const sorted = word.split('').sort().join('');
        if (seenAnagrams[sorted]) {
            uniqueWords = uniqueWords.filter(w => w !== seenAnagrams[sorted]);
        } else {
            seenAnagrams[sorted] = word;
            uniqueWords.push(word);
        }
    }
    
    return uniqueWords;
}

export default removeAnagrams;
