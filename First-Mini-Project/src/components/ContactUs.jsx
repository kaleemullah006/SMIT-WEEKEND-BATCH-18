import React from 'react'

function ContactUs() {
  return (
    <>
      {/* ============================
            CONTACT
        ============================ */}

      <section
        id="contact"
        className="
           bg-slate-900/95
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
            CONTACT US
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
            We Are Here For You 📞
          </h2>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-2xl
              gap-4
              sm:grid-cols-2
            "
          >
            <div
              className="
                rounded-2xl
                bg-slate-900/95
                p-5
                shadow-lg
                text-white
                border
                border-white
              "
            >
              <p className="text-2xl flex justify-center">
                <img className="w-8 h-8" src="whatsapp2.png" alt="" />
              </p>

              <h3
                className="
                  mt-2
                  font-bold
                  text-white

                "
              >
                WhatsAap
              </h3>

              <p className="mt-1 text-slate-500">+92 304 2186499</p>
            </div>

            <div
              className="
                 rounded-2xl
                bg-slate-900/95
                p-5
                shadow-lg
                text-white
                border
                border-white
              "
            >
              <p className="text-2xl">📍</p>

              <h3
                className="
                  mt-2
                  font-bold
                  text-white
                "
              >
                Location
              </h3>

              <p className="mt-1 text-slate-500">Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs