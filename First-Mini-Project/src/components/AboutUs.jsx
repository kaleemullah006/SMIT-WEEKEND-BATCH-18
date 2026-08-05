import React from 'react'

function AboutUs() {
    return (
      <>
        {/* ============================
            ABOUT
        ============================ */}

        <section
          id="about"
          className="
              
                bg-slate-900/95
                p-5
                shadow-lg
                text-white
                border
                border-white
            px-4
            py-16
            sm:px-6
            lg:px-8
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="
              font-bold
              tracking-widest
              text-yellow-400
            "
            >
              ABOUT US
            </p>

            <h2
              className="
              mt-2
              text-3xl
              font-extrabold
              text-white
              sm:text-4xl
            "
            >
              Fresh Food, Made With Love ❤️
            </h2>

            <p
              className="
              mx-auto
              mt-5
              max-w-2xl
              leading-relaxed
              text-slate-400
            "
            >
              At Sushi Club, we believe great food should be fresh, delicious
              and easy to order. We prepare every meal with quality ingredients
              and deliver it fresh to your doorstep.
            </p>
          </div>
        </section>
      </>
    );
}

export default AboutUs