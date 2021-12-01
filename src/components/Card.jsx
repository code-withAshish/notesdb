export default function card(props) {
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full h-60 px-8 py-6 border-l-2 border-gray-200 border-opacity-60 rounded-xl shadow-2xl bg-gradient-to-br from-rose-700 to-pink-500 transform hover:-translate-y-4 hover:scale-110 duration-500">
      <h2 className="text-lg sm:text-3xl text-white font-medium title-font mb-2 text-center">
        {props.subject}
      </h2>
      <p className="leading-relaxed text-base mb-4 text-center text-rose-300">
        {props.description}
      </p>
    </div>
  );
}
