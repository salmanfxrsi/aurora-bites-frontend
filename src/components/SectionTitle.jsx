const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center w-[450px] mb-12 mx-auto">
      <h3 className="text-[#D99904] text-xl mb-4">{subtitle}</h3>
      <h1 className="border-y-4 py-5 text-[2.5rem]">{title}</h1>
    </div>
  );
};
export default SectionTitle;
