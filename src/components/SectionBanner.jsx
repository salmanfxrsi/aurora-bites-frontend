/* eslint-disable react/prop-types */
const SectionBanner = ({ image, heading, description }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="bg-[#15151599] container py-[145px] px-[400px] text-center">
        <h1 className="text-[88px] font-bold text-white">{heading}</h1>
        <p className="mt-2 font-semibold text-2xl text-white">{description}</p>
      </div>
    </div>
  );
};
export default SectionBanner;
