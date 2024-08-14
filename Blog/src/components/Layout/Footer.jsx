import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center bg-body-tertiary fixed-bottom">
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" />
            </a>
            {/* Github */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2020 Copyright
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
}
