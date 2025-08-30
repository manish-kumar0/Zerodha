import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3">
        <h2 className="text-center" style={{ color: "#424242" }}>
          People
        </h2>
      </div>

      <div
        className="row p-3 text-center mb-5 "
        style={{
          lineHeight: "1.8",
          fontSize: "1.1em",
          marginLeft: "3em",
        }}
      >
        <div className="col-5 p-3 mt-4">
          <img
            src="./media/images/manishSingh.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/manish-kumar-48600030b/";
            }}
          ></img>
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Manish Singh
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            Founder, CEO
          </h6>
        </div>
        <div className="col-7 p-3 mt-5" style={{ textAlign: "left" }}>
          <p>
            Manish bootstrapped and founded Zerodha in 2010 to overcome the
            <br />
            hurdles he faced during his decade long stint as a trader. Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Manish27582827"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row p-3 text-center ">
        <div className="col-4">
          <img
            src="./media/images/Nikhil.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Nikhil Kamath
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            Co-founder & CFO
          </h6>
        </div>
        <div className="col-4">
          <img
            src="./media/images/Kailash.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Dr. Kailash Nadh
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            CTO
          </h6>
        </div>
        <div className="col-4">
          <img
            src="./media/images/Venu.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Venu Madhav
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            COO
          </h6>
        </div>
      </div>
      <div className="row p-3 text-center ">
        <div className="col-4">
          <img
            src="./media/images/Hanan.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Hanan Delvi
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            COO
          </h6>
        </div>
        <div className="col-4">
          <img
            src="./media/images/Seema.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Seema Patil
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            Director
          </h6>
        </div>
        <div className="col-4">
          <img
            src="./media/images/karthik.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Karthik Rangappa
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            Chief of Education
          </h6>
        </div>
      </div>
      <div className="row p-3 text-center ">
        <div className="col-4">
          <img
            src="./media/images/Austin.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
            onClick={() =>{window.location.href="https://www.linkedin.com/in/manish-kumar-48600030b/"}}
          />
          <h4 className="mt-3" style={{ color: "#424242" }}>
            Austin Prakesh
          </h4>
          <h6 className="mt-3" style={{ color: "#666666" }}>
            Director Strategy
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Team;
