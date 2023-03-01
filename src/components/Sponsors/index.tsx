import { useState, useEffect } from "react";
import { getDataFromTable } from "../../services/config";
import type { ISponsor } from "../../interfaces/sponsor";

export default function Sponsors() {
  const [sponsors, setSponsors] = useState<ISponsor[]>([]);

  const fetchSponsors = async () => {
    const data = await getDataFromTable("sponsors");
    setSponsors(data);
  };

  useEffect(() => {
    fetchSponsors();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="md:w-3/5">
        <h2 className="sm:mt-16 md:text-7xl lg:text-6xl font-extrabold text-center">
          Nuestros Sponsors 🤝
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-28 items-center gap-24">
        {sponsors.map((sponsor: ISponsor) => (
          <div key={sponsor.id}>
            <img width={300} src={sponsor.src} alt={sponsor.alt} />
          </div>
        ))}
      </div>
      <a
        target="_blank"
        className="mt-28 text-lg bg-yellow-300 border-solid border-black border-2 p-3 font-bold rounded-full w-44 block mx-auto text-center"
        href="https://linderhassinger00.typeform.com/to/F64EamRc"
      >
        Sé un sponsor
      </a>
    </div>
  );
}
