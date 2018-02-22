// Lab3 - Paula Akemi Hara

/*
makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/
function makeAbba(str1, str2){
    return str1+str2+str2+str1;
}

/*
endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/
function endsLy(str){
    if(str.match(/ly$/) == null){
        return false;
    }
    return true;
}

/*
firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/
function firstHalf(str){
    let size = str.length;
    
    return str.slice(0, size/2);
}

/*
right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"
*/
function right2(str){
    let size = str.length;
    let end = str.slice(size-2, size);
    let begin = str.slice(0, size-2);
    
    return end+begin;
}

/*
conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/
function conCat(str1, str2){
    let str1Size = str1.length;
    let str2Size = str2.length;
    
    let lastLetterStr1 = str1.slice(-1);
    let firstLetterStr2 = str2.slice(0, 1);
    
    if(lastLetterStr1 == firstLetterStr2){
        return str1.slice(0, str1Size-1) + str2;
    }else{
        return str1+str2;
    }
}

/*
frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/
function frontAgain(str){
    let size = str.length;
    
    let firstLetters = str.slice(0, 2);
    let lastLetters = str.slice(size-2, size);
    
    if(firstLetters == lastLetters){
        return true;
    }else{
        return false;
    }
}

/*
deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/
function deFront(str){
    let finalStr = '';
    
    let firstLetter = str.slice(0, 1);
    let secondLetter = str.slice(1, 2);
    let remainingLetters = str.slice(2, str.length);
    
    if(firstLetter.search(/[aA]/) > -1){
        finalStr += firstLetter;
    }if(secondLetter.search(/[bB]/) > -1){
        finalStr += secondLetter;
    }
    
    finalStr += remainingLetters;
    
    return finalStr;
}

/*
withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*/
function withoutX2(str){
    let finalStr = '';
    
    let firstLetter = str.slice(0, 1);
    let secondLetter = str.slice(1, 2);
    let remainingLetters = str.slice(2, str.length);
    
    if(firstLetter.search(/[xX]/) == -1){
        finalStr += firstLetter;
    }if(secondLetter.search(/[xX]/) == -1){
        finalStr += secondLetter;
    }
    
    finalStr += remainingLetters;
    
    return finalStr;
}

/*
lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/
function lastChars(str1, str2){
    let firstLetter;
    let lastLetter;
    
    if(str1.length == 0){
        firstLetter = '@';
    }else{
        firstLetter = str1.slice(0, 1);
    }
    
    if(str2.length == 0){
        lastLetter = '@';
    }else{
        lastLetter = str2.slice(-1);
    }
    
    return firstLetter+lastLetter;
}

/*
middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/
function middleTwo(str){
    let middle = str.length/2;
    
    let finalStr = str.slice(middle-1, middle+1);
    
    return finalStr;
}