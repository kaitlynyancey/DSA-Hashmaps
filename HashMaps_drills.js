const HashMap = require('./hashmap')
const HashMapChain = require('./hasmap_chaining')

function main() {
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;
    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    console.log(lotr)
    console.log(lotr.get('Maiar'))
    console.log(lotr.get('Hobbit'))
    // Only the most recent values for Maiar and Hobbit were added to the hash table
    // Duplicate keys get overwritten
    // The capacity of the hash table is 24 because a resize was triggered 1x when the load ratio exceeded 0.5. This multiplied the original capacity of 8 by 3 (the size ratio)
}
//main()

// 2. What Does This Program Do
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
//The function creates a new Hash Table called "map1"
//It adds key value pair for str1 (Hello World, 10) to map1
//It adds key value pair for str2 (Hello World, 20) to map1, overwriting (Hello World, 10) 
//Then a new Hash Table called map2 is created
//str3 is created with str1 value
//str4 is created with str2 value
//It adds key value pair for str3 (Hello World, 20) to map2
//It adds key value pair for str4 (Hello World, 10) to map2, overwriting (Hello World, 20)
//It will log the value of the 'Hello World' index for both map1 and map2
//Output for first log is "20"
//Output for second log is "10"

// 3. Demonstrate understanding of Hash Maps
//1) The hash map will have a size of 11 with 9 keys mapped to addresses and 2 open addresses
//2)The hash map will have a size of 9 with 7 addresses being used (2 addresses have a chain with 1 additional key). There are 2 empty addresses

// 4. Remove duplicates
function removeDuplicates(str) {
    str = str.toLowerCase()
    const removeMap = new HashMap();
    removeMap.MAX_LOAD_RATIO = 0.5;
    removeMap.SIZE_RATIO = 3;

    for (let i = str.length - 1; i >= 0; i--) {
        removeMap.set(str[i], i);
    }
    let newString = '';
    let newArr = [];
    removeMap._hashTable.forEach(key => {
        let p = key.value
        newArr[p] = key.key
    })
    for (let i = 0; i < newArr.length; i++){
        if(newArr[i]) {
            newString += newArr[i]
        }
    }
    return newString
}

//console.log(removeDuplicates('google'))

// 5. Any permutation a palindrome
function isPalindrome(str) {
    str = str.toLowerCase();
    //find midpoint position of the string length, rounding up if str.length is odd
    let midStr = Math.ceil(str.length / 2)
    const newMap = new HashMap();
    //add each value of string to hashmap
    for (let i = 0; i < str.length; i++) {
        newMap.set(str[i])
    }
    //check if the length of the Hash Map equals the midpoint of str.length. 
    //The Hash Map should remove half of the letters (duplicates) if input is a palidrome
    if (newMap.length === midStr){
        return true
    }
    else {
        return false
    }
}

//console.log(isPalindrome('acecarr'))

// 6. Anagram Grouping
function anagramGroup(arr) {
    const newHash = new HashMap();
    let results = [];
    arr.forEach(item => {
        let sorted = item.split('').sort().join('');
        console.log(sorted)
        try {
            let index = newHash.get(sorted)
            results[index].push(item);
        }
        
        catch(error){
            newHash.set(sorted, results.length);
            results.push([item]);
        }
            
        
    })
    return results
}
//console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

// 7. Seperate Chaining

function chaining() {
    let lotr = new HashMapChain();
    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    console.log(lotr)
}

chaining();
