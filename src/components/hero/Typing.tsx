import Typewriter from "typewriter-effect";

const Typing: React.FC = () => {
  return (
    <div className="md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
      <span className="mr-2 text-3xl">I am a</span>
      <span className="text-4xl">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Mobile App Developer",
              "Postman Student Expert",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            cursor: "|",
            cursorClassName:
              "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse",
          }}
        />
      </span>
    </div>
  );
};

export default Typing;
