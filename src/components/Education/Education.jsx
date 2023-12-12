import React from "react";

const Education = () => {
  const education = [
    {
      id: "1",
      edu: "Sabiha Mehzabin Oishee, started her schooling in the Torch International School, in Mirpur Cantonment. She moved to many placed in Bangladesh, and around the globe for her father’s job and her education. She graduated ‘valedictorian’ from High School, and enrolled in the Law Department of North South University. She then received the DLA Piper Global Scholarship in the year 2019, a scholarship that is given to the top 5% Law students around the world. She was the first women in Bangladesh to receive this scholarship. ",
    },
    {
      id: "2",
      edu: "The same year she founded her Non-Profit Organization, Bangladesh Forum for Legal and Humanitarian Affairs, to enable access to justice in Bangladesh. She through her forum has educated more than 10,000 people around the globe. She was involved in Research during her time at North South University. She led the team of researchers in the writing of the book, The Constitution of Bangladesh: People, Politics and Judicial Intervention by Barrister Arafat Hosen Khan. She after graduating from North South University with a great distinction in both LLB and LLM, completed her PGF from, University of Oxford. ",
    },
  ];
  return (
    <div id="education" className="container mx-auto px-4 lg:px-0 py-24">
      <h2 className="text-center underline text-5xl font-bold text-[#000088]">
        Education
      </h2>

      <div className="space-y-5 mt-8">
        {education.map((item) => (
          <div className="p-4 border border-[#000088] rounded-lg bg-[#F6F7FC]" key={item.id}>
            <p className="text-[18px]">{item.edu}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
