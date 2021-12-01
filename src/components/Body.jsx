import Card from "./Card";
export default function body() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
            B.Sc(PCAM) Sem-1
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Resources and PYQ's
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base animate-pulse">
            Disclaimer: This Page is maintained by students and is not related
            to college officials in any manner and should not be treated as
            such.
          </p>
        </div>
        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-10">
          <Card subject="Physics" description="Sem-1 Notes for PCAM 1st Year" />
          <Card
            subject="Computer"
            description="Sem-1 Notes for PCAM 1st Year"
          />
          <Card subject="Maths" description="Sem-1 Notes for PCAM 1st Year" />
        </div>
      </div>
    </section>
  );
}
