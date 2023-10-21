import Footer from "../components/footer";
import Header from "../components/header";
import { BookingList } from "../data";
import { SearchForm } from "../components/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Bookings = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 0, once: true });
  }, []);
  return (
    <main className=" pt-[100px] px-[24px] pb-[120px]">
      <Header page={"bookings"} />
      <SearchForm />
      <section data-aos="zoom-out">
        <h2 className="text-[#142A37] text-base font-semibold mb-4">
          Popular Restaurant
        </h2>
        <article className="grid grid-cols-2 gap-5 flex-wrap">
          {BookingList.map((restaurant) => {
            const { id, name, image, open } = restaurant;
            return (
              <div key={id}>
                <img src={image} alt={name} className="mb-2" />
                <div className="flex justify-between pb-2">
                  <div className="">
                    <h5 className="text-[#142A37] text-xs font-semibold">
                      {name}
                    </h5>
                    <p className="text-[10px] opacity-50 font-normal">{open}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                  >
                    <path
                      d="M0.833333 0H14.1667C14.6269 0 15 0.387889 15 0.866365V17.5667C15 17.806 14.8134 18 14.5833 18C14.5248 18 14.467 17.987 14.4136 17.9623L7.5 14.7553L0.586442 17.9623C0.376292 18.0598 0.129925 17.9617 0.0361584 17.7433C0.0123167 17.6876 0 17.6275 0 17.5667V0.866365C0 0.387889 0.3731 0 0.833333 0ZM7.5 9.9632L9.94908 11.3018L9.48133 8.46656L11.4628 6.45869L8.72458 6.04503L7.5 3.46546L6.27542 6.04503L3.53727 6.45869L5.51863 8.46656L5.05089 11.3018L7.5 9.9632Z"
                      fill="#B0AAAA"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </article>
      </section>
      <Footer type={"bookings"} />
    </main>
  );
};
export default Bookings;
