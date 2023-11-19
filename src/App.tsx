type Person = {
  name: string;
  age: number;
  gender: string;
};

export default function App() {
  const persons: Person[] = [
    {
      name: "Niajul Hoque",
      age: 25,
      gender: "male",
    },
    {
      name: "Muadh Hoque",
      age: 13,
      gender: "male",
    },
  ];
  return (
    <div>
      {persons.map((person: Person, index: number) => (
        <div key={index}>
          <h1 className="text-red-500">My name is {person.name}</h1>
          <p>
            I am a {person.age} {person.gender}
          </p>
        </div>
      ))}
    </div>
  );
}
