import React from "react";


const StringManipulation = () => {
  const text = "racecar";


  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();


  return (
    <p>
      Original: {text} <br />
      Reversed: {reversed} <br />
      {isPalindrome ? "It is a palindrome" : "It is not a palindrome"}
    </p>
  );
};


export default StringManipulation;