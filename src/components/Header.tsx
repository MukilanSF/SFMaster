import React, { useEffect, useState } from "react";

type HeaderProps = {
  onLogin: () => void;
};

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
  "Knowledge is power. – Francis Bacon",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine de Saint-Exupery",
  "Ruby is rubbish! PHP is phpantastic! – Nikita Popov",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "Fix the cause, not the symptom. – Steve Maguire",
  "Optimism is an occupational hazard of programming: feedback is the treatment. – Kent Beck",
  "When to use iterative development? You should use iterative development only on projects that you want to succeed. – Martin Fowler",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "Make it work, make it right, make it fast. – Kent Beck",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "The best error message is the one that never shows up. – Thomas Fuchs",
  "Deleted code is debugged code. – Jeff Sickel",
  "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
  "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Truth can only be found in one place: the code. – Robert C. Martin",
  "Testing leads to failure, and failure leads to understanding. – Burt Rutan",
  "The function of good software is to make the complex appear to be simple. – Grady Booch",
  "The best way to get a project done faster is to start sooner. – Jim Highsmith",
  "The most important property of a program is whether it accomplishes the intention of its user. – C.A.R. Hoare",
  "Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman",
  "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
  "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
  "It’s not a bug – it’s an undocumented feature. – Anonymous",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
  "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. – Seymour Cray",
  "To iterate is human, to recurse divine. – L. Peter Deutsch",
  "Weeks of coding can save you hours of planning. – Anonymous",
  "Good code is its own best documentation. – Steve McConnell",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit. – Anonymous",
  "If you think your users are idiots, only idiots will use it. – Linus Torvalds",
  "Controlling complexity is the essence of computer programming. – Brian Kernighan",
  "The computer was born to solve problems that did not exist before. – Bill Gates",
  "Simplicity is prerequisite for reliability. – Edsger Dijkstra",
  "The sooner you start to code, the longer the program will take. – Roy Carlson",
  "Don’t comment bad code—rewrite it. – Brian Kernighan",
  "Programming is not easy like Sunday morning, it is silent poetry. – Waseem Latif",
  "A language that doesn’t affect the way you think about programming is not worth knowing. – Alan Perlis",
  "The best performance improvement is the transition from the nonworking state to the working state. – John Ousterhout",
  "One man’s crappy software is another man’s full-time job. – Jessica Gaston",
  "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements. – Brian Kernighan",
  "The hardest part of design is keeping features out. – Donald Norman"
];

export default function Header({ onLogin }: HeaderProps) {
  const [quote, setQuote] = useState<string>("");
  const [sfUsername, setSfUsername] = useState<string | null>(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    // Check for Salesforce username in localStorage
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("sf_username");
      setSfUsername(username);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("sf_access_token");
      localStorage.removeItem("sf_instance_url");
      localStorage.removeItem("sf_username");
      setSfUsername(null);
      window.location.reload();
    }
  };

  return (
    <header className="flex flex-col items-center justify-between p-4 border-b bg-white shadow-sm">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">SFMaster</h1>
        {sfUsername ? (
          <span className="flex items-center gap-2 text-green-700 font-semibold">
            Login Successful: {sfUsername}
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
            >
              Logout
            </button>
          </span>
        ) : (
          <button
            onClick={onLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          >
            Login to Salesforce
          </button>
        )}
      </div>
      <div className="mt-2 text-center text-sm text-gray-600 italic min-h-[24px]">
        {quote}
      </div>
    </header>
  );
}
