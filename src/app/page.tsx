import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Image from "next/image";
export default function Page() {
  return (
    <>
      {/* Add a video background */}
      <Hero />
      {/* Add a main section */}
      <main>
        <div className="flex justify-center items-center flex-col gap-4 py-10">
          <p className=" font-light">Welcome to</p>
          <h1 className=" text-5xl font-bold ">CCOMMERCE</h1>
        </div>
        <div className="flex gap-6 overflow-x-auto h-[500px]">
          <Image
            src={"/h1.avif"}
            alt={""}
            height={500}
            width={400}
            className=" rounded-lg "
          />
          <Image
            src={"/h2.avif"}
            alt={""}
            height={500}
            width={400}
            className=" rounded-lg "
          />
          <Image
            src={"/h3.avif"}
            alt={""}
            height={500}
            width={400}
            className=" rounded-lg "
          />
          <Image
            src={"/h4.avif"}
            alt={""}
            height={500}
            width={400}
            className=" rounded-lg "
          />
          <Image
            src={"/h5.avif"}
            alt={""}
            height={500}
            width={400}
            className=" rounded-lg "
          />
        </div>
      </main>
      <section className=" my-10">
        <main>
          <div>
            <div className="flex justify-center items-center text-center flex-col gap-4 py-10 text-neutral-800">
              <h1 className=" text-3xl md:text-5xl font-bold uppercase  ">
                Elevating Your Style Game
              </h1>
              <p className=" md:w-1/2 md:px-10 px-6 text-sm  uppercase">
                Discover the Perfect Blend of Comfort and Trend with Our
                Exclusive Collection. Explore Deals on Jeans, Sneakers, and
                More!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-y-5   md:gap-x-3 w-screen md:max-w-[1208px] md:max-h-[1208px] px-6 mx-auto my-20">
              <div className=" grid grid-rows-3 gap-y-5 h-[90vh] ">
                <div className=" border-2 border-gray-300 row-span-2 relative h-full  overflow-hidden text-center  bg-gray-200 rounded-md">
                  <h1 className=" p-6 text-2xl font-bold uppercase">Jeans</h1>
                  <p className=" text-gray-500 font-normal tracking-wider px-10  text-sm">Style and comfort meet in our collection of jeans. Discover the latest trends and perfect cuts for an impeccable look.</p>
                  <Image className=" absolute w-full top-40 hover:scale-110 drop-shadow-[-3px_3px_4px_rgba(0,0,0,0.99)]" src={"/j1.avif"} alt={""} width={200} height={200}        />
                </div>
                <div className="border-2 border-gray-300 row-span-1 relative overflow-hidden h-full text-center  bg-gray-200 rounded-md">
                  <h1 className=" text-2xl font-bold uppercase p-6">Shirts</h1>
                  <Image className=" absolute w-full top-6 p-10 hover:scale-110 drop-shadow-[-3px_3px_4px_rgba(0,0,0,0.99)]" src={"/s1.avif"} alt={""} width={200} height={200}         />
                </div>                
              </div>
              <div className=" border-2 border-gray-300 relative h-[90vh]  overflow-hidden col-span-1  text-center flex-col  flex justify-center items-center bg-gray-200 rounded-md">
                <Image className=" w-full absolute -top-40 hover:scale-110 drop-shadow-[-3px_3px_4px_rgba(0,0,0,0.99)]" src={"/p1.avif"} alt={""} width={200} height={200} />
                <h1 className=" text-2xl font-bold uppercase p-6">Promotions</h1>
                <p className=" px-10 text-gray-500 font-normal tracking-wider text-sm">Explore exclusive deals on our top products. The perfect opportunity to enrich your wardrobe with trendy pieces at affordable prices.</p>
                <Image className=" w-full absolute -bottom-40 hover:scale-110 drop-shadow-[-3px_3px_4px_rgba(0,0,0,0.99)]" src={"/p2.avif"} alt={""} width={200} height={200} />
              </div>
              <div className=" grid grid-rows-3 gap-y-5 h-[90vh] ">
                <div className="border-2 border-gray-300 row-span-1 relative overflow-hidden text-center  bg-gray-200 rounded-md">
                  <h1 className=" text-2xl font-bold uppercase p-6">T-Shirts</h1>
                  
                  <Image className=" absolute top-0 w-full hover:scale-110 drop-shadow-[-3px_3px_4px_rgba(0,0,0,0.99)]" src={"/t1.avif"} alt={""} width={200} height={200}        />
                </div>
                <div className="border-2 border-gray-300 row-span-2 relative h-full overflow-hidden text-center  bg-gray-200 rounded-md">
                  <h1 className=" text-2xl font-bold uppercase p-6">sneakers</h1>
                  <p className=" px-10 text-gray-500 font-normal tracking-wider text-sm">Passion for fashion and comfort is reflected in every pair of sneakers. Experience style and functionality in a single step.</p>
                  <Image className=" absolute md:-bottom-40 -bottom-28 w-full hover:scale-110 drop-shadow-[-3px_3px_4px_rgba(0,0,0,0.99)]" src={"/ss1.avif"} alt={""} width={200} height={200}         />
                </div>                
              </div>
            </div>
          </div>
        </main>
      </section>
      <Trending />
    </>
  );
}
