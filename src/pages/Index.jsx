import { useState } from 'react';
import { Button } from "@/components/ui/button";

const catFacts = [
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "A group of cats is called a 'clowder'.",
  "Cats spend 70% of their lives sleeping.",
  "A cat's hearing is much more sensitive than humans and dogs.",
  "Cats have a third eyelid called the 'haw' that helps protect their eyes.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        alt="Cute cat"
        className="mx-auto object-cover w-full max-w-md h-64 rounded-lg shadow-md mb-6"
      />
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Did You Know?</h2>
        <p className="text-lg mb-4">{catFacts[factIndex]}</p>
        <Button onClick={nextFact} className="w-full">Next Fact</Button>
      </div>
    </div>
  );
};

export default Index;
