import mentor6 from "../../assets/m6.png";
import mentor7 from "../../assets/m7.png";
import mentor8 from "../../assets/m8.png";
import mentor9 from "../../assets/m9.png";

import cybersec from "../../assets/cybersec.jpeg";

export default function CyberSecuritymentors() {
    return(
        <>
        <section>
              <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${cybersec})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Cyber Security Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div className="lg:w-1/2">
                <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor7}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor8}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor9}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}