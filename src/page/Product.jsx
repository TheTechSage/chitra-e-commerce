import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";

export default function Product() {
  return (
    <div>
      <div className="flex justify-center mt-4 ">
        <div className=" w-3/5 lg:w-4/5 lg:h-full md:w-4/4 max-md:w-screen max-md:p-6 max-xl:w-screen max-xl:p-10">
          <div className="flex gap-3 text-gray-500 max-md:flex-wrap">
            <a href="#">Home</a>
            <p>/</p>
            <a href="#">Unisex</a>
            <p>/</p>
            <a href="#">Round Neck Half Sleeve</a>
            <p>/</p>
            <a href="#">Unisex DEMONSLAYER Round Neck Half Sleeve... </a>
          </div>

          <div className="flex justify-between gap-10 mt-12 max-md:flex-wrap">
            <div className="w-1/12 h-full max-md:hidden">
            <Link to="/">
              <div className="border-2 border-pink-600 ">
                <img
                  src="https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png"
                  className="bg-red-800 "
                ></img>
              </div>
              </Link>
              <Link to="/">
              <div className="mt-4">
                <img
                  src="https://static-master.blinkstore.in/img/dtg-ml-rnhs-back.f2e39ba2.png"
                  className="bg-red-800 "
                ></img>
              </div>
              </Link>
            </div>
            <div className="w-5/12 h-full max-md:w-full ">
              <img
                src="https://static-master.blinkstore.in/img/dtg-ml-rnhs-back.f2e39ba2.png"
                className="bg-red-800 "
              ></img>
            </div>
            <div className="w-5/12 max-md:w-full">
              <p className="text-lg">
                Unisex DEMONSLAYER Round Neck Half Sleeve
              </p>
              <span className="text-gray-500 text-sm font-bold">
                Unisex Round Neck Half Sleeve
              </span>
              <p className="text-4xl text-pink-400 font-medium">$ 5</p>
              <div className="flex justify-between mt-12">
                <p>Size:</p>
                <u className="text-pink-400">Size Chart</u>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#">
                  <div className="w-10 h-10 rounded-full text-center p-2 bg-gray-200">
                    S
                  </div>
                </a>
                <a href="#">
                  <div className="w-10 h-10 rounded-full text-center p-2 bg-gray-200">
                    M
                  </div>
                </a>
                <a href="#">
                  <div className="w-10 h-10 rounded-full text-center p-2 bg-gray-200">
                    L
                  </div>
                </a>
                <a href="#">
                  <div className="w-10 h-10 rounded-full text-center p-2 bg-gray-200">
                    XL
                  </div>
                </a>
                <a href="#">
                  <div className="w-10 h-10 rounded-full text-center p-2 bg-gray-200">
                    2XL
                  </div>
                </a>
              </div>
              <div className="flex gap-2 mt-8">
                <p>Color:</p>
                <b>Red</b>
              </div>

              <div className="w-10 h-10 mt-4 rounded-full border-2 bg-red-800 border-black"></div>
              <Link to="#">
                <div className="h-12 w-full bg-pink-600 text-white rounded mt-10 flex justify-center items-center gap-2">
                  <BsHandbag className="text-2xl items-center" />
                  ADD TO BAG
                </div>
              </Link>
              <div className="flex text-sm text-gray-500 mt-4 gap-3">
                <MdLocalShipping className="text-3xl" />
                <b>Free shipping </b>
                <span> anywhere in india in </span>
                <b> 7-9 days</b>
              </div>
              <p className="mt-5 font-medium">REGULAR FIT</p>
              <p className="text-gray-500">
                Fits just right - not too tight, not too loose.
              </p>
              <p className="font-medium mt-4">Material</p>
              <p className="text-gray-500">
                100% Super Combed Cotton, 180 GSM, Bio Washed, Pre-Shrunk,
                Double Stitched, Regular fit, Lycra ribbed neck
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-screen text-white flex justify-center h-full bg-purple-900 mt-24 ">
        <div className="w-4/6 lg:w-4/5 py-10  max-md:w-full max-md:p-6  max-lg:w-full max-lg:p-10">
        <p className="font-bold text-2xl ">About Chitra Vichar</p>
        <p className=" mt-4 ">Welcome to Chitra Vichar! Your creative haven for personalised expression. Dive into a world where imagination meets reality. Curate your own story with our custom products. Embrace your uniqueness and explore the art of personalisation with us!   </p>
        <div className="mt-4">
        <a href="https://www.instagram.com/"><u>Instagram</u></a>
        <a href="chitravichar.in@gmail.com" className="ml-8"><u>chitravichar.in@gmail.com</u></a>
        </div>
        <hr className="mt-6"></hr>
        <div className="flex justify-between mt-6 max-md:flex-wrap">
          <div>
        <a href="#" className="text-pink-400">Powered by Blinkstore</a>
        </div>
        <div className="">
          <a href="#" className="mr-4">hi@blinkstore.in </a>
          <a href="#" className="mr-4"> Report Abuse </a>
          <a href="#" className="mr-4"> Terms & Condition </a>
          <a href="#" className="mr-4"> Privacy Policy </a>
          <a href="#"> Return/Refund/Cancellation Policy</a>
        </div>
        </div>
        </div>

      </footer>
    </div>
  );
}
