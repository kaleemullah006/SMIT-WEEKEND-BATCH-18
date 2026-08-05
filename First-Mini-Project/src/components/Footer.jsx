import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}

      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">

              <img
                src="/restaurant.png"
                alt="Sushi Club"
                className="h-11 w-11 object-contain"
              />

              <h2 className="text-2xl font-extrabold">
                Sushi
                <span className="text-yellow-400">
                  Club
                </span>
              </h2>

            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Delicious food, fresh ingredients and fast
              delivery. Your favorite meals, delivered
              straight to your doorstep.
            </p>
          </div>

          {/* Quick Links */}

          <div className="text-center md:text-left">

            <h3 className="mb-4 text-lg font-bold text-yellow-400">
              Quick Links
            </h3>

            <div className="space-y-3 text-sm text-slate-400">

              <a
                href="/"
                className="block transition hover:text-yellow-400"
              >
                Home
              </a>

              <a
                href="#menu"
                className="block transition hover:text-yellow-400"
              >
                Menu
              </a>

              <a
                href="#about"
                className="block transition hover:text-yellow-400"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="block transition hover:text-yellow-400"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}

          <div className="text-center md:text-left">

            <h3 className="mb-4 text-lg font-bold text-yellow-400">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-slate-400">

              <p>
                📍 Karachi, Pakistan
              </p>

              <p>
                📞 +92 300 1234567
              </p>

              <p>
                ✉️ hello@sushiclub.com
              </p>

              <p>
                🕐 Mon - Sun: 11:00 AM - 11:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sushi Club.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500">

            <span className="transition hover:text-yellow-400">
              Privacy Policy
            </span>

            <span className="transition hover:text-yellow-400">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

