import { DiCss3, DiHtml5, DiJavascript1, DiRuby } from 'react-icons/di';

const Skills = () => {
  return (
    <div>
      <div className="flex justify-center text-gray-900">
        <h1 className="text-2xl font-bold">Front-end</h1>
        <DiHtml5 size="3rem" /> <span> HTML </span>
        <DiJavascript1 size="3rem"/> <span> JavaScript </span>
        <DiCss3 size="3rem" className="text-sky-500" /> <span> CSS </span>
        <h1 className="text-2xl font-bold">Back-end</h1>
        <DiRuby size="3rem" className="text-red-500"/> <span className="text-red-500"> Ruby </span>
      </div>
    </div>
  );
};

export default Skills;
